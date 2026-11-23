---
title: "Firecrawl Local: Setup Guide and Links"
date: "2026-11-23"
excerpt: "How to install Firecrawl Local, the Rust rebuild of Firecrawl that scrapes, crawls and maps from your own machine, and add it to Claude Code as an MCP server."
thumbnail: "assets/images/blog-thumbnails/firecrawl-local-setup-guide.jpg"
tags:
  - Firecrawl
  - Web Scraping
  - Claude Code
  - MCP
  - Open Source
guide: true
---

This page is the setup guide and the official links for Firecrawl Local, the open source scraper that runs on your own machine.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Announcement (Nov 18, 2026): [firecrawl.dev/changelog/firecrawl-local](https://www.firecrawl.dev/changelog/firecrawl-local)
- Firecrawl Local README: [github.com/firecrawl/firecrawl/tree/main/apps/local](https://github.com/firecrawl/firecrawl/tree/main/apps/local)
- Main repo: [github.com/firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)
- Crate: [crates.io/crates/firecrawl-local](https://crates.io/crates/firecrawl-local)

## What it is

Firecrawl rebuilt its scraper in Rust. Firecrawl Local is one binary that scrapes, crawls and maps websites into clean markdown. There is no database, queue or container to run. Firecrawl says it is 37x faster than self hosted Firecrawl and uses 230x less memory, 11 MB idle. The license is AGPL-3.0.

## Setup guide

1. Install Rust if you do not have it ([rustup.rs](https://rustup.rs)). You also need a C compiler. On a Mac, install the Xcode command line tools:

   ```bash
   xcode-select --install
   ```

2. Install Firecrawl Local from crates.io and check it:

   ```bash
   cargo install firecrawl-local
   firecrawl-local --version
   ```

3. Try it in the terminal:

   ```bash
   firecrawl-local scrape https://example.com --markdown
   firecrawl-local crawl https://docs.firecrawl.dev --limit 50 --out ./pages
   firecrawl-local map https://firecrawl.dev
   ```

4. Add it to your AI agent. `init` finds Claude Code, Claude Desktop, Cursor, Windsurf, Gemini CLI and Codex, backs up each config file and adds Firecrawl Local as an MCP server. The MCP server needs Node.js 22 or newer. Add `--dry-run` to see the changes first.

   ```bash
   firecrawl-local init
   ```

   Restart your AI tool afterwards. Scrape, crawl, map and batch scrape now run on your machine.

5. Optional: run the Firecrawl v2 API on localhost. Local routes need no API key, and any Firecrawl SDK works when you set its API URL.

   ```bash
   firecrawl-local serve
   ```

   ```python
   from firecrawl import Firecrawl

   app = Firecrawl(api_url="http://localhost:3002")
   print(app.scrape("https://example.com").markdown)
   ```

6. Optional: keep everything on your machine.

   ```bash
   export FIRECRAWL_CLOUD=off
   ```

Pages that need JavaScript render in the Chrome or Chromium already on your machine. Without a browser, static pages still work.

## Watch out

- The 37x and 230x numbers come from Firecrawl's announcement. The repo does not publish a benchmark or the test setup, and the comparison is against self hosted Firecrawl, not Firecrawl Cloud.
- By default, search and any page that blocks your machine go to Firecrawl Cloud. Those results carry `"source": "firecrawl-cloud"`. Cloud calls carry a random install ID. Set `FIRECRAWL_CLOUD=off` to stop this.
- Local scrapes skip the `json` and `summary` formats and ignore browser actions. Screenshots need Chrome. Interact, Agent and Monitor are Cloud only.
- Crawl and batch jobs live in memory, so they end when `serve` stops.
- If your agent reads pages you do not trust, register the MCP server as `firecrawl-local mcp --public-only` so a hidden instruction cannot send it to your private network.
- It is version 0.1.1 at the time of writing. Expect changes.

Sources: [Firecrawl changelog](https://www.firecrawl.dev/changelog/firecrawl-local), [Firecrawl Local README](https://github.com/firecrawl/firecrawl/tree/main/apps/local), [crates.io](https://crates.io/crates/firecrawl-local), AlphaSignal newsletter of Nov 20, 2026.
