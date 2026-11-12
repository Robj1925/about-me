---
title: "Stop Letting Claude Code Build Generic AI Slop"
date: "2026-11-05"
excerpt: "Hallmark v2 is a free Claude Code skill that refuses AI slop. Same prompt in Opus 5.5: 26 issues alone, zero with Hallmark."
thumbnail: "assets/images/blog-thumbnails/hallmark-v2-stops-claude-code-building-generic-ai-slop.jpg"
youtubeId: "scBiMD3Rq7M"
tags:
  - Claude Code
  - Web Design
  - Open Source
  - AI Tools
---

Hallmark v2 is a free Claude Code skill that refuses AI slop. If you build pages with Claude, yours probably look like everyone else's, and version 2 adds a way to fix pages you already shipped.

## 26 issues to zero

On the Hallmark site, the same prompt runs in Opus 5.5 twice. Alone, the page has 26 issues. With Hallmark, it has zero. The other examples on the site show the same pattern: 11 to 0 and 18 to 0.

## How a build runs

The score is not the best part. The process is.

1. **It deals themes.** Hallmark deals three of fifty themes that fit your prompt, instead of the default look.
2. **It builds the page.**
3. **It checks for AI tells.** After the build, it lints the page in a real browser at eight widths.
4. **A second agent reviews it.** A fresh context reviewer looks at the page and gets the last word.

## New in version 2

Version 2 was merged on October 22, 2026. The big addition is redesign. Point it at your own site with `/hallmark redesign` and it rebuilds the look while it keeps your content, your links and your forms. There is also `/hallmark audit`, which only reports.

You can also run the linter on pages you already shipped:

```bash
node skills/hallmark/scripts/sloplint.mjs
```

## Free, MIT, one line

Hallmark is made by Together AI and is MIT licensed, with about 44k stars on GitHub. It needs no API key. Install it with one line:

```bash
npx skills add nutlope/hallmark -g
```

## The catch

Hallmark is a prompt pack, not a model, so the output still depends on your agent. And the issue counts come from Hallmark's own linter, not from an outside test.

I covered the first version of this same skill in a longer video, where I build the same site with and without it: [Hallmark is a free skill that stops Claude Code building AI slop](/blog/hallmark-free-skill-stops-claude-code-building-ai-slop.html). For more methods, read [4 ways to force Claude Code to build beautiful websites](/blog/4-ways-to-force-claude-code-to-build-beautiful-websites.html).

Sources: [usehallmark.com](https://www.usehallmark.com), [Hallmark on GitHub](https://github.com/nutlope/hallmark)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
