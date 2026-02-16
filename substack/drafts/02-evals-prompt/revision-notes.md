# Revision Notes — Draft 02: Evals Prompt

**Word count:** 1,517 → 1,277 (−240 words, −15.8%)

---

## Pass 1: Remove Chaff

### Cut entirely:
- **Opening throat-clearing** — "That's the punchline. But the real story isn't 'I have evals.' Lots of people have evals. The real story is what happens when you hand the evals to the AI and say: fix yourself." → Replaced with the single punchy question "What happens when you hand the evals to the AI and say: *fix yourself*?" The original was 3 sentences to say what 1 sentence says.
- **"I know, I know" hedging** — "I know, I know. 'Write evals' is advice you've heard before. That's not the insight here. The insight is that..." → Compressed to "Here's what is:" — the hedging was apologizing for the piece's own thesis.
- **"That's not autocomplete. That's a feedback loop. And it's one that most people are leaving on the table."** — Mini-summary telling the reader what they just saw. Cut the "leaving on the table" cliché. Moved "That's not autocomplete" to the end of the section as "That's not autocomplete. That's self-repair." — punchier, no filler sentence.
- **"Kit read the existing 4,000-token prompt, identified the bloat, made aggressive cuts, and ran the test suite. It didn't get it right the first time. It took three rounds..."** — Two sentences that repeat what the next three paragraphs show in detail. Compressed to one setup sentence.
- **"The stack is simpler than you'd think"** — Filler intro line. Cut.
- **"The results were humbling."** — Telling emotion instead of showing it. Cut; the numbers (264/363) speak for themselves.
- **Subtitle "with Clawdbot"** — Removed from title. The piece earns the product mention; the title doesn't need it.

### Trimmed/tightened:
- "The agent runs on Claude via OpenRouter" — Cut. Not relevant to the story.
- "I'd been reading Mario Zechner's work — he built..." → "Mario Zechner built..." — Cut the "I'd been reading" throat-clearing.
- "a small DeepEval test suite covering basic scenarios" → "a DeepEval test suite covering twelve scenarios" — "small" and "basic" are hedging; the specificity of "twelve" is better.
- "So instead of spending an afternoon in my IDE rewriting the prompt by hand and eyeballing outputs" → removed "by hand" (redundant with "in my IDE")
- Multiple "Then something I didn't plan happened" → "Then something unplanned happened" — tighter
- Section "The real takeaway isn't 'have evals'" → renamed "The loop is the insight" — shorter, more direct, no negation-then-correction structure

### NICE-TO-HAVE items kept:
- The three-text-message block quotes — essential for "show don't tell" and the piece's premise
- The before/after bullet comparison — high value, concrete evidence
- "How to actually do this" section — serves a CTA purpose for Clawdbot/DeepEval

---

## Pass 2: Show Don't Tell

### Fixes:
- **"Over-trimmed" → added concrete detail:** Changed "Kit removed too much" to "Kit cut too deep" and kept the specific example (Apple stock → "$405.23" and nothing else). Already strong — left mostly intact.
- **"The shorter prompt didn't just maintain quality. It improved it. My theory: fewer instructions means less ambiguity."** → Cut "My theory:" (hedging). Made the explanation more direct: "Fewer instructions means less ambiguity. When the model has ten 'how to answer' sections, it wastes effort figuring out which applies. Three focused guidelines? Nothing to figure out." — The rhetorical question at the end is concrete reasoning, not vague assertion.
- **"Kit read the eval output, understood *why* it was failing, and made a targeted one-line fix."** → Added "The agent debugged itself." as the beat. The original had "The agent used the evals to debug itself" which was slightly wordier.
- **Already strong throughout** — Eric's draft was naturally specific (PR #1244, 0.65 vs 0.7, 74 lines removed / 26 added). Minimal intervention needed.

---

## Pass 3: Emotion Amplifier

### Driving emotion: The thrill of leverage — doing something powerful with almost no effort, from your couch.

