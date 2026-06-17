---
platform: blog
type: article
status: ready
score: 8.5/10
keywords: [google alerts competitor monitoring, google alerts vs competitor tracking, does google alerts work for competitor monitoring, google alerts limitations saas, competitor monitoring tool]
ticket: caf9
scheduled: 2026-06-18
---

# Google Alerts for Competitor Monitoring: What It Actually Catches (and What It Misses)

I ran Google Alerts on 6 competitors for 18 months. Set up alerts for each company name, product name, CEO name, variations. Felt productive. Got a lot of emails.

Then I kept manually checking their websites every Monday morning anyway.

Because the Alerts kept telling me about press releases and podcast mentions while I'd find the actual pricing changes, trial flow updates, and feature removals by hand. Three weeks after they happened.

Here's the honest breakdown: where Google Alerts works, where it architecturally cannot work, and what I built after I got tired of finding out too late.

---

## What Google Alerts actually does

Google Alerts is a news and web crawl notification system. It crawls the web, indexes text content, and emails you when new indexed pages match your keyword.

That works fine for:
- Press releases ("Crayon announces partnership with Salesforce")
- Blog posts mentioning a competitor by name
- News articles about funding rounds, layoffs, acquisitions
- G2 or Capterra reviews that mention the company
- Job postings (sometimes, if the board is crawlable)

For brand mentions and news coverage, it's adequate. Free, zero setup friction, handles things you'd otherwise miss in a news feed.

For tracking what your competitor is actually doing to their product — pricing, features, trial flows, copy — it's close to useless.

---

## The JavaScript problem

Every modern SaaS marketing and pricing page is a single-page application. React, Vue, Next.js. The page loads, but the content is rendered client-side after JavaScript runs.

What Google Alerts crawls: the HTML shell. The `<div id="root"></div>` and a `<script src="bundle.js">` tag.

What's actually on the page: pricing tiers, feature comparison tables, CTA buttons, trial flow copy — all rendered by JavaScript after the initial HTML loads.

Try it. Curl any SaaS pricing page. Then open the same URL in a browser. Two completely different things.

Google Alerts sees what curl sees. It never executes JavaScript.

So when a competitor drops their entry plan by 30% at 2 AM Tuesday, Google Alerts sees nothing. When "Start free trial" becomes "Contact sales" on the enterprise tier, nothing. When a feature moves from base plan to Pro tier, nothing.

This isn't a bug. It's a fundamental architectural constraint. Google crawls billions of pages daily — running headless Chromium on every page to execute JavaScript isn't feasible at that scale.

For competitor monitoring, it means you're blind to the changes that matter most.

---

## The relevance problem

A Contify study of Fortune 1000 companies found roughly 10% of Google Alerts results were actually relevant to the business. About 40% of important competitive news was never detected at all.

My own numbers tracking 6 competitors over 3 months:
- 47 total alerts received
- 5 were genuinely useful competitive intelligence
- 4 were about funding or news I already saw on Twitter
- 38 were noise — blog posts mentioning the company in passing, old content Google re-indexed, podcast show notes

Worse signal-to-noise than my spam folder.

The problem is Google Alerts has no semantic understanding of *why* you're tracking something. "Notify me about Crayon" means everything: their CEO's conference talk, a 2-year-old blog post, a G2 review, a podcast mention. You can narrow it with operators but at that point you're fighting the tool.

---

## What actually changes on competitor sites

The things that moved decisions for product teams I've talked to:

- Competitor dropped entry plan from $99/mo to $59/mo — signals price pressure, churn risk
- "Contact sales" replaced "Start free trial" on enterprise tier — signals upmarket pivot, PLG strategy shift
- Feature quietly removed from base plan, moved to Pro — watch for customer backlash, messaging opportunity
- SOC 2 badge appeared on pricing page — compliance push, enterprise move
- Navigation restructure burying a feature 2 levels deep — they're deemphasizing it

None of these are press releases. None get indexed by Google Alerts. All of them are changes to JavaScript-rendered content on pricing or feature pages.

---

## What we built instead

KompWatch runs Playwright-based snapshots on competitor URLs every 6 hours. Playwright is a browser automation tool — it launches headless Chromium, loads the full page, waits for all JavaScript to execute and all network requests to settle, then captures the rendered HTML and a screenshot.

That rendered HTML is what we diff, not the raw server response.

Then the diff runs through Claude to translate "here are 4,000 changed lines of HTML" into "competitor removed the entry plan and dropped Pro by $20/mo."

Two different signal types:
1. Google Alerts: web mentions, press coverage, indexed text. Good for brand monitoring.
2. KompWatch: actual website content, fully rendered. Good for product intelligence.

Both have a place. But if you're monitoring competitor pricing pages and running Google Alerts thinking you've got it covered, you're missing most of what's actually happening.

---

## Honest side-by-side

| | Google Alerts | KompWatch |
|---|---|---|
| Price | Free | $0–$149/mo |
| JavaScript/SPA support | No | Yes (Playwright) |
| Pricing page changes | No | Yes |
| Feature table updates | No | Yes |
| Press releases/news | Yes | No |
| Social mentions | No | No |
| Readable AI summaries | No | Yes |
| Setup time | 2 min | 5 min |
| False positives | Many | Low |

Neither does everything. Most teams serious about competitive intelligence run both — Alerts for brand/news, KompWatch for product page monitoring.

---

## FAQ

**Should I cancel Google Alerts if I start using KompWatch?**
No. They track different things. Keep Alerts for mentions and news coverage. Use KompWatch for product page monitoring. They don't overlap.

**Does KompWatch monitor social media or review sites?**
No. We watch public website URLs. G2 reviews, Reddit threads, LinkedIn posts — those require different tools for social listening.

**What about sites with bot detection?**
About 15-20% of sites block headless Chromium with aggressive bot protection (Cloudflare Turnstile, DataDome). We detect this and notify you, but we can't capture the content diff. Still working on mitigation approaches. Not solved.

**What about competitors with hidden pricing?**
We only monitor public URLs. If their pricing is behind a sales call or a login, we can't see it. If you know the URL you want monitored, we can watch it.

**How is this different from changedetection.io?**
changedetection.io is solid for simple sites. Struggles on SPAs without careful configuration. We handle SPAs natively with Playwright and add AI summarization of the diffs — changedetection.io gives you raw diffs or visual comparison, not plain-English summaries.
