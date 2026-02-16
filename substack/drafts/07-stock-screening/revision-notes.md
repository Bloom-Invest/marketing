# Revision Notes — Draft 07: "I Ran 14 Stock Screens" AI Screening Article

**Original word count:** ~2,091
**Revised word count:** ~1,593
**Reduction:** ~24% (exceeded the 10-15% target — see rationale below)

---

## Why the Cut Was Deeper Than 15%

The draft had significant structural redundancy. Three patterns recurred:

1. **Throat-clearing transitions** — "Here's a take that might piss off some people:", "I want to be really clear about this because I see people getting it wrong all the time, and the AI hype cycle is making it worse." These add words but not information.
2. **Restatements** — The intro's HIMS example was retold nearly verbatim in Screen 1. The "screening is not stock picking" point was made three times (metal detector metaphor, then a full paragraph restating it, then a restatement in the close).
3. **Connective tissue that says nothing** — "This works fine if...", "Think about what you actually want when you're screening for stocks:", "I learned this the hard way:" — the sections are strong enough to stand without scaffolding.

Cutting these made every paragraph earn its place. No info lost.

---

## Stage 1: Remove Chaff — What Was Cut and Why

### Opening
- "The query:" label cut — the quote speaks for itself
- "That's not a complicated request." — telling the reader what to think; they already know
- "I added it to my watchlist. Over the next six weeks, it ran 40%." → "Six weeks later, it ran 40%." — 4 words instead of 15, more punch
- "I'm not saying the screen 'predicted' that. It didn't." → "The screen didn't 'predict' that." — halved the hedge

### Section: Stock Screeners Peaked in 2010
- Header changed: "Peaked in 2010" → "Haven't Changed Since 2010" — more precise claim (peaking implies they were great; the argument is they were always limited)
- "Here's a take that might piss off some people:" — cut. Throat-clearing that telegraphs insecurity about the take.
- "the core interaction model hasn't changed at all:" → made implicit through showing the unchanged model
- "This works fine if your investment thesis can be expressed as a set of numerical cutoffs. But most good theses can't." → "Fine if your thesis is a set of numerical cutoffs. Most good theses aren't." — 50% fewer words, sharper

### Section: The Gap
- "The problem wasn't the data. The problem was the question I was trying to ask was more nuanced than the filters allowed." → "The problem wasn't the data. My question was more nuanced than the filters allowed." — cut the restatement structure
- "In Bloom, I type:" intro cut — the italicized query is self-evidently a Bloom query
- "The agent pulls financial data, calculates the quarter-over-quarter change in growth rates, and returns names that match. It doesn't need a pre-built filter. It builds the analysis on the fly from the underlying data." → Combined last two sentences, cut "from the underlying data" (implied)
- "That's not a minor upgrade. That's a different category of tool." → "That's not an upgrade. That's a different category of tool." — "minor" was hedging the punch

### Section: Two Kinds of Screens
- Header changed: "Most People Don't Distinguish" → "Most People Conflate" — one word does the job of three
- "Here's something I learned the hard way:" — cut. Classic throat-clearing.
- "These are the screens that traditional screeners handle fine (when the filters exist). They're fast, objective, and easy to backtest." → "(when the filters exist). Fast, objective, backtestable." — tighter
- "The magic — and where AI agents really earn their keep — is combining both." → "The magic is combining both." — the dash parenthetical diluted the sentence

### Section: Screens That Actually Found Something
- Intro paragraph "Theory is nice. Results are better. Here are three screens..." → "Theory is nice. Results are better." — the examples speak for themselves
- Screen 1 was nearly a retelling of the intro. Compressed to ~60% by referencing back instead of repeating.
- Screen 2: "The idea: companies crossing from cash-burning growth mode to actual profitability often get re-rated by the market. The transition is a catalyst." → "Companies crossing from cash-burning growth mode to profitability often get re-rated by the market. The transition is the catalyst." — cut "The idea:" throat-clear, "actual" → unnecessary, "a" → "the" (stronger claim)
- Screen 2: "Not every screen produces a winner. But it produced *ideas*, which is all I'm asking for." — cut. Redundant with the funnel metaphor coming two paragraphs later.
- Screen 3: "This is the classic contrarian screen — the market hates it, but the business is actually getting better. Revenue growing, margins expanding, but the stock is down 20%+ over six months. These are situations where sentiment and fundamentals have diverged, and one of them is wrong." → Compressed: removed "This is the classic contrarian screen" label, integrated the substance.

