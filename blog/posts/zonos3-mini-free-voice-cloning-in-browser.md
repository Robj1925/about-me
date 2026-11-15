---
title: "ZONOS3 Mini: Free Voice Cloning in Your Browser, Setup Guide and Links"
date: "2026-11-14"
excerpt: "ZONOS3 Mini from Zyphra clones your own voice in one browser tab through WebGPU, with no install, no server and no account. Here are the official links, the setup steps and the limits."
thumbnail: "assets/images/blog-thumbnails/zonos3-mini-free-voice-cloning-in-browser.jpg"
tags:
  - AI Voice
  - Text to Speech
  - Open Source
  - AI Tools
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Try it in your browser (Lite, quick voice cloning): [zyphra.com/zonos3-mini/localplayground/lite](https://zyphra.com/zonos3-mini/localplayground/lite)
- Full studio in your browser: [Zonos Voice Studio](https://zyphra.com/zonos3-mini/localplayground#cast)
- Model card and weights: [huggingface.co/Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)
- Runtimes on GitHub: [github.com/Zyphra/ZONOS3-Mini](https://github.com/Zyphra/ZONOS3-Mini)
- Official blog post (November 9, 2026): [zyphra.com/our-work/zonos3-mini](https://www.zyphra.com/our-work/zonos3-mini)
- Technical report: [arXiv 2611.16525](https://arxiv.org/abs/2611.16525)

## Setup guide

ZONOS3 Mini is a text to speech model with voice cloning: 100 million active parameters (800 million in total), 43 languages, weights under Apache 2.0 and runtimes under MIT. The model card says it "runs entirely on your own GPU through WebGPU: no install and no server." These steps come from the official model card and the studio README.

1. Use a browser with WebGPU. The model card says this is the only requirement for the browser version. I use Chrome.
2. Open the [Lite page](https://zyphra.com/zonos3-mini/localplayground/lite). You do not need an account.
3. Let the model download. The page asks once before it downloads anything, and it names the size: about 1.9 GB. A download bar shows the progress. The browser keeps the model in its cache, so the next visit is fast.
4. Pick where the voice comes from:
   - **Library**: one of the default voices.
   - **Your clip**: record or upload your own voice. The page asks for 5 to 30 seconds of clean speech.
   - **Voice file**: a saved voice embedding (`.npy` or `.npz`).
5. Type your line and check the **Language** select.
6. Click **Generate**. With a new clip, the page clones the voice first and then speaks. The audio plays as it streams. The last five takes stay under the waveform, each with a Download button.

For more control (emotion, pace, accents, speech editing), open the full [Zonos Voice Studio](https://zyphra.com/zonos3-mini/localplayground#cast).

### Run it on your own machine (optional)

The GitHub README also has local servers: CUDA on Linux with an NVIDIA GPU, MLX on Apple Silicon, and a C++ ggml build for CPU, CUDA, Metal or Vulkan. It needs [uv](https://docs.astral.sh/uv/getting-started/installation/) and Python 3.12. The README commands for an Apple Silicon Mac, after you clone the repo with its submodules:

```bash
uv sync --locked --package zonos3-mlx
hf download Zyphra/ZONOS3-Mini --include 'gguf/*' --local-dir servers/ggml
servers/mlx/scripts/serve.sh
```

Then open `http://127.0.0.1:1919/lite`. Note: the clone command in the README names `Zyphra/ZONOS3`, but the public repo is `Zyphra/ZONOS3-Mini`. I did not test the local install. The browser page is the easy path.

## Watch out

- **Only clone your own voice, or one you have permission to use.**
- **You need WebGPU.** If your browser has no WebGPU, the browser version does not run. Try another browser or machine that has WebGPU, or the hosted [Zyphra Cloud](https://cloud.zyphra.com/models/zyphra/ZONOS3-Mini) (paid, not needed for this guide).
- **The first visit is a big download**, about 1.9 GB.
- **The benchmark is Zyphra's own.** Zyphra says ZONOS3 Mini "ranks first among open models" on its ZTTS2 capability index, and the speed chart was measured on one H100. Treat these as the maker's numbers.
- **The speed numbers are Zyphra's too.** Zyphra reports under 150 ms to first audio in the browser on an M3 MacBook Air, and under 570 ms on a Pixel 9. Your time depends on your GPU.
- It is popular but new: 19,743 downloads on Hugging Face last month (November 14, 2026).

Sources: [ZONOS3 Mini model card](https://huggingface.co/Zyphra/ZONOS3-Mini), [ZONOS3 Mini on GitHub](https://github.com/Zyphra/ZONOS3-Mini), [studio README](https://github.com/Zyphra/ZONOS3-Mini/blob/main/studio/README.md), [Zyphra blog post](https://www.zyphra.com/our-work/zonos3-mini)
