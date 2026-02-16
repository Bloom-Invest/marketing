<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

## Variant B: "The Napkin Math Angle"
Open with the concept that most investment decisions are made on vibes and napkin math. Frame financial modeling as the "missing middle" between gut feeling and Wall Street's 50-tab spreadsheet. Build toward AI as the thing that fills that gap.

**Structure:**
1. Hook: Most people invest on vibes. Wall Street invests on models. There's nothing in between.
2. What Wall Street actually builds (and why it matters)
3. The retail investor gap — too hard, too many assumptions
4. AI agents as the bridge
5. Worked example: DCF for a real company
6. Stress-testing assumptions
7. When modeling is theater vs. when it's useful
8. Garbage in, garbage out — AI can't predict the future
9. How Bloom approaches this

## ✅ Variant C: "The Earnings Season Panic Angle" ← CHOSEN
Open with a specific moment during earnings season — a stock drops 15% after-hours and you're staring at the screen trying to figure out if the selloff is justified. The answer requires a model, but you don't have one. Frame the whole article around the gap between "I need to know what this stock is worth" and "I have no idea how to figure that out." AI closes that gap.

**Structure:**
1. Hook: Earnings miss, stock tanks 15%, you're frozen — is this a buying opportunity or the beginning of something worse? You need a model.
2. What a financial model actually is — DCF, comps, revenue build, explained like a human
3. Why most people don't build them (too hard, too many assumptions, Excel nightmares)
4. How AI agents make it accessible — describe the business, get a model
5. Worked example: Building a simple DCF for Shopify with an AI agent
6. Sensitivity analysis — "What if growth drops to 15%?" / "What if margins compress?"
7. The limitations — garbage in garbage out, AI can't predict the future, false precision
8. When a model is useful vs. when it's just theater
9. How Bloom handles financial modeling

**Why this one:** It starts with an emotional, relatable moment (panic during earnings), which gives the reader a reason to care about financial modeling. The other two angles are more intellectual — this one is visceral. It mirrors the style of Article #3 (opening with a specific moment that creates urgency).

</details>

---

# My Stock Dropped 15% After Hours. I Had No Idea If I Should Buy More or Run.

*Financial models used to require an Excel wizard and a finance degree. Now an AI agent builds one while you're still reading the earnings press release.*

---

It's 4:07pm on a Thursday in January. Meta just reported earnings. Revenue beat. Earnings beat. But Zuckerberg said the magic words — "we're going to increase capital expenditure significantly" — and the stock dropped 12% after hours. Ninety billion dollars of market cap, gone in minutes.

I'm staring at my screen with $14,000 worth of META in my portfolio, watching the number go red, and my brain is simultaneously screaming "BUY THE DIP" and "GET OUT NOW."

You know what would've helped? A financial model. Something that says: if Meta's revenue keeps growing 22% and they spend $40B on capex instead of $30B, what's the stock actually worth? Is $390 a gift or a trap?

I didn't have one. I had vibes. I had Jim Cramer yelling on CNBC. I had a Reddit thread — half rocket emojis, half skulls. None of that is a model.

That night, I built one. Four hours in Google Sheets. Two formulas were probably wrong. By the time I finished, the stock had bounced back 6%.

Never again. If an AI agent can research a stock in four minutes, it can damn well build a financial model too.

## What a Financial Model Actually Is

Wall Street wraps financial modeling in enough jargon to make it feel like you need an MBA. You don't. A financial model is a spreadsheet that answers one question: **what is this company worth?**

Three flavors:

**Discounted Cash Flow (DCF)** — the gold standard. Estimate how much cash the company generates over 5-10 years, discount it back to today's dollars. A dollar next year is worth less than a dollar today. The output: an "intrinsic value" — what the business is theoretically worth regardless of market price.

**Comparable Company Analysis (Comps)** — the quick-and-dirty cousin. Look at similar companies, see what multiples the market pays (P/E, EV/EBITDA, price-to-sales), apply those to your company. If Salesforce trades at 30x earnings and ServiceNow at 40x, maybe a similar SaaS company deserves 35x. Rough. Surprisingly useful.

**Three-Statement Model** — the full enchilada. Income statement, balance sheet, cash flow statement, all from the ground up. Revenue by segment, cost assumptions, working capital, debt schedules. Investment bankers build these in 80-hour weeks. Massive overkill for most retail investors.

