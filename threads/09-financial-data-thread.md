# Thread: Financial Data Is Broken
## Source: /Users/testuser/marketing/substack/drafts/09-financial-data/draft.md

### Post 1 (Hook)
Last Saturday I sat down to research one stock. 45 minutes later: 17 browser tabs open, 7 data sources, and I still couldn't tell you whether to buy it.

40 minutes collecting data. 5 minutes actually thinking.

### Post 2
Every source is broken in its own way.

Yahoo Finance returns earnings data two quarters old with zero warning. Alpha Vantage once gave me empty fields for a Japanese stock — with a 200 OK status code. SEC EDGAR filings are in XBRL, which is basically XML's annoying cousin.

### Post 3
Bloomberg Terminal has everything in one place. $24,000/year. Per seat.

As a retail investor, you can get 95% of what Bloomberg offers for under $100/month. That last 5% is not worth $23,900.

### Post 4
The stuff that quietly breaks your analysis:

A stock does a 4:1 split. Price data adjusts, historical earnings don't. Your P/E is suddenly off by 4x. Shipped that exact bug. Subtle, easy to miss, makes your entire analysis worthless.

### Post 5
A hedge fund hires a data engineering team to build ETL pipelines. A retail investor opens 17 browser tabs and hopes they don't transpose a number.

The data exists. All of it. Probably free. The gap is assembly — and that's exactly the part worth automating.

Full breakdown on how AI agents solve the data plumbing problem: https://investwithbloom.com
