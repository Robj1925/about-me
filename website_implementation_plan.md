# Comprehensive Personal Website Plan & Constraints

This document contains the complete context required to build Robby J's personal website. It combines the original architectural constraints and design rules with the finalized content structure.

---

## Part 1: Architectural Constraints & 2026 Design Rules

### 1. Structural Objectives
The layout must be highly scannable, utilize a single-column structure on mobile, and guide visitors toward clear actions. It must combine conversion-optimization with editorial authority.

### 2. Design Rules
*   **Color Scheme & Dark-First Design:** Leverage OLED screen energy efficiency. High-contrast color palettes (WCAG 2.1 AA compliant, 4.5:1 ratio minimum).
*   **Typography:** Base body font size of 18px (Inter). Line-height 1.5x - 1.6x. Limit line width to 50-75 characters.
*   **Spacing & Grid Constraints:** 8px-based spacing system, 16px internal padding for UI cards. Use organic shapes, soft gradients, and anti-grid accents.
*   **Mobile-First Responsiveness:** Touch targets minimum 44x44px (preferably 48px). Cards stack vertically into a single column on mobile.
*   **Performance:** Sub-2.5 second LCP. Native CSS functions (scroll-driven animations, CSS Grid) rather than heavy JavaScript libraries. `loading="lazy"` on below-fold images.
*   **HTML/CSS/JS Architecture:**
    *   Flexbox and Grid for layout. Mobile default: `flex-direction: column` or `grid-template-columns: 1fr`.
    *   Semantic HTML (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`).
    *   Keyboard accessible (Tab) with distinct `:focus-visible` state.
    *   Service cards highlight: `:nth-child(2)` element emphasized.
    *   Blog cards: `text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2;`
    *   `min-height: 48px` for inputs/buttons. HTML5 input types (e.g. `type="email"`).
    *   Fluid typography with `clamp()`.

---

## Part 2: Finalized Content Structure

### Overview
A 2026-optimized, dark-first personal landing page for **Robby J** — Software Engineer, AI Systems Builder, and YouTuber.
Target Audience: Developer-creators, technical power users.
Primary CTA: YouTube Channel subscribe + Newsletter signup.

### Brand & Design System
*   **Palette:** Deep purple (`#7C3AED`) + Cyan (`#06B6D4`) on near-black (`#0A0A0F`). Card backgrounds `#13131A`.
*   **Typography:** Headings: `Space Grotesk`. Body: `Inter`. Code: `JetBrains Mono`.
*   **Visual Language:** Subtle animated gradient mesh hero background (CSS-only). Glassmorphism cards (`backdrop-filter: blur(12px)`). Soft purple glow on hover states.

### Section 1: Navigation
Logo (left): "Robby J" with a subtle terminal cursor blink after the name
Nav links (center/right): About | Projects | Services | Blog | YouTube ↗
CTA (top right): "Watch on YouTube" — filled purple button
Mobile: Hamburger → full-screen overlay menu

### Section 2: Hero
Eyebrow tag:  [  ⚡ AI Engineer & Creator  ]   (cyan pill badge, subtle glow)
Headline:     "I Build AI Systems That Actually Work."
Subheadline:  "Software engineer, content creator, and open-source builder.
               I teach developers how to automate their world with AI."
Primary CTA:  [  Subscribe on YouTube  ]
Secondary CTA: →  See My Projects
Hero Visual:  Animated terminal window showing a real OpenClaw command being typed (CSS animation)
Scroll indicator: Animated down-chevron

### Section 3: Social Proof Strip
A single horizontal scrolling strip of trust signals:
[ 📺 57,257 Combined Views ] | [ 🛠️ iRespond Creator ] |
[ 🤖 AI Automation Builder ] | [ 🎓 M.S. Computer Science ]

### Section 4: About
Layout: 2-column on desktop (photo left, bio right), stacked on mobile
Photo: High-quality headshot (Source: `/Users/robby/Downloads/personal pics/RJ headshot`)
Name: Robby J
Tag: Software Engineer · AI Creator · M.S. Computer Science
Bio: "I'm a software engineer with a Master's in Computer Science, building AI systems and automation tools that live at the edge of what's possible.
On YouTube (Code With Robby), I break down the latest AI tools — not as a reviewer, but as someone who's shipping real code with them every day. I build with powerful AI frameworks and I'm obsessed with designing workflows that make developers 10x faster."
Social Links: YouTube (https://www.youtube.com/@Code-With-Robby) | GitHub (https://github.com/robj1925)

### Section 5: Featured Projects
Card 1 — iRespond
  Tag: [ Open Source ] | Title: "iRespond" | Desc: "An automated response tool built with the Clawdbot community." | Link: [ View on GitHub → ](https://github.com/Robj1925/iRespond)
Card 2 — YouTube SEO Autoposter
  Tag: [ Tool ] | Title: "YT Timestamp Autoposter" | Desc: "Whisper + Gemini pipeline that auto-generates chapters and SEO descriptions for YouTube uploads."
Card 3 — MCP Server Suite
  Tag: [ In Progress ] | Title: "Custom MCP Servers" | Desc: "A suite of personal Model Context Protocol servers for YouTube analytics, OBS control, and Jira sync."

### Section 6: Services
Tier 1 — "AI Audit" (Price: Contact for Quote)
Tier 2 — "Custom MCP Server" (RECOMMENDED badge, purple border) (Price: Contact for Quote)
Tier 3 — "Agentic System Build" (Price: Contact for Quote)

### Section 7: Blog / Latest Videos
Layout: 3-column card grid (collapses to 1-col on mobile)
Post 1: "NOTEBOOKLM FULL COURSE 2026: The Complete Beginner's Guide" (Tag: Full Course | Date: May 2026)
Post 2: "The Engineer's Guide to Claude Code in Production" (Tag: Engineering | Date: April 2026)
Post 3: "OpenClaw Skills Explained: A Beginner's Guide" (Tag: Beginner Guide | Date: April 2026)

### Section 8: Footer / Newsletter
Newsletter CTA: Headline: "The Engineer-Creator Weekly"
Input: [ your@email.com ] [ Subscribe Free → ]
Footer columns: Logo, Quick Links, Connect (YouTube, GitHub, Email: Contact Form or Obfuscated Link to prevent scraping)
Bottom bar: © 2026 Robby J · Privacy Policy · Built with ❤️ + AI

---

## Part 4: Security & Privacy Best Practices (Public Repo)

To prevent personal info scraping by bots scanning public GitHub repositories:
1. **Email Obfuscation:** We will not place your email (`robbyj1925@icloud.com`) in plaintext HTML or `mailto:` links. We will either use a serverless contact form (like Formspree) or encode the email via JavaScript so it only renders on the live site.
2. **Secrets Management:** Ensure a `.gitignore` is set up to block any `.env` files. We will never commit API keys (e.g., for the Newsletter service or custom MCP servers) to the public repository.
3. **Personal Media:** Ensure any personal photos uploaded (like the headshot) do not contain sensitive EXIF metadata (location data).

---

## Part 3: File Structure

/Users/robby/Documents/Projects/Personal Website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js          (hamburger toggle + smooth scroll only)
└── assets/
    ├── images/
    │   ├── robby-headshot.webp
    │   ├── blog-thumb-1.webp
    │   ├── blog-thumb-2.webp
    │   └── blog-thumb-3.webp
    └── icons/
