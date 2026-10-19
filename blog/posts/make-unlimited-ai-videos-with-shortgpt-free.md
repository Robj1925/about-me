---
title: "Make Unlimited AI Videos with ShortGPT (Free)"
date: "2026-10-19"
excerpt: "The Google Colab link in the ShortGPT repo no longer runs, so I fixed it with 7 patches in one cell. Three free API keys and one sentence give you a finished AI video, with script, stock footage, voiceover and edit done for you."
thumbnail: "assets/images/blog-thumbnails/make-unlimited-ai-videos-with-shortgpt-free.jpg"
youtubeId: "be7vO2j7Fmc"
tags:
  - AI Video
  - Open Source
  - Tutorial
  - Automation
  - Gemini
meta_title: "ShortGPT Colab Tutorial: Free AI Video Generator (Fixed)"
meta_description: "The ShortGPT Colab link is broken, so I fixed it. Run my notebook, add 3 free API keys, and turn one sentence into a full AI video in Google Colab."
---

**TL;DR:** ShortGPT is a free, open source (MIT) AI video generator by RayVentura. It writes the script, finds stock footage on Pexels, adds a voiceover and edits the video for you. The Google Colab link in its GitHub repo does not run anymore, so I wrote a fixed notebook: one cell that installs ShortGPT, applies 7 patches, and gives you a public link to the app. You need three API keys (Gemini, Pexels, and optionally ElevenLabs), all free to get, all with usage limits. From one sentence, it gave me a finished landscape video of about 66 seconds.

