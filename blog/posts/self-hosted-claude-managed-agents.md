---
title: "Self Hosted Claude Managed Agents: Links and Who Can Use It"
date: "2026-11-14"
excerpt: "Anthropic now lets you run the whole Claude Managed Agents service in your own cloud: the server, a PostgreSQL database and the workers. Here are the official links, who can get access, and the limits."
thumbnail: "assets/images/blog-thumbnails/self-hosted-claude-managed-agents.jpg"
tags:
  - Claude
  - Anthropic
  - AI Agents
  - Claude API
  - Managed Agents
guide: true
---

Get the Claude Code skills and workflows I use to automate my content and my business in the [AI Academy community on Skool](https://www.skool.com/ai-academy-with-robby-6849/about).

## Links

- Announcement (Anthropic, November 12, 2026): [Operate Claude Managed Agents inside your security perimeter](https://claude.com/resources/articles/self-hosted-claude-managed-agents)
- Docs: [Self-hosted Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/self-hosted)
- Quickstart: [Get started with self-hosted Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/self-hosted/quickstart)
- Model providers: [Inference provider](https://platform.claude.com/docs/en/managed-agents/self-hosted/inference-provider)
- Limits: [Differences from the hosted service](https://platform.claude.com/docs/en/managed-agents/self-hosted/differences)

## Who can use it

It is a private beta. Anthropic's words: "Contact your Anthropic account team to request access." The release archive is only available after you get access. If your Claude Console organization already has access, sign in to the Console and switch to that organization.

The docs name only the account team route, and no Claude plan is listed. I am on Max with no account team, so I could not test it. Everything on this page comes from Anthropic's docs.

## How it works

The docs split Managed Agents into three options:

| Option | Sandboxes | Service | Model |
|---|---|---|---|
| Cloud sandboxes (default) | Anthropic | Anthropic | Anthropic |
| Self-hosted sandboxes | You | Anthropic | Anthropic |
| Self-hosted Managed Agents (new) | You | You | Anthropic, or a provider that you choose |

With the new option, you run these parts in your own cloud or data center:

- **Server (`cma-server`):** serves the API, runs the agent loop, and stores agents, sessions and session history.
- **Database:** PostgreSQL 16 or later. Without one, a restart erases the data.
- **Workers:** take work from the server and run the agent's shell and file tools in your sandboxes.

Model calls go to the Claude API by default. You can send them to Amazon Bedrock, Claude Models on Google Cloud, Microsoft Foundry, or your own model gateway.

The API is the same as the hosted service, so the SDK and the `ant` CLI work with your server.

If your organization has access, the quickstart starts everything on one machine with Docker Compose. You need the release archive, a Claude API key, Docker with the Compose plugin, a host with at least two CPUs, `openssl` and the `ant` CLI. The docs say the Compose stack is for development, not production. For production, Anthropic recommends the release's Helm charts on Kubernetes.

For the hosted version and the self-hosted sandboxes, read [Claude Code sets up a cloud agent in one command](/blog/claude-code-sets-up-a-cloud-agent-in-one-command.html).

## Watch out

- It is not offline. For each model call, the server sends the conversation so far, with tool inputs and tool results, to the model provider you pick.
- Some features are not on your server: webhooks, scheduled deployments, dreams, cloud environments, the Files API, `mcp_oauth` vault credentials and the prebuilt docx, pdf, pptx and xlsx skills.
- You secure the server, the database and the sandboxes. The docs warn that the agent's bash tool is a real shell with the worker's permissions, so run workers in disposable containers or VMs.
- You install each release yourself.
- The server is not open source. It uses the Software License Agreement: Claude Managed Agents Server.

Sources: [Anthropic announcement](https://claude.com/resources/articles/self-hosted-claude-managed-agents), [Self-hosted overview](https://platform.claude.com/docs/en/managed-agents/self-hosted), [Quickstart](https://platform.claude.com/docs/en/managed-agents/self-hosted/quickstart), [Inference provider](https://platform.claude.com/docs/en/managed-agents/self-hosted/inference-provider), [Differences from the hosted service](https://platform.claude.com/docs/en/managed-agents/self-hosted/differences)
