---
title: "Create Unlimited AI Videos for FREE with Money Printer"
date: "2026-10-26"
excerpt: "MoneyPrinter turns one sentence into a finished YouTube Short with a script, voiceover, stock footage, subtitles and music. My Colab notebook runs it with a local Llama model and one free Pexels key, so you pay for no AI API at all."
thumbnail: "assets/images/blog-thumbnails/create-unlimited-ai-videos-free-with-moneyprinter.jpg"
youtubeId: "EJd30cDkT5M"
tags:
  - AI Video
  - Open Source
  - Tutorial
  - Automation
  - AI Tools
meta_title: "MoneyPrinter Colab Tutorial: Free AI Shorts From One Sentence"
meta_description: "Run MoneyPrinter in Google Colab with my notebook. A local Ollama model writes the script, a free Pexels key adds stock footage, and you get a finished Short."
---

**TL;DR:** MoneyPrinter is a free, open source (MIT) tool by FujiwaraChoki that makes a YouTube Short from one topic. I modified it a little in a Google Colab notebook so it is completely free and ready to use. The script comes from a Llama model that runs inside your Colab session through Ollama, the voice comes from free Microsoft Edge voices, and the only key you need is a free Pexels key for the stock footage. Two cells, one sentence, and you get a vertical video with a voiceover, subtitles, B-roll and background music.

