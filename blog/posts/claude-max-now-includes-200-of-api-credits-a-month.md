---
title: "Claude Max Now Includes $200 of API Credits a Month"
date: "2026-10-27"
excerpt: "Claude Max plans now come with monthly API credits: $100 on Max 5x, $200 on Max 20x, up to $500 pooled on Team. They cover the Claude API, Managed Agents, the Agent SDK and the Playground, but not Claude Code. You have to claim them."
thumbnail: "assets/images/blog-thumbnails/claude-max-now-includes-200-of-api-credits-a-month.jpg"
youtubeId: "CTiEnxQPjYY"
tags:
  - Claude
  - Anthropic
  - Claude API
  - AI Tools
  - Claude Max
---

Your Claude Max plan now comes with up to $200 of API credits every month. Anthropic shipped it on October 7, 2026, and you have to claim it.

## How much you get

- **Max 5x:** $100 a month
- **Max 20x:** $200 a month
- **Team:** $20 per Standard seat and $100 per Premium seat, pooled across every seat and capped at $500

Free, Pro and Enterprise plans do not get it.

## What the credits cover

The feature is called monthly API credits. According to the [docs](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers), it works on:

- the Claude API
- Managed Agents
- the Agent SDK
- the Playground

It does have one limit: it does not cover Claude Code. No interactive Claude Code sessions, and no extra usage when you hit your plan limits. Your plan limits stay the same, because this is a separate balance.

There is some fine print in the docs too. `claude -p` and the Agent SDK only count against the credits when you run them with an API key from the linked Console organization. If you are signed in with your plan, they use your plan limits. The GitHub Action, the IDE extension and desktop runs count as Claude Code, so they are not covered. And the credits do not apply on Bedrock, Vertex AI or Microsoft Foundry.

## How to claim them

You do not need a card to claim them.

1. On claude.ai, open Settings, then Billing.
2. In the API credits section, click Link organization.
3. Pick your Console organization, or create a new one.

I claimed mine, and in the Short you can see them in my own Console with the expiry date.

## The rules

- **Seven days.** You need seven days on the plan before you can claim.
- **One organization.** You can only link one Console organization, so pick the one you build in.
- **No rollover.** Unused credits expire at the end of each billing cycle.

When they run out, API calls stop until next month's credits arrive, unless you bought more. Your plan is never charged.

## What I would use them for

The obvious one is [Claude Managed Agents](/blog/claude-code-sets-up-a-cloud-agent-in-one-command.html), which bills at API rates and is on the covered list. The credits are a good way to try it without a separate bill. If you want to know how much value a Max plan already gives you before these credits, read [your $200 Claude plan is worth $11,726 a month](/blog/your-200-claude-plan-is-worth-11726-a-month.html).

Sources: [Monthly API credits for Max and Team plans](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans), [Docs: API credits for subscribers](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers), [Claude Apps release notes](https://support.claude.com/en/articles/12138966-release-notes)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
