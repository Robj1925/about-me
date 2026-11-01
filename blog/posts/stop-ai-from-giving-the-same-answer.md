---
title: "Stop AI From Giving the Same Answer"
date: "2026-10-23"
excerpt: "Ask ChatGPT, Claude and Gemini to pick a number from 1 to 10 and you tend to get 7. A prompting method from a Stanford and Northeastern paper, Verbalized Sampling, gets you a real spread, and it measured 1.6 to 2.1 times more variety in creative writing."
thumbnail: "assets/images/blog-thumbnails/stop-ai-from-giving-the-same-answer.jpg"
youtubeId: "hj6eirnuS60"
tags:
  - AI
  - ChatGPT
  - Claude
  - Gemini
  - Tech Explained
---

I asked ChatGPT, Claude and Gemini to pick a number from 1 to 10. In my test, all three said 7. Your results can change with the model and its settings, so try it yourself before you treat it as a law. But the pattern behind it is real, it has a name, and one prompt from a research paper fixes it.

## People do this too

This is not an AI quirk first. It is a human one.

In a 1976 study, Michael Kubovy and Joseph Psotka asked 558 people to give the first number between 0 and 9 that came to mind. A predominant 28.4% chose 7. Their explanation is that people pick the answer that will seem spontaneous: they avoid the ends of the range and the round numbers, and 7 is what is left.

## Why the models make it worse

The paper to read is [Verbalized Sampling](https://arxiv.org/abs/2510.01171) (arXiv 2510.01171). Its argument is that the flattening does not come mainly from the algorithms. It comes from the data used to align models after training.

The abstract calls it typicality bias: the annotators who rate answers systematically favor familiar text. The model learns from those ratings, so it learns to hand you its most typical answer every time. The name for the result is **mode collapse**.

That is why your AI drafts feel interchangeable, and why three different chatbots can sound like the same person.

## The fix: ask for a distribution

Verbalized Sampling is a training free prompting strategy. Instead of asking for one answer, you ask the model to verbalize a set of answers with the probability it would give each one.

Here is the version I used on camera:

```text
Give me 5 different numbers between 1 and 10. For each one, write the
probability that another AI would pick it (0 to 100%). Order them from
most likely to least likely. The last 2 must have a probability under 10%.
Just the 5 lines and the %.
```

Same three chats, new prompt, and now you see four other numbers next to the 7, each with its odds. You are choosing from a spread instead of taking the default.

Swap "numbers between 1 and 10" for taglines, titles, names, story openings or test data. It works in any chat app. No plugin, no setup.

## The measured proof

The paper's cleanest demonstration is a dice roll. The researchers asked models to simulate rolling a fair six sided die, 600 times.

With direct prompting, Gemini 2.5 Pro collapsed onto a single face: it rolled a 4 **297** times out of 600, and a 1 exactly zero times. A fair die would land near 100 per face. With Verbalized Sampling, the same model spread out: every face landed between 70 and 120.

On creative writing, the paper reports that Verbalized Sampling increases diversity by 1.6 to 2.1 times over direct prompting, without sacrificing factual accuracy and safety. The authors also note an emergent trend that more capable models benefit more from it.

## The limit

Rarer is not better. A low probability tagline can simply be a worse tagline. What changes is that you get to pick from a real range instead of accepting the one safe answer, and the judgment stays with you.

## My take

This is the cheapest prompt upgrade I know. It costs you four lines and it works on every model you already pay for. I now use it any time I want options rather than an answer: titles, hooks, names, variations. If you want more prompting fundamentals, my post on [how ChatGPT actually reads your text](/blog/how-chatgpt-actually-reads-tokenization-explained.html) covers what happens before the model ever picks a word.

Sources: [Verbalized Sampling (arXiv 2510.01171)](https://arxiv.org/abs/2510.01171) and [Kubovy and Psotka, 1976 (PDF)](https://gwern.net/doc/psychology/cognitive-bias/1976-kubovy.pdf)

Watch the short above to see all three chatbots answer 7. If you want the Claude Code skills and AI workflows I use every day, join the AI Academy community on Skool: https://www.skool.com/ai-academy-with-robby-6849/about
