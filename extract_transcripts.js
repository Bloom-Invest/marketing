const fs = require('fs');
const https = require('https');

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
 * Extract transcripts from TikTok scraper JSON
 * @param {string|string[]} inputFiles - Path(s) to tiktok_scraper.json
 * @param {string} outputFile - Path to save transcripts
 */
async function extractTranscripts(inputFiles, outputFile) {
  const videos = loadVideos(inputFiles);

  console.log(`\nProcessing ${videos.length} total videos...`);
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

    withSubtitles++;

    // Process each subtitle language
    for (const subtitleInfo of subtitleLinks) {
      const url = subtitleInfo.downloadLink || subtitleInfo.tiktokLink;

      if (!url) {
        continue;
      }

      try {
        console.log(`  [${processed}/${videos.length}] Fetching ${subtitleInfo.language} for video ${video.id}...`);
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
        console.error(`  Error fetching subtitle for video ${video.id}: ${err.message}`);
        videoData.transcripts.push({
          language: subtitleInfo.language,
          error: err.message
        });
      }
    }

    results.push(videoData);
  }

  // Save results
  console.log(`\nSaving results to ${outputFile}...`);
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  console.log(`\nCompleted!`);
  console.log(`  Total videos: ${processed}`);
  console.log(`  Videos with subtitles: ${withSubtitles}`);
  console.log(`  Errors: ${errors}`);
  console.log(`  Output: ${outputFile}`);
}

// Main execution
const inputFiles = process.argv[2]
  ? [process.argv[2]]
  : ['./context/tiktok_scraped_posts.json', './context/tiktok_scraped_posts_2.json'];
const outputFile = process.argv[3] || './tiktok_transcripts.json';

extractTranscripts(inputFiles, outputFile)
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
