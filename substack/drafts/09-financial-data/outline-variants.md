# Article #9: Using AI Agents to Access Financial/Company Data
## Outline Variants

**Blog**: blog.promptpm.ai ("my crystal ball" by Eric Xiao)
**Target length**: ~1,500–2,500 words
**SEO Primary**: "AI financial data", "stock data API"
**SEO Secondary**: "financial data sources for investors", "AI agent stock research data"

---

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

## Variant B: The Source Code

### Title
**Every Financial Data Source, Ranked: What's Free, What's Worth Paying For, and What's a Waste of Money**

### Subtitle
*I've used them all — from Yahoo Finance scraping to Bloomberg terminals. Here's the honest breakdown no one else will write.*

### Tone & Angle
Pure reference/ranking piece. Less narrative, more utility. Each source gets a mini-review with specific use cases, pricing, and an honest verdict. Bloom is woven in as the aggregation solution. Designed to be bookmarked and shared. Risk: less personal/engaging than other variants.

### Outline

**1. Opening provocation** (~150 words)
- "Financial data should be free in 2025. It mostly isn't. Here's the landscape."

**2. The Free Tier** (~400 words)
- Yahoo Finance, Alpha Vantage (free), SEC EDGAR, FRED, Finviz
- Each with: what it does, API quality, limits, verdict

**3. The Paid Middle Ground** (~400 words)
- Polygon.io, EOD Historical Data, Alpha Vantage (premium), IEX Cloud, Quandl
- Each with: pricing, what you get, whether it's worth it

**4. The Institutional Tier** (~200 words)
- Bloomberg, Refinitiv, FactSet, S&P Capital IQ
- Why retail investors don't need these (and the one exception)

**5. The AI Agent Alternative** (~400 words)
- Instead of picking one source: let an agent pull from multiple
- Bloom's approach: how tools abstract away the source complexity
- Example workflow

**6. Data Quality Gotchas** (~300 words)
- The universal problems regardless of source

**7. Recommendation** (~150 words)
- What to use depending on your needs/budget

---

## Variant C: The Plumber's Guide

### Title
**The Unsexy Truth About AI Stock Analysis: It's 80% Data Plumbing**

### Subtitle
*Everyone talks about the AI. Nobody talks about where the data actually comes from, how often it's wrong, and why your "AI-powered analysis" might be analyzing numbers from last quarter.*

### Tone & Angle
Contrarian, behind-the-scenes. The thesis: most AI investing discourse focuses on the model/prompt, but the real challenge is data quality and orchestration. Opens by deflating the AI hype, then builds up the actual engineering of data pipelines. More builder-focused, might lose pure investor readers.

### Outline

**1. The Dirty Secret** (~250 words)
- "The hardest part of AI stock analysis isn't the AI. It's the data."
- Most people obsess over prompts and models. The bottleneck is upstream.

**2. A Day in the Life of Financial Data** (~400 words)
- Walk through a single data request: what happens when you ask for AAPL's revenue
- The chain: request → API → rate limit → response → parse → normalize → validate → present
- Everything that can go wrong at each step

**3. Source-by-Source Reality Check** (~500 words)
- Each source: what it claims vs what it actually delivers
- Specific failure modes I've hit

**4. The Normalization Problem** (~300 words)
- Different sources, different formats, different conventions
- Fiscal year endings, currency, GAAP vs IFRS
- How Bloom's tools standardize this

**5. Building an Agent That Doesn't Trust Its Data** (~300 words)
- Staleness detection, validation, graceful degradation
- The confidence spectrum: fresh data → stale data → no data

**6. What This Means for You** (~200 words)
- Whether you build or buy, understand the data layer
- CTA: Bloom handles this so you don't have to

---

## Recommendation

**Chosen: Variant A (The Data Safari)**

**Reasoning:**
- **Best balance of practical + personal.** Opens with a relatable pain point (too many tabs, too much time on data collection), maps the landscape honestly, then shows how AI agents solve it. Variant B is useful but reads like a reference doc (low engagement). Variant C is interesting to builders but too "behind the scenes" for the broader investor audience.
- **Complements existing articles.** Article #3 covers Bloom's analysis capabilities. Article #9 goes one level deeper into *where the data comes from* — a natural companion piece. Variant A does this without repeating #3's thesis.
- **High utility.** The data landscape section alone is bookmark-worthy. Readers who don't use Bloom still walk away with actionable knowledge about which data sources to use.
- **Natural Bloom integration.** The "how Bloom stitches it together" section flows organically from the pain point, not as a forced plug.
