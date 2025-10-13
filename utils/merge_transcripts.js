const fs = require('fs');
const path = require('path');

console.log('Merging TikTok transcript batches...');

const allTranscripts = [];
const batchFiles = [];
let batchNum = 1;

// Look for batch files in parent directory
const parentDir = path.join(__dirname, '..');

while (true) {
  const batchFile = path.join(parentDir, `tiktok_transcripts_batch_${batchNum}.json`);

  if (!fs.existsSync(batchFile)) {
    break;
  }

  console.log(`Loading ${batchFile}...`);
  const batch = JSON.parse(fs.readFileSync(batchFile, 'utf-8'));
  console.log(`  Found ${batch.length} videos`);

  allTranscripts.push(...batch);
  batchFiles.push(batchFile);
  batchNum++;
}

if (allTranscripts.length === 0) {
  console.error('No batch files found! Run extract_transcripts_parallel.js first.');
  process.exit(1);
}

console.log(`\nTotal videos: ${allTranscripts.length}`);
console.log('Saving to data/full_transcripts/tiktok_transcripts.json...');

const outputFile = path.join(parentDir, 'data', 'full_transcripts', 'tiktok_transcripts.json');
fs.writeFileSync(outputFile, JSON.stringify(allTranscripts, null, 2));

console.log('Done! Output saved to data/full_transcripts/tiktok_transcripts.json');

// Clean up batch files
console.log('\nCleaning up batch files...');
for (const batchFile of batchFiles) {
  fs.unlinkSync(batchFile);
  console.log(`  Deleted ${batchFile}`);
}

console.log('\nAll done!');
