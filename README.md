# Marketing Content Analysis Toolkit

A collection of tools for extracting and analyzing transcripts from social media videos (TikTok and Instagram) to identify viral hooks, engagement patterns, and content trends.

## Project Structure

```
.
├── context/                      # Input data (scraped social media posts)
│   ├── tiktok_scraped_posts.json       # 644 TikTok videos
│   ├── tiktok_scraped_posts_2.json     # 873 TikTok videos
│   ├── instagram_scraped_posts.json    # Instagram video posts
│   └── viral_hooks.csv                 # Analyzed viral hooks
├── docs/                         # Documentation
├── full_transcripts/            # Final output files
│   ├── tiktok_transcripts.json        # All TikTok transcripts
│   └── instagram_transcripts.json     # All Instagram transcripts
├── scripts/                      # Extraction & processing scripts
│   ├── extract_transcripts.js
│   ├── extract_transcripts_sample.js
│   ├── extract_transcripts_parallel.js
│   ├── merge_transcripts.js
│   ├── extract_instagram_deepgram.js
│   ├── extract_instagram_transcripts.sh
│   └── merge_instagram_transcripts.js
├── test/                         # Test scripts
├── Makefile                      # Automation commands
└── README.md
```

## Quick Start

### View Available Commands
```bash
make help
```

## TikTok Transcript Extraction

Extract transcripts from TikTok videos using built-in subtitle links (eng-US only).

**Dataset**: 1,517 TikTok videos from context/ folder

### Usage (via Makefile)

```bash
# Test with samples
make extract-sample-5      # Process first 5 videos
make extract-sample-20     # Process first 20 videos

# Full extraction (recommended)
make extract-all-parallel  # Process all 1,517 videos in parallel (~6 minutes)
make merge-transcripts     # Merge batch files into single output

# Sequential (slower, not recommended)
make extract-all           # Process sequentially
```

### Technical Details

- **Parallel Processing**: Splits videos into 10 batches, processes simultaneously
- **English-Only**: Filters for `eng-US` subtitles to avoid redundant API calls
- **Data Preservation**: Maintains all original metadata (engagement metrics, author info, hashtags, etc.)
- **No External Dependencies**: Uses Node.js built-in `https` module

### How It Works

1. **Load JSON** - Reads both TikTok scraper JSON files (1,517 total videos)
2. **Extract URLs** - Gets English subtitle links from `videoMeta.subtitleLinks[]`
3. **Fetch VTT** - Downloads WebVTT subtitle files via HTTPS
4. **Parse Format** - Removes WebVTT headers, timestamps, and line numbers
5. **Output JSON** - Saves to `full_transcripts/tiktok_transcripts.json`

### Results

- **Total Videos**: 1,517
- **Videos with English Subtitles**: 1,172 (77%)
- **Processing Time**: ~6 minutes (parallel mode)

### Output Format

```json
[
  {
    "id": "7231708961362152706",
    "text": "Original video description...",
    "createTimeISO": "2023-05-11T00:04:29.000Z",
    "diggCount": 255800,
    "shareCount": 16700,
    "playCount": 2700000,
    "commentCount": 4122,
    "authorMeta": { "name": "chrisjjosephs", ... },
    "webVideoUrl": "https://www.tiktok.com/@chrisjjosephs/video/7231708961362152706",
    "hashtags": [...],
    "transcripts": [
      {
        "language": "eng-US",
        "source": "ASR",
        "text": "This just happened right before our very eyes..."
      }
    ]
  }
]
```

---

## Instagram Video Transcript Extraction

Extract transcripts from Instagram videos using Deepgram API (cloud-based, fast and accurate).

**Dataset**: Instagram video posts from context/ folder

### Prerequisites

- **Deepgram API Key**: Set as environment variable
  ```bash
  export DEEPGRAM_API_KEY="your_api_key_here"
  ```
- Current key stored in `extract_instagram_deepgram.js`: `eb5716412a09ea7ab943abb51a8ab0c3685524ee`

