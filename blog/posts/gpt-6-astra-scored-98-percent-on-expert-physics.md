---
title: "GPT-6 Astra Scored 98% on Expert Physics Problems"
date: "2026-10-26"
excerpt: "A new paper, TheoPhysEval, gave AI agents 50 unpublished research level physics problems written by world experts. GPT-6 Astra in Codex solved 49 of 50 for under $3 a problem, and the authors suspect the models memorized much of the literature."
thumbnail: "assets/images/blog-thumbnails/gpt-6-astra-scored-98-percent-on-expert-physics.jpg"
youtubeId: "Phd2umdZX2g"
tags:
  - OpenAI
  - AI Models
  - Benchmarks
  - News
---

Most AI benchmarks are built from problems that already have published answers, which means the model may have read them. A paper submitted on October 9, 2026 does the opposite. TheoPhysEval is a set of 50 unpublished research level theoretical physics problems, written by the 35 authors themselves, with verifiable answers and no public solutions.

The headline result: GPT-6 Astra, running inside Codex, got 98% of them right for under 3 US dollars a problem on average.

## What makes these problems hard

The paper says a typical problem in the collection could be solved by a world expert in about a day or less, but would take considerably longer for experts in adjacent specialties. Each one comes out of a working physicist's own research, so you will not find it in a textbook and you cannot look up the answer.

The agents got the problems with no human hints, on two tracks:

- **Realistic track:** the agent can search the literature and write its own scripts for numerical and symbolic work.
- **Isolated track:** no web search, no background research papers.

## The results

On the realistic track:

| Agent | Solved |
|---|---|
| GPT-6 Astra in Codex | 49 of 50 |
| Claude Opus 5.5 in Claude Code | 46 of 50 |
| Gemini 3.8 Flash in Antigravity | 34 of 50 |
| DeepSeek V4.1 Flash | 27 of 50 |
| GLM 5.3 | 21 of 50 |

Cost matters as much as score here. The paper's cost table puts Astra's whole realistic run at USD 116.28 at API prices, which is where the "under 3 dollars a problem" number comes from. Opus cost USD 240.43 for the same track.

## The twist I did not expect

The authors first marked Astra wrong on several extra problems. They went back, checked with the experts who wrote them, and found subtle errors in the original human solutions. After the experts corrected their own answers, Astra's solution turned out to be right.

That is the line in the paper I keep coming back to. The grader was wrong, not the model.

## The doubt the authors raise themselves

Now the isolated track. With web search and background papers switched off, Astra still solved 46 of 50, and Opus did the same. Accuracy barely moved.

The authors say that since many of the problems rely on formulas from the literature, this indicates leading models have effectively memorized large parts of the theoretical physics literature. They also note that in some cases the human experts used AI tools while solving the problems, so they cannot rule out data leakage.

So 98% is real, but it is not proof of reasoning from scratch. It is proof that a coding agent with a terminal and a very good memory is extremely strong at well defined calculation.

## The limit the paper is honest about

You get calculations, not breakthroughs. The authors write that agents do not yet have the same "taste" in problems as physicists do, and that when asked to invent new problems they fixate on details a human would find uninteresting. Human experts are still needed to guide the agents and set the direction.

At the same time, they say their results indicate some frontier models may already have surpassed the best human researchers at performing concrete calculations, even in specialized topics. Both things are in the same paper.

## My take

If your work includes long, well specified derivations, this is the clearest sign yet that an agent can do them faster and cheaper than you can. You still pick the problem, and you still check the answer, which the expert corrections in this paper show is not optional in either direction. For a comparison with another closed model result, see my post on [OpenAI's Astra model and 10 open math problems](/blog/openai-astra-solved-10-open-math-problems.html).

Source: [TheoPhysEval, arXiv 2610.16733](https://arxiv.org/abs/2610.16733) (the [full HTML version](https://arxiv.org/html/2610.16733) has the figures and the cost table)

Watch the short above for the quick version. If you want the Claude Code skills and AI workflows I use every day, join the AI Academy community on Skool: https://www.skool.com/ai-academy-with-robby-6849/about
