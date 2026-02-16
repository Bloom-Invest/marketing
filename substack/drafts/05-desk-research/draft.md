<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

# Article #5: Outline Variants
## "Using AI Agents to Automate Your Investment Desk Research"

---

## ✅ OPTION A — "The Junior Analyst Is Dead" (CHOSEN)

**Angle:** Walk through the actual Wall Street desk research workflow step-by-step, show how AI agents replicate each stage, use Bloom as the throughline. Opens with the personal anecdote of Eric doing desk research manually at his old job vs. what he does now.

1. **Hook** — Personal anecdote: spending a weekend building a stock pitch deck / research memo manually, realizing AI could do 80% of the work
2. **What "Desk Research" Actually Means** — Wall Street definition vs. retail investor reality. The junior analyst workflow: screens → filings → models → memo. Why retail investors unknowingly do a crappy version of the same thing.
3. **The $350,000 Junior Analyst Workflow** — Break down what a first-year analyst actually does (specific steps, hours, output). Most of it is mechanical data gathering and formatting, not insight.
4. **How AI Agents Replicate Each Step** — Map the analyst workflow onto AI agent capabilities:
   - Screening → Natural language queries vs. checkbox screeners
   - Data gathering → API calls to financial data sources in seconds
   - Financial modeling → Scenario analysis and valuation sanity checks
   - Qualitative research → Summarizing filings, earnings calls, news
   - Memo writing → Structured bull/bear case generation
5. **A Real Desk Research Session in Bloom** — Full walkthrough of researching a stock from scratch using Bloom, showing the actual workflow and output
6. **The Quality Gap: What AI Does Better** — Speed, breadth, consistency, no ego, doesn't anchor to prior beliefs, covers more ground
7. **The Quality Gap: What AI Still Misses** — Management quality, competitive intuition, regulatory "feel," knowing when numbers lie, relationship-driven intel
8. **Why This Matters If You Don't Have a Research Team** — The democratization angle: individual investors now have access to analyst-quality workflow without the team. Not dumbed-down — the actual workflow, automated.
9. **The Pillar Post Tease** — Brief forward references to deeper dives coming (financial analysis, valuation, screening, insider data — future articles 6-12)
10. **Close** — You're the portfolio manager now. The grunt work is automated. The thinking is still yours.

**Why this outline:** Most comprehensive. Follows the natural "what is it → how did it work → how does AI do it → proof → gaps → implications" arc. The Wall Street comparison gives it authority and specificity. The full walkthrough gives it utility.

---

</details>

---

# Using AI Agents to Automate Your Investment Desk Research

*Wall Street pays junior analysts $150K to do work that's 80% mechanical. AI agents do that 80% in minutes. Here's exactly how — and where the humans still win.*

---

It's 2019 and I'm sitting in my apartment at 1am on a Sunday night, surrounded by three monitors, fourteen browser tabs, and a spreadsheet that's become sentient. I'm trying to build a stock pitch for a company I found on a screener three days ago.

Three days. One stock.

Day one: pulling financial statements from SEC filings because Yahoo Finance had a weird discrepancy in the share count. Day two: reading two years of earnings call transcripts, highlighting every time the CFO mentioned "operating leverage" and trying to figure out if he was full of shit. Day three — tonight — building a DCF model, stress-testing three scenarios, and writing a one-page memo so future-me would remember *why* I liked this company when the thesis was being tested.

Twenty-three more stocks on my watchlist. The math didn't work.

Today I text my AI agent three sentences and get a structured research memo in four minutes. Not a summary. Not a vibe check. Financials, valuation, bull case, bear case, insider activity, catalysts. The kind of thing that used to eat my whole weekend.

Here's how AI agents are replacing the desk research workflow — the actual Wall Street workflow, not the watered-down retail version — and what that means for anyone trying to make informed investment decisions without a research team.

## What "Desk Research" Actually Means (And Why You're Already Doing It Badly)

