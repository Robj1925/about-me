---
title: "This FREE AI Turns One Sentence Into Viral Shorts"
date: "2026-10-22"
excerpt: "PurffleShorts writes the script, grades it, voices it, finds stock footage and burns in captions with sound effects, from one sentence. It makes 11 formats, including text message and Reddit stories, and a full video takes about 4 to 5 minutes in my free Colab notebook."
thumbnail: "assets/images/blog-thumbnails/free-ai-turns-one-sentence-into-viral-shorts.jpg"
youtubeId: "Qmykk5BiKOw"
tags:
  - AI Video
  - Open Source
  - Tutorial
  - Automation
  - Gemini
meta_title: "PurffleShorts Colab Tutorial: Free AI Shorts From One Sentence"
meta_description: "Run PurffleShorts free in Google Colab. Two free keys, one sentence, and you get facts, text message or Reddit story shorts with captions and sound effects."
---

**TL;DR:** PurffleShorts is a free, open source (MIT) shorts generator by Chaman Raj. You type one sentence, and it writes the script, grades and rewrites it, records the voices, finds stock footage for every scene, burns in word by word captions with sound effects, and renders a 1080x1920 video. It has 11 formats, including text message stories, two voice dialogues and Reddit stories. My Colab notebook runs it with no GPU, two free keys (Gemini and Pexels) and a simple web page. A full video takes about 4 to 5 minutes. MoneyPrinterTurbo took about 20.

