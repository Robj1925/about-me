---
title: "Vercel Gave AI Agents Their Own Browser in the Cloud"
date: "2026-08-17"
excerpt: "Vercel Labs' remote-agent-browser runs a real Chromium for your AI agent inside an isolated Vercel Sandbox. Its published benchmark opens and snapshots 100 pages in 8.01 seconds, sandbox boot included."
thumbnail: "assets/images/blog-thumbnails/vercel-remote-agent-browser-cloud-browser-for-ai-agents.jpg"
youtubeId: "rgZLmdDsmD0"
tags:
  - Vercel
  - AI Agents
  - Browser Automation
  - Developer Tools
---

Vercel just gave AI agents their own browser in the cloud, and it loads 100 pages in about 8 seconds. It is called remote-agent-browser, from Vercel Labs.

It takes agent-browser, their browser automation CLI for AI agents, and runs it inside an isolated Vercel Sandbox. Your agent gets a real Chromium that it fully controls, and Chromium never touches your deployment.

## A fresh Chromium on demand

It is a TypeScript package (`pnpm add remote-agent-browser`). `AgentBrowser.create()` starts a fresh Vercel Sandbox from a prebuilt browser image that already has Chromium installed. All commands in one client share the same page, cookies, tabs and element references. `close()` shuts down Chromium and stops the sandbox.

That solves a real problem. Headless Chrome is heavy to package with a serverless app, and you do not want an agent clicking around the web from inside your production deployment. Here the browser lives in its own disposable machine.

If you need the same browser across processes, `AgentBrowser.session()` gives it a stable id, so a different process can find the same runtime again.

## The benchmark

Vercel publishes the numbers in the README: open and take an interactive snapshot of 100 HTTPS pages in a fresh two vCPU sandbox.

- **Execution time:** 8.01 seconds (median of three runs), including sandbox creation
- **Peak memory:** 461.6 MB (PSS)

The run used Chromium 151 and agent-browser 0.33.2.

## Built for agents

Your agent's Bash tool can send normal `agent-browser` commands through `browser.shell()`, with pipes and redirection intact. Commands that support it return typed JSON. The client can upload files through a page's file input, collect downloads, and return screenshots, PDFs and HAR network traces as files.

The parent project is not small. agent-browser had about 40,000 GitHub stars when this video came out, and more than 43,000 now.

## The catch

The benchmark loads `example.com` with a unique query on every page. That is about the lightest page on the internet, so heavy real sites will take longer. You also need a Vercel project for the Sandbox (auth is automatic on Vercel through `VERCEL_OIDC_TOKEN`), and sandbox time is a cloud resource you pay for, not a local process.

One more detail: if a sandbox expires and then resumes, Chromium starts fresh. The page, cookies, refs, tabs and console history are gone, and the client emits a `reset` event so your agent can find out.

[See remote-agent-browser on GitHub](https://github.com/vercel-labs/remote-agent-browser)

If you want to wire tools like this into your own agents, that is what we build in the [AI Academy community](https://www.skool.com/ai-academy-with-robby-6849/about).
