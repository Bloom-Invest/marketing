# Thread: How to Research Stocks with Claude Code
## Source: /Users/testuser/marketing/substack/drafts/14-claude-code-investor/draft.md

### Post 1 (Hook)
1am. Page 87 of Nvidia's 214-page 10-K. Copy-pasting into ChatGPT, hitting context limits, getting summarized mush.

Switched to Claude Code. One command. 90 seconds later: clean CSV on my desktop. Five years of financials. The analyst on Twitter was off by $2 billion.

### Post 2
Claude Code isn't a chatbot. It's a coding agent that lives in your terminal.

It reads and writes files. Executes shell commands. Scrapes websites. Chains multi-step workflows.

The difference: asking a smart friend how to analyze a stock vs. that friend sitting at your computer and handing you a finished spreadsheet.

### Post 3
I asked it to scrape 12 months of NVDA insider transactions from OpenInsider. Group by name. Calculate net buying vs selling.

Result: of 47 insiders who transacted, only 3 were net buyers. Jensen Huang sold $713M worth.

Would I trawl through hundreds of rows manually? No. Nobody does. That's exactly why the data is an edge.

### Post 4
FinTwit claim: "Buy SPY every time VIX spikes above 30, hold 90 days."

I've seen this stated as fact a hundred times. Never with data.

Claude Code pulled historical VIX/SPY data. Tested every VIX > 30 event since 2010.

Average 90-day return: +8.2%. Win rate: 82%. Random 90-day hold: +3.1%.

22 events in 14 years. Small sample. But now I have numbers instead of someone's Twitter conviction.

### Post 5
The honest downsides:

It costs $5-15 per heavy session. Code can look right but have wrong numbers — a misplaced decimal is a real problem with real money. No memory between sessions. The terminal scares people.

ChatGPT is a brilliant conversationalist. Claude Code is a brilliant research assistant who does the work. Different tools.

### Post 6 (Closer)
Every earnings season, millions of investors still research stocks the 2015 way. Copy-pasting from Yahoo Finance. Building spreadsheets cell by cell.

The tools to automate 80% of that exist right now. Most people haven't noticed. That gap is where the edge lives.

Full guide with setup + workflows: https://blog.promptpm.ai
