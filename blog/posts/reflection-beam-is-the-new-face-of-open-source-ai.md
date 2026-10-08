---
title: "Reflection Beam Is The New Face Of Open Source AI"
date: "2026-10-07"
excerpt: "Reflection's Beam is a 501B open weight model from a US lab, under Apache 2.0. It is not the strongest open model. It matches GLM 5.2 while thinking about a third as much, and that is why it matters. Here are the full benchmarks, the efficiency chart, the demos and the catches."
thumbnail: "assets/images/blog-thumbnails/reflection-beam-is-the-new-face-of-open-source-ai.jpg"
youtubeId: "4d6c0c5J6tc"
tags:
  - Reflection AI
  - Beam
  - Open Source
  - AI Models
  - Benchmarks
---

For the last two years, if you asked what the best open source AI model was, the answer was Chinese. DeepSeek, Qwen, GLM, Kimi. Meta had a moment with Llama, and then it went quiet.

This week that changed. A US lab called Reflection, founded by people who built AlphaGo and ran reinforcement learning on Gemini, announced Beam. 501 billion parameters, Apache 2.0, trained from scratch in America.

The most important thing to understand: it is not the smartest open model. It is the one that does almost the same work while thinking about a third as much. That is why I think it is the new face of open source.

## The benchmarks, all eight columns

Reflection's screenshots show three columns. The full table has eight. Here is what it says.

- **Coding:** SWE-bench Verified 80.9, SWE Bench Pro v2 Hard 77.2, Terminal Bench 2.1 80.1. Well ahead of Inkling and Nemotron, about level with GLM 5.2.
- **Agentic coding:** DeepSWE 44.4. That ties GLM 5.2, but the newer Chinese models reach up to 74.2.
- **Reasoning:** AIME 2026 97.8, GPQA Diamond 90.5, HLE 36.2. Strong, but a few points under the Chinese leaders.
- **Tool calling:** MCP Atlas 78.7, BrowseComp 77.4. The weak spots are tau3 banking at 38.0 and AutomationBench at 37.0, about 17 points behind the best.

The bottom line: Beam beats the Western open models on almost every row, roughly ties GLM 5.2, and trails GLM 5.3, Kimi K3, Qwen 3.8 Max and DeepSeek V4.1 Flash. Reflection says it themselves: Kimi K3 is still ahead on raw capability.

One note on the numbers. The competitor scores come from Artificial Analysis and DataCurve. Beam's scores come from Reflection. No independent run of Beam exists yet.

## The real pitch: intelligence per token

If it is not winning on the scoreboard, why call it the new face of open source? Because of the efficiency chart.

On Terminal Bench 2.1, Beam scores about 80% at about 24,000 tokens per attempt. GLM 5.2 scores about 78% at about 82,000 tokens. Roughly a third of the tokens for the same score. On DeepSWE, both land at 44%, Beam at about 43,000 tokens and GLM 5.2 at about 78,000.

In compute, that is about 1 PFLOP per attempt for Beam, about 6.5 for GLM 5.2 and about 13 for Qwen 3.8. That is where Reflection's "3 to 4x less inference compute than GLM 5.2" claim comes from.

Where does the saving come from? Beam has 23B active parameters against GLM 5.2's 40B, which is only a 1.74x advantage per token. The rest comes from shorter reasoning: Beam writes roughly 1.7 to 2.3x fewer tokens per answer. More than half the saving is the model learning to stop talking.

Reasoning is mandatory, with five effort levels: low, medium (the default), high, xhigh and max.

Why this matters: an open model is only yours if you can afford to run it. Efficiency is what makes owning cheap. But keep in mind this is an estimate. It leaves out prompt processing and long context attention, and Reflection has not published a price. Treat 3 to 4x as a claim to test when the weights land.

## What Beam built

Reflection released four demos. They are vendor picked, so treat them as examples, not proof. Two are interesting because Beam is text only and it still does visual things.

1. **A 3D astronaut game in p5.js.** The astronaut falls toward Earth, dodging asteroids or blasting them. Beam cannot see. It planned the visuals entirely in text.
2. **A world map from memory.** A 180 by 90 grid, 16,200 latitude and longitude points, each marked land or water with no image or map. Beam got 95.5% right. Reflection's comparison: Opus 5 at 92.5, Fable 5 at 97.8.
3. **A live NYC subway map.** Beam found the MTA docs, handled the authentication, pulled the line geometries, and built a backend and frontend that animates trains between stations.
4. **An open model training an open model.** In OpenCode, Beam built a notebook that fine tunes Google's smallest Gemma 4 on text to SQL with Unsloth. The fine tune raised accuracy on the held out test set by 66.5%.

One more detail I liked: during a training phase with no browsing tasks, Beam got better at browsing anyway. Given web access, it taught itself to ask other AI models for help and to call OCR APIs to read documents.

## My verdict

- **If you build on a Chinese open model for cost** and your customer or legal team asks where the model came from, Beam is the first serious American option. Test it the week the weights drop.
- **If you want the strongest open model,** Kimi K3, DeepSeek V4.1 Flash and GLM 5.3 are still ahead.
- **If you live in Claude Code on a Max plan,** Beam will not replace Opus 5.5. It is GLM 5.2 tier. Where it matters is agents running at volume, self hosting, and anything that must stay on your own hardware.

Reflection is already training the next model, and the founders talk about significantly bigger models in 2027. Beam is model one of a series.

## Why open source needed a new face

Reflection's CEO is Misha Laskin, who led reward modeling for Gemini at Google DeepMind. The CTO is Ioannis Antonoglou, one of DeepMind's first engineers, co-creator of AlphaGo and AlphaZero. They helped build the closed models they now compete with. They also sell Beam, so treat what they say as a pitch.

The context: open models went from 7% of the tokens on Vercel's AI Gateway in December to 56% in August, according to the Financial Times. The best open models are still Chinese, and American companies build on them. Laskin on CNBC: open models "are Trojan horses for the infrastructure that they bring with them."

Reflection has raised about $4.6 billion at a $25 billion valuation, with Nvidia as an investor. The new face of open source is not the model with the top score. It is the model that governments and companies are allowed to build on.

## How they built it

Beam was trained from scratch, not distilled from another lab's model, by a team in the US and UK. Pretraining used 23.8 trillion tokens. Then came reinforcement learning on 10,500 Nvidia GPUs for four weeks, with more than 100 million attempts. They spent more GPU time on reinforcement learning than on pretraining, and the scores were still going up when the run ended.

For safety, they trained a separate safety model and merged it in. The safety results come with the technical report.

## How to use it

- Join the waitlist at platform.reflection.ai.
- It works with Mirror CLI, OpenCode, Pi and Hermes Agent. Not Claude Code.
- The API is OpenAI compatible: change the base URL and the model name.
- To self host when the weights come out, all 501B parameters must be in memory. That is about 250GB at 4 bit, so a multi GPU server or a 512GB Mac Studio.

## The catches

- **You cannot download it yet.** The weights come "later this month," with no date.
- **Nobody has checked the numbers.** Every Beam score is from Reflection.
- **There is no price yet.** The efficiency only becomes a saving when a host publishes a price.
- **It is text only,** with weak spots on agent tasks. To be fair, Reflection put the rows it loses in its own table. That is a reason to trust the rows it wins.

Beam is not the strongest open model. It is the most important new one: American, Apache 2.0, and it does the same work with about a third of the thinking. When the weights drop, I will test it head to head against Opus 5.5.

If you want to put models like this to work in your own business, that is what my [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about) is for. I share the Claude Code skills and setups I use every day, and you can get one on one help with your own workflow.
