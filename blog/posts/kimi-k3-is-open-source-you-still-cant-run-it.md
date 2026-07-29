---
title: "Kimi K3 Is Open Source. You Still Can't Run It."
date: "2026-07-29"
excerpt: "Kimi K3's weights are genuinely open, no license gate, no waitlist. The download is 594GB and the floor to load it is eight H100s. Here is what the hardware actually costs, why the community quantization is a trap right now, and the three real ways to use K3."
thumbnail: "assets/images/blog-thumbnails/kimi-k3-is-open-source-you-still-cant-run-it.jpg"
youtubeId: "Y91e-FwhwPs"
tags:
  - Kimi K3
  - Open Source
  - Moonshot AI
  - Local AI
  - AI Models
---

Kimi K3's weights went public, and they are genuinely open. Not gated, not waitlisted. You do not even have to accept a license agreement to see the files. Which is why your feed is full of videos with the word "free" in the title.

So I went and looked at what it actually takes to run. Here is the part nobody is saying: open weights and runnable are not the same thing.

## What the model actually is

K3 is 2.8 trillion total parameters with 104 billion active, a mixture of experts setup with 96 experts and 16 activated per token.

In plain English: the 2.8 trillion is the size of the library. The 104 billion is how many books it pulls off the shelf for any given word. The catch is that you still have to own the entire library. Active parameters do not save you here.

It also ships with a 1 million token context window, and it is multimodal, so you can hand it text or an image. The vision side is the MoonViT V2 encoder at 401 million parameters.

Two details that matter more than they sound. First, it is already a 4 bit model. Moonshot shipped it compressed. Second, it carries the Kimi K3 license, an open weights license, not MIT and not Apache 2.0.

## The download and the floor

The download is roughly 594GB. This is not something you kick off before bed. Plan for at least a day, and check your free disk space before you start, not after.

Now the important number. The bare minimum to load it is eight H100s at 80GB each. That is about 640GB of VRAM to hold a 594GB model.

For perspective: a single RTX 4090 has 24GB. Mac Studio unified memory does not get there either. This is not a "buy one more stick of RAM" problem. It is a "buy hundreds more sticks of RAM" problem.

Supported inference engines right now are vLLM, SGLang, and TokenSpeed. Note what is missing: llama.cpp does not support Kimi K3.

The 1 million token window makes the hardware story worse, not better, because the KV cache scales with context. Local deployment guides suggest starting at 128K to 256K rather than the full million unless you are spreading across many GPUs. So even on real hardware, the first thing you give up is the headline feature.

To be clear, Moonshot is not doing anything wrong. A 2.8 trillion parameter model is a data center object by design. The problem is everyone putting "free" in the title.

## The quantization is a trap right now

Someone did quantize it, and here is what happened. The compressed version came out to 865GB. The original is 594GB. Somebody shrank it and it got 270GB bigger.

The reason is simple: K3 was already compressed when Moonshot shipped it. Squeezing something that is already squeezed only adds packaging.

It also does not run on stock llama.cpp. There is an open PR, but it is not merged yet.

The author is upfront about the rest. They call it a theoretical quantization, meaning they lack the compute to test it properly. No reported perplexity, no quality benchmarks, plain round to nearest without importance matrices.

That last part is the real risk. When you quantize experts unevenly, some experts go silent and the router learns to route around them. The model fails, but it looks like it succeeded. That is the worst possible failure mode. This will improve over the coming weeks, but right now it is not a shortcut.

## Way 1: the free tier

The free tier is called Adagio and it is genuinely zero dollars. What it gets you: one concurrent agent task, two scheduled tasks, two widget tasks, two projects, 500MB of project storage, and 15 plus plugin types.

What it does not get you: Kimi Code, the 4x priority queue, swarm, dream memory, goal mode, and Kimi Claw. It is a free tier for chatting with the model, not a free agent platform.

Worth knowing: there is now a banner saying new membership plans are coming soon and that Kimi and Kimi Code benefits will be separated. Every paid tier button currently says "join the waitlist." Moonshot is actively splitting Kimi Code out of the Kimi membership into its own product, so the tiers you see are the incoming structure, not necessarily what you can buy today. Paid tiers run $180, $372, $948, and $1,908 per year, with 1x, 5x, 15x, and 30x credits.

## Way 2: the API

There is no free production tier. List price is $3 per million input tokens and $15 per million output, with cache hits around 30 cents on input via the direct API. OpenRouter is the same $3 in and $15 out, but with no cached input tier.

## Way 3: rent the hardware

You can rent 8x H100 by the hour. Roughly $16 per hour on RunPod community, $19 to $23 per hour on secure cloud, and I found 8x H100 nodes at $49.24 per hour.

Do the math and it falls apart fast. One hour of an 8x H100 node costs more than 5 million input tokens through the API.

Unless you are running this continuously at scale, or you genuinely need the weights on your own systems for privacy or compliance, the API is cheaper than self hosting and it is not close.

## The part that makes K3 worth it anyway

In my head to head against Fable 5, K3 finished a real bug fix in 12 minutes with 34 tool calls and 1.2 million tokens for 92 cents. Fable did the same fix in 3.5 minutes with 18 tool calls and 30K tokens for $2.13. On a cost per real task basis, K3 genuinely wins.

So the model is a legitimately cheap workhorse. It is the self hosting that does not add up.

## The short version

The weights are real. The floor is eight H100s. The quantization is currently bigger than the original and untested. The API is dramatically cheaper than the hardware for basically everyone.

None of that makes K3 a bad model. It is strong and it is cheap if you use it through the API. I am not telling you to avoid it. I am telling you what "open source" and "free" actually mean in this context.

It is an option for companies. It is not a local model for your laptop.
