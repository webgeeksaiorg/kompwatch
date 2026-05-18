# Monitoring Competitor Affiliate and Referral Programs

Affiliate and partner programs are a meaningful part of a competitor's go-to-market strategy. Changes to commission rates, partner tiers, or referral incentives can signal a strategic pivot — ramping up acquisition spend, rewarding resellers more aggressively, or pulling back on channel investment.

KompWatch can track these pages the same way it tracks any other competitor URL.

---

## What to Monitor

| Page type | What to watch for | Typical CSS selector |
|-----------|------------------|----------------------|
| Affiliate / partner landing page | Commission rate changes, new tier announcements, "become a partner" CTA updates | `main`, `.pricing-table`, `#affiliate-details` |
| Partner portal login page | Availability signals (if they pull the portal, the programme may be winding down) | `body` |
| Referral programme page | Credit amounts, referral limits, T&C changes | `.referral-terms`, `main` |
| Reseller / agency programme page | Tier thresholds, margin structures | `article`, `.partner-tiers` |

> **Tip:** Many affiliate programmes live on subdomains (`partners.competitor.com`) or paths (`/affiliates`, `/partners`, `/referral`). Add each as a separate competitor entry in KompWatch.

---

## How to Set It Up

1. Find the competitor's affiliate or partner programme URL (check their footer for "Partners", "Affiliates", or "Referral")
2. Go to **Competitors → Add Competitor**
3. Enter the URL — use the specific programme page, not just the homepage
4. Set a CSS selector that targets the programme details (commission table, tier list, T&C section)
5. Set monitoring priority to **High** if commission rates are strategically important to you

KompWatch will snapshot that page on your plan's frequency and surface any changes in your digest.

---

## What Changes Look Like in Practice

- **Commission rate increase** — competitor trying to ramp up affiliate channel, possibly after a VC raise or sales target miss
- **New partner tier added** — expanding into resellers or agencies (a signal they're moving upmarket or into channel sales)
- **Referral credit amount increased** — deepening user referral incentives to lower acquisition costs
- **Programme page removed or redirected** — programme winding down or consolidating into a different go-to-market motion
- **T&C update** — watch for clauses around exclusivity, brand usage, or attribution windows

---

## Limitations

- **Gated partner portals** — commission details shown only after login won't be accessible to KompWatch. You can still monitor the public-facing programme description page. See [Monitoring Login-Required Pages →](./monitoring-login-required-pages.md)
- **PDF terms sheets** — programme terms distributed as PDF attachments won't be diffed; monitor the HTML page that links to them
- **Dynamic commission calculators** — interactive widgets that calculate commissions client-side won't show changes via standard HTML diffing; you can try a tightly scoped selector on the surrounding copy

---

## Related Articles

- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Monitoring Login-Required Pages](./monitoring-login-required-pages.md)
- [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Reading Competitor Job Listing Signals](./reading-competitor-job-listing-signals.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
