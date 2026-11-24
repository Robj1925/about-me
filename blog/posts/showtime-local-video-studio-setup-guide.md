---
title: "Showtime: Local Video Studio for Claude Code Setup Guide"
date: "2026-11-24"
excerpt: "How to install Showtime, the open source plugin that turns Claude Code into a local video studio with a crew of ten sub agents and no API keys, plus the disk space and limits."
thumbnail: "assets/images/blog-thumbnails/showtime-local-video-studio-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Plugins
  - AI Video
  - Open Source
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/FavioVazquez/showtime](https://github.com/FavioVazquez/showtime)
- Project site and gallery: [faviovazquez.github.io/showtime](https://faviovazquez.github.io/showtime/)
- First video guide: [docs/guides/first-video.md](https://github.com/FavioVazquez/showtime/blob/main/docs/guides/first-video.md)
- FAQ: [docs/faq.md](https://github.com/FavioVazquez/showtime/blob/main/docs/faq.md)
- Troubleshooting: [docs/troubleshooting.md](https://github.com/FavioVazquez/showtime/blob/main/docs/troubleshooting.md)
- License: [MIT](https://github.com/FavioVazquez/showtime/blob/main/LICENSE)

Showtime is a free, open source "local video studio for your coding agent" by Favio Vazquez. It had 348 stars on November 24, 2026 (324 when I made the video on November 9).

You describe a video in one sentence. Your agent is the director and your machine renders. It does motion graphics, voice over, music, sound design, captions, footage editing and platform exports, with "no cloud AI services, no API keys and no uploads." It works in Claude Code, Codex, Cursor, Devin, OpenCode and other agents that support Agent Skills.

## Setup guide

1. Install the two prerequisites: [uv](https://docs.astral.sh/uv/) and [Node.js](https://nodejs.org) 24 or 22 LTS (20 or newer works). Restart Claude Code after that. On macOS and Linux, uv installs with:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. Add Showtime in Claude Code:

```text
/plugin marketplace add FavioVazquez/showtime
/plugin install showtime@showtime
```

This includes the skill, the ten crew agents, the MCP server and the plugin settings. For other agents, the README gives `npx skills add FavioVazquez/showtime`.

3. Ask for a video. This is the README's example:

```text
Make a 20-second launch video for this repo, with a voice-over and upbeat music.
```

4. The first time, the agent tells you the download size and runs setup after you say yes. If the sandbox blocks the download, run setup once in a terminal (see Troubleshooting).

5. The agent states its assumptions in one line, shows a first look (stills or a fast draft), then renders and checks the result with `showtime qa`. Each request gets its own folder in `showtime-out/` with `final.mp4`, a poster and share text.

Say "show me options first" for studio mode (concept, look, music and storyboard first). Say "full crew" to bring all ten sub agents, or "no crew" to keep the job in one session. By default, a critic reviews every finished video.

## Watch out

- Disk space: setup downloads about 0.5 to 0.75 GB and takes 1.4 to 1.8 GB in `~/.showtime`. Bigger pieces, like the Parakeet transcription model (about 490 MB) and Manim, download the first time a video needs them.
- No GPU is needed, but render time depends on your machine. The README's 55 second showreel took 2 minutes 23 seconds on a 64 core CPU.
- The crew is optional. Only some members join by default, not all ten on every video.
- Status is "0.4, early". Windows 10/11 x64 desktop is not yet tested on a real machine.
- Showtime's code is MIT, but setup downloads tools with their own licenses. The static ffmpeg builds are GPL, and some optional models (MusicGen, CrisperWhisper) are non commercial.
- Some music tracks need a credit. Showtime writes it to `credits.txt`.
- The plugin is free, but Claude Code needs a paid Claude plan.

Sources: [Showtime README](https://github.com/FavioVazquez/showtime), [Showtime site](https://faviovazquez.github.io/showtime/), [FAQ](https://github.com/FavioVazquez/showtime/blob/main/docs/faq.md).
