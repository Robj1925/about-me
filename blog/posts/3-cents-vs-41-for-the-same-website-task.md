---
title: "3 Cents vs $41 for the Exact Same Website Task"
date: "2026-11-06"
excerpt: "In its own onboarding race, Pomerado finished a website job for 3 cents while Codex Computer Use spent $41.01. The trick is to explore a site once and turn the task into an MCP tool."
thumbnail: "assets/images/blog-thumbnails/3-cents-vs-41-for-the-same-website-task.jpg"
youtubeId: "cjD32lp0yb4"
tags:
  - AI Agents
  - Open Source
  - Claude Code
  - Automation
  - AI Tools
---

Pomerado did a website job for 3 cents. Codex Computer Use spent $41.01 on the same job. If your agent does website tasks by clicking, you pay for it to think through every page, on every run.

## The race

The job was to onboard 2 new employees across HR, IT, courses and library systems. Pomerado finished in 8 minutes 16 seconds. Codex Computer Use took 21 minutes 22 seconds. The official race card puts the Pomerado run at $0.028 against $41.01.

## How it works

Pomerado explores a website once and turns your task into code. That code becomes an MCP tool, so your agent calls it in seconds with no clicking.

1. Your agent asks Pomerado to build a tool for a website and describes the task.
2. Pomerado explores the site once in a real browser and writes the steps as code.
3. That code becomes an MCP tool. Your agent calls it again and again, with no page rereads.

Think of it like recording a macro once, then calling it as an API forever.

## Open source, from YC

Pomerado is open source under the MIT license, with 1,466 stars on GitHub when the video was made. It comes from a Y Combinator F26 startup.

## The catches

- **It is the vendor's race.** The onboarding race is Pomerado's own benchmark, and the benchmark chart covers 30 tasks in 25 business apps.
- **You need an OpenAI key.** The open source core needs an OpenAI API key to build tools.
- **Your own tools need an account.** Building your own tools needs a free Pomerado cloud account, which allows 10 new integrations a month.

## Try it with no key

Without a key, you can add the keyless server to Claude Code and run public read only tools, like a flight search:

```bash
claude mcp add --transport http pomerado 'https://mcp.pomerado.ai/mcp/keyless'
```

The docs example then asks for nonstop flights from SFO to JFK next Friday on Google Flights.

The builder takeaway: anything your agent does in a browser more than once is a candidate for a deterministic tool. For the other approach, where the agent keeps a real browser, see [Vercel gave AI agents their own browser in the cloud](/blog/vercel-remote-agent-browser-cloud-browser-for-ai-agents.html) and [ChatGPT can now work across your Chrome tabs](/blog/chatgpt-can-now-work-across-your-chrome-tabs.html).

Sources: [Pomerado on GitHub](https://github.com/Pomerado/pomerado), [pomerado.ai](https://pomerado.ai), [Keyless quickstart](https://docs.pomerado.ai/quickstart/try-without-a-key)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
