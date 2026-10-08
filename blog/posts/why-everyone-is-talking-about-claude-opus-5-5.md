---
title: "Why Everyone Is Talking About Claude Opus 5.5: Fable Level for 60% Less"
date: "2026-09-23"
excerpt: "Claude Opus 5.5 is smarter than Fable 5.1 on most benchmarks and costs $4 in and $20 out per million tokens. The full benchmark table including the two losses, the independent check, what people built in the first 24 hours, and my verdict."
thumbnail: "assets/images/blog-thumbnails/why-everyone-is-talking-about-claude-opus-5-5.jpg"
youtubeId: "qoiy5Jf6nuU"
tags:
  - Claude Opus 5.5
  - Claude
  - Anthropic
  - AI Models
  - Benchmarks
  - News
meta_title: "Claude Opus 5.5: Benchmarks, Price, and What People Built"
meta_description: "Claude Opus 5.5 costs $4/$20 per million tokens vs $10/$50 for Fable 5.1. The real benchmarks, the two losses, and what people built in 24 hours."
---

**TL;DR:** Anthropic released Claude Opus 5.5 on September 22, 2026. It beats Fable 5.1 on most of Anthropic's own benchmarks, and it costs **$4 in and $20 out** per million tokens. Fable 5.1 and GPT-6 Astra both cost $10 in and $50 out. Anthropic also says it is 40% cheaper to run than Opus 5. It wins 7 of the 9 rows on the official table, it loses 2 of them to GPT-6 Astra, and Artificial Analysis gives it a 58 on its Intelligence Index, five points clear of Fable 5.1 and Astra. Below are the full numbers, the footnotes that matter, the best things people built with it in the first 24 hours, and what I would do if you are on Claude Max.

