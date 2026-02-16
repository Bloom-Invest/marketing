# My AI Investing Agent Calls 17 Tools and Grades Its Own Work. Here's How It All Fits Together.

*Inside Bloom's agentic architecture — the prompt philosophy, tool design, research chaining, and the 224-test benchmark that keeps it honest.*

---

A user types "analyze CRWD" into Bloom. Twelve seconds later they get a structured breakdown: revenue growing 33% at a $3.4B run rate, operating margins expanding from 1% to 15% over three years, FCF margin above 30%, a bull/bear case, insider activity summary, and a technical snapshot with RSI and moving average positions.

What they don't see: the agent made four parallel tool calls — `get_symbols_metadata`, `get_price_charts`, `analyze_technicals`, `analyze_earnings` — each hitting different APIs, then synthesized everything into a single coherent analysis with an actual opinion on the stock. Not a hedge. Not "it depends." An opinion backed by specific numbers.

Here's how all of it works — the prompt, the tools, the chaining, and the eval suite that keeps the whole thing from hallucinating earnings data at 2am.

## The Prompt Philosophy: Trust the Damn Model

Bloom's chat agent prompt bloated to ~4,000 tokens over months of tweaking. Ten "how to answer different types of questions" sections. Four few-shot examples. Fifteen lines of tool-calling policy. A full markdown formatting guide. Explicit instructions for emoji usage.

The emoji guide? Claude already uses emoji appropriately. The markdown rules? It formats tables fine without me spelling it out. Most of those 4,000 tokens were teaching the model things it learned during RLHF.

The realization crystallized when I read Mario Zechner's [minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) — matched Claude Code's benchmarks with a sub-1,000 token prompt. His philosophy: RLHF-trained models have internalized a lot. Stop teaching them their job. Focus on what's *unique to your app*.

So I cut aggressively. Removed all ten question-type handlers. Cut two of four few-shot examples. Deleted the tool-calling policy entirely. 4,000 tokens → 2,000.

The result? Every scenario still worked. Average eval scores rose from 0.71 to 0.76. Fewer instructions meant less ambiguity.

Here's what survived the purge:

- **Tone and style** (~100 tokens): "Conversational and direct, like explaining to a friend. Lead with your takeaway." Claude doesn't know Bloom's voice by default.
- **Formatting rules** (~50 tokens): "Tables: max 2 columns. Use @ prefix for tickers." App-specific constraints the model genuinely needs.
- **Two focused examples** (~200 tokens): A simple price query and a complex analysis. The model follows examples more than instructions — these do the heavy lifting.
- **The Value Investing Framework** (~1,000 tokens): A full investing philosophy — catalysts, pricing power, position sizing, case studies like META at 7x PE in 2022 or NVDA multiplying revenue 20x on LLM chips. This is the *knowledge the model doesn't have*. I didn't trim a word.

Half the prompt is investing philosophy. That's the point — spend your token budget on what the model *can't* figure out alone.

## The Tool Belt: 17 Tools, Each With a Job

Early on I made the mistake every AI engineer makes: Swiss Army knife tools. One `get_stock_info` function that returned financials, prices, news, technicals, and sentiment in a bloated JSON blob. Someone asks "what's Apple's price?" and you're fetching earnings transcripts and insider transactions. Slow, expensive, and the model couldn't figure out when to use it.

The fix: decomposition. Bloom's agent now has 17 focused tools in three categories:

**Data retrieval** (7 tools) — fundamentals/ratings/peers, historical prices, quarterly financials with YoY growth, news across channels (earnings, insider trades, M&A, FDA), market sentiment (AAII, Fear & Greed, VIX), market movers/sector breakdown, and curated stock lists by theme.

**Deep analysis** (5 tools) — earnings history with transcript insights, technicals (RSI, MAs, chart patterns, options activity, insider transactions), options sentiment evolution over 7-90 days, portfolio risk-return analysis (correlation, drawdown, VaR, Sharpe), and trade evaluation against catalyst strength and portfolio fit.

**Research** (5 tools) — earnings transcript keyword search with speaker attribution, AI-generated catalyst analysis, quantitative stock screening with natural language operators (`market_cap > 10B`, `pe_ratio < 25`), plus web search and URL fetching for anything the specialized tools don't cover.

Three design decisions make this work:

**Batch parameters everywhere.** `analyze_technicals` takes up to 5 symbols and processes them in parallel. Comparing three stocks? One tool call instead of three. 60-70% latency reduction.

**Selective fields.** Most tools support a `fields` or `sections` parameter. User asks about insider activity? Skip the RSI calculations, return just the insider section. Smaller responses = cheaper tokens = faster inference.

**No hallucination surface.** Each tool returns structured data from real APIs. The agent can only reference numbers the tools actually provided. One line in the prompt — "ONLY report financial metrics present in tool results" — eliminated 90% of fabricated numbers. For finance, this is the design constraint that matters most.

## How It Chains Multi-Step Research

