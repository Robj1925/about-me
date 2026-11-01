---
title: "Meta's New AI Remembers Your Habits and Runs Errands"
date: "2026-10-22"
excerpt: "Meta's Muse Wonder combines Active Memory and Active Focus: it plans around your real habits and keeps working on a task until it is done. It scores 85.6% on Meta's internal MemoryBench and is in Muse Code from $5 a month."
thumbnail: "assets/images/blog-thumbnails/metas-new-ai-remembers-your-habits-and-runs-errands.jpg"
youtubeId: "YPx84-G_US4"
tags:
  - AI
  - AI Models
  - AI Agents
  - News
---

An assistant is only as good as what it remembers about you. Most assistants forget you the moment a chat ends, so you explain your life again every time. On October 12, 2026, Meta announced Muse Wonder, a model built to fix that. Meta describes it in one line: "Muse Wonder brings together Active Memory and Active Focus."

## Active Memory: it plans around your real habits

Meta defines Active Memory as carrying important context about you across conversations and actively retrieving the details that matter for the task at hand.

Their demo makes it concrete. The user asks Muse Wonder to plan next Saturday's run, using the habits in their calendar and health app. The model reads both and finds three patterns:

- The long run grows by 1 km each week.
- The routes stay flat to protect a knee.
- Saturdays end at the library by 10 AM.

So it plans a flat 15.1 km run with an 8:00 AM start, and maps a marker every 5 km with a link you can share. Nobody typed "my knee hurts" into that chat. The model found it in the history. That is the difference between a generic running plan and one that fits you.

## Active Focus: it does not quit halfway

Remembering is only half of it. The other half is Active Focus: the model keeps working toward the goal, tries other approaches when one fails, and works through blockers.

In the second demo, the user sends a photo of an urgent care bill plus the front and back of their insurance card. Muse Wonder finds the billing error and drafts a call script for the billing department. The user says they cannot call. So the model writes the dispute email and sends it. In the last step of the demo, the billing department submits the claim to insurance.

That is the part I care about most. Plenty of assistants can tell you what to do. Far fewer finish the errand when your first plan does not work.

## The numbers

On MemoryBench, Meta's internal test of how well a model remembers and uses your context over a long history:

| Model | MemoryBench |
| --- | --- |
| Muse Wonder (max) | 85.6% |
| Muse Wonder Full (max) | 85.5% |
| Claude Opus 5.5 (max) | 81.5% |
| GPT-6 Astra (max) | 81.4% |
| Claude Fable 5.1 (max) | 79.0% |

On FocusBench, also internal, Muse Wonder Full scores 54.2% against 47.7% for GPT-6 Astra. Note that the regular Muse Wonder scores 44.9% there, below Claude Opus 5.5 at 45.8%. So the "Full" version is the one that earns the Focus half of the pitch.

Both benchmarks are Meta's own. On the independent Artificial Analysis Intelligence Index from the same day, Claude Opus 5.5 scores 58, Muse Wonder Full 56 and Muse Wonder 52. So Meta leads on its own memory test, not on general intelligence. If you want the full picture on Opus 5.5, I wrote about [why everyone is talking about it](/blog/why-everyone-is-talking-about-claude-opus-5-5.html).

## Price and access

Muse Wonder is available through the Meta Model API and in Muse Code. The Muse Code Everyday Usage plan costs $5.00 a month and includes Muse Spark, Muse Wonder and Muse Image. Muse Wonder Full needs the Power Usage plan at $50.00 a month. If you missed the Muse Code launch, here is my post on [Meta's own Claude Code](/blog/meta-just-dropped-its-own-claude-code.html).

## The catch

- Every demo here is Meta's own curated clip. Real calendars and health logs are messier.
- An AI that sends emails for you about your medical bills needs a lot of access to your private data. Decide what you are comfortable sharing before you connect it.
- MemoryBench and FocusBench are internal benchmarks, so wait for independent tests before you treat the numbers as settled.

## My take

Memory plus follow through is the right pair. An assistant that remembers you but stops at a to do list is a note app. An assistant that finishes tasks but forgets you is a generic agent. Muse Wonder is Meta's bet that you need both, and at $5 a month it is a cheap thing to test on your own errands.

Sources: [Meta: Muse Wonder announcement](https://research.meta.ai/blog/muse-wonder) and [Muse Code pricing](https://dev.meta.ai/products/muse-code)

Watch the Short above for the demos in 60 seconds. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
