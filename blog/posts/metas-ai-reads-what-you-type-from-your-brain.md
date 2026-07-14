---
title: "Meta's AI Reads What You Type From Your Brain"
date: "2026-07-13"
excerpt: "No implant, no surgery. Meta's Brain2Qwerty reads a sentence you are typing straight from your brain signals, and version 2 just made a massive accuracy jump."
thumbnail: "assets/images/blog-thumbnails/metas-ai-reads-what-you-type-from-your-brain.jpg"
tags:
  - AI Research
  - Meta
  - News
---

Meta built an AI that reads a sentence you are typing straight from your brain. No implant, no surgery. It is called Brain2Qwerty, and version 2 just landed with an accuracy jump that is the real story here.

## How It Works

You sit under a brain scanner called an MEG (magnetoencephalography), type on a keyboard, and the model turns your raw brain signals into text. Nothing goes inside your head. The whole pipeline is non-invasive.

Your brain signals run through three stages. A conformer model detects and classifies the characters, a liner groups them into word embeddings, and a fine-tuned language model reconstructs the actual sentence using context. Version 1 read one character at a time. Version 2 reads at the character, word, and sentence level all at once.

## The Numbers

The best participant hit 78% word accuracy, up from 48% in version 1. Character accuracy climbed from 61% to 69%. That is a massive jump for a single version, and it comes almost entirely from more training data: Meta trained version 2 on roughly 22,000 typed sentences, about 10 times more than version 1's 2,000.

Meta says accuracy climbs log-linearly with data, meaning this gap should keep closing as they collect more.

## Not a Product Yet

MEG is a room-sized scanner, so this is a research milestone, not something you will be buying anytime soon. Don't expect a Brain2Qwerty headset at your local electronics store.

But for the people this actually matters for, patients with brain injuries who cannot speak or type, a non-invasive path that avoids brain surgery entirely is a genuinely big deal. Every existing brain-to-text approach with this level of accuracy has required implants. Getting close to that performance with zero surgery changes who this technology could realistically reach.
