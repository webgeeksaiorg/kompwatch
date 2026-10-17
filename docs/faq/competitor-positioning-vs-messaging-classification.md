# How KompWatch Classifies Positioning Changes vs. Messaging Changes

**Short answer:** KompWatch uses AI to label every copy diff as either POSITIONING (a change in *who the product is for* or *what category it claims*) or MESSAGING (a change in *how the same positioning is expressed*). Positioning changes score higher severity and float to the top of your digest. Messaging changes are surfaced but weighted lower unless they're coordinated across multiple pages.

---

## The core distinction

| Signal | POSITIONING | MESSAGING |
|---|---|---|
| **Definition** | Change in category, persona, or market | Change in phrasing, tone, or emphasis |
| **Example** | "Analytics platform for growth teams" → "AI decision layer for RevOps" | "See every competitor move" → "Never miss a beat from your competition" |
| **Severity default** | HIGH | LOW–MEDIUM |
| **Typical trigger** | Strategy shift, ICP pivot, category creation | Copy iteration, A/B test, seasonal refresh |
| **Follow-through signal** | New landing pages, blog content, paid ads within 30–60 days | Usually isolated to one surface |

---

## Why it matters for your workflow

A POSITIONING alert means your battlecard and messaging docs need updating within 48 hours. A MESSAGING alert is useful market color but rarely requires an immediate response.

Without this classification, you'd get the same notification for a competitor rewriting "analytics" to "AI" (strategy shift, act now) and rewriting "powerful" to "intelligent" (adjective swap, file for reference). KompWatch's AI makes that distinction automatically so your inbox only urgently flags the changes that affect your deals.

---

## How KompWatch detects it

1. **Scope check** — Does the change appear on one page or multiple pages? A real repositioning shows up on homepage + product page + meta titles, often within days of each other.
2. **Persistence check** — Does the change persist over the next 5–10 snapshots? An A/B test variant that reverts is reclassified as COPY-TEST in the digest.
3. **Category-term check** — Claude scans for changes to category-signal words (the noun the product is compared to), ICP descriptors (the audience the product is "for"), and tier/feature naming.
4. **Coordinated-surface bonus** — If the hero copy, meta title, and OpenGraph description all change in the same direction within 48 hours, severity is bumped to HIGH regardless of per-page word count.

---

## Practical examples

**POSITIONING (HIGH severity):**
- Homepage headline: "Competitive analytics for growth teams" → "AI battlecard generator for RevOps" — category + persona both changed
- Pricing page tier rename: "Starter / Pro / Enterprise" → "Starter / Intelligence / Command" — tier naming is often the first signal of an upmarket pivot
- A new `/for-enterprise` or `/for-agencies` landing page appearing in the sitemap

**MESSAGING (LOW–MEDIUM severity):**
- Homepage hero subheadline rewrite that keeps the same core claim but sharpens the phrasing
- A testimonial swap — different customer, same theme
- CTA button copy change: "Start free trial" → "Try it free — no credit card"

---

## Related docs
- [Detecting when a competitor is repositioning their product](detecting-competitor-repositioning.md)
- [How to respond when a competitor changes their messaging](how-to-respond-to-competitor-messaging-change.md)
- [Change severity levels explained](change-severity-levels.md)
- [Which pages reveal a competitor's real positioning](which-pages-to-monitor-per-competitor.md)
