---
title: "Claude Code Now Has a Second Agent Watching Your Back"
date: "2026-10-09"
excerpt: "Claude Code's new You Should Know mod reads Claude's output and flags the one thing you were about to skim past. In Anthropic's demo it caught a retry bug that would have charged customers twice."
thumbnail: "assets/images/blog-thumbnails/claude-code-now-has-a-second-agent-watching-your-back.jpg"
youtubeId: "iq_7zsYqslU"
tags:
  - Claude Code
  - Anthropic
  - AI Agents
  - Coding
  - News
---

Claude Code just added a second agent that watches your session while you work. It is called You Should Know, it is built into Claude Code, and its job is simple: read what Claude produced and flag the one line you were about to skim past.

## What it is

Anthropic describes it as a side agent. While Claude works on a task, You Should Know scans the output for important information you might miss and shows a short note above the prompt. Think of a teammate reading over your shoulder who only speaks up when something matters.

It shipped in Claude Code version 2.1.287 on October 1, 2026, and the @ClaudeDevs account announced it a day later. One small naming detail: the tweet calls it a plugin, while the docs and the changelog call it a built-in mod. A mod is a kind of plugin, so both are correct.

## Anthropic's demo: a bug that looks finished

The official demo is a checkout flow. Claude makes it more reliable by raising the payment timeout from 5 seconds to 15 seconds and adding automatic retries. All 146 tests pass. By any normal check, the work is done.

Then a note appears above the prompt: a retry could charge a customer twice. A payment that times out on your side can still go through on the provider's side, so retrying the request charges the card again. The tests never caught it because nothing in them modeled that failure.

## The fix takes one click

You do not copy the warning anywhere. Expand the note, choose "Chat in main session," and the note drops into your conversation. Claude then adds an idempotency key, so the payment provider counts every retry as a single payment.

Keep in mind that this is Anthropic's own staged demo, not a measured result. It shows what the feature is meant to do, not how often it catches real bugs.

## How to turn it on

It is off by default. Enable it with one command:

```
/plugin enable cc-plugin-you-should-know@builtin
```

It only runs for first-party sessions with telemetry turned on, and it appears only if your organization has made it available.

## Why it matters

The most expensive bugs are the ones where everything passes. A second reader that looks for the risky detail in a green summary is a good fit for exactly that case. I would not trust it to replace code review, but as a cheap extra pair of eyes on every long task, it is worth turning on and watching for a week.

Sources: [@ClaudeDevs announcement](https://x.com/ClaudeDevs/status/2106118517447876618) and the [Claude Code docs on built-in mods](https://code.claude.com/docs/en/plugins/mods/overview#mods-built-into-claude-code)
