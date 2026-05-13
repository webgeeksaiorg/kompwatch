# ROI Report & Stakeholder Sharing

## What is the ROI report?

The ROI report is a monthly summary of the competitive intelligence value KompWatch has delivered to your team. It lives at **Reports → ROI Report** in your dashboard and covers the last 30 days.

The report shows:

- **Changes detected** — total count, broken down by severity (Low / Medium / High / Critical) and type (Pricing, Feature, Blog, Job, Tech, General)
- **Per-competitor breakdown** — which competitors changed most, ranked by activity
- **Digests sent** — how many AI digest emails were delivered in the period
- **Estimated value** — hours of manual monitoring replaced and an equivalent dollar figure

## How is the estimated value calculated?

Each detected change is estimated to replace approximately **15 minutes of manual monitoring work** — finding the change, reading it, and writing up a summary. KompWatch uses a blended analyst rate of **$75/hour** as a baseline.

> Formula: `total changes × 15 min ÷ 60 × $75/hr`

For example, 40 detected changes = ~10 hours replaced = ~$750 in estimated analyst time saved.

This is a conservative estimate. Your actual savings depend on how many people would otherwise review competitor sites manually and how often.

## How do I share the report with my manager or executive?

Click **Share report** in the top-right corner of the ROI Report page. KompWatch generates a secure, shareable link and copies it to your clipboard automatically.

The person receiving the link can view the report without logging in — no KompWatch account needed. This makes it easy to share with executives, finance, or other stakeholders.

## How long does the shareable link last?

Shareable links are valid for **30 days** from the moment they are generated. After 30 days the link expires and returns an error. Generate a fresh link at any time from the Reports page.

## Is the shareable link secure?

Yes. Links are signed with AES-256 encryption tied to your account. The link encodes your user identity and an expiry timestamp — it cannot be guessed or forged. Anyone with the link can view your report, so treat it like a document link rather than a public URL.

If you believe a link has been shared in error, it will expire automatically within 30 days. There is no way to revoke a specific link early, so generate new links only when you intend to share them.

## Does the shareable report update in real time?

No. The public report reflects the data at the moment the viewer loads the page — it pulls live data for the 30-day window ending now. This means the figures a stakeholder sees will match what you see when you both view it around the same time.

## What time period does the report cover?

Always the **last 30 rolling days** from today. There is no way to select a custom date range at this time. If you need a snapshot of a specific period, generate and share the link during that window.

## Can I include the report in a presentation or email?

Yes. Copy the shareable URL into a slide deck, email, or Slack message. Recipients click it to view the live report in their browser — no PDF required.

## The report shows $0 / 0 changes. Is something wrong?

If you just set up KompWatch, the 30-day window may not contain enough data yet. Changes only appear after KompWatch has taken at least two snapshots of a competitor (it needs a baseline to compare against). Give it 24–48 hours after adding competitors and then revisit.

If you have been running KompWatch for a while and still see zero changes, check that your competitors are **Active** in the dashboard and that the CSS selectors you chose are capturing content that actually changes.

## Which plan includes the ROI report?

The ROI report is available on all plans, including Free.
