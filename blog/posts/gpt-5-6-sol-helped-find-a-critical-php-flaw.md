---
title: "GPT-5.6 Sol Helped Find a Critical PHP Flaw (PHP2Shell)"
date: "2026-10-27"
excerpt: "PHP2Shell is a pair of critical PHP bugs that can let a stranger run code on your server. Calif found the first with GPT-5.6 Sol, Wiz found both with Gemini 4 Argon and GPT-5.6 Sol. Here is how to check your version and what to update to."
thumbnail: "assets/images/blog-thumbnails/gpt-5-6-sol-helped-find-a-critical-php-flaw.jpg"
youtubeId: "kCb_x3mTzRA"
tags:
  - Security
  - PHP
  - OpenAI
  - AI Tools
  - Web Development
---

GPT-5.6 Sol just helped find a critical hole in PHP. W3Techs says PHP runs 69.3% of the websites where it can tell the server language (its chart is dated October 23, 2026). And this hole can let a stranger run code on your server.

The bugs are known as PHP2Shell. On October 21, the PHP project shipped fixes for two critical vulnerabilities that, in its words, "can allow unauthenticated remote code execution."

## How the bug works

When your PHP runs out of memory in the middle of a request, it can skip its cleanup. A later request then trusts memory your server already freed.

It is in PHP itself, so updating your WordPress or your plugins does not fix it. Cloudflare says the same: updating website code or plugins alone does not fix these vulnerabilities. Calif traced one affected path back to PHP 5.4.0.

## Who found it

- **Calif** found the first bug with GPT-5.6 Sol, a few days into its audit, as part of OpenAI's Patch the Planet initiative.
- **Wiz** found both bugs on its own, using Wiz Atlas, Gemini 4 Argon and GPT-5.6 Sol.

So this was not an OpenAI only find. And Calif adds an honest note: no model can unearth "all bugs" with simple prompts, at least for now. Its researcher knew where to look.

## It leaked before release day

Cloudflare says the vulnerability leaked before the official release date, and that it saw attack traffic aimed at its customers. Cloudflare gives no counts, so I will not guess at how many sites were hit.

## Check your PHP version

Run this on your server:

```bash
php -v
```

The fixed releases are:

- 8.5.12
- 8.4.27
- 8.3.36
- 8.2.35

Then restart every PHP worker you run. Old processes keep running the vulnerable code until they restart.

On 8.1 or older, the PHP project ships no new release. Upgrade to a supported version, or ask your hosting or LTS vendor whether they have a backported fix.

## OpenAI's checker

OpenAI also shipped an open source checker, [php2shell-checker](https://github.com/openai/php2shell-checker), as a Codex skill. It reads your site's PHP headers and says OK, potentially vulnerable, or unknown if the headers are hidden. It never sends an exploit to your site.

It does have one limit. OK only means the advertised version number looks fixed. The README says it does not verify the installation, so `php -v` on the server is still the real check.

For more on the model behind the find, see [GPT 5.6: OpenAI's most powerful model is here (but locked)](/blog/gpt-5-6-openais-most-powerful-model-is-locked.html). The other model Wiz used is covered in [Gemini 4 Argon beats Opus 5.5 (mostly)](/blog/gemini-4-argon-beats-opus-5-5-mostly.html).

Sources: [PHP security advisory](https://www.php.net/archive/2026.php), [OpenAI: Patch the Planet](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/), [Calif write up](https://calif.io/php2shell/), [Wiz Research](https://www.wiz.io/blog/php2shell-php-rce), [Cloudflare](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/), [OpenAI php2shell-checker](https://github.com/openai/php2shell-checker), [W3Techs](https://w3techs.com/technologies/details/pl-php)

Watch the Short above for the walkthrough. If you want the Claude Code skills and workflows I use to automate my content and my business, join the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).
