# I Noticed a Competitor Change — Why Didn't KompWatch Catch It?

KompWatch caught something, but it didn't reach you. Or the change slipped through the monitoring window entirely. Here's how to diagnose what happened and prevent it next time.

---

## Step 1: Check Whether the Change Was Detected But Filtered

The most common reason you didn't see an alert is that KompWatch **did detect the change** — but it was filtered before it reached your inbox.

**Check your severity floor:**

1. Go to **Settings → Digest Preferences → Minimum severity**
2. If it's set to **High** or **Critical**, changes classified as Medium or Low won't appear in your digest

If a competitor updated a single line of body copy or added a blog post, that typically lands as **Low severity** — correct classification, but invisible if your floor is set higher.

**Fix:** Lower the severity floor to **Medium** temporarily to see if the change is already in your history. You can raise it again after reviewing.

---

## Step 2: Check the Competitor's Change History

Even if a change didn't reach your digest, KompWatch stores all detected changes in the competitor's detail page.

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click the competitor's name
3. Scroll to **Change History**

Changes are listed here regardless of severity floor or digest settings. If the change appears here, it was detected — the delivery pipeline filtered it, not the detection layer.

---

## Step 3: Check Whether the Change Happened Between Snapshot Cycles

KompWatch snapshots competitors on a schedule. If your competitor changed and then reverted their site **between two snapshots**, KompWatch never saw the changed state.

| Plan | Snapshot frequency | Blind spot window |
|------|--------------------|-------------------|
| Free | Every 24 hours | Up to 24 hours |
| Pro | Every 6 hours | Up to 6 hours |
| Team | Every hour | Up to 1 hour |

**Example:** A competitor A/B tested a new pricing headline on Monday from 2pm–6pm, then reverted it. On a Pro plan with a 6-hour window, KompWatch may have snapshotted at 12pm (before) and 6pm (after the revert) — both snapshots showing the same original page. No change detected.

**Fix:** Upgrade to a higher plan tier for a smaller monitoring window, or trigger a manual snapshot immediately when you notice a change you want to investigate. See [On-Demand Snapshot Refresh →](./manual-snapshot-trigger.md).

---

## Step 4: Check If the CSS Selector Excluded the Changed Section

If you've narrowed monitoring to a specific section (e.g., `#pricing`, `.hero-copy`), changes outside that selector are intentionally ignored.

1. Open the competitor's detail page → click **Edit**
2. Check the **CSS selector** field

If the changed content lives outside the selector, KompWatch won't diff it. For example:
- Selector: `#pricing` — a new blog post won't be caught
- Selector: `.hero-content` — a pricing table update won't be caught

**Fix:** Widen the selector to include the relevant section, or add a second URL tracking that section specifically. See [Monitoring Multiple Pages Per Competitor →](./monitoring-multiple-pages-per-competitor.md).

---

## Step 5: Check Whether the Snapshot Failed That Cycle

If the snapshot failed (anti-bot challenge, timeout, site outage), no diff was generated — meaning real changes on that cycle were missed.

1. Open the competitor's detail page
2. Look at the snapshot timeline for gaps or warning badges
3. A **warning badge** or gap in the timeline means that cycle produced no snapshot

If your competitor updated their site during a stretch of consecutive snapshot failures, those intermediate changes won't be in your history.

**Fix:** See [Snapshot Errors and Warning States →](./snapshot-errors-and-warning-states.md) for how to diagnose and resolve failure states.

---

## Step 6: The Change Was in Dynamically Loaded Content

Some competitor sites load pricing or feature content via JavaScript after the initial page render. If the content you're looking for is injected by a client-side framework after a delay, KompWatch may have captured the skeleton page but missed the content.

**Signs this is the problem:**
- The competitor's site is built with React, Vue, or Next.js
- The changed section is behind a tab, accordion, or lazy-loaded component
- Your snapshot preview (on the competitor detail page) shows the page but the specific section is blank or truncated

**Fix:** Try adding a more specific CSS selector that points to the component that renders after load, or contact [support@kompwatch.com](mailto:support@kompwatch.com) — we can configure a wait time or interaction step for complex competitor pages. See [Monitoring JavaScript / SPA Sites →](./monitoring-javascript-spa-sites.md).

---

## Quick Diagnostic Checklist

| Check | Where to look |
|-------|--------------|
| Change detected but filtered? | Competitor → Change History |
| Severity floor hiding it? | Settings → Digest Preferences → Minimum severity |
| Snapshot failure that cycle? | Competitor → detail page → snapshot timeline |
| CSS selector too narrow? | Competitor → Edit → CSS selector field |
| Change happened between cycles? | Compare snapshot timestamps to when the change occurred |
| Dynamic content not rendered? | Snapshot preview in competitor detail page |

---

## When to Contact Support

If you've checked all of the above and the change still isn't in the competitor's history:

- Email [support@kompwatch.com](mailto:support@kompwatch.com) with the competitor URL, the approximate date of the change, and what changed
- Include a screenshot of the changed page if possible
- We'll review the raw snapshot for that cycle and investigate

---

## Related Articles

- [Why Don't I See Any Changes Yet? (new competitors)](./why-no-changes-yet.md)
- [Snapshot Errors and Warning States](./snapshot-errors-and-warning-states.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [On-Demand Snapshot Refresh](./manual-snapshot-trigger.md)
- [Monitoring JavaScript / SPA Sites](./monitoring-javascript-spa-sites.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)

---

*Something still not adding up? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll dig into the raw snapshot data with you.*
