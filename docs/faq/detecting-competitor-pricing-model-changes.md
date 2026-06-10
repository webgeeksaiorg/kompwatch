# How Do I Detect When a Competitor Changes Their Pricing Model?

**Short answer:** A pricing model change — switching from per-seat to usage-based, adding or removing a free tier, or rebundling features across tiers — is one of the highest-signal competitive events you can catch. KompWatch's AI layer flags these specifically because they affect how you sell against the competitor, not just what you charge.

---

## Pricing model changes vs. price changes

Most teams know to watch for price changes: your competitor drops from $99/mo to $79/mo, or adds 20% to their enterprise tier. Those matter.

But pricing **model** changes are harder to catch and often more strategically significant:

| Model change | What it signals |
|---|---|
| Per-seat → usage-based | Competitor targeting larger accounts; decoupling growth from headcount |
| Freemium removed | Moving upmarket, reducing self-serve customer support burden |
| Annual-only pricing (monthly removed) | Cash flow strategy; reducing monthly churn |
| Feature unbundled into higher tier | Monetizing a previously shared feature; or testing willingness-to-pay |
| New flat-fee tier added | Targeting a segment currently choosing competitors at that price point |
| Trial length shortened or removed | Reducing conversion friction OR raising bar for serious buyers |

These aren't just pricing tweaks — they're strategic pivots that affect your sales motions, your battlecards, and sometimes your own pricing roadmap.

---

## How KompWatch detects pricing model changes

KompWatch monitors your competitors' pricing pages on every snapshot cycle (daily on Free, every 6 hours on Pro, hourly on Team). When the AI diff layer processes a change, it distinguishes between:

- **Numeric changes** — a dollar amount that changed
- **Structural changes** — a tier appeared, disappeared, or reorganized
- **Billing model changes** — wording that indicates a change in how pricing is calculated ("per seat" → "per workspace", "unlimited users" appearing, "usage-based" language)

Structural and billing model changes are flagged as **HIGH severity** in your digest, with an AI summary explaining what changed and why it might matter to your competitive positioning.

---

## Setting up to catch model changes reliably

### Target the pricing table, not the whole page

Pricing pages often have unrelated changes — testimonials rotating, nav updates, CTAs tweaking — that would generate noise. Target the table itself:

```css
#pricing
.pricing-table
[data-section="pricing"]
table
```

See [CSS Selectors FAQ](css-selectors.md) for setup instructions.

### Monitor both the pricing page and the features page

Pricing model changes often show up on the features comparison table before the main pricing grid updates. Add both URLs:

- `https://competitor.com/pricing`
- `https://competitor.com/features` (or `/product`, `/plans`)

### Watch for the JavaScript-rendered version

Modern SaaS pricing pages — especially those with annual/monthly toggles, usage calculators, or seat-count sliders — render content via JavaScript. KompWatch uses Playwright (headless Chromium) so these render correctly. A simple HTTP-only tool would capture only the shell HTML, missing the actual pricing content.

---

## What to do when you detect a pricing model change

**1. Read the diff carefully before acting**

The AI summary will describe what changed, but review the actual snapshot diff for context. Sometimes a "usage-based" label is added to a single plan while others remain per-seat — the nuance matters.

**2. Brief your sales team immediately**

Pricing model changes affect live deals. A prospect comparing you against a competitor that just switched to usage-based pricing has a different decision framework than one comparing per-seat tools. Your reps need to know the same day — not at the next weekly review.

**3. Update your battlecard**

If you maintain competitive battlecards (see [Creating Sales Battlecards](creating-sales-battlecards.md)), update the pricing section and flag the change date. Knowing when the change happened lets you assess whether it's a test or a permanent pivot.

**4. Watch for follow-on signals**

A pricing model change is rarely isolated. In the 4–8 weeks following, watch for:
- Homepage messaging shift (repositioning the ICP)
- New case studies from the segment they're targeting
- Sales or expansion-focused job postings
- Competitor blog content explaining the new model

KompWatch monitors all of these pages if you've added them.

---

## Example: per-seat to usage-based

One of the most common model shifts in SaaS right now. If a competitor switches from per-seat to usage-based pricing:

- **Your competitive advantage:** If you're per-seat, you can offer price predictability — usage-based pricing causes anxiety for budget-conscious buyers
- **Your risk:** If their new model is cheaper for smaller accounts, low-usage prospects may defect
- **What to do:** Update battlecard with a "Predictable pricing" counter-point, flag it to your AEs, and monitor their help center for documentation of the new billing model

---

## Frequently asked questions

**How quickly will I be alerted to a pricing model change?**
On Pro, within 6 hours. On Team, within 1 hour. On Free, within 24 hours. Given that pricing changes affect live deals, Pro or Team is recommended for any competitor you actively sell against.

**What if their pricing page uses a toggle (monthly/annual) — will both states be detected?**
KompWatch captures the default render state of the page. If the monthly toggle is the default, the monthly pricing is what's captured. For competitors where you want to monitor both states, add the competitor twice with different CSS selectors or use the manual snapshot trigger after toggling.

**Can KompWatch detect pricing changes behind a "Talk to Sales" CTA?**
Not directly — custom or quote-based pricing isn't publicly visible. However, the *removal* of list pricing (a pricing table disappearing and replacing with "Contact Us") is detectable and is a significant signal in itself.

**Will I get alerted for every small copy change on the pricing page?**
Not if you've targeted a specific CSS selector. Changes to the hero, testimonials, or CTAs on the pricing page won't trigger alerts if your selector targets only the pricing table. If you're seeing noise, narrow your CSS selector.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