"Desk research" is Wall Street jargon for the grunt work that happens before anyone makes an investment decision. On a buy-side equity team, junior analysts spend 70-80% of their time on it. The senior portfolio manager has the ideas. The junior proves or disproves them with data:

1. **Screening** — Filtering thousands of stocks down to a list based on criteria
2. **Data gathering** — Pulling financial statements, operating metrics, guidance, consensus estimates
3. **Filing review** — Reading 10-Ks, 10-Qs, proxy statements, earnings call transcripts
4. **Financial modeling** — Projecting future earnings, cash flow, and valuation
5. **Competitive analysis** — Understanding industry landscape, market share dynamics, threats
6. **Memo writing** — Synthesizing everything into a structured document with a clear recommendation

Screen → gather → read → model → analyze → write. A good junior analyst does this for one stock in 8-12 hours. A thorough deep dive takes 20-40 hours.

**You're already doing this workflow.** You're just doing a half-assed version of it.

When you check a stock on Yahoo Finance, that's step 2. When you read a Reddit post about why someone likes a company, that's a crappy version of step 5. When you glance at the P/E ratio and decide "that seems reasonable," that's step 4 with 5% of the rigor.

The problem isn't intelligence. It's that the full workflow takes forever, requires specialized tools, and nobody taught you the process. So you skip steps. The steps you skip are usually the ones that matter most.

## The $150K Copy-Paste Machine

There's a perception that Wall Street junior analysts do incredibly sophisticated intellectual work. Sometimes they do. Mostly? They don't.

A first-year analyst making $150K-$200K spends most of their time on fundamentally mechanical tasks. Pulling data from Bloomberg terminals. Copying numbers into Excel. Formatting slides. Reading 180-page filings and highlighting the three paragraphs that matter. Updating models when new earnings drop.

The *insight* — "this company is undervalued because the market is mispricing their recurring revenue transition" — comes from the PM or the senior analyst who's stared at this sector for years. Not from the data gathering. From thinking about what the data means.

But you can't get to the insight without the grunt work. The PM only sees the mispriced recurring revenue transition because someone pulled five years of revenue by segment, charted the mix shift, and modeled what margins look like at scale.

AI agents are the first technology that credibly replaces that mechanical layer. Not the thinking. The grunt work that enables the thinking.

## How AI Agents Replicate Each Step

I'll use [Bloom](https://investwithbloom.com) as the example because it's what I built, but the principles apply to any AI agent with financial data access.

### Screening: Natural Language Beats Checkboxes

Traditional stock screeners — Finviz, Zacks, your brokerage's built-in tool — work on filters. P/E under 20. Market cap over $10B. Revenue growth above 15%. Check boxes, get a list.

The problem: the most interesting screening criteria can't be expressed as checkboxes. "Companies where insider buying has accelerated in the last quarter while the stock is down 20% from its high" — try putting that into Finviz. You can't. It requires combining financial data, price data, and insider transaction data, then applying a qualitative filter.

An AI agent handles that query in natural language. It's the difference between Google in 2004 (keyword matching) and Google in 2024 (semantic understanding).

I've started doing what I call "thesis-driven screening." Instead of filtering by numbers, I describe the type of company: *"Mid-cap SaaS companies with net retention above 120%, accelerating revenue growth, and a path to profitability within two years."* The agent understands the intent, not just the parameters.

### Data Gathering: Completeness Beats Speed

Pulling financial statements from APIs is fast. The agent calls the data sources, gets the income statement, balance sheet, and cash flow statement, organizes them. Seconds instead of minutes.

But the real win isn't speed — it's consistency. When I pull data manually, I'm lazy. I check revenue, earnings, maybe free cash flow. I skip the balance sheet because it's boring. I forget the cash flow statement.

The AI pulls everything. Every time. It doesn't skip the boring parts and it doesn't miss that the company has been quietly loading up on debt while reporting record earnings.

### Filing Review: Where the Real Alpha Hides

