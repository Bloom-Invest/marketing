# Marketing Content Analysis & Creation Guide

A toolkit for analyzing viral social media content and creating high-performing investment/finance content for TikTok and Instagram.

---

## Quick Links

- **Script Documentation**: See [SCRIPTS.md](./SCRIPTS.md) for script usage and data extraction
- **Data Sources**: 1,517 TikTok videos + 65 Instagram videos with transcripts
- **Content Library**: 100+ proven storyboards in `content/` folder

---

## Project Structure

```
.
├── data/                         # Raw scraped data & extracted transcripts
│   ├── tiktok_scraped_posts.json       # 644 TikTok videos
│   ├── tiktok_scraped_posts_2.json     # 873 TikTok videos
│   ├── instagram_scraped_posts.json    # Instagram video posts
│   └── full_transcripts/               # Extracted transcripts
│       ├── tiktok_transcripts.json        # All TikTok transcripts
│       └── instagram_transcripts.json     # All Instagram transcripts
├── ideas/                        # AI-generated analysis & insights
│   ├── *_VIDEO_IDEAS.md                # Video concept documents
│   ├── VIRAL_CONTENT_INSIGHTS_REPORT.md
│   ├── viral_hooks.csv
│   └── viral_pattern_analysis.json
├── content/                      # Finished storyboards & scripts (100+ files)
├── utils/                        # Extraction, processing & test scripts
├── Makefile                      # Automation commands
├── CLAUDE.md                     # This file - Content creation guide
└── SCRIPTS.md                    # Script usage and technical docs
```

---

## Content Creation Guide

### Storyboard Format Standards

All content follows this ASCII storyboard structure:

```
╔════════════════════════════════════════════════════════════════════════════════╗
║                         TITLE OF CONTENT                                       ║
╚════════════════════════════════════════════════════════════════════════════════╝

Duration: 45-60s  |  Hook Time: 0-3s  |  Expected Engagement: 1M-4M views

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  FRAME 1 (0-3s) │  │ FRAME 2 (3-20s) │  │ FRAME 3 (20-45s)│  │ FRAME 4 (45-60s)│
├─────────────────┤  ├─────────────────┤  ├─────────────────┤  ├─────────────────┤
│                 │  │                 │  │                 │  │                 │
│  [Visual desc]  │  │  [Visual desc]  │  │  [Visual desc]  │  │  [Visual desc]  │
│                 │  │                 │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEXT OVERLAYS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ "Key message 1"
→ "Key message 2"
→ "Key message 3"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCRIPT / VOICEOVER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[0-3s] HOOK:
"Opening line that stops the scroll..."

[3-20s] SETUP:
"Build the context and problem..."

[20-45s] REVEAL:
"Show the insight or solution..."

[45-60s] RESULTS + CTA:
"Prove the value and direct to action..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCTION NOTES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUALS: [Specific visual requirements]
MUSIC: [Audio style and pacing]
TEXT STYLE: [Overlay formatting and animations]
VARIATIONS TO TEST: [A/B test ideas]
CTA: [Call to action]
POSTING STRATEGY: [Timing, hashtags, engagement tactics]
```

### Duration Guidelines

- **Short-form (15-30s)**: Pattern interrupts, quick reveals, "Wait stop!" moments
- **Medium-form (30-45s)**: Time comparisons, efficiency hacks, quick transformations
- **Long-form (45-60s)**: Full narratives, experiments, educational breakdowns

**Hook Time is Critical**: First 0-3 seconds must stop the scroll. No preamble.

---

## Viral Content Formulas

### 1. **Comparison/Contrast Framework**
**Pattern**: "X does this → Y does THIS"

**Examples**:
- "ChatGPT vs Bloom AI" (3 hours vs 12 seconds)
- "You vs Hedge Funds" (manual vs automated)
- "Reddit picks vs AI picks" (-12% vs +18%)

