# Can I Bulk Import Competitors?

If you're setting up a new KompWatch account on Pro or Team and need to add many competitors at once, here are your options.

---

## Option 1: Add Them One by One (Faster Than It Sounds)

For most teams, adding 5–15 competitors individually takes about 2–3 minutes. Each competitor only needs:

- A **name** (how you'd like to label it)
- A **URL** (the specific page to monitor — homepage, pricing page, etc.)
- A **CSS selector** (optional but recommended — defaults to `body`)

Go to [kompwatch.com/competitors](https://kompwatch.com/competitors) → **Add Competitor**.

> **Tip:** Start with just the URL and default selector. Once you've confirmed monitoring is working, refine the CSS selector to narrow scope. See [CSS Selectors FAQ →](./css-selectors.md)

---

## Option 2: Use the REST API (Developer / Automated Import)

If you're onboarding programmatically — for example, pulling a list from your CRM or a spreadsheet — use the KompWatch REST API to create competitors in bulk.

```bash
# Example: create a competitor via API
curl -X POST https://kompwatch.com/api/v1/competitors \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corp",
    "url": "https://acme.com/pricing",
    "selector": "#pricing-table"
  }'
```

Wrap this in a loop over your competitor list (CSV, JSON, etc.) to import all at once. See [REST API and Developer Access →](./rest-api-and-developer-access.md) for authentication, rate limits, and the full endpoint reference.

---

## Option 3: Ask Us to Import for You

On the **Team plan**, email [support@kompwatch.com](mailto:support@kompwatch.com) with a spreadsheet or list of competitors (name, URL, selector if known) and we'll bulk-import them for you — typically within one business day.

Include:
- Competitor name
- Page URL to monitor (pricing page, homepage, changelog, etc.)
- CSS selector (optional — we'll default to `body` if not specified)

---

## Plan Limits Apply to All Import Methods

Regardless of how you add competitors, your plan's competitor limit is enforced:

| Plan | Max Competitors |
|---|---|
| Free | 2 |
| Pro | 10 |
| Team | 50 |

Attempting to add more than your plan allows will return an error (API) or a prompt to upgrade (UI). See [Plan — Competitor Limit Reached →](./plan-competitor-limit-reached.md)

---

## CSV Import (Roadmap)

Native CSV import is on the product roadmap. When it ships, you'll be able to upload a spreadsheet directly from the Competitors page. Watch the [product changelog](./product-changelog.md) for updates.

---

## Related Articles

- [Adding Your First Competitor](./adding-competitors.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [REST API and Developer Access](./rest-api-and-developer-access.md)
- [Plan — Competitor Limit Reached](./plan-competitor-limit-reached.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
