# What Happens to My Data When I Cancel Semrush?

If you're evaluating a move away from Semrush — whether because of the Adobe acquisition, rising per-seat costs, or the Kompyte roadmap uncertainty — here's what you need to know about your data before you cancel.

---

## Your Data During an Active Semrush Subscription

While your Semrush subscription is active, everything is accessible: keyword projects, competitive traffic analyses, position tracking history, Kompyte competitor profiles, battlecard content, and change alerts. Canceling at renewal (or requesting early termination) doesn't immediately delete your data, but access ends when the subscription expires.

---

## What Semrush / Kompyte Does NOT Have: Portability

Semrush's competitive intelligence layer (Kompyte) does not provide a structured data-export API for monitoring history. There is no single "export everything" button for your CI workflow.

**What this means in practice:**

- **Competitor URL list** — copy these manually from Kompyte's competitor settings. For a typical 10–20 competitor portfolio, 5 minutes of copy-paste work.
- **Battlecard content** — Kompyte battlecards are not bulk-exportable in a portable format. Copy the custom narrative sections, curated summaries, or key talking points you actively use in sales.
- **Monitoring history** (detected changes, page diff timeline) — accessible in the Kompyte UI while your account is active, but not bulk-downloadable. Screenshot or copy key findings before you cancel.
- **Keyword ranking and traffic data** — Semrush's SEO data (position tracking, backlink history, traffic analytics) is Semrush-platform data, not portable to competitor monitoring tools. If this data matters for internal reporting, export CSVs from each project before you cancel.

**The practical advice:** complete your content export *before* canceling, while your account is still live.

---

## What to Export Before You Cancel

Work through this checklist before your Semrush subscription expires:

1. **Competitor URL list** — copy all monitored competitor URLs (and which specific pages you tracked: pricing, features, careers, changelog). A spreadsheet works fine.
2. **Active battlecard content** — copy the narrative sections of your most-used battlecards. Focus on cards actively used in sales conversations.
3. **Kompyte change alert history** — screenshot or note any key competitive moves flagged in the last 6–12 months that your team references.
4. **Keyword project data** — export CSV reports for active SEO projects if you use Semrush's keyword or position-tracking features (this is separate from the CI workflow, but worth doing).
5. **Slack/Teams alert config** — note your Kompyte notification settings so you can replicate the same alerting logic in KompWatch.

---

## The Adobe Acquisition Factor

Adobe acquired Semrush for $1.9B in February 2026. Kompyte (Semrush's CI product) has changed hands three times:

1. **Kompyte (independent)** → acquired by Semrush
2. **Kompyte in Semrush** → bundled as a paid add-on
3. **Semrush** → acquired by Adobe → Kompyte now sits inside Adobe's marketing cloud

Enterprise-bundle acquisitions historically follow a pattern: product features get deprioritized, pricing migrates toward Adobe's enterprise tier, and roadmap velocity slows as integration work takes priority. Users who have been through a Marketo or Omniture acquisition will recognize the pattern.

If your concern is specifically about what happens to Kompyte's roadmap under Adobe, see [What Happens to Kompyte After Adobe Acquires Semrush?](./what-happens-to-kompyte-after-adobe-acquires-semrush.md).

---

## What KompWatch Can and Can't Import

KompWatch does not have a Semrush or Kompyte importer. There is no upload format. Setup starts fresh.

**What carries over easily:**
- Your competitor URL list — paste URLs into KompWatch one at a time, or use bulk import (Settings → Competitors → Bulk Import). For 10 competitors, setup takes under 15 minutes.
- Monitoring preferences — you'll configure which page sections to track (pricing, features, changelog) using CSS selectors or just full-page monitoring.

**What doesn't carry over:**
- Historical Kompyte monitoring data stays in Kompyte. KompWatch's snapshot history starts from your first KompWatch snapshot.
- Semrush SEO metrics (keyword rankings, backlink profiles, traffic data) — KompWatch is a website change monitoring tool, not an SEO platform. These workflows are separate.
- Battlecard content — KompWatch does not have a battlecard CMS in the current release. Battlecard export is on the roadmap; see the [product changelog](./product-changelog.md) for status.

---

## Parallel Running (Recommended Approach)

The cleanest migration is to run KompWatch alongside Semrush during your evaluation window — not on a deadline:

1. **Sign up for KompWatch free** — no credit card, 2 competitors.
2. **Add your 2 highest-priority competitors** and let two or three snapshot cycles run (24–48 hours).
3. **Compare AI digest quality** against what Kompyte surfaces for the same competitors.
4. **Upgrade to Pro ($49/mo)** to add your full portfolio before your Semrush renewal date.
5. **Export your Semrush/Kompyte content** (battlecards, URLs, history) while the account is still active.
6. **Let the Semrush subscription lapse** at renewal, or request early termination if you're mid-contract.

See also: [Can I Run KompWatch Alongside Semrush During Evaluation?](./can-i-run-kompwatch-alongside-semrush.md)

---

## Migration Reimbursement

If your Semrush contract carries an early-termination fee, KompWatch will reimburse it (up to $500) once you're on a Pro or Team plan. See [Migration Reimbursement for Other Tools](./migration-reimbursement-other-tools.md) for details.

---

## Related Articles

- [Switching from Kompyte to KompWatch](./switching-from-kompyte.md)
- [What Happens to Kompyte After Adobe Acquires Semrush?](./what-happens-to-kompyte-after-adobe-acquires-semrush.md)
- [Can I Run KompWatch Alongside Semrush During Evaluation?](./can-i-run-kompwatch-alongside-semrush.md)
- [What Does KompWatch Track?](./what-does-kompwatch-track.md)
- [Migration Reimbursement for Other Tools](./migration-reimbursement-other-tools.md)

---

*Questions about migrating from Semrush? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will respond within 24 hours.*
