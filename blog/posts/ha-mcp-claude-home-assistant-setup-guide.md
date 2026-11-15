---
title: "HA MCP for Claude and Home Assistant: Setup Guide and Links"
date: "2026-11-14"
excerpt: "How to connect Claude to Home Assistant with HA MCP, the free open source server with about 86 tools that can write automations, plus the free demo house if you have no hub yet."
thumbnail: "assets/images/blog-thumbnails/ha-mcp-claude-home-assistant-setup-guide.jpg"
tags:
  - Claude
  - Home Assistant
  - MCP
  - Smart Home
  - Open Source
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- GitHub repo: [github.com/homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp) (MIT license, about 7,800 stars on November 14, 2026)
- Docs site: [homeassistant-ai.github.io/ha-mcp](https://homeassistant-ai.github.io/ha-mcp/)
- Setup wizard for 15+ clients: [homeassistant-ai.github.io/ha-mcp/setup](https://homeassistant-ai.github.io/ha-mcp/setup/)
- FAQ and troubleshooting: [homeassistant-ai.github.io/ha-mcp/faq](https://homeassistant-ai.github.io/ha-mcp/faq/)
- Official demo with Claude Desktop: [demo.webp in the repo](https://raw.githubusercontent.com/homeassistant-ai/ha-mcp/master/docs/img/demo.webp)

## Setup guide

You need Home Assistant running. The steps below are the recommended install from the README (the HA-MCP integration, version 9.0.0 and later). It needs Home Assistant 2026.8.0 or newer.

1. Install the **HA-MCP integration**. On Home Assistant 2026.8 to 2026.10, open HACS, search for **HA-MCP**, then click **Download**. On Home Assistant 2026.11 or newer, open **Settings**, then **Marketplace**, accept the first run warning, search for **HA-MCP**, then click **Install**.
2. Restart Home Assistant.
3. Choose the administrator account that the server acts as. Either create a long lived access token on your own account (your profile, then **Security**, then **Long-lived access tokens**, then **Create token**), or, safer, make an account just for HA-MCP under **Settings**, **People**, **Add person**, with **Allow login**, **Local access only** and **Administrator** on.
4. Go to **Settings**, **Devices & Services**, **Add Integration**, search for **HA-MCP** and choose **HA-MCP Server**. Paste your token, or enter the user name and password of the HA-MCP account. Pick how clients connect: **Remote access through Home Assistant** (start with **Secret URL**, the simplest) or **Network access: Local network**. Both start disabled, so turn on at least one. Click **Submit**.
5. Copy the connect URL from the entry's **Configure** screen (**Settings**, **Devices & Services**, HA-MCP, **HA-MCP Server**, **Configure**).
6. Paste that URL into your AI client.

Use only one install method per client. Two entries for the same server in one client can make the connection hang.

### No hub yet? Try the demo house

The repo has one command scripts that connect Claude Desktop to a hosted demo Home Assistant. No paid subscription is needed. On macOS:

1. Sign in at [claude.ai](https://claude.ai) (a free account works).
2. Open Terminal and run:

```sh
curl -LsSf https://raw.githubusercontent.com/homeassistant-ai/ha-mcp/master/scripts/install-macos.sh | sh
```

3. [Download Claude Desktop](https://claude.ai/download), or quit and open it again.
4. Ask Claude: "Can you see my Home Assistant?"

On Windows, run this in PowerShell instead:

```powershell
irm https://raw.githubusercontent.com/homeassistant-ai/ha-mcp/master/scripts/install-windows.ps1 | iex
```

These scripts pipe a remote script into your shell. Read the script on GitHub before you run it.

## Watch out

- The built in Home Assistant MCP Server controls only the entities you expose to Assist, and it cannot create automations, scripts or scenes. HA MCP can.
- ChatGPT needs a public URL or the community OpenAI Tunnel. Claude is the easier path.
- The 665 entities in the demo are the demo author's house, not a limit. Entities are not devices.
- The demo text is partly in French, because it is the author's own home.
- The stdio demo path has known connection issues. For a real setup, use the integration above.
- Turn on the safety tools: Read Only Mode, per tool on and off switches, approval policies and automatic edit backups.

Sources: [HA MCP README](https://github.com/homeassistant-ai/ha-mcp), [HA MCP docs](https://homeassistant-ai.github.io/ha-mcp/), [Setup wizard](https://homeassistant-ai.github.io/ha-mcp/setup/).
