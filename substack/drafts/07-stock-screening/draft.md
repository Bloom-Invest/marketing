<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

## Variant B: "The 847 Stocks Problem" (Scale/volume framing)

**Hook:** There are ~4,000 investable US stocks. You can research maybe 5 per week. How do you find the 5 that matter?

1. **Open:** Math problem — 4,000 stocks, limited time, most screeners waste yours
2. **Why Finviz gives you garbage in, garbage out** — examples of misleading screens
3. **The AI screener difference** — contextual filters, combining quant + qual
4. **Building screens that think** — step-by-step with Bloom examples
5. **My favorite screens** — the ones that keep surfacing interesting names
6. **Why your screen will lie to you** — survivorship bias, overfitting, data mining traps
7. **Close:** The goal isn't finding winners. It's finding things worth looking at.

---

## ✅ Variant C: "I Ran 14 Stock Screens Last Month" (Results-first, show-don't-tell) ← CHOSEN

**Hook:** I ran 14 different stock screens last month. Traditional screeners found me junk. AI screens found me HIMS before it ran 40%.

1. **Open:** Specific anecdote — running a screen that combined revenue acceleration + insider buying + reasonable valuation, and HIMS popping out before its big run
2. **Why stock screeners peaked in 2010** — Finviz, Yahoo, TradingView are all checkbox UIs built for a pre-AI world. Static filters, no reasoning, binary thresholds
3. **The gap between what you want and what you can filter** — "find me companies where revenue is accelerating and the market hasn't caught on" is a perfectly reasonable request that no traditional screener can handle
4. **Quantitative screens vs qualitative screens** — numbers-only (P/E < 15, revenue growth > 20%) vs context-aware ("companies pivoting to AI that used to be boring SaaS"). Why you need both. Bloom examples of each.
5. **Screens that actually worked** — 3-4 specific natural language screens, what they found, whether those ideas panned out. Concrete tickers and numbers.
6. **The dark side of screening** — survivorship bias (you only remember the screens that found winners), overfitting (designing a screen that would've found last year's winners), data mining (run enough screens and something will look amazing by chance). How to stay honest.
7. **Close:** Screening isn't stock picking. It's idea generation. The best screen in the world just gives you a shorter list of things to actually research. That's the whole point.

**Why this variant:** Results-first hooks harder than theory-first. Starting with a specific screen that found a real stock grounds the whole piece. Readers want to know "does this actually work?" before they care about the methodology. Also builds naturally on Article #3 (which covered research) — this is the step *before* research.

</details>

---

# I Ran 14 Stock Screens Last Month. The AI Ones Actually Found Something.

*Traditional screeners are checkbox UIs stuck in 2010. AI agents can screen for things Finviz literally can't express.*

---

Last month I ran a screen that no traditional screener can handle:

"Find me US companies between $2B and $20B market cap where revenue growth is accelerating quarter over quarter, insiders have been buying in the last 90 days, and the stock is still trading below its 5-year average P/E ratio."

Any analyst gets that immediately. Try typing it into Finviz. You can filter by P/E. You can filter by market cap. You can sort by revenue growth. But "accelerating quarter over quarter"? That's a *trend*. Finviz doesn't do trends. It does snapshots.

