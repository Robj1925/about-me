---
title: "Claude Fable 5 Blocked by the US Government"
date: "2026-06-13"
excerpt: "At 5:21pm ET on June 12, 2026, a US export control directive forced Anthropic to switch off Claude Fable 5 and Mythos 5 for every customer. Here is what the order says and why Anthropic is pushing back."
thumbnail: "assets/images/blog-thumbnails/claude-fable-5-blocked-by-us-government.jpg"
youtubeId: "YqPS7-Ro4wo"
tags:
  - Claude
  - Anthropic
  - AI Safety
  - AI News
---

The US government just forced Anthropic to switch off Claude Fable 5 and Claude Mythos 5. Anthropic received an export control directive at 5:21pm ET on June 12, 2026, and the same day both models went dark for every customer.

## What the Order Says

The directive suspends all access to Fable 5 and Mythos 5 by any foreign national, whether inside or outside the United States. That includes Anthropic's own employees who are foreign nationals.

On paper, the order only targets foreign nationals. In Anthropic's own words, "the net effect of this order is that we must abruptly disable Fable 5 and Mythos 5 for all our customers to ensure compliance." Every other Anthropic model, including Claude Opus 4.8, stays online.

## Why the Government Acted

The letter did not give specific details of the national security concern. Anthropic's understanding is that the government believes it found a way to jailbreak Fable 5, meaning a way past the safeguards that keep the model away from cybersecurity misuse.

According to Anthropic, the government has only shared verbal evidence of a "potential narrow, non-universal jailbreak." The technique Anthropic reviewed essentially asks the model to read a specific codebase and fix any software flaws. Anthropic says it surfaced a small number of previously known, minor vulnerabilities, and that other publicly available models, including OpenAI's GPT-5.5, find the same bugs without any bypass.

## Anthropic Pushes Back

The statement is unusually direct. Before launch, Anthropic says, Fable 5's safeguards went through thousands of hours of red teaming with the US government, the UK AI Security Institute, private third-party organizations and internal teams, and no tester found a universal jailbreak. It also admits that "perfect jailbreak resistance is not currently possible for any model provider."

Its core argument: a narrow potential jailbreak should not be cause for recalling a commercial model deployed to hundreds of millions of people. "If this standard was applied across the industry, we believe it would essentially halt all new model deployments for all frontier model providers."

Anthropic is complying with the directive, but it says plainly that it disagrees with it.

## Why It Matters

If you built a product on Fable 5, it stopped working overnight, through no fault of your own. That is a real risk for anyone who depends on a single model, and a strong reason to keep a fallback model wired into your stack.

The catch is that we only have one side of the story. The government has not published its evidence, so nobody outside can judge how serious the jailbreak really is.

Update: the controls were lifted a few weeks later, and Fable 5 came back with a new safety classifier in front of it. I covered the return in [Fable 5 Got Banned for Something GPT 5.5 Can Also Do](fable-5-got-banned-for-something-gpt-5-5-can-also-do.html).

Read Anthropic's full statement: [Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access)
