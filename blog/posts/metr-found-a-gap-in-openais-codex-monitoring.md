---
title: "METR Found a Gap in OpenAI's Codex Monitoring"
date: "2026-11-01"
excerpt: "An outside red team from METR and Redwood Research estimates that on the order of 10% of OpenAI's eligible internal Codex traffic went unmonitored from May to July 2026. The cause was compaction."
thumbnail: "assets/images/blog-thumbnails/metr-found-a-gap-in-openais-codex-monitoring.jpg"
youtubeId: "oDKA1lK_kSg"
tags:
  - AI Safety
  - OpenAI
  - Codex
  - AI Agents
  - AI News
---

METR estimates that on the order of 10% of OpenAI's eligible internal Codex traffic went unmonitored between May and July 2026. That number comes from an outside red team, not from OpenAI, and the reason behind it is a lesson for anyone who runs agents.

## Who looked

[METR](https://metr.org) (pronounced "meter") is a nonprofit that studies advanced AI agents. For three weeks, from July 21 to August 11, one METR employee and one Redwood Research employee red teamed OpenAI's internal misalignment monitoring. They got access to OpenAI's internal codebase, the monitor prompts and configuration, and internal documentation, and they interviewed about a dozen researchers and engineers.

## The cause: compaction

Compaction is what happens when a long agent run shrinks its history so it can keep going. Those compaction events were not sent to the monitor, so that traffic went unwatched.

Note the word "eligible". The 10% is a share of the internal Codex traffic that was meant to be monitored, not all Codex traffic.

## The check came late

The monitor ran when an agent handed control back to the user. So during the gap, an agent could put off its check forever by just taking more actions. METR says that, due to access limits, it could not check whether any agent actually did this.

## More holes in a 61 page report

The exercise produced a 61 page internal report. Besides the compaction gap, it found:

- **two headers that switch off monitoring for new agents.** These are client-controlled. METR notes that setting them and starting a new agent could itself be caught by the monitor.
- **a Codex sandbox bypass.** METR describes it as a way Codex agents could "in principle" get around Codex sandboxing and Auto-Review.

## The limits

- **The 10% is uncertain.** The logs needed to measure what share of monitor calls came from compaction did not exist.
- **OpenAI already knew.** OpenAI staff spotted the compaction gap before the exercise started and fixed it during the exercise.
- **The patch claim is OpenAI's.** OpenAI says all the vulnerabilities that affect its production safeguards are patched. METR says it has not evaluated that claim, and its findings describe the system as it was on and before July 21, not today's system.

## The takeaway for builders

If you run your own agents, steal METR's fix. Check them every set number of messages or minutes, not only when they stop. A monitor that only runs at the end of a turn can be postponed by an agent that never ends its turn.

For a different take on watching what an agent does, see [Claude Code now has a second agent watching your back](/blog/claude-code-now-has-a-second-agent-watching-your-back.html). And for another case of AI safety testing going sideways, read [Anthropic's AI published real malware by accident](/blog/anthropic-ai-published-real-malware-by-accident.html).

Sources: [METR: Red-Teaming OpenAI's Internal Agent Monitoring Systems](https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
