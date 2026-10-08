---
title: "Google's Gemini Robotics 2 Controls Robots From Feet to Fingertips"
date: "2026-08-13"
excerpt: "Google DeepMind's Gemini Robotics 2 drives a whole humanoid with one model and unscrews a light bulb 92% of the time. It also learns a new two-arm robot in a few hours, typically from fewer than 200 examples."
thumbnail: "assets/images/blog-thumbnails/gemini-robotics-2-controls-robots-feet-to-fingertips.jpg"
youtubeId: "-TBwgNFVcbQ"
tags:
  - Google DeepMind
  - Robotics
  - Gemini
  - AI News
---

Google DeepMind's Gemini Robotics 2 controls an entire humanoid robot, legs, torso, arms and five-fingered hands, with a single model. DeepMind released it on July 30, 2026.

## Three Models in One Family

Gemini Robotics 2 is actually three models:

- **Gemini Robotics 2**, a vision-language-action (VLA) model that turns what the robot sees and hears into motor control.
- **Gemini Robotics ER 2**, an embodied reasoning model that acts as the robot's brain. It runs task sequences that last several minutes and involve hundreds of decisions.
- **Gemini Robotics On-Device 2**, a VLA built to run locally on the robot, with no internet connection.

## Whole Body Control

In the demo, someone tells Apptronik's Apollo 2 humanoid to "put the watering can into the green bin in the bottom shelf." It walks to the table, picks up the can, takes a few steps to the shelves and places it in the bin.

DeepMind's own numbers on Apollo 2: picking up from a shelf succeeds 76.3% of the time, from a table 68.4%, and from the floor 45.7%.

## Hands and Grippers

The model now drives the five-fingered, 22 degree-of-freedom SharpaWave hand. Unscrewing a light bulb succeeds 92% of the time. With standard grippers, precise insertion tasks hit 89.6%, diverse tool kitting 78.9%, and general pick and place 74.2%.

ER 2 also adds multi-robot collaboration. Different types of robots can communicate and split up a workflow that one robot could not finish alone.

The on-device model adapts to a new two-arm robot body in just a few hours, typically with fewer than 200 examples. DeepMind shows it on Dexmate, SO101 and Trossen hardware.

## The Catch

The dexterity chart is honest about the limits. Screwing a light bulb in succeeds only 36% of the time, against 92% for unscrewing it. Tying a trash bag sits at 44%, sealing a ziplock bag at 40%, and using a dustpan at 32%. The video shows these tasks working, but most of them fail more often than they succeed. DeepMind itself says multi-finger dexterous manipulation is still hard and that robots need to move faster.

Access is also limited. Only the brain is public: Gemini Robotics ER 2 is live in Google AI Studio, and in private preview on the Gemini Enterprise Agent Platform. The VLA and On-Device models are available to early-access partners only.

## Why It Matters

One checkpoint that walks, grabs and handles fine objects, plus a body-swap path measured in hours instead of months, is the direction general-purpose robots need. You can try the reasoning model yourself today in AI Studio.

Source: [Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)
