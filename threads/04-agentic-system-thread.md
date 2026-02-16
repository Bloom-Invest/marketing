# Thread: Building an AI Investing Agent
## Source: /Users/testuser/marketing/substack/drafts/04-agentic-system/draft.md

### Post 1 (Hook)
Our AI investing agent's system prompt bloated to 4,000 tokens. Emoji usage guides. Markdown formatting rules. Ten "how to answer different questions" sections. We cut it to 2,000 tokens. Eval scores went UP. We'd been teaching Claude things it learned during RLHF.

### Post 2
Half our remaining prompt is investment philosophy — Buffett, Druckenmiller, specific case studies like @META at 7x PE in 2022. The other half is voice and app-specific constraints. That's it. Spend your token budget on what the model can't figure out alone.

### Post 3
Early mistake: one giant `get_stock_info` function that returned financials, prices, news, technicals, and sentiment in a bloated JSON blob. User asks "what's Apple's price?" and we're fetching earnings transcripts. Now we have 17 focused tools. The model picks from a clear menu better than it navigates a multi-purpose function.

### Post 4
One line in our prompt killed 90% of fabricated financial metrics: "ONLY report financial metrics present in tool results." For a weather app, hallucinations are annoying. For a finance app where people make real decisions with real money, a hallucinated revenue number can cost someone their savings.

### Post 5
We expanded from 12 tests to 363. First full run: 264 passed, 99 failed. Those 99 failures clustered into 8 categories. The fix? Sixteen lines added to the prompt. Four removed. Twenty lines of changes I never would've found by reading outputs manually.

### Post 6 (Closer)
The prompt is the product. We spent a week on a database migration and changed a prompt line in five minutes — the prompt line had 10x the user impact. Treat your prompt like core business logic. It is.

Full deep dive: [link]
