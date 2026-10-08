---
title: "Gemini Omni 1.1 Flash: 40 Second Scenes, 4K Output"
date: "2026-09-08"
excerpt: "Google's Gemini Omni 1.1 Flash extends a scene up to 40 seconds, renders 360p drafts at a third of the 720p cost, and upscales finals to 4K. Here is what changed and what it costs."
thumbnail: "assets/images/blog-thumbnails/gemini-omni-1-1-flash-40-second-scenes-4k.jpg"
youtubeId: "CwZ6x4IKOj0"
tags:
  - Google
  - Gemini Omni
  - AI Video
  - News
---

Gemini Omni 1.1 Flash turns Google's AI video model into something you can actually build a production pipeline on. The original Gemini Omni brought real-world reasoning to generated video. Version 1.1, released August 27, adds the controls that working creators and developers kept asking for, and it is available through the Gemini API and Google AI Studio.

## Scenes that hold together for 40 seconds

The headline feature is scene extension. Give Omni a clip, for example an old sailor telling a story on a boat, and prompt it to continue the scene. Omni 1.1 now reads up to 10 seconds of prior context. The previous version saw only about 1 second.

That extra context is what keeps a character and a shot consistent. You extend in 10 second increments, up to 40 seconds in total, and Google says visual consistency and narrative adherence improved along the way.

## Keyframes for camera moves

The second control is keyframes. You give the model a first frame and a last frame, and it generates the continuous video between them. That is how you get one unbroken camera move: an orbit, a zoom transition, or a clip that loops cleanly. Omni 1.1 can also take up to three seconds of video as a reference to keep a subject consistent.

## Draft cheap, ship sharp

The third change is about money. A new 360p draft mode runs up to 60% faster than the standard 720p setting and costs one third as much. Google's published pricing puts it at $0.03 per second at 360p, against $0.10 at 720p, $0.15 at 1080p, and $0.30 at 4K.

The workflow writes itself: iterate on the shot in 360p until the motion and framing are right, then render the keeper at 1080p or upscale it to 4K. You stop paying full price for every failed attempt.

## Already in real products

This is not a lab preview. Adobe has integrated the model into Firefly, Figma Weave uses it for directing video with extensions, references, and 4K output, and Runway offers it to its users. GMI Cloud is also on the launch list.

The catch is cost at scale. There is no free tier for this model in the Gemini API, and a 40 second 4K render at $0.30 per second is $12 per attempt. Draft mode exists for exactly that reason, so use it.

Read the official launch post: [Gemini Omni 1.1 Flash lets you build with more control (Google)](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/)

If you are wiring video generation into your own apps or content workflows, the AI Academy community is where I share how I build these pipelines: [AI Academy](https://www.skool.com/ai-academy-with-robby-6849/about).
