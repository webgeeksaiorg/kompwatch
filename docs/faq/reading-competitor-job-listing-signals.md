# Reading Competitor Job Listings as Competitive Intelligence

Job postings are one of the best public signals competitors accidentally broadcast. Most teams check career pages manually, occasionally, when they remember. KompWatch tracks them automatically — and the patterns it catches are often worth more than the individual postings.

## Why Job Listings Matter

Hiring is a lagging indicator of public announcements but a *leading* indicator of product roadmap.

When a competitor posts job listings, they're advertising intent:

| Listing pattern | What it likely signals |
|---|---|
| 3–5 ML / AI engineer roles in 4–6 weeks | Building or expanding an AI feature; expect a launch in 6–12 months |
| Sales engineers + solutions consultants | Moving upmarket or launching an enterprise tier |
| New "Head of Partnerships" or "Head of Channel" | Ecosystem play — expect integrations or partner program |
| Support/CSM roles at scale | Rapid growth or churn problem being addressed |
| Security / compliance engineer | Targeting regulated industries (healthcare, finance, gov) |
| First marketing hire | Just raised or about to go to market seriously |

None of this is speculative. Hiring is expensive. Companies don't post roles they don't intend to fill.

## How KompWatch Tracks This

KompWatch automatically checks `/careers`, `/jobs`, and `/about#careers` for every competitor you monitor. New listings appear as `JOB` type changes in your digest.

Job changes are classified by severity:

- **LOW** — a single new role, unrelated to core product
- **MEDIUM** — 2–4 new roles, or a notable strategic hire (VP, Head of X)
- **HIGH** — cluster of roles signaling a new product direction or market entry

MEDIUM and HIGH job changes are always included in your weekly digest. Pro plan subscribers receive them on every 6-hour snapshot cycle.

## Setting a Custom Careers URL

If a competitor uses a non-standard careers URL (e.g. `/work-with-us`, `/team`), or uses Greenhouse, Lever, or Ashby:

1. Add the competitor as usual with their main URL
2. In **Competitor Settings**, add a second entry with the careers URL directly and the CSS selector `.opening-list` or whatever wraps the job listings on that page

This lets you track Greenhouse-hosted job boards (e.g. `boards.greenhouse.io/yourcompetitor`) that wouldn't be caught by the default pattern.

## What to Do With This Signal

Job signals are most useful when you log them in context. Recommended workflow:

1. KompWatch surfaces "Competitor X: 4 new ML engineer roles" in your digest
2. You or your team checks LinkedIn for the actual role descriptions (public)
3. Note the team structure being built — what problem are these roles solving?
4. Add to your competitive notes; revisit in 6 months when the feature ships

This is the kind of early warning that lets you brief your sales team *before* a competitor announces a feature, not after a customer asks about it.

## FAQ

**Does KompWatch track the job descriptions, or just the listing count?**
KompWatch captures the full rendered content of the careers page, so the AI summary in your digest includes the role title, location/remote status, and team (if listed on the page). Full job descriptions hosted on separate pages (e.g. each posting on Greenhouse) are not individually tracked.

**What if a competitor removes job listings?**
Removed listings are tracked too. A sudden pull of multiple postings can signal a hiring freeze, layoffs, or a strategy change — equally useful to know.

**Can I see a history of job listing changes?**
Yes — the **Changes** tab on any competitor shows a timeline of all detected changes, including job listing adds and removals, with timestamps and AI summaries.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
