---
title: "Motion Skills: 56 Claude Code Motion Skills, Setup Guide"
date: "2026-11-24"
excerpt: "Motion Skills by iart.ai is 56 open source motion graphics skills in 19 packs for Claude Code. Which pack to start with, the install commands and the catches."
thumbnail: "assets/images/blog-thumbnails/motion-skills-56-claude-code-skills-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Motion Graphics
  - Open Source
  - Video Editing
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Motion Skills on GitHub: [github.com/iart-ai/motion-skills](https://github.com/iart-ai/motion-skills)
- Every pack with its install command: [iart.ai/skills](https://www.iart.ai/skills)
- The no keys pack: [github.com/iart-ai/javascript-animation-skills](https://github.com/iart-ai/javascript-animation-skills)
- The talking head pack: [github.com/iart-ai/talking-head-skills](https://github.com/iart-ai/talking-head-skills)

The hub repo is MIT licensed and had 2,134 stars on November 24, 2026. It was made by iart.ai.

## What it is

56 skills that teach your coding agent to make motion graphics, animation and video, in 19 packs. The hub repo is only an index. Each pack is its own repo, so you install only what you need.

Some of the packs:

- `tiktok-video-skills` (4 skills) for TikTok, Reels and Shorts
- `kinetic-typography-skills` for text animation
- `data-animation-skills` (3) for animated charts
- `lower-thirds-skills` for transparent lower thirds for OBS, Premiere and Resolve
- `b-roll-skills` for b roll drawn from what you say in a talking head video
- `webgl-animation-skills` (3) for 3D and WebGL
- `manim-skills` for math animation
- `javascript-animation-skills` (2) for canvas films drawn frame by frame in JavaScript

Skills that make a visual have a deliver and verify loop: the agent renders a frame, takes a screenshot and checks it before you get the result. Web skills render a standalone HTML file. Video skills render with Remotion or Manim.

## Setup guide

1. Pick a pack. If you want to try it with no API keys, start with `javascript-animation-skills`. Every frame and the music are made in code, on your machine.
2. Install the pack:

```bash
npx skills add iart-ai/javascript-animation-skills
```

Or add it as a Claude Code plugin:

```text
/plugin marketplace add iart-ai/javascript-animation-skills
/plugin install javascript-animation-skills
```

3. Install what the render needs: Node 18 or newer, ffmpeg, Chrome (or `npx playwright install chromium`) and `npm i playwright-core`.
4. Ask Claude Code for the animation you want. Installed skills start on their own when your prompt matches their work.
5. For more packs, run the same command with the pack name, for example `npx skills add iart-ai/tiktok-video-skills`.

## Watch out

- It is 19 separate installs, not one.
- Not all 56 skills render video. The 5 skills in the freelance pack are business docs (pricing, briefs, revisions, delivery), and some skills are know how only.
- The talking head pack needs paid fal and ElevenLabs API keys. Its example cost $0.30 for one 5 second shot, before speech and transcription.
- The Manim pack needs Python, ffmpeg and LaTeX.
- The repo's About line says 50 skills and 14 packs. The README is newer and says 56 skills in 19 packs.
- The video skills use Remotion, which has its own license: larger companies need a paid Remotion license.
- The README also sells iart.ai, a paid app and MCP server (Pro, Ultra and Max plans). The skills themselves are free and MIT.
- Claude Code needs a paid Claude plan.

Sources: [Motion Skills README](https://github.com/iart-ai/motion-skills), [javascript-animation-skills README](https://github.com/iart-ai/javascript-animation-skills), [talking-head-skills README](https://github.com/iart-ai/talking-head-skills) (checked November 24, 2026).
