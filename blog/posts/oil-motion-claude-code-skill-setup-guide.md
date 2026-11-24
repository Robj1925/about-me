---
title: "Oil Motion Claude Code Skill: Setup Guide and Costs"
date: "2026-11-24"
excerpt: "How to install Oil Motion, the open source skill that turns AI video into web animation that follows scroll, mouse, drag or touch, and what it costs to generate new footage."
thumbnail: "assets/images/blog-thumbnails/oil-motion-claude-code-skill-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Web Animation
  - Open Source
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/oil-oil/oil-motion](https://github.com/oil-oil/oil-motion)
- English README: [README.en.md](https://github.com/oil-oil/oil-motion/blob/main/README.en.md)
- Skill file: [SKILL.md](https://github.com/oil-oil/oil-motion/blob/main/SKILL.md) (in Chinese)
- API key setup notes: [references/api-key-setup.md](https://github.com/oil-oil/oil-motion/blob/main/references/api-key-setup.md) (in Chinese)
- License: [MIT](https://github.com/oil-oil/oil-motion/blob/main/LICENSE)
- Author: Zhihuang Lin ([oil-oil on GitHub](https://github.com/oil-oil))

## What it is

Oil Motion is a web animation skill for Claude Code and Codex. The README now calls it agent agnostic. You describe the motion, and the agent builds an animation into the page that follows scroll, mouse, drag, touch or device tilt. In the demo from the repo, a dog on the page turns its head to follow the cursor. That demo is the author's, not mine.

It is not a CSS trick. The subject really changes shape, so the motion comes from AI video:

1. The agent locks the key frames first, so the subject stays the same from start to end.
2. AI video fills in the motion between those frames.
3. The agent checks every frame, removes pauses, duplicates and glitches, and compresses the result to the size it shows on the page.
4. It connects your input (scroll, mouse, drag, touch) to that timeline.

It had 2,986 stars and an MIT license on November 24, 2026. My video said 2,909, the count on November 14.

## Setup guide

1. Give your agent the repo URL:

```text
Install the Skill at https://github.com/oil-oil/oil-motion.
```

Or install it from the terminal, then have your agent reload its skills:

```bash
npx skills add oil-oil/oil-motion
```

2. For the free route, install Python 3.10 or newer and FFmpeg. That is all you need to process footage you already have, such as a green screen clip or a sprite sheet.
3. Ask for the animation. This prompt is from the README:

```text
Use oil-motion to make this character turn toward the mouse.
Motion must respond immediately, but limit rotation speed. No flicker or jitter on fast direction reversals.
```

4. To generate new key frames or video, you need a ZenMux API key. Before the first generation the agent opens a local setup page, and you type the key there. It goes into your system credential store, not into the chat. The setup page needs Node.js 22.18 or newer.

## Watch out

- New footage costs money. Image and video models run through ZenMux, and every generation is billed. The agent makes a short pilot first and scales up only after it passes review.
- Your prompts, reference images and key frames go to ZenMux and the model providers behind it.
- The key setup is tested only on macOS so far (Keychain). The Windows and Linux paths are not tested on real machines yet.
- It is not for button feedback, page transitions or layout motion. CSS, JavaScript, SVG or Lottie do those better, and the README says so.
- SKILL.md and the reference files are in Chinese. English prompts work.
- The last commit was on October 4, 2026, and the repo has no releases.
- Claude Code needs a paid Claude plan.

Sources: [repo](https://github.com/oil-oil/oil-motion), [README.en.md](https://github.com/oil-oil/oil-motion/blob/main/README.en.md), [api-key-setup.md](https://github.com/oil-oil/oil-motion/blob/main/references/api-key-setup.md), [LICENSE](https://github.com/oil-oil/oil-motion/blob/main/LICENSE) (all checked November 24, 2026).