10-K filings are long. Alphabet's 2024 10-K runs over 100 pages. So nobody reads them — not retail investors, and honestly, most junior analysts skim more than they'd admit.

But buried in those filings: risk factors that telegraph future problems. Revenue recognition changes that make comparisons misleading. Related party transactions that raise governance flags. The MD&A section where the CFO quietly admits a key product line is decelerating.

You can feed an AI agent a 10-K and ask: *"What are the three most important things in this filing that aren't obvious from the financial statements?"* or *"Has anything in the risk factors changed materially from last year?"* The agent reads the whole thing — actually reads it — and pulls out the signal.

The filings are where the real information lives. Everything else — earnings commentary, analyst reports, financial news — is downstream. For the first time, you can actually process them without dedicating an afternoon to each one.

### Financial Modeling: Stress-Test Assumptions, Skip the Spreadsheet

AI agents won't replace a properly built financial model. But they do something almost as valuable: rapid scenario analysis.

*"If CrowdStrike grows revenue 25% annually for three years and operating margins expand to 30%, what's the stock worth at 35x earnings?"* Seconds. Then iterate: *"What if growth slows to 15%? What if the multiple compresses to 25x?"*

You're not building a model. You're stress-testing assumptions. For most investment decisions — especially "is this stock worth researching further?" — stress-testing beats a precise DCF. The DCF gives you false precision. Scenario analysis gives you a range and tells you which assumptions actually matter.

### Memo Writing: The Step Everyone Skips

Most retail investors do some research, form a vague impression, and buy. Six months later, they can't remember why they bought the stock or what would change their mind. I've done this. It's how you end up holding losers way too long.

Bloom generates structured research output — "bottom line" summaries covering profitability, growth, valuation, and insider activity. Bull case, bear case, key metrics, what to watch. Not a Wall Street memo with a formal recommendation. But a framework that makes your thinking explicit.

You bought CRWD because revenue is growing 33% with expanding margins and the security spending tailwind is real. If margins stop expanding or growth decelerates to 15%, that's your signal to reassess. The memo is an investment journal entry that future-you can actually use.

## A Real Session: Desk Research on HIMS in 4 Minutes

Theory is nice. Let me show you what this actually looks like.

A friend mentions Hims & Hers (HIMS). I know almost nothing — telehealth, sells health products online. Here's what happened:

**Minute 0-1:** I ask Bloom for a full analysis. Revenue: $1.5B trailing twelve months, growing 69% year-over-year. Gross margin: 82%. I sit up a little straighter. That's software-level gross margin on a consumer health company. Net income just turned positive. 2M+ subscribers on a recurring model.

**Minute 1-2:** Profitability improving fast — operating leverage kicking in as subscribers scale. Growth accelerating, not decelerating. Cash flow positive. No scary debt.

**Minute 2-3:** Bull case: massive TAM in men's and women's health, sticky subscriptions, GLP-1 weight loss products as a major catalyst. Bear case: FDA compounding rules could kneecap the GLP-1 business, customer acquisition costs are high, stock has already tripled so good news is priced in. Regulatory risk is real and specific — not a generic disclaimer.

**Minute 3-4:** Multiple insiders buying recently. Valuation: ~30x forward earnings for a 69% grower. Companies growing at half that rate often trade at similar multiples.

**My call:** Watchlist. Monitor through next earnings. Watch for the FDA compounding pharmacy ruling as the key swing factor. The base business (hair loss, ED, skincare) is solid regardless. If the GLP-1 overhang clears, this could run. If it doesn't, downside risk.

Four minutes. From "I've heard of this company" to a structured thesis with specific metrics, an identified catalyst, and a clear trigger to reassess.

## Where AI Agents Actually Win

After hundreds of these analyses, the advantages aren't what you'd expect:

**Consistency.** When I research manually, quality depends on how tired I am, how excited I am about the stock, and whether I remembered to check the balance sheet. The AI runs the same comprehensive process every time. No lazy Sundays. No confirmation bias shortcuts.

