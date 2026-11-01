---
title: "The Secret to Infinite AI Improvement"
date: "2026-10-20"
excerpt: "Sakana AI and UC Berkeley's MASS turns one model, Qwen3.6-27B, into its own team and then trains it on its best team runs. After two rounds it delegates work in 87 of 110 runs instead of 1, and beats the original model in 69.9% of matchups on unseen tasks."
thumbnail: "assets/images/blog-thumbnails/the-secret-to-infinite-ai-improvement.jpg"
youtubeId: "fIFtQcy0n7g"
tags:
  - AI
  - Machine Learning
  - AI Agents
  - Open Source
  - Tech Explained
---

Picture a student who writes their own test, takes it, and grades it. You would never trust that grade. That is the core problem when you let an AI model improve itself: the same model that makes a mistake is the one judging it, and the paper notes that self feedback "can reinforce rather than correct errors."

Sakana AI and UC Berkeley tried a different setup. In a paper called [Recursive Self-Improvement through Multi-Agent Self-Supervision](https://arxiv.org/abs/2610.12176) (MASS), they turn a single model, Qwen3.6-27B, into a team of copies of itself, and then train it on the team's best work.

## Step one: one model becomes a team

All the roles are played by the same model:

- **The orchestrator.** One copy is the boss. It writes a plan, called a workflow, that splits the task across helper copies (subagents).
- **The contracts.** The written plan says what each helper must hand back, its output contract, and in what order the helpers run. In the finance tasks, for example, a contract checks that no future data leaks into the analysis.
- **The evaluator.** Another copy grades the finished work against the best result so far.
- **The optimizer.** A third copy rewrites the plan based on what the grading found.

That inner loop repeats, and the best plan so far stays the "champion".

## Step two: the recursive part

Here is where it gets recursive. The system runs the winning plan 18 times per task, ranks the results, and keeps up to the 16 best runs. Then it deletes the plan text from those runs and fine tunes the model on them (with LoRA).

The point of deleting the plan: the next version of the model has to produce that teamwork on its own, from the bare task, without being told how.

## The results

**It learns to build a team without being asked.** Given only a bare task prompt, the base model split up the work (called a subagent successfully) in 1 of 110 runs. After one round it was 48 of 110. After two rounds, 87 of 110.

**Its grading gets better too.** The team was trained only on task solving runs, yet its agreement with outside judges (GPT-5.5 and Claude Opus 4.8 at maximum reasoning effort) rose from 0.73 to 0.91 to 0.93.

**It beats the original model.** On three test tasks held out from training, the round two model won 69.9% of head to head matchups against the base model, judged by those same outside models. After one round it was 53.9%.

So the student did not need a smarter teacher. It needed classmates.

## The honest limits

- **Coding did not improve.** On Terminal-Bench 2.0 raw scores went from 37.5 to 35.2, and on SWE-bench Verified from 62.6 to 61.1. The gains are on the paper's research tasks (finance, robotics and pharmacy), not on coding benchmarks.
- **The test set is small.** Twelve synthetic tasks in total, with three (one per domain) held out for testing. 69.9% is a real gain, but on a narrow set.
- **Outside judges are still frontier models.** The final scoring uses GPT-5.5 and Claude Opus 4.8. The training loop itself needs no bigger teacher, but the report card still comes from one.
- "Infinite improvement" is my hook, not the paper's claim. They ran two rounds. Whether it keeps climbing after round three is an open question.

## Try it

The code is on GitHub at [SakanaAI/mass](https://github.com/SakanaAI/mass), and Sakana has an interactive write up at [pub.sakana.ai/mass](https://pub.sakana.ai/mass/). Note that the paper link in my YouTube description points to the wrong arXiv number. The correct paper is [arXiv 2610.12176](https://arxiv.org/abs/2610.12176).

Sakana has a habit of getting more out of models through structure instead of size. Their Fugu system did it by orchestrating several frontier models: see [Sakana Fugu beats Claude, GPT-5 and Gemini](/blog/sakana-fugu-beats-claude-gpt-5-and-gemini-on-every-benchmark.html).

Sources: [arXiv paper](https://arxiv.org/abs/2610.12176), [Sakana AI: MASS](https://pub.sakana.ai/mass/), [GitHub: SakanaAI/mass](https://github.com/SakanaAI/mass)

Watch the Short above for the whole idea in a minute. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