**Key Elements**:
- Extreme contrasts (time, performance, effort)
- Specific numbers (32-point spreads, 900x faster)
- Visual split-screens
- Relatable "loser" (viewer) vs aspirational "winner"

### 2. **Failure/Mistake Story**
**Pattern**: "I did [bad thing] → Lost [money] → Here's what I learned"

**Examples**:
- "ChatGPT stock picks cost me $8,400"
- "Biggest mistake: Buying without research"
- "I followed WSB, then Bloom AI"

**Key Elements**:
- Specific loss amounts ($8,400, not "thousands")
- Vulnerability creates connection
- Clear before/after results
- Redemption arc with solution

### 3. **Educational Breakdown**
**Pattern**: "The [X] things [tool/person] can't do"

**Examples**:
- "3 things ChatGPT can't do for investing"
- "Why [tool] fails at [task]"
- "What hedge funds don't want you to know"

**Key Elements**:
- Numbered list (3, 5, 7 items)
- Specific technical failures
- Authority positioning
- Empowering alternative

### 4. **Pattern Interrupt**
**Pattern**: "WAIT STOP! Before you [action]..."

**Examples**:
- "Wait stop! Before you buy that stock..."
- "Stop asking people if you should invest"
- "Stop buying garbage stocks"

**Key Elements**:
- Urgent command in first second
- Immediate value delivery
- Time-sensitive relevance
- Series potential (daily checks)

### 5. **Extreme Time/Effort Comparison**
**Pattern**: "[Large time/effort] vs [Tiny time/effort] for same result"

**Examples**:
- "3 hours vs 12 seconds" (900x faster)
- "20 hours/week → 5 minutes/week"
- "$50K analyst vs $0 AI tool"

**Key Elements**:
- Dramatic ratio (100x+)
- Stopwatch/timer visuals
- Productivity/efficiency angle
- "Get your life back" messaging

### 6. **Dangerous Confidence / Hidden Risk**
**Pattern**: "[Tool/Person] confidently gives wrong advice"

**Examples**:
- "ChatGPT doesn't know it's wrong"
- "AI hallucinations cost me $12K"
- "This stock looks great but..."

**Key Elements**:
- Fear-based education (not fear-mongering)
- Specific example of failure
- Trust/safety concerns
- Transparent alternative with sources

---

## Engagement Drivers

### What Makes Content Go Viral

1. **Shock Value + Specificity**
   - Not: "I lost money"
   - YES: "I lost $8,400 in 90 days"
   - Numbers create credibility and shareability

2. **Relatable Mistakes**
   - Everyone's bought stocks without research
   - Everyone's wasted time on manual work
   - Everyone's trusted the wrong source
   - Shared pain = engagement

3. **Controversy & Debate**
   - ChatGPT vs Bloom (AI wars)
   - Reddit vs institutional analysis
   - "ChatGPT defenders, explain this"
   - Creates passionate comments

4. **Time/Money Saved**
   - "3 hours → 12 seconds saved"
   - "$8,400 loss → $11,100 gain prevented"
   - Productivity hacks = shares
   - Calculate ROI of time

5. **Insider Secrets / Authority**
   - "Hedge funds automated this years ago"
   - "What Wall Street doesn't want you to know"
   - "I worked at [institution], here's the secret"
   - Democratization angle

6. **Before/After Transformations**
   - Portfolio performance spreads
   - Win/loss record improvements
   - Time spent comparisons
   - Visual proof matters

---

## Production Specifications

### Visual Requirements Per Frame

**Frame 1 (0-3s) - The Hook**:
- Bold text overlay (problem/question/command)
- Attention-grabbing visual (hand stop gesture, shocking chart, red alert)
- No setup - immediate value prop
- Examples: "WAIT STOP!", "I lost $8,400", "ChatGPT vs Bloom"

**Frame 2 (3-20s) - The Setup**:
- Context building (what you did, what failed, the old way)
- Show the problem visually (ChatGPT conversation, manual spreadsheets)
- Build tension/curiosity
- Specific examples with real screenshots

