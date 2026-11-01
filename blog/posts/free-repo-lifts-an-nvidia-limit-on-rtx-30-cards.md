---
title: "Free Repo Lifts an NVIDIA Limit on RTX 30 Cards (gpu-unlock)"
date: "2026-10-28"
excerpt: "gpu-unlock is a free Linux kernel module that, per its README, doubles the FP16 and BF16 instruction issue rate on RTX 30 series chips. On one user's RTX 3090 Ti test, BF16 went from 87.50 to 157.41 TFLOPS."
thumbnail: "assets/images/blog-thumbnails/free-repo-lifts-an-nvidia-limit-on-rtx-30-cards.jpg"
youtubeId: "1G25dslABA4"
tags:
  - NVIDIA
  - Local AI
  - Open Source
  - Linux
  - AI Hardware
---

NVIDIA holds back some AI math on RTX 30 series cards. A free repo called [gpu-unlock](https://github.com/Zagitta/gpu-unlock) lifts that limit.

Zagitta built it on GitHub, and it already had 11,000 stars when I checked on October 27. It is a Linux kernel module. Think of it as giving your gaming card the instruction rate of NVIDIA's professional cards.

## What it changes

The README says it doubles the instruction issue rate for FP16 and BF16 math on GA102, GA103, GA104 and GA106 chips. Those are the chips inside the RTX 30 series.

Be careful with the word "doubles." It is the issue rate for one kind of half precision math, not all AI compute. It does not double your GPU.

## The numbers

The benchmark in the README comes from [one community test](https://github.com/Zagitta/gpu-unlock/issues/1) on an RTX 3090 Ti. It was a dense matrix multiply at 450 W, using five sample medians:

- BF16 went from 87.50 to 157.41 TFLOPS
- FP16 went from 87.46 to 118.39 TFLOPS
- TF32 went from 42.58 to 82.61 TFLOPS

That test also ran on an experimental fork with a modified driver. So it is one benchmark, not a speedup for every app. If you train or run models locally on a 3090, test your own workload before and after. Your numbers will not match a pure matrix benchmark.

## The setup

There are two steps:

1. Clone the repo and run `make install`.
2. Add one option to your kernel command line and reboot.

The option is:

```
gpu_unlock.targets=all
```

It unlocks the card before the NVIDIA driver loads. And the best part: it does not patch the driver, so new driver versions do not need new patches.

## The limits

- **Linux only.** This repo does not run on Windows. There is a third party Windows port, but I did not cover it.
- **Supported cards only.** It targets the GA102, GA103, GA104 and GA106 chips.
- **Heat.** The author's FAQ says it may heat up your GPU slightly.

You are also loading a kernel module from a GitHub repo, so read the code or at least the README before you install it on a machine you care about.

If you are thinking about what you can really run on consumer hardware, I wrote about the other side of that in [Kimi K3 is open source, and you still can't run it](/blog/kimi-k3-is-open-source-you-still-cant-run-it.html). For something that runs fine on a normal machine, see [clone any voice locally from 3 seconds of audio](/blog/clone-any-voice-locally-from-3-seconds-of-audio.html).

Sources: [GitHub: Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock), [RTX 3090 Ti benchmark (issue 1)](https://github.com/Zagitta/gpu-unlock/issues/1)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
