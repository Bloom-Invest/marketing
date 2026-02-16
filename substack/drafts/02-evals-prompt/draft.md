<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

### Variant C Wireframe (Results-First)
```
┌─────────────────────────────────────────────────────┐
│  [IMAGE: Hero image — Nano Banana Pro]              │
│                                                     │
│  ══════════════════════════════════════════════════  │
│  4,000 → 2,200 Tokens: What Happened When I Let     │
│  AI Optimize Its Own Prompt                         │
│  ══════════════════════════════════════════════════  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │         THE SCOREBOARD                        │  │
│  │  Prompt:  4,000 → 2,000 → 2,200 tokens       │  │
│  │  Tests:   264/363 passed → fixed → green      │  │
│  │  Time:    ~25 min (round 1) + sub-agent       │  │
│  │  Effort:  3 text messages                     │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § The Scorecard ──────────────────────────────  │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: DeepEval terminal output]        │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Failure categories table (inline)                  │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: Failure categories breakdown]       │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § How We Got Here ────────────────────────────  │
│  Bloom context. The bloated prompt.                 │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: Before/after prompt — Excalidraw]   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § The Three Messages ─────────────────────────  │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: Signal conversation - 3 msgs]    │  │
│  └───────────────────────────────────────────────┘  │
│  Round 1 narrative (compressed). PR #1244.          │
│                                                     │
│  ── § Scaling: 12 → 363 Tests ───────────────────  │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: The eval loop]                      │  │
│  │  edit → test → fix → deploy                   │  │
│  └───────────────────────────────────────────────┘  │
│  Full suite results. The 99 failures.               │
│                                                     │
│  ── § The Sub-Agent Fix (PR #1275) ───────────────  │
│  +16/-4 lines. The prompt arc visualization.        │
│                                                     │
│  ── § What I Learned ─────────────────────────────  │
│  4 tight, opinionated bullets.                      │
│  Kicker: "The best prompt isn't the shortest..."    │
│                                                     │
│  ── § CTA ────────────────────────────────────────  │
└─────────────────────────────────────────────────────┘
```

---

## COMPARISON MATRIX

| Dimension        | A: Chronological        | B: Framework-First      | C: Results-First        |
|-----------------|-------------------------|-------------------------|-------------------------|
| Hook             | Narrative (the 3 texts) | Thesis (vibes vs eng)   | Numbers (the scoreboard)|
| Best for         | Existing readers         | New readers / SEO       | Social sharing / skimmers|
| Length           | ~2,500 words            | ~2,200 words            | ~2,000 words            |
| Emotional arc    | ★★★★★                  | ★★★                    | ★★★★                   |
| Actionability    | ★★★                    | ★★★★★                  | ★★★★                   |
| Shareability     | ★★★                    | ★★★★                   | ★★★★★                  |
| SEO strength     | ★★★                    | ★★★★★                  | ★★★★                   |
| Unique angle     | "Story continues"       | "Steal this framework"  | "Look at these numbers" |

## MY RECOMMENDATION

**Variant A with Variant C's cold open.** Start with the scoreboard numbers (instant hook), then tell the chronological story. Best of both worlds — the numbers grab attention, the narrative keeps them reading. Variant B's framework can live as a sidebar or "How to steal this" section at the end.

---

## NEXT STEPS
- [ ] Eric picks a variant (or hybrid)
- [ ] Generate hero image with Nano Banana Pro
- [ ] Create Excalidraw diagrams (before/after prompt, eval loop, failure categories)
- [ ] Take screenshots (Signal conversation, DeepEval terminal output)
- [ ] Write full draft
- [ ] SEO review pass

</details>

---

# I Texted My AI to Fix Its Own Prompt

*Three messages. 48 fewer lines. Higher scores.*

---

Three text messages from my couch. Phone down. Back to whatever I was doing.

