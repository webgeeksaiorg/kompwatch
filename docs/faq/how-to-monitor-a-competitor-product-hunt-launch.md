# How to Monitor a Competitor's Product Hunt Launch

When a competitor launches on Product Hunt, the 24–72 hours that follow are among the most information-dense you'll see: pricing changes, hero rewrites, feature grid additions, and changelog entries often pile up in quick succession as the team responds to hunter feedback in real time. KompWatch is designed to catch every on-site change during this window.

---

## Why Product Hunt Launches Are Different

A standard product update gets a blog post and maybe a changelog entry. A Product Hunt launch involves:

- **Limited-time launch pricing** visible on the competitor's own site, often only for the 24-hour hunt window
- **3–5 homepage edits on launch day** — hero copy, subheadlines, and CTAs get updated in response to comments and hunter reactions
- **A changelog or roadmap page that goes live** post-launch (often wasn't public before)
- **G2 / Capterra / social proof widgets appearing** within 48–72 hours as review requests go out to early users
- **Feature grid additions** as the team documents features that weren't formally listed pre-launch

None of these emit a press release or an RSS entry — they show up as on-site changes, which is exactly what KompWatch monitors.

---

## Setting Up a Launch Monitor Before the Hunt Goes Live

If you know a competitor launch is coming (LinkedIn post, PH "upcoming" listing, social chatter), set up monitoring *before* the hunt day:

1. **Go to Competitors → Add Competitor** in the KompWatch dashboard.
2. Add their homepage, pricing page, and features/product page as separate tracked URLs.
3. If they have a public changelog (`/changelog`, `/whats-new`, `/releases`), add that too.
4. Set CSS selectors to filter noise — target `.hero`, `.pricing`, `[data-section="features"]`, and the changelog entry list rather than the full page.
5. On the **Pro plan**, snapshots run every 6 hours. KompWatch captures a baseline immediately on add, so all changes from that point forward are diff'd against the pre-launch state.

> **Team plan tip:** Team plan snapshots run every hour. If you want near-real-time coverage on launch day, upgrade before the hunt goes live and downgrade after the 30-day launch window if needed.

---

## What to Track During the 30-Day Launch Window

| Page | What you're looking for |
|---|---|
| Homepage / hero | Copy changes in response to hunter feedback — these reveal how positioning is evolving |
| Pricing page | Launch discounts appearing and expiring; new tiers added post-launch |
| `/features` or `/product` | New feature bullets added as buyers ask "do you do X?" |
| `/changelog` or `/whats-new` | Post-launch fixes and follow-on features (rapid iteration usually follows a PH launch) |
| `/integrations` | New integration logos added as partnerships get confirmed |

KompWatch will diff all of these pages on every snapshot cycle and surface the changes by severity. Launch-day activity typically generates multiple HIGH-severity changes on the same day — that cluster is your signal to prioritise the competitor for a battlecard review.

---

## After Launch Day: What Settles, What Stays High-Signal

By day 3–5, the rapid iteration slows. Focus shifts to:

- **Pricing page** — Was the launch discount extended or removed? Did a new tier formalise?
- **Features page** — Have they back-filled feature descriptions? Are there new items compared to pre-launch?
- **Social proof zone** — First G2/Capterra badge or review widget appearing (usually days 5–14)
- **Job listings** — Post-launch hiring signals what they're building next

After 30 days, change rate normalises. At that point you can reduce snapshot frequency (Pro → Free for that competitor) and rely on weekly digest summaries rather than real-time Slack alerts.

---

## Setting Up Slack Routing for Launch Day Alerts (Team Plan)

On the Team plan, you can route a specific competitor's HIGH/CRITICAL severity changes to a dedicated Slack channel for launch window coverage:

1. **Settings → Integrations → Slack** — connect your workspace if not already done.
2. Under **Per-competitor settings**, select the PH-launching competitor and enable Slack routing.
3. Create a `#competitor-[name]-launch` Slack channel and point the integration there.
4. Set severity filter to **High + Critical** to reduce noise from minor tweaks.

After the launch window, remove the per-competitor Slack rule and return to digest-only.

---

## Common Questions

**What if I don't know about the launch until after it happens?**
Add the competitor on any post-launch day — KompWatch takes a baseline snapshot immediately, so going forward you'll catch every edit. For pre-launch state, most PH-launched competitors publish a pre-launch "coming soon" page; the PH listing itself links to the site. If you want the full before/after picture, add the competitor as soon as you see the PH upcoming listing.

**Does KompWatch monitor the Product Hunt listing itself?**
No — KompWatch monitors competitor-owned pages (their website, docs, pricing). For the PH listing comments and upvote count, you'd need to monitor Product Hunt directly (`producthunt.com/posts/[product]`) — which you can do as a separate URL. The launch signals that matter for competitive positioning (pricing, positioning, features) all land on the competitor's own site.

**What if their site is a React SPA and doesn't render on first load?**
KompWatch uses headless Chromium via Playwright, so JS-rendered SPAs capture correctly. Dynamic feature grids, React changelogs, and client-side pricing tables are all rendered before the snapshot is taken.

---

## Related FAQs

- [When to update a battlecard after a competitor launch →](./when-to-update-battlecard-after-competitor-launch.md)
- [Monitoring competitor changelog and release notes →](./monitoring-competitor-changelog-and-release-notes.md)
- [Monitoring competitor product launches →](./monitoring-competitor-product-launches.md)
- [Which pages should I monitor per competitor →](./which-pages-to-monitor-per-competitor.md)
- [Setting CSS selectors →](./css-selectors.md)
- [How fast will I know about a competitor change →](./how-fast-will-i-know-about-a-competitor-change.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
