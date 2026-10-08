---
title: "Google's Gemini 4 Argon Beats Opus 5.5 (Mostly)"
date: "2026-10-08"
excerpt: "Gemini 4 Argon launched at $2 per million input tokens, half of Claude Opus 5.5, and scores 77.9% on DeepSWE v1.1 against 74.2% for Opus. It still loses Terminal-bench 4.0, and almost nobody can use it yet."
thumbnail: "assets/images/blog-thumbnails/gemini-4-argon-beats-opus-5-5-mostly.jpg"
youtubeId: "CGY-kGZuzXM"
tags:
  - Google Gemini
  - Gemini 4 Argon
  - Benchmarks
  - AI Models
  - News
---

Google just released Gemini 4 Argon, and at launch it costs half as much as Claude Opus 5.5. It is Google's new frontier model, built to go head to head with Opus 5.5 and GPT-6 Astra on long, multi-step work in software engineering, legal and finance tasks, and cybersecurity defense.

## The price, and the catch

Argon's introductory price is $2 per million input tokens and $10 per million output tokens. Opus 5.5 is $4 and $20, so for now Argon is exactly half. Read the footnote, though: after the intro period, Argon goes to $4 and $20, the same as Opus 5.5. Google gives no end date for the intro price.

The bigger catch is access. Right now Argon is rolling out only to trusted cyber defenders in Google's Fairwind Program. Paid API customers and Google AI Ultra subscribers are next in line, with no date given.

## Where it wins

On Google's published charts, Argon tops DeepSWE v1.1, a long-horizon coding benchmark, at 77.9%. Opus 5.5 scores 74.2% and GPT-6 Astra 74.1%. The biggest gap is on Harvey's Legal Agent Benchmark: Argon scores 19.6%, against 6.7% for Claude Fable 5.1, 5.4% for GPT-6 Astra, and 3.8% for Opus 5.5. It also leads AutomationBench at 51.3% and the Vals Index at 68.9%.

## Where it loses

It is not a clean sweep. Opus 5.5 still wins Terminal-bench 4.0, 66.4% to Argon's 57.4%, and PostTrainBench, 49.3% to 45.3%. GPT-6 Astra wins FrontierSWE v2 with 65.5%, while Argon gets 55.0%. Astra also leads Terminal-Bench Science and OSWorld 2.0.

Remember that all of these are Google's own numbers. Google's methodology notes say some scores were computed by Google and some were taken from the other labs' system cards, so treat the small gaps with care until independent tests arrive.

## Huge answers, and proof it works

The feature I find most useful is the output limit. Argon can write up to 1 million tokens in one response, up from 64,000 for earlier Gemini models. Note that this is output, not context. A model that can write that much in one go can finish a massive refactor or a full report without being cut off.

Google also says it already runs Argon in house. A team of Argon agents working on memory optimization freed up over 300 TiB of memory across Google's data centers, with an estimated 500 TiB to 1 PiB in total savings expected.

## Should you care yet

If you are not a vetted cyber defender, you cannot use it today. But the direction matters: Google now claims the top spot on long coding and legal agent tasks at launch pricing that undercuts Opus. When it opens to paid API users, it is worth a test on your own workloads, especially long tasks that need very long outputs.

Read Google's announcement: [Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
