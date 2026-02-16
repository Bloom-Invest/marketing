<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

## VARIANT A: Architecture Tour ✅ CHOSEN
*"Walk me through the machine, piece by piece"*

### Title
**My AI Investing Agent Calls 17 Tools, Chains Multi-Step Research, and Grades Its Own Work. Here's How It Works.**

### Subtitle
Inside the architecture of Bloom's agentic system — the prompt philosophy, tool design, research chaining, and the 224-test benchmark suite that keeps it honest.

### Outline

**1. Cold open — the "it just works" moment that masks complexity**
- Anecdote: user asks "analyze CRWD" → agent makes 4 parallel tool calls, synthesizes data from 3 APIs, produces structured bull/bear case in 12 seconds
- "That looks simple. It's the hardest engineering I've done."

**2. The prompt philosophy: less is more**
- Journey from 4,000-token kitchen-sink prompt to ~2,000-token focused prompt
- The principle: RLHF models already know how to be helpful. Your prompt should only cover what's unique to YOUR app.
- Concrete example: removed 10 question-type handlers, model handled every case without them
- The value investing framework: 1,000+ tokens of investment philosophy baked in, NOT trimmed — because that IS the unique knowledge

**3. The tool belt: 17 tools, each with a job**
- Design philosophy: each tool is a well-scoped API, not a God function
- Walk through the key tools with what they return and why they're separate:
  - get_symbols_metadata (the starting point — financials, ratings, peers)
  - get_price_charts (historical prices, auto-sampled for long timeframes)
  - analyze_technicals (RSI, moving averages, options activity, insider transactions)
  - analyze_earnings (transcripts, estimates vs actuals, surprises)
  - filter_stocks (quantitative screening with natural language operators)
  - generate_catalysts (forward-looking AI analysis)
  - search_transcript (keyword search in earnings calls)
- Why batch parameters matter: analyze_technicals takes 1-5 symbols, processes in parallel

**4. How it chains multi-step research**
- The "todo" system: for complex queries needing 3+ research steps, agent writes itself a research plan
- Real example: "find me undervalued turnaround plays" chains filter_stocks → get_financial_charts → search_transcript → analyze_technicals → generate_catalysts
- Parallel vs sequential: independent tools fire simultaneously, dependent tools wait
- The multi-agent handoff: router → search_agent → research_agent → evaluation_agent → portfolio_agent

**5. The benchmark: 224 tests, 8 metric types**
- Why we built it: "it seems to work fine" is not a methodology
- DeepEval framework: pytest + LLM-as-a-judge
- The metric stack: TaskCompletion, AnswerRelevancy, Hallucination, Bias, Toxicity, ContextualRelevancy/Precision/Recall
- Tiered testing: smoke (<1 min) → regression (3-5 min) → comprehensive (15+ min)
- The failure taxonomy from 363 → 264 passed story
- How the eval catches things humans don't (0.65 vs 0.7 threshold on financial analysis)

**6. Lessons from building production AI agents for finance**
- Trust the model more than you think
- Eval-driven prompt development > vibes-driven prompt development
- Finance-specific challenges: fabricated metrics are the worst failure mode
- Multi-agent orchestration is powerful but adds latency and failure modes

**7. CTA**
- Try Bloom, follow the work on GitHub

### Estimated length: ~2,200 words
### Pros: Technical depth, unique angle (most AI articles are surface-level), demonstrates real expertise
### Cons: May lose less technical readers in sections 3-4

---

</details>

---

# My AI Investing Agent Calls 17 Tools and Grades Its Own Work. Here's How It All Fits Together.

*Inside Bloom's agentic architecture — the prompt philosophy, tool design, research chaining, and the 224-test benchmark that keeps it honest.*

---

2:30am on a Tuesday. I'm watching logs scroll while a user types "analyze CRWD" into Bloom. Twelve seconds later they get back: revenue growing 33% at a $3.4B run rate, operating margins that went from 1% to 15% over three years, FCF margin above 30%, a bull/bear case, insider activity, and a technical snapshot with RSI and moving average positions.

