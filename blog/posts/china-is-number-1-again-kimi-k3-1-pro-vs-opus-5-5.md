---
title: "China Is #1 Again? Kimi K3.1 Pro vs Opus 5.5 on 5 Games"
date: "2026-10-30"
excerpt: "I gave Kimi K3.1 Pro and Claude Opus 5.5 the same 5 game prompts, one shot each. Kimi used 30% of its session on game 1 and 60% after game 2. Claude Code was at 3% and then 6%."
thumbnail: "assets/images/blog-thumbnails/china-is-number-1-again-kimi-k3-1-pro-vs-opus-5-5.jpg"
youtubeId: "sFj1MjoK_hM"
tags:
  - Kimi
  - Claude Opus
  - Claude Code
  - AI Coding
  - Model Comparison
  - Game Development
---

Kimi K3.1 Pro costs a fraction of what Claude Opus 5.5 costs. So I gave both models the same 5 game prompts, from a simple arena shooter up to an open world getaway game, to see if the cheap model can keep up.

## The rules

Each model ran in its own maker's coding app. Opus 5.5 ran in Claude Code. Kimi K3.1 Pro ran in Kimi Code. That is not the same harness, and I want to be clear about it, because the app around a model changes how it plans and checks its work.

Every round used the same prompt in both apps, with only the save path changed. The base prompt asked for:

- a complete browser game in one index.html file
- three.js from a CDN only if it needed 3D
- no external images, sounds or models, so even the sound effects are made in code with the Web Audio API
- a start screen and on-screen controls help
- screen shake, particles and feedback, so it feels good to play
- a final check for errors before it stops

I matched the effort settings as closely as the two apps allow and pressed Enter in both at the same time. One prompt each. One thing to note: in round 1, Kimi stopped and asked me a few questions about what the game should focus on. I just picked what it recommended.

## Round 1: neon arena shooter

The prompt: a 2D neon twin-stick arena shooter with enemy waves, 3 power-ups, a combo multiplier, a boss on wave 5 and a high score.

Opus finished first. Its game ran smoothly, the sound effects and graphics were good, and I kept playing it after I had already seen enough.

Kimi's version had mouse aiming and more atmosphere, with an old school feel. It was also much harder and less smooth on my machine (I was recording at the same time, so that is part of it). The graphics were not as clear. Round 1 went to Opus.

Then the usage. This one game used 3% of my current Claude Code session. On Kimi Code it used 30%. For context, I am on Kimi's Plus plan at $19 a month and Claude's $100 Max plan, so I expected a gap. I did not expect it to be that big.

## Round 2: 3D kart racer

The prompt: a 3D kart racer with one track made in code, drifting with boost, boost pads, 3 AI racers, 3 laps, a lap timer and race positions.

Opus finished first again. The game was well made and played fine, with a mini map that showed how far behind I was.

Kimi took longer, but its racer looked more modern. The colors and background were better and it felt more 3D. The one problem was the steering, which felt inverted. Even so, I called this one for Kimi. It was the better game, except for the controls.

After round 2, Claude Code was at 6% of the session. Kimi Code was at 60%.

## Round 3: kaiju city rampage

In this one you play a giant monster that destroys a city. I was close to Kimi's limit going in.

Kimi's game was fun and I liked it. Opus took a more cartoonish, old school arcade style, with tanks shooting at you and a stomp attack. They are different styles, and both are good. I preferred Opus because it was smoother. Kimi's design looked a little sloppy, like it came straight from an AI.

My Claude Code usage barely moved. Kimi's grew a lot, and its 5 hour window had already reset during this round.

## Round 4: open world getaway

This was the one I was most looking forward to. Kimi's version had a GTA style vibe: you can steal a car and drift. It felt smooth, if a little blocky. The sound was off, and parts of the map were so dark that almost nothing was visible.

Opus's version was smoother, more realistic, and the controls were much more interesting. This round went to Opus, clearly.

## Round 5: free choice

The last prompt gave both models full creative freedom: make the most impressive game you can, and surprise me.

Kimi made a game called Prison Break: Escape from the Swarm. To be honest, it was mostly a better version of the round 1 shooter. It was one of the cleanest games of the test, but it was not a new idea.

Opus made an alien shooter, like an advanced version of the classic arcade game. The design was cool, the music was great, and it ran smoothly. But there was too much going on at once, and at times I could not tell what was happening. I did not pick a winner for this round.

## The verdict

Across rounds 1 to 4, Opus took three and Kimi took one. Overall, Opus was the better model here for design, performance and reliability.

Is Opus worth the extra money for games? For me, yes, and the open world round is the reason. The effects and controls were smooth in a way Kimi's version was not.

But if you need a fast, cheap prototype, I would pick Kimi K3.1 Pro. It is fast, it does the job well, and it is close on visuals. If you want quality on the hard 3D game, pick Opus. Just keep the usage numbers in mind: on my plans, the cheap model burned through its session about ten times faster.

This is one run per game, judged by me while I played. It is not a benchmark. If you want a more controlled test on a real bug, see [Kimi K3 vs Claude Fable 5 on the same bug](/blog/kimi-k3-vs-claude-fable-5-same-bug-wild-results.html). And if you want to know what it takes to run Kimi yourself, read [Kimi K3 is open source, you still can't run it](/blog/kimi-k3-is-open-source-you-still-cant-run-it.html).

Sources: [Claude Code](https://claude.com/product/claude-code), [Kimi](https://www.kimi.com)

Watch the video above to see all 10 games played. All the prompts and skills from this test are in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about), along with the Claude Code workflows I use to automate my content and my business.
