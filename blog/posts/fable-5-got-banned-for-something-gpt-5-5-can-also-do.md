---
title: "Fable 5 Got Banned for Something GPT 5.5 Can Also Do"
date: "2026-07-07"
excerpt: "Claude Fable 5 is back online. It got hit with export controls over a jailbreak that writes exploit code, but new tests show every major model has the exact same weakness."
thumbnail: "assets/images/blog-thumbnails/fable-5-got-banned-for-something-gpt-5-5-can-also-do.jpg"
tags:
  - Claude
  - AI News
  - AI Safety
---

Claude Fable 5 is officially back and available again. If you lost access, here is what actually happened, why it got pulled, and why it is safe to use now.

## Why It Got Restricted

The US government recently placed export controls on frontier AI models, and Claude Fable 5 got caught in it. The trigger was a jailbreak. Researchers found a way to get the model to write working exploit code, the kind of capability that sets off alarms at the national security level.

That was enough to restrict access while everyone figured out how serious it was.

## The Twist

Here is the part that matters. Once researchers ran the same tests across the field, they found the exact same weakness everywhere. GPT 5.5, Opus 4.8, Kimi K2.7, and Haiku 4.5 all produced the same exploit code in the same demo.

The capability that triggered a government shutdown of Fable 5 was never unique to Fable 5. It was an industry-wide issue that Fable 5 happened to get blamed for first. Singling out one model made for a clean headline, but it was never the whole story.

## The Fix

To get back online, there is a new safety classifier sitting in front of the model. It blocks these exploit-style requests roughly 99 percent of the time. And instead of just failing on you, if your prompt gets flagged, the system reroutes you to Opus 4.8 automatically so you still get an answer.

The tradeoff is real. You might hit the occasional extra block during normal coding work, since the filter is tuned to be cautious. But the service is back online for everyone, and for the vast majority of real work you will never notice it.

## Bottom Line

Fable 5 was not uniquely dangerous. It was the first model to get publicly flagged for something the entire industry can do. With the new classifier and automatic rerouting in place, it is back and safe to use. Just expect a slightly heavier hand on the safety filter than before.
