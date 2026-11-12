---
title: "This Claude Code Skill Animates Math Like 3Blue1Brown's Manim"
date: "2026-11-08"
excerpt: "3brown1blue is a free, MIT licensed Claude Code skill that plans and writes Manim code for math explainer videos. It needs no API key on Claude Code, but you install Manim and LaTeX yourself."
thumbnail: "assets/images/blog-thumbnails/claude-code-skill-animates-math-like-manim.jpg"
youtubeId: "yWZbdg9PMSA"
tags:
  - Claude Code
  - Open Source
  - AI Tools
  - Python
  - AI Video
---

3brown1blue is a free Claude Code skill that animates math explainers. You do not need to know any animation code to get a video out of it.

## Built on Manim

The skill writes code for [Manim](https://www.manim.community/), the open source animation library from 3Blue1Brown. ManimCE is the free community edition, and it renders on your own machine, including a Mac.

To be clear: the skill is not from 3Blue1Brown. [3brown1blue](https://github.com/AmitSubhash/3brown1blue) is a small one person repo by AmitSubhash. It had 43 stars on November 5, 2026, it is MIT licensed, and it dates from March 2026, so it is not new.

## Install

Two commands put it in Claude Code:

1. `pip install 3brown1blue`
2. `3brown1blue install`

The README also lists Cursor, Windsurf and GitHub Copilot as supported platforms.

## How it works

You ask for a video in plain words. The README example is "make a video explaining backpropagation".

Its `generate` command does not jump straight to code. It plans first: research, common misconceptions, a curriculum, scene plans, a narration script and a style contract. It shows you that plan, you approve it, and only then does it write the Manim code.

Two details stand out:

- **No API key on Claude Code.** The Claude Code provider calls `claude -p`, so it runs on your Claude plan instead of a separate API key.
- **14 Manim gotchas.** The skill lists 14 common Manim problems that break scenes, with the fix for each one.

It also has four audience levels (high school, undergrad, graduate and industry) and seven subject domains.

## The catch

You install Manim and LaTeX yourself, and the renders run locally. On a Mac, LaTeX means `brew install mactex`, which is a large download.

Also note that the showcase videos come from the repo author's own [showcase repo](https://github.com/AmitSubhash/3brown1blue-showcase). The renders in the Short are his, not a test run on this channel.

So for your next math explainer, remember 3brown1blue. If you like learning concepts through animation, see [Gradient descent explained visually](/blog/gradient-descent-explained-visually.html). For another skill that turns ideas into pictures, read [This Claude Code skill turns ideas into visuals](/blog/this-claude-code-skill-turns-ideas-into-visuals.html).

Sources: [AmitSubhash/3brown1blue on GitHub](https://github.com/AmitSubhash/3brown1blue), [3brown1blue showcase renders](https://github.com/AmitSubhash/3brown1blue-showcase), [Manim Community](https://www.manim.community/)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
