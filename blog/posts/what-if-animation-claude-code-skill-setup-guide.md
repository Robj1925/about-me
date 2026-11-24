---
title: "What If Animation: Claude Code Cartoon Skill Setup Guide"
date: "2026-11-24"
excerpt: "What If Animation is a free skill for Claude Code and OpenCode that turns one topic line into a finished 15 to 25 second stick figure cartoon, drawn in code."
thumbnail: "assets/images/blog-thumbnails/what-if-animation-claude-code-skill-setup-guide.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Animation
  - OpenCode
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- What If Animation on GitHub: [github.com/kelano86/what-if-animation](https://github.com/kelano86/what-if-animation)
- Made by: [FreshStack](https://freshstack.ai)
- OpenCode (free coding agent): [opencode.ai](https://opencode.ai)
- ElevenLabs (voice and sound): [elevenlabs.io](https://elevenlabs.io)
- Remotion license: [remotion.dev/license](https://www.remotion.dev/license)

The repo is MIT licensed and had 393 stars on November 24, 2026.

## What it does

You type one line, for example "What if you could rewind 10 seconds?", and you get a 15 to 25 second episode in the stick figure style of the "What If" channels. Every frame is drawn in code: the AI writes the scenes as SVG and Remotion renders them. The voice and the sound effects come from ElevenLabs.

The pipeline, from the README:

1. Writes the script on a seven beat What If formula.
2. Voices it with ElevenLabs, with timings for every word.
3. Lays out a shot list on the words.
4. Renders a storyboard of one still per shot, before any animation.
5. Checks its own stills against an 11 point checklist.
6. Animates an original cast on one rig. The character is a rig in code, so it does not drift.
7. Adds and syncs the sound.
8. Masters the episode to -14 LUFS and reports the cost.

## Setup guide

You need Claude Code (or OpenCode), Node 18 or newer, ffmpeg with ffprobe, Python 3.9 or newer with `numpy` and `Pillow`, and an ElevenLabs API key saved as `ELEVENLABS_API_KEY` in your environment or in a `.env` file.

1. Clone the skill into your skills folder and set up the studio once:

```bash
git clone https://github.com/kelano86/what-if-animation ~/.claude/skills/what-if-animation
cp -r ~/.claude/skills/what-if-animation/studio ./what-if-studio
cd what-if-studio && npm install
```

2. In Claude Code, from that folder, ask:

```text
Make a What If episode: what if you could pause everyone but you?
```

3. Look at the storyboard when Claude shows it. The README says this is the step where the episode gets good.
4. You get `out/<slug>/<slug>-final.mp4` and `out/<slug>/storyboard.jpg`.

To see the two example episodes first, run `npx remotion studio src/index.ts` and open `Rewind` or `CopyPaste`.

### The OpenCode route

The README also shows a run in OpenCode with the free GLM-5.3-Flash model: one line in, 28 minutes, one render and $0 for the model. Install OpenCode with `npm install -g opencode-ai`, put the skill under `.claude/skills/` in an episode folder, copy the `/what-if` command into `.opencode/commands/`, then pick GLM-5.3-Flash Free with `/models` and type `/what-if` plus your premise. The full steps for Mac, Linux and Windows are in the README.

## Watch out

- $0 is for the model only. Voice and sound use your ElevenLabs credits: 152 for the first full episode, 170 to 242 on later runs.
- The ElevenLabs free plan is for non commercial use and asks you to credit ElevenLabs. Check its terms before you monetise.
- The free model in OpenCode was offered "for a limited time" in October 2026. It may not be free now.
- The 28 minutes is one run, not a promise.
- Remotion is free for individuals and companies of up to three people. Larger companies need a Remotion license.
- Walk cycles and acting are simple. Painted, textured styles need an image model.
- Claude Code needs a paid Claude plan.

Sources: [What If Animation repo and README](https://github.com/kelano86/what-if-animation) (checked November 24, 2026).
