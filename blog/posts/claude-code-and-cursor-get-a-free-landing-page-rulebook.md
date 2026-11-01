---
title: "Claude Code and Cursor Get a Free Landing Page Rulebook"
date: "2026-10-29"
excerpt: "A designer called Elaya published landing-page-design, an MIT licensed markdown skill that gives Claude Code and Cursor a strategy intake, a 12 section page plan and hard visual rules. Here is what is in it and what changed this week."
thumbnail: "assets/images/blog-thumbnails/claude-code-and-cursor-get-a-free-landing-page-rulebook.jpg"
youtubeId: "ezTiwtvwsGE"
tags:
  - Claude Code
  - Cursor
  - Web Design
  - Claude Skills
  - Open Source
---

Claude Code and Cursor can now follow a designer's rulebook for landing pages, and it is free.

A designer called Elaya put it on GitHub in the [ai-design-skills](https://github.com/elayadesign/ai-design-skills) repo. It is one markdown skill called [landing-page-design](https://github.com/elayadesign/ai-design-skills/tree/main/skills/landing-page-design), MIT licensed. The repo had 8,896 stars when I checked on October 27.

It works with Claude Code and Cursor, and with Codex, Windsurf or any tool that reads a markdown rules file.

## Part A: the strategy

The skill does not start with colors. First it asks about your offer, your audience, and the one action you want visitors to take.

Then it plans twelve sections, from the headline down to the FAQ and a final action button. That order alone fixes a lot of AI landing pages, which tend to jump straight to a hero and a grid of cards.

## Part B: the hard rules

Then come the visual rules, and they are strict:

- **Fonts.** Only Geist, Manrope, Geist Mono or Poppins. Never Inter, Roboto, Arial, Open Sans or Helvetica.
- **Spacing.** Every gap comes from a fixed list of 13 values, from 0 to 96 pixels.

A fixed spacing scale is what designers use to make a page feel consistent. Giving it to the agent as a rule means it stops picking random padding values.

## The bonus: a redesign skill

The same designer has a second free skill in a separate repo, [redesign-skill](https://github.com/elayadesign/redesign-skill), called redesign-existing-projects. The landing skill names it as its companion. You point it at a site you already have, and it finds the generic patterns and fixes them in place. That one is also MIT licensed.

## The limits

One heads up. You may have read about a motion skill in this repo. On October 27 it was moved out to its own repo, and when I checked, that new repo was not public yet. So right now the ai-design-skills repo holds one skill, not two.

And stars do not prove good design. This is a rules file, not a design guarantee. Test it on your own page first and judge the output.

## How to install it

The repo installs with the skills CLI (needs Node.js). It puts the skill in .claude/skills/ for Claude Code:

```bash
npx skills add elayadesign/ai-design-skills --skill landing-page-design
```

Then ask Claude Code for a landing page and answer its intake questions.

This is not the only way to fight generic AI pages. I covered another free option in [Hallmark stops Claude Code building AI slop](/blog/hallmark-free-skill-stops-claude-code-building-ai-slop.html), and four more methods in [4 ways to force Claude Code to build beautiful websites](/blog/4-ways-to-force-claude-code-to-build-beautiful-websites.html).

Sources: [GitHub: elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills), [landing-page-design skill](https://github.com/elayadesign/ai-design-skills/tree/main/skills/landing-page-design), [GitHub: elayadesign/redesign-skill](https://github.com/elayadesign/redesign-skill)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
