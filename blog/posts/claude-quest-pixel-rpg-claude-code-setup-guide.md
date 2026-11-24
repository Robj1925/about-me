---
title: "Claude Quest: Claude Code as a Pixel RPG, Setup Guide"
date: "2026-11-24"
excerpt: "How to install Claude Quest, the pixel art window that acts out every Claude Code tool call and turns your context window into a mana bar."
thumbnail: "assets/images/blog-thumbnails/claude-quest-pixel-rpg-claude-code-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Quest
  - Pixel Art
  - Developer Tools
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- GitHub repo: [github.com/Michaelliv/claude-quest](https://github.com/Michaelliv/claude-quest) (202 stars on November 24, 2026)
- Releases (macOS, Linux, Windows): [github.com/Michaelliv/claude-quest/releases](https://github.com/Michaelliv/claude-quest/releases)
- npm package: [npmjs.com/package/claude-quest](https://www.npmjs.com/package/claude-quest)
- Author post by Michael Livshits (January 16, 2026): [michaellivs.com/blog/claude-quest](https://michaellivs.com/blog/claude-quest/)

## What it does

Claude Quest opens a separate pixel art window next to Claude Code. A small wizard version of Claude acts out what Claude Code does, in real time:

| Claude Code action | What you see |
| --- | --- |
| Reading files | Casting a spell |
| Bash commands | Attack animation |
| Writing code | Scribbling |
| Thinking | Contemplating |
| Error | Taking damage |
| Success | Victory dance |
| Git push | A rainbow SHIPPED banner |

The mana bar shows your context window. It starts full and drains as the chat grows. When Claude compacts, it refills. The character walks through five biomes that change every 20 seconds, and you unlock hats, faces, auras and trails as you level up.

It does not need API keys and it makes no network calls. It only reads the local Claude Code log files (JSONL files in `~/.claude/projects/`).

## Setup guide

1. Make sure you have Node.js 16 or newer.
2. Install it globally:

```bash
npm install -g claude-quest
```

The install downloads a prebuilt binary from the latest GitHub release (v0.1.9), so you do not need Go or Xcode.

3. Start Claude Code in your project folder as usual.
4. Open a new terminal tab in the same folder and run:

```bash
cq
```

5. Use Claude Code. The window reacts to every tool call.

Other commands from the README:

```bash
cq watch ~/dir          # watch a specific project
cq replay <file.jsonl>  # replay a saved conversation
cq doctor               # check that Claude Quest can run
```

Press `Tab` in the window to open the accessory picker.

## Watch out

- License: the README and package.json say MIT, but the repo has no LICENSE file and GitHub shows no license. It is free to use, but ask the author before you reuse the code.
- It is a community project. The README says it is not affiliated with Anthropic.
- It is not new. The repo started in January 2026 and the last commit was April 13, 2026.
- The mana bar is hard coded to a 200k token context window. On a bigger context window the bar is not exact.
- Open issue #17: when you switch sessions, it can replay old events and add XP. Start it on a fresh session.
- Live mode needs an active Claude Code session, and Claude Code needs a paid Claude plan.

Sources: [Claude Quest README](https://github.com/Michaelliv/claude-quest) (checked November 24, 2026), [GitHub issues](https://github.com/Michaelliv/claude-quest/issues), [author post](https://michaellivs.com/blog/claude-quest/).
