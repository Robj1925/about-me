---
title: "The Engineer's Guide to Claude Code in Production"
date: "2026-04-30"
excerpt: "How to use Claude Code effectively on real brownfield codebases — avoiding the pitfalls that make AI-assisted development painful and slow."
thumbnail: "assets/images/blog-thumbnails/claude-code-production.jpg"
youtubeId: "M351KD77Lfs"
tags: ["Engineering", "Claude Code", "AI Dev Tools"]
---

🚀 Work 1:1 with a Software Engineer and let AI handle the busywork → https://www.skool.com/ai-academy-with-robby-6849/about

Claude Code is one of the best AI coding tools available right now, but most developers are using it wrong. They're treating it like a magic code generator. In production engineering, that mindset will burn you quickly.

Here's how I actually use it in real brownfield projects.

Most engineers open Claude Code, paste in a legacy file, and type *"clean this up."* What they get back looks reasonable. What they've actually done is handed an autonomous agent a loaded gun with no safety on.

This guide is for engineers working on **real production systems** — messy monorepos, legacy codebases, distributed services that have been duct-taped together over years. Systems where a bad refactor doesn't just break a test, it breaks a customer.

The framework here is built around one core principle: **Claude should never be smarter than your process.** The tool is powerful precisely because it moves fast and makes decisions autonomously — and that is exactly what makes it dangerous without the right guardrails in place.

---

**The Three-Phase Framework**

Everything in this guide flows through three sequential phases, each one building on the last:

| Phase | Name | Goal |
| --- | --- | --- |
| **Phase 1** | Research | Map the codebase before Claude touches anything. Build the guardrails. |
| **Phase 2** | Planning | Create a written contract for every change before a single line is written. |
| **Phase 3** | Execution | Make changes incrementally, verify manually, and protect your context window. |

**Phase 1** is about giving Claude the map and the rules. You use targeted tools to build an architectural diagram of your system, generate a `CLAUDE.md` file that acts as Claude's persistent project memory, and define explicit hard rules around the parts of the codebase that must not be touched. No code is changed here — this phase is entirely about understanding.

**Phase 2** is about building the plan before any work begins. You lock Claude into read-only Plan Mode and run a structured interview to surface every problem, constraint, and risk in the codebase. The output is an `implementation-plan.md`— a prioritized TODO list that becomes the single source of truth for everything that follows and is registered inside `CLAUDE.md` so Claude carries it across every future session.

**Phase 3** is where everything comes together. Armed with the architectural knowledge from Phase 1 and the precise, agreed-upon plan from Phase 2, Claude now knows the codebase deeply and knows exactly what needs to change and where. Execution becomes a matter of working through the `implementation-plan.md` one atomic task at a time — making a change, manually verifying it works as intended, approving it, and only then moving to the next item. Nothing gets accepted blindly, nothing gets skipped, and no session ends without a handoff document to preserve everything that was accomplished.

---

**Who This Is For**

This guide assumes you are working on a brownfield system — meaning existing production code with real constraints, real users, and real consequences for getting it wrong. If you are greenfielding a new project, some of this will feel like overkill. For everyone else, this is the minimum viable process for using Claude Code without creating more problems than you solve.

> ⚠️ **The most expensive mistake in AI-assisted refactoring is not a bad prompt. It is a good prompt given too early, with too little context, and too much autonomy.** This framework exists to make sure that never happens.

# **Phase 1: Project Onboarding & Architecture Understanding (Research)**

## **Step 1.1: Map the Architecture Manually (Code Archaeology)**

Do not ask Claude to read the whole codebase at once. Instead, instruct an Explore subagent to systematically map data schemas first, followed by routing/entry points, and finally the core business logic. Compress this analysis by asking Claude to output Mermaid diagrams.

**Why it matters:** Asking Claude to "understand this codebase" without an MCP will force it to aggressively **`Read`** files, quickly exhausting your context window (which leads to degraded AI reasoning, often called "model nerf"). Using Mermaid diagrams for the output gives you an architectural map for roughly 3-6x fewer tokens than plain text descriptions.

**Exact Prompt:**

