#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load Instagram transcripts
const transcriptsPath = path.join(__dirname, '../data/full_transcripts/instagram_transcripts.json');
const data = JSON.parse(fs.readFileSync(transcriptsPath, 'utf8'));

console.log(`Total videos: ${data.length}`);

// Filter videos with transcripts
const withTranscripts = data.filter(v => v.transcript && v.transcript.trim().length > 0);
console.log(`Videos with transcripts: ${withTranscripts.length}\n`);

// Sort by engagement (comments count as proxy for engagement)
const sorted = withTranscripts.sort((a, b) => (b.commentsCount || 0) - (a.commentsCount || 0));

console.log('=== TOP 10 MOST ENGAGING VIDEOS ===\n');

sorted.slice(0, 10).forEach((video, idx) => {
  const transcript = video.transcript.substring(0, 300);
  const hook = video.transcript.substring(0, 150);

  console.log(`${idx + 1}. Video ID: ${video.id}`);
  console.log(`   URL: ${video.url}`);
  console.log(`   Comments: ${video.commentsCount || 0}`);
  console.log(`   Caption: ${(video.caption || '').substring(0, 100)}...`);
  console.log(`   Opening Hook: "${hook}..."`);
  console.log(`   Full Preview: "${transcript}..."`);
  console.log(`   Transcript Length: ${video.transcript.length} chars`);
  console.log('');
});

// Analyze common patterns
console.log('\n=== VIRAL PATTERN ANALYSIS ===\n');

// Analyze opening words
const openingWords = sorted.slice(0, 20).map(v => {
  const words = v.transcript.split(' ').slice(0, 5).join(' ');
  return words.toLowerCase();
});

console.log('Common opening phrases (top 20 videos):');
openingWords.forEach((words, idx) => {
  console.log(`${idx + 1}. "${words}..."`);
});

// Analyze length
const avgLength = sorted.slice(0, 20).reduce((sum, v) => sum + v.transcript.length, 0) / 20;
console.log(`\nAverage transcript length (top 20): ${Math.round(avgLength)} characters`);

// Word frequency analysis
console.log('\n=== WORD FREQUENCY (Top 20 Videos) ===\n');
const allText = sorted.slice(0, 20).map(v => v.transcript.toLowerCase()).join(' ');
const words = allText.split(/\s+/);
const wordFreq = {};

words.forEach(word => {
  const cleaned = word.replace(/[^a-z0-9]/g, '');
  if (cleaned.length > 3) {  // Skip short words
    wordFreq[cleaned] = (wordFreq[cleaned] || 0) + 1;
  }
});

const topWords = Object.entries(wordFreq)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30);

topWords.forEach(([word, count]) => {
  console.log(`${word}: ${count}`);
});

// Export detailed analysis
const analysis = {
  totalVideos: data.length,
  withTranscripts: withTranscripts.length,
  top10: sorted.slice(0, 10).map(v => ({
    id: v.id,
    url: v.url,
    commentsCount: v.commentsCount,
    caption: v.caption,
    hook: v.transcript.substring(0, 150),
    fullTranscript: v.transcript,
    transcriptLength: v.transcript.length
  })),
  topWords: topWords
};

const outputPath = path.join(__dirname, '../ideas/viral_analysis.json');
fs.writeFileSync(outputPath, JSON.stringify(analysis, null, 2));
console.log(`\nDetailed analysis saved to: ${outputPath}`);
