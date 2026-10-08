---
title: "Claude Can Now Control Robots and Lab Hardware"
date: "2026-09-06"
excerpt: "Anthropic's Model Hardware Standard lets AI agents run microscopes, robot arms and quantum computer lasers. At QuEra, Claude turned a laser recovery script that worked 58% of the time into one that passed 99.3% of 700 blind trials."
thumbnail: "assets/images/blog-thumbnails/claude-can-now-control-robots-model-hardware-standard.jpg"
youtubeId: "qPDQkHSVzH8"
tags:
  - Anthropic
  - Claude
  - Robotics
  - AI Agents
  - News
---

Anthropic just opened a research preview of the Model Hardware Standard (MHS), a shared spec that lets AI agents operate physical machines: microscopes, liquid handlers, robot arms and even the lasers inside a quantum computer. Think of it as MCP for hardware.

## Why it matters

Wiring up lab or factory hardware usually takes weeks, sometimes months. Most devices do not talk to each other, so specialists build a custom integration for every one. Anthropic says MHS cuts that work to hours or minutes. It is model agnostic, any agent harness can reach it through standard protocols like the Model Context Protocol, and Anthropic plans to open source it after the preview.

## One driver, any device

Every machine gets a standard MHS driver built on simple primitives: "read" (get the temperature) and "write" (set the temperature). Devices become discoverable in a standard format, so an agent can find them across a network. The driver also carries facts that code alone does not show, like the weight of a robot arm, and turns them into a reference file that tells the agent what the device can measure, what it can adjust and which safety limits are enforced. Agents control devices through MCP, a command line interface or code files.

## The quantum computer proof

QuEra builds quantum computers with neutral atoms, and its lasers must hold a frequency to roughly one part in a trillion. When a laser loses that lock, recovery used to rely on a script that took around 150 seconds per attempt and worked about 58% of the time.

QuEra gave the problem to Claude through MHS. Four Claude instances took turns proposing a fix, writing it, running it on the live laser and reading the log. The loop ran hundreds of times overnight, and by morning recovery took about six seconds. Then the finished script ran alone against 700 randomized disturbances and recovered the lock 695 times, a 99.3% success rate. The output is a plain, inspectable script that runs in production with no AI in the loop.

## Carnegie Mellon in eight hours

Researchers at Carnegie Mellon used MHS to automate a full dose response workflow: a liquid handler, a plate reader, a robot arm and cameras spread across three computers with incompatible interfaces. Going from raw equipment to a finished dilution curve, including one rerun the agent chose on its own, took eight hours. A vendor-built setup typically takes multiple weeks.

## The catch

This is a research preview with a waitlist, not a product you can install today. Anthropic is clear that Claude's physical reasoning still needs expert oversight. At Genentech, researchers had to explain that errors from foaming samples were physical problems, not software bugs. MHS also does not yet work with hardware that lacks a programming interface.

If you are building agents that touch the real world, the [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about) is where we share that work.

Read the announcement on the [Anthropic blog](https://www.anthropic.com/news/model-hardware-standard-research-preview).