```
Analyze this multi-repository project. Start by identifying:
1. The overall folder structure and service boundaries
2. The main configuration files and application entry points
3. Any high-coupling hotspots or "God objects". Please use an Explore subagent to avoid polluting this session's context.
Synthesize your findings into a Mermaid flowchart showing the service boundaries and data coupling points. This gets saved into its own dedicated markdown file, ARCHITECTURE.md.
```

## **Step 1.2: Run `/init` and Establish Hierarchical Guardrails**

**What to do:** Run the **`/init`** command at the root of your project to let Claude auto-generate a starter **`CLAUDE.md`** based on your frameworks and build tools. However, you must immediately restructure this. Create a **hierarchical memory system** by keeping overarching project principles in the root **`./CLAUDE.md`**, and creating scoped rules in subdirectories (e.g., **`apps/payment-service/CLAUDE.md`** or **`.claude/rules/*.md`**).

**Why it matters:** Monorepos and large legacy systems quickly exhaust Claude's context window (which is a 200,000 to 500,000 token limit depending on your plan). Progressive disclosure ensures Claude only lazy-loads specific service logic when it actively enters those directories, preventing context pollution and saving tokens.

**Exact Prompt:**

```
Run the /init command to generate a baseline CLAUDE.md. Then, analyze our directory structure and create a .claudeignore file that blocks access to all logs, caches, built binaries, and third-party dependency folders so we don't waste tokens.
```

## **Step 1.3: Engineer the Root `CLAUDE.md`**

**What to do:** Use the WHAT-WHY-HOW framework to structure your root instruction file. Tell Claude what the tech stack is, why certain architectural decisions were made, and how to execute commands. Be sure to include explicit "Hard Rules" defining legacy components that must not be touched without permission. Keep this root file strictly under 300 lines. **Crucially, do not paste your full architecture map directly into this file. Instead, save your mapped architecture (from Step 1.1) in a separate file (e.g., .claude/rules/architecture.md) and use the @ import syntax to reference it**.

**Why it matters:** Claude is an in-context learner and treats **`CLAUDE.md`** as its persistent project memory. Without explicit boundaries, the AI might make dangerous assumptions—like trying to introduce distributed transactions where eventual consistency is required, or attempting to directly access another microservice's database. Furthermore, using the **`@`** import syntax keeps your root file clean and prevents bloating the context window, while still guaranteeing Claude recursively loads your complex overarching architectural diagrams into its memory.

**Example Template:** Here is a copy-pasteable example of what your root **`CLAUDE.md`** should look like for a brownfield microservices project:

```
# Microservices Architecture Context

This is a legacy brownfield system transitioning to modern microservices. Safety, behavioral equivalence, and strict boundaries are paramount.

# WHAT: Tech Stack & Structure

- Services: Node.js, Express, TypeScript 5.0
- Databases: MongoDB (Order Service), PostgreSQL (User Service)
- Infrastructure: Docker, AWS Bedrock
- Directory Structure:
  - `/apps/user-service` # Handles auth and user profiles
  - `/apps/order-service` # Handles checkout and inventory
  - `/apps/payment-service` # Legacy payment processor
- **Architecture Map: @architecture.md**

# WHY: Architectural Boundaries

- Single Responsibility: Each service owns one business capability [6].
- Database per Service: Avoid shared databases. No service may directly access another service's database. Period [5].
- Communication: Default to asynchronous communication (Kafka/NATS). Use synchronous HTTP/REST only for immediate real-time requests [5].
- Data Consistency: Eventual consistency is the default. Do not introduce distributed transactions [4].

# HOW: Commands & Hard Rules

- Run global tests: `npm run test:all`
- Run linting: `npm run lint`

## 🚨 Hard Rules ("Do Not Touch" Zones)

1. NEVER touch `/apps/payment-service/legacy_processor.js` without explicit human permission.
2. Every external network call must implement circuit breakers and retries with exponential backoff [6, 7].
3. Do not update dependencies in any `package.json` unless specifically instructed.
4. Import detailed API specs via @.claude/rules/api-standards.md when modifying endpoints [2].
```

# **Phase 2: Safe Analysis & Discovery (Planning)**

*With your architectural map and `CLAUDE.md` guardrails in place from Phase 1, you now have enough context to plan the actual work. But before a single line of code is changed, you need a written contract between you and Claude that defines exactly what will be done, in what order, and with what constraints. That contract is your `implementation-plan.md`.*

