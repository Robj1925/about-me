---
title: "Claude Sheets: Setup Guide, Prompt and Links"
date: "2026-11-14"
excerpt: "How to start Claude Sheets, the beta that builds a spreadsheet from a prompt, plus the exact tracker prompt from my video, the plans that have it and its current limits."
thumbnail: "assets/images/blog-thumbnails/claude-sheets-setup-guide-and-prompt.jpg"
tags:
  - Claude
  - Claude Sheets
  - Anthropic
  - AI Tools
  - Tutorial
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Help Center, Get started with Claude Sheets: [support.claude.com/en/articles/18324300](https://support.claude.com/en/articles/18324300)
- Anthropic launch article (Nov 10, 2026): [claude.com/resources/articles/sheets-whiteboards-data](https://claude.com/resources/articles/sheets-whiteboards-data)
- Anthropic announcement: [More ways to work with Claude: Sheets, whiteboards and interactive connectors](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors)
- Official launch video from @claudeai: [x.com/claudeai/status/2120206365759094857](https://x.com/claudeai/status/2120206365759094857)

## Setup guide

Claude Sheets is in beta on the Pro, Max, Ultra, Team and Enterprise plans. The Free plan does not have it. It is on by default for Team plans. On Enterprise plans, an admin must turn it on in Organization settings, then Artifacts. The rollout started on November 10, 2026, so it may not be on your account yet.

1. Open Claude on the web or in the desktop app. Mobile gives only basic read only access.
2. Go to the **Artifacts** tab.
3. Select the **Sheets** tile.
4. Describe the sheet you want, or start with a blank sheet. You can also import a CSV file, a Google Sheets file or an Excel file.

You can also start from a normal chat. Ask Claude for a sheet, for example "Build a campaign tracker with owners, dates, and status."

This is the prompt from my video:

```text
Build a campaign tracker with two tabs. Tasks: Task, Owner, Due date, Status (a dropdown with Not started, In progress, Done) and Notes, with 8 sample tasks. Budget: Item, Planned, Spent and Remaining, where Remaining is Planned minus Spent as a formula, plus a Total row with formulas.
```

Claude can add tabs, write formulas that work across tabs, apply formatting and conditional formatting, and add dropdowns, checkboxes and charts. The formulas stay in the cells, so you can click a cell and check it.

5. To share, open the sheet and click **Share**. Sheets start private. The people you invite work in the same cells with you and Claude.
6. To download, export the sheet as an .xlsx or CSV file.

## Watch out

- It is a beta and it is still rolling out. Use counts toward your plan limits. It is not free.
- A sheet holds up to 100,000 cells. Sheets includes 144 functions.
- Not in the beta yet: pivot tables, protected ranges, find and replace, multi column sort, filter views, multi select dropdowns and PDF export.
- Excel features that do not work: macros, VBA, Power Query, DAX and print layout.
- Sheets cannot pull live data from connected apps.
- HIPAA, CMEK and ZDR are not supported yet.
- Use made up data when you test it. Do not put client data in a beta.

Sources: [Claude Help Center](https://support.claude.com/en/articles/18324300), [Anthropic launch article](https://claude.com/resources/articles/sheets-whiteboards-data), [Anthropic announcement](https://claude.com/resources/articles/more-ways-to-work-with-claude-sheets-whiteboards-and-interactive-connectors), [@claudeai launch video](https://x.com/claudeai/status/2120206365759094857).
