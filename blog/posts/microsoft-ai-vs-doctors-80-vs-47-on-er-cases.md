---
title: "Microsoft AI vs Doctors: 80% vs 47% on ER Cases"
date: "2026-10-31"
excerpt: "Microsoft says its MAI-DxO system was 1.7 times as accurate as doctors on emergency room cases, 80% vs 47%, in a paper published in Science. Here is how it was tested and what it does not prove."
thumbnail: "assets/images/blog-thumbnails/microsoft-ai-vs-doctors-80-vs-47-on-er-cases.jpg"
youtubeId: "Tj_NlrCRGa8"
tags:
  - Microsoft
  - Medical AI
  - AI Agents
  - AI Research
  - AI News
---

Microsoft says its new AI was 1.7 times as accurate as doctors on emergency room cases. The system is called MAI-DxO, and the paper came out in Science on October 22, 2026. Every number below is Microsoft's own, so keep that in mind as you read.

## A panel of virtual doctors

MAI-DxO is not one model answering a question. Microsoft describes it as a panel of virtual physicians in one system. Each one proposes diagnoses, picks useful questions or tests, and challenges the view that is forming, until they agree.

## The test: SDBench

Microsoft built a benchmark called [SDBench](https://microsoft.github.io/sdbench). The AI and the doctors both start with very little information about a case. Then they choose which questions to ask and which tests to order, step by step, until they commit to a diagnosis.

## The numbers

- **Typical emergency cases (from MIMIC-IV-ED):** MAI-DxO got 80% right. The doctors got 47%. That is where the 1.7 times figure comes from.
- **304 hard cases from The New England Journal of Medicine:** MAI-DxO hit 83%. Doctors with textbooks and the internet hit 36%, and 22% without them.

## The cost

Microsoft also says MAI-DxO got to the right diagnosis with fewer tests and procedures, at half or even one third of the cost.

## The catch

- **These are past cases, not live patients.** It does not prove better outcomes for patients.
- **Microsoft is grading its own system.** It built the benchmark and reports the results.
- **You cannot use it.** It is a research system, not a public product.

A real hospital study comes next. Microsoft says it is partnering with Beth Israel Deaconess Medical Center in Boston on a prospective study where patients interact with the system directly. That is the result I want to see.

## Why builders should care

The interesting part for me is the design. The gain comes from orchestration: several roles, a debate, and a budget for each test. You can use the same pattern in your own agents, with or without medicine.

For another real hospital use of AI, read [surgeons used AI in real time to remove a brain tumour](/blog/surgeons-used-ai-in-real-time-to-remove-a-brain-tumour.html).

Sources: [Microsoft AI: Building medical superintelligence](https://microsoft.ai/news/building-medical-superintelligence/), [Paper in Science](https://www.science.org/doi/10.1126/science.aeh7930), [SDBench](https://microsoft.github.io/sdbench)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
