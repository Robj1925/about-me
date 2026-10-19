---
title: "Microsoft Is Betting Its AI on Its Own Chip"
date: "2026-10-18"
excerpt: "Microsoft says its own Maia chips will be the primary inference system behind its products, at multi-gigawatt scale starting in 2027. The new Maia 300 packs 288 GB of HBM4 and 18 TB/s of bandwidth into 950 watts."
thumbnail: "assets/images/blog-thumbnails/microsoft-is-betting-its-ai-on-its-own-chip.jpg"
youtubeId: "ZlbSGltgxLg"
tags:
  - AI
  - AI Hardware
  - News
  - Technology
---

On October 12, 2026, Microsoft said its own chip, Maia, will become the primary inference system for Microsoft products and services, with multi-gigawatt deployments starting in 2027. In other words, Microsoft's own silicon, not a bought GPU, is meant to be the main engine that serves AI in its products. Microsoft did not give a gigawatt figure, and "inference" is the key word: this is about running models, not training them.

## Maia 200 is already running

The current chip, Maia 200, is in production today. Per Microsoft, it serves Microsoft Copilot and runs OpenAI models, Microsoft's own MAI models, and open source model families. GitHub Copilot and Microsoft Foundry are set to follow by the end of the year. It is deployed in the United States, Europe and Australia.

## The Maia 300 chip

The next chip is Maia 300. The headline specs from Microsoft's deep dive:

| Spec | Maia 200 | Maia 300 |
| --- | --- | --- |
| Process | TSMC N3P (one die) | TSMC N2P (chiplets) |
| Memory | 6 x HBM3E, 216 GB | 8 x HBM4, 288 GB |
| Memory bandwidth | 7.1 TB/s | 18 TB/s |
| FP4 compute | 10.1 PetaOPS | 13.8 PetaOPS |
| Power (TDP) | 750 W | 950 W |
| Chips per rack | 48 | 96 |

## The rack and the superpod

Ninety six Maia 300 chips fit in one rack: 24 trays of four, drawing 167 kilowatts. That is double the chip density of Maia 200. Each rack has about 1.7 PB/s of combined memory bandwidth. Up to 128 racks link into a superpod of 12,288 chips.

## The real bet: memory, not math

This is the part I find most interesting. Compute per chip goes up only about 36% (10.1 to 13.8 PetaOPS of FP4). Memory bandwidth goes up about 2.5 times (7.1 to 18 TB/s). Microsoft also says HBM bandwidth per watt roughly doubles.

That split is deliberate. Microsoft's bet is that agents and long context workloads get stuck moving data in and out of memory, not doing the math. When a model reads a long conversation or a big codebase for every token it writes, the bottleneck is how fast the chip can feed itself.

## The claims (and what to trust)

Microsoft makes two big performance claims:

1. Up to 7 times the rack scale token throughput of Maia 200, in the full 96 chip configuration.
2. An expected 40% more tokens per megawatt than "leading GPU based systems." It does not name the GPU.

These are Microsoft's own numbers, not independent benchmarks. A quick check of the published specs shows why the 7x claim depends on more than raw compute: rack FP4 per watt barely moves (about 5% better), so the gain has to come from the 5x jump in rack memory bandwidth, lower precision formats and software. That is consistent with the memory bet, but it is still a claim until someone outside Microsoft measures it.

Production deployments of Maia 300 start in 2027, and Microsoft says more detail is coming at Ignite 2026 in San Francisco (November 17 to 20).

## My take

Every big AI company is moving inference onto its own silicon. I covered the same move from OpenAI in [OpenAI's New Chip Isn't a GPU](/blog/openais-new-chip-jalapeno-isnt-a-gpu.html). What stands out with Maia 300 is how clearly it is built for agents: much more memory and bandwidth, only a modest compute bump. If the 7x number holds up in real workloads, Copilot gets cheaper to run at scale. If it does not, Microsoft still has a lot of GPUs. I would wait for third party numbers before treating any of these claims as settled.

Sources: [Microsoft blog: Microsoft to expand Azure Maia system to multi-gigawatt deployments](https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/), [Azure blog: Maia 300 architecture deep dive](https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/), [Microsoft Maia 2026 media site](https://news.microsoft.com/maia-2026/)
