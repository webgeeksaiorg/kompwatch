# My Competitor Quietly Removed a Pricing Tier — How Would KompWatch Catch That?

Pricing tier restructures are one of the most dangerous competitor moves for sales teams — precisely because they're not announced. No blog post. No press release. The pricing page just quietly changes, and the first time you find out is when a prospect cites a number that no longer exists.

Here's how KompWatch catches these — and what to watch for.

---

## What a Tier Restructure Looks Like in Practice

Tier restructures typically happen in one of these patterns:

| Pattern | Example | Impact if missed |
|---|---|---|
| Entry tier removed | $99/mo plan eliminated, next plan starts at $199 | You're selling against a price anchor that's gone |
| Middle tier repackaged | Features moved up to higher plan | Competitor looks more expensive, but isn't |
| Limits tightened on existing tiers | Seat limits reduced, tracked items capped | "They're basically free" objection becomes false |
| New enterprise tier added quietly | No announcement, just a new `/enterprise` page | Prospects find security/compliance proof you don't know about |
| Annual-only pricing swap | Monthly pricing removed, only annual available | Your total-cost comparison is wrong |

Each of these represents a change to your competitive positioning — and none of them will show up in a Google Alert.

---

## How KompWatch Detects Tier Changes

KompWatch monitors competitor pricing pages using headless Chromium (not RSS or HTML diff), which means it captures the rendered page — including prices loaded by JavaScript, dynamically generated tier tables, and gated content.

When a competitor removes or restructures a tier, the next snapshot cycle will flag a change. The AI summary will typically describe something like:

> *"Pricing page change detected: the $99/month Starter plan is no longer listed. The entry plan is now 'Pro' at $199/month. Severity: HIGH."*

**On Pro plan:** Snapshots run every 6 hours. A pricing change made at 9am would be in your digest by 3pm at the latest.
**On Team plan:** Snapshots run hourly. Pricing changes typically appear in your inbox within 60–90 minutes.

---

## Setting Up Monitoring to Catch This

To catch tier restructures, you need to monitor the right URL and use the right configuration.

### 1. Monitor the actual pricing page, not the homepage

Many teams add `competitor.com` when they should add `competitor.com/pricing`. The homepage rarely shows the full pricing grid. Add the direct pricing page URL.

### 2. Avoid CSS selectors that are too narrow

If you've set a CSS selector like `.hero-price` to track only the hero price point, you'll miss tier additions and removals that happen below the fold. For pricing pages, either leave the selector blank (monitor the whole page) or use a broad selector like `main` or `#pricing`.

### 3. Add secondary pricing-related pages

Competitors sometimes split pricing across multiple pages:
- `/pricing` — main tier table
- `/enterprise` — enterprise tier (sometimes separate)
- `/compare` or `/plans` — detailed feature comparison

If your competitor has an `/enterprise` or `/plans` page, add it as a separate monitored URL.

### 4. Set sensitivity to MEDIUM or higher for pricing pages

If your notification threshold is HIGH-only, a tier rename or limit change might come through as MEDIUM severity and get silently archived. Pricing pages are worth lowering your threshold for.

See [Filtering Alerts by Severity →](./filtering-digests-by-severity.md)

---

## What Happened When We Missed This

The real cost isn't the price change itself — it's the sales conversations that happen before you know about it.

Here's the pattern: A competitor removes their $99/mo entry plan in January. Your AE discovers this in March when a prospect says, "Actually I checked their pricing and it's $199 to get started, not $99 like you said." At that point:

- You've been positioning against a non-existent price for 5–8 weeks
- Your battlecard has the wrong entry point
- Prospects researching both products are getting contradictory information
- The competitor's actual pricing structure (higher entry, presumably more features) may actually help your positioning — but you haven't updated your pitch to reflect it

This is why pricing page monitoring specifically (not just general Google Alerts) is the highest-ROI monitoring configuration for sales teams.

---

## If You're Currently Selling Against Competitor Pricing — Check Now

If you're actively competing against a tool and you haven't verified their pricing in the last 60 days, open their pricing page right now. Pricing page restructures happen quarterly for most SaaS companies.

Once you've verified the current state, add that pricing page to KompWatch so you don't have to manually check again.

---

## Related FAQs

- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [Detecting Competitor Pricing Model Changes →](./detecting-competitor-pricing-model-changes.md)
- [How to Keep Battlecards Up to Date →](./how-to-keep-battlecards-up-to-date.md)
- [Instant Pricing Alerts →](./instant-pricing-alerts.md)
- [Setting CSS Selectors →](./setting-css-selectors.md)
