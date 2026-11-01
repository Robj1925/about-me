---
title: "Claude Code Sets Up a Cloud Agent in One Command"
date: "2026-10-28"
excerpt: "Claude Managed Agents runs a Claude agent on Anthropic's servers instead of your laptop, with memory across sessions and an optional self-hosted sandbox. One Claude Code command walks you through the setup. It is a beta and bills at API rates."
thumbnail: "assets/images/blog-thumbnails/claude-code-sets-up-a-cloud-agent-in-one-command.jpg"
youtubeId: "0idZ-z5jWo8"
tags:
  - Claude Code
  - Claude
  - AI Agents
  - Anthropic
  - Claude API
---

Claude Code will set up a Claude agent that runs in the cloud, with one command. The product is called [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), and it is in beta. Think Claude Code, but on Anthropic's servers instead of your laptop.

Anthropic describes it as "a suite of composable APIs for building and deploying cloud-hosted agents." It is not brand new. It launched in beta on April 8, 2026, according to the API release notes. What is new is the Claude Team email of October 25 that pointed people at a guided setup inside Claude Code.

## One command

In Claude Code, type:

```
/claude-api managed-agents-onboard
```

It walks you through the setup. The quickstart breaks the product into four core concepts: the agent, the environment it runs in, the session, and the events it streams back to you. You send a task, the agent runs tools in its own sandbox, and the results come back as it works.

I want to be clear about one thing: I have not run this myself. Everything below comes from Anthropic's quickstart and docs, not from a session I recorded.

## A real example from the quickstart

The quickstart has a simple first task. The agent writes a Python script for the first 20 Fibonacci numbers, runs it in its sandbox, and then checks the file. The documented output says the file contains the first 20 Fibonacci numbers, 0 through 4181.

It is a small task, but it shows the loop. The agent writes code, runs it on a real machine, and checks its own work, without you watching a terminal.

## Memory is the best part

Your agent keeps context across sessions. The [memory docs](https://platform.claude.com/docs/en/managed-agents/memory) list things like user preferences, project conventions and prior mistakes. So the next session does not start from zero.

Every change to memory is saved as a version. That matters, because if the agent learns something wrong, you can see when it changed.

A simple way to think about it: you hire a remote worker who has their own computer, plus a notebook they keep between jobs.

## Your own servers

If you do not want your code on Anthropic's machines, there are [self-hosted sandboxes](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes). With one, the code, files and network traffic stay on your machines.

The limit: Claude itself still runs at Anthropic. The docs say tool inputs and outputs still flow to Anthropic's control plane. So self-hosting keeps the execution local, not the whole conversation.

## The catch

It is a beta, and it is not part of your Claude plan. You need a Claude Console account and an API key. You pay for tokens at the model's rates, plus $0.08 per session hour, and the [pricing page](https://platform.claude.com/docs/en/about-claude/pricing) says that runtime only counts while the session status is running. Web search inside a session costs $10 per 1,000 searches.

If you are on a Max plan, the new monthly API credits do list Managed Agents as covered. I explain how to claim them in [Claude Max now includes $200 of API credits a month](/blog/claude-max-now-includes-200-of-api-credits-a-month.html). If you want a refresher on what an agent actually is before you build one, read [what is an AI agent, finally explained simply](/blog/what-is-an-ai-agent-finally-explained-simply.html).

Sources: [Managed Agents quickstart](https://platform.claude.com/docs/en/managed-agents/quickstart), [Overview](https://platform.claude.com/docs/en/managed-agents/overview), [Memory](https://platform.claude.com/docs/en/managed-agents/memory), [Self-hosted sandboxes](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes), [Pricing](https://platform.claude.com/docs/en/about-claude/pricing)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