**Breadth.** I can screen and do initial research on 50 stocks in the time it took to deep-dive on one. That's not just a time saving — it fundamentally changes the probability of finding great opportunities. The best stock in your portfolio might be one you'd never have looked at.

**No ego.** Once I've spent three days researching a stock, I *want* it to work. I'm anchored. I unconsciously downweight negative information. The AI doesn't care. It presents the bear case just as confidently as the bull case. Zero sunk costs.

**Pattern recognition at scale.** When you've researched 10 companies in a sector, you don't notice patterns. When the AI has processed hundreds, it contextualizes — "this margin profile is unusual for the industry" or "this growth rate is decelerating faster than peers."

## Where AI Agents Still Fall Short

The "AI replaces everything" narrative is bullshit. Here's what AI agents genuinely can't do:

**Management quality assessment.** Numbers tell you what happened. They don't tell you if the CEO allocates capital wisely or chases value-destroying acquisitions. Berkshire vs. GE isn't a quantitative difference — it's Warren Buffett vs. Jeff Immelt. AI can't evaluate that from filings.

**Competitive intuition.** A great investor *feels* competitive dynamics shifting before the numbers show it. "Google is getting disrupted by AI search" required understanding technology adoption, product quality trajectories, and consumer behavior — not financial data. AI can summarize what analysts say about competition. It can't develop original competitive insight.

**Knowing when the numbers lie.** Some companies are better accounting artists than others. Super Micro Computer had financials that looked great — until they didn't. Wirecard had years of fabricated growth. AI agents trust their data sources. If the data is wrong, the analysis is confidently wrong.

**Relationship-driven intelligence.** The best investors get information from their network — suppliers, customers, former employees. "I talked to three enterprise CIOs and none are renewing Salesforce" is intelligence that moves prices and can't come from API data.

**Timing.** AI can tell you a stock is undervalued. It can't tell you *when* the market will agree. Being right but early is functionally the same as being wrong — especially if you run out of patience or capital before the thesis plays out.

The right mental model: **AI is the best junior analyst you've never been able to afford.** Fast, tireless, thorough, no ego. But junior. You're still the PM. The final call — buy, sell, hold, size, timing — is yours.

## Why This Matters If You Don't Have a Research Team

For decades, research quality correlated directly with assets under management. Hedge funds have analyst teams, Bloomberg terminals ($24K/year per seat), expert networks, proprietary data. Retail investors get Motley Fool articles and Reddit threads.

That gap was never about intelligence. It was about resources — time, tools, data, and people to do the mechanical work.

AI agents collapse that gap.

Not completely. A $10 billion fund will always have advantages — management access, proprietary data, market-moving capital. But the desk research? Screening, data gathering, filing review, basic modeling, memo writing? That's now accessible to anyone with an internet connection and $20/month.

That's what I built [Bloom](https://investwithbloom.com) to do. Not to replace your judgment — to give you research infrastructure that was previously only available to people managing millions.

You don't need a team. You need an agent.

## What's Next

This is the foundation. Over the next several posts, I'll deep-dive into each piece: how AI actually analyzes financial statements, the right way to think about valuation without a 50-tab spreadsheet, using AI to screen for opportunities you'd never find manually, and what insider activity actually tells you versus when it's noise.

Subscribe if you want the rest.

## The Punchline

Five years ago, three monitors, 1am, one stock memo after three days of work. Twenty-three more on the list.

Today the grunt work takes minutes. The desk research workflow that required a team of analysts and a Bloomberg terminal runs on your phone.

What hasn't changed — what I hope never changes — is the thinking. Whether a CEO is trustworthy. When a sector is about to turn. The discipline to sell when the thesis breaks. The willingness to sit in cash when nothing looks good.

AI gives you the research. The decisions are still yours.

That's not a limitation. That's the whole point.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app for iOS and Android. He writes about AI, investing, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
