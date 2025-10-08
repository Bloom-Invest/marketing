const https = require('https');
const fs = require('fs');

const API_KEY = 'eb5716412a09ea7ab943abb51a8ab0c3685524ee';

// Load first Instagram video
const videos = JSON.parse(fs.readFileSync('./context/instagram_scraped_posts.json', 'utf-8'));
const video = videos.find(v => v.type === 'Video' && v.videoUrl);

console.log('Testing Deepgram Flux on Instagram video...');
console.log('Video ID:', video.id);
console.log('Caption:', video.caption.substring(0, 80) + '...\n');

// Call Deepgram API
const data = JSON.stringify({ url: video.videoUrl });
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
    const result = JSON.parse(body);
    if (result.results?.channels?.[0]?.alternatives?.[0]?.transcript) {
      console.log('✅ Transcript:');
      console.log(result.results.channels[0].alternatives[0].transcript);
    } else {
      console.log('❌ Error:', JSON.stringify(result, null, 2));
    }
  });
});

req.on('error', (e) => console.error('Error:', e));
req.write(data);
req.end();