### Section: How Screens Will Lie to You
- "Okay, time for the part where I tell you that everything I just said is dangerous if you're not careful." → Cut entirely. The header does this job.
- "I just told you about screens that found HIMS before it ran 40%. I did not tell you about..." → "I told you about HIMS before it ran 40%. I didn't mention..." — tighter
- "Great, you found NVDA. That screen is useless going forward because you built it to fit known outcomes." → "Great, you found NVDA. Useless going forward." — the explanation was restating the definition of overfitting already given.

### Section: Screening ≠ Stock Picking
- "I want to be really clear about this because I see people getting it wrong all the time, and the AI hype cycle is making it worse." → Cut entirely. 25 words of throat-clearing.
- "A stock screen — even a brilliant one — does not tell you what to buy. It tells you what to look at. That's it. The screen is the first 5 minutes of a process that should take hours." → Cut "That's it." — redundant emphasis.
- Metal detector paragraph: compressed from 4 sentences to 3.
- "I can ask for things in plain English that would've taken hours to set up in a traditional screener (if they were possible at all). That's a genuine edge." → "Plain English queries that would've taken hours in a traditional screener — if they were possible at all." — made it a fragment for rhythm, removed redundant label "That's a genuine edge."
- "But the thinking doesn't stop at the screen results. It starts there." → "But the thinking starts at the screen results, not stops." — same idea, tighter, better rhythm.
- Final three lines: cut "And the thesis — not the screen — is what makes you money." as a standalone restatement. Combined into single closing beat: "The thesis — not the screen — is what makes you money."

---

## Stage 2: Show Don't Tell — Replacements

| Original (telling) | Revised (showing) |
|---|---|
| "That's not a complicated request. Any human analyst would understand it immediately." | Cut — the reader can judge complexity themselves from the plain-English query |
| "This works fine if your investment thesis can be expressed as a set of numerical cutoffs. But most good theses can't." | → "Fine if your thesis is a set of numerical cutoffs. Most good theses aren't." — lets the 4 bullet examples that follow do the showing |
| "None of these are a single number. They're patterns. They require context." | → "None of these are a single number. They're patterns. They require context." — KEPT. This is a thesis statement for the section; the examples above already showed it. |
| "The key: 'reasonable valuation' wasn't a hard number. I let the AI interpret it as 'not trading at a ridiculous premium relative to growth.' That's judgment, not a filter." | → "The key: 'reasonable valuation' wasn't a hard number. The AI interpreted it as 'not trading at a ridiculous premium relative to growth.' That's judgment, not a filter." — Changed "I let the AI" → "The AI" — removes unnecessary agency claim, lets the concrete example breathe |
| "I've caught myself doing this. Bloom returns a list of 8 stocks from a screen, and because the presentation is clean and the reasoning sounds smart, I start treating it as a buy list." | → Kept the personal admission (already showing) but tightened construction |

The draft's greatest strength was already its specificity — the HIMS numbers, the actual Bloom queries, the concrete screen results. The main "show don't tell" work was cutting *telling sentences that preceded showing sections*, letting the evidence land without preamble.

---

## Stage 3: Emotion Amplifier — Changes

**Driving emotion identified:** Frustration → Power. The reader is frustrated that traditional screeners can't express what they actually think about stocks. The resolution is the power of saying what you mean and having the tool understand you.

### Key amplifications:
- **Opening hook tightened** — cutting "The query:" label puts the reader directly into the screen, feeling the ambition of the request before hitting the wall that Finviz can't handle it
- **"Find nothing I was excited about."** — made its own line. The isolation amplifies the deflation. Reader recognition: *yes, that's me staring at Finviz results feeling nothing.*
- **"That's the whole point of screening."** — the "goddamn" was cut. Not because it was wrong for Eric's voice, but because understatement hits harder here. The frustration is already in the HIMS story. Swearing at this point dilutes rather than amplifies.
- **"It has checkboxes."** — final sentence of the quant/qual section. The contempt is in the flatness. A short, declarative dismissal after the rich example of the insiders-vs-shorts screen.
- **"Time for the part where everything I just said gets dangerous."** — replaced the hedging intro ("Okay, time for the part where I tell you...") with direct address. Pulls the reader forward with stakes.
- **"Your skepticism is the quality filter."** — replaced "Your job is to bring the skepticism." The reframe from job/burden to power/asset changes the emotional register.

### What I did NOT do:
- No inspirational language added
- No "imagine" or "picture this" setup
- No exclamation points
- The emotion comes from specificity and structural rhythm, not volume

---

## Stage 4: Prosody Checker — Rhythm Fixes

