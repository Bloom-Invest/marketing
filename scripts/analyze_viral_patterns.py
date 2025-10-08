#!/usr/bin/env python3
"""
Analyze TikTok transcripts to identify viral content patterns.
"""

import json
import statistics
from collections import defaultdict, Counter
from datetime import datetime
import re

def load_data(file_path):
    """Load TikTok transcripts data."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def calculate_engagement_rate(video):
    """Calculate various engagement metrics."""
    play_count = video.get('playCount', 0)
    if play_count == 0:
        return None

    return {
        'engagement_rate': (video.get('diggCount', 0) + video.get('commentCount', 0) + video.get('shareCount', 0)) / play_count,
        'like_rate': video.get('diggCount', 0) / play_count,
        'comment_rate': video.get('commentCount', 0) / play_count,
        'share_rate': video.get('shareCount', 0) / play_count,
        'total_engagement': video.get('diggCount', 0) + video.get('commentCount', 0) + video.get('shareCount', 0),
    }

def get_opening_hook(transcript_text, seconds=10):
    """Extract first ~10 seconds of transcript (roughly 30-40 words)."""
    if not transcript_text:
        return ""
    words = transcript_text.split()
    # Assume ~3 words per second
    word_count = seconds * 3
    return ' '.join(words[:word_count])

def categorize_by_performance(videos):
    """Categorize videos by engagement performance."""
    valid_videos = [v for v in videos if calculate_engagement_rate(v) is not None]

    # Sort by engagement rate
    valid_videos.sort(key=lambda v: calculate_engagement_rate(v)['engagement_rate'], reverse=True)

    total = len(valid_videos)
    top_10_pct = valid_videos[:int(total * 0.1)]
    top_25_pct = valid_videos[:int(total * 0.25)]
    mid_tier = valid_videos[int(total * 0.25):int(total * 0.75)]
    bottom_25_pct = valid_videos[int(total * 0.75):]

    return {
        'top_10': top_10_pct,
        'top_25': top_25_pct,
        'mid_tier': mid_tier,
        'bottom_25': bottom_25_pct,
        'all': valid_videos
    }

def analyze_hook_patterns(videos, category_name):
    """Analyze opening hook patterns."""
    hooks = []
    question_starts = 0
    statement_starts = 0
    imperative_starts = 0  # "Watch this", "Look at", etc.

    question_words = ['what', 'why', 'how', 'when', 'where', 'who', 'which', 'do', 'does', 'did', 'can', 'could', 'would', 'should', 'is', 'are', 'was', 'were']
    imperative_words = ['watch', 'look', 'see', 'check', 'listen', 'wait', 'imagine', 'think', 'remember', 'never', 'always', 'stop']

    for video in videos:
        transcript_text = ""
        if video.get('transcripts'):
            transcript_text = video['transcripts'][0].get('text', '')

        if not transcript_text:
            continue

        hook = get_opening_hook(transcript_text, 10).lower()
        hooks.append({
            'text': hook,
            'full_transcript': transcript_text,
            'engagement': calculate_engagement_rate(video),
            'video_url': video.get('webVideoUrl', ''),
            'author': video.get('authorMeta', {}).get('name', ''),
            'likes': video.get('diggCount', 0),
            'plays': video.get('playCount', 0),
            'shares': video.get('shareCount', 0),
            'comments': video.get('commentCount', 0)
        })

        first_word = hook.split()[0] if hook.split() else ''
        first_three_words = ' '.join(hook.split()[:3])

        if first_word in question_words or '?' in hook:
            question_starts += 1
        elif first_word in imperative_words or first_three_words.startswith(tuple(imperative_words)):
            imperative_starts += 1
        else:
            statement_starts += 1

    total = len(hooks)
    return {
        'category': category_name,
        'total_analyzed': total,
        'question_hooks': question_starts,
        'question_pct': (question_starts / total * 100) if total > 0 else 0,
        'imperative_hooks': imperative_starts,
        'imperative_pct': (imperative_starts / total * 100) if total > 0 else 0,
        'statement_hooks': statement_starts,
        'statement_pct': (statement_starts / total * 100) if total > 0 else 0,
        'sample_hooks': hooks[:10]  # Top 10 from category
    }

def analyze_content_length(videos):
    """Analyze video length patterns."""
    length_engagement = defaultdict(list)

    for video in videos:
        duration = video.get('videoMeta', {}).get('duration', 0)
        engagement = calculate_engagement_rate(video)
        if engagement and duration > 0:
            # Bucket by 5-second intervals
            bucket = (duration // 5) * 5
            length_engagement[bucket].append(engagement['engagement_rate'])

    # Calculate average engagement per length bucket
    length_stats = {}
    for length, rates in sorted(length_engagement.items()):
        if len(rates) >= 5:  # Only include buckets with enough samples
            length_stats[length] = {
                'avg_engagement': statistics.mean(rates),
                'median_engagement': statistics.median(rates),
                'sample_size': len(rates)
            }

    return length_stats

def extract_common_themes(videos, top_n=20):
    """Extract common themes from hashtags and descriptions."""
    hashtag_engagement = defaultdict(list)
    word_frequency = Counter()

    for video in videos:
        engagement = calculate_engagement_rate(video)
        if not engagement:
            continue

        # Analyze hashtags
        hashtags = video.get('hashtags', [])
        for tag in hashtags:
            if tag:
                tag_str = tag.get('name', '') if isinstance(tag, dict) else str(tag)
                if tag_str:
                    hashtag_engagement[tag_str.lower()].append(engagement['engagement_rate'])

        # Analyze description words
        text = video.get('text', '')
        transcript_text = ""
        if video.get('transcripts'):
            transcript_text = video['transcripts'][0].get('text', '')

        combined_text = f"{text} {transcript_text}".lower()
        words = re.findall(r'\b[a-z]+\b', combined_text)
        word_frequency.update(words)

    # Find best performing hashtags
    hashtag_stats = {}
    for tag, rates in hashtag_engagement.items():
        if len(rates) >= 5:  # Minimum sample size
            hashtag_stats[tag] = {
                'avg_engagement': statistics.mean(rates),
                'usage_count': len(rates)
            }

    # Sort by engagement
    top_hashtags = sorted(hashtag_stats.items(), key=lambda x: x[1]['avg_engagement'], reverse=True)[:top_n]

    return {
        'top_hashtags': top_hashtags,
        'common_words': word_frequency.most_common(50)
    }

def compare_engagement_metrics(categorized_videos):
    """Compare engagement metrics across performance tiers."""
    results = {}

    for category, videos in categorized_videos.items():
        if category == 'all':
            continue

        engagement_rates = [calculate_engagement_rate(v)['engagement_rate'] for v in videos if calculate_engagement_rate(v)]
        like_rates = [calculate_engagement_rate(v)['like_rate'] for v in videos if calculate_engagement_rate(v)]
        comment_rates = [calculate_engagement_rate(v)['comment_rate'] for v in videos if calculate_engagement_rate(v)]
        share_rates = [calculate_engagement_rate(v)['share_rate'] for v in videos if calculate_engagement_rate(v)]

        if engagement_rates:
            results[category] = {
                'avg_engagement_rate': statistics.mean(engagement_rates),
                'avg_like_rate': statistics.mean(like_rates),
                'avg_comment_rate': statistics.mean(comment_rates),
                'avg_share_rate': statistics.mean(share_rates),
                'median_engagement_rate': statistics.median(engagement_rates)
            }

    return results

def analyze_author_patterns(videos):
    """Analyze patterns by top authors."""
    author_stats = defaultdict(lambda: {
        'videos': 0,
        'total_engagement': 0,
        'total_plays': 0,
        'engagement_rates': []
    })

    for video in videos:
        author = video.get('authorMeta', {}).get('name', '')
        if not author:
            continue

        engagement = calculate_engagement_rate(video)
        if not engagement:
            continue

        author_stats[author]['videos'] += 1
        author_stats[author]['total_engagement'] += engagement['total_engagement']
        author_stats[author]['total_plays'] += video.get('playCount', 0)
        author_stats[author]['engagement_rates'].append(engagement['engagement_rate'])

    # Calculate averages and filter for authors with multiple videos
    author_results = {}
    for author, stats in author_stats.items():
        if stats['videos'] >= 3:  # At least 3 videos
            author_results[author] = {
                'video_count': stats['videos'],
                'avg_engagement_rate': statistics.mean(stats['engagement_rates']),
                'total_plays': stats['total_plays'],
                'total_engagement': stats['total_engagement']
            }

    # Sort by average engagement rate
    top_authors = sorted(author_results.items(), key=lambda x: x[1]['avg_engagement_rate'], reverse=True)[:15]

    return top_authors

def main():
    print("Loading TikTok transcripts data...")
    data = load_data('../full_transcripts/tiktok_transcripts.json')
    print(f"Loaded {len(data)} videos with transcripts\n")

    print("=" * 80)
    print("VIRAL CONTENT PATTERN ANALYSIS")
    print("=" * 80)

    # 1. Categorize by performance
    print("\n1. CATEGORIZING VIDEOS BY ENGAGEMENT PERFORMANCE...")
    categorized = categorize_by_performance(data)
    print(f"   Top 10%: {len(categorized['top_10'])} videos")
    print(f"   Top 25%: {len(categorized['top_25'])} videos")
    print(f"   Mid-tier (25-75%): {len(categorized['mid_tier'])} videos")
    print(f"   Bottom 25%: {len(categorized['bottom_25'])} videos")

    # 2. Engagement metrics comparison
    print("\n2. ENGAGEMENT METRICS BY PERFORMANCE TIER")
    print("-" * 80)
    engagement_comparison = compare_engagement_metrics(categorized)
    for tier, metrics in engagement_comparison.items():
        print(f"\n{tier.upper().replace('_', ' ')}:")
        print(f"   Avg Engagement Rate: {metrics['avg_engagement_rate']:.4f} ({metrics['avg_engagement_rate']*100:.2f}%)")
        print(f"   Avg Like Rate: {metrics['avg_like_rate']:.4f} ({metrics['avg_like_rate']*100:.2f}%)")
        print(f"   Avg Comment Rate: {metrics['avg_comment_rate']:.4f} ({metrics['avg_comment_rate']*100:.2f}%)")
        print(f"   Avg Share Rate: {metrics['avg_share_rate']:.4f} ({metrics['avg_share_rate']*100:.2f}%)")

    # 3. Hook pattern analysis
    print("\n3. OPENING HOOK PATTERNS")
    print("-" * 80)
    hook_analysis = {}
    for category in ['top_10', 'mid_tier', 'bottom_25']:
        analysis = analyze_hook_patterns(categorized[category], category)
        hook_analysis[category] = analysis
        print(f"\n{category.upper().replace('_', ' ')} VIDEOS:")
        print(f"   Questions: {analysis['question_hooks']} ({analysis['question_pct']:.1f}%)")
        print(f"   Imperatives: {analysis['imperative_hooks']} ({analysis['imperative_pct']:.1f}%)")
        print(f"   Statements: {analysis['statement_hooks']} ({analysis['statement_pct']:.1f}%)")

    # 4. Sample viral hooks
    print("\n4. TOP 15 VIRAL HOOKS (from Top 10% performers)")
    print("-" * 80)
    for i, hook_data in enumerate(hook_analysis['top_10']['sample_hooks'][:15], 1):
        print(f"\n#{i}")
        print(f"Hook: \"{hook_data['text'][:100]}...\"")
        print(f"Author: @{hook_data['author']}")
        print(f"Stats: {hook_data['likes']:,} likes | {hook_data['plays']:,} plays | {hook_data['shares']:,} shares")
        print(f"Engagement Rate: {hook_data['engagement']['engagement_rate']:.4f} ({hook_data['engagement']['engagement_rate']*100:.2f}%)")
        print(f"URL: {hook_data['video_url']}")

    # 5. Video length analysis
    print("\n5. VIDEO LENGTH vs ENGAGEMENT")
    print("-" * 80)
    length_stats = analyze_content_length(categorized['all'])
    print(f"{'Duration (sec)':<15} {'Avg Engagement':<20} {'Sample Size':<15}")
    print("-" * 50)
    for length, stats in sorted(length_stats.items())[:20]:  # First 20 buckets
        print(f"{length:<15} {stats['avg_engagement']:.4f} ({stats['avg_engagement']*100:.2f}%)  {stats['sample_size']:<15}")

    # 6. Content themes
    print("\n6. TOP PERFORMING THEMES & HASHTAGS")
    print("-" * 80)
    themes = extract_common_themes(categorized['top_25'])
    print("\nTop 20 Hashtags by Average Engagement:")
    for i, (tag, stats) in enumerate(themes['top_hashtags'][:20], 1):
        print(f"{i:2d}. #{tag:<25} | Avg Engagement: {stats['avg_engagement']:.4f} ({stats['avg_engagement']*100:.2f}%) | Used in {stats['usage_count']} videos")

    # 7. Top performing authors
    print("\n7. TOP PERFORMING AUTHORS (3+ videos)")
    print("-" * 80)
    top_authors = analyze_author_patterns(categorized['all'])
    print(f"{'Rank':<6} {'Author':<25} {'Videos':<10} {'Avg Engagement Rate':<25} {'Total Plays':<15}")
    print("-" * 80)
    for i, (author, stats) in enumerate(top_authors[:15], 1):
        print(f"{i:<6} @{author:<24} {stats['video_count']:<10} {stats['avg_engagement_rate']:.4f} ({stats['avg_engagement_rate']*100:.2f}%)    {stats['total_plays']:>12,}")

    # 8. Save detailed analysis
    print("\n8. EXPORTING DETAILED RESULTS...")
    output = {
        'summary': {
            'total_videos': len(data),
            'analyzed_videos': len(categorized['all']),
            'analysis_date': datetime.now().isoformat()
        },
        'engagement_metrics': engagement_comparison,
        'hook_patterns': {
            'top_10': {
                'question_pct': hook_analysis['top_10']['question_pct'],
                'imperative_pct': hook_analysis['top_10']['imperative_pct'],
                'statement_pct': hook_analysis['top_10']['statement_pct']
            },
            'mid_tier': {
                'question_pct': hook_analysis['mid_tier']['question_pct'],
                'imperative_pct': hook_analysis['mid_tier']['imperative_pct'],
                'statement_pct': hook_analysis['mid_tier']['statement_pct']
            },
            'bottom_25': {
                'question_pct': hook_analysis['bottom_25']['question_pct'],
                'imperative_pct': hook_analysis['bottom_25']['imperative_pct'],
                'statement_pct': hook_analysis['bottom_25']['statement_pct']
            }
        },
        'top_viral_hooks': [
            {
                'hook': h['text'],
                'author': h['author'],
                'url': h['video_url'],
                'likes': h['likes'],
                'plays': h['plays'],
                'engagement_rate': h['engagement']['engagement_rate']
            }
            for h in hook_analysis['top_10']['sample_hooks'][:25]
        ],
        'length_analysis': {str(k): v for k, v in length_stats.items()},
        'top_hashtags': [{'tag': tag, 'stats': stats} for tag, stats in themes['top_hashtags'][:30]],
        'top_authors': [{'author': author, 'stats': stats} for author, stats in top_authors[:20]]
    }

    with open('../context/viral_pattern_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"   ✓ Saved to context/viral_pattern_analysis.json")

    print("\n" + "=" * 80)
    print("ANALYSIS COMPLETE")
    print("=" * 80)

if __name__ == '__main__':
    main()
