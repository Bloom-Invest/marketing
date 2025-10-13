#!/bin/bash

# Instagram Video Transcript Extractor using whisper.cpp
# Usage: ./extract_instagram_transcripts.sh [input_json] [output_json] [limit] [model]

set -e

INPUT_JSON="${1:-./context/instagram_scraped_posts.json}"
OUTPUT_JSON="${2:-./instagram_transcripts.json}"
LIMIT="${3:-10}"
MODEL="${4:-base}"

TEMP_DIR="./temp_instagram_videos"
WHISPER_MODEL="./models/ggml-${MODEL}.bin"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Instagram Video Transcript Extractor"
echo "===================================="
echo ""

# Check dependencies
check_dependencies() {
    echo "Checking dependencies..."

    if ! command -v jq &> /dev/null; then
        echo -e "${RED}Error: jq is not installed${NC}"
        echo "Install with: brew install jq"
        exit 1
    fi

    if ! command -v curl &> /dev/null; then
        echo -e "${RED}Error: curl is not installed${NC}"
        exit 1
    fi

    if ! command -v whisper-cpp &> /dev/null; then
        echo -e "${RED}Error: whisper-cpp is not installed${NC}"
        echo "Install with: brew install whisper-cpp"
        exit 1
    fi

    echo -e "${GREEN}✓ All dependencies found${NC}"
    echo ""
}

# Download whisper model if needed
setup_model() {
    echo "Setting up Whisper model..."

    if [ ! -f "$WHISPER_MODEL" ]; then
        echo "Downloading ${MODEL} model..."
        mkdir -p models
        whisper-cpp-download-model "$MODEL"

        # Move model to expected location
        if [ -f "ggml-${MODEL}.bin" ]; then
            mv "ggml-${MODEL}.bin" "$WHISPER_MODEL"
        fi
    fi

    echo -e "${GREEN}✓ Model ready: $WHISPER_MODEL${NC}"
    echo ""
}

# Create temp directory
mkdir -p "$TEMP_DIR"

# Extract video posts and download + transcribe
echo "Processing Instagram videos..."
echo "Input: $INPUT_JSON"
echo "Output: $OUTPUT_JSON"
echo "Limit: $LIMIT videos"
echo "Model: $MODEL"
echo ""

check_dependencies
setup_model

# Process videos
jq -c --arg limit "$LIMIT" '
    [.[] | select(.type == "Video")] |
    .[:($limit | tonumber)] |
    .[] |
    {
        id: .id,
        type: .type,
        shortCode: .shortCode,
        caption: .caption,
        hashtags: .hashtags,
        mentions: .mentions,
        url: .url,
        videoUrl: .videoUrl,
        commentsCount: .commentsCount,
        likesCount: .likesCount,
        timestamp: .timestamp,
        ownerUsername: .ownerUsername,
        ownerFullName: .ownerFullName,
        ownerId: .ownerId
    }
' "$INPUT_JSON" > "$TEMP_DIR/videos_to_process.jsonl"

TOTAL=$(wc -l < "$TEMP_DIR/videos_to_process.jsonl" | tr -d ' ')
CURRENT=0
TRANSCRIBED=0
ERRORS=0

echo "[" > "$OUTPUT_JSON"

while IFS= read -r video_json; do
    CURRENT=$((CURRENT + 1))

    VIDEO_ID=$(echo "$video_json" | jq -r '.id')
    VIDEO_URL=$(echo "$video_json" | jq -r '.videoUrl')
    USERNAME=$(echo "$video_json" | jq -r '.ownerUsername')

    echo -e "${YELLOW}[$CURRENT/$TOTAL]${NC} Processing video $VIDEO_ID (@$USERNAME)..."

    VIDEO_FILE="$TEMP_DIR/${VIDEO_ID}.mp4"
    AUDIO_FILE="$TEMP_DIR/${VIDEO_ID}.wav"
    TRANSCRIPT_FILE="$TEMP_DIR/${VIDEO_ID}.wav.txt"

    # Download video
    if curl -L -s -o "$VIDEO_FILE" "$VIDEO_URL" 2>/dev/null; then
        echo "  ✓ Downloaded video"

        # Transcribe directly (whisper-cpp handles audio extraction)
        if whisper-cpp -m "$WHISPER_MODEL" -f "$VIDEO_FILE" -otxt -np 2>/dev/null; then
            echo "  ✓ Transcribed audio"
            TRANSCRIBED=$((TRANSCRIBED + 1))

            # Read transcript
            if [ -f "$VIDEO_FILE.txt" ]; then
                TRANSCRIPT=$(cat "$VIDEO_FILE.txt" | tr -d '\n' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

                # Add to output JSON
                if [ $CURRENT -gt 1 ]; then
                    echo "," >> "$OUTPUT_JSON"
                fi

                echo "$video_json" | jq --arg transcript "$TRANSCRIPT" '. + {transcript: $transcript}' >> "$OUTPUT_JSON"

                echo -e "  ${GREEN}✓ Transcript: ${TRANSCRIPT:0:80}...${NC}"
            else
                echo -e "  ${RED}✗ Transcript file not found${NC}"
                ERRORS=$((ERRORS + 1))

                if [ $CURRENT -gt 1 ]; then
                    echo "," >> "$OUTPUT_JSON"
                fi
                echo "$video_json" | jq '. + {transcript: null, error: "transcript file not found"}' >> "$OUTPUT_JSON"
            fi
        else
            echo -e "  ${RED}✗ Transcription failed${NC}"
            ERRORS=$((ERRORS + 1))

            if [ $CURRENT -gt 1 ]; then
                echo "," >> "$OUTPUT_JSON"
            fi
            echo "$video_json" | jq '. + {transcript: null, error: "transcription failed"}' >> "$OUTPUT_JSON"
        fi

        # Cleanup
        rm -f "$VIDEO_FILE" "$VIDEO_FILE.txt" "$AUDIO_FILE"
    else
        echo -e "  ${RED}✗ Download failed${NC}"
        ERRORS=$((ERRORS + 1))

        if [ $CURRENT -gt 1 ]; then
            echo "," >> "$OUTPUT_JSON"
        fi
        echo "$video_json" | jq '. + {transcript: null, error: "download failed"}' >> "$OUTPUT_JSON"
    fi

    echo ""
done < "$TEMP_DIR/videos_to_process.jsonl"

echo "]" >> "$OUTPUT_JSON"

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
echo "===================================="
echo -e "${GREEN}Completed!${NC}"
echo "  Total videos: $TOTAL"
echo "  Transcribed: $TRANSCRIBED"
echo "  Errors: $ERRORS"
echo "  Output: $OUTPUT_JSON"
