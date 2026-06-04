# Managing Alert Fatigue

**Short answer:** Too many low-signal alerts is almost always a selector problem or a severity-threshold problem. Fix the root cause instead of ignoring the digest — you'll miss what matters if you tune out.

---

## Why alert fatigue happens

KompWatch captures everything that changes within the element you're tracking. If you set the selector to `body`, you get navigation tweaks, footer copyright year bumps, cookie-banner text updates, and A/B test variants alongside the pricing change you actually care about.

The fix is almost always one of three things:

1. **Narrow the CSS selector** — scope to the content region, not the full page
2. **Raise the severity floor** — stop receiving LOW-severity changes
3. **Reduce snapshot frequency** — check less often for slow-moving pages

---

## Step 1 — Fix your CSS selector first

This is the highest-leverage change you can make. Open **Competitors → [Name] → Edit** and update the selector.

| What you're tracking | Good selector |
|---|---|
| Pricing tiers and prices | `#pricing`, `.pricing-table`, `[data-section="pricing"]` |
| Feature list | `.features`, `#features`, `main .feature-grid` |
| Homepage hero / messaging | `.hero`, `header .hero-content` |
| Careers / job listings | `#jobs`, `.positions-list`, `main` |
| Changelog entries | `.changelog-entries`, `article` |

**Avoid:** `body`, `div`, `main` on pages with heavy navigation, live chat widgets, or personalization. These generate 5–10× more changes than a scoped selector.

**Test your selector** before saving: open your browser's DevTools console on the competitor's page and run `document.querySelector('YOUR_SELECTOR')`. If it returns a small, stable element, you're good.

---

## Step 2 — Raise the confidence threshold

KompWatch's AI assigns a **confidence score** (0–100%) to every detected change — a measure of how likely the change is genuine vs. noise (A/B test variant, CDN drift, session token). You can raise the minimum confidence required to fire an instant alert:

1. Go to **Settings → Notifications → Alert Confidence Threshold**
2. Set to **85%** for low-noise environments, or **50%** for maximum coverage

Changes below 40% confidence are discarded automatically and never stored. Changes between 40–69% are stored but excluded from instant alerts by default. See [AI Confidence Scoring →](./ai-confidence-scoring.md) for the full breakdown.

---

## Step 3 — Set a severity floor in your digest settings

Go to **Settings → Digest Preferences** and set the minimum severity to include:

| Severity floor | What you receive |
|---|---|
| LOW (default) | Everything — layout tweaks, typo fixes, minor copy changes |
| MEDIUM | Meaningful changes — pricing deltas, feature additions, messaging shifts |
| HIGH | Only significant moves — new tiers, major feature launches, positioning pivots |
| CRITICAL only | Rare, major events — free tier added, acquisition, price restructure |

For most teams, **MEDIUM** is the right floor. You'll get roughly 80% less volume and lose very little signal.

---

## Step 4 — Reduce snapshot frequency for slow-moving pages

Not every competitor needs hourly snapshots. Pricing pages typically change a few times per quarter. For competitors you watch but don't consider primary threats:

- **Pro plan:** Change from every 6 hours to daily (contact support to adjust per-competitor cadence)
- **Free plan:** Already on daily — this is actually appropriate for most monitoring needs

Leave hourly cadence for your top 2–3 direct competitors only.

---

## What NOT to do

**Don't unsubscribe from the digest.** The digest is the output — the problem is the input. Unsubscribing means you stop seeing legitimate changes.

**Don't delete and re-add a competitor.** You'll lose change history. Edit the selector in place instead.

**Don't set everything to CRITICAL.** CRITICAL severity is reserved for events KompWatch detects as structurally significant (pricing model changes, feature category additions, major content removal). You can't manually tag changes as CRITICAL — the AI classifier assigns severity based on what changed.

---

## Diagnosing a noisy competitor

If a specific competitor generates 10+ low-value alerts per week:

1. Go to **Competitors → [Name] → Change History**
2. Filter by **Severity: LOW** to surface the lowest-signal changes first
3. Use the **Change Type** filter bar (Pricing / Feature / Content / Visual) to isolate the category of noise — Visual and Content changes are typically the highest-volume noise sources
4. Look at the `diff` field — what's actually changing? Nav text? Cookie consent text? Dynamic ad content?
5. Update the selector to exclude that region, or switch to a more specific sub-selector

If the page is a JavaScript SPA with a lot of client-side dynamic content, see [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md) for additional strategies.

---

## Team digest settings

If you're on the **Team plan** and multiple teammates are getting overwhelmed:

- Have each team member set their own severity floor (digest preferences are per-user)
- Assign ownership of specific competitors to specific people — Sales owns pricing pages, Product owns feature pages
- Use the digest's **filter by competitor** feature for weekly team reviews instead of real-time alerts

---

## What Does "3 Alerts/Week, Not 300" Mean on the Homepage?

Some visitors see a callout on the KompWatch homepage that reads **"3 alerts/week, not 300"** in the features section. Here's exactly what that means and how the figure is derived.

**The claim:** KompWatch users receive an average of **~3 meaningful competitor alerts per week per tracked competitor**, compared to raw-change monitoring tools that surface 100–300+ raw diffs per week for the same competitor.

**How raw-change tools generate 300+ alerts:**
A typical competitor website changes dozens of times per week — footer copyright text, cookie consent banners, nav link hover states, A/B test variants cycling in/out, CDN-injected analytics scripts, session tokens embedded in the HTML, and CSS micro-tweaks. Raw-change tools (VisualPing, Distill, basic website diff scrapers) report every single one of these as a change event. For a single tracked competitor across 3–5 pages, that's easily 50–300+ raw diffs per week.

**How KompWatch filters to ~3:**
Before an alert is created, KompWatch applies three sequential filters:

1. **Confidence scoring** — the AI assigns a 0–100% confidence score. Changes below 40% (A/B test variants, CDN drift, dynamic ad content, session tokens) are discarded before storage.
2. **Severity classification** — the AI classifies each surviving change as LOW / MEDIUM / HIGH / CRITICAL based on what changed. By default, only MEDIUM and above reach your digest.
3. **Change-type deduplication** — consecutive snapshots that show the same noise pattern are grouped into a single change event, not separate alerts.

After filtering, the median KompWatch user sees **2–4 meaningful alerts per week per competitor** — pricing moves, feature launches, messaging pivots, and job-posting signals.

**The 300 figure is a representative upper bound**, not a universal average. Raw-change volume varies widely: a heavily personalized SPA homepage can generate 500+ raw diffs per week; a simple static pricing page might only generate 20. The "300" figure reflects median raw-change volume observed across comparable monitoring tools for active SaaS competitor sites.

**Why "avg alerts per tracked competitor"?**
The attribution line says "Based on avg alerts per tracked competitor vs raw-change CI tools" because the per-competitor figure normalizes for the number of competitors tracked — some users monitor 2, others monitor 50.

Not all visitors see this callout — it's part of an ongoing A/B test.

---

## Related articles

- [AI Confidence Scoring — How KompWatch Filters Change Noise](./ai-confidence-scoring.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Understanding Your Digest](./understanding-your-digest.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md)
- [Change Severity Levels — What LOW / MEDIUM / HIGH Mean](./change-severity-levels.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
