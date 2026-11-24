---
title: "Motion Anything: 403 Motion Recipes for Claude Code, Setup"
date: "2026-11-24"
excerpt: "Motion Anything is an open source motion editor that Claude Code drives: describe the feeling, then edit motion on the running page and export to CSS, React, Lottie, MP4 or GIF."
thumbnail: "assets/images/blog-thumbnails/motion-anything-403-motion-recipes-setup-guide.jpg"
tags:
  - Claude Code
  - Web Animation
  - Motion Design
  - Open Source
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Motion Anything on GitHub: [github.com/nexu-io/motion-anything](https://github.com/nexu-io/motion-anything)
- The motion rules it follows: [MOTION-SPEC.md](https://github.com/nexu-io/motion-anything/blob/main/MOTION-SPEC.md)
- Sources of the ported effects: [ATTRIBUTION.md](https://github.com/nexu-io/motion-anything/blob/main/ATTRIBUTION.md)
- Open Design, the family it belongs to: [github.com/nexu-io/open-design](https://github.com/nexu-io/open-design)

The repo is Apache 2.0 licensed and had 1,125 stars on November 24, 2026.

## What it does

You describe the feeling you want, and your coding agent writes the animation. Then you click any part of the running page and change its motion, component by component:

- 4 triggers, 13 motion verbs, spring easing and a full keyframe editor
- 403 motion recipes, searchable by intent
- 8 agent engines: Claude Code, Codex CLI, Cursor Agent, OpenCode, Grok Build, Hermes, Gemini CLI and Open Design Cloud, plus your own API key (BYOK)
- 58 HyperFrames video templates for launch videos, and a video editor with MP4 export in the browser
- Export to JSON, CSS, React, Lottie, MP4, GIF or a single HTML file
- 230 portable skills: any recipe can be exported as a `SKILL.md` for your agent

The showcase effects run with two script tags on any page: no React, no three.js and no build step.

## Setup guide

You need Node 18 or newer and at least one agent engine. If Claude Code is on your PATH, Motion Anything finds it.

1. Clone the repo and start the server:

```bash
git clone https://github.com/nexu-io/motion-anything.git
cd motion-anything
node cli/bin/motion.js serve 4399
```

2. Open [http://localhost:4399](http://localhost:4399) in your browser.
3. Type one sentence on the home screen, for example a liquid metal background for a landing page. You can pick a design system and a motion profile first.
4. In the workbench, click a component on the running page and give it a trigger, a preset or keyframes.
5. Export the result as CSS, React, Lottie, MP4 or GIF.

There is no `npm install` step. The project has zero npm dependencies. To use an API key in place of a CLI, go to Settings, then Execution mode.

## Watch out

- 403 recipes is the full library. The README says 77 of them are real effects with live previews, and the rest are reference cards.
- "No React" is true for the dependency free recipes. React is also one of the export targets.
- The code was released in July 2026 as version 0.1. The newest commit (November 17, 2026) only changed the README. Test it before you build on it.
- 35 effects are ports of other people's effects. ATTRIBUTION.md lists the sources.
- Motion Anything is free, but your prompts run on your own agent. Claude Code needs a paid Claude plan, and BYOK uses your own API credits.
- I did not run it myself for this post.

Sources: [Motion Anything README](https://github.com/nexu-io/motion-anything) and its commit history (checked November 24, 2026).
