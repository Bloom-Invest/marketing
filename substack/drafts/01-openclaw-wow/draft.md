# I Sent 514 Messages to My AI in 5 Days. I Never Opened My Laptop.

*OpenClaw hit 201,000 GitHub stars in 84 days. The tech isn't why.*

---

11:47pm, Wednesday. I'm in bed, half-asleep. Phone buzzes. Sentry alert — production bug on Bloom.

Old me: sigh, throw off covers, walk to desk, open laptop, launch terminal, SSH in, track down the error, push a fix, watch the deploy. Twenty minutes minimum. Probably forty.

Instead I opened Signal.

"Kit, check the latest Sentry error on Bloom. What's the stacktrace?"

Thirty seconds later, my AI assistant — running on my Mac in the other room — pulled the error, read the trace, told me: nil pointer in the bulk sync handler. I typed back: "patch it and deploy to staging." Ninety seconds after that, staging was green.

I never got out of bed.

That moment broke something in my brain. Not because the AI was smart — ChatGPT can analyze a stacktrace fine. Because I *texted* my AI from bed and it *did something real on my machine*. No laptop. No terminal. No ceremony.

Just a message.

## What the Hell Is OpenClaw?

OpenClaw is an open-source AI assistant that runs on your machine and connects through the messaging apps you already use — Signal, WhatsApp, Telegram, Discord.

Think of it as Claude Code you can text.

Your phone sends a message → the OpenClaw daemon on your Mac picks it up → it runs tools, executes commands, hits APIs, reads your files, checks your calendar → texts you back. No new app. No web dashboard. You text it like a friend, and it does things on your computer.

The project went live on GitHub on November 24, 2025. Day 1: 5,000 stars. Day 3: 60,000+. As of February 16, 2026: 201,000+ — the fastest-growing AI project in GitHub history.

On February 14th, Peter Steinberger — the solo developer who built the whole thing — announced he's joining OpenAI. An acqui-hire, but OpenClaw moves to an open-source foundation. The project stays free. The community keeps building.

Here's what nobody's writing about: the reason OpenClaw exploded isn't function calling or tool use or code execution. Every AI lab has that. The reason is *where* you use it.

## 514 Messages in Five Days

I've used ChatGPT, Claude, Cursor, Windsurf, Codex, Aider — every one impressive in its own way.

None of them made me send 514 messages in five days.

That's my actual count since setting up Kit on February 11th. Roughly 100 messages a day. To an AI. On the same app I use to text my friends.

The friction disappeared.

ChatGPT is an oracle in a box. Smart as hell, but it can't touch my files or run my code. I ask it questions and then *I* go do the work.

Claude Code closes the gap — it runs locally, writes and executes real code. But it lives in my terminal. Close the laptop lid, Claude Code stops existing.

Cursor is incredible for coding but it's an IDE. It doesn't know about my calendar, my emails, my deploy pipeline, my Sentry errors. It's a coworker who only exists inside one project.

OpenClaw sits in a different quadrant. Same models — I run it with Claude. Same capabilities. But the interface is Signal.

Everything changes.

## Why This Works

You already check Signal or WhatsApp dozens of times a day. You don't install anything new. You don't switch contexts.

You just text.

**It's async.** Send a task, put your phone down, get a push notification when it's done. Your AI works in the background while you live your life.

**Your AI can reach *you*.** Not just respond when prompted — proactively alert you. Calendar reminders, error notifications, morning briefings. That's the difference between a tool you visit and an assistant that works for you.

**It goes everywhere.** Walking. Commuting. In bed at 11:47pm with a production bug.

## What My Last Five Days Looked Like

**Deploying from my couch.** "Deploy the latest to staging" — Kit runs the script, watches the logs, texts me when it's live. Something breaks? It tells me what and asks if I want to roll back.

**Triaging while walking.** "What's the top unresolved Sentry issue?" — typed heading to get coffee. Kit summarizes the stacktrace, suggests a fix. I approve the patch from my phone.

**Code review without GitHub.** "Summarize the open PRs on Bloom" — Kit reads the diffs, flags risky changes. I comment without opening a browser.

**Writing by voice.** I dictate ideas via Signal voice messages. Kit transcribes and drafts outlines. Half this article started as voice notes sent while walking.

None of these are "AI tasks." They're *my* tasks — things I'd do anyway, at my desk. OpenClaw makes them textable. And once everything is textable, the AI stops feeling like a separate tool. It becomes how you work.

That's why 514 messages doesn't feel extreme. It felt like texting a very competent coworker.

## Open-Source Isn't a Feature — It's a Requirement

Sit with this: your AI assistant, if it's any good, will eventually see *everything*. Your files. Your code. Your calendar. Your deployment credentials. Your database credentials.

More intimate than your phone. More intimate than your browser history.

Do you want that on someone else's server? Under someone else's terms of service? Where a policy change could change what happens to your data overnight?

OpenClaw runs on your machine. Your data stays on your machine. You pick the model. You control the tools. You can read every line of code that touches your data.

I wouldn't have sent 514 messages to a closed-source assistant I can't audit. I know what Kit has access to because I configured every permission myself.

## The Next Leap Isn't Smarter Models

Everybody in AI is chasing benchmarks. Bigger context windows. Better reasoning scores. That stuff matters.

But the thing that changed how I work wasn't a model upgrade. It was a UX decision.

Someone looked at function calling, tool use, code execution, agentic reasoning and asked: "What if you could access all of this from a text message?"

201,000 stars in 84 days. Not because the technology was new. Because the interface was right.

I keep coming back to that night. 11:47pm, Sentry alert. The old workflow: twenty minutes and a trip to my desk. The new workflow: ninety seconds and I never left my pillow. Same model, same fix — but I wouldn't have done it from bed with a terminal. I would've groaned, told myself I'd deal with it in the morning, and hoped nothing else broke.

The intent-to-action gap collapsed to almost nothing.

The next big leap in AI isn't going to come from a model that scores 3% higher on a benchmark. It's going to come from putting existing capabilities where people actually live.

OpenClaw is [free and open-source on GitHub](https://github.com/openclaw/openclaw). Set it up. Send your first message.

The best AI assistant isn't the smartest one. It's the one you actually text back.

---

*Eric Xiao builds [Bloom](https://investwithbloom.com), an AI-powered investing app. He writes about AI, product, and technology at [blog.promptpm.ai](https://blog.promptpm.ai). Find him on X [@exiao3](https://x.com/exiao3).*
