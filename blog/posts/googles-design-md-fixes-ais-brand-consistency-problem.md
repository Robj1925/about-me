---
title: "Google's DESIGN.md Fixes AI's Brand Consistency Problem"
date: "2026-07-14"
excerpt: "Ask an AI agent for two pages and you get two different looking websites. Google just open sourced a single markdown file that fixes it, and it can catch its own accessibility bugs."
thumbnail: "assets/images/blog-thumbnails/googles-design-md-fixes-ais-brand-consistency-problem.jpg"
tags:
  - AI Tools
  - Design Systems
  - Google
  - Tutorial
---

You ask Claude Code for two pages and you get two different looking websites. Different blues, different buttons, no consistency. Google just fixed that with one markdown file called DESIGN.md.

## The Problem It Actually Solves

Every design system holds two kinds of information: the reasoning (why you chose a color or font) and the values (the actual hex codes and sizes). Normally those live in separate places. Reasoning sits in a style guide, values sit in a config file like Tailwind, and over time they drift apart. The docs say one thing, the code says another, and your AI agent has no idea which one to trust.

DESIGN.md is one file that holds your colors, fonts, spacing, and component rules, plus the reasoning behind all of it. Your AI agent reads it before it builds anything, so it stops guessing what your brand looks like.

It started inside Google Stitch, Google's AI design tool. Google just open sourced the spec, so now it works in any tool: Claude Code, Cursor, Codex, same file, same result.

## Tokens Are Decisions, Not Hex Codes

This is the most important idea in the standard. Get this and everything else clicks.

Inside a DESIGN.md file, you will see the word "token" everywhere. Your instinct is that a token is a variable, a saved color. It is not. A token is a decision.

When the file says `primary` is a color, primary is really a role: the main ink of your page, your text and headlines. The hex code is just whatever fills that role right now. Same with type. `body` is not a font size. It is the role of your default body copy.

The spec makes some of this mandatory. Every DESIGN.md file needs a `primary` (your ink and text) and a `neutral` (your canvas and background). Once you start thinking in roles instead of specific hex values, you design differently. You stop trying to match a specific blue and start reaching for a role that serves a purpose.

## The Structure: Two Layers

A DESIGN.md file has two layers. Up top, YAML frontmatter holds your tokens. Below it, a normal markdown body holds the reasoning in sections.

Here is a real example from Google's own spec, a system they call Heritage:

```yaml
name: Heritage
colors:
  primary:  "#1A1C1E"  # the ink, your text
  neutral:  "#F7F5F2"  # the canvas
  tertiary: "#B8422E"  # the accent
typography:
  h1: { fontFamily: Public Sans, fontSize: 3rem }
```

The body below it follows a fixed section order: Overview, Colors, Typography, Layout, Elevation, Shapes, Components, and Do's and Don'ts. That last section is exactly what it sounds like: a list of things you never do. It keeps an agent on brand.

The glue is token references. Instead of pasting a hex value directly into a button, you point it at `colors.primary`. The button borrows the role instead of owning a color. Change what primary points to, and everything referencing it updates at once.

## Three Things Google Just Shipped

This is news right now because Google shipped an update with three parts:

1. **The spec itself.** The first documented draft of what a DESIGN.md file is, published on GitHub. Before this, every tool generated a slightly different version and none of them matched. The spec is the common ground.
2. **The tokens section.** Keeps the reasoning and the values together in one place instead of three.
3. **A command line tool.** One `npx` command. This is where it stops being a text file and starts being something an agent can trust.

## The CLI Validates, Not Just Formats

The CLI does not just clean up formatting. It validates the file against the spec. Whenever an agent makes a change, it can check its own work.

Here is the demo that sold me. An agent adds an accent button with white text on a gold background. It looks fine. Then it runs the linter:

```
$ npx @google/design.md lint DESIGN.md
warning: textColor (#ffffff) on backgroundColor (#f2a900) has contrast ratio
2.01:1, below WCAG AA minimum of 4.5:1.
```

The agent's own accessibility bug, caught before anyone ever saw the page. The fix is one line: point the button at the primary ink color instead of white. Lint again, zero warnings.

The linter also flags broken references, a missing primary, orphaned tokens, and sections that are out of order. As Google's David East put it, the file is not just something an agent consumes. It is something an agent can rely on. The CLI can also diff two versions to show exactly what changed, and export your tokens straight into Tailwind so it plugs directly into a real codebase.

## Running It Hands Free

In Antigravity, you can skip the terminal entirely. Point an agent at your DESIGN.md file and ask it in plain English: "Add a call to action button to the components section using white text on a gold accent background." The agent edits the file, runs the linter itself, sees the same contrast warning, and corrects the color on its own. You never touch the terminal.

That is the whole point. Keep one file in your repo, point your agent at it, whether that is Antigravity, Claude Code, or Cursor. It builds, checks its own work, and fixes what it finds. Same tool, same file, every time.

## The Honest Caveat

This is still the alpha version. The spec, the CLI, and the components sections are all still moving. Google says it plainly: treat DESIGN.md as a strong workflow pattern, not a replacement for designers, accessibility review, or brand approval.

But the core idea is right: a portable, plain text design system that any agent can read and check itself against. This is where the industry is headed, and getting in early is worth it. If you build with Claude Code, generate a DESIGN.md file, drop it in your repo, and point your agent at it.