**Frame 3 (20-45s) - The Reveal**:
- The solution or shocking discovery
- Data reveals (red flags, performance gaps, time comparisons)
- Side-by-side comparisons
- "Here's what I found" moment

**Frame 4 (45-60s) - Results + CTA**:
- Proof of concept (performance numbers, time saved)
- Clear call-to-action ("Link in bio")
- Social proof elements
- "Use the right tool" messaging

### Text Overlay Styling

- **Large bold callouts**: Main messages, numbers, comparisons
- **Warning symbols**: ⚠ ✗ 🚫 for red flags
- **Success indicators**: ✓ 📈 for wins
- **Color coding**: Red for losses/warnings, Green for wins/solutions
- **Counters/timers**: Animated for time comparisons
- **Performance metrics**: Large font with +/- indicators

### Music & Audio

- **Comparison content**: Scientific → triumphant reveal
- **Failure stories**: Somber → uplifting at solution
- **Pattern interrupts**: Urgent alert sounds
- **Educational**: Curious → confident resolution
- **Time comparisons**: Tedious/repetitive → sudden relief

### Animation Requirements

- **Loading bars**: For AI processing demos
- **Countdown timers**: For time-based comparisons
- **Typewriter effects**: For prompts and queries
- **Chart reveals**: Dramatic performance unveils
- **Checkmarks appearing**: Rapid-fire for feature lists
- **Red flags popping**: Sequential warnings
- **Split-screen transitions**: Before/after, X vs Y

---

## Strategic Elements

### Variations to A/B Test

Every storyboard should include 3-5 variations:
- Different hook angles
- Various price points ($1K vs $10K vs $50K)
- Time periods (30 days vs 90 days vs 6 months)
- Comparison targets (ChatGPT vs Reddit vs advisors)
- Series potential (daily, weekly updates)

### Controversy Level Assessment

- **LOW**: Educational, no direct attacks
- **MEDIUM**: Comparison with winners/losers
- **HIGH**: Direct challenge, "prove me wrong"

Higher controversy = higher engagement but requires authenticity

### Follow-Up Content Ideas

Every viral piece should spawn 3-10 follow-ups:
- Deep dives on each point
- Response to comments
- Updated results tracking
- Alternative scenarios
- Behind-the-scenes of experiment

### Engagement Bait Comments

Pin strategic comments:
- "Drop any stock ticker, I'll analyze it"
- "ChatGPT users, what's your experience?"
- "Calculate what 3 hours of research costs you"
- "Who else lost money on [specific trade]?"

### Posting Strategy

**Timing**:
- **Educational content**: Sunday evening (Monday prep)
- **Performance reveals**: During market hours
- **Comparison tests**: After major market events
- **Pattern interrupts**: When specific tickers are trending

**Hashtags** (Pick 3-5):
- Platform tags: #ChatGPT #BloomAI
- Category tags: #Investing #StockMarket #AI
- Controversy tags: #AIInvesting #RetailInvestor
- Niche tags: #HedgeFund #WallStreet #FinTech

**Series Potential**:
- Daily stock checks ("Wait stop!" format)
- Weekly performance updates (ongoing experiments)
- Monthly portfolio reviews
- Trending stock reactions

---

## Quality Control & Authenticity

### Authenticity Requirements

**ALWAYS SHOW**:
- Real screenshots with timestamps
- Actual stock prices and dates
- Source citations for data
- When experiments are simulated vs real

**NEVER DO**:
- Fabricate performance numbers
- Exaggerate losses or gains
- Use fake ChatGPT conversations
- Claim results without proof

### Data Verification

- Use real stock tickers and real price movements
- Verify all performance claims with screenshots
- Show actual Bloom AI analysis when referenced
- Include data sources in production notes

### Ethical Messaging

- **Fear-based education**: OK if protecting viewers from real risks
- **Fear-mongering**: NOT OK (creating fake urgency)
- **Comparison**: OK with factual basis
- **Attacks**: NOT OK (stay professional)
- **Controversy**: OK if creates valuable debate

