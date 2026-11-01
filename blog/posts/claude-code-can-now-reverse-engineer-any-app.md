---
title: "Claude Code Can Now Reverse Engineer Any App"
date: "2026-10-19"
excerpt: "REA (Reverse Engineer Anything) is a free, open source MCP server that lets Claude Code, Codex or Cursor drive real reverse engineering tools on your own machine. Setup is one command: npx rea-agents setup."
thumbnail: "assets/images/blog-thumbnails/claude-code-can-now-reverse-engineer-any-app.jpg"
youtubeId: "LCVmu9gKljs"
tags:
  - Claude Code
  - AI Tools
  - Open Source
  - Coding
  - AI Agents
---

Claude Code can now reverse engineer the apps on your computer, down to the binary. The tool is called [REA](https://github.com/morluto/rea), short for Reverse Engineer Anything. It is an open source MCP server under the MIT license. Think Ghidra or Hopper, but your coding agent drives it.

## What it does

Reverse engineering normally means you sit in a disassembler for hours: find the function, read the assembly, follow the calls, rename things, repeat. REA gives your agent tools for all of that. The agent asks REA for a function, gets back pseudocode, assembly, strings, symbols and callers, and reasons over the results the way you would.

For native binaries, REA uses an existing Hopper, Ghidra or IDA installation, and setup can install Hopper for you with your approval. Static JavaScript and .NET analysis need no extra engine.

## Ask it one question

The REA site has a good example. The question: why does Windows Calculator give 220 for 200 plus 10 percent?

REA pulls the real assembly from the installed Calculator DLL, and the agent traces the calls to find the rule: after a plus, the percent button takes a percentage of the first number. So 10% of 200 is 20, and 200 + 20 = 220.

One honest note: the site says the assembly is the selected real assembly from the Calculator DLL, but the agent's thoughts and reply on that page "illustrate the findings". It is a demo, not a recorded session.

## Way more than binaries

When I recorded on October 14, the README's "What you can analyze" table listed 23 kinds of targets. It has grown since: today it lists 36. A few of them:

- native binaries, Go and Rust binaries
- JavaScript and Electron apps
- websites and saved network captures
- .NET assemblies
- Android APKs and Flutter apps
- firmware
- SQLite databases and WASM files

The README says it all runs locally.

## Rebuild what it finds

REA does not stop at reading. It helps you rebuild what it finds. In the project's DX-Ball case study, the agent recovers the sound pan function from the old game and rewrites it in C. The project says the rebuilt function passes 3,205 tests against the original x86 function (every position from 0 to 640 at five pan scales) and that its compiled output matches all 63 bytes of the original. These are the project's own numbers, and I have not reproduced them.

## Setup is one command

With Node.js and npm installed (the README lists Node 22.19 or later on 22.x, 24.11 or later on 24.x, or 26 and up), run:

```bash
npx rea-agents setup
```

Approve the plan it shows you, then restart Claude Code, Codex or Cursor. That is it.

## Limits and rules

- **REA is free. Some backends are not.** IDA Pro and Hopper are commercial. Ghidra is free.
- **Only use it on software you own or are allowed to inspect.** Reverse engineering can break license terms, and in some cases the law. Your own apps, open source software, and security research you are authorized to do are fine. Cracking someone else's paid app is not.
- **Treat the star count with care.** The repo had over 232,000 stars when I recorded, which is a very fast climb for a six month old project. The real activity (thousands of commits and large npm download numbers) backs it up, but stars are not a measure of how well it works for you.

If you like the idea of turning an app into something your code can call, I covered a related tool in [turn your iPhone apps into Python libraries](/blog/turn-your-iphone-apps-into-python-libraries.html). And for more ways to extend Claude Code, see [7 ways to steer Claude Code](/blog/master-claude-code-7-ways-to-steer-its-behavior.html).

Sources: [GitHub: morluto/rea](https://github.com/morluto/rea), [rea.tools](https://rea.tools), [DX-Ball case study](https://rea.tools/showcase/dx-ball)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
