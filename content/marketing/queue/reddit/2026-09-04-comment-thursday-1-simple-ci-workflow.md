---
platform: reddit
type: reply
target: r/SaaS — threads asking about competitor tracking workflows or tools
status: ready
keywords: [competitor tracking workflow, SaaS competitor monitoring, track competitor website changes]
---

For what it's worth, the workflow that actually stuck for us was brutally simple:

Pick 4–5 URLs per competitor. Pricing page, features page, homepage hero, careers. That's it. Everything else changes too often or too rarely to be signal.

Then: automated snapshot every 24hrs, diff of the content, AI classifies the change as pricing/feature/messaging/hiring. If it's high-severity (pricing tier gone, "Contact Sales" appeared, free plan limits changed), it goes to Slack immediately. Everything else rolls up into a weekly email.

The key thing is classification — raw diffs are useless because every competitor pushes CSS tweaks and button color changes constantly. You need the diff AND what category of change it is.

We built this into KompWatch ($49/mo) but honestly you can approximate it with Playwright + a cron job + a one-shot Claude prompt if you want to DIY. Happy to share the prompt template.

(Disclosure: I'm the builder, so take the product mention with a grain of salt — the workflow advice applies regardless of what tool you use.)
