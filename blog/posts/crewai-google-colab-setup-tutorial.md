---
title: "Build Your Own AI Team: How to Use CrewAI and Gemini in Google Colab"
date: "2026-05-14"
excerpt: "Learn how to build powerful AI agent teams using CrewAI and Google Gemini inside Google Colab with this easy step-by-step guide."
thumbnail: ""
youtubeId: "rmOY5eLfdq0"
tags:
  - AI
  - CrewAI
  - Python
  - Gemini
  - Tutorial
---

Want to learn how to save time and money with AI? -> https://www.skool.com/ai-academy-with-robby-6849/about

### What is CrewAI?

Hi everyone! I’m Robby. As an AI engineer, I love finding ways to make machines work together like a team. That is exactly what **CrewAI** does. It lets you create multiple AI "agents" that talk to each other to finish big tasks.

Think of it like a sports team: one player does the research, and the other player writes the report. Today, I’m going to show you how to build your own AI team for free using Google Colab and Google’s Gemini model.

### Step 1: Getting Ready

Before we start, you will need a free Gemini API key. You can [grab one from Google here](https://aistudio.google.com/). Once you have that, open up a new notebook in Google Colab.

### Step 2: Install the Tools

We are going to use a tool called `uv` to make things fast and simple. Copy and paste these commands into your Colab cell:

* `!uv tool install crewai`
* `!uv tool run crewai create my_first_crew`
* `!uv add "crewai[google-genai]"`

This sets up your project folders and makes sure your AI has the right "brain" power to use Gemini.

### Step 3: Connect Gemini

This is the most important part! By default, the system might not know which version of Gemini to use. You need to open the `.env` file in your project folder. 

* Look for the model name.
* Change it to a current version, like `gemini-1.5-flash`.
* Paste your API key where it says `GOOGLE_API_KEY`.

**Pro Tip:** If you don't update this file, the code won't know how to talk to Google's servers, and you’ll get an error.

### Step 4: Run Your AI Crew

Now for the fun part. Go to your project folder in the Colab sidebar and run the start command:

* `%cd /content/my_first_crew/`
* `!uv tool run crewai run`

Watch your screen! You will see your AI "Research Agent" go out to find info, and your "Analyst Agent" write it all up into a final report. It’s like magic, but it’s actually just really cool code.

### Why This Matters

Learning to build agent-based systems is a huge step in your AI journey. Instead of just asking one chatbot to do one thing, you can now build systems that work together to solve complex problems. 

Give it a try and let me know what kind of "crew" you build!