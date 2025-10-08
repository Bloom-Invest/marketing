.PHONY: help extract-sample extract-all clean extract-instagram extract-instagram-5 extract-instagram-20

help:
	@echo "Social Media Transcript Extractor - Available commands:"
	@echo ""
	@echo "TikTok:"
	@echo "  make extract-sample       Extract transcripts from first 10 TikTok videos"
	@echo "  make extract-sample-5     Extract transcripts from first 5 TikTok videos"
	@echo "  make extract-sample-20    Extract transcripts from first 20 TikTok videos"
	@echo "  make extract-all          Extract transcripts from all 1517 TikTok videos"
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
	node extract_transcripts_sample.js "" ./tiktok_transcripts_sample.json 10

extract-sample-5:
	@echo "Extracting TikTok transcripts from first 5 videos..."
	node extract_transcripts_sample.js "" ./tiktok_transcripts_sample.json 5

extract-sample-20:
	@echo "Extracting TikTok transcripts from first 20 videos..."
	node extract_transcripts_sample.js "" ./tiktok_transcripts_sample.json 20

extract-all:
	@echo "Extracting TikTok transcripts from all videos (this may take several minutes)..."
	node extract_transcripts.js "" ./tiktok_transcripts.json

extract-instagram:
	@echo "Extracting Instagram transcripts from first 10 videos..."
	./extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./instagram_transcripts.json 10 base

extract-instagram-5:
	@echo "Extracting Instagram transcripts from first 5 videos..."
	./extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./instagram_transcripts.json 5 base

extract-instagram-20:
	@echo "Extracting Instagram transcripts from first 20 videos..."
	./extract_instagram_transcripts.sh ./context/instagram_scraped_posts.json ./instagram_transcripts.json 20 base

clean:
	@echo "Cleaning generated transcript files..."
	rm -f tiktok_transcripts.json tiktok_transcripts_sample.json instagram_transcripts.json
	rm -rf temp_instagram_videos models
	@echo "Done!"
