---
title: "Claude Projects Scheduled Research: Setup Guide and Links"
date: "2026-11-14"
excerpt: "How to set up a redesigned Claude Project in Claude Code that runs research hourly, daily or weekly and files each report in its Library. Steps from the official docs, plus who can use it."
thumbnail: "assets/images/blog-thumbnails/claude-projects-research-on-a-schedule.jpg"
tags:
  - Claude Code
  - Claude
  - Anthropic
  - AI Agents
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Projects docs: [Let Claude coordinate ongoing work with Projects](https://code.claude.com/docs/en/claude-projects)
- Anthropic article (September 17, 2026): [Projects redesigned: from folder to conversation](https://claude.com/blog/projects-redesigned)
- Scheduled tasks docs: [Automate work with scheduled tasks](https://code.claude.com/docs/en/routines.md)
- Coordinator update from @ClaudeDevs (November 13, 2026): [post on X](https://x.com/ClaudeDevs/status/2121375309287301360)
- Waitlist, if Projects is not on your account yet: [claude.com/form/projects](https://claude.com/form/projects)

## Setup guide

These are the redesigned Projects in Claude Code. They are not the classic Projects in claude.ai chat. You use them at claude.ai/code, in the Code tab of the desktop app, or in the Claude mobile app.

1. **Check your access.** Projects are a public beta on Pro, Max and Ultra plans, and they roll out gradually. Look for **Projects** in the sidebar at [claude.ai/code](https://claude.ai/code) or in the Code tab of the desktop app. If it is not there, check under **More**. If it is not there either, the rollout has not reached your account yet. Join the waitlist.
2. **Open the New project dialog.** Select **Projects**, then **New project**. In a browser you can also go straight to `https://claude.ai/code/projects/browse`. If the button reads **Get started**, select it. You must first upgrade or archive the existing claude.ai projects it lists.
3. **Fill in the dialog.** Only **Name** is required. **What do you want to work on?** is an optional one line goal. **Context** is optional: add GitHub repositories, files, folders or Google Drive folders with **+**. For research with no code, upload documents instead of a repository. A project does not need a repository. Its cloud threads can still research and write documents, and they deliver files to the project's **Library**.
4. **Click Create project.** The project conversation opens. On your first project, Claude takes a turn of its own unless you send a message first, and that turn uses your plan.
5. **Write project instructions.** Open the **⋯** menu in the project header, select **Settings**, then go to **Memory > Project instructions**. Every new thread starts from this text (up to 16,000 characters).
6. **Check the model and effort.** In **Project settings > General**, check **Thread model** and **Thread effort**. A new project runs every thread on Opus at high effort, which draws on your plan fastest.
7. **Ask for scheduled work.** Describe the research and how often it should run in the project conversation. Claude creates a cloud scheduled task that runs as threads in that project. Find it under **Scheduled tasks** in the header's **⋯** menu. The preset frequencies are hourly, daily and weekly. For other intervals, select **Custom** in the task's edit dialog and enter a cron expression. Anything more often than once per hour is rejected. Example cron for every two hours, from the docs:

   ```
   0 */2 * * *
   ```

8. **Read the reports.** A thread's full results stay in the thread. The files that threads produce also land in the **Library**: click the **Library** button beside **Threads** in the project header.

Only need one repeating task, with no project around it? The docs say to create a cloud scheduled task on its own at [claude.ai/code/routines](https://claude.ai/code/routines), or from the CLI:

```
/schedule
```

## Watch out

- Projects are a public beta, rolling out gradually. The rollout started with accounts that used cloud sessions and have no existing projects in claude.ai chat or Cowork. They are not on Team or Enterprise plans yet.
- Scheduled tasks are a research preview. Behavior, limits and the API may change.
- A project draws on the same plan limits as your other Claude Code sessions and uses them faster.
- Cloud threads run in a cloud environment that controls network access. Test that a research thread can reach the sites it needs before you rely on the schedule.
- Scheduled tasks do not run while the project is paused or archived. Deleting a project turns its scheduled tasks off.
- Anthropic talks about "files" and the "Library", not "project knowledge". The classic claude.ai chat projects keep working as they do today until the redesigned experience reaches them.

Sources: [Claude Projects docs](https://code.claude.com/docs/en/claude-projects), [scheduled tasks docs](https://code.claude.com/docs/en/routines.md), [Anthropic: Projects redesigned](https://claude.com/blog/projects-redesigned), [@ClaudeDevs on X](https://x.com/ClaudeDevs/status/2121375309287301360). Checked November 14, 2026.
