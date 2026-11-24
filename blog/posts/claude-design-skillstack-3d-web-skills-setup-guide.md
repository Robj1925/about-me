---
title: "Claude Design Skillstack: 22 Skills for 3D Websites, Setup Guide"
date: "2026-11-24"
excerpt: "How to install Claude Design Skillstack, 22 open source Claude Code skills for Three.js, GSAP, React Three Fiber and other 3D and animation libraries."
thumbnail: "assets/images/blog-thumbnails/claude-design-skillstack-3d-web-skills-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Three.js
  - Web Development
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- GitHub repo: [github.com/freshtechbro/claudedesignskills](https://github.com/freshtechbro/claudedesignskills) (1,442 stars on November 24, 2026, MIT license)
- Marketplace docs: [MARKETPLACE.md](https://github.com/freshtechbro/claudedesignskills/blob/main/MARKETPLACE.md)
- Open issues: [github.com/freshtechbro/claudedesignskills/issues](https://github.com/freshtechbro/claudedesignskills/issues)

## What is inside

22 skills in 5 groups, plus 5 bundles (27 plugins in total):

- **Core 3D and Animation (5):** threejs-webgl, gsap-scrolltrigger, react-three-fiber, motion-framer, babylonjs-engine
- **Extended 3D and Scroll (6):** aframe-webxr, lightweight-3d-effects, playcanvas-engine, pixijs-2d, locomotive-scroll, barba-js
- **Animation and Components (5):** react-spring-physics, animated-component-libraries, scroll-reveal-libraries, animejs, lottie-animations
- **3D Authoring and Motion (4):** blender-web-pipeline, spline-interactive, rive-interactive, substance-3d-texturing
- **Meta skills (2):** web3d-integration-patterns, modern-web-design

Each plugin has the skill, slash commands and an agent. When you ask Claude for a 3D hero or a scroll animation, it loads the matching skill first and follows its patterns.

## Setup guide

1. Open Claude Code and add the marketplace once:

```bash
/plugin marketplace add freshtechbro/claudedesignskills
```

2. Install only the skills you need:

```bash
/plugin install threejs-webgl
/plugin install gsap-scrolltrigger
/plugin install react-three-fiber
```

3. Or install a bundle:

```bash
/plugin install core-3d-animation      # Three.js, GSAP, R3F, Motion, Babylon
/plugin install extended-3d-scroll     # A-Frame, Vanta, PlayCanvas, PixiJS, Locomotive, Barba
/plugin install animation-components   # React Spring, Magic UI, AOS, Anime.js, Lottie
/plugin install authoring-motion       # Blender, Spline, Rive, Substance 3D
/plugin install meta-skills            # Integration patterns, modern design
```

4. Ask Claude for what you want, for example a Three.js scene with a custom shader sphere and orbit controls.

You can also upload a skill to claude.ai: go to **Settings > Features > Skills**, click **Upload skill**, and pick a `.zip` file from the repo's `.claude/skills/` folder.

On November 14, 2026, we tested it on Claude Code 2.1.321. With the threejs-webgl plugin loaded, Claude wrote a Three.js shader sphere scene that rendered in Chrome with no console errors. The thumbnail of this post is that scene.

## Watch out

- The last commit was November 19, 2025. The repo has had no update for about a year, and the 4 open issues have no reply from the author.
- Some notes are old. The Three.js starter scene pins three@0.160.0 (r160, December 2023). Check the library versions Claude writes.
- Open issue #3: the GSAP skill still calls SplitText and other plugins "Club GreenSock" (paid). They are free now.
- Open issue #8: the barba-js and lottie-animations skills point to an `examples/` folder that does not exist.
- The README says "Status: Production" and "50+ slash commands". We counted 45 command files in the individual plugins. Treat it as a good set of notes, not a finished product.
- There is only one shader example. It is not a shader library.
- Claude Code needs a paid Claude plan.

Sources: [Claude Design Skillstack README](https://github.com/freshtechbro/claudedesignskills) (checked November 24, 2026), [open issues](https://github.com/freshtechbro/claudedesignskills/issues), commit history.
