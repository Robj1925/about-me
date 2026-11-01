---
title: "Indra OCR 1.1: 43.9 Pages per Second on a 32 Core CPU"
date: "2026-10-30"
excerpt: "Datalab's Indra OCR 1.1 reads 43.9 pages per second on a 32 core AMD EPYC CPU with no GPU, 15 times faster than Tesseract in Datalab's test. Here is what it reads, where it struggles, and the license catch."
thumbnail: "assets/images/blog-thumbnails/indra-ocr-1-1-43-9-pages-per-second-on-a-32-core-cpu.jpg"
youtubeId: "sekGGNYXUYI"
tags:
  - OCR
  - AI Tools
  - Open Source
  - Local AI
  - Python
---

Datalab's [Indra OCR 1.1](https://www.datalab.to/blog/indra-ocr-1-1) reads 43.9 pages per second on a 32 core CPU. No GPU.

OCR turns scans and photos into text. Think Tesseract, but tiny. The OCR model has 1 million parameters, and the whole default pipeline has 7 million. That is small enough that a plain CPU server can push through a lot of pages.

## The speed test

Datalab tested it on an AMD EPYC (Genoa) server with 32 cores. The setup: no GPU, OCR mode, one single threaded worker per core, and 300 pages from their OmniParseBench set.

On that machine, Indra read 43.9 pages per second. Tesseract 5 read 2.92. That is 15 times faster on the same machine type. Datalab also lists PaddleOCR's PP-OCR text models at 4.28 pages per second, so roughly 10 times slower than Indra in the same table.

Two things to keep in mind. This is Datalab's own benchmark, and it is a server number, not a laptop number. In the same table, 4 cores gets you 6.2 pages per second.

## What it reads now

Version 1.1 is a real step up from 1.0:

- **More than 80 languages on scans.** Korean, Thai and Hebrew are in the examples. Datalab says that on held out printed pages in 95 languages, it reached a character F1 of 0.90 or higher on 83 of them.
- **Tilted pages.** It straightens pages tilted up to 45 degrees.
- **Handwriting.** Version 1.0 could not read handwriting at all. Version 1.1 can.

The output is markdown, or JSON with lines, boxes and layout blocks if you want structure.

## The limits

The handwriting part needs an honest note. On OmniParseBench, the handwriting score went from 8.3 percent in 1.0 to 25.2 percent in 1.1. That is a big jump, but 25.2 is still low. Datalab says clear writing reads well, but cursive and faint pencil are harder.

They also list limits on complex tables and on some diacritics, like Czech, Turkish and Kurmanji. If your documents look like that, test before you trust it.

## Try it

It is one pip install:

```bash
pip install -U indra-ocr
indra-ocr paper.pdf
```

The first run downloads about 76 MB of models. On a small x86 machine with 4 virtual CPUs, Datalab reports a median of 212 milliseconds per page, one page at a time (357 ms with `--math` turned on).

Where I would use it: in front of a RAG pipeline, so scanned PDFs become searchable text before they ever hit the model.

## The license catch

Do not call this completely free. The code is Apache 2.0. The model weights use a modified OpenRAIL-M license: free for research, personal use, and startups under 20 million dollars in funding or revenue. The license also rules out use that competes with Datalab's own API. If your company is above that line, read the terms first.

If you like small models that run on hardware you already own, I also covered [cloning a voice locally from 3 seconds of audio](/blog/clone-any-voice-locally-from-3-seconds-of-audio.html). And for another small model that runs on AMD hardware, see [ZAYA1-8B](/blog/this-tiny-8b-model-outsmarts-gpt-5-0-claude-4-5-sonnet-zyphra-zaya1-8b.html).

Sources: [Datalab: Indra OCR 1.1](https://www.datalab.to/blog/indra-ocr-1-1), [GitHub: datalab-to/indra](https://github.com/datalab-to/indra), [Hugging Face: datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
