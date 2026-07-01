# CLAUDE.md — automatewithrobby.fyi

## Project Overview

Static multi-page personal brand site for Robby J. Hosted on GitHub Pages at `automatewithrobby.fyi`. Pure HTML/CSS/JS — no framework, no SSR. Domain: `automatewithrobby.fyi`.

---

## Build Pipeline (Critical)

Every push to `main` triggers GitHub Actions which runs `npm run build` → `scripts/build.js` before deploying. This script:

1. Reads all `.md` files from `blog/posts/`
2. Parses frontmatter via `gray-matter`
3. Converts markdown body to HTML via `marked`
4. **Overwrites** `blog/posts-data.js` (sets `window.BLOG_POSTS`)
5. **Overwrites** `blog/index.html`
6. Writes individual `blog/[slug].html` pages
7. Regenerates `sitemap.xml`

**Never manually edit** `blog/posts-data.js`, `blog/index.html`, or any auto-generated blog post HTML. Those changes are wiped on the next push.

### Adding a Blog Post

Create a `.md` file in `blog/posts/` with this frontmatter:

```markdown
---
title: "Post Title Here"
date: "2026-06-23"
excerpt: "One-sentence description shown in cards and meta tags."
thumbnail: "assets/images/blog-thumbnails/your-slug.jpeg"
youtubeId: "YouTubeVideoID"
tags:
  - Tag One
  - Tag Two
---

Post body in standard Markdown...
```

The slug is derived from the filename (minus `.md`). The build generates the HTML, adds the post to `posts-data.js`, and includes it in `blog/index.html` automatically.

---

## Security Constraints

**Email:** Never hardcode the contact email in HTML. Use `data-email` attribute on CTA elements. The email is injected at CI build time via the `EMAIL` GitHub secret using:

```bash
sed -i "s/___CONTACT_EMAIL___/${EMAIL}/g" dist/js/main.js
```

The placeholder `___CONTACT_EMAIL___` lives in `js/main.js`. Do not move this logic or expose the email in HTML.

**Payment handles (Venmo/Zelle):** Must NOT appear in public HTML. Use "details sent on booking" phrasing only.

---

## CSS Design System

Tokens are defined in `css/styles.css` `:root`. Current amber terminal theme:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0C0B08` | Page background |
| `--bg-card` | `#141109` | Card backgrounds |
| `--amber` | `#F59E0B` | Primary accent |
| `--amber-light` | `#FCD34D` | Hover states, highlights |
| `--cyan` | `#06B6D4` | Secondary accent |
| `--text` | `#F5F0E8` | Body text (17.5:1 contrast) |
| `--text-muted` | `#9B9480` | Muted text (6.5:1 contrast) |
| `--border` | `rgba(245,158,11,0.2)` | Card/section borders |
| `--glow-amber` | `0 0 28px rgba(245,158,11,0.4)` | Amber glow shadows |
| `--glow-cyan` | `0 0 24px rgba(6,182,212,0.3)` | Cyan glow shadows |

**Contrast rule:** Amber (#F59E0B) is a light color (L~0.463). White text on amber fails WCAG (1.9:1). All amber-background elements (buttons, badges, avatars) use `color: var(--bg)` for dark text on amber.

---

## Homepage Section Order

Hero → Social Proof → About → Testimonials → Services → Videos → Blog → Projects → Contact

---

## Key Files

| File | Notes |
|---|---|
| `index.html` | Homepage — manually maintained |
| `css/styles.css` | All styles, CSS tokens |
| `js/main.js` | Homepage JS, email placeholder, blog grid renderer |
| `blog/posts-data.js` | **Auto-generated** — sets `window.BLOG_POSTS` |
| `blog/index.html` | **Auto-generated** — full post listing |
| `blog/posts/*.md` | **Source of truth** for all blog posts |
| `scripts/build.js` | Build script run by GitHub Actions |
| `PRODUCT.md` | Product context, brand guidelines, accessibility notes |

---

## Content Formatting Rules

- No em dashes (—), en dashes (–), or hyphens used as dashes in public-facing copy. Use periods, commas, colons, or parentheses instead.
