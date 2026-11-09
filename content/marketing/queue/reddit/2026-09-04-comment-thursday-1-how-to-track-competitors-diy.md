---
platform: reddit
type: comment
target: r/SaaS or r/startups — thread about how to track competitors
status: queued-no-creds
keywords: [competitor tracking, monitor competitor website, competitive intelligence free, track competitor pricing]
---

We dealt with this too. Ended up building our own thing after pricing out Crayon ($25K+/year) and realizing we just needed three things: 1) know when a pricing page changed, 2) know when key feature copy changed, 3) get a plain-English summary instead of a raw diff.

Before that, the workflow was: 12 pinned browser tabs, every Monday, 45 minutes, Slack notes to myself I'd ignore by Tuesday.

If you're early-stage or don't want to roll your own: there are simpler tools now in the $50–100/mo range that do this without the enterprise contract. If you want to DIY it, a cron job hitting `curl`, diffing with `diff`, and emailing the output will get you 80% of the way there in an afternoon. The tricky part is JavaScript-heavy pages — you need a headless browser (Playwright or Puppeteer) or the diff is useless.

The hardest thing we still wrestle with: separating noise (cookie banners, timestamps, nav updates) from signal (pricing, feature copy, CTAs). That's where having something that understands context helps more than raw HTML diffs.

Good luck — what competitors are you trying to track?
