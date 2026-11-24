---
title: "Diffusion Studio Skills: Claude Code Edits a Timeline, Setup Guide"
date: "2026-11-24"
excerpt: "How to connect Claude Code to the Diffusion Studio video editor with its two open source skills, plus what is free and what costs credits."
thumbnail: "assets/images/blog-thumbnails/diffusion-studio-claude-code-skills-setup-guide.jpg"
tags:
  - Claude Code
  - Diffusion Studio
  - Video Editing
  - Claude Skills
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Skills repo: [github.com/diffusionstudio/skills](https://github.com/diffusionstudio/skills) (149 stars on November 24, 2026, MIT license)
- Editor repo: [github.com/diffusionstudio/editor](https://github.com/diffusionstudio/editor) (3,562 stars on November 24, 2026, MPL 2.0 license)
- App download: [diffusion.studio/download](https://www.diffusion.studio/download)
- Pricing: [diffusion.studio/pricing](https://www.diffusion.studio/pricing)
- Demo by Lucas Synnott: [Claude Code Edited This Entire Video](https://www.youtube.com/watch?v=f-4e8zy0hXI)
- Tutorial by Omar Kamal: [Diffusion Studio dapi Tutorial](https://www.youtube.com/watch?v=cKUsN2cViXo)

## What it does

Diffusion Studio is a desktop video editor with a real multi track timeline. The skills repo adds a `diffusion` plugin with two skills:

- `diffusion:editor`: analyze video, audio and images, generate media with AI, and compose video compositions.
- `diffusion:watch`: summarize footage, answer questions about it, pull quotes and find the moment something happens.

Claude does not click around your screen. It talks to the app through the `diffusion` command line tool that ships with the app, or through the app's local MCP server at `http://127.0.0.1:3274/mcp`. Every edit is written as code: the compositions are TSX files. If you move a clip yourself, Claude can continue from your change.

The plugin itself is Markdown only. It bundles no MCP server or executable and sends nothing anywhere.

## Setup guide

1. Install the app. On a Mac:

```bash
brew install --cask diffusionstudio/tap/editor
```

On Windows: `winget install --id XP9CW1WHRX3693 --source msstore`. You can also download it from [diffusion.studio](https://www.diffusion.studio).

2. Add the plugin in Claude Code:

```bash
claude plugin marketplace add diffusionstudio/skills
claude plugin install diffusion@diffusionstudio
```

In the Claude apps you can also add **Diffusion Studio** from the plugin directory under **Customize > Plugins**. For other agents: `npx skills add diffusionstudio/skills`.

3. Make a project folder on a local disk with your raw clips.
4. Ask Claude Code to cut them, for example: remove retakes and pauses, add captions and render the result. The skill opens the app in the background with `diffusion open --background`. To see it, run `diffusion window show`.
5. Check the timeline in the app, fix what you want by hand, and let Claude continue.

## Watch out

- Credits: the editor, agent editing and exports are free. Exports are unlimited. Watching, transcribing and generating media cost credits. The Free plan gives 50 credits one time. Pro is $20 a month billed yearly ($25 billed monthly) for 2,500 credits a month. Plus is $35 yearly ($50 monthly) and Max is $100 yearly ($150 monthly).
- `diffusion:watch` analyzes footage, so expect it to use credits.
- Mac needs macOS 12 or newer on Apple silicon (M1 or later). Windows x64 is supported too.
- Agent editing works in the desktop app only, not in the web version.
- Do not open a project in an iCloud, Dropbox, OneDrive or Google Drive synced folder. The editor skill warns against it.
- Claude Code needs a paid Claude plan.
- The skills repo started in July 2026. It is not brand new.

Sources: [skills README](https://github.com/diffusionstudio/skills) (checked November 24, 2026), [editor repo](https://github.com/diffusionstudio/editor), [Diffusion Studio pricing](https://www.diffusion.studio/pricing) (checked November 24, 2026), [Diffusion Studio homepage FAQ](https://www.diffusion.studio).
