# Building Competitive Battlecards with KompWatch

A competitive battlecard is a short, deal-ready reference that tells a sales rep exactly how to beat a specific competitor — their pricing, key weaknesses, your win themes, and objection responses. KompWatch continuously surfaces the raw material; this article explains how to turn those signals into battlecards your team will actually use.

## What Goes on a Battlecard

Effective battlecards cover four areas:

| Section | What to include | Where KompWatch surfaces it |
|---------|----------------|----------------------------|
| **Pricing** | Their current tiers, list price, known discount floor | Pricing page changes + High-severity digest entries |
| **Features** | What they recently added or removed | Feature page changes + "What this means for you" AI summaries |
| **Positioning** | How they describe themselves, current messaging | Homepage + hero copy changes |
| **Weaknesses** | Missing capabilities, complaints, support gaps | Job listing spikes + G2/Capterra review trends |

## Finding Your Battlecard Material

### 1. Go to the competitor's change history

Navigate to **Competitors → [Name] → Change History**. Filter by severity: **High** and **Critical** changes are almost always battlecard-worthy. Medium changes are worth a weekly scan.

### 2. Use the AI summary, not the raw diff

Each detected change includes an AI-generated **"What this means for you"** line. This is written specifically to translate a raw change into a competitive implication. Copy it directly — it's already framed for a sales conversation.

For example, after a competitor raises prices:

> **What this means for you:** Their Pro tier just increased 18% — prospects who've been comparing on price now have a stronger reason to choose KompWatch. Lead with the pricing gap early in your next call.

### 3. Watch for pricing page changes specifically

Pricing page changes are the highest-value signal for sales. KompWatch monitors these with the same frequency as all other pages. To make sure you never miss one, use the CSS selector `.pricing` or `#pricing` when adding the competitor:

1. **Competitors → Add competitor** (or edit an existing one)
2. Set the **CSS selector** to the pricing section: `.pricing`, `#pricing-table`, or `[data-section="pricing"]`
3. KompWatch will track that section closely rather than full-page noise

See [Monitoring Competitor Pricing Pages](./monitoring-competitor-pricing-pages.md) for selector tips.

## Price Anchoring — The Most Useful Battlecard Data Point

Enterprise CI tools are often 10–50x more expensive than KompWatch. When you have a concrete number, it becomes your best opening line.

Example (based on publicly available pricing data KompWatch can track):

| Tool | Typical annual cost | KompWatch |
|------|-------------------|-----------|
| Crayon (now SoftwareOne) | ~$28,750/yr median contract | $588/yr (Pro) |
| Klue | ~$18,000–$40,000/yr | $588/yr (Pro) |

KompWatch tracks competitors' public pricing pages. If a competitor's pricing page changes — new tiers, hidden pricing, a "contact sales" gate replacing a price list — you'll see it flagged in your digest within hours.

## Exporting for Your Battlecard Template

KompWatch doesn't yet generate battlecard PDFs or PowerPoint slides directly — that's on the roadmap. In the meantime, export your raw change data and paste the AI summaries into your existing template:

1. Go to **Settings → Export → JSON** to download all changes for a competitor
2. Filter by `"severity": "HIGH"` or `"severity": "CRITICAL"`
3. The `summary` and `strategicImplication` fields contain the AI-written content
4. Paste into your battlecard template (Notion, Google Slides, Confluence, etc.)

See [Exporting Your Data](./exporting-your-data.md) for full export options.

## Keeping Battlecards Fresh

Stale battlecards lose rep trust fast. The solution is to tie your battlecard review cadence to your digest frequency:

- **Pro plan (daily digest):** Review and update battlecards weekly
- **Team plan (real-time alerts):** Update battlecards whenever a High-severity change arrives

Set up a recurring 15-minute calendar block — open your digest, check for High/Critical changes, update the relevant battlecard section. Most weeks this is a one-line edit or nothing at all.

## Routing Changes Directly to Sales

Rather than waiting for reps to pull the digest, push critical changes to them:

- **Slack integration** — connect `#competitive-intel` in **Settings → Integrations → Slack**. High-severity changes post automatically.
- **Alert routing** — in **Settings → Notifications → Alert routing**, configure Critical changes to ping the sales team lead directly, not just the channel.

See [Using KompWatch Insights for Sales](./using-insights-for-sales.md) and [Integrations and Notifications](./integrations-and-notifications.md) for setup details.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
