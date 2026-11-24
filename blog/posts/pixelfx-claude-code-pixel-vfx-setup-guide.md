---
title: "PixelFX for Claude Code: Pixel Art VFX Setup Guide"
date: "2026-11-24"
excerpt: "How to install pixelfx, the MIT library of 244 code drawn pixel art effects, export sprite sheets for Godot, Unity or Phaser, and use its Claude Code skill to make new effects."
thumbnail: "assets/images/blog-thumbnails/pixelfx-claude-code-pixel-vfx-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Pixel Art
  - Game Development
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/patch-gg/pixelfx](https://github.com/patch-gg/pixelfx)
- Live gallery (plays every effect): [patch-gg.github.io/pixelfx](https://patch-gg.github.io/pixelfx/)
- Full list of effects: [docs/CATALOG.md](https://github.com/patch-gg/pixelfx/blob/main/docs/CATALOG.md)
- How to write your own effect: [docs/AUTHORING.md](https://github.com/patch-gg/pixelfx/blob/main/docs/AUTHORING.md)
- Launch post by Rehan Sheikh, CEO of Patch: [x.com/rehan_shei/status/2116062680121540611](https://x.com/rehan_shei/status/2116062680121540611)
- The method behind it, by Hugo Duprez: [How to make (good) pixel art effects with Claude](https://www.spritefusion.com/blog/how-to-make-good-pixel-art-effects-with-claude)

## What it is

pixelfx is a library of 244 pixel art effects in 21 categories, from Patch. Fire, explosions, ice, lightning, magic, weather, UI, pickups, critters, and 12 full combat moves. There are no image files. Each effect is one small JavaScript file that draws itself, so you can recolor it, mirror it and export it.

The 12 moves and the 61 effects with a character are acted out: a grey dummy winds up, freezes on contact, the target takes the hit, and then he recovers.

The repo had 9,036 stars on November 24, 2026. My video said 5,369 (November 5). Since the video, Patch shipped version 0.3.1, which adds a section on how to publish a game on Patch and a link to play pixelfx on Patch. The effect count is still 244.

## Setup guide

You need Node.js 18 or newer. ffmpeg is optional (only for GIF and MP4 export). No API key.

1. Get the repo:

```bash
git clone https://github.com/patch-gg/pixelfx.git
cd pixelfx
```

2. Export any effect as a sprite sheet. This writes a transparent PNG grid and an Aseprite style JSON file:

```bash
node tools/render.mjs ice/frost-nova --sheet
```

Phaser's atlas loader reads it, and so do the Aseprite importers for Godot and Unity. To export the whole library to `sheets/`, run `node tools/sheets.mjs`.

3. Recolor any effect with a palette (a dark to bright list of hex colors):

```bash
node tools/render.mjs fire/torch --gif --opts '{"palette": ["#102","#215","#43a","#8cf","#cff","#fff"]}'
```

4. For a browser game (canvas, Phaser, PixiJS, Kaplay, three.js), install it as a package and use the code directly:

```bash
npm i github:patch-gg/pixelfx
```

5. Install the Claude Code skill. Inside Claude Code, run:

```text
/plugin marketplace add patch-gg/pixelfx
/plugin install pixelfx@pixelfx
```

Or copy `skills/pixelfx` into `~/.claude/skills/`.

6. Ask for what you want. Examples from the README:

```text
Export the fire and explosions categories as sprite sheets for Godot.
Make five takes on a coin pickup sparkle and show me the best two.
This hit effect feels floaty. Make it punchier.
```

7. To make a new effect by hand, start from a template, render it and check it:

```bash
node tools/new.mjs arcane/my-spell
node tools/render.mjs arcane/my-spell
node tools/check.mjs arcane/my-spell
```

Then look at the contact sheet, fix the worst thing and render again. The skill does the same loop: draft, render, look, refine. Run `node tools/serve.mjs` to see the gallery locally with your effects in it.

## Watch out

- Effects drawn on the body (frost, poison, a scan line) paint the stock grey dummy, not your hero. Regenerate those for your own character before you ship them.
- Godot and Unity have no native plugin. They read the sheet through Aseprite importers.
- The skill makes new effects. The sprite sheets come from the export tool, not from the skill.
- New effects are only as good as the loop. Expect several rounds, not one prompt.
- The launch post says "232" effects. That was the first release. The repo has 244 now.
- MIT covers the code and the effects, commercial use included. The Patch Pixel font in `gallery/fonts` is not covered (see NOTICE.md).
- Publishing a game on Patch needs Patch Desktop open on a Windows PC. That part is optional.
- The method is from Hugo Duprez, and some effects adapt his MIT code and Hollow Crown's MIT source.
- The skill runs inside Claude Code, which needs a paid Claude plan. The library and export tools do not need Claude.

See it next to 4 other skills in [Top 5 Claude Code animation skills](/blog/top-5-claude-code-animation-skills.html).

Sources: [pixelfx repo and README](https://github.com/patch-gg/pixelfx), [package.json](https://github.com/patch-gg/pixelfx/blob/main/package.json), [CATALOG.md](https://github.com/patch-gg/pixelfx/blob/main/docs/CATALOG.md), [live gallery](https://patch-gg.github.io/pixelfx/), [launch post](https://x.com/rehan_shei/status/2116062680121540611) (all checked November 24, 2026).
