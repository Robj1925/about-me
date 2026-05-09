---
title: "The Engineer's Guide to Claude Code in Production"
date: "2026-04-15"
excerpt: "How to use Claude Code effectively on real brownfield codebases — avoiding the pitfalls that make AI-assisted development painful and slow."
thumbnail: "assets/images/blog-thumb-2.jpg"
youtubeId: "M351KD77Lfs"
tags: ["Engineering", "Claude Code", "AI Dev Tools"]
---

Claude Code is one of the best AI coding tools available right now, but most developers are using it wrong. They're treating it like a magic code generator. In production engineering, that mindset will burn you quickly.

Here's how I actually use it in real brownfield projects.

---

## The Brownfield Problem

A **brownfield project** is existing code — a codebase that's already in production, has existing patterns, dependencies, and architecture decisions you have to respect. Most guides and demos show Claude Code on fresh, greenfield projects where you can do anything.

Real engineering is brownfield. And the rules are different.

---

## Rule 1: Give Claude Code Context, Not Tasks

The most common mistake I see engineers make:

```bash
# Wrong approach:
> "Add authentication to my app"

# Right approach:
> "Read CLAUDE.md and the /auth directory. We use JWT with refresh tokens stored in httpOnly cookies. 
> The pattern is established in user.service.ts. 
> Now add the same pattern to the admin route handler."
```

The second prompt is 10x more effective because Claude Code already understands your architecture before it writes a single line.

### What to put in CLAUDE.md

Every project should have a `CLAUDE.md` file at the root. Think of it as a briefing document for your AI pair programmer:

- What the project does (2-3 sentences)
- The stack and key dependencies
- Architectural patterns you've established
- What **not** to do (antipatterns, banned libraries, etc.)
- Where important things live in the directory structure

---

## Rule 2: Review Diffs, Not Just Output

Claude Code can generate plausible-looking code that silently breaks existing contracts. Always review:

1. **Function signatures** — Did it change an existing function's parameters?
2. **Import statements** — Is it pulling in a new dependency you didn't ask for?
3. **Error handling** — Does it match your existing error boundary patterns?
4. **Types** — If you're on TypeScript, is it using `any` as a workaround?

Use `git diff` after every significant Claude Code session before you run anything.

---

## Rule 3: Use Subagents for Bounded Tasks

Claude Code's `/perceive` and subagent features work best when you give them **bounded, well-defined tasks** with a clear exit condition.

```
Good subagent task:
"Read the current UserProfile component. 
 Add a 'lastLogin' field to the display.
 The data is already available on the user object as user.lastLoginAt.
 Stop after updating the component and its test file."

Bad subagent task:
"Improve the user profile page"
```

Specificity is everything.

---

## Rule 4: Always Run the Tests

This sounds obvious. It isn't. I've watched senior engineers accept Claude Code output without running the test suite because "it looks right."

Run your tests. Every time. Set up a pre-commit hook if you have to.

---

## My Actual Workflow

Here's what an effective Claude Code session looks like in my day-to-day:

```
1. Write or update CLAUDE.md with current task context
2. Open Claude Code and give it a specific, bounded task
3. Watch what it does — don't step away
4. Review the diff with `git diff`
5. Run the test suite
6. Commit if everything passes
7. Repeat for the next bounded task
```

The "watch what it does" step is important. Claude Code is a pair programmer, not an autonomous agent you deploy and walk away from.

---

## Final Thoughts

Claude Code genuinely makes me faster on production code. But it requires you to be a better engineer, not a less engaged one. You still need to understand the architecture, set the constraints, and verify the output.

The engineers who get the most out of AI coding tools are the ones who have strong opinions about their codebase and communicate those opinions clearly. The tool amplifies you — so bring your best self to the session.
