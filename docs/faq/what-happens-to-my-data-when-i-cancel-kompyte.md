# What Happens to My Data When I Cancel Kompyte (or Lose Access)?

If you're a Kompyte user who is being priced out by the enterprise-only repositioning — or if you're evaluating whether to leave before your current contract renews — here's what you need to know about your data before you walk away.

---

## Your Data While Your Account Is Active

While your Kompyte subscription (via Semrush or directly) is active, everything remains accessible: competitor profiles, monitored URLs, battlecard content, change history, and alert configuration. Losing access — whether because you canceled, downgraded a Semrush plan that included Kompyte, or were migrated out of self-serve access — ends your access to the platform without necessarily deleting the underlying data immediately. The exact retention window depends on your contract terms with Semrush/Adobe.

**The practical risk:** Kompyte does not notify you in advance when access is being revoked as part of a plan tier change. If you're on a Semrush Business plan that previously included Kompyte access and that access is being phased out, you may find it removed without a prominent warning. Check your access before assuming it's still there.

---

## What Kompyte Does NOT Have: A Data Export API

Kompyte does not provide a public data export API or an "export all" button. Your monitoring history, competitor profiles, and battlecard content are stored on Kompyte's platform and are not easily portable.

**What this means in practice:**

- **Competitor URL list** — not bulk-exportable. Copy URLs manually from the Competitor Profiles view. For a 10–20 competitor portfolio, expect 10–20 minutes of manual work.
- **Battlecard content** — no structured export format. Copy the narrative sections of your most-used battlecards (key talking points, competitive positioning summaries) before your access ends.
- **Change history / detected changes** — accessible in the Kompyte UI while active, but there is no bulk download. Screenshot or note the competitive moves flagged in the last 6–12 months that your team references.
- **Monitored page configuration** — which specific pages you tracked (e.g. `/pricing`, `/features`, `/changelog`) per competitor. Write this down before canceling — it becomes your setup checklist for whatever tool you migrate to.

**The practical advice:** do your content export *before* canceling or before your plan changes, while your account is still live.

---

## What to Export Before You Lose Access

Run through this checklist while your Kompyte account is still active:

1. **Competitor URL list** — all monitored competitors and the specific page URLs you tracked. Include which pages: pricing, features, changelog, blog, careers. A Google Sheet or Notion table works well.
2. **Active battlecard content** — copy the competitive positioning narrative for your most-used cards. Focus on cards actively used in sales conversations rather than archiving everything.
3. **Key change history** — screenshot or note competitive moves from the last 6–12 months. Which competitor dropped their free tier? Who added a feature that overlaps your roadmap? These are institutional memory items.
4. **Alert / notification config** — document your current notification settings (which teams receive alerts, which Slack channel, which severity threshold) so you can replicate the same routing in a replacement tool.
5. **Integration config** — if you connected Kompyte to Salesforce, HubSpot, or another CRM via native integrations, note which fields were mapped. KompWatch can replicate directional alerts via webhooks, but the CRM-field-level mapping would need to be reconfigured.

---

## The Enterprise-Only Repositioning Factor

As of mid-2026, Kompyte has been repositioned as an enterprise-only product following Adobe's $1.9B acquisition of Semrush in February 2026. Practically:

- **Self-serve access via Semrush Business plans is being phased out.** Teams that accessed Kompyte as part of a bundled Semrush plan may find it unavailable at their next renewal, or subject to a significant price increase tied to an enterprise contract.
- **New Kompyte contracts require an enterprise sales engagement** — no self-serve trial, no monthly billing, no access without a sales call. Reported enterprise minimums are in the **$30,000–$60,000/yr** range.
- **Existing Kompyte contracts should remain active through the current term** — but renewal terms under Adobe's pricing structure are likely to look materially different.

If you're currently on a Semrush plan that included Kompyte, the safest assumption is that the Kompyte CI layer will not be available at current pricing at your next renewal. Now is the right time to start parallel evaluation of alternatives and complete a data export while you still have access.

For more context on what the Adobe acquisition means for Kompyte's roadmap, see [What Happens to Kompyte After Adobe Acquires Semrush?](./what-happens-to-kompyte-after-adobe-acquires-semrush.md) and [Is Kompyte Enterprise-Only Now?](./is-kompyte-enterprise-only-now.md)

