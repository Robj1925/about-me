---
title: "Meta Muse Controlled Claude to Post My Video"
date: "2026-11-09"
excerpt: "I left the house while a video was still rendering. From my phone, I told Meta Muse to find the export and hand it to Claude Code, and Claude posted it."
thumbnail: "assets/images/blog-thumbnails/meta-muse-controlled-claude-to-post-my-video.jpg"
youtubeId: "8fOLHVZyZBk"
tags:
  - AI Agents
  - Meta
  - Claude Code
  - Claude
  - Automation
---

One AI agent can now give work to another one. I used Meta Muse on my phone to tell Claude Code on my desktop to post a video, and I was not at my desk.

## The problem: the render was not done

I had edited a video and started the export on my desktop. Then I had to leave the house. Normally that means the video waits until I am back, because the publish step happens at the computer.

## One message from the phone

From the Meta Muse app on my phone, I sent one instruction in plain language:

> "I finished rendering a video within the last hour. Give that video to Claude and tell Claude to post it now."

I did not give a file name or a folder. I only said when the video was made.

## Muse hands the job to Claude

Muse connected to my desktop and found the MP4 that was exported in the last hour. It then started Claude Code, gave it the file path and told it to publish the video. Claude ran my publishing pipeline and posted it.

So there are two agents with two jobs:

- **Muse** is the remote. It is on my phone, it understands the request and it finds the right file.
- **Claude Code** is the worker. It is on the desktop, and it already knows how to publish my videos.

That split is the interesting part. I did not have to teach Muse my publishing steps. Claude already had them, so Muse only had to pass the job on. If you want to see the kind of pipeline Claude runs on my side, read [how I use Claude Code to edit my YouTube videos](/blog/how-i-use-claude-code-to-edit-my-youtube-videos.html).

## The catch

- **This needs real access to your computer.** Muse can only find the file because it is connected to my desktop. Decide what you are comfortable letting a phone app reach.
- **"Post it now" has no review step.** That is fine for a video I already checked. For anything public that you have not checked, add a step where you approve it first.
- **The time window does the targeting.** "Within the last hour" works when one video is in that window. With several new files, name the one you mean.

## My take

Most people compare AI agents as if you have to pick one. This shows a different setup: use the agent you can reach from anywhere to control the agent that already knows your workflow.

For the background on Meta's agent tools, see [Meta just dropped its own Claude Code](/blog/meta-just-dropped-its-own-claude-code.html).

Sources: [Meta Muse](https://muse.meta.com/) and [Claude](https://claude.ai/)

Watch the Short above for the breakdown. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
