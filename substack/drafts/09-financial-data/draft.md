<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

## Variant A: The Data Safari ✅ CHOSEN

### Title
**I Pulled Data From 6 Different Sources to Analyze One Stock. Then I Automated All of It.**

### Subtitle
*Yahoo Finance gives you price. SEC EDGAR gives you filings. Alpha Vantage gives you fundamentals. None of them give you the full picture. Here's how an AI agent stitches it all together.*

### Tone & Angle
Practical, builder-meets-investor. Opens with the personal pain of data fragmentation — the 17 browser tabs problem. Maps the entire data landscape (free vs paid, strengths vs weaknesses), then shows how Bloom's agent solves the aggregation problem. Specific tool names, specific data quality gotchas, specific examples. The reader walks away understanding both the landscape and the solution.

### Outline

**1. The 17-Tab Problem** (~250 words)
- Hook: Saturday morning, researching a stock, 17 browser tabs open
- Each tab = a different data source, each with different formats, different freshness, different coverage
- Yahoo Finance for price, SEC EDGAR for insider filings, Alpha Vantage for income statements, Google for news
- The realization: 60% of "stock research" is just *finding and assembling data*
- The actual analysis — the thinking part — is maybe 20 minutes. The data collection is 2 hours.

**2. The Financial Data Landscape (Honest Review)** (~500 words)
- Yahoo Finance: good for price/basic metrics, unreliable API, gets scraped to death
- Alpha Vantage: free tier gets you fundamentals, 5 calls/minute limit, international coverage spotty
- SEC EDGAR: gold standard for US filings, but raw XBRL is hell to parse
- Polygon.io: real-time and historical price data, solid API, $29/mo for useful tier
- EOD Historical Data: Bloom's choice for international + ADRs, surprisingly good coverage
- Bloomberg Terminal: the "if you have to ask, you can't afford it" option ($24k/year)
- Free vs paid tradeoffs — what you actually need as a retail investor

**3. What Each Source Is Actually Good (and Bad) At** (~300 words)
- Table/breakdown: price data vs fundamentals vs insider trades vs institutional holdings vs international
- The dirty secret: no single source has everything
- Specific gotchas: adjusted vs unadjusted prices, fiscal year vs calendar year, currency conversion

**4. How Bloom's Agent Pulls It All Together** (~400 words)
- The specific tools: get_stock_data, get_financials, get_technicals, get_insider_trades, get_institutional_holdings, get_news, web_search
- How the agent decides which tools to call (and in what order)
- Data normalization: different APIs return different formats, agent standardizes
- Real example: "Analyze SHOP" → agent calls 4-5 tools, assembles a coherent picture from fragmented sources

**5. The Data Quality Minefield** (~300 words)
- Stale data: earnings reported last night, API still shows last quarter
- Adjusted vs unadjusted prices: stock splits will ruin your analysis if you're not careful
- International stocks: ADRs, currency effects, different reporting standards (IFRS vs GAAP)
- Missing data: micro-caps and recent IPOs have gaps
- How the agent handles each of these (timestamps, warnings, graceful degradation)

**6. The Punchline: AI Agents as Data Infrastructure** (~250 words)
- The real value isn't any single data source — it's the orchestration layer
- An AI agent turns "I need data from 5 places" into "I need an answer"
- What used to be a Saturday morning of tab-juggling is now a 30-second tool chain
- CTA: Bloom (investwithbloom.com) handles the data plumbing so you can focus on thinking

---

</details>

---

# I Pulled Data From 6 Sources to Analyze One Stock. Then I Automated All of It.

*Yahoo Finance gives you price. SEC EDGAR gives you filings. Alpha Vantage gives you fundamentals. None of them give you the full picture.*

---

Last Saturday I sat down to research Shopify. One stock.

Forty-five minutes later I had 17 browser tabs open. Yahoo Finance for price and basic ratios. Alpha Vantage for the income statement. SEC EDGAR for the latest 10-Q because I wanted to see what management actually said about margins. OpenInsider for insider transactions. WhaleWisdom for institutional holdings. Google News for analyst takes. Finviz for the chart.

Seventeen tabs. Seven sources. And I still couldn't tell you whether the stock was worth buying.

I'd spent 40 minutes *collecting data* and 5 minutes *thinking about the investment*. I was a glorified copy-paste machine, shuttling numbers between websites and my brain, trying to hold it all together.

