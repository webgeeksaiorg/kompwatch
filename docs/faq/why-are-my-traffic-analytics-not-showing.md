# Why Are My Traffic / Analytics Stats Not Showing?

KompWatch uses **Plausible Analytics** (self-hosted, privacy-first) to power traffic
and conversion metrics inside the dashboard.

## Common Reasons Stats Look Empty or Blank

### 1. Analytics Are Still Initialising
If you signed up recently, it can take **up to 24 hours** for your first traffic data
to appear. Plausible batches pageview aggregates before surfacing them in the UI.

**What to do:** Wait until the following day and refresh your dashboard.

### 2. Ad-Blocker or Privacy Extension Is Filtering the Script
Plausible's tracking script (`/js/script.js`) is occasionally blocked by aggressive
browser extensions (uBlock Origin strict mode, Privacy Badger, Brave Shields).

**What to do:**
- Try in a private/incognito window with extensions disabled.
- Your own page-views are excluded from competitor tracking stats regardless — this
  only affects the *traffic analytics* panel for your own marketing pages.

### 3. JavaScript Is Disabled in Your Browser
The analytics panel requires JavaScript to render the chart components.

**What to do:** Ensure JavaScript is enabled for `app.kompwatch.com`.

### 4. Temporary Service Disruption
Occasionally Plausible reporting can lag during high-traffic periods or planned
maintenance.

**What to do:**
- Check the [KompWatch status page](https://status.kompwatch.com) for any active
  incidents.
- If no incident is listed and stats are still missing after 24 hours, contact support.

---

## Does This Affect My Competitor Monitoring?

**No.** Competitor snapshot monitoring, change detection, and digest delivery run on a
completely separate pipeline. A Plausible outage **does not affect**:
- Competitor website snapshots
- Change alerts and notifications
- AI-generated digest emails
- Your subscription or billing

Only the *traffic/visitor analytics* panel inside the dashboard is affected.

---

## Still Not Working?

Reply to any KompWatch email or use the in-app chat. Include:
1. Your account email
2. A screenshot of the blank analytics panel
3. The browser and OS you're using

A team member will follow up within 24 hours.
