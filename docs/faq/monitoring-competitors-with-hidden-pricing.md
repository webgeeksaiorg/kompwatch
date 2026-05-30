# My Competitor Removed Their Pricing Page — What Can I Still Track?

An estimated 40% of B2B SaaS companies above $10M ARR have removed public pricing and switched to "Contact Sales" or custom enterprise quotes. If a competitor has gone this route, you've lost one direct signal — but several indirect ones remain useful.

## Why Competitors Remove Pricing

The shift usually happens for one of a few reasons:

- **Moving upmarket** — transitioning from self-serve to sales-led, where deals are negotiated and list pricing undermines positioning
- **Pricing experiments** — testing per-seat vs. usage vs. flat-rate before committing to a public structure
- **Competitive pressure** — hiding pricing makes direct comparisons harder (and keeps you from this exact analysis)
- **Bundle complexity** — post-acquisition, pricing often gets folded into an enterprise contract that can't be published as a single number

When a competitor removes their pricing page, it's often a signal in itself — watch for it.

## What KompWatch Can Still Track

### 1. The Pricing Page URL (Even If It Now Says "Contact Sales")

When a competitor replaces a pricing page with a "Contact Sales" form, the page still changes. KompWatch will detect:

- The removal of specific price numbers ("$79/mo" disappearing)
- New copy appearing ("pricing tailored to your team size")
- Call-to-action changes ("Start free" → "Request a demo")
- Form elements added where a self-serve checkout used to be

Add the pricing URL directly (e.g. `https://acme.com/pricing`) and set a CSS selector that targets the content area (e.g. `main`, `.pricing-content`). KompWatch will log the change when the page structure shifts.

### 2. The Features Page

Features pages often reveal pricing indirectly:

- Which capabilities are labeled "Enterprise" vs. included in a base plan
- Whether feature comparisons still include tier columns or have been removed
- New phrases like "available on select plans" where specific names used to appear

Add `https://acme.com/features` as a separate monitored URL.

### 3. Job Listings

Hiring signals are a reliable proxy for pricing strategy:

- **"Enterprise Sales Executive"** or **"Account Executive (Mid-Market)"** → moving upmarket
- **"Product Manager, Pricing"** → active pricing work underway
- **"Solutions Engineer"** → building out a sales-assisted motion
- **"Customer Success Manager, Enterprise"** → expanding in existing enterprise accounts, not landing new SMBs

KompWatch monitors job listing pages automatically when you add a competitor.

### 4. The Blog and Changelog

Product announcements often telegraph pricing changes before they happen:

- New "Enterprise" tier announcements
- Posts about "custom pricing" or "flexible plans"
- Case studies that only mention large company logos (signals of who they're selling to)

Set up monitoring on `https://acme.com/blog` or `/changelog` with a CSS selector targeting the post list area.

### 5. Other Public Signals

KompWatch monitors website pages only — it doesn't crawl social media or review sites. But pair it with:

- **G2 / Capterra reviews** — customers often mention pricing in reviews when it changes significantly
- **LinkedIn job postings** — search manually for "enterprise" or "strategic accounts" roles at the company

## Setting Up Multi-Page Monitoring for a Single Competitor

On Pro and Team plans, you can monitor multiple pages per competitor. For a competitor that's gone sales-led:

1. Add their main URL (homepage)
2. Add their `/pricing` or `/plans` URL separately — even if it now shows a "Contact Sales" form
3. Add their `/features` URL
4. Add their `/jobs` or `/careers` URL

Each page gets its own snapshot and change detection. See [Monitoring Multiple Pages Per Competitor →](./monitoring-multiple-pages-per-competitor.md)

## What You Can't Recover

If a competitor has fully removed pricing, you won't be able to recover their actual price points from website monitoring alone. KompWatch is a change detection tool — it tells you when things change, but it can't reconstruct information that was never in its snapshot history.

If you started monitoring before they removed pricing, the historical snapshots will contain the old prices. If you're starting fresh, the baseline will be the "Contact Sales" state.

## Bottom Line

"Contact Sales" isn't the end of monitoring — it's a shift in what you're monitoring *for*. Instead of watching price numbers change, you're watching for the behavioral signals that precede and follow a pricing strategy shift: the feature tier language, the job post patterns, the CTA evolution.

KompWatch catches all of these if you set up the right pages to monitor.

---
*See also: [Monitoring Competitor Pricing Pages →](./monitoring-competitor-pricing-pages.md) | [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md) | [Monitoring Specific Keywords →](./monitoring-specific-keywords.md)*