## Step 2.1  **— Enter Plan Mode and Build the Implementation Plan**

The first rule of Phase 2 is that Claude touches nothing. To enforce this, activate **Plan Mode** by pressing **Shift+Tab twice** inside Claude Code, or by launching it from the terminal with the `--permission-mode plan` flag. In this mode Claude is hard-restricted to read-only tools — it can explore, analyze, and reason about your codebase but it cannot write or modify any files whatsoever.

This is where the real thinking happens. Rather than giving Claude a list of things to fix, you engage it in a **structured back-and-forth interview** — almost like pair programming with a senior engineer who has just finished reading the entire codebase. Claude surfaces what it finds, asks you clarifying questions one at a time, and you respond with priorities, constraints, and decisions. That conversation is what shapes the plan.

The output of this process is your **`implementation-plan.md`** — a prioritized, structured TODO list that becomes the single source of truth for everything that happens in Phase 3. Every change, every constraint, every "do not touch" decision gets captured here so nothing lives only in your head or in a chat window that will eventually reset.

Once the plan is finalized, you instruct Claude to register it inside `CLAUDE.md` so that every future agent and sub-agent automatically loads and respects it before taking any action. This is what gives Claude **institutional memory** across sessions — without it, every new context window starts from zero and none of the decisions you made carry forward.

Here is the prompt to kick off this process:

<aside>
🧭

**Plan Mode interview prompt**

</aside>

```
Enter Plan Mode. Do not write or modify any files.

Using your Glob and Grep tools, analyze this codebase and identify:
1. Dead code and unused modules
2. Duplicate logic across services
3. Overly coupled services or shared databases that violate service boundaries
4. Any fragile or legacy components that require special handling

Do not summarize everything at once. Ask me clarifying questions one at a time
about the areas you find — I will answer them so we can align on priorities,
constraints, and the correct order of operations together.

Once we have finished our discussion, compile everything we agreed on into a
structured implementation-plan.md file with the following sections:

# Implementation Plan
## Overview
## Services In Scope
## Hard Constraints (Do Not Touch)
## Changes Required (ordered by priority and dependency)
## Open Questions / Risks

When the plan is complete, update CLAUDE.md to include a reference to
implementation-plan.md so that all future agents load and respect this plan
before taking any action in this codebase.
```

> 💡 **Why the interview format matters:** The "ask me one question at a time" instruction is load-bearing. If you remove it, Claude will dump every question it has in one overwhelming block and important decisions will get glossed over. The interview cadence forces both you and Claude to think through each decision deliberately before moving to the next one — which is exactly how a plan worth trusting gets built.

---

**What You Should Have at the End of Phase 2**

Before moving to Phase 3 you should be able to check off all three of these:

- [ ]  `implementation-plan.md` exists with a clear ordered list of changes
- [ ]  `CLAUDE.md` has been updated to reference `implementation-plan.md`
- [ ]  You have manually reviewed the plan and agree with the order and constraints before any code is written

If any of these are missing, do not proceed. A weak plan in Phase 2 becomes a broken codebase in Phase 3.

---

# **Phase 3: Incremental Refactoring**

With your `implementation-plan.md` locked in and `CLAUDE.md` guardrails in place, Phase 3 is where the actual work happens. Brownfield refactoring is not a sprint — it is a surgical operation. Every cut must be deliberate, isolated, and immediately verified before the next one begins. The moment you let Claude make sweeping changes across multiple files in a single pass, you lose the ability to pinpoint what broke and why.

---

**3.1 — Set Up Your Environment Before Writing a Single Line**

Before executing any changes from your `implementation-plan.md`, get your environment into the right state. Two things need to be true before you start:

**Stay in Ask Mode.** Make sure Claude is running in Ask Mode so that every file write and every command execution requires your explicit approval before it happens. Nothing gets committed to disk without you seeing it first.

**Isolate parallel work with Git Worktrees.** If you plan to work on more than one service or feature simultaneously across multiple Claude sessions, use `git worktree add` to spin up isolated working directories for each. This prevents cross-talk between sessions and eliminates the risk of merge conflicts from two Claude agents stepping on each other's changes.

```bash
# Create an isolated worktree for a specific service refactor
git worktree add ../project-payment-refactor -b refactor/payment-service
```

