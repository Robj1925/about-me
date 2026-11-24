---
title: "Remotion Claude Code Plugin: Setup Guide and Links"
date: "2026-11-24"
excerpt: "How to install the official Remotion plugin for Claude Code, the prompt that starts a video, what the skills do and who needs a paid Remotion license."
thumbnail: "assets/images/blog-thumbnails/remotion-claude-code-plugin-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Remotion
  - AI Video
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Plugin repo: [github.com/remotion-dev/claude-code-plugin](https://github.com/remotion-dev/claude-code-plugin)
- Plugin docs: [remotion.dev/docs/agents/claude-code-plugin](https://www.remotion.dev/docs/agents/claude-code-plugin)
- The same skills as a standalone repo: [github.com/remotion-dev/skills](https://github.com/remotion-dev/skills)
- Skills docs: [remotion.dev/docs/agents/skills](https://www.remotion.dev/docs/agents/skills)
- Remotion license: [LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md) and [pricing](https://www.remotion.dev/docs/license/pricing)
- Remotion video, edited with Claude Code only: [youtube.com/watch?v=EayVHo7XTEg](https://www.youtube.com/watch?v=EayVHo7XTEg)

## What it is

Remotion is a framework that makes videos with React code. Remotion maintains this plugin for Claude Code. It adds skills only: no slash command folder, no MCP server and no hooks. On November 24, 2026 the plugin had 14 skills, from remotion-best-practices (the router) to create, render, captions, studio, license and upgrade. My video said 13. Remotion added a remotion-elements skill after I recorded it.

The plugin repo had 103 stars on November 24, 2026. The same skills sit in remotion-dev/skills, which had 7,950 stars on the same day. Both repos are generated from the Remotion monorepo, so they update with each Remotion release. When Remotion 4.0.541 came out on November 5, the plugin updated 21 minutes later.

## Setup guide

You need Claude Code and Node.js.

1. Add the Remotion marketplace and install the plugin from the terminal:

```bash
claude plugin marketplace add remotion-dev/claude-code-plugin
claude plugin install remotion@remotion
```

2. Restart Claude Code.
3. In the Claude desktop app you can do it without the terminal: select Code, open Customize in the sidebar, then Plugins, then Discover. Search for "remotion" and click Add.
4. Start a new Claude Code session in the folder where you want the video. Call the create skill and add your prompt. This is the example from the docs, and the one from my video:

```text
/remotion:remotion-create Make a promo video for a record store
```

5. Claude writes the video in React and opens Remotion Studio, a live preview in your browser. Ask for changes there.
6. When you like it, ask for the final file ("render it", "export the MP4"). The skill does not render unless you ask for it clearly.

If you use another agent, or only want the skills, install them from the skills repo instead:

```bash
npx skills add remotion-dev/skills
```

## Watch out

- Remotion itself is not MIT for everyone. It is free for individuals, for for profit companies with up to 3 employees and for non profits, and that includes commercial videos. Bigger companies must buy a Company License.
- Remotion says the license will change a little in Remotion 5.0. Check the license page before you use it for client work.
- The plugin files say MIT, but the plugin repo has no LICENSE file of its own.
- The README shows the command as `/remotion-create`. The docs use `/remotion:remotion-create`. If one does not work, try the other.
- Claude Code needs a paid Claude plan.
- The gallery clips on remotion.dev were made with Claude Code and Remotion before this plugin existed. They show what Remotion can do, not output from the plugin.

Sources: [plugin repo and README](https://github.com/remotion-dev/claude-code-plugin), [plugin docs](https://www.remotion.dev/docs/agents/claude-code-plugin), [remotion-dev/skills](https://github.com/remotion-dev/skills), [Remotion LICENSE.md](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md), [remotion on npm](https://www.npmjs.com/package/remotion) (all checked November 24, 2026).
