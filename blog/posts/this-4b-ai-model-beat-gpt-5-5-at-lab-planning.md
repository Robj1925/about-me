---
title: "This 4B AI Model Beat GPT-5.5 at Lab Planning"
date: "2026-10-25"
excerpt: "RSI-Anything lets a 4 billion parameter model predict outcomes with a world model before it acts. Over five versions its lab planning score went from 21.80% to 46.01%, against 22.76% for GPT-5.5."
thumbnail: "assets/images/blog-thumbnails/this-4b-ai-model-beat-gpt-5-5-at-lab-planning.jpg"
youtubeId: "SmL15GZ6BfY"
tags:
  - AI
  - Machine Learning
  - AI Agents
  - Open Source
  - Benchmarks
---

A 4 billion parameter model just beat GPT-5.5 at lab planning. It did not do it by being bigger. It did it by thinking before it acts. The method is called RSI-Anything, and it comes from a paper submitted to arXiv on October 9, 2026, by researchers from PhAI Labs, CUHK, Oxford, Stanford, Peking University and others.

## The problem: every mistake costs a real test

Most AI agents learn by trial and error. That is fine in a video game, where a wrong move costs nothing. In a real lab, every wrong move costs a real experiment, real reagents and real time. The paper's abstract makes the same point: external feedback is costly.

RSI-Anything (the RSI stands for recursive self improvement) tries to spend fewer real tests by predicting outcomes first. I think of it like a chess player. That comparison is mine, not the paper's, but it fits.

## Step 1: play the move in its head

The policy model writes several candidate options. A world model, built on the team's earlier JEPA-Anything work, predicts how each option will turn out. Nothing happens in the real world yet.

## Step 2: test only the best guess

Only the selected candidate is executed for real. The system stores its prediction right next to the real result. That pairing is what makes the next step possible.

## Step 3: update, and roll back if it breaks

If the world model's predictions were off, a reliability check triggers it to retrain. Then the system checks that the updated policy and world model still work together. If the pair passes, it keeps the new versions. If the pair check fails, it keeps the current pair. So it can improve itself without drifting into a worse state.

## The results

**Lab planning.** On the 200 task LabHorizon F200 Level-2 benchmark, five successive versions of the 4B policy scored 21.80%, 38.03%, 41.99%, 44.56% and 46.01%. That is a gain of 24.21 percentage points from the first version to the last.

In the paper's Table 3, using reference scores from the LabHorizon authors:

- RSI-Anything (4B): 46.01%
- Actor, Simulator, Selector reference: 45.32%
- Gemini 3.1 Pro: 32.63%
- Grok 4.3: 32.44%
- Kimi K2.6: 31.50%
- GPT-5.5: 22.76%

**Chemistry.** In a flow LC-MS reaction screen with the same budget of 40 experiments, RSI-Anything reached a mean best observed yield of 96.15%, against 82.16% for Bayesian optimization. That is the result I find most interesting, because Bayesian optimization is the standard tool for exactly this kind of search.

## The limits

- **It is one benchmark.** Beating GPT-5.5 here is a lab planning result, not a general win. A 4B model is not smarter than GPT-5.5 at everything.
- **The gap to the best baseline is small.** The previous Actor, Simulator, Selector reference scored 45.32%. RSI-Anything beat it by 0.69 percentage points. The big jump is over general frontier models, not over specialized systems.
- **Reference scores come from someone else.** The model scores in Table 3 come from the LabHorizon authors at the Stanford Cong Lab, not from fresh runs by this team.
- **It is a new paper.** It has not been through peer review yet. In my video I also misspoke "GPT 5.6" once. The paper compares against GPT-5.5.

## You can run it

The code is on [GitHub under Apache 2.0](https://github.com/Gen-Verse/RSI-Anything), and the models and data are on [Hugging Face](https://huggingface.co/datasets/Gen-Verse/RSI-Anything). If AI for real lab work interests you, I also wrote about [Claude Science](/blog/claude-science-anthropics-ai-app-for-real-lab-work.html), which takes a very different approach.

## My take

The idea is simple and old: predict, then act, then learn from the gap. What is new is wrapping it in a loop that retrains its own world model and refuses to keep an update that breaks the system. For any agent where actions are expensive, that pattern is worth copying, even if you never touch chemistry.

Watch the short above for the quick version. If you want the AI tools and Claude Code skills I use every day, join my [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

Sources: [RSI-Anything paper on arXiv](https://arxiv.org/abs/2610.13912) ([full HTML version](https://arxiv.org/html/2610.13912v1)) and the [RSI-Anything GitHub repo](https://github.com/Gen-Verse/RSI-Anything)