### Usage (via Makefile - Coming Soon)

```bash
# Test with samples
make extract-instagram-5       # Process first 5 videos (local whisper.cpp)
make extract-instagram-20      # Process first 20 videos (local whisper.cpp)

# Full extraction with Deepgram (not yet in Makefile)
# Run manually: node scripts/extract_instagram_deepgram_parallel.js
```

### Technical Details

- **Speech-to-Text Model**: Deepgram `nova-3` (latest, most accurate pre-recorded model)
- **Processing**: Parallel batches for faster extraction
- **Smart Skip**: Avoids re-processing already transcribed videos
- **Cost**: ~$0.0043/minute of audio (Deepgram pay-as-you-go pricing)

### Alternative: Local Processing

For free, offline transcription (slower):

```bash
# Install dependencies
brew install jq whisper-cpp

# Download model
whisper-cpp-download-model base

# Run local extraction
make extract-instagram-5
```

**Local Models:**
- `tiny` - Fastest, ~70% accuracy
- `base` - Default, ~80% accuracy
- `small` - ~90% accuracy
- `medium` - ~95% accuracy (slow)

### How It Works (Deepgram)

1. **Load data** - Reads Instagram JSON, filters Video posts
2. **Skip processed** - Checks existing output to avoid redundant API calls
3. **Split batches** - Divides videos into 10 parallel batches
4. **Send to API** - Posts `videoUrl` directly to Deepgram (no download needed)
5. **Parse response** - Extracts transcript from API response
6. **Merge results** - Combines batch files into single output

### Results (Current Status)

- **Total Videos**: 65
- **Successfully Transcribed**: 36 (55%)
- **Cost**: Consumed Deepgram credits during extraction

### Output Format

```json
[
  {
    "id": "3732448505328707043",
    "type": "Video",
    "caption": "Notable Trade Alert 🚨...",
    "url": "https://www.instagram.com/p/DPMUiPmjiXj/",
    "ownerUsername": "hedgefundinvestor",
    "likesCount": 0,
    "commentsCount": 144,
    "timestamp": "2025-10-07T14:38:53.000Z",
    "videoUrl": "https://scontent-bos5-1.cdninstagram.com/...",
    "transcript": "Full transcribed text from video audio..."
  }
]
```

---

## Marketing Use Cases

### Content Analysis
- **Viral Hook Identification**: Analyze first 3-5 seconds of transcripts to identify patterns in high-engagement videos
- **Engagement Correlation**: Cross-reference transcript patterns with `diggCount`, `playCount`, `commentCount`
- **Hashtag Performance**: Compare transcript themes with hashtag performance
- **Author Analysis**: Study top-performing creators' content styles and language patterns

### Data Insights (Current Dataset)
- **TikTok**: 1,517 videos, 1,172 with English transcripts
- **Instagram**: 65 videos, 36 transcribed
- **Engagement Metrics**: All videos include likes, shares, plays, comments
- **Metadata**: Author info, hashtags, timestamps, video dimensions

### Next Steps for Analysis
1. Extract viral hooks (first 5 seconds of transcript)
2. Correlate hook patterns with engagement metrics
3. Identify common themes in high-performing content
4. Analyze hashtag effectiveness
5. Study creator-specific patterns

---

## Cleanup

```bash
make clean  # Removes all generated transcript files and batch files
```

---

## Development Notes

### Important Paths
- All scripts in `scripts/` use `path.join(__dirname, '../...')` for relative paths
- Makefile runs from workspace root
- Output goes to `full_transcripts/` directory
- Batch files are temporary and auto-deleted after merging

### Troubleshooting
- **Deepgram 401 Error**: Check API key is set correctly
- **Deepgram Tier Error**: `flux` model requires WebSocket streaming, use `nova-3` for pre-recorded files
- **Missing batch files**: Run parallel extraction before merge
- **No duplicates**: Both TikTok and Instagram outputs are deduplicated by video ID