Here's the dirty secret: even on Wall Street, the models are wrong. Always. Every single one. The value isn't the final number — it's the *structure* of thinking. A model forces you to make assumptions explicit. Growth rate: 20% or 25%? Margin expansion or contraction? Each assumption is a lever you can pull.

Models don't predict the future. They force you to *think* about it in a structured way.

## Why Retail Investors Never Build One

Even a simple DCF takes real skill. You need clean financial data, the difference between free cash flow and operating cash flow, defensible growth assumptions, and enough Excel fluency to avoid circular-referencing your spreadsheet into oblivion. (Every finance intern has done this at least once.)

I've talked to hundreds of retail investors building [Bloom](https://investwithbloom.com). Almost none build models. Not because they're dumb — because the ROI doesn't pencil. You've got a $50K portfolio, a full-time job, and 30 minutes on Sunday morning. You're not spending four hours modeling Apple's services revenue by geographic segment.

So what do people actually do? Check the P/E ratio on Yahoo Finance. Read a couple Seeking Alpha articles. See if the stock is above its 200-day moving average. Maybe ask ChatGPT "is NVDA a good buy?"

That's not analysis. That's astrology with extra steps.

The gap between "I checked the P/E ratio" and "I built a DCF" is enormous. For most of investing history, nothing existed in between. You either did the professional-grade work or you winged it.

AI agents close that gap.

## Describe the Business. Get a Model.

You say: *"Build me a DCF for Shopify. Revenue grows 25% this year decelerating to 18% by year 5. Operating margins expand from 15% to 22%. 10% discount rate, 25x terminal multiple."*

The agent pulls Shopify's financials — $7.76B TTM revenue, current margins, capex, share count — and builds the model. Not a summary. An actual year-by-year projection with discounted cash flows, terminal value, and implied share price.

Thirty seconds.

But here's what matters: the conversation *after*. The first model is just a starting point.

"What if revenue growth only hits 20%?"

New number. Ten seconds.

"What if margins stay flat at 15%?"

New number. Ten seconds.

"What about a 30x terminal multiple — the market's been paying a premium for high-quality SaaS?"

New number. Ten seconds.

This is sensitivity analysis — the most valuable part of modeling — and it used to mean rebuilding half your spreadsheet. Now you just ask questions in English.

## A Real Example: Quick DCF for Shopify

**The setup:** Shopify (SHOP) trades around $105. TTM revenue: $7.76B, growing ~26%. Operating income: ~$1.2B (15% margin). ~1.29B diluted shares. No significant debt.

**My assumptions:**
- Revenue growth: 25% → 22% → 20% → 19% → 18% (decelerating)
- Operating margin: 15% → 17% → 19% → 21% → 22% (expanding)
- Tax rate: 15% (NOLs)
- Capex: 4% of revenue
- Discount rate: 10%
- Terminal growth: 3%
- Terminal P/FCF: 25x

**What the model produced:**

| Year | Revenue ($B) | Op. Income ($B) | FCF ($B) |
|------|-------------|-----------------|----------|
| 1    | 9.70        | 1.65            | 1.26     |
| 2    | 11.83       | 2.01            | 1.54     |
| 3    | 14.20       | 2.70            | 2.13     |
| 4    | 16.90       | 3.55            | 2.87     |
| 5    | 19.94       | 4.39            | 3.59     |

Terminal value (25x year-5 FCF): ~$89.7B. Discounted cash flows plus discounted terminal value: ~$120.7B.

Divided by 1.29B shares: **~$93.50 per share.**

Shopify's at $105. The model says 12% overvalued.

Is that "right"? No. It's exactly as good as my assumptions. But now I have a framework. I know what has to be true for $105 to make sense: either faster growth, more margin expansion, or a market willing to pay a premium multiple.

## "What If Growth Drops to 15%?"

This is where it gets fun.

**Growth disappointment.** Macro slows, Shopify revenue grows 15% annually instead of 25-18%. Everything else holds.

Year 5 revenue: ~$15.6B instead of $19.94B. Implied share price: **~$61.** That's 42% downside. Ouch.

