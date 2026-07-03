---
title: "Sakana Fugu Just Beat Claude, GPT-5, and Gemini on Nearly Every Benchmark"
date: "2026-06-23"
excerpt: "Fugu from Sakana AI is not a single model. It is a multi-agent system that orchestrates Claude, GPT, and Gemini under one API, and it tops the leaderboard on nearly every benchmark."
thumbnail: "assets/images/blog-thumbnails/sakana-fugu-beats-claude-gpt-5-and-gemini-on-every-benchmark.png"
tags:
  - AI Models
  - Sakana AI
  - Benchmarks
  - News
---

A new AI system from Sakana AI just went head-to-head with Fable 5, Gemini 3.1 Pro, Opus 4.8, and GPT 5.5, and walked away on top of nearly every major benchmark. It is called Fugu, and the interesting part is not the scores. It is how it gets them.

## Fugu Is Not a Single Model

Here is the twist. Fugu is not one model competing against the others. It is a multi-agent system that orchestrates Claude, GPT, Gemini, and more underneath a single unified API.

You make one API call. Fugu decides which underlying models to route the work to, combines their strengths, and returns the best result. Instead of betting on one provider, you get the best parts of all of them for coding, reasoning, and science tasks in one step.

## The Numbers

The benchmark results speak for themselves. These are the standout scores for Fugu and Fugu Ultra against the field:

- **LiveCodeBench:** Fugu Ultra 93.2, Fugu 92.9. Top of the board, ahead of GPT 5.5 at 85.3 and Opus 4.8 at 87.8.
- **GPQA-D:** 95.5, the highest score of any system tested.
- **CharXiv Reasoning:** Fugu Ultra 86.6, leading the field.
- **Terminal Bench 2.1:** Fugu Ultra 82.1, top of the leaderboard.
- **SWE Bench Pro:** Fugu Ultra 73.7, beating Opus 4.8 (69.2), GPT 5.5 (58.6), and Gemini 3.1 Pro (54.2).
- **Humanity's Last Exam:** Fugu Ultra 50.0, ahead of Gemini, GPT, and Opus.

To be straight about it, Fugu does not win literally everything. Fable 5 edges it out on a couple of tests like raw SWE Bench Pro and SciCode. But across coding, reasoning, and science as a whole, Fugu is sitting at or near the top of almost every column.

## Two Real-World Advantages

The benchmarks are one thing. Two practical wins stand out more.

**It catches more.** In real code reviews, beta testers reported Fugu surfacing 20 or more issues in the same codebases where competing models found around 3. When you are shipping production code, that gap matters.

**It hedges your bets.** Because Fugu routes across multiple providers, a single provider going down does not stop your work. If one API fails, Fugu automatically switches to another. Your pipeline keeps running. For anyone who has had a workday derailed by a single provider outage, that reliability is a real selling point.

## Is This the Future?

Multi-agent orchestration is a genuinely different approach. Instead of one lab racing to build the single best model, you route each task to whichever model handles it best and stitch the results together. It could change how companies build software and solve hard problems.

It also adds complexity. You are now depending on an orchestration layer on top of the models themselves. Whether that tradeoff is worth it depends on your use case, but the results here are hard to ignore.

Is this where AI is headed, or is it one clever layer too many? That is the real question worth watching.
