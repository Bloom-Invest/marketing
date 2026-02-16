# Revision Notes: Financial Data Article (Draft 09)

**Original:** 2,012 words → **Revised:** 1,477 words → **Reduction: 26.6%**

---

## Pass 1: Remove Chaff

### Cuts Made
- **Title:** "Different" cut — "6 Sources" is tighter than "6 Different Sources"
- **Subtitle:** Removed "Here's how an AI agent stitches it all together" — the article shows this; no need to announce it
- **Intro ¶1:** "Just Shopify." → "One stock." — same punch, fewer words
- **Intro ¶2:** Cut "Seven different data sources" → "Seven sources." Cut "And I still didn't have a clean picture of whether" → "And I still couldn't tell you whether" — more direct
- **Intro ¶3:** Cut "Here's the thing that finally broke me: I realized" throat-clearing. Cut "The ratio was absurd" (restates the 8:1 ratio shown in the numbers). Cut "glorified" kept because it has voice
- **Intro ¶4:** Cut "That experience is basically why" → "That 8:1 ratio...is why" — quantifying the frustration instead of describing it
- **Garbage Fire section:** Cut "Let me save you months of discovery and give you the" throat-clearing opener. Section now starts with the data
- **Yahoo entry:** Cut "the one everyone starts with" — reader doesn't need to be told this. Cut "the problem:" label — the colon after "catch" does the same work
- **Alpha Vantage:** Cut parenthetical about old rate model — irrelevant detail. Cut "Thanks for that" quip (fun but doesn't earn its space)
- **EDGAR:** Cut "The gold standard" → used same phrase more efficiently. Cut "There's a reason" transition
- **Polygon:** Cut "imagine that" aside. Compressed two sentences into one
- **EOD:** Cut "Not the sexiest brand name, but honestly one of the more reliable data sources I've found" — nice-to-have, doesn't advance
- **Bloomberg:** Cut "The nuclear option" label. Cut "absolutely nobody reading this blog should pay for it" (restated in next sentence)
- **"Dirty Secret" section:** Renamed heading (removed "The Dirty Secret" — a bit clickbaity). Cut "Here's what nobody tells you" throat-clearing. Cut entire "Fucking Bloomberg" line (funny but repeats the $24K joke already made). Cut "This is the fundamental problem with stock research in 2025" — restates the list that just showed it
- **"Or — and this is the part where I get to talk about what I built —"** — cut this meta-commentary. Reader knows.
- **Bloom section:** Cut "here's what actually happens under the hood" throat-clearing. Cut descriptive expansions on each tool call (reader gets it from the tool name). Compressed 6 numbered items significantly
- **"The Part Nobody Talks About"** heading → "Data Quality Is a Minefield" — more direct
- **Data quality section:** Cut "Here's where it gets interesting — and where most..." throat-clearing. Cut "Adjusted vs. unadjusted prices will ruin your day" → "Stock splits will break your math" — more specific. Cut entire Toyota expansion paragraph (IFRS example already covered in EOD entry)
- **"Why AI Agents" section:** Cut "The insight that changed how I think about all of this:" → baked into the bold statement. Cut long orchestration explanation — trimmed to essentials. Cut "Think of it this way" transition before Google Maps analogy
- **Closing section:** Cut "If you're researching stocks today and you're still doing the 17-tab dance, here's my honest advice:" → "If you're still doing the 17-tab dance:" Cut "Not a vague summary — a rated thesis" (already shown throughout the piece)
- **Bio:** Cut "You can" from "You can find him on X"

### Chaff Stats
| Category | Count |
|----------|-------|
| Throat-clearing openers cut | 7 |
| Restatements removed | 5 |
| Empty transitions cut | 4 |
| Nice-to-have asides cut | 6 |
| Qualification bloat trimmed | 8 |

---

## Pass 2: Show Don't Tell

### Telling → Showing Rewrites
| Location | Telling (was) | Showing (now) |
|----------|---------------|---------------|
| Intro | "The ratio was absurd" | "That 8:1 ratio — collection vs. analysis" — quantified |
| Yahoo | "It's fine for a quick price check. It's terrible as infrastructure." | "Fine for a quick price check. Terrible as infrastructure." — tighter assertion, but kept because it IS the concrete show (before/after use case) |
| Bloom tools | "The stuff you'd spend 15 minutes pulling from Alpha Vantage" | Cut — the numbered list with tool names and response times IS the evidence |

### Already Strong (kept as-is)
- Opening anecdote: 17 tabs, named sources — excellent concrete detail ✅
- "200 OK status code" — programmer humor that's also evidence ✅
- "$24,000/year. Per seat." — the number IS the argument ✅
- "P/E of 80 because pre-split prices show $400" — specific math example ✅
- "Six calls. Fifteen seconds." — the contrast IS the proof ✅

### No new fabricated evidence added
The draft was already rich with specifics. This pass was more about cutting the *telling* that diluted existing *showing*.

---

## Pass 3: Emotion Amplifier

### Driving Emotion
**Frustrated vindication** — "I shouldn't have to waste my Saturday being a human ETL pipeline, and now I don't."

### What I Amplified
- **Opening:** Added "That 8:1 ratio" — names the frustration with a number, makes it feel measured and therefore more damning
- **Bloomberg line:** "Absolutely nobody reading this should pay for it" — kept the blunt dismissal, it channels reader's frustration at the pricing
- **Hedge fund vs retail:** Split into two standalone paragraphs for impact:
  - "A hedge fund hires a data engineering team to build ETL pipelines."
  - "A retail investor opens 17 browser tabs on a Saturday morning and prays they didn't transpose a number."
  - The contrast hits harder when each gets its own breath
- **"Scare the shit out of you"** — kept. This is emotional peak in the tool-call section. Voice moment.
- **Closing line:** "Your job was never to find data. Your job is to make investment decisions." — already strong. Sharpened "to be good at finding data" → "to find data" for more punch

### Vulnerability Check ✅
- "I've seen this exact bug in production" — admission of shipping a real bug
- "Not perfect — but a hell of a lot better than" — honest about Bloom's limitations
- "But always sanity-check" — doesn't oversell

### Emotional Dead Zones Fixed
- Data source list was a dead zone — broke it into shorter, punchier entries with catches stated as one-liners
- "Why AI Agents" section was getting academic — trimmed to keep the frustrated energy, landed on Google Maps analogy faster

---

## Pass 4: Prosody Checker

### Key Rhythm Fixes
- **Intro ¶3:** Was 3 sentences all ~15 words. Now: "Seventeen tabs. Seven sources." (2 + 2 words) then a 14-word sentence. Short-short-long pattern.
- **Hedge fund / retail investor:** Was one paragraph with two long sentences. Split into two standalone paragraphs — creates structural stress through isolation. Punch. Punch.
- **"Six calls. Fifteen seconds."** — Already a perfect short-short punch. Kept.
- **Bloom tool list:** Tightened each numbered item. Was 2-3 sentences each; now 1 sentence each with the key insight. Faster tempo through the list, then a breath after.
- **Data quality section:** Was four fat paragraphs in a row (🐢🐢🐢🐢). Now the stale-data paragraph is medium-length, splits paragraph is shorter, international is medium, small-cap is a quick two-liner. Pattern: 🚶🚶🚶⚡

### Paragraph Tempo Map (Revised)
```
Intro ¶1:    ⚡ (one stock)
Intro ¶2:    🚶 (17 tabs — scene setting)
Intro ¶3:    ⚡ (short punch)
Intro ¶4:    🚶 (collection vs analysis)
Intro ¶5:    🚶 (why I built Bloom)
Garbage Fire: 🚶🚶🚶🚶🚶🚶 (data source list — acceptable because each entry is self-contained, reader scans by bold name)
No Single:   ⚡ (bold thesis)
List:        ⚡ (rapid-fire format)
Core problem: 🚶
Fund vs retail: ⚡⚡ (two punches)
Bloom tools:  🚶 (numbered list, even tempo)
Summary:     ⚡ (six calls, fifteen seconds)
Data quality: 🚶🚶🚶⚡
Abstraction:  🚶⚡🚶 (insight, one-liner, Maps analogy)
Closing:     🚶⚡ (practical advice then punch landing)
```

### Energy Arc
```
Intro:         ████░ (4) — hook with Saturday scene
Garbage Fire:  ███░░ (3) — necessary reference section
No Single:     ████░ (4) — frustration peaks
Bloom Tools:   ████░ (4) — satisfying reveal  
Data Quality:  ███░░ (3) — educational but maintains tension
Abstraction:   █████ (5) — "aha" peak with Maps analogy
Closing:       ████░ (4) — strong landing
```

---

## Pass 5: Reader Simulator

### Target Reader
- **Who:** DIY investor, 30-45, uses a brokerage app, reads Substack finance content
- **Trigger:** Spent too long last weekend researching a stock across multiple tabs/sites
- **Search query:** "best financial data sources for stock research" or found via Substack recommendations
- **Awareness:** Problem-aware (knows data is scattered), solution-unaware (doesn't know AI agents can help)
- **Context:** Phone scroll or laptop, probably evening/weekend

### Five Test Results
| Test | Pass? | Note |
|------|-------|------|
| 8-Second (intro) | ✅ | "Last Saturday I sat down to research Shopify. One stock." — instant recognition moment for target reader |
| Skim (structure) | ✅ | Headings tell the story: Garbage Fire → No Single Source → Bloom Turns 6 Into 1 → Data Quality Minefield → Why Agents → What This Means. Bold entries scannable. |
| So What? (sections) | ✅ | Every section has a clear thesis sentence |
| Screenshot (share) | ✅ | See below |
| Subscribe (ending) | ✅ | "Your job was never to find data" — identity-affirming closer |

### Screenshot Moments 🟢
1. "A hedge fund hires a data engineering team. A retail investor opens 17 tabs and prays." — class contrast, shareable
2. "Six calls. Fifteen seconds." — punchy proof of value
3. "That's what a good financial AI agent does. Google Maps for stock data." — sticky analogy
4. "The problem isn't the data. It's the assembly." — tweetable insight

### Skim Zones Fixed
- **Data source list** was the biggest skim risk. Fixed by: making each entry shorter and punchier, leading with the bold name so readers can scan to the source they care about, cutting internal asides
- **"Why AI Agents" section** was getting abstract. Fixed by: cutting faster to the Google Maps analogy, which is concrete and familiar

### Bounce Points Fixed
- **¶4 of original** ("That experience is basically why I built Bloom") — was a potential bounce ("oh, this is an ad"). Fixed: quantified the frustration first ("That 8:1 ratio"), so the Bloom mention feels earned
- **Data quality section** — was four dense paragraphs that could lose a casual reader. Fixed: tightened each, made the last one (small caps) a quick two-sentence exit from the section

### Unanswered Questions (intentional — hooks for future articles)
1. "What does a full Bloom analysis actually look like?" → could be a follow-up with screenshots
2. "How does Bloom handle earnings day specifically?" → potential deep-dive
3. "What about screening/filtering across multiple stocks?" → different use case, different article
