---
title: "LongCat-Video: Free AI Video Model Nearly Matches Veo 3"
date: "2026-08-13"
excerpt: "Meituan's open-source LongCat-Video scores 3.38 against Veo 3's 3.48 on its text-to-video eval, with 13.6 billion parameters and MIT licensed weights."
thumbnail: "assets/images/blog-thumbnails/longcat-video-free-ai-video-model-nearly-matches-veo-3.jpg"
youtubeId: "gKAf0L4_tDs"
tags:
  - AI Video
  - Open Source
  - Meituan
  - AI Models
---

A food delivery company built an open-source video model that lands within a tenth of a point of Google's Veo 3. It is called LongCat-Video, it comes from Meituan, China's delivery giant, and it has 13.6 billion parameters with MIT licensed weights.

## One Model, Three Jobs

Text-to-video, image-to-video and video continuation all run through one single model. No separate checkpoints, no switching pipelines.

Continuation is the interesting part. LongCat-Video was pretrained natively on video continuation, so it can keep extending its own output into minutes-long videos without the color drift and quality decay that usually creep into long clips. It generates 720p video at 30fps within minutes, using a coarse-to-fine strategy across both time and space, plus Block Sparse Attention to keep high resolutions efficient.

## How Close It Gets to Veo 3

On Meituan's internal text-to-video benchmark (a mean opinion score, higher is better), the overall quality results are:

- Veo 3: 3.48
- LongCat-Video: 3.38
- PixVerse V5: 3.36
- Wan 2.2 T2V A14B: 3.35

Wan 2.2 is a 28 billion parameter mixture-of-experts model. LongCat-Video is a 13.6 billion parameter dense model, so it edges past Wan with about half the total parameters.

Now the honest caveats. This is Meituan's own eval, not an independent leaderboard. On image-to-video the order flips: LongCat-Video scores 3.17 overall, behind Seedance 1.0 at 3.35, Hailuo-02 at 3.27 and Wan 2.2 at 3.26. And the base model is not brand new. LongCat-Video first shipped in October 2025. The fresh piece is the avatar model.

## Avatar 1.5 Adds Talking Characters

LongCat-Video-Avatar 1.5, released May 21, 2026, generates audio-driven human video. It swaps the old Wav2Vec2 audio encoder for Whisper-large-v3 for more accurate lip sync, cuts inference to 8 steps with step distillation, and adds an INT8 quantized model to reduce VRAM use. It takes single or multi-speaker audio and also handles stylized subjects like anime characters and animals.

## Why It Matters

Most video models you can actually download sit a clear step behind the closed ones. On text-to-video, LongCat-Video is close enough to Veo 3 that the gap matters less than the price: the weights are free on Hugging Face, and the MIT license allows commercial use.

The catch is hardware. The setup expects NVIDIA GPUs with CUDA and FlashAttention, and the avatar demos are written for two GPUs. This is not something you run on a laptop.

If you want help putting open models like this to work, that is what we build together in the [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about).

Source: [LongCat-Video on GitHub](https://github.com/meituan-longcat/LongCat-Video)
