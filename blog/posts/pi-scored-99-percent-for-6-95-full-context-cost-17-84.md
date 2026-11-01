---
title: "Pi Scored 99% for $6.95. Full Context Cost $17.84 (MemoryTax)"
date: "2026-10-31"
excerpt: "The MemoryTax paper found that Pi, running Claude Opus 5.5 and searching raw history with its own tools, scored 99% on a memory test for $6.95. Building Mem0's memory alone cost $25.88."
thumbnail: "assets/images/blog-thumbnails/pi-scored-99-percent-for-6-95-full-context-cost-17-84.jpg"
youtubeId: "otQudr_iDKc"
tags:
  - AI Agents
  - Agent Memory
  - Claude Opus
  - AI Research
  - Context Window
---

Pi, running Claude Opus 5.5, scored 99% on a memory test for $6.95. The same model reading the full history scored 95% for $17.84. That is from MemoryTax, a new arXiv paper by Zedong Peng, and it asks a good question: do strong models still need a memory layer like Mem0, or can an agent just search the raw history?

## The test

The paper uses one LoCoMo conversation: 419 turns and 152 questions about it. It compares seven setups:

- four memory methods: full context, BM25, Mem0 and Zep
- three agents: Pi, Codex and Claude Code

Each setup ran with three models: GPT-4o-mini, GPT-6 Luna and Claude Opus 5.5.

## The memory tax

With Claude Opus 5.5, Mem0 tied full context at 95%. But building Mem0's memory alone cost $25.88. That is more than the whole full context run at $17.84, before Mem0 even answers a question.

Mem0 only beat full context with the weak model, GPT-4o-mini: 78% vs 74%. So the memory layer helped the model that could not handle the raw history well, and it cost extra for the model that could.

## Pi just searched the file

[Pi](https://github.com/earendil-works/pi) keeps the raw history as one file and searches it with its own tools, the way a coding agent searches a repo. With Claude Opus 5.5 it topped the chart at 99% for $6.95. The paper says its one miss was a wrong LoCoMo answer key.

## The catch

- **Pi saw more than the memory methods.** The agents could read photo captions that the memory methods never got. On the 88 questions without photo evidence, Pi scored 100% and full context scored 99%. Still ahead, but much closer.
- **It is a small test.** One conversation, one run per setup, and a GPT-4o-mini judge.
- **The history fit in context.** Every model could hold the whole conversation. With a history that does not fit, the result could be different.

So this does not prove memory layers are always worse. It shows that on this test, a strong model with plain search over raw logs was cheaper and at least as accurate.

## What I take from it

Test plain search before you pay for memory. If your agent runs on a strong model and your history is a few hundred turns, a file and a search tool may be all you need. Add a memory layer when you can measure that it helps.

For why a lean context matters, read [escaping the dumb zone](/blog/escaping-the-dumb-zone.html). And for another case where a simple open source agent beat the big names, see [Claude Code lost to this free open source agent](/blog/claude-code-lost-to-this-free-open-source-agent.html).

Sources: [MemoryTax on arXiv](https://arxiv.org/abs/2610.29823), [Interactive version](https://zedongpeng.com/memorytax/), [Pi on GitHub](https://github.com/earendil-works/pi), [Mem0 on GitHub](https://github.com/mem0ai/mem0)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
