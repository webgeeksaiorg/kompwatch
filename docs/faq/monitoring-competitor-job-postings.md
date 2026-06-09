# Can KompWatch monitor competitor job postings?

**Short answer:** Yes — by pointing KompWatch at your competitor's careers page, you get automatic alerts whenever they add or remove roles.

## Why job postings are a top-tier competitive signal

Hiring activity reveals intent before any press release does:

| Signal | What it means |
|---|---|
| Surge in ML/AI engineer roles | Competitor building AI feature |
| New "Head of Enterprise Sales" | Moving upmarket |
| 10+ SDR postings | Aggressive outbound push |
| No new hires for 60+ days | Budget freeze or post-layoff pause |
| Removing roles mid-search | Pivot or reorg underway |

Product and marketing teams that watch competitor careers pages often get 3–6 months of advance warning on strategic moves.

## How to set it up

1. **Find the careers URL** — usually `/careers`, `/jobs`, or `jobs.example.com`. Check the footer link.
2. **Add it as a competitor page** in KompWatch (Settings → Competitors → Add Page).
3. **Set the CSS selector** to scope tracking to the job listings section — e.g., `#open-roles`, `.job-list`, or `main`. This filters out nav/footer noise.
4. **Set alert sensitivity** to Medium or High — job pages tend to change in discrete chunks, so most signal is genuine.

> **Tip:** Some companies use third-party ATS platforms (Greenhouse, Lever, Ashby, Workday). The public-facing listing page is still trackable — just use that URL rather than the raw ATS URL.

## What KompWatch detects

- **New roles added** — captured in the next snapshot cycle (hourly on Team plan, every 6h on Pro)
- **Roles removed or filled** — listed as CONTENT change with diff showing removed text
- **Location or salary range changes** — picked up if the page renders them in HTML (not all do)
- **Page redesigns** — if the careers page gets a full refresh, KompWatch flags it as a structural change

## What KompWatch doesn't detect

- **Number of applicants** — that data is internal and not on the public page
- **LinkedIn job postings** — LinkedIn blocks automated access; use their job alerts natively for that
- **Job descriptions inside ATS portals** — only the listing page is tracked, not individual JD detail pages (unless you add each one separately)

## Suggested workflow

1. Add `{competitor}.com/careers` to KompWatch
2. Set digest frequency to **Daily** (Pro) or **Real-time** (Team) for this page
3. Forward HIGH severity alerts to a `#competitor-hiring` Slack channel via the Slack integration
4. Review weekly in your competitive review meeting alongside pricing and product changes

## Connecting hiring signals to strategy

A useful exercise: when KompWatch flags a new role, ask:

- Does this role overlap with something we're building?
- Is this a new capability or scaling an existing one?
- Does the job description mention our product category or name competitors?

Many job descriptions include explicit mentions of the competitive landscape the new hire will be working in — free intel hiding in plain sight.

## Plan availability

| Feature | Free | Pro | Team |
|---|---|---|---|
| Track careers page | ✅ (up to 2 pages total) | ✅ | ✅ |
| Snapshot frequency | Daily | Every 6h | Hourly |
| Slack/webhook alerts | ❌ | ✅ | ✅ |
| Multiple pages per competitor | ❌ | ✅ | ✅ |

*Related: [Which pages to monitor per competitor](./which-pages-to-monitor-per-competitor.md) · [Monitoring competitor press and newsrooms](./monitoring-competitor-press-and-newsrooms.md) · [Tracking competitor funding and acquisitions](./tracking-competitor-funding-and-acquisitions.md)*
