---
title: "Claude Animation: Hand Drawn 2D Skill Setup Guide"
date: "2026-11-24"
excerpt: "How to install Claude Animation, the open source Claude Code skill that makes hand drawn looking 2D films in JavaScript, render its ant film and know its limits."
thumbnail: "assets/images/blog-thumbnails/claude-animation-hand-drawn-skill-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - AI Animation
  - JavaScript
  - Open Source
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/buildwithhanif/claude-animation-skill](https://github.com/buildwithhanif/claude-animation-skill)
- The skill file: [SKILL.md](https://github.com/buildwithhanif/claude-animation-skill/tree/main/plugins/claude-animation/skills/claude-animation)
- Example stills: [docs folder](https://github.com/buildwithhanif/claude-animation-skill/tree/main/docs)
- License: MIT

Claude Animation is a free, open source Claude Code skill by GitHub user buildwithhanif. It had 185 stars on November 24, 2026 (153 when I made the video on November 14).

It makes 2D animation that looks drawn, written entirely as JavaScript. The library has paper grain, hatching, brush ink, pencil and watercolour. The ant rig has six legs with femur, knee, tibia, tarsus and claws, and walks on a tripod gait. There are also a chibi person, a critter, a beetle and bean people. The sound is synthesised from the same timeline as the picture.

The README says: "Node + ffmpeg. No browser, no GPU, no API keys."

## Setup guide

You need Node 20 or newer and ffmpeg (with ffprobe).

1. Add the marketplace and install the plugin:

```bash
claude plugin marketplace add buildwithhanif/claude-animation-skill
claude plugin install claude-animation@claude-animation-skill
```

2. Go to the skill folder inside the installed plugin and install its packages:

```bash
cd <plugin dir>/skills/claude-animation && npm install
```

3. Give Claude a story in plain text. Claude writes a new film file for it, looks at contact sheets, fixes, then renders the MP4.

You can also clone the repo and point any coding agent at `plugins/claude-animation/skills/claude-animation/SKILL.md`.

To test the install with the 32 second ant film, clone the repo and run:

```bash
git clone https://github.com/buildwithhanif/claude-animation-skill
cd claude-animation-skill
cd plugins/claude-animation/skills/claude-animation && npm install && cd -
cd examples/ant-colony && ./make.sh
```

The output is `out/ant-colony-final.mp4`. The README says it has 240 sound cues and renders in about 27 seconds on the author's machine. On my Mac mini it rendered 768 frames in 43 seconds on the first pass, and the full `make.sh` took 1 minute 45 seconds. No Xcode was needed.

The repo has four example films: ant-colony (32 s), money-quest (30 s), claude-balloon (a 30 s loop) and claude-game (30 s).

## Watch out

- The four example films are the author's work. Your own film takes a few look and fix passes with Claude. I did not test a full prompt to film run.
- The README says "give it a story and get a frame exact MP4". In practice the skill is rules plus a drawing library, and Claude writes the film code each time.
- The repo is free, but Claude Code is not. Writing a film uses your Claude plan's limits.
- It is a small project: 4 commits, all on September 23, 2026, and no releases.
- Watercolour is the bean people look. The ant rig is a glossy, textured style.
- The example films carry the author's watermark. Credit the repo if you show them.

Sources: [Claude Animation README](https://github.com/buildwithhanif/claude-animation-skill), [SKILL.md](https://github.com/buildwithhanif/claude-animation-skill/tree/main/plugins/claude-animation/skills/claude-animation), [example stills](https://github.com/buildwithhanif/claude-animation-skill/tree/main/docs).