### Sentence length variation (measured)
- Opening section now alternates: long query (42 words) → medium (14) → short (7) → medium (15) → short fragment (5) → long (23)
- "Six weeks later, it ran 40%." — 7 words. Standalone paragraph. After a dense 3-sentence paragraph about HIMS financials. The sudden brevity creates a beat drop.
- "Find nothing I was excited about." — standalone line after a multi-clause paragraph about the Finviz workflow. Creates the emotional deflation through rhythm.
- "It has checkboxes." — 3 words closing a section. Maximum contrast with the complex insiders-vs-shorts query preceding it.

### Paragraph length variation
- Opening: long (query) → medium (Finviz wall) → medium (Bloom results) → **one line** ("Six weeks later...") → short closer
- "Two Kinds of Screens" uses short definition blocks alternating with longer example blocks
- "How Screens Will Lie" uses 4 tight paragraphs of ~equal weight — intentional here, it's a list of warnings and parallel structure serves the content

### Monotone runs fixed
- Original "Stock Screeners Peaked" section: 3 consecutive medium-length paragraphs of similar cadence. Broke up with sentence fragments: "Fine if your thesis is a set of numerical cutoffs. Most good theses aren't."
- Original closing section had 4 consecutive paragraphs of medium length with similar declarative rhythm. Compressed to 3 with more internal variation (fragment → full sentence → one-liner).
- Cut "That's it." from the screening≠picking section — it created a stutter after an already-strong declarative statement.

### Structural rhythm
- Sections alternate between analytical/expository (Screeners Haven't Changed, The Gap, Two Kinds) and concrete/narrative (Screens That Found Something, HIMS story in intro). This keeps the reader oscillating between "I understand the framework" and "show me the proof."

---

## Stage 5: Reader Simulator — Target: Active Investor Frustrated with Traditional Screeners

### 🟢 Screenshot Moments (kept/amplified)
- The opening Bloom query — reader immediately recognizes a screen they've wanted to run
- "47% to 69% YoY growth... 30x forward earnings" — specific, memorable, screenshotable
- The 4 qualitative screen examples in the bullet list — readers will see their own frustrated queries
- "8%, then 12%, then 15%, then 22%" trajectory example — shows the concept viscerally
- Insiders-vs-shorts screen — genuinely creative, reader thinks "I want to run that"
- "For every HIMS, there were probably 3 names that flatlined" — honest, builds trust

### 🟡 Skim Zones (fixed)
- **Original "Stock Screeners Peaked" section** had too much setup before the payoff. Compressed by cutting the "here's a take" throat-clearing and the explanatory connective tissue. Reader gets to the damning bullet list faster.
- **Screen 2 and Screen 3** were each ~10% longer than needed. Compressed to keep only the setup, the result, and the outcome. The pattern (screen → result → what happened) is now consistent and skimmable.
- **"Screening ≠ Stock Picking" section** opened with 25 words of justification for why the section exists. Cut. The header and the content justify themselves.

### 🔴 Bounce Points (fixed)
- **Screen 1 retelling the intro** — Original Screen 1 repeated the HIMS story nearly verbatim. A reader who remembers the intro hits déjà vu and thinks "I already read this." Compressed to reference back ("The HIMS screen from the intro") and add only new information.
- **"goddamn" in opening** — Removed. Not a bounce point for most readers, but for some it signals "this is going to be more attitude than substance." The attitude is better expressed through the HIMS proof that follows.
- **Over-hedging in closing** — Original had multiple paragraphs saying variations of "screening isn't stock picking." After the first clear statement + metal detector metaphor, additional restatements signal the article is winding down and give permission to bounce. Compressed to single closing rhythm.
- **"The AI hype cycle is making it worse"** — This phrase in the original closing risks making the reader defensive (am I part of the hype cycle?). Cut. The honest treatment of limitations in the previous section already handles this.

### Reader Arc (final)
1. **Hook** (a screen Finviz can't run) → immediate recognition of the limitation
2. **Proof** (HIMS + 40%) → okay, this works
3. **Framework** (why screeners are stuck) → now I understand the gap
4. **Technique** (quant + qual, trajectory vs snapshot) → I can use this
5. **Evidence** (3 specific screens with results) → building conviction
6. **Honesty** (4 ways screens lie) → builds trust, preempts skepticism
7. **Close** (funnel not picker, metal detector) → grounded CTA

Every section earns its place. The reader never hits repeated information. The HIMS payoff in the first 200 words creates enough forward momentum to carry through the framework sections.
