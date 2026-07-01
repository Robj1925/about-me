---
title: "Generate a Complete Short-Form Video for Free with MoneyPrinterTurbo"
date: "2026-06-23"
excerpt: "Script, footage, voiceover, subtitles, background music. All free. Here's exactly how to go from zero to a publishable short-form video in 20 minutes."
thumbnail: "assets/images/blog-thumbnails/generate-free-short-form-videos-with-moneyprinterturbo.jpeg"
youtubeId: "mmYCbuZlHpQ"
tags:
  - AI Video
  - Free Tools
  - Tutorial
  - Automation
---

I just generated an entire short-form video from scratch using MoneyPrinterTurbo. Script, footage, voiceover, subtitles, background music. All free. Here's exactly how to do it.

## Step 1: Get the Tool

Go to the [MoneyPrinterTurbo GitHub repository](https://github.com/harry0703/MoneyPrinterTurbo/blob/main/README-en.md). It's open source, MIT license, and completely free.

## Step 2: Open It in Google Colab

The easiest way to use this is Google Colab — no installation required. You'll find the Colab link directly in the repo. Click it and it opens a ready-to-run notebook in your browser.

## Step 3: Connect to GPU

In the first cell, change your runtime to **T4 GPU**. This makes everything run significantly faster. Runtime menu at the top right, change runtime type, select T4.

## Step 4: Install Dependencies

Run the dependency installation cell. This sets up all the libraries you need. It takes a few minutes the first time.

## Step 5: Configure for Remote Access

Run the Ngrok configuration cell. This deploys a web UI you can access from your browser. Without this step, the interface only runs inside the Colab environment where you can't interact with it.

## Step 6: Get Your API Keys

You need two free API keys:

- **Gemini API key** (free tier available) — grab yours at [this walkthrough](https://www.youtube.com/watch?v=yZN5a12CZD8) if you need help
- **Pexels API key** (free tier available) — sign up at pexels.com/api

Paste both into their respective cells and run them.

## Step 7: Access the Web UI

Once configured, you'll get a URL in the output. Click it and press "Visit Site" to open the full web interface.

## Step 8: Configure Basic Settings

In the web UI, open basic settings. Select **Gemini** as your LLM provider and paste your API key. Set **Pexels** as your footage source and paste that API key too.

## Step 9: Enter Your Video Topic

Input the topic for your video. Example: *"How ordinary people are making their first $10K online without selling anything"*

Be specific with your topic. Vague topics produce vague scripts.

## Step 10: Generate Script and Keywords

Click **"Use AI to generate video script and video keywords."** Gemini will automatically write both the script and the search terms it'll use to pull matching footage from Pexels.

## Step 11: Choose Your Settings

- Select **portrait (9:16)** for TikTok/Reels or **landscape (16:9)** for YouTube
- Pick your voiceover (example: American English)
- Leave background music on random or upload custom audio

## Step 12: Generate the Video

Click generate and wait. It takes around **20 minutes**. Go grab coffee. The tool is assembling the script, pulling footage, generating the voiceover, adding subtitles, and mixing in background music — all automatically.

## Step 13: Watch and Download

Once done, watch your finished video in the UI. Download it and upload directly to your platform.

## Final Thoughts

No script writing. No footage hunting. No editing. One topic, 20 minutes later, you have a publishable video.

Everything here is free. Limited usage on the free tiers, but more than enough to test and iterate before committing to a paid plan. Watch the full walkthrough below to see it in action.
