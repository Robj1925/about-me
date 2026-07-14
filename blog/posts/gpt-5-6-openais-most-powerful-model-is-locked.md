---
title: "GPT 5.6: OpenAI's Most Powerful Model Is Here (But Locked)"
date: "2026-07-10"
excerpt: "OpenAI just previewed their most powerful model ever, and you can't use it. Not because it's broken. The government asked them to hold it back."
thumbnail: "assets/images/blog-thumbnails/gpt-5-6-openais-most-powerful-model-is-locked.jpg"
tags:
  - OpenAI
  - AI Models
  - AI Safety
  - News
---

OpenAI just previewed their most powerful model ever, and you cannot use it. Not because it is broken. The government asked them to hold it back.

## Three Models, One Generation

It is called GPT 5.6, and it is actually three models under one release. Sol is the flagship. Terra is the balanced, everyday option. Luna is the fast, cheap one. That is a new naming convention going forward: the number marks the generation, the name marks the tier.

Right now it is a locked preview for a small group of trusted partners, not the public.

## Two New Gears

GPT 5.6 introduces two capabilities that push past the previous generation. A max reasoning effort setting lets it think longer on hard problems. An ultra mode lets it spin up subagents to work in parallel.

On Terminal Bench 2.1, a coding benchmark built around real command-line work, Sol in Ultra Mode hits 91.9%. That is a new state of the art, ahead of GPT 5.5 at 88%, Claude Mythos 5 at 84.3%, and Gemini 3.1 Pro at 70.7%.

## Why It's Locked

This is OpenAI's most capable cybersecurity model yet. On one exploit benchmark, it matches their frontier preview model while using about a third of the tokens. It does not cross OpenAI's self-defined cyber-critical line: it can find exploit building blocks, but not run a full end-to-end attack chain.

Still, it got close enough that OpenAI briefed the US government before launch, and at the government's request, started with a gated preview instead of a public release.

To get here, OpenAI threw over 700,000 GPU hours at automated red teaming, using their own models to hunt for universal jailbreaks. They also layered in live classifiers that pause mid-response, hand the conversation to a bigger reviewing model, and withhold output that looks like misuse.

## Pricing and Timeline

Per million tokens: Sol runs $5 in and $30 out. Terra runs $2.50 in and $15 out, matching GPT 5.5's capability at half the cost, according to OpenAI. Luna runs $1 in and $6 out.

Luna is available now on the API and Codex for partners, running up to 750 tokens a second on Cerebras hardware. Broader access is expected in July, with wider rollout coming after that.

For now, the most powerful model on the market is one nobody outside a small partner group can actually touch.