Twenty-five minutes later, Kit — my [Clawdbot](https://github.com/openclaw/openclaw) agent — had rewritten its own system prompt, tested itself three times, fixed its own failures, and opened a pull request. PR #1244: "Simplify CHAT_AGENT_PROMPT — remove 48 lines."

The eval scores went *up*.

## The prompt that got too long

[Bloom](https://investwithbloom.com) is an investing app I build. It has an AI chat agent that helps people research stocks. Over months of tweaking, its system prompt bloated to ~4,000 tokens.

Ten "how to answer" sections. Four few-shot examples. Fifteen lines on tool-calling policy. A full portfolio analysis template. Explicit instructions for parallel tool calls, markdown table formatting, emoji usage.

Most of it? Stuff Claude already knows how to do.

Mario Zechner built a [coding agent with a sub-1,000 token prompt](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) that matched Claude Code on benchmarks. That got under my skin. How much of my 4,000 tokens was signal, and how much was noise?

I had evals. A DeepEval test suite covering twelve scenarios — price queries, stock analysis, product knowledge. Relevancy, correctness, task completion.

So instead of an afternoon in my IDE rewriting the prompt and eyeballing outputs, I tried something different.

## Three texts

I opened Signal and sent three messages to Kit:

> **Me:** Make the edits to be simpler, and then run llm_tests.

> **Me:** Create a PR after and post your test results. Iterate the prompt until you get satisfactory eval results.

> **Me:** Key things to maintain: 1. Simple short concise answers with clear reasoning 2. Markdown tables max 2 columns 3. Should still know which tools to call 4. Shorter prompt is better

No line-by-line instructions. No rewrite strategy. Just constraints, an eval suite, and one rule: iterate until the numbers look good.

Phone down.

## What Kit actually did

Kit read the 4,000-token prompt, identified the bloat, cut aggressively, and ran the test suite. Three rounds.

**Round 1: Over-trimmed.** Cut too deep. The instruction "if you can answer in one sentence, do that" made the model return bare prices with no context. Ask about @AAPL, you'd get "$405.23" and nothing else. Failed the analysis test.

**Round 2: Listed without interpreting.** Added context back, but now the model dumped financial metrics in a list without saying what they meant. Relevancy score: 0.65. Threshold: 0.7. Kit diagnosed the gap from the score breakdown and added one line: *"Interpret metrics, don't just list them."*

**Round 3: Green.** 12/12. Eight tests hit perfect 1.00 on Answer Relevancy. Financial analysis Task Completion jumped from 0.80 to 0.90.

I didn't review those failures. I didn't diagnose the 0.65. Kit read the eval output, understood *why* it was failing, and wrote a targeted one-line fix.

The agent debugged itself.

## The code review bots pile on

Kit opened PR #1244. Then something I didn't plan for.

Three code review bots — Claude, Cursor Bugbot, and Sentry — all independently flagged the same inconsistency. My prompt said "include change %" for price queries, but the few-shot example showed `"The current price is $405.23."` No change percentage.

The instruction and the example contradicted each other. Model followed the example, not the instruction. Three bots caught it. I wouldn't have.

Kit fixed the contradiction, pushed. Twenty-five minutes total. Zero time at a keyboard.

## What actually changed

**Before (~4,000 tokens):**
- 10 question-type handlers
- 4 few-shot examples (one was 200+ tokens alone)
- 15 lines of tool-calling policy
- Full markdown table formatting guide
- Explicit emoji and tone instructions

**After (~2,000 tokens):**
- 2 focused few-shot examples
- Zero question-type handlers
- 5 lines of tool guidance
- Core voice and formatting rules only

74 lines removed. 26 added. **-48 lines net.**

The shorter prompt scored higher. Not "maintained quality" — actually improved. Fewer instructions means less ambiguity. Ten "how to answer" sections and the model wastes effort figuring out which applies. Two focused guidelines and there's nothing to figure out.

## What to steal

**Your prompt is probably too long.** I spent hundreds of tokens on things Claude does by default — parallel tool calls, markdown formatting, concise answers. My ten question-type handlers? The model handled every case without them. Cut aggressively. Test what breaks.

**Examples beat instructions — and they can contradict.** My prompt said one thing, my example showed another. Model followed the example. Audit your few-shots against your rules.

**Evals catch what you won't.** A 0.65 relevancy score on one test case. I'd never have noticed by eyeballing. I would've shipped it, and some user asking for a stock analysis would've gotten a wall of numbers with no interpretation. The eval caught it. The agent fixed it. I never saw the problem.

**The iteration barrier is a text message.** Three texts from my phone. No laptop. Kit read the codebase, made edits, ran tests, iterated on failures, opened a PR, responded to code review. If you have evals and an agent with shell access, this works today.

## How to actually do this

1. **[Clawdbot](https://github.com/openclaw/openclaw)** — open-source AI agent with filesystem and shell access. Connects over Signal, WhatsApp, or Telegram. ([Setup guide by Aman Khan](https://amankhan1.substack.com/p/how-to-get-clawdbotmoltbotopenclaw).)
2. **[DeepEval](https://github.com/confident-ai/deepeval)** — open-source eval framework. Test cases in Python, `pytest` runner, scores on whatever metrics you care about.
3. **A prompt you want to improve** — and the willingness to let an agent mess with it.

You don't need 363 tests. Start with 5. Cover your most important user flows. The point isn't coverage — it's having *any* automated signal that tells you when a change made things worse.

Tell your agent: simplify the prompt, run the evals, iterate until they pass.

## What's next

After PR #1244 merged, I expanded the suite from 12 to 363 tests. Analysis depth. Safety guardrails for fabricated financial data. Edge cases I'd never thought to test.

264 passed. 99 failed.

But those 99 failures clustered into eight fixable categories: tool failures, formatting issues, safety violations, valuation depth gaps. Eight categories is a to-do list, not a crisis.

That's next time.

---

Write the evals. Hand the keys to your agent. Let it fix itself.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI investing assistant for iOS and Android. [Kit](https://github.com/openclaw/openclaw) is his Clawdbot agent. Follow the work on [GitHub](https://github.com/bloom-invest/bloom).*
