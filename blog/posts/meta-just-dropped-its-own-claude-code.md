---
title: "Meta Just Dropped Its Own Claude Code"
date: "2026-09-15"
excerpt: "Meta released Muse Code, a terminal coding agent co-trained with its new Muse Spark 1.2 model. It scores 82.9% on Terminal-Bench 2.1 and ran a GPU kernel job for up to 24 hours straight."
thumbnail: "assets/images/blog-thumbnails/meta-just-dropped-its-own-claude-code.jpg"
youtubeId: "-H1ocjpjQb0"
tags:
  - Meta
  - AI Coding Agents
  - Muse Spark
  - Benchmarks
  - News
---

Meta just released Muse Code, a terminal coding agent built to work on your code for hours without a human steering it. It is Meta's answer to Claude Code, and it runs on Muse Spark 1.2, a new coding-focused model that Meta co-trained with the agent so the two work as one unit.

Muse Code is in beta, and the install is one line on macOS or Linux:

`curl -fsSL https://dev.meta.ai/install.sh | bash`

## Background agents that stay alive

Most coding agents spawn a helper for one task and then throw it away. Muse Code keeps a set of async background agents running for the whole session. They do the next steps on their own and decide when to report back to the main agent. Meta says this persistence cuts redundant research, lowers latency, and means you steer less on long, multi-step work.

It also ships with three built-in skills: `/plan` turns a task into a plan you approve, `/grill` stress-tests that plan, and `/goal` keeps working until the objective is met.

## Built to survive a crash

Every model call, tool run, approval, and edit goes into a local, append-only event log. That log is the single source of truth, so if the process dies, the agent replays it and resumes exactly where it stopped. For a job that runs all night, that is the difference between a finished task and a wasted evening.

## The numbers, and where it still trails

On Meta's Terminal-Bench 2.1 chart, Muse Spark 1.2 in Muse Code scores 82.9%. That beats GPT 5.6 Terra in Codex (81.8%), Grok 4.5 (81.6%), and Gemini 3.6 Flash (78.9%).

The headline demo is a kernel optimization case study. Meta let the model write, compile, profile, and improve GPU kernels for NVIDIA Hopper over more than 1,000 tool calls and up to 24 hours. On the KDA kernel it ended 68.7% faster than the baseline Triton implementation.

Here is the honest part. The same charts show Claude is still ahead. Opus 5 in Claude Code tops Terminal-Bench 2.1 at 86.7%, and on the KDA kernel run Opus 5 reached +74.0%, GPT 5.6 Sol +71.2%, and Opus 4.8 +69.6%. Muse Code is a serious new entry, not a new leader. All of these numbers are Meta's own evaluations, so wait for independent tests before you switch.

## Why it matters

A third big lab now ships its own model plus its own terminal agent, trained together. That is the same playbook as Claude Code and Codex, and more competition at the top usually means better tools and lower prices for everyone who codes with AI. Muse Spark 1.2 is also available in the Meta Model API if you want the model without the agent.

Read Meta's full announcement: [Introducing Muse Code and Muse Spark 1.2](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)

If you build with coding agents, I share my setups inside the [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about).
