---
title: "Sellbird: Open Source Cold Email Agent on Your Claude Plan, Setup Guide"
date: "2026-11-23"
excerpt: "Sellbird finds businesses, finds who decides, checks the email address, writes personal cold email and handles replies, all through Claude Code on your Claude plan. Here are the official links, the setup steps and the honest spam limits."
thumbnail: "assets/images/blog-thumbnails/sellbird-cold-email-agent-claude-plan.jpg"
tags:
  - Claude Code
  - AI Agents
  - Open Source
  - Sales Automation
  - AI Tools
guide: true
---

This page is the setup guide for Sellbird, an open source cold email agent that runs on your Claude plan.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- GitHub repo: [github.com/ethanplusai/sellbird](https://github.com/ethanplusai/sellbird) (7,083 stars on November 23, 2026, AGPL-3.0 license)
- Legal and deliverability guide: [docs/deliverability.md](https://github.com/ethanplusai/sellbird/blob/main/docs/deliverability.md)
- Approval and sending: [docs/approval-and-sending.md](https://github.com/ethanplusai/sellbird/blob/main/docs/approval-and-sending.md)
- How it works: [docs/how-it-works.md](https://github.com/ethanplusai/sellbird/blob/main/docs/how-it-works.md)
- Official site (hosted version, early access): [sellbird.ai](https://sellbird.ai)

## What it does

Sellbird was called Harvey until version 0.4.0. The README describes it as "the open-source outreach platform that runs on your Claude or ChatGPT plan." It runs on your own machine as a pipeline, and you can stop at any step:

1. **Find companies** that match your customer. The default source is OpenStreetMap and costs $0. Paid sources show their cost before they run.
2. **Learn why they would buy** from each company's own website, with no model calls.
3. **Find who decides**: the owner or manager named on the company's own pages, two people per company at most.
4. **Check the address**: every address is marked verified, risky, guess or invalid, and only deliverable ones get email.
5. **Write and send** a short sequence from your Gmail, Microsoft 365 or SMTP mailbox, inside your daily limit.
6. **Handle replies**: it drafts answers, honours opt outs at once and hands you anything it should not answer alone.

It thinks through the Claude Code CLI on your Claude Pro or Max plan (or Codex on a ChatGPT plan), so there is no API key and no per token bill. It throttles itself to leave room for your own work.

## Setup guide

These steps come from the official README. I use the Claude path on a Mac.

1. Install Python 3.11 or newer. macOS ships 3.9, so run `brew install python@3.13` if `python3 --version` shows an older version.
2. Sign in to the Claude CLI on a Claude Pro or Max plan: `claude login`.
3. Get a mailbox to send from, ideally Google Workspace on a separate sending domain (the README says about $7 a month). Microsoft 365 and SMTP also work.
4. Clone the repo and open Claude Code in it:

```bash
git clone https://github.com/ethanplusai/sellbird.git
cd sellbird
claude
```

5. Say **"set up Sellbird for me"**. The repo's `CLAUDE.md` makes Claude Code the setup guide: it checks what you have, installs what is missing, asks for what it needs and trains Sellbird on your product.

Or do it yourself:

```bash
python3.13 -m venv .venv && source .venv/bin/activate && pip install -e .
cp .env.example .env && $EDITOR .env
sellbird train https://your-company.com
sellbird signals --confirm free
sellbird discover
sellbird dashboard
sellbird run
```

6. Approve emails in the dashboard's **Outbox**. Nothing sends until you approve it, unless you turn on autopilot yourself. `sellbird sending pause` stops all sending at once.
7. Only want a lead list? Stop after verifying and run `sellbird export` for a CSV.

## Watch out

- **You are the sender.** The docs say cold email is legal in most places when done right, and that CAN-SPAM penalties run to $53,088 per email. Set your postal address (`compliance.postal_address`) before your first campaign and keep the opt out line. This is not legal advice.
- **Never send from your main domain.** The docs say cold email from your main domain, or at volume on day one, "lands you in spam permanently." Buy a dedicated sending domain and set up SPF, DKIM and DMARC. `sellbird warmup` checks them.
- **Warm up for 2 to 4 weeks** before real volume, then ramp slowly: 10 to 20 a day per inbox, adding about 5 a day. Above about 3% bounces, stop and fix your list.
- **Test on a test inbox first.** Use a throwaway mailbox and keep sending paused while you learn the dashboard. My demo uses a test inbox only.
- **Real people's data.** Discovery finds real businesses and names. Keep that data private and respect every opt out.
- **LinkedIn automation is off by default** and breaks LinkedIn's terms. The docs say to use an account you can afford to lose if you turn it on.
- **AGPL-3.0 license.** If you change it and run it as a service for others, read the license first.
- **The warmup service links in the repo are affiliate links** (the README says so).

Sources: [Sellbird README](https://github.com/ethanplusai/sellbird), [Legal and deliverability](https://github.com/ethanplusai/sellbird/blob/main/docs/deliverability.md), [How Sellbird works](https://github.com/ethanplusai/sellbird/blob/main/docs/how-it-works.md), AlphaSignal newsletter, November 19, 2026.