Getting these two things right at the start saves you from a category of painful, hard-to-debug problems later.

---

**3.2 — Execute the Test-Extract-Replace Loop**

The core discipline of Phase 3 is **one change, one verification, one acceptance.** Every task you hand to Claude should be atomic — small enough that if something breaks, you know exactly where it came from.

The loop works like this:

```
Pull the next task from implementation-plan.md
        ↓
Give Claude a specific, scoped instruction
        ↓
Claude makes the change
        ↓
YOU manually verify it works as intended
        ↓
Accept or reject — then move to the next task
```

What counts as a properly scoped task matters enormously. Good examples include:

- Extract this one method into its own utility function
- Rename this variable across this single file
- Move this database call behind a service interface
- Add a circuit breaker to this one specific external API call

Each of these is atomic, testable, and reversible. Compare how differently scoped prompts play out in practice:

| ❌ Vague | ✅ Specific |
| --- | --- |
| "Clean up the payment service" | "Extract the `calculateTax()` logic from `payment-service/index.js` line 142 into a standalone pure function in a new file called `tax-calculator.js`. Do not change any other logic." |
| "Refactor this to use async/await" | "Convert only the `fetchUserById()` function in `user-service/db.js` from callbacks to async/await. Do not touch any other functions in this file." |
| "Make this more modular" | "Move the database connection logic from `order-service/server.js` into a new file called `order-service/db-client.js` and update the import in `server.js` only." |

**Common Pitfall:** The most dangerous thing you can do in this phase is give Claude an open-ended instruction like *"Refactor this legacy module to be clean."* Vague requests produce what engineers call **"vibe-coded slop"** — code that looks reasonable on the surface but quietly hallucinates nonexistent APIs, invents function signatures, and breaks production contracts in ways that don't surface until runtime. The fix is always specificity.

> 💡 **Red flag to watch for:** If Claude's proposed change touches more files than the task logically requires, stop and reject it. Re-prompt with tighter constraints. A change that feels too big almost always is.

---

**3.3 — Manage Your Context Window Actively**

*"The name of the game is that you only have approximately 170k of context window to work with. So it's essential to use as little of it as possible. The more you use the context window, the worse the outcomes you'll get."* — Geoffrey Huntly

Long refactoring sessions degrade silently. As your context window fills up, Claude's reasoning quality drops — it starts losing track of earlier architectural decisions and producing outputs that contradict constraints you established at the start of the session. You need to stay ahead of this.

Monitor your token usage actively using `/context`. Do not wait for auto-compaction to kick in — by the time it does, nuanced decisions have already been lost. Follow this pattern instead:

| Situation | Action |
| --- | --- |
| Session hits 50–60% capacity | Run `/compact` to summarize history while preserving project state |
| Switching to a completely different microservice | Run `/clear` to wipe context entirely and start fresh |
| Starting a new session the next day | Load your handoff document before anything else (see 3.4) |

The goal is to keep Claude operating in the sharp, high-reasoning part of its context window as much as possible, not the degraded tail end of it.

---

**3.4 — Write a Handoff Document at the End of Every Session**

Never rely on session memory for multi-day work. At the end of each working session, before you close Claude, instruct it to generate a handoff document that captures exactly where things stand. This becomes the first thing you load at the start of your next session.

A good handoff document should include:

```markdown
# Handoff Document — [Date]

## What Was Completed This Session
- [List of tasks completed from implementation-plan.md]

## Current State
- [What is working, what is partially done]

## Tests That Were Run and Passed
- [Exact test commands and their results]

## Known Edge Cases and Risks
- [Anything that felt fragile or needs a second look]

## Next Task
- [The exact next item from implementation-plan.md to pick up from]
```

Loading this at the start of a new session effectively gives Claude back its memory. Combined with the `CLAUDE.md` and `implementation-plan.md` already in place, you re-establish full context in seconds rather than spending the first 20 minutes of a session re-orienting.

---

**What You Should Have at the End of Phase 3**

Before considering the refactor complete, verify all of the following:

- [ ]  Every task in `implementation-plan.md` is marked complete
- [ ]  Each change was manually verified before being accepted
- [ ]  No session exceeded 60% context capacity without being compacted
- [ ]  A final handoff document exists summarizing the completed state
- [ ]  All tests pass on the final build
