---
title: "How to spot fake AI content instantly"
date: "2026-10-14"
excerpt: "Google opened SynthID Detector to everyone. One upload checks images, video and audio for watermarks from Google, OpenAI, NVIDIA and Kakao, and Google has already watermarked over 180 billion images and videos."
thumbnail: "assets/images/blog-thumbnails/how-to-spot-fake-ai-content-instantly.jpg"
youtubeId: "2bPfZbnwQFM"
tags:
  - AI
  - Google
  - OpenAI
  - AI Safety
  - News
---

Google just opened its AI watermark checker to everyone, and it does not only catch Google's own media. It also checks for watermarks from OpenAI, NVIDIA and Kakao. Here is what it does, how to use it, and the one thing you must understand before you trust a result.

## What SynthID is

Google launched SynthID in 2023. It hides an imperceptible watermark inside AI-generated media: in the pixels for images and video, and in the frequency components of audio. Unlike a visible logo or file metadata, the mark travels with the content when it gets shared and reshared.

The scale is large. In its October 7, 2026 announcement, Google says it has watermarked over 180 billion images and videos and 240,000 years of audio.

Last year the detector was an early version for media professionals. As of October 7 it is available to everyone, globally, in English.

## One upload, four companies

Go to [synthid.com](https://synthid.com/), accept the terms, and drop in a file. The detector checks for SynthID watermarks from Google, OpenAI, NVIDIA and Kakao. Google says Apple is coming soon.

Supported formats, from the site:

- **Images:** JPG, JPEG, PNG, BMP, WEBP, AVIF, HEIC, HEIF, TIFF, GIF
- **Video:** MP4, MOV, WEBM
- **Audio:** WAV, MP3, OGG, FLAC, AAC, M4A

For video and audio it does more than give a yes or no. It marks which segments carry the watermark. Google's demo checks a night-vision clip of a raccoon eating a sandwich and flags it as made or edited with Google AI.

On privacy: the site says uploaded files are deleted right after the result comes back. A digital signature of the file is kept for 24 hours to enforce daily usage quotas.

## You may already have it

You do not need the website for every check. Google says the same verification is built into Search, the Gemini app and Chrome, and those features handle over 1 million requests a day combined.

## The catch: it is not a general AI detector

Google says this on the page itself: "This is not a general AI detector." It can only find media from companies that adopted SynthID.

A "not detected" result means no confident signal was found. Google lists the reasons that can happen with AI content:

- The media came from a model without SynthID (a non-partner, or made before the company adopted it).
- Heavy edits or compression weakened the watermark.

The FAQ also says the watermark is not infallible. Someone who tries many transformations may find one that slips past, and in very rare cases it can falsely trigger on non-watermarked content. Google recommends you collect more evidence before you decide.

So a clean result never proves a human made something. A positive result is strong evidence. A negative result is only the absence of one signal.

## My take

This is the most useful free check I know of for "was this made with AI?", because a watermark is a signal put there on purpose, not a guess from patterns. Use it first when an image or clip looks suspicious. Then remember its limit: it covers the companies that signed up, and many open models do not watermark at all. For more on where SynthID shows up in Google's creative tools, see my [Google Flow and Gemini Omni post](/blog/google-flow-gemini-omni-creative-ai-2026.html).

Sources: [Google's announcement](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/), [SynthID Detector](https://synthid.com/) and [Google DeepMind on SynthID](https://deepmind.google/models/synthid/)