## Table of Contents
- [What PurffleShorts Is](#what-purffleshorts-is)
- [What My Notebook Adds](#what-my-notebook-adds)
- [What You Need](#what-you-need)
- [Step 1 Open the Notebook and Run Step 1](#step-1-open-the-notebook-and-run-step-1)
- [Step 2 Run Step 2 and Open the Web Page](#step-2-run-step-2-and-open-the-web-page)
- [Step 3 Add Your Two Free Keys](#step-3-add-your-two-free-keys)
- [Step 4 Make Your First Short](#step-4-make-your-first-short)
- [What It Is Doing While It Renders](#what-it-is-doing-while-it-renders)
- [The Finished Short](#the-finished-short)
- [Text Message and Reddit Stories](#text-message-and-reddit-stories)
- [No Keys Yet The Zero Key Demo](#no-keys-yet-the-zero-key-demo)
- [Bonus Clip a Long Video Into Shorts](#bonus-clip-a-long-video-into-shorts)
- [Troubleshooting Tips](#troubleshooting-tips)
- [Limits and Catches](#limits-and-catches)
- [How It Compares](#how-it-compares)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

🎬 Watch the full walkthrough on YouTube → [https://youtu.be/Qmykk5BiKOw](https://youtu.be/Qmykk5BiKOw)

📓 Open the free notebook → [PurffleShorts_Colab.ipynb](https://colab.research.google.com/gist/Robj1925/5ebf006e494173972cd55c731bc19ce2/PurffleShorts_Colab.ipynb)

## What PurffleShorts Is

[PurffleShorts](https://github.com/Chamanrajragu/purffle-shorts) is built by Chaman Raj. It is open source under the MIT license and written in Python. It is a small project for now, with about 46 stars when I wrote this.

Here is what I like about it:

- **11 formats.** Facts, story, listicle, myth, quiz, explainer, motivational and news, plus the ones that go viral: **text message stories** (an animated phone chat with two voices), **two voice dialogues** and **Reddit style stories**.
- **The Script Doctor.** A second AI pass grades every script out of 100 and rewrites the weak lines before the voiceover starts.
- **Plain ffmpeg.** It renders without MoviePy, without ImageMagick and without a GPU. That is why it runs on Colab's free CPU runtime with no fixes to the render.
- **It writes the post too.** Every video comes with a title, a description and tags.

The README even compares PurffleShorts to MoneyPrinterTurbo and ShortGPT, two tools I already made videos on.

## What My Notebook Adds

My part is the notebook and the web page. Chaman Raj built the tool. The notebook:

- Sets **Gemini 3.8 Flash** as the writer, with a free Google AI Studio key. When 3.8 Flash is busy, it tries again with Gemini 3.5 Flash, then Gemini 3.5 Flash Lite.
- Turns off the watermark (by default every video gets a "PurffleStudios" watermark) and turns off the auto upload.
- Opens a simple web page with three tabs: **API Keys** with a setup check, **Create** with all 11 formats and a live progress log, and **Clip** for long videos. You never touch the code.
- Fixes three problems I found in testing: room for Gemini 3 thinking, more retries when the free tier is busy, and a time limit on the free voice download (one download hung for 28 minutes on my Mac). A job that prints nothing for 5 minutes now stops, so you can click Generate again.

## What You Need

- A Google account, for Colab.
- A **Gemini API key**, required. It is free from Google AI Studio. If you do not have one, follow my guide on [how to get your free Google Gemini API key](/blog/how-to-get-your-free-google-gemini-api-key-2026.html).
- A **Pexels API key**, also free: [pexels.com/api](https://www.pexels.com/api/). It is optional, but get it. Without it, every scene is just a color gradient.

Both keys are free, and both have usage limits.

## Step 1 Open the Notebook and Run Step 1

1. Open the [notebook link](https://colab.research.google.com/gist/Robj1925/5ebf006e494173972cd55c731bc19ce2/PurffleShorts_Colab.ipynb).
2. Click **File > Save a copy in Drive**. Now it is yours.
3. You do not need a GPU for this one. Leave the runtime on CPU and click **Connect**.
4. Click play on **Step 1**.

If you run the shared link without saving a copy, Colab shows "This notebook was not authored by Google." Click **Run anyway**.

Step 1 takes about a minute. It installs PurffleShorts at a pinned commit, with the extras the Clip tab needs.

## Step 2 Run Step 2 and Open the Web Page

When Step 1 is done, click play on **Step 2**. When it finishes, you see a link that ends in **gradio.live**. Click it.

It opens the web page in a new tab. Keep the Colab tab open: the page stops when the session stops.

## Step 3 Add Your Two Free Keys

Go to the **API Keys** tab:

1. Paste your **Gemini** key. Gemini writes the script.
2. Paste your **Pexels** key. Pexels gives you real stock footage for every scene.
3. Click save. It runs a setup check. Ticks mean your keys are saved, and your first Generate shows that they work.

Your keys stay in your own Colab session. The same tab also has a Gemini model dropdown, an optional Pixabay key for more footage, and the Script Doctor setting (I come back to that in the tips).

## Step 4 Make Your First Short

Go to the **Create** tab:

1. Type one sentence for the topic. I made a facts short about the octopus heart.
2. **Format:** facts. The other 10 formats are in the same list.
3. Pick a **caption style** (bold, karaoke, boxed, neon, clean or minimal), a **voice** from the free Edge neural voices, and the **length** (15 to 60 seconds).
4. Click **Generate**.

Under "More options" you can also change the shape (9:16, 16:9, 1:1 or 4:5), make the video from a web page or a Reddit post link, or make translated copies.

## What It Is Doing While It Renders

The progress log shows each step:

1. It checks what people actually search on YouTube for your topic, so the title and tags use those words.
2. Gemini writes the script, and the Script Doctor grades it and rewrites it if need be.
3. A free voice reads it, it finds a stock clip per scene, it makes captions word by word and adds sound effects.
4. ffmpeg renders all of it together.

Most of the wait is Gemini. The render itself is about a minute and a half on free Colab. In my tests on the free CPU runtime, the full run from Generate to finished video took 213 to 313 seconds, so about 4 to 5 minutes. A paid Colab runtime is faster.

## The Finished Short

The short is 1080 by 1920, ready for YouTube Shorts, TikTok or Reels. Next to the player there is a copy box with the title, the description, the tags, and the Script Doctor's score with what it fixed. Copy it and download the video.

My facts short opened with: "Every time an octopus swims, its main heart literally stops beating to survive." Then it explains the two extra pumps for the gills and the copper based blood. It is on topic, the captions are word by word, and the footage matches the scenes.

## Text Message and Reddit Stories

The viral formats are the same steps. You change one dropdown:

- **chat** makes a text message story: an animated phone, two voices and typing dots.
- **reddit** makes a post card, then reads the story with captions.

These stories are fiction that the AI writes. The prompt does not allow it to use real people.

## No Keys Yet The Zero Key Demo

No API keys at all? Tick the **Zero key demo** box and it makes a video with a built in script in under a minute. It is good to test the setup and get familiar with the page before you get your keys.

## Bonus Clip a Long Video Into Shorts

The third tab, **Clip**, works like Opus Clip, but free. Upload a long video (a podcast or a talk), and it finds the best moments and cuts them into captioned vertical clips. You set how many clips you want (1 to 5) and you can add a short brief, for example "the funniest moments".

For **Framing**, pick the whole picture on a blurred copy for a screen recording like mine, or follow the face for a podcast. Only clip videos you own.

I tested it on my own video and it took about five to ten minutes. A T4 GPU makes it faster.

## Troubleshooting Tips

- **"Gemini is busy" in the log.** That is normal. Gemini 3.8 Flash often answers "503 high demand", and the page retries on its own with Gemini 3.5 Flash and then Gemini 3.5 Flash Lite.
- **You want it faster.** In the API Keys tab, set the Script Doctor to score or off. It then skips the rewrite pass.
- **The gradio.live link stops working.** Most likely the Colab session stopped. Run Step 2 again.
- **No music.** There is no music track in the repo, so the videos have voice and sound effects only. Add a track in CapCut or in YouTube.

## Limits and Catches

- **Free keys, real limits.** Gemini and Pexels are free, but the free tiers have rate limits. When Gemini is busy, a run can still fail after the retries. Click Generate again later.
- **Colab can stop the session.** Colab's FAQ says free users of web UIs commonly see runtime terminations. Short sessions worked in all my tests, but save your videos as you go.
- **It is a young project.** PurffleShorts is a few months old and small. My notebook pins one tested commit, so a later change in the repo does not break it.
- **Stock footage is stock footage.** The clips are generic. Good for faceless shorts, not for a story that needs exact visuals.
- **AI stories are fiction.** Do not post a text message or Reddit story as if it were real.

## How It Compares

I have now run five free AI video tools in Colab. [MoneyPrinterTurbo](/blog/generate-free-short-form-videos-with-moneyprinterturbo.html) took about 20 minutes per video. [ShortGPT](/blog/make-unlimited-ai-videos-with-shortgpt-free.html) needed patches for MoviePy and ImageMagick before it ran. [AI Shorts Generator](/blog/make-unlimited-ai-shorts-free-step-by-step.html) takes about the same time as this one and makes AI images on the T4 GPU. [MoneyPrinter](/blog/create-unlimited-ai-videos-free-with-moneyprinter.html) needs no AI key at all. PurffleShorts has the most formats and is the only one with text message and Reddit stories.

## Frequently Asked Questions (FAQ)

**Is PurffleShorts free?**
Yes. It is open source under the MIT license, it runs on Colab's free CPU runtime, and both keys are free. The keys have usage limits.

**Do I need a GPU?**
No. It renders with ffmpeg on the CPU. A GPU only makes the Clip tab faster.

**How long does one video take?**
About 4 to 5 minutes on free Colab, most of it Gemini writing and checking the script. The zero key demo takes under a minute.

**Do I need the Pexels key?**
It is optional, but without it every scene is a color gradient. Get it, it is free.

**Does it add music?**
No. The videos have voice and sound effects. Add music in CapCut or YouTube.

Make one and tell me your topic in the comments of the [video](https://youtu.be/Qmykk5BiKOw). If you want personal help with tools like this, plus my Claude Code skills and GitHub repos, join the AI Academy community on Skool → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)

Sources: [PurffleShorts on GitHub](https://github.com/Chamanrajragu/purffle-shorts), [My PurffleShorts Colab notebook](https://colab.research.google.com/gist/Robj1925/5ebf006e494173972cd55c731bc19ce2/PurffleShorts_Colab.ipynb), [Notebook gist](https://gist.github.com/Robj1925/5ebf006e494173972cd55c731bc19ce2), [Google AI Studio](https://aistudio.google.com/), [Pexels API](https://www.pexels.com/api/)
