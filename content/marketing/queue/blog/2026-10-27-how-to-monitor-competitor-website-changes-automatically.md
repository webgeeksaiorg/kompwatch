---
platform: blog
type: article
status: queued-no-creds
keywords: [monitor competitor website changes, track competitor website, competitor website monitoring tool, website change detection, competitor alerts]
---

# How to Monitor Competitor Website Changes Automatically (Without Paying $500/Month)

There are two ways to find out your competitor changed their pricing.

The first: someone on your sales team loses a deal because the prospect saw the new price, you didn't know about it, and your pitch was built on information that was two weeks stale.

The second: you get an alert the same day it changed.

I've been on both sides of that. The first version is what prompted me to build the second one.

Here's how competitor website monitoring actually works, what's worth tracking, and how to set it up — whether you use a dedicated tool or roll your own.

---

## Why "just check the website manually" doesn't work

I know, you've got a Notion page. Six competitor URLs, checked every Monday morning.

The problem is Monday morning. Competitors don't wait for your calendar.

Pricing changes happen on Tuesdays. Free tiers get killed on random Wednesdays. A new "Contact Sales" button replaces the price you've been quoting in proposals, and you find out from a prospect who already noticed.

Manual checks have two failure modes: you forget, or you don't forget but you're a week late. Neither is good when the change affects an active sales cycle.

---

## What's actually worth monitoring

Not every page on a competitor's site matters. Here's the short list:

**Pricing page** — The highest-value page to track. Not just for the numbers. Watch for structural changes: plans getting reordered, "most popular" badges moving, annual vs monthly becoming the default view, "Contact Sales" replacing a published price. These micro-changes telegraph positioning shifts before any announcement.

**Product/features page** — When a competitor adds or removes a feature from their public feature list, that's a signal. It means they shipped something, or they're quietly deprecating something. Either is useful.

**Homepage hero** — The headline and subheadline change more often than you'd think. When a competitor rewrites "For enterprise sales teams" to "For any team," that's a positioning pivot. You'll see it in their homepage copy months before they announce it anywhere.

**Jobs/careers page** — Underrated. Three ML engineer postings in 6 weeks means they're building AI features. An "Enterprise Account Executive" role appearing for the first time means they're moving upmarket. A "Head of Partnerships" means ecosystem play. The jobs page is the competitor roadmap that nobody remembers to read.

**Their comparison pages** — Some competitors publish pages that compare themselves to you (yes, you). They'll quietly update these when they add a feature that closes a gap, or remove a claim that's no longer accurate. Worth knowing.

---

## The technical problem: most competitor pages are JavaScript

This is where a lot of DIY setups fail.

A basic wget or curl of a competitor's pricing page often returns a mostly-empty HTML shell. The actual content — the plan names, the prices, the feature list — is loaded dynamically in JavaScript after the initial page load.

Tools that work by fetching raw HTML miss this entirely. You get a diff of empty `<div>` containers.

The solution is headless browser rendering. Tools like Playwright (or Puppeteer) spin up a real Chrome instance, load the page, wait for JavaScript to finish executing, *then* capture the rendered HTML. That's the content worth diffing.

This is also why CSS selectors matter. If you're targeting `#pricing-table` instead of diffing the entire page, you avoid noise from nav menus, cookie banners, and footer link changes that fire on every single scrape.

---

## How the diff-to-signal pipeline works

Raw HTML diffs are useless. The output looks like:

```
- <span class="price">$79</span>
+ <span class="price">$89</span>
- data-plan="professional" data-seats="5"
+ data-plan="professional" data-seats="unlimited"
```

Which is technically accurate but requires a human to parse. That's the bottleneck.

The current approach that works: run the diff through an LLM with a prompt like "Here is the old version and new version of a pricing page. Summarize what changed in plain English, and classify as: PRICING, FEATURE, MESSAGING, or VISUAL. Rate severity as LOW, MEDIUM, or HIGH."

You get back: "Pricing: Professional plan price increased from $79 to $89. Seats changed from 5 to unlimited. Severity: HIGH."

That's actionable. The raw diff isn't.

---

## Options for setting this up

**Option 1: Build it yourself (weekend project)**

This works if you're comfortable with Node.js or Python:

1. Playwright for page rendering
2. Store snapshots (S3 or local filesystem)
3. Diff snapshots with a simple string comparison or a proper diff library
4. Filter noise with CSS selectors on the pages that matter
5. LLM API call to classify and summarize
6. Email or Slack webhook for delivery

Main ongoing effort: handling pages that break the scraper (anti-bot detection, auth-walled content, pages that load differently every render). Plan for 2-4 hours/month of maintenance.

**Option 2: Simple SaaS tools (free tiers available)**

Visualping and Distill.io both have free tiers for basic visual diff monitoring. Good for 2-3 pages. Not great at semantic classification (they tell you pixels changed, not what changed).

**Option 3: Dedicated monitoring tools**

KompWatch ($49/mo) — tracks unlimited pages, headless rendering, AI classification, daily digests. Built for exactly this use case.

Crayon ($500+/mo) — full competitive intelligence platform. Sales enablement, battlecard automation, analyst workflows. Right tool if you have a dedicated CI function.

Klue (enterprise pricing) — same tier as Crayon. Built for large GTM teams.

If your problem is "I need to know when my competitors' pricing or product pages change" — the enterprise tools are overkill. If your problem is "I need battlecards, win/loss tracking, and CRM integration" — a monitoring-only tool won't cut it.

---

## Setting up monitoring: a practical starting point

Pick 3 real competitors (not aspirational ones). For each, identify:

- Pricing page URL
- Product/features URL  
- Homepage URL
- Careers/jobs URL

That's 12 URLs total. Set them to crawl daily. Any more than 4 URLs per competitor and you're tracking noise.

Give it two weeks before you expect to see anything interesting. Most pages don't change daily. The point is catching the change when it happens, not generating a daily report.

---

## What to do when you get an alert

This is the part people skip. The alert fires, someone clicks through to see the diff, and then... nothing happens.

Build a 15-minute weekly ritual: review any alerts from the past week, decide if they're actionable (update your pricing comparison doc, brief the sales team, flag for product), and archive the rest.

The monitoring is the easy part. The hard part is having a process that turns a detected change into an action. But that starts with detecting the change at all.

---

## FAQ

**Does monitoring competitor websites have any legal issues?**

Watching publicly available web pages is standard practice and legally fine. The grey areas are behind-login content, scraping at high frequency (looks like a DDoS), or violating explicit robots.txt restrictions for commercial use. For pricing and product pages — content the competitor intends for the public to see — monitoring is fine.

**How often should I check competitor pages?**

Daily is usually right for pricing and product pages. Weekly is fine for jobs and homepage copy. Real-time monitoring (every hour) generates too many noise alerts and isn't meaningfully faster for the use cases that matter.

**Can I do this with Google Alerts?**

No. Google Alerts catches news mentions and indexed blog posts. It doesn't monitor for page content changes. A competitor can completely rewrite their pricing page and Google Alerts won't fire — it's not watching the page, it's watching Google's search index.

**What if the competitor uses authentication or a paywall?**

You can only monitor publicly accessible content. Behind-login content (customer portals, authenticated product areas) isn't trackable with standard monitoring tools. Focus on the public-facing pages — that's where strategy decisions are expressed anyway.
