---
title: "1,000 Claude Agents Formalized Fermat in 30 Hours: The Paper and All the Sources"
date: "2026-11-14"
excerpt: "Anthropic's team of 1,000 Claude Fable 5.2 agents turned the proof of Fermat's Last Theorem into Lean code in 30 hours. Here are the paper, the sources, how the run worked and its limits."
thumbnail: "assets/images/blog-thumbnails/1000-claude-agents-formalized-fermat-in-30-hours.jpg"
tags:
  - Claude
  - Anthropic
  - AI Agents
  - AI News
  - Fable 5.2
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- [Fable 5.2 launch post (Anthropic)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Fable 5.2 and Mythos 5.2 system card (the paper, section 8.14.7)](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- [How the 1,000 agents ran (claude.dev)](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/)
- [Anthropic's first Fermat formalization](https://www.anthropic.com/research/formalizing-fermats-last-theorem)
- [Proof repo on GitHub (the first, 11 day proof)](https://github.com/anthropics/fermats-last-theorem)
- [Operating system demo video (Anthropic)](https://www.youtube.com/watch?v=vVy0BRouX6E)
- [What is Fermat's Last Theorem? (Anthropic)](https://www.youtube.com/watch?v=1BSFyEIY2BY)

## How it works

**The first try.** Anthropic's first formalization took 11 days. It used a purpose built harness and guidance from a human researcher.

**The 30 hour run.** A team of 1,000 Fable 5.2 agents formalized the theorem in Lean, a language a computer can check, in 30 hours. The team had one lead and 999 helpers. Anthropic says they "built their own ways to coordinate". The run used an early version of Fable 5.2.

**What the agents got.** They did not start from zero. Footnote 4 of the launch post says they got a list of 60 statements, a one sentence sketch of the classical route, the definitions those statements use, and 47 proved lemmas from the first formalization.

**The result.** The new proof is seven times shorter, and the run used one third as many action tokens as the first formalization.

**Opus 5.5 on the same setup.** Opus 5.5 completed only 26% of the formalization in 18 hours. At 30 hours, the chart shows 27%. Each model got one run.

**The operating system.** One Anthropic engineer gave Fable 5.2 an empty folder and asked for a prototype operating system. Over 1,000 subagents worked around the clock for eight days. The result boots on a laptop, with disk, keyboard and network drivers, file storage, windows, a login screen and an installer.

**Remote Labor Index.** This test has 240 real freelance projects, judged by humans. Fable 5.2 did at least as well as the human professional on 41.3% of them (99 of 240). Opus 5.5 scored 21.3%, GPT-6 Astra 20.8% and Fable 5.1 17.9%.

## Who can use it

Fable 5.2 is on all paid Claude plans and on the Claude Platform as `claude-fable-5-2`. On Max, it is included. On Pro and standard Team seats, Fable can use up to 50% of the weekly limits until Nov 16.

The 1,000 agent runs and the OS run are Anthropic's internal experiments. You cannot repeat them with a normal plan. The proof repo is public under Apache 2.0, but it holds the first, 11 day proof, not the 30 hour one.

## Watch out

- **Formalized, not solved.** Andrew Wiles proved Fermat's Last Theorem in the 1990s. The agents turned that proof into code a computer can check.
- **The agents had a head start.** The 60 statements and 47 proved lemmas came from the first run.
- **One run per model.** The race was restarted from a save at hour 18, and each model ran only once.
- **The OS is a prototype.** It was one engineer's experiment.
- **41.3% is a share of projects.** It means Fable 5.2 matched or beat the professional on 41.3% of the 240 projects, not that it did 41.3% of all the work.

Sources: [Anthropic: Claude Fable and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Fable 5.2 and Mythos 5.2 system card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card), [claude.dev: Safely scaling multi agent teams with Fable 5.2](https://claude.dev/blog/safely-scaling-multi-agent-teams-with-fable-5-2/), [Anthropic: Formalizing Fermat's Last Theorem](https://www.anthropic.com/research/formalizing-fermats-last-theorem), [anthropics/fermats-last-theorem](https://github.com/anthropics/fermats-last-theorem) and [Claude help center: Fable 5.2 launch offers](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers)
