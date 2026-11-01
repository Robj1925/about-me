---
title: "How to Make Unlimited AI Shorts for FREE (Step by Step)"
date: "2026-10-21"
excerpt: "AI Shorts Generator turns one sentence into a finished 1080x1920 short, but out of the box it needs paid OpenAI and fal.ai keys. I patched it to run free in Google Colab with Gemini, Edge voices and SDXL Turbo images on the free T4 GPU."
thumbnail: "assets/images/blog-thumbnails/make-unlimited-ai-shorts-free-step-by-step.jpg"
youtubeId: "-2L2BuMVdyk"
tags:
  - AI Video
  - Open Source
  - Tutorial
  - Automation
  - Gemini
meta_title: "AI Shorts Generator Colab Tutorial: Free AI Shorts, No Paid Keys"
meta_description: "Run AI Shorts Generator free in Google Colab. One free Gemini key, free Edge voices and SDXL Turbo images on a T4 GPU turn one sentence into a short."
---

**TL;DR:** AI Shorts Generator is an open source (MIT) tool by Abdullah Naveed. You type one sentence, and it writes the script, makes the visuals, records the voiceover, burns in word by word captions and exports a 1080x1920 video with titles and hashtags for each platform. Out of the box it needs paid OpenAI and fal.ai keys, so I modified it to run 100% free in Google Colab. The only required key is a free Gemini key. The voices are free Microsoft Edge voices, every scene gets a free SDXL Turbo image made on Colab's free T4 GPU, and a free Pexels key adds real stock clips if you want them. No credit card, no payment.