I asked [Bloom](https://investwithbloom.com). 11 names came back. Most were boring — small industrials and regional banks I'd never heard of. But one was @HIMS. Revenue had gone from 47% YoY growth to 69% over three quarters. Multiple insiders bought shares. Trading at roughly 30x forward earnings — cheap for a company accelerating that fast.

Six weeks later, @HIMS ran 40%.

I'm not claiming the screen predicted that. It surfaced a name I never would've found scrolling Finviz on a Sunday night.

That's what screening is actually for.

## Screeners Peaked in 2010

Finviz. Yahoo Finance Screener. TradingView. Fundamentally the same product they were 15 years ago.

Prettier UI, sure. More filters — TradingView has 150 now. But the interaction model is identical: set numerical thresholds, database returns matching rows. P/E under 20. Market cap above $1B. Revenue growth above 15%. Here's your list.

Fine if your thesis is a set of numerical cutoffs.

Most good theses aren't.

What I actually want when I screen:

- "Companies where the business is inflecting but the stock price hasn't caught up"
- "SaaS companies that just crossed into profitability for the first time"
- "Beaten-down names where insider buying suggests the bottom is in"
- "Accelerating revenue growth AND expanding margins — not one or the other"

None of these are a single number. They're patterns. They require the screener to *understand* the question, not just match rows against a WHERE clause.

## What You Want vs. What You Can Filter

I used to spend an embarrassing amount of time on Finviz. P/E under 25, revenue growth over 20%, market cap $2B–$50B. 80 results. Sort. Squint. Click through a few.

Nothing I was excited about. Every time.

The problem wasn't my taste — my question was more specific than the filters allowed. What I actually wanted: "companies growing fast enough to justify a premium but currently trading at a discount to their growth rate." That's a PEG ratio screen, sort of — but PEG uses backward-looking earnings and single-point growth estimates. It misses businesses where growth is *changing direction*.

A company growing revenue at 15% isn't exciting. A company that grew 8%, then 12%, then 15%, then 22% over four quarters — that's a business inflecting. The trajectory matters more than any single number.

No checkbox screener filters by trajectory.

With Bloom, I just say what I mean: *"Find me mid-cap companies where revenue growth has accelerated for at least 3 consecutive quarters."*

It pulls the financials, calculates quarter-over-quarter change in growth rates, returns the matches. No pre-built filter. It builds the analysis on the fly from my plain-English question.

## Numbers + Context: Why You Need Both

Here's a screen I keep coming back to: *"Companies under $10B market cap, revenue growth above 25%, that recently announced a new product line or strategic pivot."*

First half is pure numbers — any screener handles that. Second half requires reading news, press releases, earnings call summaries to identify strategic shifts. Traditional screeners give you the numbers half. You'd have to manually research the rest. AI gives you both in one query.

Another I run regularly: *"Companies where short interest has increased significantly but insider buying has also increased. The insiders and the shorts are disagreeing — who's right?"*

That screen asks the AI to identify a *tension* in the data and present it as a research question. Finviz doesn't know what "disagreement between insiders and shorts" means. It has checkboxes.

## Screens That Actually Found Something

**Screen 1: "Accelerating revenue + insider buying + reasonable valuation"**

The @HIMS screen from the intro. Ran it early 2025. Besides @HIMS, it surfaced a couple of industrial tech names and a healthcare company I won't name because I'm still building a position.

"Reasonable valuation" wasn't a hard number. The AI interpreted it as "not trading at a ridiculous premium relative to growth." That's judgment, not a filter.

11 results. Researched 4 in depth. Two made my watchlist. One I bought.

**Screen 2: "SaaS companies that just turned profitable for the first time"**

Companies crossing from cash-burning growth to profitability often get re-rated. The transition is the catalyst. But "just turned profitable" is brutal to screen traditionally — you'd need to check 8 quarters of earnings to find the exact flip.

Found 6 names. One I'd been watching already (validating). Two were companies I'd never heard of that turned out genuinely interesting after digging in.

**Screen 3: "Declining stock price but improving fundamentals"**

The classic contrarian screen. Revenue growing, margins expanding, stock down 20%+ over six months. Sentiment and fundamentals diverged — one of them is wrong.

This screen is noisy. Sometimes the stock is down because the market knows something the numbers don't show yet. But it also surfaces genuine mispricing. I found a mid-cap tech name that sold off on a mediocre earnings guide, but net retention, RPO growth, and margins were all improving. Bought the dip. Up 18% since.

Hit rate across all 14 screens: maybe 1 in 5 turned into an actual investment idea.

That's fine. Screening is a funnel, not a stock picker.

## How Screens Lie

I should be honest about this part. Everything above makes it sound like I found some secret edge. I didn't.

**Survivorship bias.** I told you about @HIMS before it ran 40%. I didn't mention the screens that found stocks that went nowhere. Or down. I don't remember those as vividly, which is exactly the problem. For every @HIMS, there were probably 3 names from the same screen that flatlined.

**Overfitting.** You can always design a screen that would have found last year's winners. "Companies with 30%+ revenue growth, expanding margins, and a CEO named Jensen." Congratulations, you found @NVDA. Useless going forward. The real test: would I have run this screen *before* knowing what won?

**Data mining.** Run 50 screens with different criteria and some will look amazing by pure chance. That's not alpha. That's noise. The fix: have a thesis *before* you screen. Don't screen randomly and invent a narrative around the results.

**The "AI said so" trap.** Because AI returns results in confident, well-structured language, it's easy to over-trust the output. I've caught myself doing this — Bloom returns 8 stocks, the presentation is clean, the reasoning sounds smart, and I start treating the list as gospel.

It's not a buy list. It's an idea list. Every name still needs real research before money moves.

## The Screen Gets You the List. The Research Gets You the Thesis.

A stock screen — even a brilliant one — doesn't tell you what to buy. It tells you what to *look at*.

Metal detector on the beach. It beeps. You dig. Sometimes a ring, sometimes a bottle cap. The detector doesn't know the difference. You do.

AI makes screening faster and more expressive. Plain English queries that would've taken hours in a traditional screener — if they were possible at all. ~4,000 investable US stocks narrowed to 10 or 15 worth actually researching. That's the value.

But the thinking starts at the screen results. Not stops.

Run weird, creative screens. Ask questions Finviz can't answer. Combine numbers with context. Express your actual investment ideas in plain language — with [Bloom](https://investwithbloom.com) or whatever tools you've got.

Just don't confuse the beep with finding gold.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, investing, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). You can find him on X [@exiao3](https://x.com/exiao3).*
