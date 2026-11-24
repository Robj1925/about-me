---
title: "Kalem: One Engine Per Scene in Claude Code, Setup Guide"
date: "2026-11-24"
excerpt: "Kalem is an open source Claude Code skill that splits your video into scenes and picks the best engine for each one, from Paper.js to Manim to Three.js."
thumbnail: "assets/images/blog-thumbnails/kalem-claude-code-video-engines-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Animation
  - Open Source
  - AI Video
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Kalem on GitHub: [github.com/leodavincs/kalem](https://github.com/leodavincs/kalem)
- English README: [README.en.md](https://github.com/leodavincs/kalem/blob/main/README.en.md)
- Plate engine (levha) README: [motorlar/levha](https://github.com/leodavincs/kalem/blob/main/motorlar/levha/README.en.md)
- Example video from the repo (the flying machine): [ornek/ucan-makine](https://github.com/leodavincs/kalem/tree/main/ornek/ucan-makine)

Kalem was made by Leo (GitHub user leodavincs). Kalem is Turkish for "pen". The repo had 123 stars on November 24, 2026.

## What it does

When you ask an AI to make a video in code, the results often look the same, because every scene is drawn with the same engine. Kalem splits your video into scenes, looks at what happens in each one and picks the engine that draws it best:

| Inside the scene | Engine |
|---|---|
| A line that draws itself, a sketch | Paper.js |
| A character, a shape that morphs | Plain canvas |
| Explosions, dust, thousands of particles | PixiJS |
| Text, numbers, counters, info cards | HyperFrames (HTML + GSAP) |
| Real 3D with camera, light and shadow | Three.js |
| Formulas, graphs, diagrams | Manim |
| A running machine as a notebook plate | Levha |

Then it renders each scene, joins them with transitions such as a page flip and adds sound effects that are locked to the frame. The example in the repo is Leonardo's flying machine: six scenes, each with its own engine.

## Setup guide

You need macOS or Linux, Node 20 or newer, Python 3, ffmpeg, Google Chrome and Claude Code. Manim is optional (`pip install manim`).

1. Clone the repo and run the install script:

```bash
git clone https://github.com/leodavincs/kalem.git
cd kalem
./kurulum.sh
```

2. Open Claude Code in the repo folder and describe your video:

```text
claude
/kalem A 50-second landscape video about Leonardo da Vinci's flying machine...
```

3. Claude shows a scene table first (scene, engine, why) and waits for your OK.
4. It renders every scene in its own folder, checks the frames and joins them into `projeler/<name>/cikti.mp4`.

To join the scenes by hand, with a small card on each scene that names its engine:

```bash
python3 birlestir.py projeler/<name> --gecis BookFlip --etiket
```

Frames come from the frame number and randomness is seeded, so the same command gives the same frames. Each scene writes a list of events, and the sound is made from that list, so it does not drift from the picture.

## Watch out

- The skill, its prompts and most file names are in Turkish. The English README says Claude follows them in any language. Ask for the scene table and the on screen text in English. The example video has Turkish on screen text.
- The skill tells Claude to uppercase text with Turkish rules. On English text that can turn "i" into "İ". Tell Claude to use plain uppercase for English text.
- The engine table is one person's taste. The author raced 20 tools on the same scene and scored them by eye.
- It is a young repo with one author and no releases. The last push was November 6, 2026.
- GitHub shows the license as "Other". The LICENSE file is MIT, plus a note that the fonts are under the SIL Open Font License 1.1.
- The levha engine's notebook engraving step calls the OpenAI Codex CLI, which costs money. The blue technical drawing style runs in code only.
- Kalem is free, but Claude Code needs a paid Claude plan.
- I did not render a full video with it myself. The demo in my Short is from the repo.

Sources: [Kalem repo](https://github.com/leodavincs/kalem), [English README](https://github.com/leodavincs/kalem/blob/main/README.en.md), [levha README](https://github.com/leodavincs/kalem/blob/main/motorlar/levha/README.en.md) (checked November 24, 2026).
