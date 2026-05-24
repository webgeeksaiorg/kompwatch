# Can KompWatch Monitor Competitor Reviews on G2, Capterra, or Trustpilot?

KompWatch is designed for **first-party website monitoring** — it reads what competitors publish on their own domains. Third-party review platforms (G2, Capterra, Trustpilot, Gartner Peer Insights, etc.) are not crawled directly.

## Why Review Sites Are Out of Scope

G2, Capterra, and similar platforms actively block automated scrapers, require authentication for detailed data, and change their page structure frequently. Attempting to monitor them would produce brittle, unreliable signal.

More importantly, review data on those platforms updates slowly (days to weeks per review) and the platforms themselves surface competitive comparisons (grids, category leaders) — you don't need real-time snapshots to track these effectively.

## What KompWatch *Can* Catch

Even without direct review monitoring, KompWatch captures several review-adjacent signals:

| Signal | How KompWatch tracks it |
|--------|------------------------|
| **"As seen on G2" badges / award banners** | If a competitor adds a G2 Leader badge or Capterra award to their homepage or pricing page, KompWatch detects the HTML/image change |
| **Testimonial refreshes** | New customer logos or quotes added to a competitor's website trigger a `GENERAL` or `CONTENT` change |
| **Press / newsroom announcements** | If a competitor posts a "Named G2 Leader in..." press release on their own newsroom, KompWatch picks it up |
| **Pricing page copy using social proof** | Changes like "Rated #1 on Capterra" appearing in pricing copy are caught as pricing-page changes |

To maximize coverage, add the competitor's **homepage**, **pricing page**, and **newsroom or press page** as separate CSS-selector-targeted monitors.

## Workarounds for Direct Review Monitoring

Until KompWatch adds native review-platform support, these approaches work well:

- **G2 alerts** — G2 sends email notifications when competitors receive new reviews, update their profile, or move in category rankings. Sign up at g2.com with a company email.
- **Capterra comparison pages** — Capterra's comparison URLs are stable and public. Add `https://www.capterra.com/p/<slug>/` as a KompWatch competitor URL to detect profile changes (description, features listed, pricing section).
- **Trustpilot public pages** — Trustpilot company pages (`https://www.trustpilot.com/review/<domain>`) are publicly accessible. KompWatch can snapshot these and detect new review counts, rating changes, or response patterns — add as a custom competitor URL.

## Setting Up Trustpilot / Capterra as a KompWatch Monitor

1. Go to **Competitors → Add Competitor** in your KompWatch dashboard.
2. Enter the review platform URL for the competitor (e.g. `https://www.trustpilot.com/review/rivalcompany.com`).
3. Set a CSS selector targeting the rating or review count container. Common selectors:
   - Trustpilot: `[data-rating-typography]` or `.star-rating`
   - Capterra: `.overall-rating` or `.reviews-count`
4. Save and run your first snapshot. Change detection begins after the second snapshot.

> **Note:** Review platform HTML structures change without notice. If monitoring breaks, check [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md) — the platform may have introduced bot protection on that URL.

## Is Native Review Monitoring on the Roadmap?

Yes — **native G2 and Capterra review tracking is on the roadmap**. Once live, it will let you:

- Track your competitors' G2/Capterra review counts, ratings, and category rankings automatically
- Get alerts when a competitor's review score or ranking shifts
- See review-site changes alongside website changes in a single digest

Until then, the Trustpilot and Capterra direct-monitoring workarounds above work well for most teams. If G2/Capterra monitoring is critical to your workflow, email [support@kompwatch.com](mailto:support@kompwatch.com) to be notified the moment it ships.

---
*For related topics, see [Social Media Monitoring](./social-media-monitoring.md) and [What Does KompWatch Track](./what-does-kompwatch-track.md)*