## Table of Contents
- [What AI Shorts Generator Is](#what-ai-shorts-generator-is)
- [Why It Is Not Free Out of the Box](#why-it-is-not-free-out-of-the-box)
- [What I Changed](#what-i-changed)
- [What You Need](#what-you-need)
- [Step 1 Open the Notebook and Select the T4 GPU](#step-1-open-the-notebook-and-select-the-t4-gpu)
- [Step 2 Run Step 1 and Step 2](#step-2-run-step-1-and-step-2)
- [Step 3 Paste and Save Your API Keys](#step-3-paste-and-save-your-api-keys)
- [Step 4 Fill In the Create Tab](#step-4-fill-in-the-create-tab)
- [Step 5 Watch the Progress Log](#step-5-watch-the-progress-log)
- [Step 6 Preview, Copy and Download](#step-6-preview-copy-and-download)
- [The Result](#the-result)
- [Tips and Troubleshooting](#tips-and-troubleshooting)
- [Limits and Catches](#limits-and-catches)
- [How It Compares](#how-it-compares)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

🎬 Watch the full walkthrough on YouTube → [https://youtu.be/-2L2BuMVdyk](https://youtu.be/-2L2BuMVdyk)

📓 Open the free notebook → [AI_Shorts_Generator_Colab.ipynb](https://colab.research.google.com/gist/Robj1925/2a60175cfcfec775bed65920806c8ced/AI_Shorts_Generator_Colab.ipynb)

## What AI Shorts Generator Is

[AI Shorts Generator](https://github.com/AbdullahNaveed/ai-shorts-generator) was built by Abdullah Naveed. It is MIT licensed, and the README calls it "a weekend project, shared openly in case it's useful to you too." So credit goes to him. My part is the free Colab version.

The pipeline:

1. **Topic and script.** A language model writes the script as a few scenes.
2. **Visuals.** For each scene, it reuses a clip from its library or makes a new one.
3. **Voiceover** for each scene.
4. **Word level captions**, burned in.
5. **The final MP4**, plus titles, captions and hashtags for each platform.

The smart part is the **clip library**. Every clip it downloads or makes is saved and tagged, so the next video can reuse a good shot instead of paying for a new one.

## Why It Is Not Free Out of the Box

In the original repo, the script, the voice and the clip matching are all OpenAI calls, and the AI images and motion come from fal.ai. The README has its own cost table: about $0.02 per video for the script, voice and captions, and about $0.75 per video with Wan AI motion on 5 scenes.

That is cheap, but it is not free, and you need a card on file with two companies. I wanted it completely free.

## What I Changed

My notebook keeps the tool and swaps every paid part for a free one:

| Part | Original | My free version |
| --- | --- | --- |
| Script | OpenAI | Gemini 3.8 Flash, free Google AI Studio key |
| Clip matching | OpenAI embeddings | Gemini embeddings, same free key |
| Voiceover | OpenAI voice model | Microsoft Edge neural voices, no key, six voices in the menu |
| Visuals | fal.ai (paid) | A free SDXL Turbo image on the Colab T4 GPU for every scene, with Ken Burns motion |
| Stock footage | Pexels | Pexels, optional and free |
| Captions | Word by word | Word by word with faster whisper |

Other fixes, so it runs on Colab today:

- The repo and the packages that broke are pinned to tested versions.
- The match threshold went up to 0.70, so a scene only reuses a stock clip that really fits. In my tests, Gemini embeddings scored the right clip 0.78 to 0.86 and the wrong ones 0.59 to 0.64.
- I removed the paid fal.ai, watermark and outro options.
- It opens a simple web page with an API Keys tab, a Create tab with live progress, the video player and a copy box. Two cells: the first installs, the second opens the page. You never touch the code.

## What You Need

- A Google account, for Colab.
- A **Gemini API key**, required and free. If you do not have one, here is my guide on [how to get your free Google Gemini API key](/blog/how-to-get-your-free-google-gemini-api-key-2026.html).
- A **Pexels API key**, optional and free. Go to [pexels.com/api](https://www.pexels.com/api/), sign up and request a key. You only need it for real stock clips. I used one in the video.

Your keys stay in your own Colab session. Nothing is saved to the notebook.

## Step 1 Open the Notebook and Select the T4 GPU

1. Open the [Colab notebook](https://colab.research.google.com/gist/Robj1925/2a60175cfcfec775bed65920806c8ced/AI_Shorts_Generator_Colab.ipynb).
2. Click **File > Save a copy in Drive**. Now it is yours.
3. Click **Runtime > Change runtime type**, pick **T4 GPU**, click **Save**, then **Connect**.

This one does need the GPU, because the SDXL Turbo images are made on it. The T4 is part of Colab's free tier.

## Step 2 Run Step 1 and Step 2

1. Click play on the first cell, **Step 1: Install and patch**.
2. Google shows a warning because the notebook comes from GitHub, not from Google itself. That is normal for any shared public notebook. Click **Run anyway**.
3. Step 1 took about a minute for me (the notebook says up to 2 minutes). It downloads the tools, installs everything and applies my free patches. Wait for **Step 1 done** in the console.
4. Click play on **Step 2**. At the bottom of the console you get a link that ends in **gradio.live**. Click it.

Keep the Colab tab open. The page stops when the session ends.

## Step 3 Paste and Save Your API Keys

In the first tab of the new page, **API Keys**:

1. Paste your Gemini key. It is 100% required.
2. Paste your Pexels key if you have one.
3. Click **Save keys**. The page tells you when they are saved.

There is also an optional Pixabay field. Your saved keys survive a Step 2 rerun.

## Step 4 Fill In the Create Tab

Now the fun part. In the **Create Short Video** tab:

- **Topic:** one sentence, any topic you want. Or leave it empty and Gemini picks one for your niche. My topic was "why the ocean glows blue at night".
- **Niche** (optional): it focuses the writer. Think fitness, finance, AI tools, whatever your niche is. Clear the default and type your own.
- **Voice:** six free Edge voices (Andrew, Christopher, Guy, Aria, Jenny and Ryan).
- **Length:** 15 to 60 seconds.
- **Stock searches:** you can leave it at 0. It only matters if you added a Pexels key, and each search takes about two minutes (5 clips per search).

Click **Generate Short Video**. It can take a while.

## Step 5 Watch the Progress Log

The log shows what happens behind the scenes:

1. Gemini writes the script as four to five scenes.
2. For each scene, it checks the stock library, then makes an SDXL Turbo image when nothing fits.
3. The Edge voice reads each scene.
4. faster whisper lines up the captions word by word.
5. ffmpeg puts it all together with Ken Burns motion and the captions.

The first video on a new runtime usually takes about four to five minutes, because the image model has to download first.

## Step 6 Preview, Copy and Download

The finished short is 1080 by 1920, ready for YouTube Shorts, TikTok or Reels.

The box next to the player has the YouTube title, the description, the TikTok caption, the X post, the hashtags and the script itself. Click the copy button to grab all of it, and download the video with the button on the player.

## The Result

My short about the glowing ocean opens with: "That glowing blue ocean water isn't magical nature. It's a desperate burglar alarm." Then it explains that the plankton light up when they are bent by force, so a bigger predator spots the attacker. It is a good hook, the captions are word by word, and the AI images follow the script.

It is not perfect. The images are still pictures with Ken Burns motion, not real video, and there is no music bed in the free version. You can add music in CapCut or in YouTube.

## Tips and Troubleshooting

- **The second video is faster**, because the image model is already downloaded.
- **If the gradio.live link stops working**, the Colab session ended. Run Step 2 again (or both steps after a disconnect).
- **For your first video, leave Stock searches at 0** so it renders as fast as possible.
- **Gemini has daily limits** on the free key. That is plenty for a few videos a day.

## Limits and Catches

- **"Unlimited" means no cost, not no limits.** Gemini, Pexels and Colab's free GPU time all have limits.
- **Colab can stop web UI sessions.** The free tier can end runtimes that you use mostly through a web page. Short sessions worked for me. Download your videos as you go.
- **Stock matching is strict on purpose.** With the 0.70 threshold, few stock clips match, so most scenes get an AI image. In one test only 1 of 9 scenes matched a stock clip.
- **No music.** The free version is voice only.
- **You own the rights question.** The README says you are responsible for the licensing of any footage, music or AI media you publish. Pexels footage is free to use.

## How It Compares

This is one of five free AI video tools I run in Colab. [ShortGPT](/blog/make-unlimited-ai-videos-with-shortgpt-free.html) uses stock footage and has a dubbing mode. [MoneyPrinterTurbo](/blog/generate-free-short-form-videos-with-moneyprinterturbo.html) has the most settings, but it took me about 20 minutes per video. [PurffleShorts](/blog/free-ai-turns-one-sentence-into-viral-shorts.html) takes about the same time as this one and adds text message and Reddit stories. [MoneyPrinter](/blog/create-unlimited-ai-videos-free-with-moneyprinter.html) runs a local Llama model and needs no AI key. AI Shorts Generator is the one that makes its own AI images for free.

## Frequently Asked Questions (FAQ)

**Is AI Shorts Generator free?**
The repo needs paid OpenAI and fal.ai keys. My Colab version replaces all of them with free tools. You only need a free Gemini key.

**Do I need a GPU?**
Yes, select the free T4 GPU in Colab. The AI images are made on it.

**Do I need a Pexels key?**
No. It is optional, for real stock clips. Without it, every scene gets an AI image.

**How long does one video take?**
About four to five minutes for the first video on a new runtime. The next ones are faster.

**Can it pick the topic for me?**
Yes. Leave the topic empty and Gemini picks one for your niche.

Drop your video topic in the comments of the [video](https://youtu.be/-2L2BuMVdyk). I am curious to see what you make. If you want more tools like this, plus the Claude Code skills and GitHub repos I use to make my own Shorts, join the AI Academy community on Skool → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)

Sources: [AI Shorts Generator on GitHub](https://github.com/AbdullahNaveed/ai-shorts-generator), [My AI Shorts Generator Colab notebook](https://colab.research.google.com/gist/Robj1925/2a60175cfcfec775bed65920806c8ced/AI_Shorts_Generator_Colab.ipynb), [Notebook gist](https://gist.github.com/Robj1925/2a60175cfcfec775bed65920806c8ced), [Google AI Studio](https://aistudio.google.com/), [Pexels API](https://www.pexels.com/api/)
