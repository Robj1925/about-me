---
title: "10 Ways to Make Claude Code Usage Last Longer"
date: "2026-11-11"
excerpt: "Ten practical tips to stop wasting your Claude Code usage: medium effort, a separate Sonnet 5.5 session, skills, file paths, limit resets, free AI agents and the prompt handoff that lets another agent do what Claude already knows how to do."
thumbnail: "assets/images/blog-thumbnails/10-ways-to-make-claude-code-usage-last-longer.jpg"
youtubeId: "gaVtt9fnRfg"
tags:
  - Claude Code
  - Claude
  - Anthropic
  - AI Tools
  - Tutorial
  - AI Agents
---

Most people waste a big part of their Claude Code usage. These are ten practical tips to save usage and stop running out of it. I use Claude Code every day for coding, which is my day job. The last tip is the most underrated one.

## Tip 1: Effort levels

This is the simplest tip. Claude Code has five effort levels: low, medium, high, xhigh and max.

In my experience, you do not need to go past medium. Medium is enough for most tasks, and it is also the default effort on Opus 5.5. So stop using high, xhigh and max for everything. Keep them for the few tasks that really need them.

## Tip 2: A separate session for small tasks

Keep one session only for throwaway tasks. Mine is called Misc, for miscellaneous. All my random questions and random tasks go there.

Keep that session on Sonnet 5.5 with high effort. Sonnet 5.5 is more than capable of small jobs. I use my Misc session to move files around, organize a directory and clean up my computer.

Sonnet 5.5 on high uses a lot less than Opus 5.5 on medium. On Artificial Analysis, the API cost per task is $1.64 for Sonnet 5.5 on high and $2.45 for Opus 5.5 on medium. Do not use this session for the hard work that you actually care about.

## Tip 3: Make it a skill

Some tasks need a lot of thinking, and more thinking means more usage. If you give Claude the same task again and again, have it turn that task into a script or a skill.

Then Claude does not have to work out from scratch what you want. It has a reference that already says what to do and how to do it, so it spends fewer thinking tokens.

This tip is becoming less necessary. Bigger models are better at knowing what to remember and what not to remember. It still helps for tasks you repeat a lot. If you have never made one, see [how to build a Claude skill in 60 seconds](/blog/how-to-build-a-claude-skill-in-60-seconds.html).

## Tip 4: Give the path

Tell Claude where the files are. I use Claude Code to help edit my videos. I do not say "I have a video on my computer, go find it and edit it." I put the path to the folder in the prompt.

Then Claude does not spend resources searching for the video. Bigger models search more efficiently now, but it is still a good habit.

## Tip 5: Monthly API credits

Use the free credits your plan gives you. I am on the Max plan, and Max includes $100 of API credits every month. Ultra includes $200, and Team includes $20 or $100 per seat. Free, Pro and Enterprise do not include them.

There is one catch to know. Anthropic's page says these credits cover the Claude API, Managed Agents, the Agent SDK and the playground. They do not cover Claude Code or extra usage, and they do not change your usage limits. You must claim them, and they expire each cycle. So the way they save your plan is to move API work onto the credits.

## Tip 6: Free resets

Anthropic sometimes gives you a free limit reset. Go to Settings, then Usage, and look for the Limit resets row. A reset puts your usage back, at no cost to you.

There are three types: a five hour reset, a weekly reset and a Fable reset. A Fable reset gives back only your Fable weekly usage and refills the five hour window. When Fable 5.2 came out, I had a free Fable reset in that row.

## Tip 7: Use other free tiers

Tips 7 to 10 changed the way I use AI the most.

Use other AI tools that have free tiers. I use Claude Code for the hardest work, because in my opinion it is one of the smartest models you can use. But it is not the only agent I use. I also use Antigravity, Muse, Kimi and DeepSeek.

- **Muse** is free with a usage limit, and in my use the free tier gives a lot of usage.
- **Antigravity** has a $0 a month plan with basic weekly rate limits.
- **Kimi** has a free plan. Kimi Code needs a paid plan.
- **DeepSeek** chat is free. Its API is paid.

When a task does not need a lot of effort and thinking, I usually give it to Antigravity or Muse. In my setup, all these agents share one central memory, so each one knows what is going on.

## Tip 8: The handoff

This is my favorite tip. When I started to use other agents, I tried to make Antigravity do the same tasks that Claude could do. It could not. It got confused at some point. It is not as capable as Claude.

For example, Claude could post a video for me easily, and Antigravity could not. So I told Claude: "I want you to give me a prompt that I'll give to a completely new session with no context. Explain step by step how to post a video, with all the context necessary to do that."

Claude gave me the prompt with every step in it. I gave that prompt to Antigravity, and then Antigravity could post the video.

You can do this with any task that Claude can do. Have Claude explain how to do it, then give that to another agent. You do not spend your Claude tokens on the task itself.

## Tip 9: Muse for long tasks

Use Muse more often. Muse is very good at tasks that need autonomy, the ones that must run on their own with no supervision. It also gives you a lot of free usage. I wrote about how I use it every day in [Meta Muse has changed my life](/blog/meta-muse-has-changed-my-life.html).

## Tip 10: Which plan to get

My pick is the Max plan, which is $100 a month. The other paid option is Ultra at $200 a month (it used to be called Max 20x).

The study I talk about in the video is from SemiAnalysis. It priced each plan at API rates for agentic work. On Opus 5.5, the $100 Max plan is worth $5,725 a month and the $200 plan is worth $11,726 a month. That is about 57x and 59x what you pay, so the value per dollar is almost the same. Two $100 plans come out slightly ahead only on Fable 5.1, by about 2.5%. Officially, Max gives 5x Pro weekly usage and Ultra gives 10x, so two Max plans tie Ultra on weekly usage.

So do not pay for the $200 plan only because you think it gives more value per dollar. Get the capacity you actually need. The SemiAnalysis numbers came out before Fable 5.2. I covered the full study in [your $200 Claude plan is worth $11,726 a month](/blog/your-200-claude-plan-is-worth-11726-a-month.html).

Sources: [SemiAnalysis study](https://newsletter.semianalysis.com/p/anthropic-subscriptions-offer-5x), [Claude effort levels](https://platform.claude.com/docs/en/build-with-claude/effort), [Claude Code skills](https://code.claude.com/docs/en/skills), [API credits for subscribers](https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers), [What is a limit reset](https://support.claude.com/en/articles/17007452-what-is-a-limit-reset), [Claude plans](https://claude.com/pricing), [Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5), [Google Antigravity](https://antigravity.google/), [Muse](https://www.muse.ai/), [Kimi](https://www.kimi.com/membership/pricing), [DeepSeek](https://www.deepseek.com/en)

Watch the video above for every tip on screen. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