## Table of Contents
- [What Anthropic Shipped](#what-anthropic-shipped)
- [The Price Comparison](#the-price-comparison)
- [The Official Benchmark Table, Row by Row](#the-official-benchmark-table-row-by-row)
- [The Independent Check: Artificial Analysis](#the-independent-check-artificial-analysis)
- [The Footnote Most People Missed](#the-footnote-most-people-missed)
- [What People Built in the First 24 Hours](#what-people-built-in-the-first-24-hours)
- [CodeRabbit's Three Model Test](#coderabbits-three-model-test)
- [The Early Access Stories](#the-early-access-stories)
- [The Community Tests](#the-community-tests)
- [My Verdict](#my-verdict)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)
- [Conclusion and Next Steps](#conclusion-and-next-steps)

🎬 Watch the full breakdown on YouTube → [https://youtu.be/qoiy5Jf6nuU](https://youtu.be/qoiy5Jf6nuU)

🎓 The Claude Code setups I use every day are in my community → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)

## What Anthropic Shipped

Claude Opus 5.5 is the first model in the Claude 5.5 family. Anthropic's claim has two parts:

- It performs at the level of **Fable 5.1** on most work.
- It costs **40% less to run** than the Opus 5 you were using the day before.

It went live on day one in claude.ai, Claude Code, the API, and the major cloud platforms. If you are on Claude Max, it is already your default Opus. Anthropic says Sonnet 5.5 and Haiku 5.5 come "in the coming weeks."

## The Price Comparison

This is the one number the whole launch hangs on. API list prices, input and output per million tokens:

| Model | Input | Output |
| --- | --- | --- |
| Claude Fable 5.1 | $10 | $50 |
| GPT-6 Astra | $10 | $50 |
| **Claude Opus 5.5** | **$4** | **$20** |

Same benchmark tier, 60% cheaper on list price. Let that sit for a second.

One thing to keep in mind: "40% cheaper than Opus 5" is true at one setting and not at another. The list price cut from Opus 5 is 20%. The rest comes from the model using fewer tokens per task at its default medium effort. At max effort, Artificial Analysis measured about 119,000 output tokens per task, and the savings mostly go away. The effort level you choose now matters as much as the model name.

## The Official Benchmark Table, Row by Row

Here is Anthropic's own table. Winners are in bold.

| Benchmark | Opus 5.5 | Fable 5.1 | Opus 5 | GPT-6 Astra | GPT-5.6 Sol |
| --- | --- | --- | --- | --- | --- |
| Agentic coding (Terminal-Bench 4.0) | **66.4%** | 55.8% | 52.3% | 57.9% | 37.3% |
| Agentic coding (FrontierCode v1.1 Main) | **54.4%** | 50.3% | 48.0% | 53.3% | 47.5% |
| Agentic coding (CursorBench 4.0) | **57.8%** | 51.8% | 46.6% | n/a | 41.7% |
| Knowledge work (GDPval-AA v2.1, Elo) | **1846** | 1735 | 1708 | 1542 | 1588 |
| Business workflows (AutomationBench) | 40.0% | 31.4% | 26.9% | **41.4%** | 28.8% |
| Multidisciplinary reasoning (Humanity's Last Exam, with tools) | **67.7%** | 65.6% | 63.6% | 57.2% | n/a |
| Agentic scientific research (Terminal-Bench-Science) | 58.7% | 52.6% | 29.0% | **64.6%** | 22.4% |
| Computer use (OSWorld 2.0) | **81.8%** | 80.7% | 74.0% | n/a | n/a |
| Visual chart recognition | **89.0%** | 88.4% | 83.4% | n/a | n/a |

What stands out:

- **Terminal-Bench 4.0 is the biggest win.** 66.4% against 57.9% for Astra. The footnote matters: Opus 5.5 ran at extra high (xhigh) effort, and Astra ran at high effort as OpenAI reported it.
- **FrontierCode peaked at medium effort.** The system card puts the peak at 54.6% at medium effort. The scores go down above medium, because the grader penalizes changes outside the scope of the task.
- **CursorBench and knowledge work** are clean wins. On GDPval-AA, Opus 5.5 is more than 100 Elo points ahead of Fable 5.1.
- **The two losses.** On AutomationBench, Opus 5.5 comes in second at 40.0% against Astra's 41.4%. On Terminal-Bench-Science, Astra wins 64.6% to 58.7%.
- **Computer use and chart recognition** go to Opus 5.5, both narrowly over Fable 5.1.

So on 7 of the 9 benchmarks, Opus 5.5 beats the other frontier models. I think it is important to show the losses too. A table where one model wins every row is usually a table somebody picked.

## The Independent Check: Artificial Analysis

Anthropic's own numbers are one thing. Artificial Analysis ran its own tests on launch day:

- **58 on the Intelligence Index** at max effort. Fable 5.1 and GPT-6 Astra tie at **53**. Opus 5 was at 51. That is the biggest single jump they have recorded.
- The index is made of 10 evals, and Opus 5.5 takes the top spot on **6 of the 10**.
- Their Terminal-Bench number is **59.6%**, which ties Astra. That is lower than the 66.4% Anthropic reports. The most likely reason is a different harness, so show both numbers when you talk about this.
- On AA-Briefcase it scored **1,822 Elo**, which makes it the first Anthropic model to beat GPT-5.6 Sol on presentation quality.

## The Footnote Most People Missed

Anthropic ran its benchmarks **with production safeguards on**. When a safeguard fired, the task was completed by an older model:

- Cyber tasks were completed by **Opus 4.8**.
- Bio and frontier LLM tasks were completed by **Opus 5**.

In Anthropic's own words, "this likely reduces Claude Opus 5.5's performance." So some tasks in the test runs were finished by older models, which likely pulled the scores down. I respect that they printed it.

## What People Built in the First 24 Hours

Numbers on a table do not tell you what a model feels like to use. This is the part I was most excited about. Anthropic put out four demo videos with the launch, and a few companies published what they did with early access.

### 1. The Brick Builder

This is an app Opus 5.5 built. You describe a model, or you drop in a photo, and it designs the thing out of bricks. The important part is that it checks every single connection, because studs grip and pieces that only sit side by side hold nothing.

The example build is called **Canal Clock Square**:

- **2,874 pieces**
- **487 steps**
- A **498 page** printable manual
- **15,880 stud joints**, and not one of them flagged as weak

Then you can just talk to it. In the demo he asks for a watch tower and a drawbridge, and it rebuilds the castle and regenerates the manual. Anthropic does say some sections of the video were sped up, so do not read it as real time.

### 2. GPS, Explained

This one is my favorite. Somebody asked Opus 5.5 to explain how GPS works. Instead of writing a paragraph, it built an interactive simulation. It pulled the real published GPS almanac, so those are the actual **32 satellites** in their actual orbits.

Four signals, four distances, four spheres, and where they meet is you.

The detail that shows it understands the physics: your phone's clock is cheap. If it is off by one millisecond, every distance is **300 kilometers** too long. So the fourth satellite is not there for position. It is there to solve what time it actually is.

You can also ride a satellite and scrub the constellation back to 1997. Nobody drew this. It is a web page the model coded.

### 3. Sketch to Physics

The third demo starts with a hand drawn catapult on a piece of paper. Opus 5.5 reads the sketch part by part, and the only scale it has is that the drawn blocks are **40 millimeters** wide.

Then it stands the drawing up as a wooden model, on the same sheet of paper, with real simulated physics. Not a scripted animation.

### 4. Earthrise in 3D

The fourth one is the Earthrise photo from Apollo 8, taken on Christmas Eve 1968. Somebody asked Opus 5.5 to rebuild that exact moment in 3D.

It traced **2,781 points** along the Moon's horizon in the photo, matched them against NASA's lunar elevation data, and slid the camera along Apollo 8's orbit until the edges lined up. Then it shot the photo again from that position and blinks it against the original, so you can compare them side by side.

## CodeRabbit's Three Model Test

This one is not from Anthropic. CodeRabbit, the code review company, ran the test everybody wanted: one prompt, three models, build a GTA San Andreas clone.

- Top left is GPT-6 Astra's city, top right is Opus 5.5's, and the bottom is Fable 5.1's.
- Opus 5.5 also wrote the bots that play all three games. The bots read the game state and press the keys.

Their honest take: Opus 5.5's world was the most detailed and had the most gameplay, and it also took the longest to build. So do not let anyone tell you it is just faster.

CodeRabbit also tested it on their real product, code review. On 80 known bug patterns it caught 51, against 49 for their production setup. On 13 harder bugs it caught 10, against 5. It cost about 50% more tokens, and it missed 9 bugs that the old setup caught. Their headline was "more catches, different misses," and I think that is fair.

## The Early Access Stories

To be clear, these come from Anthropic's own announcement page, so Anthropic picked them.

- One tester **migrated a 680,000 line codebase in under a day**.
- Another **audited and fixed a 200,000 line codebase in under three hours**. Opus 5 took over 20 hours on the same job and used two and a half times the tokens.
- Anthropic had Opus 5.5 and Fable 5.1 **translate HAProxy from C to Rust**. Both passed nearly all the regression tests. Opus 5.5 finished in 9.5 hours, Fable 5.1 took 12, and Opus 5.5 cost 51% less.
- **Clio**, the legal software company, let it run unattended for over **18 hours across six repos** overnight.

The one I care about most for my own work: they asked it to write a research report, and an automated grader failed any report with a single invented number or quote. **Opus 5.5 passed 16 out of 18 attempts. Fable 5.1 and Opus 5 passed zero.** If you use Claude for research, that is the stat to remember.

## The Community Tests

Creators were testing it within hours:

- **BridgeMind** ran it live against GPT-6 Sol for three hours.
- **Peter Yang** did a Blender flyover and an MS Paint computer use test.
- **WorldofAI** built Mario Kart and Minecraft clones.
- **How I AI**, who had moved to Codex months ago, titled his video "Claude is back in my dock."

The links to all of them are in the video description.

## My Verdict

If you are on **Claude Max**, Opus 5.5 is already your default Opus. Here is what I would do:

1. **Leave effort on medium** unless you measure a real gain at a higher level. Medium is where the savings are.
2. **Use the cache read cut.** Cache reads dropped from $0.50 to $0.20 per million tokens, a 60% cut. Anthropic says cache reads are the majority of agentic and coding costs, so this is the price change Claude Code users will feel.
3. **Watch for Sonnet 5.5.** It is weeks away. If it moves as much as Opus did, the value pick changes again.

If you pay for Fable 5.1 through the API, Anthropic itself says the real world gap is narrower than the charts show. At 2.5 times the price, Fable 5.1 now needs a specific reason.

## Frequently Asked Questions (FAQ)

**How much does Claude Opus 5.5 cost?**
$4 per million input tokens and $20 per million output tokens. Fable 5.1 and GPT-6 Astra are both $10 in and $50 out.

**Is Opus 5.5 better than Fable 5.1?**
On Anthropic's own table it beats Fable 5.1 on every row where both have a score. Artificial Analysis puts it at 58 against 53. Anthropic also says the gap in real use is narrower than the scores suggest.

**Where does Opus 5.5 lose?**
Two rows on the official table, both to GPT-6 Astra: AutomationBench (40.0% vs 41.4%) and Terminal-Bench-Science (58.7% vs 64.6%).

**Why is the Terminal-Bench score different on Artificial Analysis?**
Anthropic reports 66.4% at xhigh effort. Artificial Analysis measured 59.6%. The most likely reason is a different test harness.

**Is it really 40% cheaper than Opus 5?**
At the default medium effort, yes. The list price is 20% lower, and the model uses fewer tokens per task at medium. At max effort it uses many more tokens, and most of the savings go away.

**Is Opus 5.5 the default in Claude Code?**
Yes. Claude Code v2.1.280 made it the default Opus model. Check `/model` if your plan or organization settings pin a different one.

**When do Sonnet 5.5 and Haiku 5.5 come out?**
Anthropic says "in the coming weeks." There is no date yet.

## Conclusion and Next Steps

Fable level intelligence at an Opus price is the headline, and for most work it holds up. Two things to take with you: keep effort on medium, because that is where the savings live, and read the footnotes before you trust a chart. The losses, the harness differences, and the safeguard fallbacks are all printed there.

Next up, I want to put Opus 5.5 and GPT-6 Sol in the same harness, and look at Sonnet 5.5 when it lands.

🎬 Watch the full breakdown on YouTube → [https://youtu.be/qoiy5Jf6nuU](https://youtu.be/qoiy5Jf6nuU)

🎓 The Claude Code setups I use every day are in my community → [https://www.skool.com/ai-academy-with-robby-6849/about](https://www.skool.com/ai-academy-with-robby-6849/about)
