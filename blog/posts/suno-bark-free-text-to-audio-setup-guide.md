---
title: "Bark by Suno: Free Text to Audio Setup Guide and Links"
date: "2026-11-14"
excerpt: "Bark is Suno's free, MIT licensed text to audio model. It speaks 13 languages, laughs, sighs and sings when you tag the text. Here are the official links, the setup steps for Colab and your own machine, and the limits."
thumbnail: "assets/images/blog-thumbnails/suno-bark-free-text-to-audio-setup-guide.jpg"
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

- GitHub repo: [github.com/suno-ai/bark](https://github.com/suno-ai/bark) (MIT, 39,363 stars on November 14, 2026)
- Official Colab notebook: [bark_demo.ipynb](https://colab.research.google.com/drive/1eJfA2XUa-mXwdMy7DoYKVYHI1iTd9Vkt)
- Hugging Face Transformers Colab (bark small): [notebook](https://colab.research.google.com/drive/1dWWkZzvu7L9Bunq9zvD-W02RFUXoW-Pd)
- Official demo on Hugging Face: [huggingface.co/spaces/suno/bark](https://huggingface.co/spaces/suno/bark)
- Voice preset library: [Suno's preset list](https://suno-ai.notion.site/8b8e8749ed514b0cbf3f699013548683?v=bc67cff786b04b50b3ceb756fd05f68c)
- Long form example notebook: [long_form_generation.ipynb](https://github.com/suno-ai/bark/blob/main/notebooks/long_form_generation.ipynb)

## Setup guide

Bark turns text into speech, and also into laughs, sighs, music and simple sound effects. Suno released it on April 20, 2023, and it has been under the MIT license since May 1, 2023, so commercial use is allowed. These steps come from the official README.

### The fast way: Suno's Colab notebook

1. Open the [official Colab notebook](https://colab.research.google.com/drive/1eJfA2XUa-mXwdMy7DoYKVYHI1iTd9Vkt). You need a Google account to run it. The notebook already asks for a GPU runtime.
2. Click **Runtime**, then **Run all**. The first run downloads the models, about 13 GB.
3. Change the text prompt to your own line and run that cell again.

A free Colab GPU is not always available. If you get no GPU, try again later.

### On your own machine

1. Install Bark from GitHub. Do not use `pip install bark`: the README says that installs a different package that Suno does not manage.

```bash
pip install git+https://github.com/suno-ai/bark.git
```

2. Make a clip from the command line:

```bash
python -m bark --text "Hello, my name is Suno." --output_filename "example.wav"
```

3. Or use it in Python:

```python
from bark import SAMPLE_RATE, generate_audio, preload_models
from scipy.io.wavfile import write as write_wav

preload_models()
audio_array = generate_audio("Hello, my name is Suno. [laughs] I like pizza.")
write_wav("bark_generation.wav", SAMPLE_RATE, audio_array)
```

4. Pick a voice preset with `history_prompt`, for example `generate_audio(text, history_prompt="v2/en_speaker_1")`. There are more than 100 presets.

Hardware: the full model needs about 12 GB of VRAM. For about 8 GB, set `SUNO_USE_SMALL_MODELS=True`. For cards down to about 2 GB, the README adds this before you generate:

```python
import os
os.environ["SUNO_OFFLOAD_CPU"] = "True"
os.environ["SUNO_USE_SMALL_MODELS"] = "True"
```

### Tags you can put in the text

From the README:

- `[laughter]` and `[laughs]`
- `[sighs]`, `[gasps]`, `[clears throat]`
- `[music]`
- `♪` around a line to sing it
- `...` for a hesitation
- CAPITALS to stress a word
- `[MAN]` and `[WOMAN]` to push it toward a male or female voice

Bark picks the language from your text. It supports 13 languages: English, German, Spanish, French, Hindi, Italian, Japanese, Korean, Polish, Portuguese, Russian, Turkish and Chinese (simplified). The README says English quality is the best.

## Watch out

- **No voice cloning.** The README says Bark "does not currently support custom voice cloning". You pick a preset.
- **Short clips.** `generate_audio` works well with about 13 seconds of speech. Longer audio needs the long form notebook, which chains clips.
- **Old code.** The last change to the model code was in July 2023. The repo is not archived, but it is not actively updated.
- **Not always what you typed.** The README warns that Bark "can deviate in unexpected ways from provided prompts". Make a few takes and keep the best one.
- **Not real time on most machines.** The README says it is close to real time only on enterprise GPUs. Default Colab and CPU are much slower.
- **The Hugging Face demo is not for commercial use.** The model is MIT, but the Space says commercial use of the demo is not allowed.

Sources: [Bark README on GitHub](https://github.com/suno-ai/bark), [official Colab notebook](https://colab.research.google.com/drive/1eJfA2XUa-mXwdMy7DoYKVYHI1iTd9Vkt), [Bark Space on Hugging Face](https://huggingface.co/spaces/suno/bark)
