---
title: "An AI Just Marked Up This Contract Like a Senior Lawyer"
date: "2026-10-21"
excerpt: "Z.ai's GLM-Legal turns the small GLM-5.3-Flash into a legal agent that writes concrete redlines. It scores 19.2% on Harvey's Legal Agent Benchmark, 12.5 points over its base model, and Vals ranks it 7th and the cheapest in its top 10."
thumbnail: "assets/images/blog-thumbnails/an-ai-just-marked-up-this-contract-like-a-senior-lawyer.jpg"
youtubeId: "DgRwjdxQooc"
tags:
  - AI
  - AI Models
  - AI Agents
  - Benchmarks
  - News
---

The contract markup in my Short has red tracked changes and a comment column, like a senior associate went through it. A lawyer did not write it. An AI did. It is called GLM-Legal, from Z.ai, announced on October 12, 2026.

## What GLM-Legal is

GLM-Legal is built on "the lightweight GLM-5.3-Flash foundation", Z.ai's small model. Z.ai did not just add a legal system prompt. They describe three training steps.

**Step one: more legal text.** In mid training, they expanded the volume of high quality legal corpora so the model learns how facts and rules lead to conclusions.

**Step two: reinforcement learning.** In post training, the model practices "across tens of thousands of realistic legal environments": planning the analysis, moving a workflow forward, and producing real deliverables.

**Step three: legal professionals grade the output.** In a production feedback loop, legal professionals check the output against concrete criteria. Did it address every critical issue and edge case? Can the team use it without manual rework?

## Specific beats vague

This is the part that convinced me. Z.ai gives the same task to both models: fix the exit clause in a contract with an outside provider.

- **GLM-5.3-Flash** (the base model) says, in effect, "consider shortening the notice period."
- **GLM-Legal** says: reduce the convenience termination notice "from 60 to 30 days", remove the cure period for breaches of IP, confidentiality or data security so the client can terminate immediately, and add up to 90 days of transition assistance.

The first answer is advice. The second is a redline you can send to the other side. In Z.ai's demo, their AutoClaw agent then puts those edits into the Word document as tracked changes with comments. Z.ai says you will "soon" be able to use these capabilities in AutoClaw, so treat that part as a preview.

## The benchmark

On Harvey's Legal Agent Benchmark (Harvey LAB: real law firm workflows across 24 practice areas, with strict all pass grading), from Z.ai's chart:

| Model | Harvey LAB |
| --- | --- |
| GLM-Legal | 19.2% |
| Kimi K3 | 12.9% |
| Claude Fable 5 | 11.3% |
| GLM-5.3-Flash (base) | 6.7% |
| GPT-6 Astra | 5.4% |

That is 12.5 points over its own base model. 19.2% sounds low, but under all pass grading a task only counts if every criterion passes, so all models score low here.

## The independent check

The best part: Z.ai did not only grade itself. The Harvey LAB and LegalBench results were evaluated independently by Vals. Vals lists GLM-Legal at 19.17% on Harvey's benchmark, at $0.15 per test, the cheapest model in its top 10. When I checked the Vals page on October 19 it ranked number 7 of 81 models. (Vals' launch note from October 12 said 7 of 79, before more models were added.)

## The limits

- **It is a gated beta.** You apply for API access on [Z.ai's consultation page](https://z.ai/consultation/legal). There is no public price from Z.ai yet.
- **On LegalBench it is not ahead.** Z.ai's own chart shows GLM-Legal at 86.2 against 88.6 for Claude Fable 5 and 87.1 for GPT-6 Astra.
- **It does not replace a lawyer.** It produces a strong first draft. A qualified human still signs off on anything that goes to the other side.
- Z.ai's blog does not say the weights are released, and gives no parameter count, so I left those out.

Z.ai has been strong on cost lately. Their last general model fixed a real bug for a few dollars in one developer run: [GLM-5.2 fixed a bug for $3.36 in 45 minutes](/blog/glm-5-2-fixed-a-bug-for-3-36-in-45-minutes.html). GLM-Legal shows the same idea in a vertical: a small model, trained hard on one domain, beating much bigger general models on that domain.

Sources: [Z.ai: GLM-Legal announcement](https://z.ai/blog/glm-legal), [Vals AI: GLM-Legal model card](https://www.vals.ai/models/zai_glm-legal), [GLM-Legal beta application](https://z.ai/consultation/legal)

Watch the Short above to see the redline. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
