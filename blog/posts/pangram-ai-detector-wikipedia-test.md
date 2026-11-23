---
title: "Pangram AI Detector vs Claude: The Wikipedia Test and Sources"
date: "2026-11-23"
excerpt: "How Ruben Hassid tested the Pangram AI detector with Claude, why 50 random kitchen words scored 100% AI, and why the only text that passed was copied from Wikipedia."
thumbnail: "assets/images/blog-thumbnails/pangram-ai-detector-wikipedia-test.jpg"
tags:
  - Claude
  - AI Writing
  - AI Detection
  - AI Ethics
  - AI Tools
guide: true
---

This page holds the full Pangram test from my Short and every source behind it.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Ruben Hassid's post with the full test and his prompt (How to AI, November 17, 2026): [ruben.substack.com/p/bypass](https://ruben.substack.com/p/bypass)
- Pangram, the AI detector he used (free credits daily): [pangram.com](https://www.pangram.com/)
- The Wikipedia article from test 2: [Kitchen](https://en.wikipedia.org/wiki/Kitchen)

## How the test works

All results below are from Ruben's screenshots. The Pangram screens show model "Pangram 4.1".

1. **50 random words.** Ruben asked Claude for a list of exactly 50 words that starts with "chicken, rice, salt, pepper", every word random but an extremely common kitchen word. Pangram: "Possibly AI", 100% of the text possibly AI. A second list got the same score.
2. **Why it fails.** His reason: the sequence AI chooses is never really random, and AI detectors pick it up. Asking again for something "different" does not help.
3. **Words from Wikipedia.** He gave Claude this prompt:

```text
https://en.wikipedia.org/wiki/Kitchen now do it only using words from this article strictly, in the order that they appear.
```

   Pangram: "Possibly human", 100% of the text possibly human.
4. **Sentences from old Wikipedia.** His longer prompt tells Claude to use Wikipedia only as it was on 29 November 2022, the day before ChatGPT launched, and to build the text only from copied sentences, "like bricks", with no word of its own. Claude runs a script that reads the old article versions through the Wikipedia API. He asked for 1,000 words. Pangram scanned 1,073 words: "Human Written", 100%.

The full prompt and his two one time setup steps (allow en.wikipedia.org in Claude settings, connect a local folder) are in [his post](https://ruben.substack.com/p/bypass).

## Who can use it

Pangram's checker is free to try (free credits daily). Ruben ran the tests in Claude. The long prompt needs Claude to run a script on your computer in a connected folder, because, in his words, Wikipedia blocks the shared addresses cloud workspaces use.

## Watch out

- The only thing that passed is copy and paste of human text. Ruben calls it "obviously unethical" and says it "infringes every copyright you can imagine".
- His bottom line: you can't bypass AI detectors.
- The 50 word results are short text. Pangram itself says "too short to classify with certainty" and "Less accurate on short text" on those screens.
- Do not use this to hand in copied work as your own (school, clients, publishers).

Sources: [Ruben Hassid, How to AI, November 17, 2026](https://ruben.substack.com/p/bypass), [Pangram](https://www.pangram.com/), [Wikipedia: Kitchen](https://en.wikipedia.org/wiki/Kitchen).
