---
title: "This Claude Code Skill Turns Ideas into Visuals"
date: "2026-10-16"
excerpt: "Anatomy is a free, MIT-licensed Claude Code skill that explains an idea by building it as a working isometric machine. It reached 9,471 GitHub stars in its first six days."
thumbnail: "assets/images/blog-thumbnails/this-claude-code-skill-turns-ideas-into-visuals.jpg"
youtubeId: "JhtOy31FO-Q"
tags:
  - Claude Code
  - Claude
  - Open Source
  - AI Tools
  - Coding
---

One line in Claude Code built a working watch movement. You can wind it, slow it down, and take it apart. The skill behind it is called Anatomy, and it is the most unusual diagram tool I have seen for Claude.

## What it is

Anatomy is a free, open source Claude Code skill by wheresryan22. You name an idea, and instead of boxes and arrows, Claude invents a physical machine whose moving parts *are* the idea. The README puts it simply: "A Claude skill that explains an idea by building it as a real, working object."

The repo was created on October 8, 2026, and v1.1.0 shipped on October 12. When I checked on October 14 it had 9,471 stars and 677 forks. By October 19 the GitHub API showed 16,774 stars. It is MIT licensed and has zero dependencies.

## The idea becomes the object

The examples on the site show how it thinks:

- **Bloom filter:** a fruit machine. The three reels are the three hash functions, and it only pays out when all three flags are up.
- **LRU cache:** a bookcase.
- **Cache key that skips work when nothing changed:** a pin-tumbler lock that only turns when every pin matches (from the README).

Each figure is built from dozens of small, shaded parts, sits in a framed card with a title and a live readout, and moves under your pointer and keyboard. Output is SVG, SVG plus WebGL for things like fire and water, or a 3D mode that is still in beta.

The part I like most: the numbers are real. Every readout in a figure comes from the same small model that moves its parts, so the numbers are not decoration. The Raptor 2 example comes apart into 11 assemblies when you hover over it and fires with a WebGL exhaust plume. The README says an audit proves that no pipe passes through anything, at rest, apart, and in every frame between.

## It is slow on purpose

These figures take a long time. The author publishes Claude's active time from the first prompt to the shipped figure (review rounds included, idle gaps left out):

| Figure | Claude's active time |
| --- | --- |
| Watch movement | 1 h 54 min |
| Seasons | 1 h 57 min |
| Raptor engine | 10 h 33 min |
| Turbofan | 14 h |

These are the author's own numbers, and I have not timed a build myself. The site also notes that a first working version comes quickly (38 minutes for the Raptor). Most of the time goes into the close review of every joint.

## How to install it

One command, then one prompt:

```sh
npx skills add wheresryan22/anatomy -g -a claude-code
```

```text
/anatomy explain how a token bucket rate limiter works, interactive
```

Swap `-a claude-code` for `-a codex` or `-a opencode` to use it in Codex or OpenCode (in Codex you type `$anatomy`). You need Node.js 20.10 or later, and Chrome or Chromium for the self checks. The skills CLI itself may ask for a newer Node version. The skill is free, but the agent it runs in (Claude Code, Codex) is not.

## The catch

Read the Limits section before you start. It is not a chart library: no axes, no data plots. It draws machines, instruments, tools and furniture, not people or exact maps, and an idea with no mechanism to build comes out weaker. A long build also costs a long agent session, which is real usage on your plan.

## My take

For docs, blog posts and landing pages that need to explain how something works, this is a genuinely new kind of output. I would not use it for a quick diagram. I would use it when one great figure is worth an hour or more of Claude's time. If you want a skill that makes Claude's regular UI work look less generic, see my post on [Hallmark](/blog/hallmark-free-skill-stops-claude-code-building-ai-slop.html).

Sources: [Anatomy on GitHub](https://github.com/wheresryan22/anatomy) and the [Anatomy site and collection](https://skills.wheresryan.sh/anatomy)
