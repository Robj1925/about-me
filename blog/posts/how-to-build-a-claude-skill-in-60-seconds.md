---
title: "How to Build a Claude Skill in 60 Seconds"
date: "2026-07-05"
excerpt: "A Claude skill is just a folder with a markdown file. Teach the AI a workflow once, then reuse it every time. Here is how to build your first one."
thumbnail: "assets/images/blog-thumbnails/how-to-build-a-claude-skill-in-60-seconds.jpg"
tags:
  - Claude
  - Claude Code
  - Tutorial
---

A Claude skill sounds complicated. It is not. It is a folder with a markdown file inside it. That is the whole thing. And once you understand it, you can teach Claude a workflow one time and reuse it in every chat after that.

## What a Skill Actually Is

A skill is a way to package a workflow so you never have to explain it again. Instead of pasting the same instructions into every conversation, you write them once into a `SKILL.md` file, and Claude pulls them in whenever they are relevant.

Think deploy checklist, code review process, a specific way you want reports formatted. Anything you find yourself re-explaining is a candidate for a skill.

## The Clever Part

Here is what makes skills efficient instead of expensive.

A `SKILL.md` file has two pieces that load at different times:

- **Name plus description:** This sits in context up front. It costs almost nothing. It is just enough for Claude to know the skill exists and when it might be useful.
- **The full instructions:** These load only when Claude decides the task is actually relevant.

That split is the whole trick. You can have dozens of skills installed and pay basically zero tokens until one of them fires. The body stays on disk until it is needed.

## Writing the Description Is the Real Skill

The single most important part is the description. That is what Claude reads to decide whether to load the skill. A vague description means the skill never fires, or fires at the wrong time.

Be specific about what the skill does and when to use it. Name the triggers. If it is a deploy checklist, say so and list the situations that should invoke it. A good description is the difference between a skill that quietly works and one that just sits there.

## It Works Everywhere

The best part: the same skill works across Claude.ai, Claude Code, and the API without changing a single thing. Write it once, use it everywhere.

If you are brand new to this, there are tools that walk you through building your first skill in about 15 to 30 minutes. But the core idea takes 60 seconds to understand: a folder, a markdown file, a sharp description.

Skills are one of seven different ways to steer Claude Code. If you want the full picture of when to use skills versus rules, hooks, or subagents, I broke all of them down in [The 7 Ways to Steer Claude Code](master-claude-code-7-ways-to-steer-its-behavior.html).
