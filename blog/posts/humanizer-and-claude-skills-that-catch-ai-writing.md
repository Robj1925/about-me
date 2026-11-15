---
title: "Humanizer and Claude Skills That Catch AI Writing: Setup Guide and Links"
date: "2026-11-14"
excerpt: "How to install Humanizer in Claude Code and get Delete AI Words and Voice DNA from the Claude Skill Library, with the official links and the honest limits."
thumbnail: "assets/images/blog-thumbnails/humanizer-and-claude-skills-that-catch-ai-writing.jpg"
tags:
  - Claude
  - Claude Code
  - Claude Skills
  - AI Writing
  - AI Tools
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Humanizer on GitHub (MIT license): [github.com/blader/humanizer](https://github.com/blader/humanizer)
- Wikipedia's guide that Humanizer is built on: [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- Claude Skill Library by Ruben Hassid (How to AI), where Delete AI Words, Red Pen and Voice DNA live: [skillsclau.de](https://skillsclau.de)
- Ruben Hassid's note with the 12 giveaways and the 12 skills: [Substack note](https://substack.com/@ruben/note/c-381786702)

The 12 giveaways in Ruben's note include "delve", "crucial", "tapestry", "robust", "seamless", "Here's the thing", "Hope this helps" and the shape "It's not X, it's Y".

## Setup guide

### Humanizer in Claude Code

Humanizer checks your text for 26 patterns from Wikipedia's Signs of AI writing guide. It has 69,128 stars on GitHub (checked November 14, 2026).

1. Open Claude Code. The plugin needs Claude Code 2.1.142 or newer.
2. Add the marketplace and install the plugin:

```text
/plugin marketplace add blader/humanizer
/plugin install humanizer@humanizer
```

3. On an older Claude Code version, use this command instead:

```bash
npx skills add blader/humanizer --global --agent claude-code
```

4. Run it on your text:

```text
/humanizer

[paste your text here]
```

You can also give it a file path, for example "Humanize the prose in docs/launch-post.md". To match your own voice, paste two or three paragraphs of your own writing before the text.

### Humanizer in Claude.ai or Claude Desktop

1. On the GitHub page, click Code, then Download ZIP.
2. Upload the ZIP as a skill in Settings.

### Delete AI Words, Red Pen and Voice DNA from skillsclau.de

Delete AI Words removes AI sounding words. Red Pen flags weak lines. Voice DNA builds a voice profile from your own writing samples.

1. Go to [skillsclau.de](https://skillsclau.de), search for the skill and sign in with your email to download.
2. Click Download to get the zip.
3. In Claude, go to Settings, then Capabilities, and turn on Skills.
4. Go to Customize, then Skills, then Add, then Upload skill, and pick the zip.
5. Use it by typing its command in any chat, for example `/voice-dna`.

## Watch out

- "Free" on skillsclau.de means free after an email sign in with a one time code. The site collects your email.
- skillsclau.de is not 12 skills. It is a library of 33,971 skills, and most of them come from public GitHub repos.
- Not all 12 skills in Ruben's note remove AI tells. Grill Me asks you questions, Copywriting writes copy and Fact Checker checks claims.
- Three of the 12 are made for LinkedIn: /linkedin-post, /my-viral-post and /viral-recipe.
- The site lists Humanizer at 52K stars. That number is old. GitHub shows over 69,000.
- Humanizer writes for human readers. Its README says it does not try to get past AI detectors, and detectors still flag most of its output.
- Delete AI Words and some others on the site state no license. Red Pen's source repo has no LICENSE file. Humanizer is MIT, and Ruben's own Voice DNA bundle (rubenhassid1/howtoai-skills) is MIT.

Sources: [blader/humanizer README](https://github.com/blader/humanizer), [Claude Skill Library](https://skillsclau.de), [Ruben Hassid's note](https://substack.com/@ruben/note/c-381786702), [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing). All checked November 14, 2026.
