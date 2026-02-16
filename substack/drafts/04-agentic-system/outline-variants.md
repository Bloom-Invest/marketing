# Article #4 — Outline Variants

> **Status:** Draft ready for review
> **Topic:** Deep technical dive into Bloom's agentic investing system and benchmark suite
> **SEO targets:** "AI investing agent architecture", "LLM agent benchmarking", "DeepEval financial AI", "building production AI agents"

---

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

## VARIANT B: Building in Public
*"Here's every mistake I made building an AI investing agent"*

### Title
**Everything I Got Wrong Building an AI Investing Agent (And the Benchmark That Fixed It)**

### Subtitle
17 tools. 224 tests. A multi-agent system that grades itself. The honest version of "we built an AI agent."

### Outline

**1. Cold open — the time the agent fabricated earnings data**
- The worst failure mode: confident, specific, wrong financial numbers
- Why this is existential for a finance AI product

**2. Mistake 1: The over-engineered prompt**
- 4,000 tokens telling Claude things it already knows
- The realization: RLHF-trained models need less hand-holding than you think

**3. Mistake 2: God-function tools**
- Early design: one mega-tool that "does everything"
- Why 17 focused tools beat 3 Swiss Army knives
- The parallel execution unlock

**4. Mistake 3: No research planning**
- Early agent: one-shot, no multi-step reasoning
- The todo system: agent plans its own research before executing

**5. Mistake 4: Vibes-based quality assurance**
- "It looks right" → ships with fabricated metrics
- The benchmark: 224 tests, LLM-as-a-judge, tiered execution
- The failure taxonomy that turned 99 failures into 8 fixable categories

**6. What actually works now**
- Architecture overview: the full stack
- The eval loop: edit → test → categorize → fix → deploy

**7. CTA**

### Estimated length: ~2,000 words
### Pros: Relatable (everyone makes these mistakes), honest tone, good for social sharing
### Cons: "mistakes" framing might undercut confidence in the product

---

## VARIANT C: Benchmark Deep Dive
*"How do you even test an AI investing agent?"*

### Title
**224 Tests, 8 Metrics, Zero Vibes: How We Benchmark an AI Investing Agent**

### Subtitle
Most AI companies say "we test our models." Here's what that actually looks like inside Bloom — test cases, failure modes, and the eval framework that catches what humans miss.

### Outline

**1. Cold open — the question nobody asks**
- "How do you know your AI investing agent is actually good?"
- Most companies: "we tried it and it seemed right." That's terrifying for finance.

**2. What we're testing**
- The agent system: 17 tools, multi-step research, structured output
- The failure modes we care about: fabricated metrics, missing context, tool failures, bad formatting

**3. The framework: DeepEval + pytest**
- How LLM-as-a-judge works (another LLM grades the output)
- The 8 metrics and what each catches
- Tiered execution: smoke/regression/comprehensive

**4. Real test cases (with code)**
- Show actual test code for: simple price query, comprehensive analysis, safety guardrail
- The shared fixtures and metric configurations

**5. What the tests caught**
- The 363-test run: 264 passed, 99 failed
- Failure categories and surgical fixes
- The 0.65 vs 0.7 threshold that would've shipped broken

**6. The architecture that makes it testable**
- Why well-scoped tools are easier to test than God functions
- The agent chain and how each stage can be evaluated independently

**7. CTA**

### Estimated length: ~2,500 words
### Pros: Extremely unique content (nobody publishes this), high technical credibility, great for developer audience
### Cons: Narrower audience, less of a "story"

---

## COMPARISON MATRIX

| Dimension        | A: Architecture Tour ✅ | B: Building in Public   | C: Benchmark Deep Dive  |
|-----------------|-------------------------|-------------------------|-------------------------|
| Hook             | The complexity hidden behind simplicity | The worst failure mode | The question nobody asks |
| Best for         | Technical readers + investors | Broad audience + social | Developers + AI engineers |
| Length           | ~2,200 words            | ~2,000 words            | ~2,500 words            |
| Technical depth  | ★★★★★                  | ★★★★                   | ★★★★★                  |
| Emotional arc    | ★★★★                   | ★★★★★                  | ★★★                    |
| Actionability    | ★★★★                   | ★★★★★                  | ★★★★                   |
| Shareability     | ★★★★                   | ★★★★★                  | ★★★★                   |
| Unique angle     | "Here's the full machine" | "Here's every mistake"  | "Here's every test"     |

## WHY I CHOSE VARIANT A

Variant A gives the most complete picture while maintaining narrative drive. Articles 1-3 have already established the conversational, anecdote-first style — article 4 can go deeper technically because the audience is warmed up. The architecture tour angle is genuinely unique: most AI product posts are either "look what it can do" (marketing) or "here's our benchmark scores" (research). Walking through the actual system design — prompts, tools, chains, evals — fills a gap nobody else is filling.

I pull the best elements from B (the fabricated earnings anecdote as a beat within section 5) and C (actual test details in section 5) into the architecture tour structure.
