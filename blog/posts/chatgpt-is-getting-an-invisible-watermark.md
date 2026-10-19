---
title: "ChatGPT Is Getting an Invisible Watermark"
date: "2026-10-11"
excerpt: "OpenAI's textGrain watermark is coming to ChatGPT and Codex in the EU. In OpenAI's own test it catches a 400 token answer about 92% of the time, but swap a quarter of the words and that falls to 17%."
thumbnail: "assets/images/blog-thumbnails/chatgpt-is-getting-an-invisible-watermark.jpg"
youtubeId: "El9T7stgzm0"
tags:
  - OpenAI
  - ChatGPT
  - AI Safety
  - News
---

OpenAI is about to hide an invisible watermark inside ChatGPT's answers, but only in Europe. It is called textGrain, OpenAI announced it on October 5, 2026, and it comes with a technical report written with researchers from the University of Pennsylvania and Yale.

## Why now: the EU AI Act

Article 50 of the EU AI Act applies from August 2, 2026. It says AI generated content has to be marked in a machine detectable way. In June the European Commission published a Code of Practice on how to do that, and about 190 organizations signed it, OpenAI and Anthropic among them. Systems already on the market before August 2 get until December 2, 2026 for the marking duty.

OpenAI is not first here. Anthropic started marking Claude models launched on or after August 2, 2026, and it applies that worldwide, not only in the EU.

## How it works

There are no hidden characters, so you cannot strip the watermark with a find and replace. Each time the model picks the next word, a secret key gives a small push to which word wins. The text reads normally. A detector that holds the same key can check whether the word choices follow that pattern often enough to be more than chance. The report title calls it "entropy-calibrated" watermarking: the push matters most where the model had many good options to choose from.

## Who gets it

- **ChatGPT and Codex in the EU:** on for every plan, rolling out over the coming weeks.
- **The API:** opt in, worldwide, off by default.
- **The detector:** not for you. More on that below.

## The numbers

All of these come from OpenAI's own tests, at a 1% target false positive rate:

| Answer length | Unedited | 10% of words replaced | 25% of words replaced |
| --- | --- | --- | --- |
| 200 tokens | 66.3% | 37.8% | 7.0% |
| 400 tokens | 92.0% | 65.8% | 17.2% |

Topic matters a lot too. On 400 token psychology answers detection was 94.3%. On math answers it was 60.8%. My read: math answers leave the model fewer free word choices, so there is less room for the pattern. OpenAI says quality stays about the same: it shows eight benchmarks on its Astra model with and without the watermark, and the scores move by small amounts in both directions. It also says textGrain matched or exceeded Google's SynthID for text, but it gives no numbers for that, and nobody has reproduced any of this independently yet.

## The catch

You cannot run the detector. OpenAI's docs say text verification is "currently available only to approved organizations including AI research and academic institutions," reviewed case by case. Image and audio checks stay public at openai.com/verify and through the Content Provenance API.

Two more limits from OpenAI itself. A missing watermark does not prove a human wrote the text. And a hit only says an OpenAI system touched the text, not how much a person edited it, and it does not identify the user. Short text, math, paraphrasing and translation all weaken the signal.

There is an open question too. Legal commentators point out that the Code of Practice expects free detector access for groups like regulators, media and fact checkers. OpenAI says its limited access is in line with the Code. That is not settled yet. OpenAI also says it plans to open source textGrain, but it has not done so.

## My take

This is a compliance feature, not an AI detector for teachers or recruiters. A rewrite of a quarter of the words drops detection to 17%, and the only people who can check are approved researchers. If you write with ChatGPT in the EU, the watermark will be there, but it tells a researcher "an OpenAI model was involved," nothing more. The useful part is the transparency: OpenAI published the numbers that show exactly where it breaks.

Sources: [OpenAI: EU text provenance](https://openai.com/index/eu-text-provenance/), [OpenAI content provenance guide](https://developers.openai.com/api/docs/guides/content-provenance), [EU Code of Practice on Transparency of AI-generated Content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) and [EU FAQ on Article 50 of the AI Act](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
