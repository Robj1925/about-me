---
title: "FLUX 3 Video Makes 20 Second Clips With Sound"
date: "2026-09-13"
excerpt: "Black Forest Labs' FLUX 3 Video generates clips up to 20 seconds long with dialogue and sound effects built in, and human raters ranked it first for text to video with an Elo score of 1135."
thumbnail: "assets/images/blog-thumbnails/flux-3-video-20-second-clips-with-sound.jpg"
youtubeId: "f6UBQaUTLdE"
tags:
  - Black Forest Labs
  - FLUX 3
  - AI Video
  - News
---

Black Forest Labs just released FLUX 3 Video, and it generates clips up to 20 seconds long with the audio built in. This is the lab behind the FLUX image models, and with this release its video generation is generally available for the first time, through the BFL API and select partners.

## Video and sound in one pass

FLUX 3 Video renders natively in HD (720p) and upscales to Full HD (1080p). The dialogue, sound effects, and ambience are generated together with the frames, not added in a second pass. Audio is on by default.

The 20 second length matters. Short clips force you to stitch shots together and hope the character and the sound stay consistent. Twenty seconds in one request is enough for a full beat of a scene.

## You control the shot

There are two ways to direct it beyond a text prompt.

- **Keyframes:** start from an image, set an end frame, or place multiple keyframes, and FLUX 3 builds every frame in between.
- **Continuation:** feed it up to four seconds of your own video and audio, describe what happens next, and it carries the movement, the camera, the dialogue, and the sound past the cut.

## Real spoken dialogue

FLUX 3 Video does lip synced speech in a long list of languages: English, Chinese, Spanish, French, German, Japanese, Portuguese, Russian, Italian, Indonesian, Turkish, Hindi, Punjabi, and more. That is over a dozen languages, which opens up dubbed or localized clips without a separate voice tool.

## The benchmark and the price

Black Forest Labs reports that human raters preferred FLUX 3 Video for both text to video and image to video. In the all versus all text to video ranking it leads with an Elo score of 1135. For image to video it ties Seedance 2.0 and beats the other state of the art models it was tested against. These are the lab's own evaluations, so treat them as a strong claim until independent leaderboards confirm them.

Draft mode keeps iteration cheap. A draft returns a fast preview of your prompt for $0.06 per second, and when it looks right you send it back for the full quality render, which starts at $0.17 per second. A full 20 second clip at that rate is about $3.40.

The catch: this is a paid API, not a free tool, and there are no open weights yet. Black Forest Labs lists an open-weight FLUX 3 Dev variant on its roadmap, but for now you pay per second.

Read the launch post: [FLUX 3 Video, Part 1: Generation (Black Forest Labs)](https://bfl.ai/blog/flux-3-video)