**Margin expansion story.** Growth stays on track but margins hit 28% by year 5 instead of 22%. Maybe AI tools help Shopify cut costs. (Using AI to model AI's impact on AI companies — yes, I see the irony.)

Implied share price: **~$118.** Slightly cheap.

**Multiple compression.** Growth and margins hit targets, but the market pays 18x terminal FCF instead of 25x. Rates stay higher, risk premiums expand.

Implied share price: **~$72.** Great execution, stock still drops 30%.

Two minutes. Three scenarios. Here's what they tell me:

- **Bull case:** roughly fair, maybe slightly cheap (+12%)
- **Growth disappointment:** 42% downside
- **Multiple compression:** 30% downside even with solid execution

That's asymmetric — and not in my favor. Upside: 12%. Downside: 30-42%. Maybe I wait for a pullback.

*That's* what a model does. It doesn't predict the future. It tells you what you're betting on and whether the odds favor you.

## Garbage In, Garbage Out

Time for cold water.

An AI builds a financial model in 30 seconds. But the model is only as good as the assumptions you feed it. And the AI won't check your work.

Tell the AI "assume 40% revenue growth for 5 years" and it'll build that model without blinking. It won't mention that almost no company in history has sustained 40% growth for five consecutive years. It won't flag your 35x terminal multiple when the historical average is 15-20x. It's a calculator with perfect manners — it'll compute whatever you hand it and present it with full confidence.

**False precision is the real trap.** A model that says $93.47 is lying to you. The honest answer is a range — maybe $70 to $120 — and the *width* of that range is the point. If your bull and bear cases span $60 to $180, the model is screaming: "I have no damn clue, and neither do you."

**AI inherits your biases.** Bullish on a stock? You'll feed optimistic assumptions and get optimistic output. Congratulations — you just used a machine to confirm what you already believed.

The fix: **always model the bear case first.** Start with the assumptions you *don't* want to be true. If the stock still looks interesting under pessimistic assumptions, now you've got something.

## When a Model Helps vs. When It's Theater

**Useful:**
- Deciding whether to buy, hold, or sell a position you own
- Reverse-engineering what assumptions are baked into the current price
- Comparing two similar companies with a consistent framework
- Stress-testing a thesis: "what has to go wrong for me to lose 30%?"
- Earnings just dropped and you need to assess the reaction fast (hi, Meta)

**Theater:**
- Justifying a position you've already taken
- Using a single-point estimate as a "price target"
- Running a DCF on a pre-revenue biotech burning cash
- Projecting 10 years for a company that's existed for 3
- Posting it on Twitter with "My model says 300% upside 🚀"

The sell-side analyst publishing a $200 target on a stock at $195 isn't modeling — they're marketing. The buy-side analyst stress-testing twenty scenarios before deploying $50M is actually using the tool.

You get to choose which version you want to be.

## How Bloom Handles This

When I built [Bloom](https://investwithbloom.com), I wanted modeling accessible without being dumbed down. The AI agent pulls real financial data, builds projections from your assumptions (or suggests reasonable ones if you're unsure), and lets you iterate through scenarios conversationally.

You don't need to build a WACC calculation from scratch. You don't need to remember the terminal value formula. Describe the business, the AI builds the model, you argue with the assumptions.

*Argue* — that's the key word. The best analysts don't build a model and walk away. They poke at it. They ask "what would have to be true for this to work?" and decide if they believe it.

AI agents make that conversation accessible to anyone who can type a sentence.

## The Bottom Line

Financial modeling used to be gatekept. You learned it in banking, from a $500 online course, or not at all. Most retail investors fell into bucket three and invested on vibes.

AI agents didn't make models smarter. They made the process *accessible.* Describe the business, set assumptions, see output, iterate. Hours collapsed to minutes.

But the model is not the answer. It's a *thinking tool.* It forces explicit assumptions, scenario testing, and an honest look at the range of outcomes.

That Meta earnings night? With a model ready, I'd have known in two minutes that even with the capex increase, the stock was below my base-case intrinsic value. I'd have bought the dip instead of staring at my screen in a cold sweat.

Instead, I spent four hours in Google Sheets and still wasn't sure.

Build the model before you need it. Let the AI do the spreadsheet work. Save your brainpower for the only part that matters: deciding what you believe.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, investing, and the intersection of both at [blog.promptpm.ai](https://blog.promptpm.ai). You can find him on X [@exiao3](https://x.com/exiao3).*
