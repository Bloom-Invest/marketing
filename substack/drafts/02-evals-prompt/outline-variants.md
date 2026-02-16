# Article #2 — Outline Variants

> **Status:** Waiting for Eric's pick
> **Source:** https://evals-prompt-bloom.surge.sh (existing v1)
> **New material:** Round 2 iteration — PR #1275, 363 tests, failure taxonomy, sub-agent spawning
> **SEO targets:** "AI prompt engineering", "LLM evals automated", "how to optimize LLM prompts with automated testing"

---

## VARIANT A: Chronological Narrative
*"What happened, round by round"*

### Title
**I Texted My AI to Fix Its Own Prompt — Then It Did It Again**

### Subtitle
Three messages, two PRs, 363 automated tests. A prompt went from 4,000 tokens to 2,000 to 2,200 — and got better at every step.

### Outline

**1. Cold open — the three messages (same as v1, keep it)**
- The setup: I sent three texts, put my phone down
- [SCREENSHOT: Signal conversation showing the 3 messages]

**2. Why this matters (compressed from v1)**
- Most people eyeball prompts. That breaks at scale.
- The thesis: edit → eval → fix → deploy, all from your phone
- [DIAGRAM: The eval loop — edit → test → fix → deploy]

**3. Context: what Bloom is, what the prompt looked like**
- 4,000-token prompt. 10 how-to-answer sections. 4 few-shot examples.
- The hypothesis: RLHF models already know most of this
- [IMAGE: Hero image — for Nano Banana Pro generation]