## Table of Contents
- [What MoneyPrinter Is](#what-moneyprinter-is)
- [What My Notebook Changes](#what-my-notebook-changes)
- [What You Need](#what-you-need)
- [Step 1 Open the Colab Notebook](#step-1-open-the-colab-notebook)
- [Step 2 Choose CPU or a T4 GPU Runtime](#step-2-choose-cpu-or-a-t4-gpu-runtime)
- [Step 3 Select the Local Model and Run Step 1](#step-3-select-the-local-model-and-run-step-1)
- [Step 4 Choose a Topic and Run Step 2](#step-4-choose-a-topic-and-run-step-2)
- [Step 5 Add the Free Pexels Key](#step-5-add-the-free-pexels-key)
- [Step 6 Wait for the Script, Voice, Footage and Subtitles](#step-6-wait-for-the-script-voice-footage-and-subtitles)
- [The Result](#the-result)
- [Limits and Catches](#limits-and-catches)
- [MoneyPrinter or the Other Free Generators](#moneyprinter-or-the-other-free-generators)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

🎬 Watch the full walkthrough on YouTube → [https://youtu.be/EJd30cDkT5M](https://youtu.be/EJd30cDkT5M)

📓 Open my Colab notebook → [MoneyPrinter_Colab.ipynb](https://colab.research.google.com/gist/Robj1925/a4482362597d7cfa4b2053d507470b14/MoneyPrinter_Colab.ipynb)

## What MoneyPrinter Is

[MoneyPrinter](https://github.com/FujiwaraChoki/MoneyPrinter) is a GitHub project by FujiwaraChoki with about 14,100 stars and the MIT license. Its own description is short: "Automate the creation of YouTube Shorts by providing a video topic."

You give it a topic. It then:

- **Writes the script** with a local model through Ollama. The README says MoneyPrinter is "Ollama first", so script and metadata come from a model on your own machine, not a paid API.
- **Finds stock footage** on Pexels that matches the script.
- **Records the voiceover** sentence by sentence.
- **Makes the subtitles** and burns them into the video.
- **Adds background music** and compiles everything with MoviePy.

Not to be confused with MoneyPrinterTurbo, which is a different and bigger project. I cover that one in its own posts (links at the end).

## What My Notebook Changes

The normal install wants Docker, a TikTok session cookie for the voice, and a local Ollama install. My notebook does all of it in Colab, in two cells:

- **Step 1** clones MoneyPrinter at a pinned commit, installs ffmpeg and the Python packages, installs Ollama, and downloads the model you pick.
- **Free voices.** The voice step uses free Microsoft Edge voices (Andrew is the default) instead of a TikTok session ID. If Microsoft blocks the Colab IP, it falls back to gTTS.
- **No paid AI key.** The script model runs locally in your Colab session. No Gemini key, no OpenAI key, no AssemblyAI account.
- **Timeouts.** Downloads from Pexels have a time limit, so a stalled request cannot wait forever.
- **Music included.** Step 1 downloads one royalty free track, "Monkeys Spinning Monkeys" by Kevin MacLeod (CC BY 4.0, from incompetech.com).
- **Step 2** asks for the topic and your Pexels key, runs the full pipeline, logs how long each part takes, and shows the finished video in the notebook.

## What You Need

- A Google account, for Colab.
- A free **Pexels API key** for the stock footage: [pexels.com/api](https://www.pexels.com/api/).

That is the whole list. Pexels is free, but it has request limits, so do not expect to run hundreds of videos in an hour.

## Step 1 Open the Colab Notebook

Click the [Colab notebook link](https://colab.research.google.com/gist/Robj1925/a4482362597d7cfa4b2053d507470b14/MoneyPrinter_Colab.ipynb). It opens the notebook with two cells: **Step 1: Install MoneyPrinter and a local AI model** and **Step 2: Make a Short with voice, subtitles, stock footage, and music**.

If you want to keep your changes, use **File > Save a copy in Drive**.

## Step 2 Choose CPU or a T4 GPU Runtime

Open the runtime menu and click **Change runtime type**.

By default it is always **CPU**, and that works. I picked **T4 GPU**, which just makes things a little bit faster, then clicked **Save**. The runtime connects on its own after that. The T4 is part of the free Colab tier.

## Step 3 Select the Local Model and Run Step 1

At the top of Step 1 there is a **MODEL** dropdown with two models:

- `llama3.2:3b`, the smaller and faster one.
- `llama3.1:8b`, the 8 billion parameter one. This is the one I picked.

You do not really have to worry about this choice. Then:

1. Click the play button on Step 1.
2. Colab warns you that the notebook is not authored by Google. Click **Run anyway**.
3. Scroll to the end of the cell. That is the console, where you see what is happening.

It prepares the environment, installs the packages, then starts Ollama and downloads the model. This can take anywhere from two to ten minutes, so stay patient. When it is done, the console says **Step 1 complete** with the time it took and the model name.

## Step 4 Choose a Topic and Run Step 2

Go down to Step 2 and find the **TOPIC** field. This is where you say what the video is about, in one sentence.

I typed something silly on purpose: Mark Zuckerberg is a lizard.

Step 2 also has a **VOICE** dropdown (US, UK and Australian Edge voices), a **USE_MUSIC** checkbox and a **RENDER_THREADS** number. I left them at the defaults.

Press play on Step 2 and scroll down to the console again. It loads and unpacks the parts that Step 1 downloaded.

## Step 5 Add the Free Pexels Key

Next, the console asks for your **Pexels API key**. This is what MoneyPrinter uses to get the stock B-roll footage. It is completely free: sign up at [pexels.com/api](https://www.pexels.com/api/) and copy your key.

Paste it into the box and press **Enter**. The box is a password field, so the key does not show on the screen. If you run Step 2 again in the same session, it reuses the key and does not ask again.

## Step 6 Wait for the Script, Voice, Footage and Subtitles

Now it builds the video. In my run this took five to ten minutes. The console shows each part as it starts and finishes:

1. The Llama model writes the script and the search terms.
2. It searches Pexels and downloads the stock clips.
3. It does the text to speech for the voiceover.
4. It makes the subtitles. You can see them being generated in the log.
5. It adds the background music and compiles everything at the end.

When it finishes, the console shows the total time for the whole generation, and the video plays right inside the notebook. There is also a link to the file, which is saved in the `renders` folder with the script next to it as a text file.

## The Result

From that one sentence, MoneyPrinter made a vertical Short that opens with: "Many people have speculated about the true identity of Mark Zuckerberg, the co-founder and CEO of Facebook. Some believe that he is not a human being."

It has subtitles, background music and different stock clips cut to the voiceover. It is not bad, and it is pretty cool for the most part. It is a fun tool to play around with. Do not expect a finished video for a serious channel: the footage is generic stock footage and a small local model writes simpler scripts than the big paid models.

## Limits and Catches

- **"Unlimited" means no cost per video, not no limits.** Pexels has request limits, and Colab's free tier gives you limited runtime hours.
- **It is slow.** Step 1 takes two to ten minutes and every video takes about five to ten minutes in my tests.
- **The session is temporary.** When the Colab session ends, the model and the files are gone. Download your video, then run Step 1 again next time.
- **Small model, simple script.** A 3B or 8B Llama model writes the script. It stays on topic, but it is not as good as a large cloud model.
- **The music needs credit.** The track is CC BY 4.0. If you post the video, credit Kevin MacLeod (incompetech.com), or turn off **USE_MUSIC** and add your own.
- **You run third party code.** That is why Colab shows the warning. Read the cells if you want to know exactly what they do.

## MoneyPrinter or the Other Free Generators

This is the fifth free AI video tool I have run in Colab, and each one has a different trade off:

- [MoneyPrinterTurbo](/blog/generate-free-short-form-videos-with-moneyprinterturbo.html) has the most settings and a full web UI (and here is my [live demo of it](/blog/free-ai-video-generator-moneyprinterturbo-live-demo.html)).
- [ShortGPT](/blog/make-unlimited-ai-videos-with-shortgpt-free.html) needs a free Gemini key and makes landscape or vertical videos.
- [AI Shorts Generator](/blog/make-unlimited-ai-shorts-free-step-by-step.html) makes AI images on the free T4 GPU.
- [PurffleShorts](/blog/free-ai-turns-one-sentence-into-viral-shorts.html) makes text message stories and Reddit stories, and it is the fastest of the group.

MoneyPrinter is the simplest of them: two cells, one key, and no AI API at all.

## Frequently Asked Questions (FAQ)

**Is MoneyPrinter free?**
Yes. MoneyPrinter is open source under the MIT license, the script model runs locally, the Edge voices need no key, and the Pexels key is free. Colab's free tier runs it.

**Do I need a GPU?**
No. CPU is the default and it works. The T4 GPU only makes it a little bit faster.

**Which AI model writes the script?**
Llama 3.1 8B or Llama 3.2 3B, through Ollama, inside your Colab session. You pick it in the MODEL dropdown.

**Why does it ask for a Pexels key?**
Pexels gives it the stock footage for the video. The key is free at pexels.com/api.

**Is this the same as MoneyPrinterTurbo?**
No. MoneyPrinter is by FujiwaraChoki. MoneyPrinterTurbo is a different project with its own web UI.

If you have questions or need help with any step, leave them in the comments of the [video](https://youtu.be/EJd30cDkT5M). For more tools like this, plus the Claude Code skills I use to automate my content, join the AI Academy community on Skool → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)

Sources: [MoneyPrinter on GitHub](https://github.com/FujiwaraChoki/MoneyPrinter), [My MoneyPrinter Colab notebook](https://colab.research.google.com/gist/Robj1925/a4482362597d7cfa4b2053d507470b14/MoneyPrinter_Colab.ipynb), [Notebook gist](https://gist.github.com/Robj1925/a4482362597d7cfa4b2053d507470b14), [Pexels API](https://www.pexels.com/api/), [Ollama](https://ollama.com/)
