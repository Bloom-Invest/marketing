const https = require('https');
const fs = require('fs');

const API_KEY = 'eb5716412a09ea7ab943abb51a8ab0c3685524ee';

async function transcribe(url) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ url });
    const options = {
      hostname: 'api.deepgram.com',
      path: '/v1/listen?model=nova-3&smart_format=true',
      method: 'POST',
      headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          const transcript = result.results?.channels?.[0]?.alternatives?.[0]?.transcript;
          resolve(transcript || null);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function processBatch(videos, batchNum, outputFile) {
  console.log(`[Batch ${batchNum}] Processing ${videos.length} videos...`);
  const results = [];

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];

    // Skip if already has transcript
    if (video.transcript) {
      console.log(`[Batch ${batchNum}] Skipping ${video.id} - already processed`);
      results.push(video);
      continue;
    }

    if (i % 10 === 0 && i > 0) {
      console.log(`[Batch ${batchNum}] Progress: ${i}/${videos.length}`);
    }

    try {
      const transcript = await transcribe(video.videoUrl);
      results.push({ ...video, transcript });
    } catch (error) {
      results.push({ ...video, transcript: null, error: error.message });
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`[Batch ${batchNum}] Done! Saved to ${outputFile}`);
}

async function main() {
  const allPosts = JSON.parse(fs.readFileSync('./context/instagram_scraped_posts.json', 'utf-8'));
  let videos = allPosts.filter(p => p.type === 'Video' && p.videoUrl);

  console.log(`Found ${videos.length} Instagram videos`);

  // Load existing transcripts from batch files and merged file
  const existingIds = new Set();

  // Check batch files
  for (let i = 1; i <= 10; i++) {
    const batchFile = `./instagram_transcripts_batch_${i}.json`;
    if (fs.existsSync(batchFile)) {
      const batch = JSON.parse(fs.readFileSync(batchFile, 'utf-8'));
      batch.forEach(v => {
        if (v.transcript) {
          existingIds.add(v.id);
        }
      });
    }
  }

  // Check merged file
  if (fs.existsSync('./instagram_transcripts.json')) {
    const merged = JSON.parse(fs.readFileSync('./instagram_transcripts.json', 'utf-8'));
    merged.forEach(v => {
      if (v.transcript) {
        existingIds.add(v.id);
      }
    });
  }

  console.log(`Found ${existingIds.size} already processed videos`);

  // Filter out already processed videos
  videos = videos.filter(v => !existingIds.has(v.id));

  console.log(`${videos.length} videos remaining to process`);

  if (videos.length === 0) {
    console.log('All videos already processed!');
    return;
  }

  console.log('Splitting into 10 batches...\n');

  const batchSize = Math.ceil(videos.length / 10);
  const promises = [];

  for (let i = 0; i < 10; i++) {
    const start = i * batchSize;
    const end = Math.min(start + batchSize, videos.length);
    const batch = videos.slice(start, end);

    if (batch.length === 0) continue;

    const outputFile = `./instagram_transcripts_batch_${i + 1}.json`;

    promises.push(processBatch(batch, i + 1, outputFile));
  }

  await Promise.all(promises);

  console.log('\n✅ All batches complete!');
  console.log('Run: node merge_instagram_transcripts.js');
}

main().catch(console.error);
