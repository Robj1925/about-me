---
title: "11 Claude Code Animation Styles: Prompts and Setup Guide"
date: "2026-11-22"
excerpt: "One coder desk scene in 11 animation styles, all made in code with Claude Code. The free prompt library, the style codes, the scene prompt and the render command."
thumbnail: "assets/images/blog-thumbnails/11-claude-code-animation-styles.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Animation
  - Open Source
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## The prompt library

All 11 styles come from [github.com/XiaoyeCodes/code-animation-prompts](https://github.com/XiaoyeCodes/code-animation-prompts): 341 code animation style prompts and 196 reference stills, packaged as a Claude Code skill. It had 1,393 stars on November 22, 2026.

The prompts are written in Chinese. Claude Code reads them without a problem, so you can ask in English.

## The 11 styles and their codes

Each style has a short code. Ask Claude Code for the code and it loads the right prompt.

1. Pop Art: `K14`
2. One Line: `L21`
3. Tilt Shift: `L57`
4. Synthwave VHS: `V12`
5. Ink Wash: `Z1`
6. Rubber Hose: `L45`
7. Blueprint: `L36`
8. 3D Cartoon: `K25`
9. Halftone Comic: `K13`
10. Cyber Neon: `K34`
11. Toy Brick Style: `L55`

## Install

```bash
git clone https://github.com/XiaoyeCodes/code-animation-prompts.git
mkdir -p ~/.claude/skills
cp -R code-animation-prompts/skills/code-animation-prompts ~/.claude/skills/
```

Check that it works:

```bash
python3 ~/.claude/skills/code-animation-prompts/scripts/styles.py show K14
```

To export MP4 files you also need Playwright with Chromium, and FFmpeg:

```bash
python3 -m pip install playwright
python3 -m playwright install chromium
```

## The scene prompt

The trick is to keep one scene and change only the style. This is the brief I gave Claude Code for every style:

```text
Use the code-animation-prompts skill, style <CODE>.
Make a 4 second vertical animation, 1080x1920, 30 fps, that loops cleanly.
Scene: night, a person at a desk seen from a 3/4 side view, typing.
A monitor shows lines of code that scroll up, with a blinking cursor.
A desk lamp throws a warm light cone, a mug has rising steam,
and a big window behind shows a city skyline with blinking windows.
Window in the top 40 %, person and monitor in the middle, desk edge at the bottom.
No text, no logos. Take only the look from the style prompt, not its story.
Add one motion that belongs to the style (film grain, chalk dust, VHS jitter, ink bleed).
Expose window.renderAt(t) so the clip can be rendered frame by frame.
```

## Render it

```bash
python3 ~/.claude/skills/code-animation-prompts/scripts/render_video.py index.html \
  --output clip.mp4 --duration 4 --fps 30 --width 1080 --height 1920
```

The renderer loads the page, sets the time for every frame and joins the frames with FFmpeg, so every render comes out the same.

## Watch out

- Each style is a new piece of code, so the look changes a little every time. I made 30 styles and kept the best 11.
- The 3D looks (3D Cartoon, Toy Brick) are faked with shading in 2D canvas or built with three.js. They look like 3D toys, not like a 3D film render.
- The library is free to use and share. Its license does not allow selling it as a course or a paid skill.
- Claude Code needs a paid Claude plan.

Sources: the repo README, INSTALL and LICENSE files (checked November 22, 2026).