**4. Round 1: The simplification (PR #1244)**
- Kit over-trims → fails comprehensive analysis test
- Round 2: lists metrics without interpreting them → 0.65 score
- Round 3: all green. 12/12 passing. -48 lines.
- Code review bots catch example/instruction contradiction
- [DIAGRAM: Before/after prompt comparison — for Excalidraw]

**5. NEW: Round 2 — The real world punches back (PR #1275)**
- Merged analysis depth + safety guardrails into PR #1244 (+14 lines)
- Ran full DeepEval suite: 264 passed, 99 failed out of 363 tests
- The 99 failures weren't random — they clustered into categories:
  - Tool failures (analyze_technicals unavailable, database locks)
  - Formatting (bold/bullets in a text-message context)
  - Safety (fabricated financial metrics — the worst kind of failure)
  - Valuation depth (P/E without growth rate context)
  - Chart philosophy (no guidance on broken charts)
- [SCREENSHOT: DeepEval test results terminal output]
- [DIAGRAM: Failure categories breakdown]

**6. NEW: The sub-agent fix**
- Spawned a sub-agent specifically to address all 99 failures
- PR #1275: +16 lines, -4 lines of surgical prompt additions
- Categories: smart summary mock fix, tool failure fallback, valuation depth, chart philosophy, safety guardrails, formatting, conciseness, filtering accuracy
- The prompt journey: ~4000 → ~2000 → ~2200 tokens

**7. Takeaways (expanded from v1, add new lessons)**
- Keep v1 lessons: AI can eval itself, examples beat instructions, your prompt is too long
- NEW lesson: Simplification is step 1. Targeted re-addition is step 2.
- NEW lesson: Failure categories > failure counts. 99 failures sounds bad. 8 categories is tractable.
- NEW lesson: Sub-agents turn a prompt fix from a project into a task
- The closing line: "Write the evals. Hand the keys to your agent. Let it improve itself."

**8. CTA**
- Try Bloom / Subscribe / Clawdbot link

### Estimated length: ~2,500 words
### Pros: Natural story arc, easy to follow, builds suspense
### Cons: Readers who saw v1 may skim the first half

---

## VARIANT B: Framework-First
*"Here's the method, here's proof it works"*

### Title
**The Eval Loop: How I Use 363 Automated Tests to Optimize an AI Prompt**

### Subtitle
A repeatable framework for prompt engineering — with actual numbers, not vibes.

### Outline

**1. Cold open — the framework**
- State the method up front: edit → eval → categorize failures → fix → deploy
- Most prompt engineering is vibes. This is engineering.
- [DIAGRAM: The eval loop — edit → test → fix → deploy]
- [IMAGE: Hero image — for Nano Banana Pro generation]

**2. The framework in detail**
- **Step 1: Write evals first.** 363 test cases across task completion, relevancy, correctness, safety
- **Step 2: Simplify aggressively.** Remove anything the base model already does. (~4000 → ~2000 tokens)
- **Step 3: Run the suite.** Let numbers tell you what broke. (264 passed, 99 failed)
- **Step 4: Categorize failures.** Not "99 things broke." It's "8 categories need fixing."
  - [DIAGRAM: Failure categories breakdown]
- **Step 5: Surgical additions.** +16 lines, -4 lines. Each line traces to a failure category.
- **Step 6: Deploy and repeat.**

**3. Proof: the Bloom case study**
- What Bloom is (brief)
- The prompt before: 4,000 tokens of accumulated instruction
- [DIAGRAM: Before/after prompt comparison — for Excalidraw]

**4. Round 1: Simplification (PR #1244)**
- Three texts from my phone → Kit runs 12 evals, iterates 3 rounds
- [SCREENSHOT: Signal conversation showing the 3 messages]
- Result: -48 lines, 12/12 passing, relevancy scores up

**5. Round 2: Full suite (PR #1275)**
- 363 tests exposed what 12 couldn't
- Key failures: fabricated metrics, missing growth rate context, no chart guidance
- Sub-agent spawned → surgical prompt additions
- [SCREENSHOT: DeepEval test results terminal output]
- Result: ~2,200 tokens. Better than the original 4,000.

**6. Why this works (the theory)**
- Fewer instructions = less ambiguity for the model
- Evals catch regressions humans miss (0.65 vs 0.7 threshold)
- Failure taxonomy makes 99 failures tractable
- Sub-agents turn iteration from hours to minutes

**7. How to steal this**
- Actionable steps: pick an eval framework, write 10 test cases, let your agent iterate
- Links: DeepEval, Clawdbot, Bloom's approach
- The money line: "Your prompt is probably too long. You just don't have the evals to prove it."

**8. CTA**

### Estimated length: ~2,200 words
### Pros: Immediately useful, high share value ("bookmark this"), strong SEO for "how to" queries
### Cons: Less personal narrative, might feel like a tutorial instead of a blog post

---

## VARIANT C: Results-First
*"Here are the numbers, here's how we got there"*

### Title
**4,000 Tokens → 2,200 Tokens: What Happened When I Let AI Optimize Its Own Prompt**

### Subtitle
264 of 363 tests passed. 99 failures in 8 categories. One sub-agent to fix them all.

### Outline

**1. Cold open — the scoreboard**
- The numbers, no preamble:
  - Prompt: 4,000 → 2,000 → 2,200 tokens
  - Tests: 363 total. 264 passed. 99 failed → categorized → fixed.
  - Time: ~25 minutes for round 1. Sub-agent for round 2.
  - Human effort: 3 text messages.
- "Here's what those numbers mean."
- [IMAGE: Hero image — for Nano Banana Pro generation]

**2. The scorecard breakdown**
- [SCREENSHOT: DeepEval test results terminal output]
- Table: failure categories with counts and examples
  | Category | What broke | Fix |
  |----------|-----------|-----|
  | Tool failures | analyze_technicals unavailable | Fallback instruction |
  | Safety | Fabricated financial metrics | Hard guardrail |
  | Formatting | Bold/bullets in text context | Explicit constraint |
  | Valuation depth | P/E without growth rates | Contextual analysis rule |
  | Chart philosophy | No guidance on broken charts | Philosophy addition |
  | ... | ... | ... |
- [DIAGRAM: Failure categories breakdown]

**3. How did we get here? The backstory**
- Bloom's chat agent. 4,000-token prompt. The hypothesis that it's too long.
- [DIAGRAM: Before/after prompt comparison — for Excalidraw]

**4. The three messages**
- [SCREENSHOT: Signal conversation showing the 3 messages]
- Round 1: Kit simplifies, runs evals, iterates. PR #1244. -48 lines. 12/12 passing.
- Code review bots catch contradictions. Fixed.

**5. Scaling the evals: 12 tests → 363 tests**
- Added analysis depth rules + safety guardrails
- Ran the full suite: 264/363 = 72.7% pass rate
- The 99 failures clustered into 8 fixable categories
- [DIAGRAM: The eval loop — edit → test → fix → deploy]

**6. The sub-agent fix (PR #1275)**
- Spawned a dedicated sub-agent for the 99 failures
- +16 lines, -4 lines. Surgical.
- The prompt arc: bloated → lean → lean + precise

**7. What I learned (tight, opinionated)**
- "Simplification is obvious. Knowing *what* to add back is the hard part. Evals solve that."
- "99 failures is a wall. 8 categories is a to-do list."
- "Your prompt has instructions the model doesn't need and is missing instructions it does. You won't know which is which without evals."
- The kicker: "The best prompt isn't the shortest. It's the one where every line traces to a test."

**8. CTA**

### Estimated length: ~2,000 words
### Pros: Punchy, scannable, the numbers hook readers instantly, great for social sharing
### Cons: Backstory feels rushed, less emotional arc

---

## ASCII WIREFRAMES

### Variant A Wireframe (Chronological)
```
┌─────────────────────────────────────────────────────┐
│  [IMAGE: Hero image — Nano Banana Pro]              │
│                                                     │
│  ══════════════════════════════════════════════════  │
│  I Texted My AI to Fix Its Own Prompt —             │
│  Then It Did It Again                               │
│  Three messages, two PRs, 363 automated tests...    │
│  ══════════════════════════════════════════════════  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: Signal conversation - 3 msgs]    │  │
│  │  "Make the edits to be simpler..."            │  │
│  │  "Create a PR after..."                       │  │
│  │  "Key things to maintain..."                  │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  Three messages. Then I put my phone down.          │
│                                                     │
│  ── § Why this matters ───────────────────────────  │
│  2-3 paragraphs. The thesis.                        │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: The eval loop]                      │  │
│  │  edit → test → fix → deploy                   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § Context ────────────────────────────────────  │
│  What Bloom is. The 4,000-token prompt.             │
│                                                     │
│  ── § Round 1: Simplification (PR #1244) ─────────  │
│  3 sub-rounds. Over-trim → metric listing → green.  │
│  Code review bot catch.                             │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: Before/after prompt — Excalidraw]   │  │
│  │  LEFT: 4,000 tokens    RIGHT: 2,000 tokens    │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § Round 2: The real world (PR #1275) ─────────  │
│  264 passed, 99 failed. The failure taxonomy.       │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: DeepEval terminal output]        │  │
│  │  ✓ 264 passed  ✗ 99 failed  (363 total)      │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: Failure categories breakdown]       │  │
│  │  8 categories, counts, severity               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § The sub-agent fix ──────────────────────────  │
│  Spawned sub-agent. +16/-4 lines. The prompt arc.   │
│                                                     │
│  ── § Takeaways ──────────────────────────────────  │
│  5-6 bold lessons, 1-2 sentences each.              │
│                                                     │
│  ── § CTA ────────────────────────────────────────  │
│  Try Bloom · Subscribe · Clawdbot                   │
└─────────────────────────────────────────────────────┘
```

### Variant B Wireframe (Framework-First)
```
┌─────────────────────────────────────────────────────┐
│  [IMAGE: Hero image — Nano Banana Pro]              │
│                                                     │
│  ══════════════════════════════════════════════════  │
│  The Eval Loop: How I Use 363 Automated Tests       │
│  to Optimize an AI Prompt                           │
│  ══════════════════════════════════════════════════  │
│                                                     │
│  Hook paragraph: most prompt eng is vibes.          │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: The eval loop]                      │  │
│  │  edit → eval → categorize → fix → deploy      │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § The Framework (6 steps) ────────────────────  │
│                                                     │
│  Step 1: Write evals first                          │
│  Step 2: Simplify aggressively                      │
│  Step 3: Run the suite                              │
│  Step 4: Categorize failures                        │
│     ┌────────────────────────────────────────────┐  │
│     │ [DIAGRAM: Failure categories breakdown]    │  │
│     └────────────────────────────────────────────┘  │
│  Step 5: Surgical additions                         │
│  Step 6: Deploy and repeat                          │
│                                                     │
│  ── § Proof: The Bloom Case Study ────────────────  │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │ [DIAGRAM: Before/after prompt — Excalidraw]   │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  ── § Round 1 (PR #1244) ────────────────────────   │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: Signal conversation - 3 msgs]    │  │
│  └───────────────────────────────────────────────┘  │
│  Narrative compressed: 3 texts → 3 rounds → green   │
│                                                     │
│  ── § Round 2 (PR #1275) ────────────────────────   │
│  ┌───────────────────────────────────────────────┐  │
│  │ [SCREENSHOT: DeepEval terminal output]        │  │
│  └───────────────────────────────────────────────┘  │
│  363 tests. 99 failures. Sub-agent fix.             │
│                                                     │
│  ── § Why This Works ─────────────────────────────  │
│  Theory: fewer instructions, evals catch drift,     │
│  failure taxonomy, sub-agents speed iteration       │
│                                                     │
│  ── § How to Steal This ──────────────────────────  │
│  Actionable steps. Links. The money line.           │
│                                                     │
│  ── § CTA ────────────────────────────────────────  │
└─────────────────────────────────────────────────────┘
```

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
