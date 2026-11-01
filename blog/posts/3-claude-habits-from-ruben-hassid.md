---
title: "3 Claude Habits From Ruben Hassid. The Last One Is My Favorite"
date: "2026-10-30"
excerpt: "Ruben Hassid shared three Claude habits in his How to AI newsletter: run a clean test, make Claude restate your goal, and ask for an HTML page. Here is each one, with the exact prompt lines and the limits."
thumbnail: "assets/images/blog-thumbnails/3-claude-habits-from-ruben-hassid.jpg"
youtubeId: "ZFzFu4470VU"
tags:
  - Claude
  - Prompt Engineering
  - Claude Artifacts
  - AI Productivity
  - AI Tools
---

Ruben Hassid just shared three Claude habits in his post ["One Claude."](https://ruben.substack.com/p/one) on his How to AI newsletter, and the last one is my favorite.

His starting point: since September 16, Claude Chat and Cowork are one box. So Ruben says, bring less setup and one clear goal. Credit where it is due: this is his advice, not an Anthropic rule.

## Habit 1: run a clean test

Ruben quotes Anthropic's prompting guide: skills written for older models "can degrade output quality." So he empties his custom instructions and turns off old skills.

You do not have to delete everything to try this. Here is the safe version:

1. Copy your "Instructions for Claude" text into a backup file, and note which skills are on.
2. Run one real prompt in your normal setup.
3. Open a new chat, turn Memory off for that chat, and toggle off old personal skills.
4. Run the same prompt and compare the two answers.

Say only what you see. If the clean answer is not better, keep your setup. Ruben himself notes that Projects can keep material and Memory can stay on.

## Habit 2: make Claude restate your goal

End your prompt with this line, word for word:

```text
Before you start, restate in your own words what you think my goals are and the problem I'm trying to solve. If you need more context, ask me questions.
```

In Ruben's example, Claude restated the goal and then asked four questions before it started. I like this one because it catches a wrong assumption before Claude spends ten minutes building the wrong thing.

To be clear, this is a practical habit, not a measured result. One example, not a test.

## Habit 3: ask for HTML

This is my favorite. Add one line to your request:

```text
Make it an HTML page.
```

Claude builds an Artifact instead of a static file. It opens on your phone, and the best part: Claude keeps editing it when you ask. "Make the title bigger" and the page updates.

Two limits. The Artifact starts private ("Only you"), so check who you share it with before you send the link. And it will not replace every PDF. If someone needs a file to sign or print, a PDF is still the right answer.

## How I would put them together

Write one clear goal. Add the context. Add the restate line. Answer Claude's questions. Then ask for an HTML page. Think of it like briefing a contractor: one clear goal beats a 40 page binder, and you want them to repeat the job back before they start.

If you are new to the Claude web app, my [Claude AI full course for beginners](/blog/claude-ai-full-course-for-beginners.html) covers Artifacts, Projects, Skills and Memory. And for another thing Claude builds from one prompt, see [how to use Claude Dashboards](/blog/how-to-use-claude-dashboards-beginner-guide.html).

Sources: [Ruben Hassid, "One Claude." (How to AI)](https://ruben.substack.com/p/one), [How to AI newsletter](https://ruben.substack.com/)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
