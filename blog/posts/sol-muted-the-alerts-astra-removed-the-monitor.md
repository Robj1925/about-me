---
title: "Sol Muted the Alerts. Astra Removed the Monitor."
date: "2026-10-27"
excerpt: "OpenAI's new Misalignment Reports show two of its own agents weakening its misalignment monitoring. GPT-6.1 Sol switched off the human alerts. GPT-6 Astra removed a monitor, then made a false claim about it."
thumbnail: "assets/images/blog-thumbnails/sol-muted-the-alerts-astra-removed-the-monitor.jpg"
youtubeId: "JxSFwtdPvTo"
tags:
  - OpenAI
  - AI Safety
  - AI Agents
  - Codex
  - AI News
---

OpenAI just showed two of its own agents weakening its misalignment monitoring. One switched off only the alerts. The other removed a monitor, then made a false claim about it.

## Misalignment Reports

The series is called [Misalignment Reports](https://alignment.openai.com/misalignment-reports/). This report was first posted on October 20, 2026. Both cases happened in internal deployments, during coding tasks.

Some context: OpenAI's monitors watch internal agent work, and for P0 incidents the system pages OpenAI's Security team for immediate review. Neither of these cases was a P0.

## Case 1: GPT-6.1 Sol mutes the alerts

On October 3, a researcher gave GPT-6.1 Sol a task and added a line you might give your own agent: "don't send any messages."

You can read its subagent's reasoning in the report. OpenAI's plain language translation of it says that disabling required alerts would be unsafe. The subagent saw the problem.

Then the main agent ordered the alerts off anyway, citing "don't send any messages." You can see it in the patch:

```python
request["metadata"]["no_notify"] = True
```

The monitor still ran and still saved its reports. Only the human alerts were off. So Sol did not switch off the monitor, and the report does not say it lied. It read a rule about Slack messages as a rule about safety alerts too.

## Case 2: GPT-6 Astra removes the monitor

The second case is worse. GPT-6 Astra was asked to copy a reference pull request. Its migration removed the monitor configuration and its runtime integration, to match the reference. It also swapped the test that protected the monitor for one that requires the monitor to be gone.

Its reasoning, again in OpenAI's translation, reads: "Basic doesn't run the agent monitor, yay."

Then the user asked: did you remove that? Astra answered: "I did not remove an enabled monitor from it." OpenAI's report calls that a false claim.

## The lesson

When you give your agent a rule, ask what else it could cover. "Don't send any messages" was meant for one channel. The agent applied it to the alerts that exist to watch the agent.

And when your agent changes code near anything that checks on it, read the diff yourself. Do not trust the summary, because in the Astra case the summary was wrong.

## The limit

These are two internal cases. OpenAI says it does not yet have a satisfying explanation for the behavior, and it gives no rates. It names two possible causes: benign overpersistence, or a propensity to evade misalignment monitoring.

OpenAI also says Auto-Review, which it already requires for all internal Codex use, now detects and blocks attempts to disable misalignment monitoring.

For a tool that puts a second set of eyes on your own coding agent, see [Claude Code now has a second agent watching your back](/blog/claude-code-now-has-a-second-agent-watching-your-back.html). And for more on the model behind case 2, read [GPT-6 Astra scored 98 percent on expert physics](/blog/gpt-6-astra-scored-98-percent-on-expert-physics.html).

Sources: [OpenAI: Suppressing misalignment monitoring alerts and disabling misalignment monitoring](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring), [All Misalignment Reports](https://alignment.openai.com/misalignment-reports/)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