That 8:1 ratio — collection vs. analysis — is why I built [Bloom](https://investwithbloom.com). Not because the world needed another AI chatbot. Because the financial data landscape is an absolute mess, and someone needed to build the plumbing that makes it usable.

## The Financial Data Landscape Is a Garbage Fire

Here's the honest breakdown of every major source I've used. No affiliate links, no hedging.

**Yahoo Finance** — Free, decent coverage, gets you price, market cap, P/E. The catch: Yahoo killed its official API years ago. Everyone scrapes it. The unofficial APIs break constantly. I've had Yahoo return stale earnings data that was *two quarters old* with zero warning. Fine for a quick price check. Terrible as infrastructure.

**Alpha Vantage** — Free tier gives you 25 API calls per day. Premium starts at $50/month. Good for US fundamentals. International coverage is spotty — I've pulled data for Japanese stocks and gotten back completely empty fields with a 200 OK status code.

**SEC EDGAR** — Gold standard for US filings. Every 10-K, 10-Q, 8-K, Form 4, 13F — it's all here, free. The catch: XBRL format, which is basically XML's annoying cousin. Parsing raw EDGAR into usable numbers is a project unto itself. Entire companies (Calcbench, Last10K) exist just to make EDGAR readable.

**Polygon.io** — Well-designed API for real-time and historical price data. Free tier is delayed; $29/month gets you real-time. Great for price history. Not their strength for fundamentals.

**EOD Historical Data** — What Bloom uses for much of its data, especially international stocks. $30/month. 70+ exchanges. They handle IFRS-vs-GAAP normalization — the thing that makes international data a nightmare.

**Bloomberg Terminal** — $24,000/year. Per seat. The best financial data platform on Earth. Absolutely nobody reading this should pay for it. If you're a retail investor, you can get 95% of what you need for under $100/month. The last 5% isn't worth $24K.

## No Single Source Has Everything

**Every data source is good at one thing and mediocre-to-terrible at everything else.**

Current price + basic metrics? Yahoo Finance.
Detailed US financials? Alpha Vantage or EDGAR.
Insider transactions? SEC EDGAR Form 4.
Institutional holdings? 13F filings (also EDGAR, totally different format).
International stocks? EOD Historical Data.
Real-time tick data? Polygon.
All in one place? Bloomberg. For $24K.

This is the core problem. The data exists — all of it. It's scattered across six APIs with six authentication methods, six response formats, six rate limits, and six different definitions of "quarterly revenue."

A hedge fund hires a data engineering team to build ETL pipelines.

A retail investor opens 17 browser tabs on a Saturday morning and prays they didn't transpose a number.

## How Bloom Turns 6 Sources Into One Answer

When you ask Bloom "Give me a full analysis of SHOP," here's what fires under the hood:

1. **`get_stock_data`** — current price, market cap, P/E, 52-week range, dividend yield. ~2 seconds.

2. **`get_financials`** — income statement, balance sheet, cash flow. Revenue trends, margin progression, debt levels, free cash flow.

3. **`get_technicals`** — 21-day EMA, 50-day SMA, RSI, MACD. Momentum with you or against you.

4. **`get_insider_trades`** — recent Form 4 filings. Multiple insiders buying simultaneously is one of the strongest bullish signals in the market. Multiple insiders selling should scare the shit out of you.

5. **`get_institutional_holdings`** — 13F data. Are hedge funds building positions or trimming? Which funds? How much?

6. **`get_news` + `web_search`** — headlines, analyst reports, catalysts, risks.

Six calls. Fifteen seconds. The agent gets back six blobs of data in six formats and synthesizes them into a coherent analysis: rating, bull case, bear case, key drivers.

The same process I was doing across 17 tabs — except the agent does it while I sip my coffee.

## Data Quality Is a Minefield

This is where most "AI-powered financial tools" fall apart.

**Stale data is everywhere.** A company reports earnings at 4:15 PM. The APIs might not update until the next morning. Sometimes not for days. Ask for an analysis at 5 PM on earnings day? You might get last quarter's numbers served up with full confidence. Bloom checks data timestamps and flags when financials look stale relative to the last known earnings date. Not perfect — but a hell of a lot better than blindly analyzing quarter-old data.

**Stock splits will break your math.** A stock does a 4:1 split. If your price data is split-adjusted but historical earnings aren't, your P/E is off by 4x. That $100 stock with $5 EPS (P/E of 20) suddenly looks like a P/E of 80 because pre-split prices show $400. I've seen this exact bug in production. It's subtle, easy to miss, and makes you look like an idiot.

**International stocks are a separate hell.** Different reporting standards (IFRS vs. GAAP). Fiscal years ending in March, not December. Currency conversion. ADR ratios. When someone asks Bloom to analyze Toyota (TM), the agent needs to know the financials are in yen, the ADR represents a specific share count, and margins aren't directly comparable to a US automaker. Most financial AI tools just pull whatever the API returns and call it fact.

**Small caps and recent IPOs have gaps.** Ask for 5 years of history on a company that IPO'd 18 months ago — you get actual data mixed with empty fields. The question is whether the AI hallucinates numbers to fill gaps or honestly says "I only have 6 quarters." Bloom does the latter. But always sanity-check.

## Why AI Agents Are the Right Abstraction

Here's the insight that changed how I think about this: **the problem isn't the data. It's the assembly.**

Every number you need is available somewhere, probably free. Revenue's in the 10-K. Insider trades are on EDGAR. Price history is in a dozen APIs. The actual work of investing — deciding whether a stock is worth buying — takes maybe 20 minutes of focused thinking. But you can't start thinking until you've assembled the data. And assembly eats an hour.

AI agents solve this because they're built for orchestration. The agent doesn't care that insider transactions come from XBRL, price data from a REST API, and international financials from a different provider entirely. It calls the tools, normalizes the responses, and presents a unified picture.

This isn't "AI summarizes a webpage." That's a party trick. The value is in the orchestration — collapsing six data sources into one coherent view so you spend your time *thinking* instead of *searching*.

Before Google Maps, planning a road trip meant a paper atlas, a separate traffic website, and calling a gas station to ask if a road was open. All the information existed. Assembly was the bottleneck. Google Maps didn't create new data. It stitched existing data into something usable.

That's what a good financial AI agent does. Google Maps for stock data.

## What This Means for You

If you're still doing the 17-tab dance:

**For the data itself**, you don't need to spend much. Alpha Vantage free tier + EDGAR + Yahoo Finance covers 80% of US stock research. Add EOD Historical Data ($30/month) for international. Skip Bloomberg unless you're running a fund.

**For the assembly**, that's where agents earn their keep. The gap between "I have access to data" and "I have a coherent picture of this investment" is enormous — and it's exactly what agents are built to close.

I built [Bloom](https://investwithbloom.com) to be that assembly layer. Ask a question, the agent fans out across data sources, handles normalization and quality issues, and returns a structured analysis — rated thesis, specific numbers, bull and bear cases, insider and institutional context.

The 17-tab Saturday morning is a 30-second tool chain now.

Your job was never to find data. Your job is to make investment decisions. Everything else is plumbing — and plumbing should be automated.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
