# How Do I Monitor Competitor Pricing Across Multiple Currencies or Regions?

Many SaaS companies publish different prices for different regions — USD for North America, EUR for Europe, GBP for the UK, AUD for Australia — and they don't always adjust them proportionally. Catching regional pricing moves is a competitive edge, and KompWatch can track them across all currencies simultaneously.

---

## Why Track Multi-Currency Pricing?

Competitors use regional pricing strategically:

- **Market entry pricing** — a competitor may launch cheaper in a new region to gain share before raising prices
- **Stealth price increases** — raise EUR prices quietly without touching the USD page (and the announcement blog post)
- **Currency arbitrage** — some teams buy SaaS tools via cheaper regional pricing; if a competitor closes that gap, your customers may re-evaluate
- **PPP adjustments** — a competitor moving to purchasing-power-parity pricing signals a new geographic focus
- **Regional promotions** — limited-time discounts in one region that don't appear on the main pricing page

---

## How to Set Up Multi-Currency Price Monitoring

Most SaaS companies host regional pricing at distinct URLs. Add each as a separate competitor entry in KompWatch.

### 1. Identify the regional pricing URLs

Common patterns:

| Region | URL pattern |
|--------|-------------|
| US | `acme.com/pricing` (default, usually USD) |
| Europe | `acme.com/en-eu/pricing`, `acme.com/pricing?region=eu`, or a separate domain (`acme.eu`) |
| UK | `acme.com/en-gb/pricing` |
| Australia | `acme.com/en-au/pricing` |

Check by visiting the competitor's pricing page, changing your browser's language settings or using a VPN, and watching if the URL changes. Some sites use URL parameters (`?currency=eur`), subdomain routing (`eu.acme.com`), or path prefixes (`/de/`).

### 2. Add each regional URL as a separate tracked page

In KompWatch, add each regional pricing URL as a separate entry under the same competitor (or a new competitor entry named "Competitor — EUR Pricing"):

1. Go to **Competitors → Add URL**
2. Use the full regional URL (e.g. `https://acme.com/en-eu/pricing`)
3. Set the CSS selector to target the pricing table (e.g. `#pricing`, `.pricing-table`)
4. Name the entry clearly: `Acme (EUR)`, `Acme (GBP)`, `Acme (AUD)`

You can monitor up to your plan's competitor limit:
- **Free:** 2 competitors — best used for one competitor's USD + EUR pages
- **Pro:** 10 competitors — enough to track 2–3 competitors across 3 regions
- **Team:** 50 competitors — comprehensive multi-region tracking across your full competitive landscape

### 3. Use the AI summary to catch currency-specific changes

When a regional price changes, KompWatch's AI digest surfaces the change in plain English even if the page is in another language:

> *"Acme (EUR) pricing page updated — Pro tier increased from €49/mo to €69/mo. The USD pricing page (monitored separately) remains unchanged at $49/mo."*

This lets you instantly spot regional-only price moves without manually converting currencies.

---

## What to Look For

### Regional price increase before a global one
A competitor raises EUR prices by 20% — this often precedes a USD price increase 1–3 months later. Get ahead of it by briefing your sales team and updating your competitive positioning.

### USD/EUR pricing falls out of sync with exchange rates
If a competitor's EUR price stays flat while the euro weakens, they're effectively giving European customers a discount. Watch for when they "correct" this — it may create a sales opportunity if you maintain consistent pricing.

### New currency added to pricing page
A competitor adding an AUD, CAD, or BRL pricing option signals geographic expansion. Worth flagging to your sales team if you operate in those markets.

### Prices removed from a regional page
If a competitor replaces listed prices with "Contact Sales" in a specific region, they're likely moving upmarket or testing enterprise-only packaging there.

---

## Handling Sites That Use Geo-Routing

Some sites serve the same URL but show different prices based on your IP location. Since KompWatch monitors from a fixed infrastructure location, it sees one currency version per URL.

**Workaround:** If a competitor doesn't use distinct regional URLs, check if they have:
- A currency switcher on the pricing page (often a dropdown; add the `?currency=eur` parameter version)
- A separate regional subdomain or domain (e.g. `acme.eu`)
- A `/pricing` path on a regional subdomain

If none of these exist, you can track the USD version and supplement with a periodic manual check of the international version using a VPN or the [Manual Snapshot Trigger](./manual-snapshot-trigger.md).

---

## AI Summary and Currency Conversion

KompWatch's AI digest reads pricing changes in context — it understands that "€69/mo" and "$49/mo" are different currencies and won't treat them as equivalent unless they are. Summaries include the currency symbol and amount as they appear on the page.

If you want to track the USD equivalent of a EUR price change, note this manually in your Digest notes — KompWatch doesn't perform automatic FX conversion, as exchange rates fluctuate and the strategic signal (a deliberate price change) matters more than the FX-adjusted equivalent.

---

## Related FAQs

- [How Do I Monitor a Competitor's Pricing Page?](./monitoring-competitor-pricing-pages.md)
- [Can I Monitor Non-English or International Competitor Websites?](./monitoring-international-competitors.md)
- [Competitor Pricing Data Sources](./competitor-pricing-data-sources.md)
- [Instant Pricing-Change Alerts](./instant-pricing-alerts.md)
- [Which Pages Should I Monitor for Each Competitor?](./which-pages-to-monitor-per-competitor.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll respond within 24 hours.*
