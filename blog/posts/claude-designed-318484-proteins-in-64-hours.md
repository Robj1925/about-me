---
title: "Claude Designed 318,484 Proteins in 64 Hours"
date: "2026-10-26"
excerpt: "Working inside Claude Science, an internal Anthropic research model generated 318,484 protein designs against scorpion neurotoxins and picked 180 in 64 hours. Of 211 designs tested in two labs, 17 met the binding criteria, and all 211 are public on Hugging Face."
thumbnail: "assets/images/blog-thumbnails/claude-designed-318484-proteins-in-64-hours.jpg"
youtubeId: "x-JIwXsHyUI"
tags:
  - Claude
  - Anthropic
  - AI Agents
  - News
---

On October 20, 2026, Anthropic published a design campaign where Claude generated 318,484 proteins meant to grab scorpion venom toxins. 17 of them bound a real toxin in a real lab. Anthropic released all 211 tested designs and their lab data, so you can check every number yourself.

## The problem it goes after

Scorpions sting 1.2 million people or more every year, and Anthropic's page cites more than 3,250 deaths, mostly children in places with limited access to medical care.

The antivenoms that exist today are made the old way. Venom is milked from thousands of scorpions and used to immunize horses, then scientists purify the antibodies from the horses' blood. Anthropic's page says that process can take months, and the result usually works against only a small number of neurotoxins.

A **binder** is a small protein made to attach tightly to one spot on a target. Think of it as a cap made for the exact spot where the toxin grabs the sodium channels in your nerves. If the cap is on, the toxin cannot reach the channel. That is the hope, anyway.

## How the campaign ran

The work ran inside [Claude Science](/blog/claude-science-anthropics-ai-app-for-real-lab-work.html) with an internal research model, from one prompt and four follow ups. The team picked five neurotoxins from four regions: Cn2 (Mexico), Ts1 (Brazil), AaH I and AaH II (North Africa) and LqhIII (the Middle East).

What Claude decided on its own:

- It picked the toxin structures by searching the Protein Data Bank and the AlphaFold database.
- It chose five hotspots per toxin, the exact positions its binders should latch onto.
- It set the quality thresholds and decided how much to lean on each tool.

Then the numbers:

1. Claude used **12 design tools** to generate **318,484 designs**, filtering out anything that looked like a toxin or a known protein.
2. It co folded and screened **553,052 design and toxin pairs**.
3. **64 hours** after the first prompt, it handed back its final list of **180 designs**.
4. The team added **31 more** with Claude's help, so **211** went to the lab.

The campaign used on the order of 10,000 GPU hours.

## What the labs found

Two contract labs you can look up, Adaptyv Bio and Twist Bioscience, tested all 211. The bar was strict: a design had to show binding at both labs in every replicate, with a KD of 1 µM or tighter, and no signal against an unrelated human protein.

**17 met the criteria.** Seven bind Cn2, four bind AaH II, four bind AaH I and two bind LqhIII. None bound Ts1. The two strongest, Cn2-B1 and Cn2-B2, bound Cn2 with single digit nanomolar affinity at both labs.

## What this is not

Anthropic is clear here, and so am I:

- **These are binders, not an antivenom.** Nobody tested whether they neutralize venom in cells or in animals.
- **The toxins were recombinant,** not venom taken from a scorpion.
- **No cocktail.** The team also asked for designs that hit two or more toxins at once. None of those 151 multi toxin designs bound more than one.
- **You cannot run this yourself.** It used an internal research model, not the Claude you open in your browser, plus about 10,000 GPU hours.

## What you can use

All 211 designs are on [Hugging Face](https://huggingface.co/datasets/Anthropic/scorpion-toxin-binder-design) under CC BY 4.0: the sequences, the predicted structures, the scores and the lab data. If you work in protein design, that is a real dataset of hits and misses, which is rarer than it should be.

## My take

The headline number is 318,484, but the number to keep is 17. Going from a prompt to lab tested binders in days is the real change, and the honest limits make this easier to trust, not harder. As one of the outside experts put it, binding is no longer the main bottleneck. Turning binders into safe, cheap drugs still is.

Sources: [Anthropic's write up](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design), [the technical report (PDF)](https://www-cdn.anthropic.com/31ac578806cffd8b3d92d8affe6edc4c04d502e1.pdf) and [the public dataset](https://huggingface.co/datasets/Anthropic/scorpion-toxin-binder-design)

Watch the short above for the quick version. If you want the Claude Code skills and automations I use every day, join the AI Academy community on Skool: https://www.skool.com/ai-academy-with-robby-6849/about
