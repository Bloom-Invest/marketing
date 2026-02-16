# I Used to Spend 3 Days Researching a Stock. Now My AI Does It in 4 Minutes.

*The first page of Google for "how to research a stock" is all Fidelity and NerdWallet fluff. Here's the version they can't write — because they don't have an AI agent doing the work.*

---

I Googled "how to research a stock" last month. Just to see what normal people find.

The results were depressing. Fidelity wants you to check the P/E ratio. Schwab says to "understand the business." NerdWallet suggests reading the 10-K filing — as if anyone Googling basic stock research is about to wade through 200 pages of SEC legalese on a Tuesday night.

These guides aren't wrong. They're stuck in 2015. They describe a process that takes hours per stock, assumes you already speak finance, and produces a vague gut feeling at the end. "Do your due diligence." Cool. How?

I built [Bloom](https://investwithbloom.com) because I was tired of that process. Take a ticker symbol, pull the data, run the analysis, get a structured research report — work that used to eat my entire weekend. **Now it takes about 4 minutes.** And the AI catches things I used to miss.

## What Stock Research Actually Involves

It's not one task. It's six stitched together:

1. **Financial data** — revenue, earnings, margins, cash flow, debt
2. **Valuation** — cheap or expensive relative to earnings?
3. **Growth trajectory** — accelerating, decelerating, or flat?
4. **Competitive position** — moat, market share, threats
5. **Insider and institutional activity** — are the people closest to the company buying or selling?
6. **Catalysts and risks** — what moves the stock in the next 3-12 months?

The old way: Yahoo Finance in one tab, SEC's EDGAR in another, maybe a brokerage report if you're paying for one. Copy numbers into a spreadsheet. Read earnings call transcripts. Check insider filings on OpenInsider. Try to form a thesis.

For one stock, this takes me 2-3 hours minimum. A proper deep dive — building a model, stress-testing assumptions — is a full day. I've got 30+ stocks on my watchlist. The math doesn't work.

## How to Research a Stock With AI Agents

### Step 1: Pull the financial data (without touching a spreadsheet)

In Bloom, I type: *"Give me a full financial breakdown of CRWD."*

The AI agent calls financial APIs — AlphaVantage for US stocks, EOD Historical Data for international names — and pulls the income statement, balance sheet, and cash flow statement. Not a summary someone else wrote. The actual numbers. Ten seconds.

That used to take me 15-20 minutes per stock. But data retrieval is table stakes. Every financial app gives you data. What matters is what happens next.

### Step 2: Screen with natural language (not checkboxes)

Stock screeners on Finviz let you filter by P/E and market cap. Fine for simple queries. Useless for nuanced ones. A stock with a P/E of 15 might be cheap — or cheap for a reason.

With Bloom I can ask: *"Find me mid-cap tech companies with accelerating revenue growth and insider buying in the last 90 days."* That combines financial data, insider transactions, and qualitative judgment in one query. No screener does that.

### Step 3: Get a real thesis — bull case, bear case, key drivers

This is where most AI stock tools fall flat. They fetch data and summarize. They don't *think*.

Bloom builds a structured thesis. Here's what I got for CrowdStrike (CRWD):

- **Profitability**: Operating margins expanded from 1% to 15% over 3 years. FCF margin above 30%. Real profitability — not "adjusted EBITDA positive" accounting games.
- **Growth**: Revenue still growing 33% YoY at $3.4B run rate. Net retention above 120%.
- **Valuation**: ~65x forward earnings. Expensive by any traditional metric. But at 30%+ growth with expanding margins, you're paying ~35x on 2026 numbers. Not crazy.
- **Insider activity**: Modest insider selling (typical for tech execs), institutional ownership increasing.

That's an opinion. An actual take backed by specific numbers. Not a hedge wrapped in disclaimers.

### Step 4: Stress-test the valuation

You don't need a 50-tab DCF model. You need scenarios.

*"If CRWD grows revenue 25% annually for 3 years and reaches 25% operating margin, what's the stock worth at 30x earnings?"*

The AI does the math. Then I adjust: What if growth slows to 15%? Margins don't expand? Multiple compresses to 20x? I get 80% of the insight from a full model in 5% of the time.

### Step 5: Check who's buying (and who's running)

There are lots of reasons an insider might sell — taxes, diversification, a new house. But there's only one reason they buy: they think the stock is going up.

Bloom pulls insider transactions with context. Not just "CEO bought 10,000 shares" — but: *Was this routine or unusual? How does it compare to their historical pattern? Are multiple insiders buying simultaneously?*

When Bridgewater or Berkshire starts building a position, that's signal. When they trim, that's signal too.

## Real Example: Researching HIMS From Scratch

A friend mentioned Hims & Hers (HIMS). I knew almost nothing — telehealth, sells stuff online. Here's what happened.

**Minute 0-1**: I typed *"Full analysis of HIMS"* into Bloom.

**Minute 1-2**: Revenue: $1.5B TTM, growing 69% YoY. Gross margin: 82%. That's software-level margin on a health and wellness company. Net income just turned positive. 2M+ subscribers on a recurring model. My ears perked up.

**Minute 2-3**: Bull case — massive TAM in men's and women's health, sticky subscription revenue, GLP-1 weight loss as a huge catalyst. Bear case — FDA compounding rules could gut the GLP-1 business, customer acquisition costs are high, stock already tripled.

**Minute 3-4**: Multiple insiders buying last quarter. Trading at ~30x forward earnings for a company growing 69%. Compared to other high-growth consumer health names? Not expensive.

**My call**: Watchlist it. The GLP-1 regulatory risk is real — if the FDA shuts down compounding pharmacies, a chunk of the growth thesis evaporates. But the base business (hair loss, ED, skincare) is solid. Worth tracking through next earnings.

Four minutes. Zero spreadsheets. From "I've heard of this company" to a structured investment thesis.

## What AI Gets Wrong

I'd be a fraud if I didn't acknowledge the limits.

**AI can't feel the vibes.** Is the CEO competent or just good at conference calls? Is the culture healthy or toxic? Is market mood shifting in ways financials don't capture yet? Experienced investors develop a feel for this. AI doesn't have it.

**AI trusts the data too much.** If the API returns stale earnings numbers, the AI will confidently analyze them. If a company's doing something creative with accounting (hi, $SMCI), it might not catch it. Always sanity-check.

**AI doesn't know what it doesn't know.** Ask about a micro-cap with zero analyst coverage and it'll still produce a confident-sounding report. Thin data in, misleading confidence out.

The right mental model: **AI is your best-ever research analyst.** Fast, thorough, tireless. But it's a junior analyst. You're the portfolio manager. You make the call.

## The Punchline

The first page of Google for "how to research a stock" reads like it was written in 2012. Check the P/E ratio. Read the annual report. Diversify. Not bad advice — just incomplete for a world where AI agents handle the mechanical parts.

The real edge in 2025 isn't access to data. Everyone has that. It's speed of analysis. The investor who researches 50 stocks in the time it takes someone else to research 5 will find better opportunities. That's arithmetic, not opinion.

I built [Bloom](https://investwithbloom.com) to be that speed advantage. Not a crystal ball. Not a magic stock picker. A research partner that does the heavy lifting so you can focus on the decisions that matter.

The grunt work is over. The thinking part — that's still yours.

And honestly? That's the fun part.