Four tool calls fired in parallel — `get_symbols_metadata`, `get_price_charts`, `analyze_technicals`, `analyze_earnings` — each hitting a different API, all synthesized into one analysis with an actual opinion on the stock. Not a hedge. Not "it depends." A real take, backed by specific numbers.

That looks simple. It's the hardest engineering I've done.

## The Prompt: 4,000 Tokens of Garbage, Then 2,000 That Worked

Bloom's system prompt bloated to ~4,000 tokens over months. Ten "how to answer different types of questions" sections. Four few-shot examples. Fifteen lines of tool-calling policy. An explicit guide for emoji usage.

The emoji guide. Claude already uses emoji fine. The markdown rules. It formats tables without me spelling it out. I'd spent months teaching the model things it learned during RLHF.

The realization hit when I read Mario Zechner's [minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) — matched Claude Code's benchmarks with a sub-1,000 token prompt. His philosophy: RLHF-trained models have internalized a lot. Stop teaching them their job. Focus on what's *unique to your app*.

So I cut. Removed all ten question-type handlers. Cut two of four few-shot examples. Deleted the entire tool-calling policy. 4,000 tokens → 2,000.

Every scenario still worked. Average eval scores rose from 0.71 to 0.76. Fewer instructions, less ambiguity.

What survived:

- **Tone** (~100 tokens): "Conversational and direct, like explaining to a friend. Lead with your takeaway." Claude doesn't know Bloom's voice by default.
- **App-specific formatting** (~50 tokens): "Tables: max 2 columns. Use @ prefix for tickers." Constraints the model genuinely needs.
- **Two examples** (~200 tokens): A simple price query and a complex analysis. Models follow examples more than instructions.
- **The investing philosophy** (~1,000 tokens): Catalysts, pricing power, position sizing, case studies like @META at 7x PE in 2022 or @NVDA multiplying revenue 20x on LLM chips. This is the knowledge the model *doesn't* have.

Half the prompt is investing philosophy. That's the point. Spend your token budget on what the model can't figure out alone.

## 17 Tools, No Swiss Army Knives

Early on I made the mistake every AI engineer makes. One `get_stock_info` function that returned financials, prices, news, technicals, and sentiment in a bloated JSON blob. User asks "what's Apple's price?" and I'm fetching earnings transcripts and insider transactions. Slow, expensive, and the model couldn't figure out when to use it.

The fix: decomposition. 17 focused tools in three categories.

**Data retrieval** (7 tools) — fundamentals/ratings/peers, historical prices, quarterly financials with YoY growth, news across channels (earnings, insider trades, M&A, FDA), market sentiment (AAII, Fear & Greed, VIX), market movers/sector breakdown, curated stock lists by theme.

**Analysis** (5 tools) — earnings history with transcript insights, technicals (RSI, MAs, chart patterns, options activity, insider transactions), options sentiment evolution over 7-90 days, portfolio risk-return analysis (correlation, drawdown, VaR, Sharpe), trade evaluation against catalyst strength and portfolio fit.

**Research** (5 tools) — earnings transcript keyword search with speaker attribution, AI-generated catalyst analysis, quantitative stock screening with natural language operators (`market_cap > 10B`, `pe_ratio < 25`), web search, and URL fetching for anything the specialized tools don't cover.

Three design decisions that matter:

**Batch parameters.** `analyze_technicals` takes up to 5 symbols and processes them in parallel. Comparing three stocks? One tool call, not three. 60-70% latency reduction.

**Selective fields.** Most tools take a `fields` or `sections` parameter. User asks about insider activity? Skip the RSI calculations, return just the insider data. Smaller responses = cheaper tokens = faster inference.

**No hallucination surface.** Each tool returns structured data from real APIs. The agent can only reference numbers the tools actually provided. One line in the prompt — "ONLY report financial metrics present in tool results" — eliminated 90% of fabricated numbers. For finance, this is the design constraint that matters most. Fabricated metrics are the one failure mode you absolutely cannot ship.

## Research Chains: When One Tool Call Isn't Enough

"What's Apple's stock price?" → one tool call. Done.

"Find me undervalued mid-cap tech companies with turnaround potential." That's not a tool call. That's a research project.

For queries needing 3+ steps, the agent writes itself a plan using `todo_write` — a scratchpad it works through step by step. The chain for finding turnaround plays:

