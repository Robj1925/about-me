---
title: "Make What If Animations With Claude Code: Free Skill Setup Guide"
date: "2026-11-26"
excerpt: "How to install the free What If Animation skill for Claude Code, turn one line into a finished animated episode, check the storyboard, keep the cost down and make episodes about your own niche."
thumbnail: "assets/images/blog-thumbnails/make-what-if-animations-with-claude-code.jpg"
tags:
  - Claude Code
  - Claude Skills
  - Animation
  - Remotion
  - Open Source
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- What If Animation on GitHub: [github.com/kelano86/what-if-animation](https://github.com/kelano86/what-if-animation)
- The skill file Claude follows: [SKILL.md](https://github.com/kelano86/what-if-animation/blob/main/SKILL.md)
- Made by: [FreshStack](https://freshstack.ai)
- Remotion (renders the code to video): [remotion.dev](https://www.remotion.dev) and its [license](https://www.remotion.dev/license)
- ElevenLabs (voice and sound effects): [elevenlabs.io](https://elevenlabs.io)
- OpenCode (free coding agent option): [opencode.ai](https://opencode.ai)

The repo is MIT licensed. It had 401 stars and 109 forks on November 26, 2026.

## What it is

What If Animation is a free skill for Claude Code. You type one line, for example "What if you could unsay anything?", and you get a finished 15 to 25 second animated episode in the stick figure style of the "What If" channels on YouTube.

Every frame is code. Claude writes each scene as SVG, and Remotion turns that code into a video. There is no image model, no video model and no drawing. The voice and the sound effects come from ElevenLabs.

The character always looks the same because it is a puppet built in code, not an AI image. The same function draws it in every shot, so nothing can drift between shots.

## What you need

- Claude Code (it needs a paid Claude plan), or OpenCode
- Node 18 or newer
- ffmpeg with ffprobe
- Python 3.9 or newer with `numpy` and `Pillow`
- An ElevenLabs API key, saved as `ELEVENLABS_API_KEY` in your environment or in a `.env` file

## Setup guide

1. Clone the skill into your Claude Code skills folder:

```bash
git clone https://github.com/kelano86/what-if-animation ~/.claude/skills/what-if-animation
```

2. Copy the studio once and install it. Every episode lives in this folder:

```bash
cp -r ~/.claude/skills/what-if-animation/studio ./what-if-studio
cd what-if-studio && npm install
```

3. Look at the two example episodes before you spend any credits:

```bash
npx remotion studio src/index.ts
```

Open `Rewind` (every time he messes up, he rewinds 10 seconds) or `CopyPaste`. Both render straight away.

4. Start Claude Code from the `what-if-studio` folder and give it one line:

```text
Make a What If episode: what if you could unsay anything?
```

5. When Claude shows you the storyboard, look at it before you let it animate.
6. The finished episode is `out/<slug>/<slug>-final.mp4`, and the storyboard is `out/<slug>/storyboard.jpg`.

## How it makes an episode

1. **Script.** Every episode follows the same formula: three quick demos of the power, then the title card, then a twist built on one real fact. It searches YouTube first so your idea is not a copy of an existing episode.
2. **Fact check.** Every number in the script gets its math and a source in the episode file before it is used.
3. **Voice.** ElevenLabs reads the script, with a time for every word.
4. **Shot list.** Each cut lands on a word. These cartoons cut fast, about every 1 to 2 seconds.
5. **Storyboard.** It draws one still per shot and checks the stills against a checklist, for example text that is cut off or things that overlap. Then it fixes them.
6. **Animate and render.** It animates each shot and Remotion renders the video.
7. **Sound and master.** It adds the sound effects and music and brings the episode to -14 LUFS.

![The storyboard for my Unsay episode: one still per shot](../assets/images/what-if/unsay-storyboard.jpg)

## Make it about your niche

I made two episodes about my own life as a creator.

**Unsay.** I trip over my words while I record, say "unsay", and the words fly back into my mouth for the perfect take. The fact: people say about 16,000 words a day. That comes from a 2007 study in the journal Science that recorded 396 people ([NPR summary](https://www.npr.org/2007/07/05/11762186/study-men-talk-just-as-much-as-women)).

![Unsay: the words fly back](../assets/images/what-if/unsay-frame.jpg)

**Think It Post It.** My thoughts turn into videos and upload straight to my channel. The fact: over 500 hours of video go up to YouTube every minute. YouTube first gave that number in 2019, and it was still the cited number in 2022 ([Tubefilter](https://www.tubefilter.com/2019/05/07/number-hours-video-uploaded-to-youtube-per-minute/)).

![Think It Post It: the upload screen](../assets/images/what-if/think-it-post-it-frame.jpg)

Use your own niche, your own channel name and your own facts. That is where it gets fun.

## What it costs

- The skill is free and MIT licensed.
- The voice and sound effects use ElevenLabs credits. The README says the Copy-Paste example cost 152 credits (78 for the voice, 74 for 12 new sound effects). Later runs cost 170 to 242 credits.
- The ElevenLabs free plan is for non commercial use and asks you to credit ElevenLabs. If your channel makes money, use a paid plan.
- Claude Code needs a paid Claude plan. The README also shows a run in OpenCode with a free model, which was offered "for a limited time" in October 2026, so check that it is still free.
- Remotion is free for individuals and for companies of up to three people.

## Watch out

- It only makes landscape videos (1920x1080). There is no vertical format for Shorts.
- It is not one prompt and done. Check the storyboard every time, and expect to ask for fixes.
- The voice step uses ElevenLabs for the word timings, so using your own voiceover needs extra setup.
- Walk cycles and acting are simple next to hand animation. The look carries it.
- Do not post the two example episodes as your own. They are the repo creator's work.
- The skill never claims the viral What If channels are made with Claude or any other tool. Nobody has said how they are made.

Sources: [What If Animation repo and README](https://github.com/kelano86/what-if-animation) (checked November 26, 2026).
