---
title: "Emil Kowalski UI Skills for Claude Code: Setup Guide and Links"
date: "2026-11-14"
excerpt: "How to install Emil Kowalski's free UI and animation skills in Claude Code, and how to run /animate, /break-ui and the new /learn-taste."
thumbnail: "assets/images/blog-thumbnails/emil-kowalski-ui-skills-for-claude-code.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Web Design
  - Open Source
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/emilkowalski/skills](https://github.com/emilkowalski/skills)
- Skill pages with before and after examples: [aiforui.dev/skills](https://aiforui.dev/skills)
- /animate: [aiforui.dev/skills/animate](https://aiforui.dev/skills/animate)
- /break-ui: [aiforui.dev/skills/break-ui](https://aiforui.dev/skills/break-ui)
- /learn-taste: [aiforui.dev/skills/learn-taste](https://aiforui.dev/skills/learn-taste)
- Why ease out for enter animations: [emilkowal.ski/ui/7-practical-animation-tips](https://emilkowal.ski/ui/7-practical-animation-tips#4.-choose-the-right-easing)

## Why it matters

Emil Kowalski worked at Vercel and Linear. His README says agents do not have great taste. His example: an agent picks `ease-in` for an enter animation when it should be `ease-out`. Ease in makes the animation feel slow.

On the /animate page, the dialog without the skill goes from scale 0 with ease in, 400ms in and 400ms out. With the skill, it goes from scale 0.95 with a custom ease out, 300ms in and 150ms out.

The repo is MIT licensed and has more than 56,000 stars on GitHub. The README lists 18 skills.

## Setup guide

1. Open a terminal in your project and install all the skills:

   ```bash
   npx skills@latest add emilkowalski/skills
   ```

   To install one skill only, add `--skill` and its name:

   ```bash
   npx skills@latest add emilkowalski/skills --skill animate
   ```

2. Open Claude Code in that project.

3. Animate an element with `/animate`. Prompts from the skill page:

   ```text
   /animate animate this dropdown so it opens from the button
   /animate add a press state to all our buttons
   ```

4. Before you ship a feature, test it with `/break-ui`. It fills your UI with worst case data (long names, unusual emails, one letter names, huge counts, empty lists), writes a report and fixes each issue. You do not need special wording:

   ```text
   /break-ui stress test this table with the worst data you can think of
   ```

5. At the end of a session where you corrected the agent more than once, run `/learn-taste`. It collects every design correction you made, also the edits you made yourself, and writes each one into your `DESIGN.md` as a rule with its reason:

   ```text
   /learn-taste go through this session and pull out everything I corrected
   ```

   Later, `/learn-taste prune, DESIGN.md is getting long` keeps the file short.

Every skill page at aiforui.dev/skills shows when to use the skill, an example of the result, and more prompts to try.

## Watch out

- The before and after panels on aiforui.dev are Emil's examples, not my results. Your output depends on your agent and your code.
- When you do not give a reason for a correction, /learn-taste proposes one and asks you to confirm it. Read it before you say yes.
- The skills are free and MIT licensed. aiforui.dev also sells a paid course (AI for UI). The course is not part of the free skills.
- /learn-taste is new (added November 12, 2026), so expect changes.

Sources: [emilkowalski/skills README](https://github.com/emilkowalski/skills), [aiforui.dev skill pages](https://aiforui.dev/skills) (checked November 14, 2026).