### When to Actually Run Experiments

**Run Real Tests For**:
- Long-term tracking (30+ days)
- Performance comparisons
- Tool evaluations
- Anything claiming "I tested..."

**Conceptual/Educational OK For**:
- Hypotheticals clearly marked
- "What if" scenarios
- Educational breakdowns
- Feature comparisons

---

## Content-to-Product Mapping

### How Each Format Positions Bloom AI

**Comparison Content** → Differentiation
- Real-time data vs outdated training
- Specialized vs general-purpose AI
- Automated vs manual research

**Failure Stories** → Problem/Solution
- Show cost of wrong tools
- Position Bloom as safety net
- "Never again" narrative

**Educational Content** → Authority Building
- Deep expertise demonstration
- Technical credibility
- Trust through transparency

**Time Savers** → Efficiency Value Prop
- ROI of time saved
- Productivity positioning
- "Get your life back"

**Pattern Interrupts** → Habit Formation
- "Always check Bloom first"
- Daily use case
- Routine integration

### Feature Highlight Priorities

**Primary (Mention Every Time)**:
1. Real-time data feeds
2. Valuation analysis
3. Buy/Sell ratings

**Secondary (Rotate)**:
4. Technical analysis
5. Catalyst tracking
6. Risk scoring
7. Insider activity monitoring
8. Source citations/transparency

**Tertiary (Occasional)**:
9. Portfolio tracking
10. Comparison tools
11. Alert systems

### CTA Optimization

**Strong CTAs**:
- "Link in bio" (standard)
- "Try Bloom AI free"
- "Stop [bad behavior] — use Bloom"
- "See for yourself"

**Weak CTAs**:
- Generic "check it out"
- No specific action
- Multiple competing CTAs
- Vague value prop

---

## Dataset Insights

### Available Data

- **TikTok**: 1,517 videos, 1,172 with English transcripts
- **Instagram**: 65 videos, 36 transcribed
- **Engagement Metrics**: Likes, shares, plays, comments for all videos
- **Metadata**: Author info, hashtags, timestamps, video dimensions

### Analysis Opportunities

- Extract viral hooks (first 5 seconds of transcript)
- Correlate hook patterns with engagement metrics
- Identify high-performing content themes
- Analyze hashtag effectiveness
- Study creator-specific patterns
- Track performance by video length
- Compare TikTok vs Instagram performance

### How to Use Transcript Data

1. Search for specific hooks/phrases that performed well
2. Identify emotional triggers in high-engagement content
3. Find optimal video lengths by engagement
4. Discover trending topics and timing
5. Reverse-engineer competitor viral content
6. Build pattern library of proven formulas

---

## Examples from Content Library

### High-Performing Patterns

**"Wait Stop!" Pattern** (`wait_stop.md`):
- 15-30s format
- Pattern interrupt hook
- Urgency-driven
- Series potential
- 800K-4M view expectation

**"You vs Institutions" Pattern** (`everyone_thinks_research_is_complex_hedge_funds_laugh.md`):
- 45-60s format
- Underdog narrative
- Automation reveal
- Authority positioning
- 800K-3M view expectation

**"I Tested [X]" Pattern** (`i_tested_ai_vs_human_stock_picking.md`):
- 12-16s format (short, punchy)
- Experiment results
- Shocking spread (-12% vs +18%)
- Data beats hype
- 500K+ view expectation

**"ChatGPT Failed Me" Pattern** (new content):
- 45-60s format
- Specific loss story
- Comparison framework
- Educational angle
- 1.5M-7M view expectation

---

## Next Steps

For running extraction scripts and technical setup, see [SCRIPTS.md](./SCRIPTS.md).

For creating new content:
1. Choose a viral formula from above
2. Use the ASCII storyboard template
3. Include all required sections (overlays, script, production notes)
4. Specify engagement drivers and posting strategy
5. Save to `content/` folder with descriptive filename
