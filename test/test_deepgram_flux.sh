#!/bin/bash

# Test Deepgram Flux on one Instagram video

DEEPGRAM_API_KEY="70efb64932f708df0bddf0c731827435b5aa8582"

# Get first video URL from Instagram JSON
VIDEO_URL=$(node -e "
const data = require('./context/instagram_scraped_posts.json');
const video = data.find(p => p.type === 'Video' && p.videoUrl);
console.log(video.videoUrl);
")

echo "Testing Deepgram Flux on Instagram video..."
echo "Video URL: ${VIDEO_URL:0:80}..."

# Call Deepgram API with Flux model
curl -X POST \
  -H "Authorization: Token $DEEPGRAM_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"url\":\"$VIDEO_URL\"}" \
  "https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true" \
  | jq -r '.results.channels[0].alternatives[0].transcript'
