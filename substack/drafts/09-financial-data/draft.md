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

Last Saturday, 9:30 AM. Coffee's still hot. I sit down to research @SHOP. One stock.

Forty-five minutes later I had 17 browser tabs open. Yahoo Finance for price and basic ratios. Alpha Vantage for the income statement. SEC EDGAR for the latest 10-Q because I wanted to see what management actually said about margins. OpenInsider for insider transactions. WhaleWisdom for institutional holdings. Google News for analyst takes. Finviz for the chart.

Seventeen tabs. Seven sources. And I still couldn't tell you whether the stock was worth buying.

40 minutes collecting data. 5 minutes thinking about the investment. An 8:1 ratio of plumbing to actual analysis.

That ratio is why I built [Bloom](https://investwithbloom.com). Not because the world needed another AI chatbot — it didn't. Because I got tired of being a glorified copy-paste machine.

## Every Data Source Is Broken in Its Own Way

I've used all of these. No affiliate links, no sponsorships.

**Yahoo Finance** — Free, decent coverage. Price, market cap, P/E. The problem: Yahoo killed its official API years ago. Everyone scrapes it now. The unofficial APIs break constantly. I've had Yahoo return earnings data *two quarters old* with zero warning. Fine for a quick price check. Terrible as anything you'd build on.

**Alpha Vantage** — Free tier gives you 25 API calls per day. Premium starts at $50/month. Solid for US fundamentals. I once pulled data for a Japanese stock and got completely empty fields back — with a 200 OK status code. The API said "here's your data!" and handed me nothing.

**SEC EDGAR** — Gold standard for US filings. Every 10-K, 10-Q, 8-K, Form 4, 13F — all free. The catch: XBRL format. Basically XML's annoying cousin. Entire companies (Calcbench, Last10K) exist just to make EDGAR readable. That tells you everything about the raw format.

**Polygon.io** — Clean API, good for real-time and historical price data. Free tier is delayed; $29/month gets real-time. Not where you go for fundamentals.

**EOD Historical Data** — What Bloom uses for international stocks. $30/month. 70+ exchanges. They handle IFRS-vs-GAAP normalization, which is the thing that makes international data such a nightmare to work with.

**Bloomberg Terminal** — $24,000/year. Per seat. The best financial data on Earth. Nobody reading this should pay for it. As a retail investor, you can get 95% of Bloomberg's data for under $100/month. That last 5% is not worth $23,900.

## No Single Source Covers the Basics

Current price + basic metrics? Yahoo Finance.
Detailed US financials? Alpha Vantage or EDGAR.
Insider transactions? SEC EDGAR Form 4.
Institutional holdings? 13F filings (also EDGAR, totally different format).
International stocks? EOD Historical Data.
Real-time tick data? Polygon.
All of the above, in one place? Bloomberg. For $24K.

The data exists — all of it. It's scattered across six APIs with six authentication methods, six response formats, six rate limits, and six different definitions of "quarterly revenue."

A hedge fund solves this by hiring a data engineering team to build ETL pipelines.

A retail investor solves this by opening 17 browser tabs and hoping they don't transpose a number.

## What Bloom Actually Does With 6 Sources

When you ask Bloom "analyze @SHOP," six tools fire in about 15 seconds:

1. **`get_stock_data`** — current price, market cap, P/E, 52-week range, dividend yield.

2. **`get_financials`** — income statement, balance sheet, cash flow. Revenue trends, margin progression, debt levels, free cash flow.

3. **`get_technicals`** — 21-day EMA, 50-day SMA, RSI, MACD.

4. **`get_insider_trades`** — recent Form 4 filings. Multiple insiders buying at the same time is one of the strongest bullish signals in the market. Multiple insiders selling should scare you.

5. **`get_institutional_holdings`** — 13F data. Which hedge funds are building positions? Which are trimming? How much?

6. **`get_news` + `web_search`** — headlines, analyst reports, catalysts, risks.

Six calls, six blobs of data in six formats. The agent normalizes all of it and returns a structured analysis: rating, bull case, bear case, key drivers, specific numbers.

That 45-minute tab-juggling session? 15 seconds.

## The Stuff That Breaks

This is where most "AI financial tools" quietly fall apart. I know because I've shipped all these bugs.

**Stale data.** Company reports earnings at 4:15 PM. APIs might not update until the next morning. Sometimes not for days. You ask for an analysis at 5 PM on earnings day and get last quarter's numbers with full confidence. Bloom checks data timestamps and flags when financials look stale relative to the last known earnings date. It's not perfect. But it's better than silently serving you quarter-old data.

**Stock splits.** A stock does a 4:1 split. If your price data is split-adjusted but historical earnings aren't, your P/E is off by 4x. That $100 stock with $5 EPS (P/E of 20) suddenly shows a P/E of 80 because pre-split prices read $400. I shipped this exact bug. Subtle, easy to miss, makes your analysis worthless.

**International stocks.** Different reporting standards (IFRS vs. GAAP). Fiscal years ending in March. Currency conversion. ADR ratios. When someone asks Bloom to analyze Toyota (@TM), the financials are in yen, the ADR represents a specific share count, and margins aren't comparable to a US automaker. Most financial AI tools just echo whatever the API returns.

**Small caps and recent IPOs.** Ask for 5 years of history on a company that IPO'd 18 months ago — you get real data mixed with empty fields. The question is whether the AI makes up numbers to fill gaps or says "I only have 6 quarters of data." Bloom does the latter. But always verify.

## The Problem Was Never the Data

Every number you need to analyze a stock is available somewhere, probably free. Revenue's in the 10-K. Insider trades are on EDGAR. Price history lives in a dozen APIs. The *analysis* — deciding whether a stock is worth buying — takes maybe 20 minutes of focused thinking.

But you can't start thinking until you've assembled the data. And assembly eats an hour.

Before Google Maps, planning a road trip meant a paper atlas, a separate traffic website, and calling ahead to ask if a road was open. All the information existed. Stitching it together was the actual work. Google Maps didn't create new data. It made existing data usable.

That's what a good financial AI agent does. It's Google Maps for stock research.

## Skip the Tabs

If you're still doing the 17-tab dance on Saturday mornings:

**For data:** Alpha Vantage free tier + EDGAR + Yahoo Finance covers 80% of US stock research. Add EOD Historical Data ($30/month) for international. Skip Bloomberg.

**For assembly:** that's where agents earn their keep. The gap between "I have access to data" and "I have a coherent picture of this investment" is huge — and it's exactly the gap that's worth automating.

I built [Bloom](https://investwithbloom.com) to close it. Ask a question, the agent fans out across sources, handles the normalization and quality problems, and returns a structured analysis with specific numbers, bull and bear cases, and insider context.

The data was always there. The plumbing wasn't.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
