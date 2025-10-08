const fs = require('fs');
const https = require('https');
const { spawn } = require('child_process');

/**
 * Parse WebVTT subtitle content and extract clean transcript text
 * @param {string} vtt - WebVTT subtitle content
 * @returns {string|null} - Cleaned transcript text or null if empty
 */
function parseVTT(vtt) {
  if (!vtt) {
    return null;
  }

  const lines = vtt
    .split(/\r?\n/)
    .filter(l => l && !l.match(/^(\d+|WEBVTT|X-TIMESTAMP|[:\d+.\-> ]+$)/));

  return lines.length > 0 ? lines.join(" ") : null;
}

/**
 * Fetch content from URL using https
 * @param {string} url - URL to fetch
 * @returns {Promise<string>} - Response body
 */
function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Load videos from multiple TikTok JSON files
 * @param {string|string[]} inputFiles - Path(s) to TikTok JSON file(s)
 * @returns {Array} - Combined array of videos
 */
function loadVideos(inputFiles) {
  const files = Array.isArray(inputFiles) ? inputFiles : [inputFiles];
  let allVideos = [];

  for (const file of files) {
    if (fs.existsSync(file)) {
      console.log(`Loading ${file}...`);
      const videos = JSON.parse(fs.readFileSync(file, 'utf-8'));
      console.log(`  Found ${videos.length} videos`);
      allVideos = allVideos.concat(videos);
    } else {
      console.warn(`Warning: ${file} not found, skipping...`);
    }
  }

  return allVideos;
}

/**
 * Extract transcripts from a batch of videos
 * @param {Array} videos - Array of video objects
 * @param {string} outputFile - Path to save transcripts
 * @param {number} batchNum - Batch number for logging
 */
async function extractBatch(videos, outputFile, batchNum) {
  console.log(`[Batch ${batchNum}] Processing ${videos.length} videos...`);
  const results = [];
  let processed = 0;
  let withSubtitles = 0;
  let errors = 0;

  for (const video of videos) {
    processed++;

    const videoData = {
      id: video.id,
      text: video.text || '',
      textLanguage: video.textLanguage,
      createTime: video.createTime,
      createTimeISO: video.createTimeISO,
      isAd: video.isAd,
      authorMeta: video.authorMeta,
      musicMeta: video.musicMeta,
      webVideoUrl: video.webVideoUrl,
      videoMeta: {
        height: video.videoMeta?.height,
        width: video.videoMeta?.width,
        duration: video.videoMeta?.duration,
        coverUrl: video.videoMeta?.coverUrl,
        definition: video.videoMeta?.definition,
        format: video.videoMeta?.format
      },
      diggCount: video.diggCount,
      shareCount: video.shareCount,
      playCount: video.playCount,
      collectCount: video.collectCount,
      commentCount: video.commentCount,
      mentions: video.mentions,
      hashtags: video.hashtags,
      effectStickers: video.effectStickers,
      transcripts: []
    };

    // Check if video has subtitles
    const subtitleLinks = video.videoMeta?.subtitleLinks || [];

    if (subtitleLinks.length === 0) {
      videoData.note = "no TikTok captions";
      results.push(videoData);
      continue;
    }

    // Process only English subtitles
    const englishSubtitles = subtitleLinks.filter(s => s.language === 'eng-US');

    if (englishSubtitles.length === 0) {
      videoData.note = "no English captions";
      results.push(videoData);
      continue;
    }

    withSubtitles++;

    for (const subtitleInfo of englishSubtitles) {
      const url = subtitleInfo.downloadLink || subtitleInfo.tiktokLink;

      if (!url) {
        continue;
      }

      try {
        if (processed % 10 === 0) {
          console.log(`[Batch ${batchNum}] Progress: ${processed}/${videos.length}`);
        }
        const vtt = await fetchURL(url);
        const transcript = parseVTT(vtt);

        videoData.transcripts.push({
          language: subtitleInfo.language,
          source: subtitleInfo.source,
          sourceUnabbreviated: subtitleInfo.sourceUnabbreviated,
          text: transcript
        });
      } catch (err) {
        errors++;
        videoData.transcripts.push({
          language: subtitleInfo.language,
          error: err.message
        });
      }
    }

    results.push(videoData);
  }

  // Save results
  console.log(`[Batch ${batchNum}] Saving results to ${outputFile}...`);
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  console.log(`[Batch ${batchNum}] Completed!`);
  console.log(`  Total videos: ${processed}`);
  console.log(`  Videos with English subtitles: ${withSubtitles}`);
  console.log(`  Errors: ${errors}`);
}

/**
 * Process videos in parallel batches
 */
async function processInParallel() {
  const path = require('path');
  const inputFiles = [
    path.join(__dirname, '../context/tiktok_scraped_posts.json'),
    path.join(__dirname, '../context/tiktok_scraped_posts_2.json')
  ];
  const allVideos = loadVideos(inputFiles);
  const numBatches = 10;
  const batchSize = Math.ceil(allVideos.length / numBatches);

  console.log(`\nSplitting ${allVideos.length} videos into ${numBatches} batches (~${batchSize} videos each)...`);
  console.log(`Starting parallel processing...\n`);

  const batches = [];
  for (let i = 0; i < numBatches; i++) {
    const start = i * batchSize;
    const end = Math.min(start + batchSize, allVideos.length);
    const batchVideos = allVideos.slice(start, end);
    const outputFile = path.join(__dirname, `../tiktok_transcripts_batch_${i + 1}.json`);

    batches.push({
      videos: batchVideos,
      outputFile,
      batchNum: i + 1
    });
  }

  // Process all batches in parallel
  const promises = batches.map(batch =>
    extractBatch(batch.videos, batch.outputFile, batch.batchNum)
  );

  await Promise.all(promises);

  console.log(`\n${'='.repeat(50)}`);
  console.log(`All batches completed!`);
  console.log(`Output files:`);
  for (let i = 1; i <= numBatches; i++) {
    console.log(`  - tiktok_transcripts_batch_${i}.json`);
  }
  console.log(`\nTo merge all batches into one file, run:`);
  console.log(`  node scripts/merge_transcripts.js`);
}

// Main execution
if (require.main === module) {
  processInParallel()
    .catch(err => {
      console.error('Fatal error:', err);
      process.exit(1);
    });
}

module.exports = { extractBatch, loadVideos };
