# Article #3: Building an Investing AI That Beats the Market
## Outline Variants — Draft v1

**Blog**: blog.promptpm.ai ("my crystal ball" by Eric Xiao)
**Status**: Outline stage — awaiting Eric's pick
**SEO Primary**: "AI investing", "AI stock analysis"
**SEO Secondary**: "AI stock picker", "automated investing AI", "value investing AI"
**SEO Long-tail**: "how to build AI that picks stocks", "AI investment advisor accuracy"
**Target length**: ~2,500–3,500 words (15–20 min read with visuals)

---

## Variant A: Builder's Journey

### Title
**I Spent 6 Months Building an AI That Analyzes Stocks. Here's What Actually Works.**

### Subtitle
*Most AI investing tools just fetch data and call it analysis. I built one that encodes real investment philosophy — and tested whether it actually gives good advice.*

### Tone & Angle
Personal, narrative-driven. "Here's what I tried, here's what broke, here's what I learned." The reader walks the journey with you. Appeals to both builders (how'd he do it?) and investors (does it work?).

### Outline

**1. The Problem That Pissed Me Off** (~300 words)
- Every "AI investing" tool I tried did the same thing: fetch a P/E ratio from an API, wrap it in a sentence, call it analysis
- Ask ChatGPT "Is NVDA overvalued?" — you get a book report, not an investment opinion
- The gap: data retrieval ≠ investment thinking. No one was encoding *how* to think about stocks
- Hook: "I wanted an AI that could disagree with me — and be right."

**2. What I Actually Built** (~400 words)
- Bloom: chat agent on iOS/Android, powered by Claude
- [SCREENSHOT: Bloom app chat showing a real stock analysis]
- Not a robo-advisor, not a screener — a research partner that thinks in frameworks
- The tools: stock data, technicals, financials, news, web search
- [DIAGRAM: System architecture — user → chat agent → tools → analysis — for Excalidraw]
- Key insight: the tools are table stakes. The *system prompt* is the product.

**3. Encoding Investment Philosophy Into a Prompt** (~500 words)
- The VALUE_INVESTING_FRAMEWORK: synthesizing Buffett, Druckenmiller, Soros, Klarman into instructions an LLM can follow
- What's actually in it:
  - Catalyst-driven analysis (positive and negative catalyst lists)
  - "Respect the chart" — 21d EMA, 50d SMA as guardrails
  - Strong Buy / Buy / Hold / Sell / Strong Sell rating framework
  - Superinvestor mental models (margin of safety, asymmetric risk/reward)
- [CODE: Before/after prompt snippets — showing the evolution]
- The prompt engineering journey: 4,000 → 2,000 → 2,200 tokens
  - What got cut: verbose explanations, redundant instructions, generic "be helpful" fluff
  - What stayed: the opinionated stuff. Specific frameworks. Concrete rating criteria.
  - Lesson: shorter prompts with strong opinions > long prompts with weak ones

**4. The Hardest Problem: How Do You Eval Investment Advice?** (~500 words)
- You can eval code (does it run?), you can eval math (is it correct?), but how do you eval "is this good investment analysis?"
- Our approach: DeepEval automated testing
- [DIAGRAM: Eval pipeline — prompt → test → score → iterate]
- What we test:
  - Does the response use the framework (not just recite data)?
  - Does it take a stance (rating) with supporting reasoning?
  - Does it address both bull and bear cases?
  - Does it reference technical levels when relevant?
- Example eval: "Analyze NVDA" — passing vs. failing responses
- Honest take: evals test *process*, not *outcomes*. We can't eval whether the AI's buy call was right for 6 months.

**5. When Everything Breaks: Production Reality** (~400 words)
- Tool failures: financial API down, news feed returns garbage, web search times out
- Graceful degradation: the AI needs to know what it *doesn't* know
- Real example: earnings data lagging → AI confidently analyzes stale numbers → wrong conclusion
- The "hallucination in investing" problem: a hallucinated fact in a stock analysis can cost real money
- What we built to handle this: tool failure detection, staleness warnings, confidence calibration

**6. Does It Actually Beat the Market?** (~400 words)
- Honest framing: "beating the market" is a loaded term
  - Benchmark: S&P 500 total return
  - Alpha = excess return above benchmark
  - Most human fund managers don't beat it consistently
- What Bloom actually does well:
  - Faster research (hours → minutes for initial analysis)
  - Framework consistency (doesn't get emotional, doesn't FOMO)
  - Catching catalysts humans miss (reads more news, faster)
- What it doesn't do well:
  - Timing (AI doesn't feel market sentiment the way traders do)
  - Novel situations (black swan events, regime changes)
  - Conviction (it can analyze, but you still need to pull the trigger)
- My honest take: AI is the best research analyst you've ever had. It's not a replacement for investment judgment — yet.

**7. What I'd Do Differently (And What's Next)** (~300 words)
- Start with evals, not prompts — I wish I'd built the test suite first
- The prompt is never done — it's a living document that evolves with markets
- What's coming: portfolio-level analysis, multi-agent research teams, real-time catalyst monitoring
- The bigger picture: AI investing isn't about replacing humans. It's about giving every retail investor the research desk that used to cost $500K/year in analysts.
- CTA: Try Bloom (investwithbloom.com) — and tell me where the AI gets it wrong.

---

## Variant B: Technical Deep-Dive

### Title
**The Architecture Behind an AI That Analyzes Stocks Like a Value Investor**

### Subtitle
*System prompts, tool orchestration, automated evals, and the engineering decisions behind Bloom's investing agent — a technical breakdown for builders.*

### Tone & Angle
Engineering-focused. Architecture decisions, code snippets, eval frameworks. The reader is a builder who wants to understand *how* to construct an AI agent with real domain expertise. Still accessible, but doesn't shy from technical detail.

### Outline

**1. Why "AI Investing" Is Mostly Smoke** (~250 words)
- The typical AI investing product: API wrapper + GPT-4 + "analyze this stock"
- What you get: a regurgitation of Yahoo Finance data in paragraph form
- The missing ingredient: domain expertise encoded as system behavior, not just data access
- This post: how we built Bloom's investing agent from architecture to evals

**2. System Architecture Overview** (~400 words)
- [DIAGRAM: System architecture — user → chat agent → tools → analysis — for Excalidraw]
- The stack: Claude as the reasoning engine, tool-use for data access, system prompt as the "investing brain"
- Tool inventory:
  - `get_stock_data` — price, volume, market cap, basic metrics
  - `get_technicals` — 21d EMA, 50d SMA, RSI, MACD
  - `get_financials` — income statement, balance sheet, cash flow
  - `get_news` — recent headlines, sentiment
  - `web_search` — real-time information for catalysts, events
- Why Claude: tool-use reliability, long context for financial data, instruction-following for opinionated frameworks
- Key design decision: single agent with tools vs. multi-agent pipeline. We chose single agent — simpler, faster, easier to eval.

**3. The System Prompt: Encoding Value Investing** (~600 words)
- [DIAGRAM: Value investing framework visualization]
- The VALUE_INVESTING_FRAMEWORK prompt — what's in it and why
- Section-by-section breakdown:
  - **Rating criteria**: Strong Buy → Strong Sell with explicit thresholds
  - **Catalyst analysis**: positive catalysts (earnings beats, product launches, sector tailwinds) vs. negative catalysts (margin compression, regulatory risk, competitive threats)
  - **Technical discipline**: "Respect the chart" — when 21d EMA crosses below 50d SMA, that overrides fundamental bullishness
  - **Superinvestor models**: Buffett (margin of safety, moat), Druckenmiller (macro + momentum), Klarman (risk-first), Soros (reflexivity)
- [CODE: Before/after prompt snippets]
- The compression journey: 4,000 → 2,000 → 2,200 tokens
  - Why we cut: latency, cost, and the discovery that verbose prompts dilute the strong instructions
  - What we added back: specific examples. "When NVDA trades at 40x forward earnings with 80% data center revenue growth, that's a Buy, not a Hold." Concrete > abstract.
  - The sweet spot: opinionated + concise + example-driven

**4. Concrete Example: "Is NVDA Overvalued?"** (~500 words)
- Side-by-side comparison: generic ChatGPT response vs. Bloom response
- Generic: "NVIDIA has a P/E of 65x, which is high, but growth is strong. It depends on your risk tolerance." (Says nothing, takes no stance.)
- Bloom: Calls tools → gets current price, forward P/E, revenue growth, technical levels → applies framework → "Buy. Trading at 35x forward with 80%+ DC revenue growth. Catalyst: next earnings in 3 weeks, whisper numbers suggest beat. Risk: 21d EMA trending flat — if price breaks below 50d SMA at $X, reassess. Position sizing: this is a high-conviction name but valuations leave little margin of error."
- Why the difference matters: the framework forces the AI to take a stance, cite specific data, identify catalysts and risks, and give actionable guidance
- [SCREENSHOT: Bloom app chat showing a real stock analysis]

**5. The Eval System: Testing Investment Analysis Quality** (~500 words)
- [DIAGRAM: Eval pipeline — prompt → test → score → iterate]
- The fundamental challenge: investment advice quality is subjective and time-delayed
- Our approach with DeepEval:
  - **Completeness tests**: Does the response cover fundamentals, technicals, catalysts, and risks?
  - **Framework adherence**: Does it use the rating scale? Does it reference specific metrics?
  - **Stance-taking**: Does it actually give a rating, or hedge into oblivion?
  - **Reasoning quality**: Is the logic chain sound? (e.g., "high growth justifies premium valuation" vs. "it's a good company so buy it")
  - **Tool usage**: Did it call the right tools? Did it use the data correctly?
- Example test cases:
  - "Analyze AAPL" → must produce a rating, reference P/E, mention services growth as catalyst
  - "Is the market overvalued?" → must reference macro indicators (10Y yield, VIX, Shiller P/E), not just say "it depends"
  - Edge case: "Analyze $FAKE_TICKER" → must gracefully say it can't find the stock, not hallucinate
- What we learned: evals are a forcing function for prompt quality. Every failed eval reveals a gap in the framework.

**6. Production Challenges: When Tools Fail** (~400 words)
- Financial APIs are unreliable. Earnings data lags. News feeds return irrelevant content.
- Graceful degradation strategies:
  - Tool timeout → AI acknowledges the gap: "I couldn't fetch real-time technicals. Based on available data..."
  - Stale data detection → "Note: financial data is from Q2; Q3 earnings report on [date] may change this picture"
  - Conflicting signals → "Fundamentals are strong (Buy), but technicals are bearish (below 50d SMA). Net: Hold until technical confirmation."
- The nightmare scenario: AI confidently analyzes with bad data. User trusts it. Loses money.
- Our mitigation: data freshness timestamps, tool call logging, mandatory uncertainty language when data is incomplete

**7. Honest Results and Limitations** (~350 words)
- Where AI investing works: speed, consistency, breadth of coverage, emotional discipline
- Where it fails: timing, novel macro events, qualitative judgment (management quality, competitive dynamics that aren't in the numbers)
- The uncomfortable truth: we can eval process quality, but outcome quality takes years to measure
- Our approach: compare Bloom's ratings against subsequent 3/6/12 month returns. Early data is promising but not statistically significant yet.
- For builders: the tools exist. The hard part is encoding genuine expertise — and being honest about what the AI can't do.
- CTA: Bloom is live on iOS and Android → investwithbloom.com

---

## Variant C: Provocative

### Title
**Most AI Investing Tools Are Lying to You. Here's What Actually Works.**

### Subtitle
*I tested a dozen AI stock analyzers. They all do the same useless thing. So I built one that actually thinks like an investor — and rigorously tested whether its advice is any good.*

### Tone & Angle
Contrarian, opinionated, a little angry. Opens by tearing down the status quo, then builds up what a real AI investing tool looks like. Designed to be shared by people who are frustrated with AI hype in finance. Strong hook, strong opinions, strong CTA.

### Outline

**1. The AI Investing Lie** (~350 words)
- [IMAGE: Hero image — for Nano Banana Pro]
- Open with a provocation: "Every AI investing tool I've used does the same thing: fetches a P/E ratio from Yahoo Finance, wraps it in a confident-sounding paragraph, and calls it 'AI-powered analysis.'"
- Name the pattern (without naming specific competitors):
  - "AI stock analyzer" = API call + language model + zero investment knowledge
  - They all say "it depends on your risk tolerance" because they have no actual opinion
  - They cite data but never synthesize it into a framework
- The test: Ask any AI tool "Is NVDA overvalued?" If it doesn't give you a rating, specific price levels, catalyst timeline, and risk factors — it's not analyzing. It's summarizing.
- "I got tired of this. So I built something different."

**2. What Real AI Investing Looks Like** (~300 words)
- Bloom: an AI that doesn't just fetch data — it applies an investment framework
- [SCREENSHOT: Bloom app chat showing a real stock analysis]
- The difference in one example:
  - **Fake AI analysis**: "NVIDIA has strong growth but trades at a premium. Consider your investment timeline."
  - **Real AI analysis**: "Buy. 35x forward earnings with 80%+ revenue growth in data center. Catalyst: earnings in 3 weeks, whisper numbers above consensus. Technical: price above 21d EMA and 50d SMA, trend intact. Risk: if macro weakens and capex cycle slows, $X is support."
- One takes a stance. The other covers its ass.

**3. The Secret: Philosophy, Not Just Data** (~500 words)
- The thesis: **AI investing tools fail because they have no investment philosophy**
- What Bloom encodes:
  - [DIAGRAM: Value investing framework visualization]
  - A VALUE_INVESTING_FRAMEWORK synthesized from Buffett, Druckenmiller, Soros, Klarman
  - Catalyst-driven analysis: every stock needs a *reason* to move, not just a valuation argument
  - "Respect the chart": technical discipline (21d EMA, 50d SMA) as a check on fundamental enthusiasm
  - Forced ratings: Strong Buy → Strong Sell. No "it depends." Take a stance.
- Why this is hard to build:
  - You have to actually understand investing, not just engineering
  - You have to make the framework specific enough for an LLM to follow, not just vague principles
  - [CODE: Before/after prompt snippets — showing what "encode philosophy" looks like in practice]
  - The prompt compression story: 4,000 → 2,000 → 2,200 tokens. What survived the cut? The opinionated stuff. What got killed? The generic platitudes.

**4. The Question Nobody Asks: Is the Advice Actually Good?** (~500 words)
- This is where 99% of AI investing tools stop. They ship it and hope for the best.
- "We built an eval system. Because if you can't test it, you can't trust it."
- [DIAGRAM: Eval pipeline — prompt → test → score → iterate]
- What we test with DeepEval:
  - Does the AI use the framework or fall back to generic analysis?
  - Does it take a stance? (Rating required, not optional)
  - Does it address catalysts, risks, AND technicals?
  - Does it reason correctly from data to conclusion?
- What we can't test (honestly):
  - Whether the Buy call actually makes money — that takes months/years
  - Black swan events — no framework handles "pandemic shuts down the economy"
  - Qualitative factors — management quality, competitive moats that aren't in the numbers
- The honest admission: we test *process quality*, not *outcome quality*. But process is what separates good investors from gamblers.

**5. The Ugly Reality of Production AI** (~400 words)
- Things nobody tells you about running an AI investing agent in production:
  - Financial APIs go down at the worst times (during earnings season, naturally)
  - Data is stale more often than you think — earnings reported last night, API still shows last quarter
  - News feeds return garbage — "NVDA" matches articles about "Nevada" if you're not careful
  - The AI will confidently analyze with bad data unless you build guardrails
- Graceful degradation: what happens when tools fail
  - Tool timeout → acknowledge the gap, don't pretend you have the data
  - Stale data → flag it: "Note: this is last quarter's data"
  - Conflicting signals → say so: "Fundamentals say Buy, technicals say wait"
- The scariest failure mode: confident + wrong + user trusts it + real money on the line
- [DIAGRAM: System architecture — user → chat agent → tools → analysis — for Excalidraw]

**6. Does It Beat the Market? (An Honest Answer)** (~400 words)
- "Beating the market" is what everyone asks. Here's why it's the wrong question — and then I'll answer it anyway.
- The wrong framing: most professional fund managers don't beat the S&P 500 consistently. Expecting an AI to do it in year one is delusional.
- The right framing: does AI-assisted investing improve your *process*?
  - Speed: what took hours of research takes minutes
  - Consistency: the AI doesn't FOMO into meme stocks at the top
  - Breadth: analyze 50 stocks in a day instead of 5
  - Discipline: the framework applies the same rigor to every analysis, every time
- What AI investing can't do:
  - Replace conviction (you still have to pull the trigger)
  - Predict the unpredictable (geopolitics, black swans)
  - Feel market sentiment (the "vibes" that experienced traders have)
- My honest take: AI is the best research analyst you've ever had, at a fraction of the cost. It's not an oracle. Treat it like a very smart, very fast, very disciplined junior analyst — and you'll do well.

**7. What Actually Works (TL;DR)** (~200 words)
- Encode a real investment philosophy, not just API calls
- Force the AI to take stances — wishy-washy analysis is useless
- Build evals — if you can't test the advice, you can't improve it
- Design for failure — tools will break, data will be stale, handle it gracefully
- Be honest about limitations — AI investing is a research accelerant, not a crystal ball
- CTA: Try Bloom → investwithbloom.com. The AI has opinions. You might disagree. That's the point.

---

## ASCII Wireframes

### Layout A: Builder's Journey
```
┌─────────────────────────────────────────────────────────────┐
│                    [IMAGE: Hero — Nano Banana Pro]           │
│                                                             │
│  I Spent 6 Months Building an AI That Analyzes Stocks.      │
│  Here's What Actually Works.                                │
│  ─────────────────────────────────────────────              │
│  Most AI investing tools just fetch data and call it         │
│  analysis. I built one that encodes real investment           │
│  philosophy — and tested whether it actually gives good       │
│  advice.                                                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § The Problem That Pissed Me Off                           │
│  ┌───────────────────────────────────────────┐              │
│  │ Personal anecdote: trying other AI tools  │              │
│  │ "Ask ChatGPT about NVDA" example          │              │
│  │ The gap: data ≠ analysis                  │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § What I Actually Built                                    │
│  ┌───────────────────────────────────────────┐              │
│  │ [SCREENSHOT: Bloom app chat]              │              │
│  │ Brief product description                 │              │
│  │ [DIAGRAM: System architecture]            │              │
│  │ "The system prompt is the product"        │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Encoding Investment Philosophy Into a Prompt             │
│  ┌───────────────────────────────────────────┐              │
│  │ VALUE_INVESTING_FRAMEWORK breakdown       │              │
│  │ [CODE: Before/after prompt snippets]      │              │
│  │ 4000 → 2000 → 2200 token journey         │              │
│  │ "Opinionated + concise > verbose"         │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § The Hardest Problem: Eval-ing Investment Advice          │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: Eval pipeline]                  │              │
│  │ DeepEval test examples                    │              │
│  │ Process quality vs outcome quality        │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § When Everything Breaks: Production Reality               │
│  ┌───────────────────────────────────────────┐              │
│  │ Tool failures, stale data, hallucinations │              │
│  │ Graceful degradation strategies           │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Does It Actually Beat the Market?                        │
│  ┌───────────────────────────────────────────┐              │
│  │ Honest framing: process > prediction      │              │
│  │ What works / what doesn't table           │              │
│  │ "Best research analyst you've ever had"   │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § What I'd Do Differently (And What's Next)                │
│  ┌───────────────────────────────────────────┐              │
│  │ Lessons learned                           │              │
│  │ Roadmap tease                             │              │
│  │ CTA: Try Bloom → investwithbloom.com      │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Layout B: Technical Deep-Dive
```
┌─────────────────────────────────────────────────────────────┐
│                    [IMAGE: Hero — Nano Banana Pro]           │
│                                                             │
│  The Architecture Behind an AI That Analyzes Stocks         │
│  Like a Value Investor                                      │
│  ─────────────────────────────────────────────              │
│  System prompts, tool orchestration, automated evals...      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § Why "AI Investing" Is Mostly Smoke (short, punchy)       │
│                                                             │
│  § System Architecture Overview                             │
│  ┌───────────────────────────────────────────┐              │
│  │        [DIAGRAM: Full system architecture]               │
│  │                                           │              │
│  │   User ──→ Chat Agent ──→ Tools ──→ Analysis             │
│  │              │                  │                         │
│  │          System Prompt     ┌────┴────┐                   │
│  │         (VALUE_INVESTING)  │ Stock   │                   │
│  │                           │ Tech    │                    │
│  │                           │ Financ  │                    │
│  │                           │ News    │                    │
│  │                           │ Web     │                    │
│  │                           └─────────┘                    │
│  └───────────────────────────────────────────┘              │
│  Tool inventory list with descriptions                      │
│                                                             │
│  § The System Prompt: Encoding Value Investing              │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: Value investing framework]      │              │
│  │                                           │              │
│  │ Section-by-section breakdown:             │              │
│  │  • Rating criteria                        │              │
│  │  • Catalyst analysis                      │              │
│  │  • Technical discipline                   │              │
│  │  • Superinvestor models                   │              │
│  │                                           │              │
│  │ [CODE BLOCK: Before prompt]               │              │
│  │ [CODE BLOCK: After prompt]                │              │
│  │ Token compression analysis                │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Concrete Example: "Is NVDA Overvalued?"                  │
│  ┌─────────────────┬─────────────────┐                      │
│  │  Generic GPT    │  Bloom Agent    │                      │
│  │  response       │  response       │                      │
│  │  (wishy-washy)  │  (opinionated)  │                      │
│  └─────────────────┴─────────────────┘                      │
│  [SCREENSHOT: Bloom app showing this analysis]              │
│                                                             │
│  § The Eval System                                          │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: Eval pipeline]                  │              │
│  │ DeepEval test categories + examples       │              │
│  │ Sample passing vs failing eval output     │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Production Challenges: When Tools Fail                   │
│  ┌───────────────────────────────────────────┐              │
│  │ Failure modes + mitigation strategies     │              │
│  │ (table or bullet list)                    │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Honest Results and Limitations                           │
│  ┌───────────────────────────────────────────┐              │
│  │ Works well / Doesn't work well split      │              │
│  │ CTA: investwithbloom.com                  │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Layout C: Provocative
```
┌─────────────────────────────────────────────────────────────┐
│                    [IMAGE: Hero — Nano Banana Pro]           │
│                                                             │
│  Most AI Investing Tools Are Lying to You.                  │
│  Here's What Actually Works.                                │
│  ─────────────────────────────────────────────              │
│  I tested a dozen AI stock analyzers. They all do the       │
│  same useless thing. So I built one that actually thinks    │
│  like an investor.                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  § The AI Investing Lie (HOOK — biggest section visually)   │
│  ┌───────────────────────────────────────────┐              │
│  │ Provocation + pattern-naming              │              │
│  │ "The test" — ask any tool about NVDA      │              │
│  │ If it can't give a rating, it's not       │              │
│  │ analyzing.                                │              │
│  │                                           │              │
│  │ 💡 "I got tired of this. So I built       │              │
│  │    something different."                  │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § What Real AI Investing Looks Like                        │
│  ┌─────────────────┬─────────────────┐                      │
│  │  FAKE AI:       │  REAL AI:       │                      │
│  │  "Consider your │  "Buy. 35x fwd  │                      │
│  │   risk          │   w/ 80% growth │                      │
│  │   tolerance"    │   Catalyst: ..."│                      │
│  └─────────────────┴─────────────────┘                      │
│  [SCREENSHOT: Bloom app chat]                               │
│                                                             │
│  § The Secret: Philosophy, Not Just Data                    │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: Value investing framework]      │              │
│  │ Framework breakdown                       │              │
│  │ [CODE: Before/after prompt snippets]      │              │
│  │ "4000 → 2000 → 2200 tokens"              │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § The Question Nobody Asks                                 │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: Eval pipeline]                  │              │
│  │ What we test / what we can't test         │              │
│  │ "Process quality vs outcome quality"      │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § The Ugly Reality of Production AI                        │
│  ┌───────────────────────────────────────────┐              │
│  │ [DIAGRAM: System architecture]            │              │
│  │ Failure modes + graceful degradation      │              │
│  │ "Confident + wrong + real money"          │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § Does It Beat the Market? (An Honest Answer)              │
│  ┌───────────────────────────────────────────┐              │
│  │ Wrong question → right question reframe   │              │
│  │ What works / what doesn't                 │              │
│  │ "Best research analyst at 1/100 the cost" │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
│  § What Actually Works (TL;DR)                              │
│  ┌───────────────────────────────────────────┐              │
│  │ • Encode philosophy, not just APIs        │              │
│  │ • Force stances                           │              │
│  │ • Build evals                             │              │
│  │ • Design for failure                      │              │
│  │ • Be honest about limits                  │              │
│  │                                           │              │
│  │ CTA: Try Bloom → investwithbloom.com      │              │
│  │ "The AI has opinions. You might disagree. │              │
│  │  That's the point."                       │              │
│  └───────────────────────────────────────────┘              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Image/Visual Checklist

| # | Asset | Tool | Notes |
|---|-------|------|-------|
| 1 | Hero image | Nano Banana Pro | AI + investing mashup. Style: editorial illustration, not stock photo. |
| 2 | Bloom app screenshot | Real screenshot | Show a compelling stock analysis conversation (NVDA or similar). Crop to highlight the rating + reasoning. |
| 3 | System architecture diagram | Excalidraw | User → Chat Agent → [Tools] → Analysis output. Show the system prompt as a brain/overlay on the agent. |
| 4 | Eval pipeline diagram | Excalidraw | Prompt → Test Cases → DeepEval → Scores → Iterate loop. Show pass/fail examples. |
| 5 | Value investing framework | Excalidraw | Visual of the framework: Catalysts, Technicals, Fundamentals, Rating → all feeding into the investment thesis. |
| 6 | Before/after code | Code blocks in article | Show the prompt at 4,000 tokens (bloated) vs 2,200 tokens (sharp). Highlight what got cut and what stayed. |
| 7 | Side-by-side comparison | Could be screenshot or designed | Generic AI response vs Bloom response for "Is NVDA overvalued?" |

---

## Recommendation

**My pick: Variant C (Provocative)**, with elements borrowed from A and B.

**Reasoning:**
- **Highest share potential.** "Most AI investing tools are lying to you" is a take people will share — either to agree or argue. Variant A's title is good but more generic in the "I built X, here's what I learned" genre. Variant B's title appeals to builders but limits the audience.
- **Best hook.** Opens with a problem the reader likely has (frustration with AI investing hype), then earns the right to present the solution. Variant A opens with *your* journey (less immediately relevant to reader). Variant B opens with the engineering (loses non-technical investors).
- **SEO advantage.** The provocative framing naturally incorporates "AI investing tools" in the title and early paragraphs, matching search intent for people googling "AI stock analysis" who are evaluating tools.
- **Steal from the others:**
  - Take Variant A's personal narrative moments (the "I got tired of this" beats, the "what I'd do differently" honesty) and weave them into C's structure
  - Take Variant B's concrete technical examples (the NVDA side-by-side, the eval test cases, the code snippets) and use them as evidence in C's argument

**Hybrid title option:**
> **Most AI Investing Tools Are Lying to You. I Built One That Isn't.**
> *Inside the architecture, evals, and investment philosophy behind an AI stock analyzer that actually takes a stance.*

This combines C's provocation with B's technical credibility signal.

---

## Next Steps

1. **Eric picks a variant** (or the hybrid)
2. **Gather real assets**: Bloom app screenshots, actual prompt snippets, eval output
3. **Create Excalidraw diagrams** for architecture, eval pipeline, and framework
4. **Generate hero image** via Nano Banana Pro
5. **Draft the full article** (~3,000 words + visuals)
