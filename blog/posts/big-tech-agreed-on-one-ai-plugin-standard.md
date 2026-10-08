---
title: "Big Tech Just Agreed on One AI Plugin Standard"
date: "2026-09-01"
excerpt: "Agent Plugins 1.0 gives AI agents one shared package format for skills and MCP servers. A valid plugin needs only two files, and the same folder loads in ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code."
thumbnail: "assets/images/blog-thumbnails/big-tech-agreed-on-one-ai-plugin-standard.jpg"
youtubeId: "jcBWgI-_JEg"
tags:
  - AI Agents
  - Agent Skills
  - MCP
  - Developer Tools
  - News
---

AI agents now have one shared plugin format. Agent Plugins 1.0.0 went public on August 6, and its Technical Steering Committee has Core Maintainers from Amazon, Cursor, Microsoft, OpenAI and Vercel.

## The problem it fixes

Until now, every agent client had its own plugin format. The skill or MCP server inside was often identical, but each client wanted different metadata, different discovery paths and a different MCP config. So authors packaged the same thing again and again, once per tool.

Vercel started the proposal. Representatives from AWS, Anysphere (the company behind Cursor), GitHub, Microsoft and OpenAI then refined it into the 1.0.0 spec. The project is openly licensed and its decisions are public.

## The whole format is one folder

A plugin is a directory with fixed locations:

- `plugin.json` names the plugin and the spec version it targets.
- `skills/` holds your Agent Skills, one folder per skill with a `SKILL.md` inside.
- `mcp.json` wires up your MCP servers (stdio, Streamable HTTP or legacy HTTP+SSE).
- Optional reverse-domain folders such as `com.example.client/` hold extras for one specific client. Other clients ignore them.

The smallest valid plugin is two files. Write a `plugin.json` with two fields, `$schema` and `name`, then add `skills/greet/SKILL.md`. That is already a plugin that a compatible client can discover and load. Skills and MCP config are both optional, and a client validates each component on its own, so one broken skill does not disable the rest.

## Where it runs

At launch, Vercel listed support across ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code. The official compatible clients page has since grown to also include Hermes Agent, NanoClaw, Grok Bot, OpenHands and OpenClaw. Package a skill once and it carries across all of them.

## The catch

The spec is small on purpose. Version 1 covers only two component types: Agent Skills and MCP servers. Commands, hooks and subagents stay client specific for now, and the steering committee will only add more portable types when clients converge on them. Installation, distribution, permissions and the user experience also stay with each client. So "write once, run everywhere" is true for skills and MCP servers, not for every feature your favorite agent has.

That is still a big step. Skills were already becoming the common unit of agent work, and now they have a common box to ship in.

If you want to build and share skills like this with other builders, that is what the [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about) is for.

Read the spec and the build guide at [agent-plugins.org](https://agent-plugins.org/), or the launch post on the [Vercel blog](https://vercel.com/blog/introducing-agent-plugins).
