---
title: "Turn Your iPhone Apps Into Python Libraries"
date: "2026-10-18"
excerpt: "mimic records the traffic from apps on your own iPhone, then Claude writes a Python client from every endpoint it saw. The open source repo had 2,762 GitHub stars when I checked it."
thumbnail: "assets/images/blog-thumbnails/turn-your-iphone-apps-into-python-libraries.jpg"
youtubeId: "D28pf006Ch4"
tags:
  - Claude Code
  - Python
  - Open Source
  - Automation
  - Coding
---

Someone on GitHub built a tool that turns the apps on your iPhone into Python libraries. It is called mimic, it is open source under the MIT license, and it had 2,762 stars and 315 forks when I checked on October 14, 2026 (the repo shows about 2.9k now).

## What it is

mimic is by Divy Srivastava, who lists Deno as his employer on GitHub. The simplest way to describe it: mitmproxy plus Claude Code. It records the network traffic from your own app sessions, works out the endpoints and the auth, and then Claude writes a Python client you can import like any other library.

By default the generate step calls Claude Code with the Sonnet model (`claude -p --model sonnet`). You can switch to OpenCode with `--generator opencode`, or use `--prompt-only` to print the prompt with no AI call. So you need Claude Code or OpenCode installed for the last step.

## How it works: three steps

1. **Record.** Run `mimic record`. It starts the proxy and prints the iPhone setup. On the phone: set a manual Wi-Fi proxy to your Mac's LAN IP on port 8080, open `http://mitm.it` in Safari and install the profile, then turn on full trust for the mitmproxy certificate in Certificate Trust Settings. The README warns that the trust step is easy to miss, and nothing works without it.
2. **Use the app.** Open it and use it normally. Every request goes through the proxy.
3. **Generate.** Run `mimic hosts` to see what was captured, `mimic learn <host>` to see the endpoints, and `mimic gen <host>` to write the client file.

You do not install mitmproxy separately. mimic runs it through `uvx` on the first `mimic record`. There is also `mimic doctor` to check that the proxy and Claude are ready.

**No phone needed for web apps.** You can skip the proxy and the certificate. Export "Save all as HAR" from Chrome DevTools and pass it with `--har traffic.har`, or copy a single request as cURL and load it with `Session.from_curl()`.

## The Hinge example

The README's own example is Hinge. After a capture, the generated client looks like this:

```python
from hinge_client import Hinge

acc = Hinge()  # reuses your captured session
recs = acc.get_recommendations()
acc.like(subject_id, comment="hi lol")
```

Three lines to pull your recommendations and like a profile with a comment. If a request gets a 401, the client pulls fresh auth from the proxy once and retries.

## How to install it

The README lists `uv tool install mimic-client`, but that package is not on PyPI (it returned a 404 when I checked). The path that works is to clone the repo and run the install script inside it:

```bash
git clone https://github.com/littledivy/mimic
cd mimic
sh install.sh
```

## The catch

Apps that pin their certificates, like banking apps and Instagram, reject the proxy, so capture fails. The author says `mimic unpin` gets past this with Frida, but it needs a decrypted IPA or a jailbroken device, and I have not tested it. Apps that use DPoP (tokens signed by a key that stays on the device) cannot be replayed at all, and the README says there is no clean workaround.

The bigger rule: mimic is for your own accounts and your own data only. It replays your session, and the README asks you to respect each app's terms of service. Automating an app like Hinge may break those terms.

## My take

This is a clean idea: let the proxy do the capture, let Claude do the boring part of writing the client. For personal automation of web apps you already use, the HAR route is the easiest win. I did not run it on my own machine for this post, so treat the setup above as what the README says, not what I measured.

Sources: [mimic on GitHub](https://github.com/littledivy/mimic), [mitmproxy](https://mitmproxy.org/)
