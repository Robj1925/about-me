---
title: "Claude Code Lost to This Free Open-Source Agent"
date: "2026-10-13"
excerpt: "Ten coding agents ran the same model on the same 113 real GitHub issues. CodeAF solved 62, Codex solved 51, and Claude Code solved 16, and CodeAF paid the least per fix."
thumbnail: "assets/images/blog-thumbnails/claude-code-lost-to-this-free-open-source-agent.jpg"
youtubeId: "qougS0C3IH8"
tags:
  - AI Agents
  - Open Source
  - Claude Code
  - Coding
  - Benchmarks
---

Claude Code lost a coding benchmark to an open source agent, and both were running the exact same model. The agent is CodeAF, from AgentField. The result says a lot about how much the harness matters, but the fine print matters too, so here is both.

## What CodeAF is

CodeAF is a coding harness built for open models: DeepSeek, Qwen, GLM, Kimi, MiniMax, Ollama and any OpenAI-compatible endpoint. It is written in Go as one small binary, licensed Apache 2.0, and marked "early preview" in its own README. Think of it as Claude Code, but tuned to get the most out of cheap open models.

## Same model, different harness

AgentField ran ten coding harnesses on the full DeepSWE set: 113 real GitHub issues, one attempt each, all on `deepseek-v4-flash-0731` through OpenRouter. CodeAF's coding agent (called senior-dev) took first place.

| Harness | Solved (of 113) | Cost per solved issue |
| --- | --- | --- |
| CodeAF (senior-dev) | 62 (54.9%) | 1x (39.9 cents) |
| mini-swe-agent | 56 (49.6%) | 1.9x |
| Codex | 51 (45.1%) | 2.1x |
| Claude Code | 16 (14.2%) | 3.4x |

So CodeAF solved nearly four times as many issues as Claude Code on the same model, and paid less for each one it solved. Codex paid 2.1 times more per fix and Claude Code paid 3.4 times more.

## One message, three tasks

The workflow is the other half of the pitch. You talk to it like a teammate. Name three bugs in one message and each becomes its own task, on its own branch, in its own private copy of your repo. One window shows every project and task, so you step in only where your judgment is needed.

Each task gets three model seats: a worker that does the work (most of the bill), a planner, and a checker that reviews finished work before it lands. CodeAF picks a model for each seat, with a per-task spending limit of $5 unless you change it. In the official demo, 2.6 million tokens of work cost 17 cents.

## How to try it

```bash
curl -fsSL https://agentfield.ai/get/codeaf | bash
codeaf
```

On first start it connects OpenRouter in your browser or takes an API key. DeepSeek, GLM, Kimi, MiniMax and Qwen take keys, and Ollama needs none. Note that anonymous usage counts and a model pool are on by default; `CODEAF_TELEMETRY=off` stops the usage counts and stops the pool from sending anything.

## The fine print

Read the benchmark's own limits before you switch:

- **These are AgentField's numbers**, run by the team that built the winner.
- **One seed per harness.** The docs say 62 against mini-swe-agent's 56 is not a statistically resolved difference.
- **Sampling differed.** The other nine harnesses sent temperature 1.0 and top-p 0.95; senior-dev sent neither.
- **Claude Code was on a foreign model.** It ran DeepSeek through a third-party endpoint, pinned to version 2.1.267. Version 2.1.268 came out before most tasks started and includes a fix for HTTP 400 errors on third-party Anthropic-compatible endpoints. Whether that would change the score is not established.

That last point matters. This test does not say Claude Code is a bad agent. It says Claude Code is built around Claude, and on DeepSeek it did poorly.

## My take

The real lesson is that the harness can matter as much as the model. If you run open models to save money, CodeAF is worth a test on your own repo, especially for parallel bug fixes. If you run Claude Code on Claude, this benchmark does not tell you much about your setup. For more on how open models are closing the gap, see my post on [Kimi K3 beating Claude at frontend code](/blog/kimi-k3-open-source-model-beats-claude-frontend-code.html).

Sources: [CodeAF on GitHub](https://github.com/Agent-Field/CodeAF) and the [DeepSWE harness comparison](https://github.com/Agent-Field/CodeAF/tree/dev/docs/benchmarks/deepswe)
