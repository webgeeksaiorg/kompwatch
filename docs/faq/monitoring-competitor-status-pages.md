# Can I Monitor a Competitor's Status Page for Outages and Incidents?

**Short answer:** Yes. Public status pages (Statuspage.io, Instatus, status.io, etc.) are among the highest-ROI pages to watch — outage incidents and recurring reliability patterns are powerful sales and messaging signals.

---

## Why Status Pages Are Worth Tracking

When a competitor's service goes down, their customers are frustrated, SLA-sensitive, and actively looking for alternatives. A monitored status page gives your team an early-warning system to act on those moments.

| Signal | What it means |
|--------|--------------|
| **Incident opened** | Customers are impacted now — sales window is open |
| **Incident resolved "after 4 hours"** | Downtime severity gets logged for competitive objection handling |
| **Recurring incidents for the same component** | Systemic reliability issue you can use in competitive positioning |
| **Maintenance window announced** | Engineering debt signal; also flags awkward timing (launch week, quarter-end) |
| **New component added to status page** | Infrastructure expansion — new region, new service, new integration tier |
| **Component removed from status page** | Feature or service quietly sunset |

---

## What Status Page Platforms Look Like

Most SaaS companies use one of a handful of hosted status page platforms:

| Platform | Typical URL pattern | Notes |
|----------|--------------------|----|
| **Atlassian Statuspage** | `status.competitor.com` or `competitor.statuspage.io` | Most common. Good CSS targets. |
| **Instatus** | `status.competitor.com` or `competitor.instatus.com` | Modern, clean HTML. Easy to monitor. |
| **Freshstatus** | `status.competitor.com` | Similar structure to Statuspage. |
| **Custom / self-hosted** | Varies | Usually React or server-rendered. Use `body` first to confirm it loads. |
| **AWS / GCP status** | public dashboards | For infra-layer competitors; noisier, lower signal. |

---

## How to Set It Up in KompWatch

### 1. Find the status page

Most companies link it in their footer or help center. Common URLs:
- `status.competitor.com`
- `competitor.statuspage.io`
- Search: `site:competitor.com "status"` or `competitor status page`

### 2. Add it as a tracked page

Use a name like **"CompetitorName — Status"** to keep it easy to filter in your digest.

### 3. Choose the right CSS selector

Avoid selecting the entire page — the "last updated" timestamp and incident age counters update constantly and create noise.

**For Atlassian Statuspage:**
```
# Incident list (shows active + recent incidents)
.incidents-list, .past-incidents

# Component status grid only (no timestamps)
.components-container .component-inner-container

# Best balance: components + active incidents
.components-section, .unresolved-incidents
```

**For Instatus:**
```
# Component list
.components-list

# Active incidents
.incidents-section
```

**For most others:**
```
# Start broad, then narrow
main

# Then refine to exclude live counters
.components-list, .incident-title
```

### 4. Set the right severity threshold

- Set this competitor entry's threshold to **MEDIUM** — you want to know about real incidents, not timestamp noise.
- If you still see timestamp drift, narrow the selector further using the CSS selector guide.

---

## Recommended Monitoring Frequency

| Plan | Snapshot frequency | For status pages |
|------|-------------------|------------------|
| Free | Daily | Catches resolved incidents within 24h |
| Pro | Every 6 hours | Good for catching active incidents during business hours |
| Team | Hourly | Near-real-time incident awareness |

Pro or Team is recommended if you want to act on incidents while they're happening (not after the fact).

---

## What KompWatch Will and Won't Catch

| Will catch | Won't catch |
|------------|-------------|
| New incident posted to status page | Incidents resolved before next snapshot cycle |
| Component status change (Operational → Degraded) | Real-time alerts (KompWatch is not a monitoring tool for your own uptime) |
| Maintenance window announced | Private or customer-only incident updates |
| New component added to the page | Incident postmortems posted to a blog (monitor their blog separately) |
| Historical incident trend changes | Sub-minute outages |

---

## Using Outage Signals in Sales and Marketing

Once KompWatch flags a competitor incident in your digest, your team can act immediately:

- **Sales**: SDRs can check if any open prospects are on the affected competitor and reach out with a well-timed, empathetic note — not an aggressive pitch.
- **Marketing**: If the outage is significant (4+ hours, widespread), add it to your reliability comparison page or battlecard. Link to the public incident page as a source.
- **CS**: Alert your customer success team so they can proactively reach out to customers who may be evaluating the competitor.

---

## Combining Status Page Data with Other Signals

Status page monitoring is most powerful when combined with:

- **Job postings** — recurring infra incidents + heavy SRE/DevOps hiring = structural reliability problem, not a one-off
- **Changelog** — a competitor repeatedly patching the same component signals deeper instability
- **G2/Capterra reviews** — user reviews mentioning "downtime" or "reliability" will cluster around incident dates

Use the digest's change timeline to correlate these signals.

---

## FAQ

**"The status page shows 99.99% uptime — is it reliable?"**
Self-reported uptime numbers are calculated from incidents the company chooses to log. Track the raw incident history over time — frequency, duration, and affected components tell a more accurate story than the headline SLA figure.

**"I'm getting a change every cycle but nothing is actually different."**
The page likely has a live "time since last incident" or "last checked" counter in your selected area. Narrow the selector to exclude those elements. See [CSS Selectors](./css-selectors.md).

**"Can I monitor multiple competitors' status pages?"**
Yes — add each as a separate tracked page. Name them clearly ("Klue — Status", "Crayon — Status") so your digest is easy to scan. On Pro you can track up to 10 competitors; each URL counts toward that limit.

**"Their status page requires a login."**
Some enterprise vendors gate their status page to paying customers. If there's no public status page, monitor their Twitter/X account or `/blog` for incident postmortems instead. Search-filtering by "incident" on their newsroom can surface the same information.

---

*Related: [Monitoring Competitor Changelogs and Release Notes](./monitoring-competitor-changelog-and-release-notes.md) · [Which Pages to Monitor per Competitor](./which-pages-to-monitor-per-competitor.md) · [Managing Alert Fatigue](./managing-alert-fatigue.md) · [Monitoring Competitor Blog and Content Strategy](./monitoring-competitor-blog-and-content-strategy.md)*
