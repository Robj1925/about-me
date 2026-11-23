---
title: "Claude and One Mathematician Proved the Riemann Hypothesis: The Paper and All the Sources"
date: "2026-11-23"
excerpt: "Levent Alpöge and Claude released a 17 million line Lean proof of the Riemann hypothesis, and the Lean FRO certified it on Nov 21. Here are the note, the checks, the sources and the limits."
thumbnail: "assets/images/blog-thumbnails/claude-and-one-mathematician-proved-the-riemann-hypothesis.jpg"
tags:
  - Claude
  - Anthropic
  - AI News
  - Math
  - Lean
guide: true
---

This page collects the primary sources on the Riemann hypothesis proof that Levent Alpöge found working with Claude.

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- [Alpöge's note (the "paper", PDF)](https://alpo.ge/remark.pdf)
- [Lean certification by the Lean FRO and the Mathlib Initiative](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/)
- [MIT verification files (Andrew Sutherland)](https://math.mit.edu/~drew/grh/)
- [Proof repo on GitHub (leanprover-community)](https://github.com/leanprover-community/riemann-hypothesis)
- [Original proof, unchanged source](https://github.com/homeowmorphism/riemann-hypothesis-original)
- [The Riemann hypothesis (Clay Mathematics Institute)](https://www.claymath.org/millennium/riemann-hypothesis/)
- [AHM statement (the critics)](https://www.ahmath.org/statements)

## How it works

**The problem.** Riemann formulated it in 1859. It is about how the prime numbers are spread out. It is one of the seven Clay Millennium Prize Problems, with $1 million for each solution.

**The proof.** On Nov 20, 2026, Levent Alpöge, a mathematician at Anthropic, wrote: "I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis." He wrote that Claude "far outpaced me near the finish line". His timeline runs from Oct 6 to Nov 16, 2026. The proof also covers the Generalized Riemann Hypothesis for Dirichlet L-functions.

**No paper, only Lean.** Lean is a language a computer can check. The proof is a Lean library of 17 million lines. A full written version hit over 250,000 pages, so Alpöge decided "to only present Lean".

**The certification.** On Saturday, Nov 21, the Lean FRO and the Mathlib Initiative wrote: "We have full confidence that Alpöge's proof of the Riemann Hypothesis is correct." Dozens of people compiled the code, and several independent proof checkers accepted it.

**The MIT check.** Andrew Sutherland ran his checks with Claude Code. All 175,187 modules compile with zero errors, and two independently written kernels (nanoda and con-leche) accept the full exported proof.

## Who can use it

The proof is public. To check it yourself, the MIT page says you need Lean v4.36.0, roughly 100 GB of RAM and 70 GB of disk. The fastest independent check (con-leche) needs about 50 GB of RAM. Alpöge's note does not name the Claude version he used.

## Watch out

- **No human has fully read it yet.** Alpöge says he presented the proof "before having mastered a massive neighbourhood around its mathematics", and he still has to understand parts of it.
- **Critics.** The Association for Human Mathematics says milestones like this are "used by AI companies as little more than publicity".
- **The prize is not paid.** The Clay page still lists the problem as active, and the prize has its own rules.
- **Not the August result.** Anthropic's August post ([riemann-zeta](https://www.anthropic.com/research/riemann-zeta)) was a different, smaller result: a lower bound moved from 41.6% to 67.2%. Anthropic has no blog post on this proof yet.

Sources: [Levent Alpöge: remark.pdf](https://alpo.ge/remark.pdf), [Lean community blog: Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/), [MIT: RH Lean proof verification files](https://math.mit.edu/~drew/grh/), [leanprover-community/riemann-hypothesis](https://github.com/leanprover-community/riemann-hypothesis), [Clay Mathematics Institute: Millennium Problems](https://www.claymath.org/millennium-problems/), [AHM statements](https://www.ahmath.org/statements) and [Anthropic: Learning more about Claude's mathematical capabilities](https://www.anthropic.com/research/riemann-zeta)
