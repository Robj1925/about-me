---
title: "OpenCode Browse: Let Claude Code Use Your Real Browser, Setup Guide and Links"
date: "2026-11-23"
excerpt: "OpenCode Browse is a free, MIT licensed MCP server and Chrome extension that lets Claude Code drive your real browser with your logins. It was just rewritten in Rust. Here are the official links, the setup steps and the limits."
thumbnail: "assets/images/blog-thumbnails/opencode-browse-claude-code-real-browser.jpg"
tags:
  - Claude Code
  - MCP
  - AI Agents
  - Open Source
  - Tutorial
guide: true
---

This page has the official links and the setup steps for OpenCode Browse, so Claude Code can use your real browser.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Product page: [opencode.ai/product/browse](https://opencode.ai/product/browse)
- Source code (MIT): [github.com/anomalyco/browse](https://github.com/anomalyco/browse)
- The Rust rewrite pull request: [anomalyco/browse#264](https://github.com/anomalyco/browse/pull/264)
- Release notes for v0.1.0, the first Rust release: [v0.1.0](https://github.com/anomalyco/browse/releases/tag/v0.1.0)
- Dax Raad's post with the numbers: [x.com/thdxr/status/2121692397323350468](https://x.com/thdxr/status/2121692397323350468)

## What changed

OpenCode Browse is an MCP server plus a Chromium extension. Your agent opens tabs in the background of the browser you already use, with your tabs, your logins and your extensions. It reads pages, clicks, types, takes screenshots and records tabs. For a login, a 2FA prompt or a payment, it hands the tab back to you and continues when you click **Continue**.

In version 0.1.0 the tool was rewritten in Rust: one native binary, with no Node.js or Playwright underneath. Dax Raad says the rewrite "only cost $60". His comparison table:

| | Rust | Node (before) |
|---|---|---|
| Binary | 4.3 MB (1.9 MB gzipped) | 53 to 64 MB download |
| Relay at idle | 6 MB (6.6 MB after serving calls) | 353 MB after 6 days |
| Per session OpenCode connector | 3.5 MB idle, 5.6 MB after a few calls | about 190 MB per agent session (0.0.16) |

## Setup guide

These steps come from the official README and product page. It works in Chrome, Edge, Brave, Arc, Helium, Vivaldi, Opera and Chromium. The install script is for macOS and Linux (Windows has a PowerShell version).

1. Add the OpenCode Browse extension to your browser with **Add to Chrome** on the [product page](https://opencode.ai/product/browse). The product page says to install the extension first, because it walks you through the rest.
2. Run the install script in your terminal:

   ```bash
   curl -fsSL https://opencode.ai/browse/install | bash
   ```

   The install puts `browse` in `~/.local/bin` and shows a list of the agents on your computer. Make sure Claude Code is checked. To set up Claude Code without the list:

   ```bash
   browse install -a claude
   ```

3. Pair the browser. The install pairs the extension for you. If it did not, run `browse pair`, then enter the code under **Extensions → browse → Options**.
4. Restart Claude Code so it loads the browse MCP server.
5. Try the README example: ask Claude Code to *"open news.ycombinator.com and tell me the top story"*.

To remove it later, run `browse uninstall` and remove the extension from your browser.

## Watch out

- **It uses your real logins.** The agent works in the browser you are signed in to. The README says a web page or an email the agent reads may try to steer it. Only point it at sites you trust, and use the **Allowed sites** setting to keep a tab on the sites you name.
- **It only sees its own tabs, plus the ones you lend it.** You lend a tab with the toolbar button, and you click it again to take the tab back.
- **Code it runs is code running as you.** The README says the `execute` tool is sandboxed, "not a boundary".
- **The memory numbers are the maker's.** The 5.6 MB figure is for the OpenCode connector after a few calls. Claude Code talks to browse through `browse mcp`, a small proxy, so your numbers can be different.
- **$60 was the cost to rewrite it, not to use it.** The tool is free and MIT licensed.
- The browser shows its "started debugging" bar while browse is connected. That is normal.
- Some features were dropped in the rewrite: the download tool (Chrome blocks it for extensions) and time zone and locale emulation.

Sources: [anomalyco/browse README](https://github.com/anomalyco/browse), [PR #264](https://github.com/anomalyco/browse/pull/264), [v0.1.0 release notes](https://github.com/anomalyco/browse/releases/tag/v0.1.0), [OpenCode Browse product page](https://opencode.ai/product/browse), [Dax Raad on X](https://x.com/thdxr/status/2121692397323350468)