### Changes:
- **Opening:** Broke "I sent three text messages from my couch, put my phone down, and went back to whatever I was doing" into three short sentences. Creates a more casual, almost dismissive rhythm — reinforces how *little* effort this took. The nonchalance IS the emotion.
- **"What happens when you hand the evals to the AI and say: fix yourself?"** — Turned from a statement into a question. Questions create forward pull. The reader now has a reason to keep going.
- **"That's not autocomplete. That's self-repair."** — "Self-repair" is more visceral than "a feedback loop." Loops are abstract. Self-repair implies something alive.
- **"Audit your few-shot examples against your explicit rules. Right now."** — Added "Right now." to the end of the examples-beat-instructions bullet. Creates urgency, breaks the pattern of the other bullets.
- **Closing section ("What's next"):** Preserved the cliffhanger but tightened. "Eight categories is a to-do list, not a crisis" was already a great emotional beat — left it intact.
- **Did NOT add:** No exclamation points, no "incredible"/"amazing", no manufactured drama. The emotion comes from the specificity and the contrast (couch vs. 25 minutes of autonomous work).

---

## Pass 4: Prosody Checker

### Sentence length fixes:
- **Opening paragraph:** Original was one long compound sentence (3 clauses joined by commas). Split into three short declarative sentences: "Sent three texts. Put my phone down. Went back." Creates a staccato rhythm that matches the casualness of the action.
- **"What happens when..." question** — This is a medium-length sentence (~15 words) that follows short ones. Good variation.
- **"Most of it was stuff Claude already knows how to do."** — Single-sentence paragraph. Left alone — it's a punchy beat after a dense list paragraph. Good rhythm.
- **"That got me thinking: how much of my 4,000-token prompt was actually doing work, and how much was noise?"** — Long flowing sentence (~25 words) after a short factual one. Good contrast.
- **"Then I put my phone down."** — 6 words. Single-sentence paragraph. Left as a deliberate echo of the opening. Creates structural rhyme.
- **"Three rounds — each failure taught it something specific."** — Replaced the original two-sentence version with a dash-connected phrase. Tighter.
- **Round descriptions:** Varied by design — Round 1 is longest (shows the most dramatic failure), Round 2 is medium (diagnostic), Round 3 is shortest (payoff). This is a natural diminishing structure.
- **"Cut aggressively. Test what breaks."** — Two 2-word imperatives. Punchy close to a paragraph that had longer sentences.

### Paragraph length variation:
- Opening: 3 short sentences (1 line)
- Second paragraph: 1 long sentence (3 lines)
- Transition question: 1 line
- Sections alternate between dense paragraphs (3-5 lines) and single-line beats

---

## Pass 5: Reader Simulator

### Target reader: AI engineer/builder who wants to level up their eval game.

### 🟢 Screenshot moments (kept/enhanced):
- The three Signal message quotes — "this is all it took?!" moment
- Round 1/2/3 progression — the narrative payoff
- Before/after token comparison — concrete proof
- "Three bots caught it. I wouldn't have." — the mic drop line
- "Eight categories is a to-do list, not a crisis" — reframeable insight

### 🟡 Skim zones (fixed):
- **"The real takeaway" section** — Original repeated the loop concept that was already demonstrated in the Round 1/2/3 section. Tightened significantly. Renamed to "The loop is the insight" for scanners.
- **"What to steal" bullets** — Were slightly repetitive with earlier sections. Trimmed each bullet to be tighter, removed restated evidence where the reader already saw it in the narrative.
- **"How to actually do this" list** — Trimmed descriptions. Readers who want to try it will click through; they don't need a sales pitch for each tool here.

### 🔴 Bounce points (fixed):
- **Original paragraph 3 of opening** — "That's the punchline. But the real story isn't..." was a bounce risk. Reader thinks "okay, I got the point, do I need to keep reading?" Replaced with a forward-pulling question that creates curiosity.
- **"I know, I know"** — Apologizing for your own thesis is a bounce trigger. Reader thinks "if YOU think this is obvious, why am I reading?" Cut entirely.
- **"What's next" section** — Original had "The results were humbling" which is a vague emotion-tell that could lose the technical reader. Cut straight to the numbers.

---

## Voice preservation notes

- Kept all contractions, informal phrasing, sentence fragments
- Preserved the specific numbers (4,000 tokens, 0.65 vs 0.7, 74/26/-48, 12/12, 264/363/99/8)
- Did not add any "leverage the power of" or "game-changing" language
- Maintained the irreverent tone ("whatever I was doing," "stuff Claude already knows")
- Kept the couch-to-PR narrative frame as the emotional spine
