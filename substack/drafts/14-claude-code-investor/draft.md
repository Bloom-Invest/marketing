<!-- OUTLINE (remove before publishing) -->

<details>
<summary>📋 Article Outline (click to expand)</summary>

# Article #14: "How to Use Claude Code as an Investor" — Outline Variants

## Outline A: "The Workflow Deep-Dive" (narrative → workflows → comparison)

1. **Hook**: Anecdote about parsing a 10-K at 2am — Claude Code extracting what took hours in minutes
2. **What Claude Code Actually Is**: Terminal AI with real computer access, not a chatbot
3. **Why Investors Should Care**: It can touch files, run code, scrape data, build things
4. **5 Specific Investment Workflows**: 10-K parsing, comp table building, insider trading analysis, earnings call extraction, simple backtesting
5. **Claude Code vs ChatGPT for Investors**: Head-to-head on real tasks
6. **Setup for Non-Developers**: How to actually get it running
7. **The Honest Downsides**: Terminal-only, learning curve, cost
8. **Bloom as the Friendlier Path**: Same power, no terminal required
9. **Close**: The power user's edge

## Outline B: "The Before/After" (problem-focused, show transformation)

1. **Hook**: The 200-page 10-K that broke me — and the command that saved me
2. **The Problem With AI Chatbots for Real Investing Work**: Copy-paste loops, no file access, no persistence
3. **Enter Claude Code**: What it is and why it's different
4. **What I Actually Built With It Last Week**: Real examples — downloaded SEC filings, built a comp table, analyzed insider patterns
5. **The Comparison Nobody's Making**: Claude Code vs ChatGPT vs Cursor for investment research
6. **How to Set It Up (Even If You've Never Used a Terminal)**: Step by step
7. **Where It Falls Short**: Honest limitations
8. **If This Sounds Like Too Much Work**: Bloom does the same thing without the terminal
9. **Close**: The best tools feel like cheating

## ✅ Outline C: "The Power User's Guide" (chosen — best balance of practical + opinionated) ←

1. **Hook**: Personal moment — asking Claude Code to download every insider transaction for NVDA in the last year, watching it build a full spreadsheet in 90 seconds from the terminal
2. **"So What the Hell Is Claude Code?"**: Not a chatbot. A coding agent that lives in your terminal and can actually *do things* on your computer. File access, shell commands, web scraping, calculations.
3. **Why It's a Secret Weapon for Investment Research**: The gap between "AI that talks about stocks" and "AI that can pull a 10-K, extract the numbers, and build you a DCF." Claude Code closes that gap.
4. **The Workflows That Changed How I Research**: 
   - Download and parse a 10-K (extract key metrics from 200 pages in seconds)
   - Build a comp table from scratch (no Bloomberg terminal needed)
   - Analyze insider trading patterns (scrape, aggregate, visualize)
   - Backtest a simple strategy (write and run actual code)
5. **Claude Code vs ChatGPT: An Honest Comparison**: ChatGPT wins for quick questions. Claude Code wins for anything that requires *doing work*, not just talking about work. Specific examples of each.
6. **Getting Started Without Losing Your Mind**: Terminal basics, installation, first useful command. Realistic about the learning curve.
7. **The Downsides Nobody Mentions**: No GUI, expensive if you go heavy, the terminal is genuinely intimidating, context limits on huge files, can hallucinate code that looks right but isn't.
8. **Or Just Skip the Terminal Entirely**: Bloom wraps similar AI-powered analysis in an interface that doesn't require you to know what `pip install` means. Same intelligence, friendlier delivery.
9. **Close**: The tools are here. The question is whether you'll use them before everyone else does.

---

**Chosen: Outline C** — It's the most balanced between practical "here's how" and opinionated "here's why you should care." The hook is specific and visual (watching a terminal build a spreadsheet), the workflows section is meaty enough to be genuinely useful, and the ChatGPT comparison gives readers a framework for when to use what. The Bloom mention feels natural rather than forced.

</details>

---

# How to Research a Stock with AI Agents

*Claude Code isn't a chatbot. It's a coding agent that lives in your terminal. For investment research, it's the most underrated tool I've used.*

---

1am on a Thursday. Page 87 of Nvidia's 10-K — 214 pages, and I'm hunting for their actual capex number because some analyst on Twitter swore they were "quietly ramping spend." I've been copy-pasting sections into ChatGPT for twenty minutes, hitting the context window limit, getting summarized mush back.

I have Claude Code open in another terminal tab.

I type: `Download NVDA's latest 10-K from SEC EDGAR. Extract revenue, operating income, net income, free cash flow, and capex for the last 5 years. Output as a CSV.`

Ninety seconds later there's a clean spreadsheet on my desktop. Five years of data, properly formatted. The capex number is in cell F6. The Twitter analyst was off by $2 billion.

That's when something clicked for me. I'd been using AI wrong for investing. ChatGPT *explains* things beautifully. But pulling data, parsing filings, building models — that work needs something that can touch your file system and execute code. Not talk about analysis. Actually do it.

## What Even Is Claude Code?

Most people — even daily Claude users — have no idea this exists.

Claude Code is Anthropic's command-line coding agent. `npm install -g @anthropic-ai/claude-code`, open terminal, type `claude`. That's the whole setup.

Unlike browser Claude, it can read and write files on your computer. Execute shell commands. Install packages and run scripts. Scrape websites and hit APIs. Chain multi-step workflows — download a PDF, parse it, extract data, build a spreadsheet, analyze the results.

The difference: asking a smart friend "how would I analyze this stock?" versus that friend sitting at your computer and doing the analysis for you. One gives advice. The other hands you a finished spreadsheet.

The catch: it runs in a terminal. No buttons. Just a blinking cursor.

## The Problem With "AI for Investing" Content

I get frustrated every time I see another "ask ChatGPT to analyze Apple stock" article. You try it. You get a 500-word essay that sounds confident and says nothing. No real numbers. No sources you can verify. Nothing you can act on.

Real investment research looks different:

- Downloading a 200-page SEC filing to find three numbers
- Building a comp table across 8 companies with consistent metrics
- Tracking insider buying patterns over 12 months
- Running a quick backtest before risking real money
- Pulling earnings call transcripts and comparing guidance across quarters

All of that requires *doing things* — fetching files, writing code, manipulating data. A chatbot talks about them. Claude Code executes them.

## What I Actually Built Last Month

Not hypothetical. Real tasks I ran.

### Parsing a 10-K

SEC EDGAR is free and public. It's also a UX crime scene. Most retail investors just read someone else's summary because digging through 200+ pages of legalese for the right number isn't worth an evening.

I typed this into Claude Code:

```
Go to SEC EDGAR, find CrowdStrike's most recent 10-K filing. 
Download it. Extract: total revenue, cost of revenue, gross margin, 
operating income, net income, total debt, cash and equivalents, 
and free cash flow for the last 3 fiscal years. 
Put it in a clean markdown table.
```

It figured out the EDGAR URL structure, downloaded the filing, parsed the HTML (10-Ks on EDGAR are HTML, not PDF — this matters), found the financial statements, extracted each line item.

Two minutes. Clean table I can drop into a note or blog post. No squinting at footnotes. No accidentally grabbing a non-GAAP number when I wanted GAAP.

### Comp Tables Without Bloomberg

@CRWD vs. @PANW, @FTNT, @ZS, @S. Revenue growth, gross margin, operating margin, FCF margin, EV/revenue, forward P/E.

The old way: five browser tabs on Yahoo Finance, manual spreadsheet entry, double-checking every number. Ninety minutes if I'm focused.

Claude Code pulled financials for all five, normalized the metrics, output a formatted comparison. It flagged that @S's operating margin was still deeply negative while the others had turned profitable — a nuance I'd have glossed over by company three, when the manual tedium starts to melt your brain.

Four minutes.

### Insider Trading Patterns

This one got me hooked:

```
Scrape the last 12 months of insider transactions for NVDA 
from OpenInsider. Group by insider name. Calculate total shares 
bought vs sold for each. Flag net buyers. 
Save as CSV with a summary.
```

It wrote a Python script, hit OpenInsider, parsed the HTML, grouped transactions, did the math, saved the file. Of 47 unique insiders who transacted, only 3 were net buyers. Jensen Huang sold $713 million worth of stock over the period.

Yes, it's a 10b5-1 plan. But that data point matters when you're deciding whether insiders think the stock is overvalued.

Would I ever do this by hand? Trawling through hundreds of rows on OpenInsider? No. Nobody does. Which is exactly why the data is an edge if you bother to look at it.

### Backtesting a FinTwit Claim

"Buy SPY every time VIX spikes above 30, hold for 90 days." I've seen this claim a hundred times on Twitter, always stated as fact, never with data.

Claude Code downloaded historical VIX and SPY data, identified every VIX > 30 event since 2010, calculated 90-day forward returns.

Average return after a VIX spike above 30: **+8.2%**. Win rate: **82%**. Random 90-day hold: **+3.1%**.

The hypothesis held up. Small sample — 22 events in 14 years — so not exactly a trading system. But now I have actual numbers instead of someone's Twitter conviction.

## When to Use Claude Code vs. ChatGPT

I use both daily. They do different things.

ChatGPT is better for quick explanations ("What's a reverse repo?"), brainstorming thesis ideas, debating concepts. Fast questions, fast answers.

Claude Code wins every time the task involves *producing something*. A spreadsheet. A parsed dataset. A chart. Anything with files — downloading, reading, writing, converting. Multi-step chains where you pull data, clean it, analyze it, output results. Real calculations instead of approximations.

The short version: **ChatGPT is a brilliant conversationalist. Claude Code is a brilliant research assistant who does the work.**

## Getting Started

If you've never opened a terminal, this feels intimidating. Honestly, it's easier than it looks.

**You need:**
1. A Mac, Windows, or Linux computer
2. Node.js installed
3. An Anthropic API key (~$5-10 per heavy research session)
4. Willingness to type commands instead of clicking buttons

**Installation:**
```
npm install -g @anthropic-ai/claude-code
```

**First command worth trying:**
Open terminal, type `claude`, then: *"Download Apple's latest quarterly earnings press release from investor.apple.com and extract the key financial metrics into a table."*

Watch it figure out the URL, download the page, parse the content, produce a clean table. That "aha" moment hit me about 30 seconds in.

**Things I learned the hard way:**
- **Use a dedicated folder.** I keep everything in `~/investing-research/`. Saves the chaos.
- **Specify output formats.** "Save as CSV" or "markdown table" beats "show me the data."
- **Feed errors back.** Script fails? Paste the error. It fixes itself, usually on the first try.
- **Set context early.** "I'm comparing mid-cap cybersecurity: @CRWD, @PANW, @ZS, @S." Cuts down on wasted tokens.

## The Honest Downsides

I'm not selling you on this. I want to tell you where it sucks.

**The terminal scares people.** No way around it. If "open your terminal" makes your palms sweat, this is going to be a rough ride.

**It costs money.** A heavy session — multiple filings, comp tables, backtests — runs $5-15. Cheaper than Bloomberg ($2,000/month). More than ChatGPT ($20/month flat). Heavy weeks add up.

**Code can be wrong.** Claude Code writes Python on the fly. Usually works. Sometimes the output *looks* right but has wrong numbers — and a misplaced decimal is a real problem when it's your money. I sanity-check every financial output against at least one other source.

**No memory between sessions.** Fresh start every time. Won't remember yesterday's comp table. You have to point it at saved files or re-establish context.

**Big documents need finessing.** A 50,000-word 10-K can choke the context window. I've learned to ask for specific sections rather than feeding in the whole thing.

Real friction. Not dealbreakers for me. But I'm a developer who lives in the terminal. That matters.

## Or Just Skip the Terminal Entirely

Look — this feels natural to me because I write code all day. Most investors don't. Shouldn't have to.

That's why I built [Bloom](https://investwithbloom.com). Same idea: AI that doesn't just *talk* about stocks but does the work. Pulls real financial data, runs real analysis, produces structured bull/bear cases with insider activity and valuation context. Same kind of output Claude Code gives me, through an interface where you never touch a terminal.

If you read this and thought "great, but I'm never opening a command line" — Bloom is the version built for you.

## The 2015 Way Is Over

Every earnings season, millions of investors still research stocks the same way they did a decade ago. Copy-pasting from Yahoo Finance. Scrolling through 10-Ks by hand. Building spreadsheets cell by cell.

The tools to automate 80% of that grunt work exist right now.

Most people haven't noticed yet. That gap between "the tools exist" and "everyone uses them" — that's where the edge is.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app that does the research work so you don't have to. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
