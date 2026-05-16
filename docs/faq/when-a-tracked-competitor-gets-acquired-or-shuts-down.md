# When a Tracked Competitor Gets Acquired or Shuts Down

If a competitor you're monitoring is acquired, rebranded, or goes offline, KompWatch will keep trying to snapshot their URL. Here's how to interpret what you see and what to do next.

---

## What KompWatch Shows When a Site Goes Offline

When a competitor's URL becomes unreachable, KompWatch logs the failure in the next snapshot cycle:

- The snapshot is recorded with a **status: error** and no HTML/screenshot content
- The dashboard shows a **"Site unreachable"** warning on the competitor row
- If the URL starts returning an HTTP error (404, 410, 503) consistently, a **HIGH severity change** is generated so you're notified

This means you won't miss a shutdown — it surfaces as a notable change in your digest.

See [Competitor Site Offline or Errors →](./competitor-site-offline-or-errors.md) for how KompWatch handles transient vs. persistent errors.

---

## Scenario 1 — Competitor Was Acquired and Redirects to Acquirer's Site

This is the most common outcome (e.g., Kompyte was acquired by Adobe and redirected to adobe.com/products/...).

**What happens:**
KompWatch follows the redirect and snapshots the destination URL. The content will look very different from the original — this generates a large wave of CONTENT and POSITIONING changes.

**What to do:**

1. **Open the competitor row** in [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. **Update the URL** to the acquirer's product page if you want to keep monitoring the acquired product line under the new owner
3. **Or archive the competitor** if the product was effectively killed — see below

**Tip:** Before archiving, export the change history as a PDF from the **Digests** tab. This gives you a clean record of how the competitor evolved over time — useful for post-mortems or investor updates.

---

## Scenario 2 — Competitor Shut Down Completely

If the site goes dark permanently (domain expires, startup folds, product discontinued):

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click **⋮ → Archive** on the competitor row
3. The competitor moves to your **Archived** list — snapshot history is preserved, but no new snapshots are taken

Archiving frees up a slot on your competitor count, so you can add a replacement without upgrading your plan.

**Don't delete** unless you're certain you won't need the history. Deleted competitors and their snapshots are permanently removed.

---

## Scenario 3 — Competitor Rebranded with a New Domain

If the company rebranded and moved to a new URL:

1. Click **Edit** on the competitor row
2. Update the URL to the new domain
3. Optionally update the name to reflect the rebrand
4. Leave the CSS selector as-is (unless the new site has a completely different structure)

KompWatch will snapshot the new URL going forward. Historical snapshots under the old URL are retained and still searchable.

See [Competitor Rebranded or Changed URL →](./competitor-rebranded-or-url-changed.md) for a step-by-step walkthrough.

---

## Who Do I Add as a Replacement?

If a major competitor disappears, the competitive landscape just shifted. The acquirer is now your new competitor — or the vacuum opens space for a different player.

Questions to ask:
- **If acquired:** Should you now monitor the acquirer's product page instead?
- **If shut down:** Which competitor is most likely to absorb their customers? Add them.
- **If rebranded:** Update the existing entry rather than creating a duplicate

See [Responding to a Major Competitor Move →](./responding-to-a-major-competitor-move.md) for a framework on what to do in the 48 hours after a major competitive shift.

---

## Will I Still Be Charged for an Archived Competitor?

No. Archived competitors do not count toward your plan limit. You can archive as many as you like — only **active** competitors count against your tier's cap.

| Plan | Active competitor limit |
|------|------------------------|
| Free | 2 |
| Pro | 10 |
| Team | 50 |

See [Pricing →](./pricing.md) for full plan details.

---

## Related Articles

- [Competitor Site Offline or Errors](./competitor-site-offline-or-errors.md)
- [Competitor Rebranded or Changed URL](./competitor-rebranded-or-url-changed.md)
- [Tracking Competitor Funding and Acquisitions](./tracking-competitor-funding-and-acquisitions.md)
- [Responding to a Major Competitor Move](./responding-to-a-major-competitor-move.md)
- [Managing Your Competitors — Edit, Pause, Archive, and Delete](./managing-competitors.md)
- [When Your CI Vendor Gets Acquired](./when-your-ci-vendor-gets-acquired.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
