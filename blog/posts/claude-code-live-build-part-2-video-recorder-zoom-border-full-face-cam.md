---
title: "Claude Code Live Build, Part 2: Zoom, Border Highlight and a Full Face Cam"
date: "2026-06-19"
excerpt: "Part two of building a screen and webcam recorder with Claude Code. I add adjustable zoom, a preview only border, a better layout, a full face cam mode and an audio waveform."
thumbnail: "assets/images/blog-thumbnails/claude-code-live-build-part-2-video-recorder-zoom-border-full-face-cam.jpg"
youtubeId: "5L8vvijKYOc"
tags:
  - Claude Code
  - Live Stream
  - Tutorial
  - Software Engineering
  - AI Agents
---

This is part two of my live build of a video recorder app with Claude Code. In [part one](zero-to-shipped-live-build-video-recorder-app-claude-code.html) I planned the app and got a first prototype that shows a screen share, a webcam and a changeable background. In this stream I make it a tool I would actually record with.

## Where we started

The app already recorded a screen and a talking head on one canvas, and it could blur the background behind me. But the screen area was static. If it pointed at the wrong part of the screen, I could not fix it before recording, and that defeats the point.

## The reference: my short form recorder

I had built a second recorder the day before for vertical short form video, and that one was close to what I wanted. It puts the screen recording in the top half and the face cam in the bottom half, with a divider line between them. You can zoom and move each part while recording, change the split (for example 50% screen and 50% cam), and swap the background or upload your own. It also shows an audio waveform, so you can see that your microphone is picking up sound.

I pointed Claude Code at that project as a reference, so it would not have to guess.

## What we added, one prompt at a time

**1. Adjustable zoom and position for the screen recording.** I asked Claude to let me adjust and zoom the part of the screen that is being recorded. It worked, and I could pan and zoom while the preview ran.

**2. A border highlight.** After zooming, it was hard to see where the recorded area ended. I asked for a visible frame around it, and it needed to be preview only, so it helps me but never appears in the video. Claude had already planned for that. I later asked for the border to be blue because it was easier to see on some backgrounds.

**3. Better layout.** The screen was too small and the face cam sat too low. Over several prompts I asked Claude to expand the screen area to the right, move the face cam up and toward the center, and keep a very slight overlap between the two, like the reference image. Small layout requests work best when you say exactly what should change and what should stay the same.

**4. A full face cam mode.** Intros are just a talking head, so I asked for an option that makes the face cam fill the whole canvas. This also works with the background blur.

**5. An audio waveform.** The last feature shows a live waveform, so I know my audio levels are good before I record.

## Lessons from the session

- **Give the AI a reference.** A screenshot or a working project beats a long description.
- **Ask for one thing at a time.** Each prompt changed one behavior, which made problems easy to spot.
- **Review the result between prompts.** I kept going back to the preview and adjusting.
- **Use text to speech or voice for long prompts.** It is faster than typing when you are explaining a layout.

I also say it directly on stream: the layout is not perfect yet, and the screen still feels a bit small to me. The plan was to record my next video with this tool and fix whatever got in the way.
