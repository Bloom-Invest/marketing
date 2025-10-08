.PHONY: help extract-sample extract-all extract-all-parallel merge-transcripts clean extract-instagram extract-instagram-5 extract-instagram-20

help:
	@echo "Social Media Transcript Extractor - Available commands:"
	@echo ""
	@echo "TikTok:"
	@echo "  make extract-sample       Extract transcripts from first 10 TikTok videos"
	@echo "  make extract-sample-5     Extract transcripts from first 5 TikTok videos"
	@echo "  make extract-sample-20    Extract transcripts from first 20 TikTok videos"
	@echo "  make extract-all          Extract transcripts from all 1517 TikTok videos (sequential)"
	@echo "  make extract-all-parallel Extract transcripts in parallel (10 batches, much faster)"
	@echo "  make merge-transcripts    Merge batch files into single tiktok_transcripts.json"
	@echo ""
	@echo "Instagram:"
	@echo "  make extract-instagram    Extract transcripts from first 10 Instagram videos"
	@echo "  make extract-instagram-5  Extract transcripts from first 5 Instagram videos"
	@echo "  make extract-instagram-20 Extract transcripts from first 20 Instagram videos"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean                Remove all generated transcript files"
	@echo ""

extract-sample:
	@echo "Extracting TikTok transcripts from first 10 videos..."
	node scripts/extract_transcripts_sample.js "" ./full_transcripts/tiktok_transcripts_sample.json 10

extract-sample-5:
	@echo "Extracting TikTok transcripts from first 5 videos..."
	node scripts/extract_transcripts_sample.js "" ./full_transcripts/tiktok_transcripts_sample.json 5

extract-sample-20:
	@echo "Extracting TikTok transcripts from first 20 videos..."
	node scripts/extract_transcripts_sample.js "" ./full_transcripts/tiktok_transcripts_sample.json 20

extract-all:
	@echo "Extracting TikTok transcripts from all videos (English only, sequential)..."
	node scripts/extract_transcripts.js "" ./full_transcripts/tiktok_transcripts.json

extract-all-parallel:
	@echo "Extracting TikTok transcripts in parallel (English only, 10 batches)..."
	node scripts/extract_transcripts_parallel.js

merge-transcripts:
	@echo "Merging batch files into single transcript file..."
	node scripts/merge_transcripts.js

extract-instagram:
	@echo "Extracting Instagram transcripts from first 10 videos..."
	./scripts/extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./full_transcripts/instagram_transcripts.json 10 base

extract-instagram-5:
	@echo "Extracting Instagram transcripts from first 5 videos..."
	./scripts/extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./full_transcripts/instagram_transcripts.json 5 base

extract-instagram-20:
	@echo "Extracting Instagram transcripts from first 20 videos..."
	./scripts/extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./full_transcripts/instagram_transcripts.json 20 base

clean:
	@echo "Cleaning generated transcript files..."
	rm -f full_transcripts/tiktok_transcripts.json full_transcripts/tiktok_transcripts_sample.json full_transcripts/instagram_transcripts.json
	rm -f tiktok_transcripts_batch_*.json instagram_transcripts_batch_*.json
	rm -rf temp_instagram_videos models
	@echo "Done!"
