---
title: "Fable 5.2 Plans, Opus 5.5 Builds: Claude Code Setup Guide and Links"
date: "2026-11-14"
excerpt: "How to run Claude Fable 5.2 as the main model in Claude Code and give the work to Opus 5.5 subagents, with the official links, the exact commands and the limits."
thumbnail: "assets/images/blog-thumbnails/fable-5-2-plans-opus-5-5-builds-claude-code.jpg"
tags:
  - Claude Code
  - Claude
  - Anthropic
  - AI Agents
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Why this setup

On Anthropic's FrontierCode 2.0 test, Fable 5.2 at High effort scored 45.3%. Opus 5.5 at Max effort scored 45.5%. Anthropic says Fable 5.2 can also play the role of orchestrator, "where it delegates simpler tasks to smaller models".

Price per million tokens:

- Fable 5.2: $8 input, $40 output.
- Opus 5.5: $4 input, $20 output.

So each Opus worker costs half as much per token as Fable.

## Links

- [Fable 5.2 launch post (Anthropic)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- [Subagents docs (Claude Code)](https://code.claude.com/docs/en/sub-agents)
- [Model and effort settings (Claude Code)](https://code.claude.com/docs/en/model-config)
- [Prompt caching and switching models (Claude Code)](https://code.claude.com/docs/en/prompt-caching)
- [Ruben Hassid's conductor prompt (How to AI)](https://ruben.substack.com/p/prompt-52)

## Setup guide

Fable 5.2 needs Claude Code v2.1.321 or later. On Max, Fable is included in the plan. On Pro and standard Team seats, Fable can use up to 50% of the weekly limits until Nov 16. On some plans and seats, Fable usage bills to usage credits. Then the `/model` picker shows "Requires usage credits" on the Fable row.

1. Update Claude Code.

   ```bash
   claude update
   ```

2. Make Fable 5.2 the main model. In a session, run:

   ```text
   /model fable
   ```

   Or start the session on it:

   ```bash
   claude --model fable
   ```

3. Set the effort level. Fable 5.2 starts on medium. For the boss, set high:

   ```text
   /effort high
   ```

4. Make an Opus worker subagent. A subagent is a Markdown file with YAML frontmatter. Put it in `~/.claude/agents/` for all your projects, or in `.claude/agents/` for one project. Only `name` and `description` are required. Set `model` and `effort` so the worker does not copy the Fable session.

   ```markdown
   ---
   name: worker
   description: Builds one task from the plan and reports back what changed
   model: opus
   effort: medium
   ---

   You are a worker. Do the one task you are given, test it, and report
   what you changed and what is still open.
   ```

   You can also ask Claude to write this file for you. In the current Claude Code, `/agents` only prints a reminder to do one of these two things. Claude Code sees a new or changed file within a few seconds. If the `agents` folder did not exist when the session started, restart Claude Code once.

5. Give Fable the job and tell it to use the worker. For example:

   ```text
   Plan this feature, then use the worker subagent for each task. Check each result before you hand out the next one.
   ```

   To force that subagent, @-mention it: `@"worker (agent)"`. For a full conductor prompt, see Ruben Hassid's post in the links.

6. Keep one model per chat. If you want Opus to build in its own chat, get the plan from Fable first, then start a new Opus chat and paste the plan in.

## Watch out

- **The test is Fable alone against Opus alone.** FrontierCode does not measure the Fable plus Opus team. Nobody has published a score for this setup.
- **Subagents copy the main model.** If a subagent has no `model` field, it can run on Fable too. Set `model: opus`, or `model: claude-opus-5-5` to be exact.
- **Switching models costs you.** The docs say: "Each model has its own cache." After `/model`, the next request reads the whole chat with no cache hits.
- **Opus cannot read Fable's thinking.** When you move from Fable 5.2 to another model, that model loses Fable's reasoning for those turns.
- **Fable uses your limits fast.** Watch your usage, and keep the simple work on the Opus workers.

Sources: [Anthropic: Claude Fable and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2), [Claude Code subagents](https://code.claude.com/docs/en/sub-agents), [Claude Code model configuration](https://code.claude.com/docs/en/model-config), [Claude Code prompt caching](https://code.claude.com/docs/en/prompt-caching), [What's new in Fable 5.2](https://platform.claude.com/docs/en/about-claude/models/whats-new-fable-5-2), [Claude help center: Fable access](https://support.claude.com/en/articles/17506494-claude-fable-5-2-launch-offers) and [Ruben Hassid, How to AI](https://ruben.substack.com/p/prompt-52)
