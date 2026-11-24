---
title: "BB Video: 37 Art Styles for Claude Code Setup Guide"
date: "2026-11-24"
excerpt: "How to install BB Video, the open source skill that makes narrated explainers and website promos in pure code, in 37 art styles, plus the requirements and privacy catches."
thumbnail: "assets/images/blog-thumbnails/bb-video-claude-code-art-styles-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - AI Video
  - Open Source
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/BubbleBrainBB/BB-Video](https://github.com/BubbleBrainBB/BB-Video)
- Sample videos with sound: [samples release](https://github.com/BubbleBrainBB/BB-Video/releases/tag/samples)
- The skill folder: [skills/bb-video](https://github.com/BubbleBrainBB/BB-Video/tree/main/skills/bb-video)
- Voice engine: [edge-tts](https://github.com/rany2/edge-tts)
- License: [MIT](https://github.com/BubbleBrainBB/BB-Video/blob/main/LICENSE)

BB Video is a free, open source agent skill by BubbleBrainBB. It had 215 stars on November 24, 2026 (153 when I made the video on November 9).

It makes narrated explainer videos and promo videos "in pure code", with no editing app and no stock footage. Every frame is drawn with HTML, SVG or canvas, rendered frame by frame in headless Chrome, and encoded with ffmpeg. Music and sound effects are synthesized in code.

You make one choice: the style. In my video I said 34 styles. The README now lists 37, for example whiteboard, origami, manga, a 1930s newsreel, a Bayeux tapestry, blueprint, watercolour and a rubber hose cartoon. It renders 16:9 and 9:16.

## Setup guide

You need Node.js 18 or newer, Google Chrome or Chromium, ffmpeg on your PATH, and Python 3 with edge-tts. You also need an internet connection for the voiceover, web fonts and a few libraries.

1. Install the skill globally for Claude Code:

```bash
npx skills add BubbleBrainBB/BB-Video --skill bb-video -a claude-code -g
```

Or copy the folder yourself:

```bash
git clone https://github.com/BubbleBrainBB/BB-Video.git
cp -r BB-Video/skills/bb-video ~/.claude/skills/
```

2. Install the voice engine:

```bash
pip install edge-tts
```

3. If Chrome is not in the default location, set `CHROME_PATH`.

4. Ask Claude Code for a video. These are the README's examples:

```text
Make a whiteboard explainer: why is the sky blue?
```

```text
Make a launch video for https://example.com, 16:9 and 9:16
```

For a promo, give it a URL. It researches the site, captures screenshots and uses the real UI and brand colours.

5. The agent shows you the facts, narration and storyboard first, then renders. Output goes to `videos/<name>/out/`. Open `videos/<name>/index.html` in a browser to preview and scrub.

Before the render, a lint check reports overlaps, text that leaves before it can be read and things off frame. After the render, a frame check looks for jumps, one frame flashes and dead air.

## Watch out

- Narration text is sent to Microsoft's online speech service, because that is how edge-tts works. Do not put confidential material in the narration.
- The voice is a computer voice. Your own voice is not part of the skill.
- Most README samples are narrated in Chinese. The README says Chinese and English are fully tuned.
- `toy3d` loads three.js from a CDN. Blender 3.6 or newer is optional for its mascots.
- Rendering opens a project's `index.html` with local file access, so it runs that project's code. Render only projects you or your agent made.
- The skill is free, but Claude Code needs a paid Claude plan.

Sources: [BB Video README](https://github.com/BubbleBrainBB/BB-Video), [samples release](https://github.com/BubbleBrainBB/BB-Video/releases/tag/samples), [edge-tts](https://github.com/rany2/edge-tts).
