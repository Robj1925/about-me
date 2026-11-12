---
title: "94 Free Blender Skills for Claude Code 3D Scenes"
date: "2026-11-11"
excerpt: "A free MIT repo gives Claude Code 94 Blender skills for modeling, lighting, camera moves, rendering and game engine export. Here is how it works, how to set it up on a Mac, and the catches."
thumbnail: "assets/images/blog-thumbnails/94-free-blender-skills-for-claude-code.jpg"
youtubeId: "kY6zdK_AkFI"
tags:
  - Claude Code
  - Open Source
  - AI Tools
  - Free Tools
  - AI Agents
---

94 free Blender skills let Claude Code build your 3D scenes for you. If Blender's menus ever made you quit, you can now type the scene you want and let the agent do the clicking.

## What it is

[blender-skills](https://github.com/arjun988/blender-skills) is a GitHub repo by arjun988. It is MIT licensed and had 1,943 stars on November 5, 2026. It holds 94 skill folders for Claude Code, and the README says it also works with Cursor, Kiro and Codex.

The repo is not new. It was created in July 2026 and has had no updates since July 10.

## How it works

One skill, `blender-director`, reads your prompt and hands the work to specialist skills. They cover:

- **modeling**, including hard surface work and geometry nodes
- **lighting** and **camera moves**
- **rendering**
- **export** to Unity, Unreal and Godot

Claude does not click through Blender itself. It drives Blender through the free [Blender MCP](https://github.com/ahujasid/blender-mcp) add on by ahujasid, which runs a small server inside your own copy of Blender. You need Blender 3.0 or newer, Python 3.10 or newer, and uv.

## Setup on a Mac

1. Clone the repo: `git clone https://github.com/arjun988/blender-skills.git`
2. Copy the skills into your project: `cp -r blender-skills/.claude/skills .claude/`
3. Add the MCP server: `claude mcp add blender uvx mcp-for-blender`
4. Install and enable the add on in Blender, then hit connect.

Skip the repo's own `.mcp.json` file on a Mac. It starts the server with `cmd /c`, which is a Windows command, so it will not run on macOS. The `claude mcp add` line above is the Mac way.

## The catches

- **Many skills are thin.** 47 of the 94 SKILL.md files are under 1,000 bytes. The director skill and the core skills carry most of the weight.
- **No before and after.** The author never posted a comparison with and without the skills. An open issue asks for one and has no reply, so test it yourself.
- **It runs real Python.** The add on can run any Python code inside Blender. Save your .blend file before you start.
- **Claude Code is not free.** Blender, the skills and the add on are free, but Claude Code needs a paid Claude plan.

Start with the director skill. It picks which specialists to call, so you do not have to learn all 94.

For another free skill that makes Claude Code produce better looking output, see [Hallmark stops Claude Code building AI slop](/blog/hallmark-free-skill-stops-claude-code-building-ai-slop.html). And if you want to write your own, read [How to build a Claude skill in 60 seconds](/blog/how-to-build-a-claude-skill-in-60-seconds.html).

Sources: [arjun988/blender-skills on GitHub](https://github.com/arjun988/blender-skills), [Blender MCP add on](https://github.com/ahujasid/blender-mcp)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