---

## What KompWatch Can and Can't Import

KompWatch does not have a Kompyte importer. There is no file format to upload. Monitoring starts fresh from when you add your first competitor.

**What carries over easily:**
- Your competitor URL list — paste URLs into KompWatch one at a time, or use bulk import (Settings → Competitors → Bulk Import). For 10 competitors, setup takes under 15 minutes.
- Monitoring preferences — configure which specific page sections to watch using CSS selectors (e.g. `.pricing-table`, `#features-list`, `#plans`). This is more granular than Kompyte's full-page monitoring and significantly reduces noise.
- Notification routing — configure a Slack webhook in Settings → Integrations to replicate your current `#competitive-intel` channel alerts.

**What doesn't carry over:**
- Historical change data from Kompyte — KompWatch's snapshot history starts from your first snapshot.
- Battlecard content — KompWatch does not currently have a battlecard CMS. One-click battlecard export is on the product roadmap; see the [product changelog](./product-changelog.md) for status.
- Native CRM integrations (Salesforce, HubSpot) — KompWatch uses a REST webhook to push change events to CRM automation platforms. Native field-level sync is not yet available.

---

## How Does KompWatch Pricing Compare?

| | KompWatch Free | KompWatch Pro | Kompyte (enterprise, 2026) |
|---|---|---|---|
| Price | $0 / no credit card | $49/mo | $30,000–$60,000+/yr (sales-negotiated) |
| Access | Instant self-serve | Instant self-serve | Requires enterprise sales engagement |
| Competitors | 2 | 10 | Unlimited (enterprise tier) |
| Snapshot frequency | Daily | Every 6 hours | Configurable |
| AI change summaries | ✓ | ✓ | ✓ |
| Battlecard generation | ✗ (roadmap) | ✗ (roadmap) | ✓ |
| Win/loss tracking | ✗ | ✗ | ✓ |
| CRM sync (native) | ✗ | ✗ (webhook only) | ✓ (Salesforce, HubSpot) |
| Contract | Month-to-month | Month-to-month | Annual enterprise |

**The honest comparison:** If you used Kompyte primarily for website change monitoring and AI digests — the core CI workflow — KompWatch replicates that at a fraction of the cost. If you relied on Kompyte's battlecard CMS, win/loss tracking, or native CRM integration, those specific workflows aren't yet replicated in KompWatch. See [Switching from Kompyte →](./switching-from-kompyte.md) for a full feature-by-feature breakdown.

---

## Is There a Migration Reimbursement for Kompyte Users?

KompWatch does not currently offer a formal reimbursement for Kompyte early-termination fees (unlike the [Klue migration reimbursement →](./klue-migration-reimbursement.md)). However, if your situation involves unusual circumstances — access being revoked mid-contract, a materially different product being delivered at renewal, or a forced plan migration — email [support@kompwatch.com](mailto:support@kompwatch.com). Edge cases are handled individually.

The lowest-risk evaluation path: start on KompWatch Free (2 competitors, no credit card) to validate monitoring quality before your Kompyte access ends. It takes about 10 minutes to set up.

---

## Related Articles

- [Is Kompyte Enterprise-Only Now?](./is-kompyte-enterprise-only-now.md)
- [What Happens to Kompyte After Adobe Acquires Semrush?](./what-happens-to-kompyte-after-adobe-acquires-semrush.md)
- [Switching from Kompyte to KompWatch](./switching-from-kompyte.md)
- [What Happens to My Data When I Cancel Semrush?](./what-happens-to-my-data-when-i-cancel-semrush.md)
- [What Happens to My Data When I Cancel Klue?](./what-happens-to-my-data-when-i-cancel-klue.md)
- [Klue Migration Reimbursement — Up to $500](./klue-migration-reimbursement.md)

---

*Questions about migrating from Kompyte? Email [support@kompwatch.com](mailto:support@kompwatch.com) with your current competitor list and we'll help you get equivalent monitoring set up — including suggested CSS selectors for the same pages you were tracking in Kompyte.*
