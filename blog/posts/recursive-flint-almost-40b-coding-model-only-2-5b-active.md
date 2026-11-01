---
title: "Recursive Flint: Almost 40B Coding Model, Only 2.5B Active"
date: "2026-10-29"
excerpt: "Recursive released Flint, an Apache 2.0 coding model with 39.8 billion parameters and about 2.5 billion active per token. Here are its reported scores, the model that beats it, the hardware it needs, and the rec engine that runs it on a Mac."
thumbnail: "assets/images/blog-thumbnails/recursive-flint-almost-40b-coding-model-only-2-5b-active.jpg"
youtubeId: "d_cUxSMVtTo"
tags:
  - Open Source
  - AI Coding
  - Local AI
  - Hugging Face
  - LLM Benchmarks
---

Recursive just dropped [Flint](https://huggingface.co/RecursiveSI/flint), an open coding model with 39.8 billion parameters. But only about 2.5 billion of them work on each token.

## How that works

Flint is a mixture of experts. Each MoE layer has 256 experts, and every token uses only 6 of them, plus one shared expert that is always on. The model has 49 layers: 2 dense and 47 MoE.

That is why the active count is so small. The model card says "approximately 2.5 billion active per token", and that number includes the output head. You will also see it called 40B-A2.5B, which is the rounded name.

The weights are on Hugging Face under Apache 2.0.

## The scores

Recursive reports these numbers from its own release evaluations:

- Terminal-Bench 2.1: 54.9%
- SWE-bench Pro v2: 89.7%
- SWE-bench Verified: 74.2%

These are their own tests, and the card itself says "Evaluation setups vary across sources." It also notes that Terminal-Bench counts web retrieval solutions as failures, while developer reported scores may not. So compare with care.

## The catch

On that same chart, the dense Qwen 3.8 scores higher on all three: 73.0, 94.9 and 75.6. Flint does beat the sparse MoE models on the chart (Qwen 3.5, Qwen 3.6 and Laguna XS 2.1).

So Flint's pitch is speed at its size, not the top score. If you only care about the best result, it is not this model. If you care about how much you get per active parameter, it is interesting.

## The hardware

The full BF16 checkpoint is about 80 gigabytes. The official SGLang setup runs on one B300 or H200 GPU per replica. That is data center hardware, not a desktop card.

## Run it on a Mac

And the best part: Recursive also ships [rec](https://github.com/recursive-oss/rec), an Apache 2.0 local engine that runs 4 bit Flint on a Mac. The requirements:

- An M4 Pro, M4 Max, M5 Pro or M5 Max
- At least 48 GB of unified memory
- About 30 GB of disk

There are also quantized repos, like [flint-int4](https://huggingface.co/RecursiveSI/flint-int4). I could not test it myself, because my Mac does not meet those specs. And hardware and quantization change the results, so do not expect the BF16 scores from a 4 bit build.

For another open model where the weights are free but the hardware is the real cost, see [Kimi K3 is open source, you still can't run it](/blog/kimi-k3-is-open-source-you-still-cant-run-it.html). And for the model that beats Flint on its own chart, see [Qwen 3.8 Max](/blog/qwen-3-8-max-beat-87-percent-of-human-teams.html).

Sources: [Flint model card (Hugging Face)](https://huggingface.co/RecursiveSI/flint), [Recursive: Introducing Flint](https://www.recursive.com/updates/introducing-recursive-flint), [GitHub: recursive-oss/rec](https://github.com/recursive-oss/rec)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
