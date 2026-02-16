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

Last month I ran a screen that no traditional stock screener can run.

"Find me US companies between $2B and $20B market cap where revenue growth is accelerating quarter over quarter, insiders have been buying in the last 90 days, and the stock is still trading below its 5-year average P/E ratio."

Any analyst would understand that immediately. Try typing it into Finviz. You can filter by P/E. You can filter by market cap. You can sort by revenue growth. But "accelerating quarter over quarter"? That's a *trend*, not a number. Finviz doesn't do trends. It does snapshots.

So I asked [Bloom](https://investwithbloom.com).

Bloom returned 11 names. Most were boring — small industrials and regional banks I'd never heard of. But one was HIMS. Revenue had gone from 47% YoY growth to 69% over three quarters. Multiple insiders had bought shares. Trading at roughly 30x forward earnings — cheap for a company accelerating that fast.

Six weeks later, it ran 40%.

The screen didn't "predict" that. But it surfaced a name I never would have found scrolling Finviz filters on a Sunday night. That's the whole point of screening.

## Stock Screeners Haven't Changed Since 2010

Finviz, Yahoo Finance Screener, TradingView — fundamentally the same product they were 15 years ago.

Yes, prettier UI. Yes, more filters. TradingView has 150 of them now. But the interaction model is identical: set numerical thresholds, database returns matching rows. P/E less than 20. Market cap above $1B. Revenue growth above 15%. Here's your list.

Fine if your thesis is a set of numerical cutoffs. Most good theses aren't.

What you actually want when screening:

- "Companies where the business is inflecting but the stock price hasn't caught up"
- "SaaS companies that just crossed into profitability for the first time"
- "Beaten-down names where insider buying suggests the bottom is in"
- "Accelerating revenue growth AND expanding margins — not one or the other"

None of these are a single number. They're patterns. They require context. They need the screener to *understand* what you're looking for, not just match rows.

Traditional screeners are SQL queries with a GUI. Revolutionary in 2005. A limitation in 2025.

## The Gap Between What You Want and What You Can Filter

I used to spend an embarrassing amount of time on Finviz. Set up a screen — P/E under 25, revenue growth over 20%, market cap $2B-$50B — get back 80 results. Sort by different columns. Squint at numbers. Click through a few. Read some summaries.

Find nothing I was excited about.

The problem wasn't the data. My question was more nuanced than the filters allowed.

What I actually wanted: "Companies growing fast enough to justify a premium valuation, but currently trading at a discount to their growth rate." That's a PEG ratio screen, sort of. But PEG ratios use backward-looking earnings and single-point growth estimates. They miss businesses where growth is *changing direction*.

A company growing revenue at 15% isn't exciting. A company that grew 8%, then 12%, then 15%, then 22% over four quarters — that's a business inflecting. The trajectory matters more than any single number. No checkbox screener can filter by trajectory.

With an AI agent, I just say what I mean.

*"Find me mid-cap companies where revenue growth has accelerated for at least 3 consecutive quarters."*

Bloom pulls financial data, calculates quarter-over-quarter change in growth rates, returns names that match. No pre-built filter needed. It builds the analysis on the fly.

That's not an upgrade. That's a different category of tool.

## Two Kinds of Screens Most People Conflate

There are two fundamentally different types of stock screens. Conflating them will screw you up.

**Quantitative screens** are pure numbers. Revenue growth > 20%. P/E < 30. Insider buying > $500K in 90 days. Traditional screeners handle these fine (when the filters exist). Fast, objective, backtestable.

**Qualitative screens** are pattern-based. "Companies pivoting toward AI." "Firms where a new CEO from a successful competitor just took over." "Businesses with regulatory tailwinds that haven't been priced in." These require understanding, not filtering. No checkbox screener can touch them.

The magic is combining both.

One of my favorites: *"Find me companies with market cap under $10B, revenue growth above 25%, AND that recently announced a new product line or strategic pivot."*

First part is quantitative — Bloom filters the numbers. Second part is qualitative — it reads news, press releases, earnings call summaries to identify strategic shifts. A traditional screener gives you the numbers half. AI gives you both in one query.

Another I run regularly: *"Companies where short interest has increased significantly but insider buying has also increased. The insiders and the shorts are disagreeing — who's right?"*

That screen asks the AI to identify a *tension* in the data and present it as a research question. Finviz cannot conceptualize this. It doesn't know what "disagreement between insiders and shorts" means. It has checkboxes.

## Screens That Actually Found Something

Theory is nice. Results are better.

**Screen 1: "Accelerating revenue + insider buying + reasonable valuation"**

The HIMS screen from the intro. Ran it early 2025. Besides HIMS, it surfaced a couple of industrial tech names and a healthcare company I won't name because I'm still building a position.

The key: "reasonable valuation" wasn't a hard number. The AI interpreted it as "not trading at a ridiculous premium relative to growth." That's judgment, not a filter.

Of 11 results, I researched 4 in depth. Two made my watchlist. One I bought.

**Screen 2: "SaaS companies that just turned profitable for the first time"**

Companies crossing from cash-burning growth mode to profitability often get re-rated by the market. The transition is the catalyst. But "just turned profitable" is brutal to screen traditionally — you'd need to check 8 quarters of earnings to find the flip.

Found 6 names. One I'd been watching already (validating). Two were companies I'd never heard of that turned out genuinely interesting after digging in.

**Screen 3: "Declining stock price but improving fundamentals"**

The classic contrarian screen. Revenue growing, margins expanding, but stock down 20%+ over six months. Sentiment and fundamentals have diverged — one of them is wrong.

This screen surfaces noise. Sometimes the stock is down because the market knows something the numbers don't show yet. But it also surfaces genuine mispricing. Found a mid-cap tech name that sold off after a mediocre earnings guide, but net retention, RPO growth, and margins were all improving. Bought the dip. Up 18% since.

Hit rate on screens isn't 100%. Not even close. Maybe 1 in 5 turns into an actual investment idea. That's fine. Screening is a funnel, not a stock picker.

## How Screens Will Lie to You

Time for the part where everything I just said gets dangerous.

**Survivorship bias.** I told you about HIMS before it ran 40%. I didn't mention the screens that found stocks that went nowhere. Or down. I don't remember those as vividly. For every HIMS, there were probably 3 names from the same screen that flatlined.

**Overfitting.** You can always design a screen that would have found last year's winners. "Companies with 30%+ revenue growth, expanding margins, and a CEO named Jensen." Great, you found NVDA. Useless going forward. When you design a screen, ask: "Would I have run this *before* knowing what won?"

**Data mining.** Run 50 screens with 50 different criteria and some will look amazing by pure chance. That's not alpha. That's noise. The antidote: have a thesis *before* you screen. Don't screen randomly and invent a narrative to explain the results.

**The "AI said so" trap.** Because AI returns results in confident, well-structured language, it's easy to over-trust the output. The AI doesn't know if a screen is well-designed or garbage. It runs both with equal confidence. Your skepticism is the quality filter.

I've caught myself doing this. Bloom returns 8 stocks, the presentation is clean, the reasoning sounds smart, and I start treating it as a buy list. It's not. It's an *idea* list. Every name still needs real research before money moves.

## Screening ≠ Stock Picking

A stock screen — even a brilliant one — doesn't tell you what to buy. It tells you what to *look at*. The screen is the first 5 minutes of a process that should take hours.

Metal detector on the beach. It beeps. You dig. Sometimes a ring. Sometimes a bottle cap. The detector doesn't know the difference. It just narrows where to dig.

AI agents make screening dramatically faster and more expressive. Plain English queries that would've taken hours in a traditional screener — if they were possible at all. The universe of investable stocks is huge. Anything that helps find the interesting ones faster is a genuine edge.

But the thinking starts at the screen results, not stops.

Use AI to screen. Use [Bloom](https://investwithbloom.com), use whatever tools you've got. Ask questions traditional screeners can't answer. Combine quantitative and qualitative filters. Run weird, creative screens that express your actual investment ideas in natural language.

Just don't confuse the beep with finding gold.

The screen gives you the list. The research gives you the thesis. The thesis — not the screen — is what makes you money.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, investing, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). You can find him on X [@exiao3](https://x.com/exiao3).*
