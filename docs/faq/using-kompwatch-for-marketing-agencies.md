# Using KompWatch for Marketing Agencies

If you run a digital marketing agency, content agency, or competitive intelligence consultancy, you're likely tracking competitors **for clients** rather than for your own company. This article covers how to set up KompWatch for multi-client agency work, how to deliver reports, and what limitations to plan around.

## Can I Monitor Competitors for Multiple Clients in One Account?

Yes. Each **competitor entry** in KompWatch is just a URL + an optional CSS selector — there's no requirement that the competitors belong to the same industry or even the same client. On a **Team plan** (up to 50 competitors), most agencies can monitor 5–10 competitors per client across 5–8 active clients from a single account.

**Recommended naming convention:**

Use a client prefix in the competitor name field to keep things organized:

| Name field | URL |
|---|---|
| `AcmeCo — Competitor A` | `competitor-a.com/pricing` |
| `AcmeCo — Competitor B` | `competitor-b.com/features` |
| `ClientX — Rival 1` | `rival1.io` |

This keeps the competitor list readable and makes it easy to filter when exporting.

## What Plan Should an Agency Use?

| Scenario | Recommended plan |
|---|---|
| 1–2 clients, 2–4 competitors each | **Pro** ($49/mo, 10 competitors) |
| 3–6 clients, 3–8 competitors each | **Team** ($149/mo, 50 competitors) |
| Large agency (6+ active clients) | **Team** + trim inactive clients quarterly |

Annual billing saves 20% — see [Annual Billing](./annual-billing.md). If you're managing a continuous retainer, the annual rate works out to $39/mo (Pro) or $119/mo (Team).

## Delivering Competitive Intelligence to Clients

### Option 1: Export CSV or JSON

Go to any competitor's detail page and click **Export CSV**. This produces a timestamped change record you can paste into a client report, Google Sheet, or Notion doc. For a full account export (all competitors), use the **Export CSV** button on the main dashboard.

Use this for: monthly competitive review decks, weekly Slack summaries, quarterly CI report attachments.

### Option 2: Share the ROI / Activity Report (Pro and Team)

Go to **[kompwatch.com/reports/roi](https://kompwatch.com/reports/roi)** → click **Share Report** to generate a public, read-only link with a 30-day expiry. Your client can open it in a browser — no KompWatch account required.

Limitation: the report covers your full account, not per-client. Filter your active competitors to the target client before sharing, or use this for single-client accounts.

### Option 3: Forward Digests to a Client Alias

On **Pro or Team**, you can set the digest delivery address to a shared client alias (e.g. `competitive@clientcompany.com`). The client gets the same AI-generated digest you would. This works best when:
- The client is hands-off and just wants the weekly or daily summary
- You're augmenting their existing process rather than building a full CI program for them

Go to **Settings → Notifications → Email** to update the delivery address.

### Option 4: Slack Channel Delivery

If your client uses Slack, connect a webhook in **Settings → Integrations → Slack** pointing to a channel in their workspace. HIGH and CRITICAL changes post automatically — the client sees competitor alerts in context without needing to log in.

**Team plan only** for real-time alerts. Pro delivers at digest cadence (daily).

## Is There White-Labeling?

Not currently. Digest emails and the dashboard show the KompWatch brand. If white-labeled reporting is important, use the **Export CSV** route and reformat into your own report template.

## Can I Give a Client Their Own Login?

KompWatch does not currently support sub-accounts or role-based access control for client users. If you want a client to have their own dashboard access, the practical options are:

1. **Create a separate KompWatch account for the client** — they subscribe independently, and you help them configure it. This works well when clients are tech-savvy or want to self-serve after initial setup.
2. **Share a read-only report link** — no login required; generated from **reports/roi**.
3. **Use a shared login** — not recommended for security reasons, but technically possible if the client needs occasional dashboard access.

Multi-client account management with per-client access controls is on the product roadmap as a Team+ feature.

## How Do I Hand Off a Client's Data When Offboarding?

1. Export the full change history for their competitors via **Export CSV** (per-competitor or full account).
2. Note down the competitor URLs and CSS selectors from the [Competitors page](https://kompwatch.com/competitors) — the client will need these to set up their own account if they continue without you.
3. Delete or pause the client's competitor entries to free up slots for new clients.

KompWatch does not offer account data transfer between users at this time. Exports are the handoff mechanism.

## What Doesn't Work Well for Agency Use

- **No per-client isolation** — all competitors live in one list; naming conventions are your only organizational tool
- **No per-client billing** — you can't split the subscription cost across client invoices automatically; you'd need to build that into your retainer pricing
- **No white-label exports** — reports display KompWatch branding
- **Digest email is account-wide** — you can't send one digest for Client A and a separate digest for Client B from the same account

If these limitations are blockers, email [support@kompwatch.com](mailto:support@kompwatch.com) — agency feature requests directly shape the roadmap.

## Tips for Agency Workflows

- **Rotate competitors quarterly.** Delete inactive client competitors to free up Team slots for new clients. Export before deleting.
- **Use CSS selectors aggressively.** Clients don't want noise — target `/pricing`, `/features`, and `/about` specifically rather than monitoring the full homepage.
- **Set severity to HIGH+** for client-facing digests. Low and Medium changes produce noise that erodes client trust in the signal.
- **Document selectors.** Store the competitor URLs + CSS selectors in your CRM or Notion alongside the client record — saves setup time when you re-add them later.

## Related Articles

- [Using KompWatch Insights for Marketing Teams](./using-insights-for-marketing-teams.md)
- [Exporting Your Data](./exporting-your-data.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Annual Billing](./annual-billing.md)
- [Managing Competitors](./managing-competitors.md)
- [CSS Selector Targeting](./css-selectors.md)
- [Proving the ROI of Competitive Intelligence](./proving-roi-of-competitive-intelligence.md)

---
*Running an agency and need a feature we don't have? Email [support@kompwatch.com](mailto:support@kompwatch.com) — agency workflows are actively being shaped by user feedback.*
