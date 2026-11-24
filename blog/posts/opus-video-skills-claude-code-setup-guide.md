---
title: "opus-video-skills: Painted and Kinetic Video Setup Guide"
date: "2026-11-24"
excerpt: "How to install opus-video-skills, two open source Claude Code skills that make watercolour cartoons and kinetic type reels entirely in code, plus what you need and the catches."
thumbnail: "assets/images/blog-thumbnails/opus-video-skills-claude-code-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - AI Animation
  - Open Source
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Repo: [github.com/tuzhechen2005/opus-video-skills](https://github.com/tuzhechen2005/opus-video-skills)
- painted-animation docs: [skills/painted-animation/README.md](https://github.com/tuzhechen2005/opus-video-skills/blob/main/skills/painted-animation/README.md)
- kinetic-reel docs: [skills/kinetic-reel/README.md](https://github.com/tuzhechen2005/opus-video-skills/blob/main/skills/kinetic-reel/README.md)
- The engine it builds on: [ClaudeAnimationBase by John Heibel](https://github.com/JohnHeibel/ClaudeAnimationBase) (MIT)
- License: [LICENSE](https://github.com/tuzhechen2005/opus-video-skills/blob/main/LICENSE) (MIT)

opus-video-skills is a free, open source set of two Claude Code skills by GitHub user tuzhechen2005. It had 564 stars on November 24, 2026 (499 when I made the video on November 14).

The README says: "All imagery and all music are generated procedurally in code; no image, video or audio generation model is involved." Every frame is rendered in headless Chrome and encoded with ffmpeg.

- **painted-animation**: watercolour and ink cartoons with character acting, drawn with p5.js and p5.brush. Its example is a 31 second lyric video with word by word karaoke subtitles.
- **kinetic-reel**: kinetic typography with three.js layers and a WebGL post pass. The score is synthesized from the same timeline as the picture. Its example is "Work Reel ’26", an 84 second portfolio reel.

## Setup guide

You need Claude Code with Claude Opus 5.5, plus Node.js, Google Chrome and ffmpeg. Python 3 with numpy is needed only for tempo detection in painted-animation.

1. Open Claude Code and add the marketplace:

```text
/plugin marketplace add tuzhechen2005/opus-video-skills
```

2. Install one skill or both:

```text
/plugin install painted-animation@opus-video-skills
/plugin install kinetic-reel@opus-video-skills
```

3. Describe the video. The matching skill is selected automatically. These are the README's own examples:

```text
Make a 15-second video of Clawd trying to catch a butterfly.
```

```text
Make a 60-second kinetic-type reel of my three projects from this résumé.
```

4. Claude scaffolds a project, shows you a storyboard, builds each shot, renders contact sheets and reviews its own frames, then writes the finished MP4 to the project's `out/` folder.

5. To update later, run `/plugin update`.

If you prefer personal skills, clone the repo and link the folders:

```bash
git clone https://github.com/tuzhechen2005/opus-video-skills ~/opus-video-skills
ln -s ~/opus-video-skills/skills/painted-animation ~/.claude/skills/painted-animation
ln -s ~/opus-video-skills/skills/kinetic-reel ~/.claude/skills/kinetic-reel
```

On my Mac mini (no Xcode, no GPU card), the full 84 second example reel rendered in 52 seconds: score, 2,520 frames and the encode. That was the repo's own example code, not a new video from a prompt. The example needed two path edits from its README (the three.js import and the cues.js path).

## Watch out

- painted-animation does not compose music. Music and lyric videos use your own song file. Only kinetic-reel synthesizes a score.
- Claude Code is not free. A new video means a storyboard and many review renders, so it uses your plan's Opus 5.5 limits. I did not time a full prompt to video session.
- The 31 second and 84 second videos are the author's examples. The Work Reel shows the author's own résumé figures.
- GitHub shows the license as "NOASSERTION" because the LICENSE file has an extra copyright line for John Heibel. The text is the standard MIT license.
- If you cloned the older single `painted-animation` skill into `~/.claude/skills/`, that layout no longer works. Remove it and install again.
- Watercolour fills are slower on integrated graphics, per the docs.
- The repo is small and new: created September 26, 2026, with a few commits since.

Sources: [opus-video-skills README](https://github.com/tuzhechen2005/opus-video-skills), [painted-animation docs](https://github.com/tuzhechen2005/opus-video-skills/blob/main/skills/painted-animation/README.md), [kinetic-reel docs](https://github.com/tuzhechen2005/opus-video-skills/blob/main/skills/kinetic-reel/README.md), [ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase).
