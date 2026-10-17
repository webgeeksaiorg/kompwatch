# Free Competitive Battlecard Template

Yes — KompWatch provides a free 8-section battlecard structure you can copy into any doc tool (Google Docs, Notion, Confluence, Highspot, Seismic, Guru, etc.).

---

## The 8-Section Battlecard Template

### 1. Competitor Overview
**What goes here:** Name, URL, category, ideal customer profile (ICP), funding stage.

Fill this once — it rarely changes. KompWatch monitors the URL so you notice if they rebrand, reposition, or redirect.

---

### 2. Pricing & Packaging
**What goes here:** Current tiers, seat pricing, annual discount, free plan limits, known discount floor.

This section goes stale fastest — competitors quietly raise prices, restructure tiers, or gate features. Set up a KompWatch monitor on their `/pricing` page (with CSS selector `.pricing-table` or `#pricing`) so any change surfaces in your digest automatically.

---

### 3. Strengths (Where They Win)
**What goes here:** Honest 2–3 bullets on what the competitor genuinely does better. Be honest — reps trust battlecards that acknowledge weaknesses.

Update when KompWatch detects a new feature or positive messaging shift. Feature-change alerts usually appear within hours of the competitor publishing.

---

### 4. Weaknesses & Landmines
**What goes here:** Where they lose deals — pricing shock, missing integration, support tier gates, poor onboarding.

Refresh when they patch a weakness. If KompWatch flags them shipping a new integration or support tier, update this section the same day — otherwise reps use outdated landmines.

---

### 5. Objection Handling (Per Persona)
**What goes here:** For each buyer persona (PMM, VP Sales, RevOps, etc.), the top 3 objections and your rebuttal.

Update objection #1 the moment a competitor changes their positioning or messaging — KompWatch's homepage change detection catches these within 6 hours on Pro.

---

### 6. Trap Questions
**What goes here:** Questions your rep can ask mid-demo to expose the competitor's weakness.

Examples:
- "Do they charge extra for SSO?"
- "What happens to your data if you cancel?"
- "Does the pricing change after year one?"

These stay stable until the competitor patches a gap. Monitor with KompWatch.

---

### 7. Proof Points & Case Studies
**What goes here:** Your win stories vs. this specific competitor. One per quarter minimum.

Cross-reference the competitor's `/customers` page (add it as a KompWatch monitor). When they add a new logo, you want the response ready for the next call from a similar company.

---

### 8. Last Updated + Change Log
**What goes here:** Date stamp of each update + 1-line summary of what changed.

Example:
```
2026-08-14 — Raised Pro from $49→$69/mo (KompWatch alert), updated pricing section
2026-07-20 — Added Salesforce sync to strengths (feature page change detected)
```

This is the trust signal for reps. A battlecard with "last updated 3 days ago" gets read. One from Q3 gets ignored. KompWatch's AI digest gives you the change log for free — copy it directly into this section.

---

## How to Keep It Fresh with KompWatch

1. **Add the competitor in KompWatch** — pricing page, homepage, features page, changelog, /customers page
2. **Set CSS selectors** (optional but recommended) — target `.pricing-table`, `#features-grid`, `.hero-headline` to reduce noise
3. **Wait for your digest** — daily on Pro ($49/mo), weekly on Free
4. **Review High + Critical changes** — these are your battlecard-update triggers
5. **Paste the AI summary** into the relevant section. Most updates take 5–10 minutes.

---

## Which Plan Do I Need?

| Use case | Plan |
|---|---|
| 1–2 competitors, updates are fine weekly | Free (forever) |
| 3–10 competitors, want daily alerts | Pro ($49/mo) |
| Team-wide battlecard distribution via Slack | Team ($149/mo) |

Start with the free plan — 2 competitors, weekly digest — and upgrade when you're tracking more.

---

## Related

- [Building Competitive Battlecards with KompWatch](./competitive-battlecards.md)
- [Creating Sales Battlecards](./creating-sales-battlecards.md)
- [How to Keep Battlecards Up to Date](./how-to-keep-battlecards-up-to-date.md)
- [Who Owns Competitive Battlecards?](./who-owns-competitive-battlecards.md)
- [Battlecard Export — Current Status](./battlecard-export-current-status.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll help you build a battlecard workflow that fits your stack.*
