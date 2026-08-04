# Can I Use KompWatch to Monitor a Competitor Intelligence Tool (Like Spyglass)?

**Short answer:** Yes. KompWatch monitors any public website — including other CI tools. If Spyglass, Klue, Crayon, or any competitor's pricing page is publicly accessible, you can track it.

---

## Why teams do this

If you sell a product that competes with other CI tools, you need to monitor those tools just like any other competitor. KompWatch doesn't care what category your competitor is in — it monitors URLs.

Common use cases:
- **Vendor evaluation:** You're comparing CI tools and want to track price changes across Spyglass, Klue, and Ravenseer simultaneously before committing to one.
- **Competitive positioning:** You monitor a competing CI tool's pricing page to catch when they adjust tiers, launch new plans, or introduce free trials — which affects your own positioning.
- **Market research:** You track a CI tool's job listings page to see when they're scaling up sales or engineering — a signal for their growth trajectory.

---

## What KompWatch can detect on a CI tool's site

| Change type | Example |\n|---|---|\n| Pricing change | Spyglass raises from $79/mo to $99/mo |\n| New plan tier | A new "Team" plan appears between individual and enterprise |\n| Feature announcement | New integrations listed on the features page |\n| Free trial addition | "Try free" CTA added — often signals a conversion strategy shift |\n| Job listing changes | Hiring surge in sales → ramping for growth |\n| Blog / content changes | New comparison posts targeting your keywords |\n| Navigation changes | Pricing removed from nav → may indicate enterprise-only pivot |\n

---

## How to set it up

1. **Add the competitor** in the KompWatch dashboard → Competitors → Add New.
2. **Enter the URL** — e.g., `https://spyglass.com/pricing`.
3. **Optional: set a CSS selector** to scope monitoring to just the pricing table (e.g., `.pricing-grid`, `#plans`). This reduces noise from page chrome and footer changes.
4. **Choose a digest frequency** — Daily or 6-hour (Team plan) for high-signal competitors.

KompWatch uses Playwright (headless Chrome) to render fully JavaScript-rendered pages, so tools built on modern frameworks (React, Next.js, Vue) are captured accurately — including SPAs that return near-empty HTML if fetched without JS.

---

## Caveats

- **Login-gated content is not accessible.** If a page requires authentication (e.g., app.spyglass.com/dashboard), KompWatch cannot monitor it. Only public pages work.
- **Anti-scraping blocks:** Some sites aggressively block bots. KompWatch handles standard protections but cannot bypass CAPTCHAs or enterprise-grade WAF rules. If a page is consistently blocked, check our [Anti-Bot Protection FAQ →](./anti-bot-protection-and-blocked-pages.md).
- **Rate limiting:** KompWatch checks each URL on your configured cron schedule. It does not poll aggressively in real-time.

---

## Monitoring multiple CI tools at once

On **Pro plan** (10 competitors), you can monitor Spyglass, Klue, Ravenseer, Crayon, and others simultaneously — alongside your actual product competitors. You're not limited to one category.

On **Team plan** (unlimited), you can monitor every public-facing page across every CI tool in your market, at 6-hour cadence.

---

## Related

- [Spyglass vs KompWatch — Full Comparison →](./spyglass-vs-kompwatch.md)
- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [Anti-Bot Protection and Blocked Pages →](./anti-bot-protection-and-blocked-pages.md)
- [CSS Selector Targeting →](./css-selectors.md)
- [Job Listing Tracking →](./job-listing-tracking.md)
