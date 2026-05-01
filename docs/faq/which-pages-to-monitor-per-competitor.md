# Which Pages Should I Monitor for Each Competitor?

**Short answer:** Start with pricing, then add features or product pages. Job listings are the best leading indicator of upcoming moves if you want early signals.

---

## The priority order

Based on monitoring data across dozens of SaaS competitors, here's how frequently each page type changes and what signals it carries:

| Page type | Change frequency | Signal type |
|---|---|---|
| Pricing page | ~3× per quarter | Reactive — tells you what already changed |
| Feature / product page | Roughly monthly | Current — reflects what they're selling now |
| Changelog / blog | Unpredictable, often noisy | Historical — useful but creates alert fatigue |
| Job listings / careers | Weekly or more | **Leading** — tells you what's coming next |

## Where to start

**1. Pricing page** — Always add this first. Pricing changes are competitive events. You want to know the same day they adjust tiers, raise prices, or add a free plan.

**2. Features or product overview page** — Catches repositioning, new capabilities, and removed claims before they show up in sales conversations.

**3. Careers page** — Optional but powerful. Three ML engineer openings posted before any announcement is a stronger signal than a press release. New AEs hired into a vertical you're not in is a territory signal.

## What to skip (at first)

- Blog and changelog feeds get noisy fast. Add them only if you want weekly digest volume.
- "About us" and legal pages rarely change and mostly add noise.

## Practical setup in KompWatch

1. Add the competitor with their pricing page URL as the primary URL.
2. Set the CSS selector to the pricing section (e.g., `#pricing`, `.pricing-table`) rather than `body` — this reduces false positives from nav/footer changes.
3. For a second tracked URL (job listings), use the careers page URL and select `main` or `.jobs-list` as the selector.

**Tip:** If a competitor's pricing is behind a modal or requires a click, use the parent page and set severity threshold to MEDIUM+ so minor layout changes don't flood your digest.

## FAQ

**"Should I add every page I care about?"** — No. Start with one URL per competitor and expand once you're comfortable with the digest volume. More pages = more noise until you tune selectors.

**"What if their pricing is on the same page as features?"** — That's fine. Use a specific CSS selector like `.pricing-section` to scope the tracked region.

**"My competitor's careers page requires login — can I track it?"** — Not directly. See [Monitoring Login-Required Pages](./monitoring-login-required-pages.md) for alternatives (LinkedIn scraping, RSS feeds).
