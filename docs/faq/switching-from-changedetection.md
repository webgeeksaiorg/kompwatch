# Switching from ChangeDetection.io to KompWatch

ChangeDetection.io and KompWatch both watch websites for changes — but they're built for different audiences. ChangeDetection.io is a general-purpose change tracker; KompWatch is purpose-built for competitive intelligence, with AI that interprets *why* a change matters, not just *that* something changed.

---

## Why Teams Switch from ChangeDetection.io

The most common reasons:

- **No competitive context** — ChangeDetection.io tells you that content changed; it can't tell you whether your competitor repriced, shipped a new feature, or repositioned their product. KompWatch classifies every change by type (PRICING, FEATURE, CONTENT, JOB, TECH) and writes an AI summary in plain English.
- **Maintenance overhead (self-hosted)** — Many ChangeDetection.io users run the Docker container themselves. That means you're responsible for uptime, updates, and debugging when something stops working. KompWatch is a managed SaaS — no infrastructure to maintain.
- **Alert noise** — ChangeDetection.io fires on any text match, which means cookie banners, ad rotations, dynamic timestamps, and A/B test variants all generate alerts. KompWatch scores severity (LOW → CRITICAL) and groups changes into a digest so you only act on what matters.
- **No digest format** — ChangeDetection.io sends per-change notifications. KompWatch aggregates competitor changes into a digest email (daily for Pro, weekly for Free) — one concise briefing instead of a stream of individual alerts.
- **No change history** — ChangeDetection.io's history view is minimal. KompWatch keeps a 90-day change timeline (1 year for Pro, 2 years for Team) with full filtering and CSV/JSON export.

---

## What Carries Over

Your ChangeDetection.io watch list becomes your KompWatch competitor list. The concepts map cleanly:

| ChangeDetection.io | KompWatch equivalent |
|---|---|
| Watch URL | Competitor URL |
| Check interval | Snapshot schedule (Free: daily, Pro: every 6h, Team: hourly) |
| Include/exclude filters | CSS selector (scope monitoring to a specific element) |
| Notification | Slack/email alert + digest |
| Diff view | AI change summary + raw HTML diff in dashboard |
| "Change detected" | Change with type, severity, content zone, and signal score |

---

## Migration Steps

**Step 1 — Export your ChangeDetection.io watch list**

In ChangeDetection.io, go to **Settings → Export** to download your watch list as an OPML or text file, or simply note the competitor URLs you care about.

**Step 2 — Sign up for KompWatch**

Go to [kompwatch.com](https://kompwatch.com) and create a free account. No credit card required — the free tier monitors 2 competitors with daily snapshots.

**Step 3 — Add your competitors**

Go to **Dashboard → Add Competitor**. For each competitor, paste their URL and optionally add a CSS selector to focus monitoring (e.g., `.pricing-table` or `#features-list`). This is the KompWatch equivalent of ChangeDetection.io's include/exclude filters. Leave it blank to monitor the full page.

**Step 4 — Wait for a baseline snapshot**

KompWatch takes an initial snapshot in the next cron cycle. Changes aren't reported until a second snapshot shows a difference. You'll typically see your first digest within 24–48 hours.

**Step 5 — Shut down your ChangeDetection.io setup**

Once you've verified KompWatch is capturing your competitors correctly, stop your ChangeDetection.io Docker container (or cancel the hosted subscription). For self-hosted setups, you can keep the container as a backup while you evaluate — there's no conflict.

---

## Key Differences to Expect

**No configuration for "what counts as a change."** ChangeDetection.io lets you write regex filters and XPath rules to define what triggers an alert. KompWatch uses AI to make that judgment automatically — you don't need to write rules, but you also can't override the AI's assessment. You can set a minimum severity threshold in Settings if you want to filter to HIGH and CRITICAL only.

**You'll get fewer alerts — and that's intentional.** ChangeDetection.io fires on every match. KompWatch digests changes into one email that covers all competitors at once. If you were getting 15 individual alerts per week, expect 1–2 digest emails.

**AI summaries replace diff views.** Instead of a text diff, you get a sentence explaining what changed. The raw diff is available in the dashboard for any change.

**SPA/JS-heavy sites are handled automatically.** ChangeDetection.io added Playwright support but it requires manual configuration per watch. KompWatch uses Playwright by default for every competitor — no setup needed.

---

## Pricing Comparison

| | KompWatch | ChangeDetection.io |
|---|---|---|
| Free / self-hosted | 2 competitors, daily snapshots | Free self-hosted (Docker) |
| Paid tier | $49/mo Pro — 10 competitors, 6h snapshots | ~$15/mo hosted |
| AI summaries | ✓ Included | ✗ Not available |
| Digest format | ✓ Daily/weekly | ✗ Per-change alerts only |
| Change history | ✓ 90 days (Free), 1–2 years (Pro/Team) | ✗ Limited |
| Managed SaaS | ✓ | ✗ (self-hosted) or ✓ (hosted plan) |
| Built for CI | ✓ | ✗ (general website monitoring) |

---

## Common Questions

**I have complex regex filters in ChangeDetection.io. Can I replicate them?**

Not directly. KompWatch uses AI to determine change significance rather than regex rules. For scoping, use a CSS selector to target the section you care about (e.g., `.pricing-section`). If you need fine-grained filtering that CSS selectors don't cover, email [support@kompwatch.com](mailto:support@kompwatch.com) and we can advise on the best setup.

**Can I keep ChangeDetection.io running alongside KompWatch?**

Yes. There's no conflict. Some teams run both for a week to compare output before fully switching.

**Does KompWatch handle cookie consent banners?**

Yes — KompWatch has built-in cookie banner handling. See [Cookie Consent Banners and GDPR Overlays](./cookie-consent-banners-and-gdpr-overlays.md).

**What if a competitor uses a SPA (React/Next.js)?**

KompWatch uses a real headless Chromium browser via Playwright for every snapshot — no extra configuration needed. See [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md).

---

## Related Articles

- [How Monitoring Works](./how-monitoring-works.md)
- [Adding Competitors](./adding-competitors.md)
- [CSS Selectors for Competitor Monitoring](./css-selectors.md)
- [Switching from Visualping](./switching-from-visualping.md)
- [Switching from a DIY Playwright Scraper](./switching-from-playwright-scraper.md)

---

*Need help migrating? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll reply within 24 hours.*
