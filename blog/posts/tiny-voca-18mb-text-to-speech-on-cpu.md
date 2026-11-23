---
title: "tiny-voca: an 18 MB Text to Speech Model That Runs on Your CPU, Links and Setup Guide"
date: "2026-11-23"
excerpt: "tiny-voca is a free, open source text to speech model of 18 MB that runs on a CPU or in your browser and was trained only on AI made voices. Here are the official links, the setup steps and the limits."
thumbnail: "assets/images/blog-thumbnails/tiny-voca-18mb-text-to-speech-on-cpu.jpg"
tags:
  - AI Voice
  - Text to Speech
  - Open Source
  - Local AI
  - Tutorial
guide: true
---

This page has the official links and the setup guide for tiny-voca, the 18 MB text to speech model from my Short.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Try it in your browser: [tiny-voca.n4ze3m.com](https://tiny-voca.n4ze3m.com)
- Model card and weights: [huggingface.co/n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)
- Code on GitHub: [github.com/n4ze3m/tiny-voca](https://github.com/n4ze3m/tiny-voca)
- Training dataset: [huggingface.co/datasets/n4ze3m/tiny-voca](https://huggingface.co/datasets/n4ze3m/tiny-voca)
- Phonemizer (text to phonemes): [github.com/n4ze3m/dizione](https://github.com/n4ze3m/dizione)
- Hugging Face Space: [n4ze3m/tiny-voca-studio](https://huggingface.co/spaces/n4ze3m/tiny-voca-studio)

## Setup guide

tiny-voca is a small English text to speech model by Muhammed Nazeem. It has 4,537,291 parameters, the waveform generator included, and the PyTorch weights are 18.2 MB. The model card says it runs "about 70x faster than real time on four CPU threads". Code and weights are under Apache 2.0. These steps come from the official model card and README.

### The easy way: in your browser

1. Open [tiny-voca.n4ze3m.com](https://tiny-voca.n4ze3m.com). You do not need an account.
2. Wait for the first load. The page says the first visit downloads about 40 MB: the model, the pronunciation dictionary and a Python runtime for the phonemizer.
3. Type your text, or click one of the examples (Greeting, Numbers, Question, Story, Homographs).
4. Pick a voice: **F2** (female) or **M2** (male). Set the speed if you want.
5. Click **Speak**. The page plays the audio and shows how long it took. The page says nothing you type leaves your device.

### Run it on your own machine (optional)

You need Python 3.10 or later. The model card commands:

```bash
pip install git+https://github.com/n4ze3m/dizione git+https://github.com/n4ze3m/tiny-voca
hf download n4ze3m/tiny-voca --local-dir tiny-voca
export DIZIONE_DATA=tiny-voca/phonemizer

python -m tiny_voca.infer \
  --checkpoint tiny-voca/tiny-voca.pt \
  --voice F2 \
  --text "Hello. This is tiny voca." \
  --output hello.wav
```

Useful options: `--text-file` reads the text from a file, `--voice` is `F2` or `M2`, `--speed` sets the speaking rate. Long text is fine: it is read one sentence at a time and the audio is joined. There is also an ONNX file (`onnx/model.onnx`, 21.4 MB) for ONNX Runtime and ONNX Runtime Web. The model card shows how to call it. I only tested the browser demo, not the local install.

## How it was made

- **No real voices.** Both voices were designed from text descriptions with Qwen3 TTS VoiceDesign, and the 17.6 hours of training audio (16,018 clips) were generated with Qwen3 TTS 1.7B Base. The model card says: "No recording of a real speaker is involved."
- **Trained from scratch.** No pretrained weights are part of the model. Training took 7.7 hours on one RTX 4090.
- **Cost.** The model card says the whole project cost $9.56 of GPU time on one rented RTX 4090, including the dataset and the failed tries.

## Watch out

- **English only, two fixed voices, no voice cloning.** The same text is always read the same way, and there is no streaming in the model itself.
- **It can sound a little synthetic.** The training audio is itself AI made, so the model cannot sound more natural than the model that made that audio.
- **Names and odd spellings.** Foreign names and unusual spellings are often mispronounced.
- **The leaderboard rank comes from the model card.** It says the F2 voice ranks 5th of 45 on the Open TTS Leaderboard (20 November 2026 snapshot, English, without voice cloning, by average word error rate), and M2 ranks 7th. In the 16 November snapshot the ranks were different (M2 8th, F2 13th). Its own word error rate tests use small sets, and the author calls them "a sanity check, not a benchmark".
- **The speed is the author's number.** "About 70x faster than real time" was measured on four CPU threads. In one test of the browser demo on a Mac, 5.3 seconds of audio took 0.21 seconds to make (25.1x real time). Your speed depends on your machine.
- It is new: the GitHub repo was created on November 14, 2026, and had 881 stars on November 23, 2026.

Sources: [tiny-voca model card](https://huggingface.co/n4ze3m/tiny-voca), [tiny-voca on GitHub](https://github.com/n4ze3m/tiny-voca), [tiny-voca browser demo](https://tiny-voca.n4ze3m.com), [Open TTS Leaderboard](https://huggingface.co/spaces/hf-audio/open_tts_leaderboard?version=v1.7.0)
