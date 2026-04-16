# How Competitor Monitoring Works

KompWatch automatically checks your competitors' websites on a schedule and uses AI to summarize meaningful changes.

## The Monitoring Pipeline

1. **Snapshot** — KompWatch visits each competitor URL using a headless browser (Playwright). It captures the full page HTML and a screenshot.
2. **Diff** — The new snapshot is compared to the previous one. Changes are detected in HTML content, text, and layout.
3. **AI Analysis** — Claude AI reviews the diff and categorizes changes:
   - **Pricing** — new prices, plans, or trial offers
   - **Features** — new or removed product capabilities
   - **Content** — blog posts, announcements, case studies
   - **Visual** — redesigns or layout changes
4. **Digest** — Significant changes are bundled into a digest email delivered on your plan's schedule.

## Snapshot Frequency

| Plan | How Often |
|------|-----------|
| Free | Once per day |
| Pro  | Every 6 hours |
| Team | Every hour |

## What Counts as a "Change"?

Not every HTML difference triggers an alert. KompWatch filters out:
- Cookie banners and popups
- Timestamps and "last updated" text
- Ad content
- Minor whitespace or formatting changes

Only substantive changes — new pricing, feature announcements, copy updates — are surfaced.

## CSS Selectors

When adding a competitor, you can specify a **CSS selector** to limit monitoring to a specific part of the page (e.g., `.pricing-section`, `#features`). This reduces noise and focuses alerts on what matters to you.

Leave the selector blank to monitor the entire page.

## Robots.txt

KompWatch respects `robots.txt`. If a competitor disallows crawling, KompWatch will not scrape that page.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