"What's Apple's stock price?" → one tool call. Done.

"Find me undervalued mid-cap tech companies with turnaround potential." That's not a tool call. That's a research project.

For queries requiring 3+ steps, the agent writes itself a research plan using `todo_write` — a scratchpad it works through step by step. Here's the chain for finding turnaround plays:

**Step 1**: `filter_stocks` — `revenue_growth_qoq > 0`, `market_cap > 500M`, `change_percent_3m < 75`. Find companies showing sequential revenue growth but still trading below recent highs.

**Step 2** (on filtered results): `get_financial_charts` for revenue and operating margins on the top 5. Is the turnaround real, or just a seasonal blip?

**Step 3**: `search_transcript` on each candidate — keywords like "ahead of plan," "exceeded," "turnaround." Is management executing or just talking?

**Step 4** (parallel): `analyze_technicals` + `generate_catalysts` on the top 3. Chart cooperating? Upcoming events that could drive price?

**Step 5**: Synthesize. Build a structured thesis for each candidate with bull/bear cases. Rank them.

For complex portfolio creation, Bloom uses a full multi-agent system. A router coordinates four specialists: search (find candidates), research (pull financials/news/ratings), evaluation (grade if research is sufficient), and portfolio (create weighted allocation). If the evaluation agent says "missing valuation context on two tickers," the router sends it back to research. This loop runs up to 7 iterations.

It's slow — 30-60 seconds for a full portfolio. But the evaluation step alone catches the most common failure mode: confident allocations based on incomplete research.

## The Benchmark: 224 Tests and the Death of "Seems Fine"

Here's the uncomfortable truth about AI product development: most teams ship on vibes. I've talked to founders who A/B test button colors for weeks but deploy prompt changes after a five-minute spot check.

For a weather app, maybe that's fine. For a finance app where people make real investment decisions based on your output? Fuck no.

Bloom runs 224 automated tests using [DeepEval](https://github.com/confident-ai/deepeval), an open-source LLM evaluation framework. An LLM judges the agent's output against defined criteria — not perfect, but it catches things humans consistently miss.

The metrics that matter most: **TaskCompletion** (did it do what was asked? threshold: 0.8), **Hallucination** (did it fabricate data? threshold: 0.3 — the strictest), and **AnswerRelevancy** (tiered: 0.7 for simple queries, 0.5 for complex, 0.3 for edge cases). Plus bias, toxicity, and contextual precision/recall checks.

The suite runs in three tiers — smoke tests on every commit (<1 min), regression on PRs (3-5 min), comprehensive before releases (15+ min). Tests run in parallel across 8 workers, each creating a real agent instance against a test database.

**Here's where it gets interesting.** When I expanded from 12 tests to 363 (now consolidated to 224), the first full run was a gut check. 264 passed. 99 failed.

Those 99 failures clustered into eight categories: tool failures during parallel execution, formatting broken on mobile, fabricated financial metrics (the worst one), P/E ratios reported without growth context, no guidance on broken chart patterns, multi-paragraph answers to simple questions, stock screener returning wrong results, and AI summaries too generic.

Eight categories. Eight fixable problems.

The fix for all 99 failures? Sixteen lines added to the prompt. Four removed. That's it. Each addition traced directly to a failure category. The fabricated metrics fix was one line: "ONLY report financial metrics present in tool results." The valuation depth fix: "Interpret metrics — explain what they mean for the investment case."

Sixteen lines. I would never have found those problems by eyeballing outputs. I would've shipped it, and some user asking about CrowdStrike would've gotten a wall of numbers with no interpretation.

## What I've Learned Building This

**The prompt is the product.** Bloom's 2,000-token prompt encodes an investing philosophy, a specific voice, and precise behavioral constraints. Changing one line changes how tens of thousands of interactions feel. We agonized over a database migration for a week and changed a prompt line in five minutes — the prompt line had 10x more user impact. Treat it with the same rigor as core business logic. It *is* core business logic.

**Smaller tools > smarter tools.** Seventeen focused tools beats three powerful ones. The model selects from a clear menu better than it navigates a complex multi-purpose function. And small tools compose — the agent combines them in ways I didn't anticipate when I designed them.

**Evals are the new unit tests.** You wouldn't ship backend code without tests. Don't ship prompts without evals. Start with 10 test cases covering your most important flows — you can build a full suite later. The ROI hits immediately: your first expansion run will find problems you didn't know you had.

---

Seventeen tools. A 2,000-token prompt. A research chain that plans before it executes. And 224 tests that catch every regression before it ships.

If you're building AI agents — for finance or anything else — here's what I wish someone had told me: trust the model, decompose your tools, plan multi-step work explicitly, and write the evals.

The evals are not optional. They're the whole game.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI investing assistant for iOS and Android. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). You can find him on X [@exiao3](https://x.com/exiao3). The [Clawdbot](https://github.com/openclaw/openclaw) agent that helped build all of this is open-source.*
