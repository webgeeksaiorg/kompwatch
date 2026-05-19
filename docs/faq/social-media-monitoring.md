# Does KompWatch Monitor Competitor Social Media?

KompWatch is built for **web-page monitoring** — it takes snapshots of competitor websites and detects changes to their copy, pricing, feature lists, and blog posts. Social media feeds (Twitter/X, LinkedIn, Instagram, etc.) are not currently part of what KompWatch crawls.

## What KompWatch Tracks Today

| Source | Tracked? |
|--------|----------|
| Competitor website (any URL) | Yes |
| Pricing pages | Yes |
| Blog / changelog | Yes |
| Job listings page | Yes |
| Product feature pages | Yes |
| Hacker News mentions | Yes — via [Community Monitoring](./community-platform-monitoring.md) |
| Reddit mentions | Yes — via [Community Monitoring](./community-platform-monitoring.md) |
| G2 / Capterra review profiles | Yes — see [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md) |
| Twitter/X feed | No |
| LinkedIn posts | No |
| Press releases (if on their site) | Yes |

## Why Major Social Platforms (Twitter/X, LinkedIn) Are Out of Scope

Twitter/X and LinkedIn actively block automated access, change their APIs frequently, and require per-platform OAuth integrations. Scraping them at scale would produce unreliable signal and risk violating platform terms of service.

KompWatch focuses on what competitors **publish on their own site** and on open community platforms (HN, Reddit, G2) — that's where the most actionable competitive signals live.

## Workarounds for Social Listening

Until native social monitoring ships, here are approaches KompWatch customers use:

- **Google Alerts** — set up `site:linkedin.com/company/rivalname` or keyword alerts for your competitor's name. Free and surprisingly effective for press coverage.
- **TweetDeck / social listeners** — tools like Mention, Brand24, or even native Twitter search can alert you when a competitor's handle is mentioned.
- **Monitor their newsroom / press page** — add the competitor's press or newsroom URL as a KompWatch competitor. Most companies publish notable announcements there before or alongside social.
- **Job listings as a signal** — KompWatch tracks job listing pages well. A sudden burst of engineering job postings is a strong product-launch signal. See [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md).

## Is Social Monitoring on the Roadmap?

We're evaluating it. If social monitoring is important to you, email [support@kompwatch.com](mailto:support@kompwatch.com) and tell us which platforms matter most. Customer demand shapes what we build next.

---
*Related: [Community Platform Monitoring](./community-platform-monitoring.md) (Reddit, Hacker News, Product Hunt) · [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md)*

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
