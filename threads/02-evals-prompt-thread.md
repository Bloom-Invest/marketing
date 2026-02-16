# Thread: AI Optimizes Its Own Prompt
## Source: /Users/testuser/marketing/substack/drafts/02-evals-prompt/draft.md

### Post 1 (Hook)
We tested our AI 363 times. It couldn't figure out that listing financial metrics without interpreting them is useless.

So we let it rewrite its own prompt. Three text messages from my couch. It scored higher than the version I spent months hand-tuning.

### Post 2
Our AI chat agent's system prompt bloated to ~4,000 tokens over months of tweaking.

Ten "how to answer" sections. Four few-shot examples. Fifteen lines on tool-calling policy. Explicit emoji instructions.

Most of it? Stuff Claude already knows how to do.

### Post 3
I sent three texts to my AI agent on Signal:

"Make the prompt simpler, then run the evals."
"Create a PR. Iterate until results are satisfactory."
"Keep answers concise, tables max 2 columns, shorter is better."

Phone down. Back to my evening.

### Post 4
Round 1: cut too deep. "What about AAPL?" returned "$405.23" and nothing else. Failed.

Round 2: added context back, but dumped metrics without interpretation. Relevancy score: 0.65. Threshold: 0.7.

Round 3: added one line — "Interpret metrics, don't just list them." 12/12 green.

The agent debugged itself.

### Post 5
The result: 4,000 → 2,000 tokens. 74 lines removed. 26 added. -48 lines net.

The shorter prompt scored higher. Fewer instructions = less ambiguity. Ten "how to answer" sections and the model wastes effort figuring out which applies.

### Post 6 (Closer)
Your prompt is probably too long. Your few-shot examples probably contradict your instructions. And you'll never catch it by eyeballing outputs.

Write 5 evals. Hand the keys to your agent. Let it fix itself.

Full walkthrough: [link]
