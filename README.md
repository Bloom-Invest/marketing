# marketing

## TikTok Transcript Extractor

Scripts to extract and parse transcripts from TikTok video subtitle links.

### Files

- **extract_transcripts.js** - Full extraction script for all videos
- **extract_transcripts_sample.js** - Sample extraction script for testing (processes limited number of videos)

### Usage

#### Extract Sample (Recommended for Testing)

```bash
# Process first 5 videos
node extract_transcripts_sample.js ./context/tiktok_scraper.json ./output.json 5

# Process first 20 videos
node extract_transcripts_sample.js ./context/tiktok_scraper.json ./output.json 20
```

#### Extract All Videos

```bash
# Process all videos (may take several minutes)
node extract_transcripts.js ./context/tiktok_scraper.json ./tiktok_transcripts.json
```

### How It Works

1. **Load JSON** - Reads the TikTok scraper JSON file
2. **Extract URLs** - Gets subtitle download links from `videoMeta.subtitleLinks[].downloadLink`
3. **Fetch VTT** - Downloads WebVTT subtitle files via HTTPS
4. **Parse Format** - Removes WebVTT headers, timestamps, and line numbers using regex:
   ```javascript
   /^(\d+|WEBVTT|X-TIMESTAMP|[:\d+.\-> ]+$)/
   ```
5. **Output JSON** - Saves results with video metadata + cleaned transcript text

### Output Format

```json
[
  {
    "id": "7231708961362152706",
    "author": "chrisjjosephs",
    "text": "Original video description...",
    "url": "https://www.tiktok.com/@chrisjjosephs/video/7231708961362152706",
    "createTime": "2023-05-11T00:04:29.000Z",
    "transcripts": [
      {
        "language": "eng-US",
        "source": "ASR",
        "sourceUnabbreviated": "automatic speech recognition",
        "text": "Full transcript text here..."
      }
    ]
  }
]
```

### Notes

- Videos without subtitles will have `note: "no TikTok captions"`
- Failed downloads will have `error` field in transcript object
- Multiple subtitle languages per video are supported
- Script uses Node.js built-in `https` module (no external dependencies)

---

## Instagram Video Transcript Extractor

Script to extract transcripts from Instagram videos using whisper.cpp for speech-to-text.

### Requirements

```bash
# Install dependencies
brew install jq whisper-cpp

# Download Whisper model (one-time)
whisper-cpp-download-model base
```

### Usage

```bash
# Extract transcripts from first 10 videos (default)
./extract_instagram_transcripts.sh

# Custom parameters
./extract_instagram_transcripts.sh [input_json] [output_json] [limit] [model]

# Examples:
./extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./output.json 5 base
./extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./output.json 20 small
```

### Models

- `tiny` - Fastest, ~70% accuracy, ~1GB RAM
- `base` - Very fast, ~80% accuracy, ~1GB RAM (default)
- `small` - Fast, ~90% accuracy, ~2GB RAM
- `medium` - Slower, ~95% accuracy, ~5GB RAM
- `large` - Slowest, ~98% accuracy, ~10GB RAM

### How It Works

1. **Filter videos** - Extracts only Video posts from JSON
2. **Download video** - Downloads from `videoUrl`
3. **Transcribe** - Uses whisper.cpp to extract audio and transcribe
4. **Save JSON** - Outputs video metadata + transcript text
5. **Cleanup** - Removes temporary video files

### Output Format

```json
[
  {
    "id": "3732448505328707043",
    "type": "Video",
    "caption": "Original caption...",
    "url": "https://www.instagram.com/p/DPMUiPmjiXj/",
    "ownerUsername": "username",
    "likesCount": 1234,
    "commentsCount": 56,
    "timestamp": "2025-10-01T12:00:00.000Z",
    "transcript": "Full transcribed text from video audio..."
  }
]
```

### Notes

- Script processes only Video type posts (not Images or Sidecars)
- Downloads are temporary and cleaned up after transcription
- Failed transcriptions will have `"transcript": null` and `"error"` field
- Model is downloaded once and cached in `./models/` directory
