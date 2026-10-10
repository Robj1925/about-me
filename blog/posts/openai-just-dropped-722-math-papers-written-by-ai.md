---
title: "OpenAI Just Dropped 722 Math Papers Written by AI"
date: "2026-10-09"
excerpt: "OpenAI published 722 math manuscripts from a model you cannot use yet, including a claim that the irrationality exponent of pi is exactly 2. Lean checks 162 of them. Mathematicians are not sold."
thumbnail: "assets/images/blog-thumbnails/openai-just-dropped-722-math-papers-written-by-ai.jpg"
youtubeId: "AaLjWWyiJVA"
tags:
  - OpenAI
  - AI Research
  - Mathematics
  - Lean
  - News
---

OpenAI just published 722 math papers, all written by an AI model that the public cannot use yet. They are on GitHub, and they raise a question that matters more than the number: how do you trust a proof that no human wrote?

## What OpenAI released

The repository, openai/math, holds 722 manuscripts covering 372 families of results. OpenAI says it gave its unreleased model about 4,000 open research problems, and that each result took roughly three hours of ChatGPT Pro thinking. The release came out on October 6, 2026.

## The headline result: pi

One paper claims that the irrationality exponent of pi is exactly 2. In plain English, that number measures how closely fractions can sneak up on pi. The best proven bound was about 7.1. The model says the true value is 2, the lowest it can possibly be. Two is the floor because every irrational number has an exponent of at least 2.

If the proof holds, that is a large jump from the best human result.

## You do not have to take their word for it

This is the interesting part. For 162 of the papers, the main result is written in Lean, a language where a computer checks every step of the proof. A proof assistant does not care who wrote the argument. It accepts it or it does not.

OpenAI also published summaries of the model's reasoning for 10 of the results, so outsiders can see how it got there.

Two limits to keep in mind. A Lean formalization covers the main statement the authors chose, not every claim in the paper. And the other 560 papers are not formalized. OpenAI's own README says: "Some of the unformalized results could have issues."

## The catch: mathematicians are not celebrating

Reactions from working mathematicians were cautious. NYU's Tristan Buckmaster said of OpenAI: "I don't think they've done their sort of due diligence at all." MIT's Andrew Sutherland said claims from a single AI system should be treated as unverified until others can run the model themselves.

The core problem is access. Nobody outside OpenAI can reproduce how these papers were produced, because the model is not released.

## What to watch next

Expect two things in the coming weeks: independent mathematicians checking the headline results, and more Lean formalizations of the rest. If the pi result survives both, it will matter. If it does not, the Lean count of 162 shows the right way to publish AI math: with a checkable proof attached.

You can read the papers and inspect the Lean files yourself in the [openai/math repository on GitHub](https://github.com/openai/math).
