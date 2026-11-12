---
title: "Stop Paying API Fees for Simple Local AI Agents"
date: "2026-11-05"
excerpt: "Liquid AI's LFM3 1.7B fits in about 1 GB and runs on your Mac with one Ollama command. Here is what it does well and where its limits are."
thumbnail: "assets/images/blog-thumbnails/stop-paying-api-fees-for-simple-local-ai-agents.jpg"
youtubeId: "7cMz96MKuvY"
tags:
  - Local AI
  - AI Models
  - Open Source
  - AI Agents
  - macOS
---

Liquid AI's new model fits in about 1 GB and runs on your Mac. If you want an AI agent on your own laptop with no per token bill, size is the problem, and this model is small enough to solve it for simple jobs.

## What it is

The model is called LFM3 1.7B. Liquid AI released it on October 27, 2026, with open weights on Hugging Face. The 4 bit GGUF file (Q4_K_M) is 1.1 GB, and Liquid says the text model fits in about 1 GB at 4 bit precision.

## One command on a Mac

The model card gives one command for a Mac:

```bash
ollama run lfm3
```

You need Ollama v0.40.12 or newer. The command downloads the model and you chat with it in your terminal. No API key.

## What Liquid claims

- **Smaller and better.** Liquid says LFM3 beats its older LFM2.5 2.6B while using 35% fewer parameters.
- **Long context.** It has a 256K token context window.
- **Built for agent tools.** It was trained for agent frameworks like OpenClaw and Hermes Agent.

The best use is local tool calls and structured outputs. Think of it like a pocket calculator for agents: small, fast, and it lives on your machine.

## The limits

- **The benchmarks are Liquid's own.** Nobody outside Liquid produced those numbers.
- **Not for agentic coding.** The model card says it is not recommended for agentic coding or complex multi step reasoning, due to its small size.
- **Check the license.** It ships under the LFM Open License, not MIT or Apache, so read it before you ship a product on it.

For tool calls on your own machine, that is a fair trade. If you want to run agents with no API fees at all, also see [how to run Claude Code without Claude](/blog/run-claude-code-without-claude-free-setup-guide.html), and for a bigger local option, [Recursive Flint, an almost 40B coding model with only 2.5B active](/blog/recursive-flint-almost-40b-coding-model-only-2-5b-active.html).

Sources: [Liquid AI blog: LFM3](https://www.liquid.ai/blog/lfm3), [LFM3 1.7B on Hugging Face](https://huggingface.co/LiquidAI/LFM3-1.7B)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
