---
title: "This Uncensored AI Image Model Changes Nothing"
date: "2026-10-19"
excerpt: "An uncensored Qwen Image 2.1 Turbo encoder pulled over 258,000 downloads in under a week. Its own makers tested 45 sensitive image prompts and found that zero of them changed."
thumbnail: "assets/images/blog-thumbnails/this-uncensored-ai-image-model-changes-nothing.jpg"
youtubeId: "jYqYdIVWP54"
tags:
  - AI
  - AI Images
  - Open Source
  - AI Models
  - News
---

A Hugging Face repo called Qwen-Image-2.1-Turbo-Uncensored-GGUF pulled 258,320 downloads in its first five days. The name sounds like a big deal. The makers' own test data says the "uncensored" part changes nothing they could measure in your pictures. The interesting part of this release is something else: it makes Qwen's image model small enough to run locally.

## What it is

The repo is from AtomicChat, and it is built for Qwen Image 2.1 Turbo. That is Qwen's open 7 billion parameter image model, distilled down to 8 denoising steps. The repo went up on October 9, 2026, and had 440 likes when I checked it on October 14.

Qwen Image has three parts:

1. **A safety checker.** The open weights do not ship one. There was nothing to remove.
2. **A text encoder** (Qwen3-VL-8B-Instruct). This reads your prompt and turns it into something the image model can use.
3. **The denoiser.** This is the 7B image model that actually draws the picture.

AtomicChat only edited the text encoder. They found the direction in its weights that makes it refuse, and projected it out. The denoiser is untouched.

## Why it changes nothing

The edit works on the encoder as a chat model. On their refusal test, chat refusals drop from 88.9% to 1.2%, and MMLU stays at 77.35% before and after. So the encoder stops saying no, and it does not get dumber.

But the image results tell the real story. On 45 sensitive image prompts, the stock encoder and the edited encoder gave the same outcome every time. Zero of 45 flipped. The card explains why: the stock pipeline already drew every category they tested, so the encoder change had nothing left to open up. An encoder cannot add something the denoiser never learned to draw, and Qwen filtered that kind of content out of the denoiser's training data.

The pictures do shift a little, but the card measures a similar shift on neutral prompts too. It is a general change, not a move toward anything the stock model refused.

## The real value: the size

GGUF is a format that compresses model weights into lower precision so they fit on normal hardware. Here is what that does to the encoder:

| Encoder file | Size |
| --- | --- |
| BF16 (full precision) | 16.39 GB |
| Q8_0 | 8.71 GB |
| AD-Q4_K (their 4 bit pick) | 5.29 GB |
| AD-Q2_K | 3.34 GB |

AtomicChat also publishes a separate GGUF of the Turbo denoiser, where the 4 bit file is 4.20 GB. Add a 0.68 GB VAE and the full 4 bit stack is about 10.2 GB, against more than 30 GB at full precision.

The card names three runtimes: stable-diffusion.cpp (the encoder drops in as the `--llm` file for `sd-cli`), the Atomic Chat app, and llama.cpp for chat use only. The card also says it has not been tested in ComfyUI or on a Mac yet. Their tests ran on an NVIDIA A100 with 80 GB.

One license detail: the encoder repo is Apache 2.0, but the Turbo denoiser it pairs with is under the Qwen Research License. Check that before you build anything commercial on it.

## The catch

No filter means the responsibility is yours. The card says plainly that removing refusals does not make outputs safe, correct, or lawful. It says never to use it for intimate or degrading images of real people without their consent, never for anything involving minors, and that any deployment needs its own access controls. Those rules apply to the stock model too, since it never had a filter in the open weights.

## My take

The headline is the "uncensored" label, and the data shows that label does almost nothing for images. What is actually useful is the quantization work: a strong 8 step open image model you can run in about 10 GB. If you want Qwen Image locally, the regular Turbo GGUF is the part to look at. If you want an image model with guardrails, you need to add them yourself either way.

Sources: [AtomicChat Qwen-Image-2.1-Turbo-Uncensored-GGUF model card](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF), [AtomicChat Qwen-Image-2.1-Turbo-GGUF denoiser](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-GGUF), [Qwen-Image-2.1-Turbo official card](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo), [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp)
