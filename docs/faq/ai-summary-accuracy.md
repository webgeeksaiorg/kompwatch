# How Accurate Are KompWatch's AI-Generated Summaries?

KompWatch uses Claude (Anthropic's AI) to summarize competitor changes detected between snapshots. This article explains how summaries are generated and what to do if one looks off.

## How AI Summaries Are Generated

When KompWatch detects a change between two snapshots of a competitor's page, it sends the **HTML diff** (before and after) to Claude with instructions to:

1. Describe what changed in plain English
2. Classify the change type (Pricing, Feature, Blog, Job, Tech, or General)
3. Assess severity (Low, Medium, High, or Critical) based on competitive impact

The summary is written from the diff — it doesn't browse the live page or interpret intent beyond what's visible in the HTML.

## What AI Summaries Are Good At

- **Pricing changes** — detecting price increases, new plans, removed tiers, or trial offer changes. These are structured and explicit, so summaries are typically very accurate.
- **Feature copy changes** — new capabilities added to a features page, plan limit changes, or headline rewrites.
- **Blog posts** — identifying new posts, their topic, and likely intent (product launch, hiring push, etc.).
- **Job listings** — summarizing new roles and inferring hiring signals (e.g. "3 new ML engineers — likely building AI features").

## Where AI Summaries May Be Less Precise

- **Minor wording tweaks** — small copy changes (e.g. "Best" → "Top") are detected accurately but the *impact* assessment may vary.
- **Visual-only changes** — if a competitor restructures their layout without changing copy, summaries describe what moved, not necessarily why.
- **Non-English pages** — AI summaries default to English. Accuracy on non-English competitor pages is lower.
- **Heavily JavaScript-rendered content** — if a page requires interaction to display content, the snapshot may be incomplete. See [Monitoring JavaScript / SPA sites](./monitoring-javascript-spa-sites.md).

## What If a Summary Seems Wrong?

1. **View the raw change** — on the competitor detail page, each change card has a **"View diff"** link showing the exact HTML before and after. This is the source the AI worked from.
2. **Check the page directly** — if something looks major in the summary, verify against the live competitor page.
3. **Report inaccurate summaries** — email [support@kompwatch.com](mailto:support@kompwatch.com) with the competitor name and change date. We review flagged summaries to improve prompts.

## Does KompWatch Fabricate Changes?

No. Every AI summary corresponds to a real detected diff between two snapshots. KompWatch never generates summaries for pages that haven't changed — if there's a summary, there was a detected change. The AI may occasionally mischaracterize *what* changed, but it does not invent changes that didn't happen.

## How Are Severity Levels Assigned?

Severity is AI-assessed based on competitive impact signals:

| Severity | What triggers it |
|----------|-----------------|
| **Low** | Minor copy tweak, single new job listing, blog post |
| **Medium** | New feature mentioned, multiple new hires, copy refresh |
| **High** | Pricing change, major feature launch, significant positioning shift |
| **Critical** | Acquisition signals, complete pricing model change, strategic pivot |

You can filter your digest and dashboard to show only changes at or above a severity threshold in **Settings → Notifications**. See [Change Severity Levels](./change-severity-levels.md).

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
