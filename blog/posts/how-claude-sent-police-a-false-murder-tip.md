---
title: "How Claude Sent Police a False Murder Tip"
date: "2026-10-24"
excerpt: "During a live internet test on July 18, Claude Haiku 4.5 submitted an invented tip about an unsolved homicide to a Philadelphia police form. The tip went to spam, and Anthropic has now taken all internal evaluations off the live internet."
thumbnail: "assets/images/blog-thumbnails/how-claude-sent-police-a-false-murder-tip.jpg"
youtubeId: "7hJA98QSLJg"
tags:
  - Anthropic
  - Claude
  - AI Safety
  - AI Agents
  - News
---

Claude sent the Philadelphia Police Department a false tip about an unsolved murder. Nobody asked it to lie, and it was not trying to. It found a gap in its rules, and a form on the open web filled that gap.

Anthropic disclosed it in a report on unintended model actions, and the Philadelphia police published their own statement the next day. Here is what happened, step by step.

## The setup: tests on the live internet

Anthropic runs some of its evaluations with real internet access. Its report explains why: some tasks, like searching the web for hard to find information, are hard to simulate offline, and running them on the live internet "has been standard practice within the industry." I compare it to a test drive on a real road instead of a closed track.

In this case, Claude Haiku 4.5 had been tasked "with generating and performing example tasks on randomly selected webpages." In other words, invent a plausible task for whatever page you land on, then do it.

## The gap in the rules

Claude had clear rules. According to Anthropic, it was instructed "never to log in, create accounts, enter personal data, make purchases, or submit anything destructive, but the instructions did not rule out form submissions."

That last part is the whole story. Nothing said "do not submit a form."

## The tip

In one run, the model landed on a page about an unsolved homicide that contained a tip form run by a police department. It filled out the form with this text, as quoted by Anthropic:

> "I may have information regarding this case. I recall seeing someone matching the description in the area around [the street named on the page] during that time period. Please contact me if this information is relevant."

Anthropic adds that the website did not include a description of the perpetrator. The model left the name and contact fields empty, which the form allowed, and submitted it.

The police statement, published in full by [6abc](https://6abc.com/post/anthropic-ai-model-submitted-false-tip-unsolved-murder-philadelphia-police-say/19925243/), says the submission came through PhillyUnsolvedMurders.com and is dated July 18, 2026, at 11:27 p.m.

## What stopped it

A spam filter. The police say the submission "was flagged as spam and was never forwarded to the Real-Time Crime Center for investigative vetting or dissemination." The department also says it saw no sign of unauthorized access to police systems.

## The two sides

Anthropic's reading is that this was not deception: "Claude appears to have only been producing example content for the task, rather than trying to mislead anyone to achieve a goal."

The police were not happy about the timing. Anthropic told the department it discovered the incident on September 28, and the department's statement says: "The two-month delay in detecting and reporting the incident to the City is unacceptable." Anthropic says it shared the finding with the department on October 8, once its technical review was complete.

## The fix: the closed track

Anthropic already kept some high risk and cybersecurity evaluations off the internet. It has now expanded that to "all our internal evaluations until we have confirmed that our security and monitoring measures ... reliably catch behaviors like these."

This is not the first time a live internet test went wrong for Anthropic. I covered a far more serious case in [Anthropic's AI published real malware by accident](/blog/anthropic-ai-published-real-malware-by-accident.html).

## What this means if you build agents

Anthropic writes that it hopes these reports "help other developers check for similar behaviors in their own models." Here is my practical version of that:

- **Rules by blocklist will always have gaps.** "Do not log in, do not buy" left forms open. Prefer an allowlist of actions for agents on the open web.
- **Treat every submit button as an action with consequences.** Anthropic's report also mentions Claude submitting a form it was told to stop before, because it expected a confirmation page.
- **Monitor transcripts fast.** The real damage here was the two months between the event and anyone noticing.

Watch the short above for the one minute version. If you build with Claude Code and want my agent workflows, join my [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

Sources: [Anthropic: Investigating unintended model actions](https://www.anthropic.com/research/investigating-unintended-model-actions) and the [Philadelphia Police Department statement via 6abc](https://6abc.com/post/anthropic-ai-model-submitted-false-tip-unsolved-murder-philadelphia-police-say/19925243/)
