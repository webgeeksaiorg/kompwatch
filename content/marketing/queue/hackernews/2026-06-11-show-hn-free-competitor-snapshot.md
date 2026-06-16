---
platform: hackernews
type: post
status: ready
keywords: [competitor monitoring, free snapshot, Playwright scraping, headless browser, competitor website changes]
score: 8.5/10
ticket: db53
---

# Show HN: KompWatch – Free instant competitor snapshot, no signup

**HN Title:** Show HN: KompWatch – Free instant competitor snapshot (no account, Playwright-rendered)

**Body:**

I spent two years manually checking competitor websites every Monday morning. Six browser tabs, twelve companies. Half the time I'd forget to check. The other half I'd miss a change that happened on Wednesday.

Built KompWatch to automate it — Playwright snapshots, AI diff summaries, weekly/daily email digests. $49/mo for small teams.

This week I shipped a free snapshot feature: paste any public URL, get a full Playwright-rendered snapshot back in your browser. No account. No email capture. No credit card. Just paste a URL and see what the page actually looks like after all the JavaScript runs.

The reason this matters: most competitor pages are SPAs now. What you get from curl or Google Cache is basically an empty shell and a JS bundle. The actual pricing tiers, feature tables, and CTAs load client-side. A lot of monitoring tools — and most quick manual checks — are looking at the wrong thing.

The snapshot runs headless Chromium, waits for network idle, captures both a screenshot and the rendered HTML. Takes 5-10 seconds. Works on most sites, breaks on ~15-20% that have aggressive bot detection (Cloudflare challenges, Distil Networks). That failure rate is something I'm still working on.

Two things I learned building this:

1. Diffing rendered HTML is much noisier than diffing the text content. Tracking headings, pricing copy, and CTAs specifically — and ignoring class names, tracking pixels, and counter animations — is what makes alerts readable instead of just noise.

2. AI summarization isn't magic, but it's the difference between "here's a 200-line diff" and "competitor removed the $199/mo tier." That translation step is what makes people actually open the alerts.

The snapshot is at kompwatch.com — enter any competitor URL on the homepage. Curious what you think, especially if you've dealt with SPA-heavy competitor sites.

---

## Self-check (internal)

- Founder voice, first person: ✓
- No banned phrases: ✓
- Specific numbers (two years, six tabs, twelve companies, $49/mo, 5-10 seconds, 15-20%): ✓
- Honest about limitations (bot detection, failure rate): ✓
- Technical details appropriate for HN (Playwright, headless Chromium, network idle, Distil Networks): ✓
- Vulnerability shown ("still working on" SPA failures): ✓
- No hedging: ✓
- Score: 8.5/10 — READY
