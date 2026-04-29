# Switching from Changeflow to KompWatch

KompWatch and Changeflow both monitor webpages for changes and send AI-generated summaries. If you're evaluating a switch, this guide covers what's different and how to get started quickly.

## What's Different

| | KompWatch | Changeflow |
|---|---|---|
| Starting price | Free (2 competitors) | $4/mo (no free tier) |
| Headless browser | ✓ Playwright (JavaScript sites rendered) | ✗ Static HTML only |
| CSS selector targeting | ✓ Watch specific page sections | ✗ Full-page only |
| Job listing tracking | ✓ Included | ✗ Not available |
| Structured digest format | ✓ Daily/weekly digest email | ✗ Per-change alerts only |
| Tech stack detection | ✓ Pro+ | ✗ Not available |

The most meaningful difference for most teams: **headless browser rendering**. If you're monitoring modern SaaS sites built with React, Next.js, or Vue — Changeflow fetches HTML only, which means JavaScript-rendered content (most pricing pages, feature pages, dynamic content) is partially or fully missed. KompWatch uses Playwright (headless Chromium) to fully render every page before comparing snapshots.

See [JavaScript/SPA site monitoring](./monitoring-javascript-spa-sites.md) for details.

## How to Switch

You can't import monitors directly from Changeflow, but setup is fast — most teams are monitoring within 10 minutes.

1. **Sign up at [kompwatch.com](https://kompwatch.com)** — free, no credit card required.
2. **Add the same URLs** you were monitoring in Changeflow. See [How to Add a Competitor](./adding-competitors.md) for steps.
3. **Set CSS selectors** to target the specific sections you care about (e.g. `.pricing-table`, `#features`). This reduces noise from navigation and footer changes — something Changeflow doesn't offer.
4. **Configure your alert preferences** in Settings → Notifications. KompWatch consolidates changes into daily digests (Pro) or weekly digests (Free) instead of firing per-change alerts.

Your first snapshot runs within a few minutes. You'll receive your first digest on your next scheduled cycle.

## Can I Run Both at the Same Time?

Yes. KompWatch's free tier (2 competitors) lets you monitor the same pages side-by-side with Changeflow for a month before deciding. This is the lowest-risk way to compare digest quality and coverage — especially for JavaScript-heavy pages where the difference is most visible.

## Will I Lose My Changeflow History?

KompWatch does not import historical snapshot data from Changeflow. Your monitoring history restarts from the moment you add a competitor to KompWatch. Change detection begins with the second snapshot — typically within 24 hours on the Free plan.

If you're on Changeflow's paid plan, consider timing your switch at the end of a billing cycle.

## Monitoring Frequency

| Plan | Snapshot frequency | Digest cadence |
|------|--------------------|----------------|
| Free | Daily | Weekly |
| Pro | Every 6 hours | Daily |
| Team | Hourly | Real-time |

Changeflow's monitoring frequency varies by plan. KompWatch Free runs daily snapshots — comparable to Changeflow's entry level. Pro runs every 6 hours, covering most pricing and feature changes before your next sales call.

## Questions About the Switch?

Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll help you set up the same monitors you had in Changeflow, including suggesting CSS selectors for common competitor pages.

---
*For a full feature comparison, see [KompWatch vs Changeflow →](https://kompwatch.com/vs-changeflow)*
