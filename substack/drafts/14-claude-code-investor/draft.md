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

# I Asked My Terminal to Download Every NVDA Insider Trade From the Last Year. It Built Me a Spreadsheet in 90 Seconds.

*Claude Code isn't a chatbot. It's a coding agent that lives in your terminal. For investment research, it's the most underrated tool I've ever used.*

---

1am on a Thursday. Three Red Bulls deep. I'm on page 87 of Nvidia's 10-K — 214 pages total — hunting for their actual capex number because some analyst on Twitter swore they were "quietly ramping spend." I've been copy-pasting sections into ChatGPT for twenty minutes, hitting the context window limit, getting summarized gibberish back.

Then I remember: Claude Code is running in another terminal tab.

I type: `Download NVDA's latest 10-K from SEC EDGAR. Extract revenue, operating income, net income, free cash flow, and capex for the last 5 years. Output as a CSV.`

Ninety seconds. Clean spreadsheet on my desktop. Five years of data. Properly formatted. The capex number? Cell F6. The Twitter analyst was off by $2 billion.

That was the moment I realized I'd been using AI wrong for investing. ChatGPT explains concepts beautifully. But for the actual *work* — pulling data, parsing filings, building models, running numbers — you need something that can touch your file system. Write and execute code. Not just talk about analysis but *do it*.

## So What the Hell Is Claude Code?

Most people — even daily Claude users — don't know this exists.

Claude Code is Anthropic's command-line coding agent. Install it with `npm install -g @anthropic-ai/claude-code`, open your terminal, type `claude`, and you're talking to Claude with superpowers.

Unlike browser Claude, Claude Code can:

- **Read and write files** on your computer
- **Execute shell commands** — anything you'd type in a terminal
- **Install packages**, run scripts, build programs
- **Hit APIs and scrape websites** — download files, pull live data
- **Chain complex workflows** — download a PDF, parse it, extract data, build a spreadsheet, analyze the results

The difference between asking a smart friend "how would I analyze this stock?" and having that friend sit down at your computer and *do the analysis*. One gives advice. The other gives you a finished spreadsheet.

The catch: it runs in your terminal. No pretty buttons. Just a blinking cursor and a lot of power.

## Why Investors Should Give a Damn

Most "AI for investing" content is garbage. It's all "ask ChatGPT to analyze Apple stock" — and you get a 500-word essay that sounds confident and says nothing. No numbers. No sources. Nothing you can actually use.

Real investment research isn't asking questions. It's:

- Downloading a 200-page SEC filing and finding the three numbers that matter
- Building a comp table across 8 companies with consistent metrics
- Tracking insider buying patterns over 12 months
- Running a quick backtest on a hypothesis before betting real money
- Pulling earnings call transcripts and comparing guidance quarter-over-quarter

These tasks require *doing things* — fetching files, writing code, manipulating data, producing outputs. A chatbot can talk about them. Claude Code executes them.

## The Workflows That Changed How I Research

Real things I've done in the last month. Not hypothetical.

### Parse a 10-K in Seconds

SEC EDGAR is free and public. It's also a UX nightmare. Finding the right filing, downloading the right format, locating the right section in 200+ pages of legalese — this is why most retail investors just read someone else's summary.

With Claude Code:

```
Go to SEC EDGAR, find CrowdStrike's most recent 10-K filing. 
Download it. Extract: total revenue, cost of revenue, gross margin, 
operating income, net income, total debt, cash and equivalents, 
and free cash flow for the last 3 fiscal years. 
Put it in a clean markdown table.
```

It figures out the EDGAR URL structure, downloads the filing, parses the HTML (10-Ks on EDGAR are HTML, not PDF — this matters), finds the financial statements, and extracts the exact line items. Two minutes.

Clean table I can drop into a note, spreadsheet, or blog post. No squinting at footnotes. No accidentally grabbing a non-GAAP number when I wanted GAAP.

### Build a Comp Table From Scratch

CrowdStrike vs. Palo Alto Networks, Fortinet, Zscaler, SentinelOne. Revenue growth, gross margin, operating margin, FCF margin, EV/revenue, forward P/E.

Old way: five browser tabs, Yahoo Finance for each, manual spreadsheet entry, double-checking every number. Ninety minutes minimum.

Claude Code: I described what I wanted. It pulled financials for all five companies, normalized the metrics, outputted a formatted comparison. It flagged that SentinelOne's operating margin was still deeply negative while the others had turned profitable — a nuance I'd have glossed over by company three when the manual tedium won.

Four minutes.

### Analyze Insider Trading Patterns

The one that got me hooked:

```
Scrape the last 12 months of insider transactions for NVDA 
from OpenInsider. Group by insider name. Calculate total shares 
bought vs sold for each. Flag net buyers. 
Save as CSV with a summary.
```

