# How to Turn KompWatch Digests Into an Internal Competitive Intelligence Newsletter

**Short answer:** Forward your weekly digest, or build a lightweight one-page CI update using KompWatch export data. 10 minutes per week keeps your whole team informed without anyone needing dashboard access.

---

## Why Distribute CI Internally?

Most teams that use KompWatch have one person who owns the monitoring — a PMM, a sales enablement lead, a founder, or a head of product. The challenge is getting the insights from that one person to the people who need them: sales reps, account managers, product managers, and executives.

The wrong approach: everyone logs into the dashboard. The right approach: the CI owner distills the relevant changes and pushes them out in a format their team actually reads.

---

## Option 1: Forward the Weekly Digest (2 Minutes)

The simplest approach. When your KompWatch digest arrives, forward it to a distribution list or a Slack channel.

**How to set this up:**
1. Create a team email alias or Slack email integration (e.g., `ci-alerts@yourcompany.com` → `#competitive-intel` Slack channel)
2. Add the alias as an additional digest recipient in KompWatch — see [Custom Digest Recipients](./custom-digest-recipients.md)
3. Done. Everyone on the alias gets the digest without any extra work from you.

**Works best for:** Sales teams and product teams who want raw signal. They'll read it when relevant, ignore it otherwise. Low effort, low curation.

**Limitation:** The raw digest includes every change including LOW severity items. If your team is busy, they may tune it out. Curation is better for executives.

---

## Option 2: A Weekly CI Slack Post (10 Minutes)

A curated one-paragraph summary sent to `#competitive-intel` every Monday morning performs better than a forwarded digest for most teams.

**Template:**

```
📊 *Competitive Update — Week of [date]*

🔴 *High-priority:* [Competitor] changed their pricing — [one sentence describing what changed and why it matters]. Updating battlecard now.

🟡 *Worth knowing:* [Competitor] updated their features page — added [X] to the [Plan] tier. No action needed but good context for deals where [X] comes up.

🟢 *Quiet week for:* [Competitor], [Competitor].

Full details: [link to KompWatch dashboard or shareable report]
```

**Timing:** Monday 9am works well — it primes sales reps for the week's conversations before they hit their first call.

**Tips:**
- Don't include LOW severity changes in the Slack post. They're in the full digest for anyone who wants them.
- If there are no HIGH changes that week, say so. "Nothing significant changed this week across all 5 competitors" is useful signal.
- Rotate in one "context" note every few weeks — e.g. "Competitor X has been quiet for 6 weeks. Last time this happened, they shipped a major feature update two weeks later."

---

## Option 3: A Bi-Weekly Email to Leadership (15 Minutes)

For executive audiences — VP of Sales, CEO, CPO — a bi-weekly email with 3–5 bullet points outperforms a forwarded digest.

**Format:**

**Subject:** Competitive landscape — [dates]

> - **[Competitor A]** dropped their Pro tier from $99 to $79. Their free tier limits tightened at the same time. Reading: price pressure at the low end, not a strategic move.
> - **[Competitor B]** published a new `/vs/[your-brand]` page. They're making 3 claims about [specific feature]. I've updated the battlecard to address them.
> - **[Competitor C]** posted 4 ML engineering roles in 3 weeks. Something AI-related is shipping in Q2 based on the job descriptions.
> - No significant changes from [Competitor D] or [Competitor E] this period.

**Why this format works:** Executives don't want dashboards or raw diffs. They want the 3 things that matter and what to do about them. This format respects their time and makes you look sharp.

---

## Using Shareable Report Links

For async distribution, use KompWatch's shareable report links to give stakeholders a read-only view of recent changes without logging in.

1. Go to **Reports** in the KompWatch dashboard
2. Click **Share** on a digest or change history report
3. Copy the shareable link (read-only, no account required)
4. Include in your Slack post, email, or Notion page

See [Shareable Report Links](./shareable-report-link.md) for details.

---

## For Teams With a Notion or Confluence Wiki

If your team uses a Notion or Confluence page as a competitive intelligence hub, KompWatch fits in as the live data feed:

- **Paste the shareable link** into your Competitor page as an embedded view or a "See latest changes" link
- **Update the battlecard** on the wiki page within 24 hours of any HIGH severity change
- **Keep a running "changelog"** section on each competitor page — one bullet per significant change, dated

The wiki page becomes the canonical source; KompWatch provides the detection layer that keeps it current.

See [Notion Integration](./notion-integration.md) if you want to automate pushing change summaries directly into Notion.

---

## Who Should Own the Internal Newsletter?

| Role | Good owner? | Notes |
|------|-------------|-------|
| PMM or Product Marketing | ✅ Best fit | CI is already in their remit; this formalizes it |
| Founder / CEO (early stage) | ✅ Good | Before you have a PMM, 10 min/week from the founder works |
| Sales Enablement | ✅ Works | Especially if sales is the primary consumer of CI |
| Head of Product | ⚠️ Partial | Good for product-facing CI; may miss sales angle |
| BDR or AE | ❌ Not ideal | Too close to deals; CI needs to serve the whole team |

If nobody owns it, nobody reads it. Assign one person.

---

## Related FAQs

- [Custom Digest Recipients](./custom-digest-recipients.md)
- [Sharing Digests With Your Team](./sharing-digests-with-your-team.md)
- [How to Share CI With Your Sales Team](./how-to-share-ci-with-sales-team.md)
- [Shareable Report Links](./shareable-report-link.md)
- [Notion Integration](./notion-integration.md)
- [Running a Bi-Weekly Competitive Review](./running-a-bi-weekly-competitive-review.md)
- [Preparing a Quarterly Competitive Report](./preparing-a-quarterly-competitive-report.md)
- [Using Insights for Executives](./using-insights-for-executives.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
