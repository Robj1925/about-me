---
title: "ReelMimic: Copy Any Video Style with Claude Code, Setup Guide"
date: "2026-11-24"
excerpt: "How to install ReelMimic, the open source tool that studies a reference video and has Claude Code agents animate a new one in the same style."
thumbnail: "assets/images/blog-thumbnails/reelmimic-video-style-cloning-setup-guide.jpg"
tags:
  - Claude Code
  - ReelMimic
  - AI Video
  - Animation
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- GitHub repo: [github.com/edenfunf/reelmimic](https://github.com/edenfunf/reelmimic) (2,093 stars on November 24, 2026, MIT license)
- Architecture docs: [docs/ARCHITECTURE.md](https://github.com/edenfunf/reelmimic/blob/main/docs/ARCHITECTURE.md)
- Compiler and validation notes: [docs/COMPILER.md](https://github.com/edenfunf/reelmimic/blob/main/docs/COMPILER.md)
- Optional keys: [secrets.example.json](https://github.com/edenfunf/reelmimic/blob/main/secrets.example.json)
- Troubleshooting: [TROUBLESHOOTING.md](https://github.com/edenfunf/reelmimic/blob/main/TROUBLESHOOTING.md)

## What it does

You give ReelMimic a reference video (a file, a phone recording or a YouTube link) and a one line brief. It measures the shot count, shot lengths, BPM, transitions, colors, framing and camera moves. Then it shows you a plan (storyboard, characters, assets and style frames). Nothing renders until you approve.

After you approve, up to 6 AI agents work on different parts of the video at the same time. Each finished shot goes to a new agent for review, so no agent grades its own work. Every fix comes with before and after screenshots.

It draws in 7 engines, all 2D: vector and motion graphics (built on HyperFrames), hand painted watercolor, crayon picture book, pixel art, paper cutout stop motion, whiteboard doodle and anime cel.

## Setup guide

You need Node.js 22.18 or newer, Python 3.10 or newer, FFmpeg, Chrome, and Claude Code or Codex CLI (logged in).

1. Clone the repo and run the install script:

```bash
git clone https://github.com/edenfunf/reelmimic.git && cd reelmimic
./install.sh
./start.sh
```

On Windows, double click `install.bat` and then `start.bat`.

2. Open `http://localhost:4318` in your browser.
3. If something is missing, run the check again with `cd app && npm run doctor`.
4. On the home page, drop in a reference video or paste a link, say what you want to make, and pick Claude Code or Codex.
5. Read the plan. Ask for changes in the chat on the right. Then click **Approve and start**.
6. Follow the shots in the **Production line** tab. When the video is done, leave notes at any second that looks off.

You do not need any extra API key. Every key in `secrets.example.json` is optional (voices, more stock media, posting). Openverse works without a key.

## Watch out

- It is slow. The README says a 30 to 60 second video usually takes 1 to 3.5 hours after you approve the plan. Watercolor and crayon are the slowest.
- All the work counts toward your Claude Code or Codex usage. Claude Code needs a paid Claude plan. If you hit a limit, the job pauses and can continue later.
- It was tested mostly on Windows. macOS and Linux have had less testing.
- 2D animation only. No live action and no real people.
- The README says the five newer engines are young and have had less real world use than the first two.
- It copies the technique, not the look exactly. In the repo's own validation notes (older pipeline), color matched well and motion matched less.
- It never reuses the footage, characters or assets of the reference. You still need the rights for what you make.
- The star count reset to zero on October 20, 2026, when the repo was made private by mistake (issue #115). The count above is since that reset.

Sources: [ReelMimic README](https://github.com/edenfunf/reelmimic) (checked November 24, 2026), [docs/COMPILER.md](https://github.com/edenfunf/reelmimic/blob/main/docs/COMPILER.md), [issue #115](https://github.com/edenfunf/reelmimic/issues/115).
