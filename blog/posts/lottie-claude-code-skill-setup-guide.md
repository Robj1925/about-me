---
title: "Text to Lottie Claude Code Skill: Setup Guide"
date: "2026-11-24"
excerpt: "How to install the text-to-lottie skill from Diffusion Studio, start its live player, get controls for your animation and export the Lottie JSON for web, iOS, Android or Flutter."
thumbnail: "assets/images/blog-thumbnails/lottie-claude-code-skill-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Lottie
  - Motion Design
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/diffusionstudio/lottie](https://github.com/diffusionstudio/lottie)
- The skill file: [skills/text-to-lottie/SKILL.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/SKILL.md)
- Player setup: [references/player-contract.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/references/player-contract.md)
- SVG limits: [references/svg-compatibility.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/references/svg-compatibility.md)
- Launch video by @konstipaulus (the "hello" demo from my video): [x.com/konstipaulus/status/2064011863889788972](https://x.com/konstipaulus/status/2064011863889788972)

## What it is

Lottie is the small vector animation file that apps and websites play. Text to Lottie is a skill from Diffusion Studio that lets Claude Code (or Codex, or any agent that supports skills) write those files from a text prompt, an SVG, real data or a screenshot.

The skill does not stop at the JSON. It sets up a local player in your browser, and each animation is a scene in that player. The scene updates live while Claude edits the file, so you can scrub every frame, jump to an exact frame and change properties in a panel.

The repo had 5,814 stars on November 24, 2026 (my video said over 5,600). It is MIT. It is not new: it was created in June 2026, and the last change to the repo was on July 25, 2026, so nothing changed since the video.

## Setup guide

You need Node.js and npm. No API key and no paid service. It runs on your Claude Code plan.

1. Install the skill:

```bash
npx skills add diffusionstudio/lottie
```

2. Start Claude Code in an empty folder and ask it to make a Lottie animation with `text-to-lottie`. This is the example prompt from the README (the "hello" in my video):

```text
Create a Lottie animation from the SVG path in https://github.com/JaceThings/SF-Hello/blob/main/SVG/hello-en.svg. Reveal the path with an animation that follows the natural path direction. Apply a premium apple themed gradient to the path. Use ease-in-out timing, a transparent background, and preserve the original SVG geometry.
```

3. The skill sets up the player for you. If you want to do it by hand, these are the commands from the skill:

```bash
npx degit diffusionstudio/lottie my-animation
cd my-animation
npm install
npm run dev
```

The player uses port 3030 by default. If that port is busy, it takes the next free one, so use the URL that the terminal prints.

4. Each scene lives at `public/projects/<project>/<scene-N>/lottie.json`, with an optional `controls.json` for the properties panel. Add `?frame=N` to the URL to see one exact frame.

5. Ask for the controls you want. By default you usually get only a background color control. Ask for a logo color, a stroke width or other properties and they show up as live pickers and sliders.

6. Click Export in the player to download a zip with the animation, images and fonts. The README shows how to play the JSON on the web (lottie-web), in React Native (Skia), iOS (Swift), Android (Kotlin) and Flutter. You can also import it into After Effects.

The README has 5 prompt tips: give it real SVGs, data or screenshots; use motion words like ease-in and ease-out; describe camera moves; ask for the controls you need; and give the FPS and frame count if they matter.

## Watch out

- SVG filters, shadows, blurs and blend modes get rebuilt as simple Lottie shapes. Compare the frames with your source before you ship.
- It needs Node and npm.
- The player runs in your browser, not inside Claude Code.
- The demo clips in the repo and the launch video look like they were made in Codex, not Claude Code. The skill works in both.
- Diffusion Studio also has a main video editor with paid AI credits. That is a different product. This repo is free and MIT.
- Claude Code needs a paid Claude plan.

See it next to 4 other skills in [Top 5 Claude Code animation skills](/blog/top-5-claude-code-animation-skills.html).

Sources: [repo and README](https://github.com/diffusionstudio/lottie), [SKILL.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/SKILL.md), [player-contract.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/references/player-contract.md), [svg-compatibility.md](https://github.com/diffusionstudio/lottie/blob/main/skills/text-to-lottie/references/svg-compatibility.md), [launch post](https://x.com/konstipaulus/status/2064011863889788972) (all checked November 24, 2026).
