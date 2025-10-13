#!/usr/bin/env python3
"""
Extract full transcript examples from top-performing videos for deeper content analysis.
"""

import json
import re

def load_data(file_path):
    """Load TikTok transcripts data."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def calculate_engagement_rate(video):
    """Calculate engagement rate."""
    play_count = video.get('playCount', 0)
    if play_count == 0:
        return 0
    return (video.get('diggCount', 0) + video.get('commentCount', 0) + video.get('shareCount', 0)) / play_count

def clean_transcript(text):
    """Clean transcript text from JSON artifacts."""
    # Remove JSON structure artifacts
    if text.startswith('{"utterances"'):
        try:
            data = json.loads(text)
            if 'utterances' in data:
                return ' '.join([u.get('text', '') for u in data['utterances']])
        except:
            pass
    return text

def analyze_content_structure(transcript):
    """Analyze the structure and techniques used in the content."""
    patterns = {
        'personal_story': False,
        'statistics_mentioned': False,
        'call_to_action': False,
        'urgency_language': False,
        'social_proof': False,
        'question_hook': False,
        'polarizing_statement': False,
        'relatable_scenario': False,
        'emotional_appeal': False,
        'contrarian_view': False
    }

    lower_text = transcript.lower()

    # Personal story indicators
    if any(phrase in lower_text for phrase in ['i was', 'i did', 'my', 'when i', 'i remember', 'i used to', 'years ago']):
        patterns['personal_story'] = True

    # Statistics
    if re.search(r'\d+\s*(percent|%|million|billion|thousand|dollar|\$)', lower_text):
        patterns['statistics_mentioned'] = True

    # Call to action
    if any(phrase in lower_text for phrase in ['link in bio', 'follow', 'comment below', 'share', 'tag', 'check out', 'sign up', 'join']):
        patterns['call_to_action'] = True

    # Urgency
    if any(phrase in lower_text for phrase in ['now', 'today', 'right now', 'before', 'hurry', 'limited', 'don\'t wait', 'asap', 'immediately']):
        patterns['urgency_language'] = True

    # Social proof
    if any(phrase in lower_text for phrase in ['everyone', 'most people', 'millions', 'thousands', 'studies show', 'experts', 'successful people']):
        patterns['social_proof'] = True

    # Question hook
    if '?' in transcript[:200]:  # Question in first 200 chars
        patterns['question_hook'] = True

    # Polarizing/strong statement
    if any(phrase in lower_text for phrase in ['never', 'always', 'worst', 'best', 'biggest mistake', 'secret', 'nobody tells you', 'truth about']):
        patterns['polarizing_statement'] = True

    # Relatable scenario
    if any(phrase in lower_text for phrase in ['you know', 'if you', 'when you', 'have you ever', 'you\'ve probably', 'most of you', 'we all']):
        patterns['relatable_scenario'] = True

    # Emotional appeal
    if any(phrase in lower_text for phrase in ['feel', 'scared', 'worry', 'fear', 'dream', 'hope', 'frustrated', 'angry', 'excited', 'proud']):
        patterns['emotional_appeal'] = True

    # Contrarian view
    if any(phrase in lower_text for phrase in ['actually', 'the truth is', 'contrary to', 'most people think', 'everyone believes', 'they tell you', 'lie', 'wrong about']):
        patterns['contrarian_view'] = True

    return patterns

def main():
    print("Loading TikTok transcripts data...")
    data = load_data('../data/full_transcripts/tiktok_transcripts.json')

    # Sort by engagement rate
    videos_with_engagement = []
    for video in data:
        engagement_rate = calculate_engagement_rate(video)
        if engagement_rate > 0 and video.get('transcripts'):
            videos_with_engagement.append((video, engagement_rate))

    videos_with_engagement.sort(key=lambda x: x[1], reverse=True)

    # Get top 30 videos
    top_videos = videos_with_engagement[:30]

    print(f"\nAnalyzing top {len(top_videos)} viral videos...\n")
    print("=" * 100)
    print("TOP VIRAL VIDEO CONTENT ANALYSIS")
    print("=" * 100)

    detailed_examples = []
    pattern_frequency = {
        'personal_story': 0,
        'statistics_mentioned': 0,
        'call_to_action': 0,
        'urgency_language': 0,
        'social_proof': 0,
        'question_hook': 0,
        'polarizing_statement': 0,
        'relatable_scenario': 0,
        'emotional_appeal': 0,
        'contrarian_view': 0
    }

    for i, (video, engagement_rate) in enumerate(top_videos, 1):
        transcript_obj = video.get('transcripts', [{}])[0]
        raw_transcript = transcript_obj.get('text', '')
        clean_text = clean_transcript(raw_transcript)

        # Analyze patterns
        patterns = analyze_content_structure(clean_text)
        for pattern, present in patterns.items():
            if present:
                pattern_frequency[pattern] += 1

        # Create example entry
        example = {
            'rank': i,
            'author': video.get('authorMeta', {}).get('name', 'unknown'),
            'url': video.get('webVideoUrl', ''),
            'likes': video.get('diggCount', 0),
            'plays': video.get('playCount', 0),
            'shares': video.get('shareCount', 0),
            'comments': video.get('commentCount', 0),
            'engagement_rate': engagement_rate,
            'duration': video.get('videoMeta', {}).get('duration', 0),
            'description': video.get('text', ''),
            'hashtags': [tag.get('name', tag) if isinstance(tag, dict) else str(tag) for tag in video.get('hashtags', [])],
            'full_transcript': clean_text,
            'content_patterns': patterns,
            'pattern_count': sum(patterns.values())
        }
        detailed_examples.append(example)

        # Print summary
        print(f"\n#{i} - @{example['author']}")
        print(f"Engagement: {engagement_rate:.2%} | {example['likes']:,} likes | {example['plays']:,} plays")
        print(f"Duration: {example['duration']}s | Patterns: {example['pattern_count']}/10")
        print(f"URL: {example['url']}")
        print(f"\nDescription: {example['description'][:150]}...")
        print(f"\nOpening (first 150 chars):\n\"{clean_text[:150]}...\"")
        print(f"\nContent Patterns Detected:")
        for pattern, present in patterns.items():
            if present:
                print(f"  ✓ {pattern.replace('_', ' ').title()}")
        print("-" * 100)

    # Pattern frequency analysis
    print("\n\n" + "=" * 100)
    print("CONTENT PATTERN FREQUENCY ANALYSIS (Top 30 Videos)")
    print("=" * 100)
    print(f"\n{'Pattern':<35} {'Frequency':<15} {'Percentage':<15}")
    print("-" * 65)

    sorted_patterns = sorted(pattern_frequency.items(), key=lambda x: x[1], reverse=True)
    for pattern, count in sorted_patterns:
        percentage = (count / len(top_videos)) * 100
        print(f"{pattern.replace('_', ' ').title():<35} {count}/{len(top_videos):<15} {percentage:.1f}%")

    # Save to JSON
    output = {
        'analysis_summary': {
            'total_videos_analyzed': len(top_videos),
            'pattern_frequency': pattern_frequency,
            'pattern_percentage': {k: (v / len(top_videos)) * 100 for k, v in pattern_frequency.items()}
        },
        'top_viral_videos': detailed_examples
    }

    with open('../context/viral_content_examples.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\n✓ Detailed analysis saved to context/viral_content_examples.json")

    # Key insights
    print("\n\n" + "=" * 100)
    print("KEY INSIGHTS")
    print("=" * 100)

    # Most common patterns
    top_3_patterns = sorted_patterns[:3]
    print(f"\n1. MOST COMMON CONTENT TECHNIQUES (Top 3):")
    for i, (pattern, count) in enumerate(top_3_patterns, 1):
        pct = (count / len(top_videos)) * 100
        print(f"   {i}. {pattern.replace('_', ' ').title()}: {pct:.1f}% of top videos")

    # Average patterns per video
    avg_patterns = sum(ex['pattern_count'] for ex in detailed_examples) / len(detailed_examples)
    print(f"\n2. AVERAGE TECHNIQUES PER VIDEO: {avg_patterns:.1f} out of 10")

    # Most versatile creators
    author_patterns = {}
    for ex in detailed_examples:
        author = ex['author']
        if author not in author_patterns:
            author_patterns[author] = []
        author_patterns[author].append(ex['pattern_count'])

    author_avg_patterns = {author: sum(counts) / len(counts) for author, counts in author_patterns.items() if len(counts) >= 2}
    top_versatile = sorted(author_avg_patterns.items(), key=lambda x: x[1], reverse=True)[:5]

    print(f"\n3. MOST VERSATILE TOP CREATORS (avg techniques used):")
    for i, (author, avg_count) in enumerate(top_versatile, 1):
        video_count = len(author_patterns[author])
        print(f"   {i}. @{author}: {avg_count:.1f} techniques/video ({video_count} videos in top 30)")

    print("\n" + "=" * 100)

if __name__ == '__main__':
    main()
