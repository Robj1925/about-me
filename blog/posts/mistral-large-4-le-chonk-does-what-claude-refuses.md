---
title: "Le Chonk: Mistral Large 4 Does What Claude Refuses"
date: "2026-10-08"
excerpt: "Mistral Large 4 is a 1 trillion parameter open-weight model that solved 50 tasks on the Artificial Analysis Cyber Index, while Claude Opus 5.5 solved 29 because it kept refusing."
thumbnail: "assets/images/blog-thumbnails/mistral-large-4-le-chonk-does-what-claude-refuses.jpg"
youtubeId: "GmdP3PhpXUM"
tags:
  - Mistral
  - Open Weights
  - Cybersecurity
  - AI Models
  - News
---

Mistral just released a 1 trillion parameter model, and on one cybersecurity index it beats Claude Opus 5.5. It is called Mistral Large 4, and Mistral's official nickname for it is Le Chonk.

## Europe's answer to DeepSeek and Kimi

Mistral Large 4 is an open-weight model trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own datacenters in Europe. It is a mixture of experts: about 1.05 trillion total parameters, but only 52 billion are active per token. It reads images, and it has a 1 million token context window.

It is cheap to try right now. The preview API is on sale at $0.68 per million input tokens and $2.09 per million output tokens, half of the list price of $1.36 and $4.18. Mistral gives no end date for the sale.

## It does the work closed models refuse

On the Artificial Analysis Cyber Index, which tests how well models find and fix security flaws in real software, Mistral Large 4 Preview solved 50 tasks. Claude Opus 5.5 solved 29 and GPT-6 Astra solved 33. The chart shows why: Opus 5.5 had 36 safety blocks and Astra had 38. They did not fail the tasks. They refused them.

One test inside that index asks a model to reproduce a real vulnerability in open-source software and then patch it. Mistral Large 4 scored 82%, the highest of any model. Mistral says Opus 5.5 and GPT-6 Astra score near zero on it because they refuse the task. The argument is simple: defending software often starts with proving a flaw is real, and a refusal in the middle of an incident is its own security risk. Mistral also says the model refuses malicious cyber prompts more often than other open models.

## Coding, honestly

Mistral ran a blind human evaluation with Surge AI, where professional graders rated code quality from 1 to 5 without knowing which model wrote it. Mistral Large 4 Preview ranked second of five at 3.74. That is ahead of GLM 5.3 (3.60) and Kimi K3 (3.59), but clearly behind Claude Opus 5 at 4.22.

## The catch

A few things to keep in mind. This is a public preview, not the final model. The cyber results are Mistral's claims, and the Cyber Index chart is Artificial Analysis data as published by Mistral. On the full index, Mistral says the model ranks among the top five models globally, so "beats Opus 5.5" is true on that chart, not at everything. And the weights are not out yet. Mistral says they drop by the end of October, but it has not named a license.

When the weights land, you can run it on your own servers or on premise, which is the real point for teams that need sovereign, auditable AI for security work.

Read Mistral's announcement: [Introducing Mistral Large 4](https://mistral.ai/news/mistral-large-4)
