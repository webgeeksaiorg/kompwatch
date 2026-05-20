# Can KompWatch Monitor Competitor Mentions on Reddit, Hacker News, or Product Hunt?

Yes. KompWatch now includes **community signal monitoring** — it automatically scans Hacker News and Reddit for competitor mentions and surfaces them alongside your website change alerts.

## What KompWatch Tracks

| Source | Status | Notes |
|--------|--------|-------|
| Competitor's own website | Live | Pricing, features, blog, job listings |
| Hacker News (stories & comments) | Live | Via Algolia search API, last 24h |
| Reddit posts | Live | Across all subreddits, last 24h |
| G2 / Capterra review profiles | Shipping soon | See [Review Monitoring FAQ](./monitoring-competitor-reviews.md) |
| Product Hunt listings | Workaround available | See below |

## How It Works

Once community monitoring is enabled for a competitor, KompWatch scans Hacker News and Reddit once daily:

- **Hacker News** — uses the Algolia HN search API to find stories and comments mentioning the competitor by name, published in the last 24 hours
- **Reddit** — searches Reddit's public API for new posts mentioning the competitor across all subreddits

Each mention becomes a `COMMUNITY` change record in KompWatch. These surface in:

- Your **daily or weekly digest** — grouped with website changes under the competitor
- The **dashboard** — visible in the change feed with severity and confidence scores
- The **MCP server** — accessible via the `get_changes` tool if you use the API

Duplicate mentions (same URL appearing across multiple runs) are filtered automatically using a 48-hour deduplication window.

## Enabling Community Monitoring

Community monitoring is controlled by the **"Track community mentions"** toggle on each competitor's settings page. It defaults to off. Enable it per competitor — it's most useful for direct competitors where HN and Reddit discussions influence buyer decisions.

## Severity Scoring

Community mentions are scored by engagement so you know which to prioritize:

**Hacker News:**
| Score | Severity |
|-------|----------|
| 100+ points or 50+ comments | HIGH |
| 20+ points or 10+ comments | MEDIUM |
| Below that | LOW |

**Reddit:**
| Score | Severity |
|-------|----------|
| 200+ upvotes or 50+ comments | HIGH |
| 30+ upvotes or 10+ comments | MEDIUM |
| Below that | LOW |

HIGH-severity mentions flag situations like a competitor's product getting a viral Hacker News thread or a widely-upvoted Reddit comparison post — signals you want to see quickly.

## Why Community Signals Matter

Community platforms surface competitive intelligence that never appears on a competitor's own website:

- **Hacker News** — Show HN posts and launch threads surface real-world user reactions, often before any press coverage
- **Reddit** (r/SaaS, r/entrepreneur, category-specific subreddits) — prospects and customers discuss frustrations, pricing, and alternatives openly

These signals are early and candid. A competitor getting criticized in a Reddit thread is often a more actionable buying signal than anything on their pricing page.

## Product Hunt

Product Hunt isn't included in the daily cron yet. In the meantime:

- Add the competitor's Product Hunt page (`https://www.producthunt.com/products/[slug]`) as a KompWatch URL directly — KompWatch can detect changes to the description, review sections, and upvote areas using CSS selector `.review-card` or similar.
- PH also sends email notifications if you upvote a competitor's product, giving you real-time activity alerts.

---
*Related: [Social Media Monitoring](./social-media-monitoring.md) · [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md) · [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md) · [Tracking Competitor Funding and Acquisitions](./tracking-competitor-funding-and-acquisitions.md)*
