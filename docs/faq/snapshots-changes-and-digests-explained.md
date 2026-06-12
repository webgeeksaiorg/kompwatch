# Snapshots, Changes, and Digests — What's the Difference?

**Last updated:** 2026-06-12

---

## Quick answer

KompWatch has three core concepts, each serving a different purpose:

| Concept | What it is | When you see it |
|---------|-----------|-----------------|
| **Snapshot** | A captured copy of a competitor page at a point in time | Taken automatically on your plan's schedule |
| **Change** | A detected difference between two consecutive snapshots | Shown in the dashboard under each competitor |
| **Digest** | A curated AI-written summary of recent changes, delivered by email | Sent on your plan's digest schedule |

---

## Snapshot

A **snapshot** is a full capture of a competitor webpage — HTML content and a screenshot — taken by KompWatch's headless browser at a scheduled time.

- **Free plan:** one snapshot per day, per competitor
- **Pro plan:** one snapshot every 6 hours
- **Team plan:** one snapshot every hour

The first snapshot you trigger creates a **baseline**. Nothing is flagged as a change yet — KompWatch is just establishing what the page looks like right now.

Snapshots are stored in your account and can be browsed in the **Competitors → [name] → History** view. You can scroll back through snapshots to see how a competitor's page looked at any point in time.

---

## Change

A **change** is detected when KompWatch compares a new snapshot to the previous one and finds a meaningful difference. Not every HTML difference becomes a change — KompWatch filters out noise like updated timestamps, ad content, and dynamic session tokens.

Changes are categorized by type and severity:

| Type | Example |
|------|---------|
| `CONTENT` | Rewritten homepage hero, updated blog post, new testimonial |
| `PRICING` | Price change, new tier added, discount added or removed |
| `FEATURE` | New feature bullet on product page, item removed from features list |
| `VISUAL` | Layout change detected in screenshot diff |

| Severity | Meaning |
|----------|---------|
| `LOW` | Minor copy edit, small formatting change |
| `MEDIUM` | Notable update that's worth reviewing |
| `HIGH` | Meaningful change — pricing update, feature launch, major messaging shift |
| `CRITICAL` | Significant change requiring prompt attention (e.g. major price drop) |

Changes are shown in the **Dashboard** and in each competitor's detail view. You can filter by type, severity, and date range.

---

## Digest

A **digest** is an email report, written by KompWatch's AI, that summarizes recent changes across all your tracked competitors in one place. Instead of checking the dashboard manually, your digest surfaces what actually matters.

Each digest includes:
- A prioritized list of changes, ranked by severity
- AI-generated summaries explaining *what* changed and *why it might matter* for your business
- Direct links to view the diff in the dashboard

Digest schedules by plan:

| Plan | Digest frequency |
|------|-----------------|
| Free | Weekly |
| Pro | Daily |
| Team | Real-time (triggered by HIGH/CRITICAL changes) |

Digests are also archived in **Digests** in your dashboard — you can search past digests by keyword or date.

---

## How They Flow Together

```
Scheduled cron
     ↓
Snapshot taken (e.g., every 6h on Pro)
     ↓
Compared to previous snapshot
     ↓
Changes detected & stored (if any)
     ↓
Included in next digest email
```

If no snapshot detects any changes during a period, no digest is sent — KompWatch only emails you when something actually happened.

---

## Related

- [How often does KompWatch check my competitors?](./snapshot-frequency.md)
- [Why haven't I seen any changes yet?](./why-no-changes-yet.md)
- [Understanding your digest email](./understanding-your-digest.md)
- [Filtering digest noise](./filtering-digest-noise.md)
- [Setting CSS selectors for better change detection](./setting-css-selectors.md)
