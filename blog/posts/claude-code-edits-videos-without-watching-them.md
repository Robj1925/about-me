---
title: "Claude Code Can Edit Your Videos Without Watching Them"
date: "2026-08-30"
excerpt: "The Browser Use team open sourced video-use, a skill that turns any coding agent into a video editor. It reads your footage as text, so a full edit costs kilobytes instead of millions of tokens."
thumbnail: "assets/images/blog-thumbnails/claude-code-edits-videos-without-watching-them.jpg"
youtubeId: "sfQUjUXddSc"
tags:
  - Claude Code
  - Video Editing
  - Free Tools
  - AI Agents
---

Claude Code can now edit your videos, and it never actually watches a single frame. Here is how that is even possible.

## What video-use Is

The Browser Use team open sourced [video-use](https://github.com/browser-use/video-use), a skill that turns any coding agent into a video editor. It already has over 20,000 stars on GitHub, and it is MIT licensed, so it is completely free to use.

## Drop Footage, Get final.mp4

You point Claude Code at a folder of raw takes and say "edit these into a launch video." The skill handles the whole edit:

- Cuts filler words and dead space
- Color grades every segment
- Burns in subtitles
- Adds 30 millisecond audio fades at every cut so you never hear a pop

## It Reads the Video Instead of Watching It

This is the clever part. One ElevenLabs Scribe call gives word level timestamps for every take, packed into a tiny text file around 12 kilobytes. The agent edits from that text, not from pixels.

Compare the cost. Dumping 30,000 frames into a model would run about 45 million tokens. The text approach costs 12 kilobytes plus a handful of PNGs. It only pulls a visual filmstrip when a cut is ambiguous and it genuinely needs to look.

## It Grades Its Own Work

After rendering, the skill inspects the output at every single cut boundary. It catches visual jumps, audio pops, and hidden subtitles, then fixes the edit and re-renders up to 3 times. You only ever see a cut that already passed its own review.

## Final Thoughts

This works with Claude Code, Codex, and basically any agent with shell access. If you already live in a terminal, your video editor now lives there too. Grab the repo, point it at a folder of takes, and let it hand you a finished cut.

If you want more workflows like this, I share everything I build in my [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about).
