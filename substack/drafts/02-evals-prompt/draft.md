# I Texted My AI to Fix Its Own Prompt

*Three messages, three iterations, 48 fewer lines, higher scores.*

---

I sent three text messages from my couch. Put my phone down. Went back to whatever I was doing.

Twenty-five minutes later, my AI agent had rewritten its own system prompt, tested itself three times, fixed its own failures, and opened a pull request. PR #1244: "Simplify CHAT_AGENT_PROMPT — remove 48 lines." The eval scores went *up*.

What happens when you hand the evals to the AI and say: *fix yourself*?

## The prompt that got too long

I build [Bloom](https://investwithbloom.com), an investing app with an AI chat agent that helps people research stocks. Over months of tweaking, its system prompt had bloated to ~4,000 tokens.

Ten "how to answer" sections. Four few-shot examples. Fifteen lines on tool-calling policy. A full portfolio analysis template. Explicit instructions for parallel tool calls, markdown table formatting, and when to use emojis.

Most of it was stuff Claude already knows how to do.

Mario Zechner built a [coding agent with a sub-1,000 token prompt](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/) that matched Claude Code on benchmarks. That got me thinking: how much of my 4,000-token prompt was actually doing work, and how much was noise?

I had evals — a DeepEval test suite covering twelve scenarios. Price queries, stock analysis, product knowledge. Relevancy, correctness, and task completion metrics.

So instead of spending an afternoon in my IDE rewriting the prompt and eyeballing outputs, I tried something different.

## Three texts

I opened Signal and sent three messages to Kit, my [Clawdbot](https://github.com/openclaw/openclaw) agent:

> **Me:** Make the edits to be simpler, and then run llm_tests.

> **Me:** Create a PR after and post your test results. Iterate the prompt until you get satisfactory eval results.

> **Me:** Key things to maintain: 1. Simple short concise answers with clear reasoning 2. Markdown tables max 2 columns 3. Should still know which tools to call 4. Shorter prompt is better

I didn't tell Kit which lines to cut. Didn't suggest a rewrite strategy. I gave it the constraints, the eval suite, and one instruction: iterate until the numbers look good.

Then I put my phone down.

## What Kit actually did

Kit read the 4,000-token prompt, identified the bloat, made aggressive cuts, and ran the test suite. Three rounds — each failure taught it something specific.

**Round 1: Over-trimmed.** Kit cut too deep. The instruction "if you can answer in one sentence, do that" made the model return bare prices with no context. Ask about Apple stock, you'd get "$405.23" and nothing else. Failed the comprehensive analysis test.

**Round 2: Listed without interpreting.** Kit added context back, but now the model dumped financial metrics in a list without saying what they meant. Relevancy score: 0.65. Threshold: 0.7. Kit diagnosed the problem from the score breakdown and added one line: *"Interpret metrics, don't just list them."*

**Round 3: All green.** 12/12 tests passed. Eight hit perfect 1.00 on Answer Relevancy. Financial analysis Task Completion jumped from 0.80 to 0.90.

Here's the part that changed how I think about prompt work: I didn't review those failures. I didn't diagnose the 0.65 relevancy score. Kit read the eval output, understood *why* it was failing, and made a targeted one-line fix. The agent debugged itself.

## The code review bots pile on

Kit opened PR #1244. Then something unplanned happened.

Three code review bots — Claude, Cursor Bugbot, and Sentry — all independently flagged the same inconsistency. My prompt said "include change %" for price queries, but the few-shot example showed `"The current price is $405.23."` No change percentage.

The instruction and the example contradicted each other. The model was following the example, not the instruction. Three bots caught it. I wouldn't have.

Kit fixed the contradiction and pushed. Twenty-five minutes total. Zero time at a keyboard.

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

74 lines removed. 26 added. Net: **-48 lines.**

The shorter prompt didn't just maintain quality — it improved it. Fewer instructions means less ambiguity. When the model has ten "how to answer" sections, it wastes effort figuring out which applies. Three focused guidelines? Nothing to figure out.

## The loop is the insight

"Write evals" isn't new advice. Here's what is: **AI can use evals to improve itself.**

Give your agent access to the test suite. Tell it: run the evals, read the failures, fix the prompt, run them again. Edit → eval → fix → repeat. A closed loop where the agent does the debugging you used to do by hand.

Kit over-trimmed in round 1. It read the failure, understood that "comprehensive analysis" requires more than a one-liner, added nuance back. In round 2, it saw 0.65 where it needed 0.7, traced the issue to metric dumping, and wrote a single targeted instruction.

That's not autocomplete. That's self-repair.

## What to steal from this

**Your prompt is probably too long.** I was spending hundreds of tokens on behaviors Claude does by default — parallel tool calls, markdown formatting, concise answers. The ten question-type handlers I removed? The model handled every case without them. Cut aggressively. Test what breaks.

**Examples beat instructions — and they can contradict them.** My prompt said one thing, my example showed another. The model followed the example. Audit your few-shot examples against your explicit rules. Right now.

**Evals catch what you won't.** A 0.65 relevancy score on one test case. I wouldn't have noticed that by eyeballing outputs. I would've shipped it, and some user asking for a stock analysis would've gotten a wall of numbers with no interpretation. The eval caught it. The agent fixed it. I never saw the problem.

**The iteration barrier is a text message.** Three texts from my phone. No laptop, no IDE. Kit read the codebase, made edits, ran tests, iterated on failures, opened a PR, and responded to code review. If you have evals and an agent with shell access, you can hand the entire optimize-test-ship loop to it today.

## How to actually do this

1. **[Clawdbot](https://github.com/openclaw/openclaw)** — open-source AI agent with filesystem and shell access. Connects over Signal, WhatsApp, or Telegram. ([Setup guide by Aman Khan](https://amankhan1.substack.com/p/how-to-get-clawdbotmoltbotopenclaw).)
2. **[DeepEval](https://github.com/confident-ai/deepeval)** — open-source eval framework. Test cases in Python, pytest runner, scores on whatever metrics you care about.
3. **A prompt you want to improve** — and the willingness to let an agent mess with it.

You don't need 363 tests. Start with 5. Cover your most important user flows. The point isn't comprehensive coverage — it's having *any* automated signal that tells you when a change made things worse.

Then tell your agent: simplify the prompt, run the evals, iterate until they pass.

## What's next

After PR #1244 merged, I expanded the suite from 12 tests to 363. Analysis depth checks. Safety guardrails for fabricated financial data. Edge cases I'd never thought to test.

264 passed. 99 failed. But those 99 failures clustered into eight fixable categories: tool failures, formatting issues, safety violations, valuation depth gaps. Eight categories is a to-do list, not a crisis.

That's a story for next time.

---

Write the evals. Hand the keys to your agent. Let it improve itself.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI investing assistant for iOS and Android. [Kit](https://github.com/openclaw/openclaw) is his Clawdbot agent. You can follow the work on [GitHub](https://github.com/bloom-invest/bloom).*
