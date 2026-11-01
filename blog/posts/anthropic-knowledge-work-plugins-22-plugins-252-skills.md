---
title: "Anthropic's Official Claude Plugins: 22 Plugins, 252 Skills"
date: "2026-10-24"
excerpt: "Anthropic's Knowledge Work Plugins repo holds 22 plugins with 252 skills, 15 commands and 5 agents, all plain markdown and JSON. Two commands install one in Claude Code, and the skills fire on their own when they are relevant."
thumbnail: "assets/images/blog-thumbnails/anthropic-knowledge-work-plugins-22-plugins-252-skills.jpg"
youtubeId: "rwv5WT3U64E"
tags:
  - Claude
  - Claude Code
  - Anthropic
  - Open Source
  - Productivity
---

Before you spend another week writing Claude skills from scratch, look at what Anthropic already published. The repo is called Knowledge Work Plugins, it is Apache 2.0, and it has been public since January 2026. It now sits at over 33,000 GitHub stars.

I counted the repo tree myself: **22 plugins, 252 skills, 15 commands and 5 agents.** Five of the plugins are built by partners, including Slack and Zoom.

## What is actually in there

Every component is file based. Markdown and JSON, no code, no infrastructure, no build steps. That matters more than the count, because it means you can read a skill, change a line and make it yours.

The plugins cover roles rather than tools: data, sales, marketing, finance, legal, customer support, product management, productivity, human resources, operations, engineering, design, enterprise search, small business and a few more.

## Installing one

It is two commands in Claude Code. Add the marketplace:

```bash
claude plugin marketplace add anthropics/knowledge-work-plugins
```

Then install one plugin by name:

```bash
claude plugin install sales@knowledge-work-plugins
```

Once installed, the plugin activates automatically. The skills fire when your request matches, and the slash commands are there when you want to call one directly, like `/sales:call-prep` or `/data:write-query`. The plugins were primarily designed for Claude Cowork and also work in Claude Code.

If you have never written one of these yourself, my post on [how to build a Claude skill in 60 seconds](/blog/how-to-build-a-claude-skill-in-60-seconds.html) covers the format these files use.

## Three worth installing first

**Data.** It turns Claude into a data analyst: it explores schemas and table metadata, writes optimized SQL for your dialect, and builds interactive HTML dashboards with filters and charts. It works with any warehouse and any SQL dialect.

**Sales.** It grew from 9 skills to 36. The new ones cover deal reviews, close plans, stakeholder maps, renewals, customer health, lead routing and team pipeline views. Type a call prep request and you get a brief with the attendees, the account history, prior call context, open opportunity status and discovery questions.

**Small Business.** 44 skills across finance, sales, marketing, operations and hiring, written for the way an owner actually asks: "can I make payroll," "a customer is angry," "who owes me money?" The README is explicit that it confirms before taking action: nothing sends, posts or gets paid without your say so, and payroll is staged for you to press the button.

## The limits

- **The repo is free, your Claude plan is not.** Claude Code needs a paid plan, and Cowork needs one too.
- **Connectors need your own accounts.** A plugin that references HubSpot, Slack or Snowflake only helps if you have that tool, and in an organization an admin usually has to enable each connector first.
- **This is not new.** The repo is from January 2026. What changed recently is the depth, like the sales plugin going from 9 to 36 skills.

The good news on connectors: the small business plugin says every skill still works from a CSV export, a pasted email, an uploaded PDF or plain conversation. Connectors make it faster, not possible.

## My take

The honest value here is not the 252 number, it is that these are editable text files written by the people who build the model. Install one, read the SKILL.md that fires, then fork it and put your own process and vocabulary in it. That is a much faster start than a blank file.

Source: [anthropics/knowledge-work-plugins on GitHub](https://github.com/anthropics/knowledge-work-plugins) (counts taken from the repo tree on October 26, 2026)

Watch the short above for the quick version. If you want the Claude Code skills and automations I use for my own content and business, join the AI Academy community on Skool: https://www.skool.com/ai-academy-with-robby-6849/about
