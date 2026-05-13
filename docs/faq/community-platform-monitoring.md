# Can KompWatch Monitor Competitor Mentions on Reddit, Hacker News, or Product Hunt?

Competitor mentions on community platforms — Reddit, Hacker News, Product Hunt, and similar forums — are some of the most candid competitive signals available. Here's what KompWatch tracks today and what's coming.

## What KompWatch Tracks Today

KompWatch monitors **first-party competitor websites** — pricing pages, feature pages, blog posts, job listings, and newsrooms — using a headless browser. It does not currently crawl community platforms where your competitors get *mentioned* by others.

| Source | Tracked today? |
|--------|----------------|
| Competitor's own website | Yes |
| Reddit threads mentioning a competitor | Not yet |
| Hacker News discussions | Not yet |
| Product Hunt listings and reviews | Not yet |
| G2 / Capterra review profiles | Workaround (see [Review Monitoring FAQ](./monitoring-competitor-reviews.md)) |

## Is Community Signal Monitoring on the Roadmap?

Yes — and it's actively being built. **Community signal monitoring** (tracking competitor mentions on Hacker News, Reddit, and Product Hunt) is a P1 feature currently in development. Once live, it will let you:

- See when a competitor's product is discussed on Hacker News (launches, Show HN posts, criticism threads)
- Track Reddit threads in relevant subreddits where competitors are mentioned or compared
- Monitor Product Hunt launches by competitors — including upvote counts and comment sentiment

Email [support@kompwatch.com](mailto:support@kompwatch.com) to be added to the early-access list.

## Why Community Signals Matter

Community platforms surface competitive intelligence that never appears on a competitor's own website:

- **Hacker News** — Show HN posts and launch threads surface real-world user reactions, often before any press coverage
- **Reddit** (r/SaaS, r/entrepreneur, category-specific subreddits) — prospects and customers discuss frustrations, pricing, and alternatives openly
- **Product Hunt** — a competitor launch on Product Hunt is a public announcement with immediate social proof data (upvotes, comments, reviews)

These signals are early and candid. A competitor getting dragged in a Reddit thread is often a better buying signal for KompWatch than their pricing page is.

## Workarounds Until Native Support Ships

**Hacker News:**
- Use [HN Algolia search](https://hn.algolia.com/) to set up email alerts for `[competitor name]` mentions — free, instant, no rate limits.
- The competitor's Show HN posts and launch discussions appear in the top results.

**Reddit:**
- Use Reddit's built-in push notifications or a tool like F5Bot (free) to get email alerts whenever a competitor is mentioned in relevant subreddits.
- Monitor subreddits specific to your category (e.g. r/SaaS, r/startups, r/competewatch) for threads where buyers compare tools.

**Product Hunt:**
- Add the competitor's Product Hunt page (`https://www.producthunt.com/products/[slug]`) as a KompWatch URL. KompWatch can detect changes to the upvote count area, description, and review sections. Use CSS selector `#product-makers-reviews` or `.review-card` depending on the current PH markup.
- PH sends email notifications for activity on products you upvote — upvoting a competitor's product gives you instant notifications when reviewers post.

**Combining with KompWatch:**
These community signals pair well with KompWatch's website monitoring. When you see a competitor launch on Product Hunt or get discussed on HN, open KompWatch to check whether they made pricing, feature, or copy changes in the same window. Launches almost always come with website updates.

## What to Watch for on Each Platform

| Platform | High-value signal | What to look for |
|----------|------------------|------------------|
| Hacker News | Product launch, Show HN | "Show HN: [Competitor Name]" — read the comments for criticism and positioning |
| HN | Criticism thread | Posts titled "[Competitor] is doing X" — often surface product problems and switching intent |
| Reddit | Direct comparisons | Threads like "Competitor A vs KompWatch?" — these are your warmest leads |
| Reddit | Churn signals | "[Competitor] raised prices, what else does X?" — direct buying intent |
| Product Hunt | New launch | Upvotes + 1-star reviews in first 24h tell you a lot about positioning and gaps |
| Product Hunt | Review score trend | Declining score over months = churn signal worth tracking |

---
*Related: [Social Media Monitoring](./social-media-monitoring.md) · [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md) · [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md) · [Tracking Competitor Funding and Acquisitions](./tracking-competitor-funding-and-acquisitions.md)*