## Table of Contents
- [What ShortGPT Is](#what-shortgpt-is)
- [Why the Original Colab Link Fails](#why-the-original-colab-link-fails)
- [What You Need](#what-you-need)
- [Step 1 Open the Notebook and Pick a Runtime](#step-1-open-the-notebook-and-pick-a-runtime)
- [Step 2 Run the Setup Cell](#step-2-run-the-setup-cell)
- [Step 3 Add Your API Keys](#step-3-add-your-api-keys)
- [Step 4 Generate a Video From One Prompt](#step-4-generate-a-video-from-one-prompt)
- [The Result](#the-result)
- [What My Fixed Notebook Changes](#what-my-fixed-notebook-changes)
- [Limits and Catches](#limits-and-catches)
- [ShortGPT or MoneyPrinterTurbo](#shortgpt-or-moneyprinterturbo)
- [My Take](#my-take)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

🎬 Watch the full walkthrough on YouTube → [https://youtu.be/be7vO2j7Fmc](https://youtu.be/be7vO2j7Fmc)

📓 Open the fixed notebook → [ShortGPT_Colab.ipynb](https://colab.research.google.com/gist/Robj1925/33b6897667f56371f011585142616eab/ShortGPT_Colab.ipynb)

## What ShortGPT Is

ShortGPT calls itself an "experimental AI framework for youtube shorts / tiktok channel automation." It is on GitHub at [RayVentura/ShortGPT](https://github.com/RayVentura/ShortGPT), it has about 8,000 stars, and it uses the MIT license.

You give it a subject. It does the rest:

- **Script:** a language model writes the narration.
- **Footage:** it searches the Pexels API for stock clips that match the script.
- **Voice:** it reads the script with ElevenLabs, or with Microsoft's free Edge TTS.
- **Edit:** it cuts the footage to the voiceover, adds captions and renders the file with MoviePy.

The app has three content options: automate shorts, automate a video with stock assets, and automate multilingual video dubbing. The README says Edge TTS supports more than 30 languages on top of the main list (English, Spanish, Arabic, French, German, Japanese, Hindi, Korean and more).

The README recommends Google Colab over a local install, because a local install needs Docker. Colab runs in the cloud on Google's hardware, so you do not need a strong computer or any coding skill.

## Why the Original Colab Link Fails

The Colab link in the README does not run anymore. The repo had its last push on February 10, 2025, and the Python packages around it kept changing. When I tried it, the setup crashed in several places: empty asset lookups, an empty voice list, model replies that were not clean JSON, and a Gradio and Pydantic version conflict.

So I fixed it. The fixed notebook is linked above and in the video description. It is fully functional, and I show every step from scratch below.

## What You Need

- A Google account (for Colab).
- A **Gemini API key** (writes the script). If you do not have one yet, follow my guide on [how to get your free Google Gemini API key](/blog/how-to-get-your-free-google-gemini-api-key-2026.html).
- A **Pexels API key** (stock footage): [pexels.com/api](https://www.pexels.com/api/).
- An **ElevenLabs API key** (voiceover), optional: [elevenlabs.io API keys](https://elevenlabs.io/app/developers/api-keys). If you skip it, you use the free Edge TTS voice, which is what I did in the demo.

All of these keys are free to get, but each one has usage limits. Keep that in mind before you plan to make a lot of videos.

## Step 1 Open the Notebook and Pick a Runtime

1. Open the [fixed ShortGPT notebook](https://colab.research.google.com/gist/Robj1925/33b6897667f56371f011585142616eab/ShortGPT_Colab.ipynb).
2. Click **File > Save a copy in Drive**, so you have your own copy.
3. In the video I changed the runtime to the **T4 GPU**, clicked **Save**, then **Connect**. The T4 is part of the free tier compute in Colab.

One note: the notebook itself says a normal CPU runtime is fine and you do not need a GPU. The T4 is what I used on camera. Either way, it costs you nothing.

While the runtime connects, get your three keys ready. The notebook has a link for each one at the top.

## Step 2 Run the Setup Cell

There is one code cell, titled **Run ShortGPT (install, patch, launch)**. It holds all the fixes I had to implement myself.

1. Click the play button on the cell.
2. Colab warns you that the notebook is not authored by Google. Click **Run anyway**.
3. Wait. The cell installs ffmpeg, ImageMagick and the Python requirements, applies the patches, and starts the app.

You may see some warnings or errors scroll past during the install. That is okay. The only thing you need is the public URL at the end, a link that ends in **gradio.live**. Click it to open ShortGPT.

Keep the Colab tab open the whole time. The gradio.live link stops when the Colab session ends.

## Step 3 Add Your API Keys

1. In ShortGPT, go to the third tab, **Config**.
2. Paste your keys into the **GEMINI API KEY**, **PEXELS KEY** and **ELEVENLABS_API_KEY** fields. The fields are password fields, so they show dots.
3. Click **save**.

Your keys stay inside your own Colab session. There is also an OpenAI key field. My patch uses Gemini first and only falls back to OpenAI if you leave Gemini empty.

## Step 4 Generate a Video From One Prompt

1. Go to the **Content Automation** tab.
2. Pick the second option, **Automate a video with stock assets**. A chat style panel opens and asks you questions one at a time.
3. **Landscape or vertical:** I picked landscape. Press **Enter** to send it. Do not click **Restart** by accident.
4. **Voice:** pick ElevenLabs (if you added that key) or **Edge TTS**, the free one. I used Edge TTS.
5. **Language:** I typed English.
6. **Subject:** describe your video in one sentence. I typed some nonsense on purpose: how Mark Zuckerberg is really a lizard.
7. Go back to the Colab tab and watch the console. If there are no errors, everything is configured correctly and it is just a matter of waiting.
8. ShortGPT shows you the script it wrote and asks if you want to continue. Answer **yes** and press Enter.
9. Now it builds the video. This part takes quite a while, so let it run.

When it finishes, the panel says your video is completed and shows a player. There is a **download** button under it.

## The Result

From that one sentence, ShortGPT gave me a landscape video of about 66 seconds, with a Gemini script, Pexels stock footage and the Edge TTS voiceover. It opens by asking if you ever watched Mark Zuckerberg speak and felt something about him is not quite human, then says the internet has joked for years that the Meta CEO is a reptile in a human suit. Silly topic, but the narration is on topic and the structure is there.

Is it a perfect video? No. But it is a good starter video. You can edit it yourself and add your own B-roll, transitions, or whatever you want. And it is free.

## What My Fixed Notebook Changes

Here is what the one setup cell does, so you know what you run:

| Patch | What it fixes |
| --- | --- |
| Pinned commit | Pins ShortGPT to tested commit 3df4e0f, so future repo changes do not break the patches. |
| Asset database | Stops the crashes on empty asset lookups and adds a fallback asset. |
| Voice list | Fixes the empty voice list crash. |
| ElevenLabs voice | Removes the default "Chris" voice that caused a mismatch error. |
| JSON parser | Reads the model's replies safely, even when they are not clean JSON. |
| Gemini client | Replaces the old OpenAI proxy with a direct Gemini 3.8 Flash client that retries up to 8 times on rate limits (HTTP 429 and 503). |
| Gradio | Fixes the Pydantic boolean schema crash and turns on the public share link. |

Two details I care about. The cell also fixes the ImageMagick security policy so MoviePy can draw captions. And the Gemini key goes in a request header, not in the URL, so an error message can never print your key.

## Limits and Catches

- **"Unlimited" means no cost per video, not no limits.** Gemini, Pexels and ElevenLabs all have free tier usage limits. When you hit a Gemini rate limit, the notebook waits and retries, but it gives up after 8 tries.
- **The session is temporary.** Close the Colab tab or let the session end, and the gradio.live link stops. You run the cell again next time.
- **The upstream project is quiet.** ShortGPT had its last push in February 2025, and it calls itself experimental. My patches target one pinned commit.
- **Generation is slow.** Expect to wait for the render step.
- **Quality is a first draft.** The footage is generic stock footage and the Edge TTS voice is basic. Plan to edit.
- **You run third party code.** Colab warns you for a reason. Read the cell if you want to know exactly what it does (the table above is a summary).

## ShortGPT or MoneyPrinterTurbo

If you saw my earlier videos, you know MoneyPrinterTurbo does a similar job: script, footage, voice, subtitles and music, all free, also in Colab. If ShortGPT does not fit what you need, read my [step by step MoneyPrinterTurbo guide](/blog/generate-free-short-form-videos-with-moneyprinterturbo.html) and try both. ShortGPT also has a dubbing mode that translates and voices an existing video in a different language.

## My Take

ShortGPT is a good free starting point. It will not give you a finished video for a real channel, but it gives you a script, footage and a voiceover cut together in one pass, and that is a lot of the boring work done. The original Colab link was the problem, not the tool. With the fixed notebook, it runs end to end.

If you make something with it, tell me the topic in the YouTube comments.

## Frequently Asked Questions (FAQ)

**Is ShortGPT free?**
Yes. ShortGPT is open source under the MIT license, Colab's free tier runs it, and all three API keys are free to get. The keys have usage limits.

**Do I need a GPU?**
No. I used the free T4 GPU in the video, but the notebook says a normal CPU runtime is fine.

**Do I need an ElevenLabs key?**
No. Pick Edge TTS as the voice engine. It is free and it is what I used in the demo.

**Which AI model writes the script?**
In my fixed notebook, Gemini 3.8 Flash through the Gemini API. If you only add an OpenAI key, it uses gpt-4o-mini.

**Why does the Colab link in the ShortGPT repo not work?**
The repo had its last push in February 2025, and newer package versions break its setup. My notebook pins the code and patches the parts that crash.

**Can I make vertical videos for Shorts or TikTok?**
Yes. The stock assets option asks landscape or vertical. There is also a separate shorts option in the Content Automation tab.

🎓 I teach these AI tools in depth in my Skool community, where you can ask me questions directly → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)

Sources: [ShortGPT on GitHub](https://github.com/RayVentura/ShortGPT), [Fixed ShortGPT Colab notebook](https://colab.research.google.com/gist/Robj1925/33b6897667f56371f011585142616eab/ShortGPT_Colab.ipynb), [Notebook gist](https://gist.github.com/Robj1925/33b6897667f56371f011585142616eab), [Pexels API](https://www.pexels.com/api/), [ElevenLabs API keys](https://elevenlabs.io/app/developers/api-keys), [Google Colab](https://colab.research.google.com/)