**Step 1**: `filter_stocks` — `revenue_growth_qoq > 0`, `market_cap > 500M`, `change_percent_3m < 75`. Find companies showing sequential revenue growth but still trading below recent highs.

**Step 2** (on filtered results): `get_financial_charts` for revenue and operating margins on the top 5. Is the turnaround real, or a seasonal blip?

**Step 3**: `search_transcript` on each candidate — keywords like "ahead of plan," "exceeded," "turnaround." Is management executing or just talking?

**Step 4** (parallel): `analyze_technicals` + `generate_catalysts` on the top 3. Chart cooperating? Upcoming events that could drive price?

**Step 5**: Synthesize. Build a structured thesis for each candidate. Bull/bear cases. Rank them.

For complex portfolio creation, Bloom uses a full multi-agent system. A router coordinates four specialists: search (find candidates), research (pull financials/news/ratings), evaluation (grade if research is sufficient), and portfolio (create weighted allocation). If the evaluation agent says "missing valuation context on two tickers," the router sends it back to research. This loop runs up to 7 iterations.

It's slow — 30-60 seconds for a full portfolio. But the evaluation step catches the most common failure mode: confident allocations based on incomplete research. I'd rather be slow and right than fast and reckless.

## 224 Tests, Because "Seems Fine" Isn't a Methodology

Here's something that bothers me about AI product development: most teams ship on vibes. I've talked to founders who A/B test button colors for weeks but deploy prompt changes after a five-minute spot check.

For a weather app, maybe that works. For a finance app where people make real decisions based on your output? No.

Bloom runs 224 automated tests using [DeepEval](https://github.com/confident-ai/deepeval), an open-source LLM evaluation framework. An LLM judges the agent's output against defined criteria — not perfect, but it catches things humans consistently miss.

The metrics: **TaskCompletion** (did it do what was asked? threshold: 0.8), **Hallucination** (did it fabricate data? threshold: 0.3 — the strictest), **AnswerRelevancy** (tiered: 0.7 for simple queries, 0.5 for complex, 0.3 for edge cases). Plus bias, toxicity, contextual precision/recall.

Three tiers — smoke tests on every commit (<1 min), regression on PRs (3-5 min), comprehensive before releases (15+ min). Tests run in parallel across 8 workers, each creating a real agent instance against a test database.

When I expanded from 12 tests to 363 (now consolidated to 224), the first full run humbled me. 264 passed. 99 failed.

Those 99 failures clustered into eight categories: tool failures during parallel execution, formatting broken on mobile, fabricated financial metrics, P/E ratios reported without growth context, no guidance on broken chart patterns, multi-paragraph answers to simple questions, stock screener returning wrong results, AI summaries too generic.

Eight categories. Eight fixable problems.

The fix for all 99 failures? Sixteen lines added to the prompt. Four removed. Each addition traced directly to a failure category. The fabricated metrics fix was one line: "ONLY report financial metrics present in tool results." The valuation depth fix: "Interpret metrics — explain what they mean for the investment case."

Twenty lines of prompt changes. I would never have found those problems by eyeballing outputs. I would've shipped it, and some user asking about @CRWD would've gotten a wall of numbers with no interpretation.

## What Actually Mattered

**The prompt is the product.** Bloom's 2,000-token prompt encodes an investing philosophy, a voice, and behavioral constraints. Changing one line changes how tens of thousands of interactions feel. We spent a week agonizing over a database migration and changed a prompt line in five minutes — the prompt line had 10x more user impact. Treat your prompt like core business logic. It is.

**Small tools compose.** Seventeen focused tools beats three powerful ones. The model selects from a clear menu better than it navigates a multi-purpose function. And small tools combine in ways I didn't anticipate when I designed them.

**Evals are the new unit tests.** You wouldn't ship backend code without tests. Don't ship prompts without evals. Start with 10 test cases covering your most important flows. Your first expansion run will find problems you didn't know you had.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI investing assistant for iOS and Android. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). You can find him on X [@exiao3](https://x.com/exiao3). The [Clawdbot](https://github.com/openclaw/openclaw) agent that helped build all of this is open-source.*
