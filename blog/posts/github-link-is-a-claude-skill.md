---
title: "A GitHub Link Is a Claude Skill: Setup Guide for Grenade and Remake"
date: "2026-11-14"
excerpt: "Put a GitHub link in your prompt and Claude reads the repo and follows it. This is the setup guide for Ruben Hassid's two repos: grenade fixes an artifact, remake rebuilds your own website with /goal in Claude Code."
thumbnail: "assets/images/blog-thumbnails/github-link-is-a-claude-skill.jpg"
tags:
  - Claude Code
  - Claude
  - Claude Skills
  - GitHub
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Remake repo: [github.com/rubenhassid1/remake](https://github.com/rubenhassid1/remake) (MIT licence)
- Grenade repo: [github.com/rubenhassid1/grenade](https://github.com/rubenhassid1/grenade)
- Ruben Hassid, Claude 101, section 8: [ruben.substack.com/p/claude-101](https://ruben.substack.com/p/claude-101)
- Claude Code /goal docs: [code.claude.com/docs/en/goal](https://code.claude.com/docs/en/goal)

## Setup guide

Ruben's guide says it in one line: "Put a GitHub link inside your prompt and Claude reads the repo and follows it."

This works because both repos are written for Claude. The grenade README opens with "Claude: you were sent here to make an artifact, to fix one, or to make the web version". The remake README tells agents to read its SKILL.md and "follow it from step 0". A random repo without instructions like these does not act like a skill.

### Grenade: fix an artifact

1. Have the page you want to fix: the artifact, its link, a file, its code or a screenshot. The README accepts all of these.
2. Send Claude this prompt:

```text
Fix this artifact. Follow github.com/rubenhassid1/grenade
```

3. Claude lists the problems it finds, then rebuilds the page as a new plain HTML artifact with fewer words. If the page already passes every check, the README tells Claude to say so and change nothing.

The guide does not say which Claude app to use. I have not tested yet whether every app can read the repo, so try it in Claude Code first if one app does not open the link.

### Remake: rebuild your own website

What you need (from the README): Claude Code, Node 20 or newer, git, the GitHub CLI, and free GitHub and Vercel accounts. The first run downloads Chromium for Playwright, about 150 MB.

1. Open Claude Code. To let it run without a prompt for each tool call, use auto mode. The /goal docs say a goal does not change your permission mode.
2. Send the prompt. Change the URL to your own site:

```text
/goal Remake https://example.com with github.com/rubenhassid1/remake until its report says REMAKE COMPLETE, or stop after 100 turns.
```

3. A `◎ /goal active` indicator shows while the goal runs. After each turn, a separate model checks if the condition holds. If not, Claude starts another turn.
4. Sign in to GitHub and Vercel when Claude asks. The README says that is one click each in your browser.
5. When it finishes, the report ends with REMAKE COMPLETE. You get a private GitHub repo, a Vercel site behind a passcode, and a proof page at `/_remake/` with the original and the remake side by side.
6. To stop early, run `/goal clear`.

You can also install remake as a Claude Code plugin:

```text
/plugin marketplace add rubenhassid1/remake
/plugin install remake@remake
```

Then run `/remake https://example.com`.

Or use the command line tool:

```bash
npm install -g github:rubenhassid1/remake
remake doctor --fix
remake init https://example.com && cd ~/remakes/example-com
remake capture && remake score
```

A screen passes at 98% of stable pixels. Motion frames pass at 95%, and page heights must be within 4 px.

## Watch out

- Remake only your own site. The README says the original's words, photos, logos, fonts and code belong to its owner.
- Remake refuses sign in, checkout and banking pages, and it does not get around bot walls.
- Time: a simple page can pass on the first score, but the README says a WebGL agency site "can take Claude hours". Start with a simple page.
- Grenade only helps with pages Claude can see. It adds no facts, numbers or names that were not on the old page.

Sources: [Claude 101 by Ruben Hassid](https://ruben.substack.com/p/claude-101), [remake README](https://github.com/rubenhassid1/remake), [grenade README](https://github.com/rubenhassid1/grenade), [Claude Code /goal docs](https://code.claude.com/docs/en/goal)
