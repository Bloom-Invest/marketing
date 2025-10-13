const fs = require('fs');
const path = require('path');

console.log('Merging Instagram transcript batches...');

const allTranscripts = [];
const batchFiles = [];

// Look for batch files in parent directory
const parentDir = path.join(__dirname, '..');

for (let i = 1; i <= 10; i++) {
  const batchFile = path.join(parentDir, `instagram_transcripts_batch_${i}.json`);
  if (fs.existsSync(batchFile)) {
    const batch = JSON.parse(fs.readFileSync(batchFile, 'utf-8'));
    console.log(`Loaded instagram_transcripts_batch_${i}.json: ${batch.length} videos`);
    allTranscripts.push(...batch);
    batchFiles.push(batchFile);
  }
}

console.log(`\nTotal: ${allTranscripts.length} videos`);
const outputFile = path.join(parentDir, 'data', 'full_transcripts', 'instagram_transcripts.json');
fs.writeFileSync(outputFile, JSON.stringify(allTranscripts, null, 2));
console.log('Saved to data/full_transcripts/instagram_transcripts.json');

console.log('\nCleaning up batch files...');
batchFiles.forEach(f => {
  fs.unlinkSync(f);
  console.log(`  Deleted ${path.basename(f)}`);
});

console.log('\n✅ Done!');
