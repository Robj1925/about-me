---
title: "Claude Code Mode: Setup Guide, Links and Limits"
date: "2026-11-23"
excerpt: "How to turn on Code Mode in Claude Code, the experimental setting where Claude writes one JavaScript program that chains and parallelises its tool calls, with the official links and the limits."
thumbnail: "assets/images/blog-thumbnails/claude-code-mode-chains-tool-calls.jpg"
tags:
  - Claude Code
  - Claude
  - Anthropic
  - AI Coding
  - Tutorial
guide: true
---

This page is the setup guide for Code Mode in Claude Code, with the official links and the limits.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## How it works

Without Code Mode, Claude asks for tool calls such as Bash, Read or Edit one at a time, and reads each result before it decides what to do next. With Code Mode, Claude writes a piece of JavaScript that makes the tool calls, and Claude Code runs that code in your session.

The docs say one piece of code can "run commands in parallel, use one result in the next call, and return the part of the output that Claude needs to read." This is the example from the docs:

```javascript
const files = await $`rg -l "function retryPolicy" src`.text();
const target = files.trim().split("\n")[0];
await edit(target, "maxAttempts: 3", "maxAttempts: 5");
({ edited: target, tests: $`npm test -- retryPolicy`.nothrow() });
```

Code Mode is experimental and off by default. It may change or be removed in any release.

## Links

- [Code Mode docs (Claude Code)](https://code.claude.com/docs/en/code-mode)
- [Claude Code changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Permission modes (Claude Code)](https://code.claude.com/docs/en/permission-modes)

## Setup guide

You need Claude Code v2.1.323 or later (native build), a Claude subscription or Console account, and one of these models: Opus 5.5, Sonnet 5.5, Haiku 5.5 or Fable 5.2. It works only in an interactive `claude` session in a terminal.

1. Check your version, and update if it is older than v2.1.323.

   ```bash
   claude --version
   claude update
   ```

2. Start Claude Code with Code Mode on (macOS, Linux, WSL):

   ```bash
   CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 claude
   ```

   To keep it on for every new session, add it to `~/.claude/settings.json`:

   ```json
   {
     "env": {
       "CLAUDE_CODE_EXPERIMENTAL_CODE_MODE": "1"
     }
   }
   ```

   A project's settings file cannot turn it on. Only your shell or your user settings can.

3. Confirm. Pick **Yes, turn on Code Mode**. Claude Code restarts and shows:

   ```text
   Code Mode (experimental) is on · this session can be resumed only with Code Mode on
   ```

4. Give Claude a task with many tool calls. The docs suggest:

   ```text
   Read every Markdown file in this project and list the links that point to local files that don't exist.
   ```

5. Read the code. Press `Ctrl+O`, expand a **Code** row, then press `Ctrl+O` again to go back.

6. To turn it off, remove the variable from your shell and from `~/.claude/settings.json`, or set it to `0`, then start a new session.

## Watch out

- **Terminal only.** It does not work in the VS Code panel, the Desktop app or cloud sessions.
- **Ten minute limit when Claude waits.** If Claude waits for the code, the code stops after ten minutes. In auto or `bypassPermissions` mode, code can run in the background for up to two hours while you keep talking to Claude.
- **Resuming.** Keep the variable set to `1` when you run `claude --continue` or `claude --resume`. With Code Mode off, Claude Code refuses to resume a Code Mode session.
- **Auto mode checks the code, not each call.** The classifier reviews each piece of code before it runs, and it does not see values computed at run time. Your `deny` and `ask` rules and `PreToolUse` hooks still apply to each tool call.
- **Some features are off.** You cannot use Remote Control, Claude in Chrome or computer use in a Code Mode session.
- **It will not start** through a gateway, Amazon Bedrock or other cloud providers, with an API key helper, or with OpenTelemetry tracing on. The docs have a table with the fix for each reason.
- **No official speed number.** The docs do not say how much faster it is. Test it on your own task.

Sources: [Claude Code docs: Code Mode](https://code.claude.com/docs/en/code-mode), [Claude Code changelog v2.1.323](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) and AlphaSignal (Nov 18, 2026).
