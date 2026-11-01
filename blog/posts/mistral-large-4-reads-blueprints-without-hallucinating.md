---
title: "Mistral Large 4 Reads Blueprints Without Hallucinating"
date: "2026-10-22"
excerpt: "Mistral Large 4 (Le Chonk) points at the evidence before it answers. On the Dense 200 bounding box test it scored 42.0, ahead of GPT-6 Astra at 41.5, and it zooms through engineering drawings until the answer is exact."
thumbnail: "assets/images/blog-thumbnails/mistral-large-4-reads-blueprints-without-hallucinating.jpg"
youtubeId: "4GNKKXWT4WY"
tags:
  - AI Models
  - Benchmarks
  - Open Source
  - News
  - AI
---

Mistral's newest model reads an engineering drawing without guessing. It is called Mistral Large 4, and Mistral's own nickname for it is "le Chonk." The trick is simple: it points before it talks.

I already covered the cybersecurity side of this model in [Le Chonk: Mistral Large 4 does what Claude refuses](/blog/mistral-large-4-le-chonk-does-what-claude-refuses.html). This post is about vision, specifically visual grounding.

## What visual grounding means

Visual grounding means the model can say exactly where something is in an image, not only that it is there. Give it a picture and a request, and it draws a box around every match.

In Mistral's demo videos on X, the model boxes every orange on a moving conveyor belt, hard hats on a work site, and even a red hot steel bar lying at an angle, where it returns an oriented (rotated) bounding box. Mistral's post sums it up as: "Pinpoints exactly where things are in an image."

## The engineering drawing demo

This is the demo that sold me. The question is a real inspection question: does the compression spring come in contact with the slide bearing?

The model does not answer right away. In Mistral's demo video it:

1. Zooms into the section view of the drawing.
2. Reads the bill of materials (the parts table) for the relevant items.
3. Zooms in again to read the callout numbers on the drawing.

Only then does it answer: no, the compression spring does not come in contact with the slide bearing, because the vacuum pin (item 3) is positioned between them.

Mistral's blog describes this as analyzing engineering drawings by "zooming in, inspecting, and verifying until the answer is exact." That loop is why I call it a good inspector. A model that looks first is far less likely to make up an answer.

## The benchmark

On Dense 200, a bounding box detection test, Mistral's chart shows:

- Mistral Large 4: 42.0
- GPT-6 Astra: 41.5
- Kimi K3: 28.9
- DeepSeek V4.1 Flash: 3.3

So Mistral Large 4 is ahead of GPT-6 Astra by half a point. Mistral's blog text rounds this to "42% vs 41%."

## The rest of the model

From the [launch post](https://mistral.ai/news/mistral-large-4/), dated October 6, 2026: Mistral Large 4 is a 1 trillion parameter, natively multimodal model with 52 billion active parameters. It is in public preview on Mistral Studio, and Mistral lists API pricing at $1.36 per million input tokens and $4.18 per million output tokens.

## The limits

- **Half a point is close to a tie.** On Dense 200 the lead over GPT-6 Astra is 0.5. That is "as good as the best closed model," not "far ahead of it."
- **Demos are curated.** The drawing and conveyor examples are Mistral's own videos. In the oranges demo the on screen count changes from frame to frame, so I would not trust it for exact counts without checking.
- **Open weights are not out yet.** Mistral says "Weights drop end of this month," meaning the end of October. When I last checked the docs, the model was still listed as a public preview.
- **"Without hallucinating" is a description of the method, not a guarantee.** Pointing first reduces guessing. It does not make the model perfect.

## Try it

You can test it today in the [Mistral Studio playground](https://console.mistral.ai/). Upload a busy photo or a technical drawing and ask it to box something specific. That is the fastest way to see if the grounding holds up on your own images.

Watch the short above to see the drawing demo. If you want the AI tools and Claude Code skills I use every week, join my [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

Sources: [Mistral: Introducing Mistral Large 4](https://mistral.ai/news/mistral-large-4/), [Mistral Large 4 docs](https://docs.mistral.ai/models/mistral-large-4-0), and Mistral's posts on X ([visual grounding](https://x.com/MistralAI/status/2109687906751086628), [engineering drawings](https://x.com/MistralAI/status/2109687909213192385))
