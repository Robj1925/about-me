---
title: "5 Claude Code Skills That Animate For You: Links and Setup Guide"
date: "2026-11-19"
excerpt: "The 5 free Claude Code animation skills from my Short (PixelFX, Animate, BB-Video, Motion Skills and Lottie), with the GitHub links and the install command for each."
thumbnail: "assets/images/blog-thumbnails/top-5-claude-code-animation-skills.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Animation
  - Open Source
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

1. PixelFX: [github.com/patch-gg/pixelfx](https://github.com/patch-gg/pixelfx)
2. Animate: [github.com/cth9191/animate](https://github.com/cth9191/animate)
3. BB-Video: [github.com/BubbleBrainBB/BB-Video](https://github.com/BubbleBrainBB/BB-Video)
4. Motion Skills: [github.com/iart-ai/motion-skills](https://github.com/iart-ai/motion-skills)
5. Lottie: [github.com/diffusionstudio/lottie](https://github.com/diffusionstudio/lottie)

All 5 are free and MIT licensed. Each one makes animation in code, so you describe what you want and Claude Code writes and renders it.

## 1. PixelFX

244 pixel art effects (fire, spells, impacts, combat moves), each one a small piece of code, plus a skill that teaches Claude Code to find, export and make new effects. It had 8,311 stars on November 19, 2026.

Install it as a plugin inside Claude Code:

```text
/plugin marketplace add patch-gg/pixelfx
/plugin install pixelfx@pixelfx
```

Then ask for an effect, for example a fireball sprite sheet in your game's colours.

## 2. Animate

Short animated videos made entirely in code: one canvas, drawn frame by frame and rendered to MP4. It ships with 7 styles (cut paper, crosshatch ink, riso print, sketchbook, math, pixel and isometric), and it can match a new look from your own reference images.

It needs Playwright and Chromium for the render:

```bash
npm i -g playwright && npx playwright install chromium
```

Then install the plugin in Claude Code:

```text
/plugin marketplace add cth9191/animate
/plugin install animate@animate
```

The skill asks a few questions first (subject, length, style), then checks the story and the look with you before it animates.

## 3. BB-Video

Narrated explainer and launch videos in pure code. The README lists 37 visual styles, from whiteboard and blueprint to manga and a golden age cartoon look, in 16:9 or 9:16.

```bash
npx skills add BubbleBrainBB/BB-Video --skill bb-video -a claude-code -g
```

For the voiceover it uses edge-tts, so also run `pip install edge-tts`.

## 4. Motion Skills

56 motion graphics skills in 19 packs: kinetic type, data charts, explainers, TikTok and Reels, 3D and WebGL, lower thirds and b-roll. Each pack is its own repo, so you install only the ones you need:

```bash
npx skills add iart-ai/tiktok-video-skills
npx skills add iart-ai/data-animation-skills
```

The full list of packs, with an install command for each, is at [iart.ai/skills](https://www.iart.ai/skills).

## 5. Lottie

Text to Lottie by Diffusion Studio. It generates Lottie animations (the small vector files apps and websites use) and opens them in a local player where you can scrub and keep editing.

```bash
npx skills add diffusionstudio/lottie
```

Then ask Claude Code to make a Lottie animation with text-to-lottie. The "hello" handwriting in my Short is a demo by @konstipaulus.

## Watch out

- The demos in the Short come from each repo or its authors, and some are my own renders. Your results depend on your prompt.
- The skills are free, but Claude Code needs a paid Claude plan.
- Animate and BB-Video render video with a headless browser and ffmpeg, so a long piece can take a few minutes.
- The star counts change every day. I checked them on November 19, 2026.

Sources: the README of each repo above (checked November 19, 2026).