It wrote a Python script, hit OpenInsider, parsed the HTML, grouped transactions, did the math, saved the CSV. Result: of 47 unique insiders who transacted, only 3 were net buyers. Jensen Huang sold $713 million worth of stock over the period. Yes, it's a 10b5-1 plan — but that data point matters when you're asking whether insiders think it's overvalued.

By hand, this takes an hour. Realistically, I'd never have done it. Who trawls through hundreds of rows on OpenInsider manually?

### Backtest a Dumb Hypothesis

What if you bought SPY every time VIX spiked above 30 and held for 90 days? I've seen this claim on FinTwit a hundred times, always without data.

Claude Code downloaded historical VIX and SPY data, identified every VIX > 30 event since 2010, calculated 90-day forward returns for each entry. Results: average 90-day return after a VIX spike above 30: **+8.2%**. Win rate: **82%**. Random 90-day hold: +3.1%.

The hypothesis held up. Small sample (22 events in 14 years), so not a trading system. But actual numbers instead of vibes. Claude Code wrote the script, ran it, produced the analysis. I just asked.

## Claude Code vs. ChatGPT: The Honest Comparison

I use both daily.

**ChatGPT wins when:**
- Quick explanation needed ("What's a reverse repo?")
- Brainstorming theses ("Bull cases for nuclear energy?")
- Debating a concept
- Fast answer to a simple question

**Claude Code wins when:**
- You need to *produce something* — a spreadsheet, chart, parsed dataset
- The task involves files — downloading, reading, writing, converting
- Multiple steps chained together — pull data, clean, analyze, output
- You need real calculations, not approximations
- The data exceeds a chat window

**The mental model: ChatGPT is a brilliant conversationalist. Claude Code is a brilliant intern.** One gives ideas. The other ships deliverables.

## Getting Started Without Losing Your Mind

If you've never opened a terminal, this will feel intimidating. It's also not as hard as you think.

**What you need:**
1. A Mac, Windows, or Linux computer
2. Node.js installed
3. An Anthropic API key (~$5-10 per heavy research session)
4. Willingness to type commands instead of clicking buttons

**Installation:**
```
npm install -g @anthropic-ai/claude-code
```

**Your first investing command:**
Open terminal, type `claude`, then: *"Download Apple's latest quarterly earnings press release from investor.apple.com and extract the key financial metrics into a table."*

Watch it figure out the URL, download the page, parse the content, produce a clean table. If that doesn't feel like magic, you're jaded.

**Tips I learned the hard way:**
- **Dedicated folder.** I use `~/investing-research/` — keeps outputs organized.
- **Specify formats.** "Save as CSV" or "markdown table" beats "show me the data."
- **Feed errors back.** Script fails? Paste the error. It fixes itself, usually first try.
- **Set context early.** "I'm comparing mid-cap cybersecurity: CRWD, PANW, ZS, S." Saves token burn.

## The Downsides Nobody Mentions

I'm not selling you on Claude Code. I'm telling you the truth.

**The terminal is genuinely scary for non-developers.** No way around it. If "open your terminal" triggers a cold sweat, this is a rough ride.

**It costs real money.** A heavy session — multiple filings, comp tables, backtests — runs $5-15. Cheaper than Bloomberg ($2,000/month). Not cheaper than ChatGPT ($20/month flat). Intensive use adds up.

**Code can hallucinate.** Claude Code writes Python on the fly. Usually works. Sometimes it *looks* like it works but produces subtly wrong numbers. Sanity-check financial outputs — a misplaced decimal is a real problem.

**No memory between sessions.** Fresh start every time. It doesn't remember yesterday's comp table. Point it at saved files or re-establish context.

**Context limits on huge docs.** A 50,000-word 10-K still requires finessing, even though Claude Code reads files in chunks.

Real friction. Not dealbreakers. But anyone claiming it "just works" for non-developers is lying.

## Or Just Skip the Terminal

I'm a developer. I live in the terminal. Claude Code feels natural to me.

Most investors aren't developers. Shouldn't have to become one for AI-powered research.

That's why I built [Bloom](https://investwithbloom.com). Same core idea: AI that doesn't just talk about stocks but does the work. Pulls real financial data, runs real analysis, produces structured reports with bull/bear cases, insider activity, valuation context. The same output Claude Code gives me — through an interface that doesn't require knowing what a terminal is.

If you read this and thought "incredible, but I'm never opening a terminal" — Bloom is the version built for you.

## The Grunt Work Era Is Ending

Every earnings season, millions of investors still research stocks the 2015 way. Copy-pasting from Yahoo Finance. Scrolling through 10-K filings manually. Building spreadsheets cell by cell.

The tools to automate 80% of that work exist *right now*. Claude Code made me realize the gap between "AI that chats about investing" and "AI that does investing work" is massive. Most people are on the wrong side.

The learning curve is real. The cost is real. But an investor who researches 20 stocks in the time it takes to manually do 2 is going to find better opportunities. Full stop.

The grunt work era is ending. The question is whether you notice before everyone else does.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app that does the research work so you don't have to. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
