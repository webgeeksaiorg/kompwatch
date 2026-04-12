# What Does CompeteWatch Actually Monitor?

CompeteWatch doesn't just watch one page — it automatically discovers and monitors multiple sections of each competitor's website.

## Pages Tracked Automatically

When you add a competitor URL (e.g. `https://acme.com`), CompeteWatch crawls several pages on every snapshot cycle:

| Page | What CompeteWatch looks for |
|------|----------------------------|
| **Main / Features page** | Product capabilities, positioning, headline copy changes |
| **Pricing page** | Price changes, new/removed plans, trial offers (tries `/pricing`, `/plans`, `/#pricing`) |
| **Blog** | New posts that may signal product launches or strategy shifts (tries `/blog`, `/articles`, `/news`) |
| **Careers / Jobs** | Hiring signals — new roles often predict roadmap moves (tries `/careers`, `/jobs`, `/about#careers`) |

CompeteWatch tries common URL patterns for each section. If a competitor uses a non-standard URL (e.g. `/cost` instead of `/pricing`), use a **CSS selector** on the main page to target that section instead. See [CSS Selectors FAQ](css-selectors.md).

## Change Types

Every detected change is classified into one of these types:

| Type | What it means |
|------|---------------|
| `PRICING` | A price, plan name, billing period, or trial offer changed |
| `FEATURE` | A product capability was added or removed from the main/features page |
| `BLOG` | A new blog post appeared (or one was removed) |
| `JOB` | A new job listing appeared or was removed |
| `TECH` | A technology was added or removed from the competitor's stack (e.g. they added Intercom or switched analytics tools) |
| `GENERAL` | A meaningful change that doesn't fit the above categories |

## Severity Levels

| Severity | Examples |
|----------|---------|
| `LOW` | Minor wording tweak, blog post, single job listing |
| `MEDIUM` | New feature mentioned, multiple new job listings, copy refresh |
| `HIGH` | Pricing change, major new product feature announced |
| `CRITICAL` | Signals a pivot, acquisition, or major strategic shift (e.g. "Acquired by…", complete pricing model change) |

`CRITICAL` changes are always included in your next digest regardless of plan frequency.

## Tech Stack Detection

CompeteWatch detects tools your competitor uses by inspecting their page's scripts and meta tags. Supported signals include: React, Vue, Angular, jQuery, Stripe, Segment, Intercom, HubSpot, and generator tags (e.g. WordPress, Webflow).

A tech stack change (e.g. competitor adds Intercom → likely scaling support; adds Stripe → launching paid tier) can be an early signal worth tracking.

## What CompeteWatch Does NOT Track

- Pages behind login or paywalls
- Content that requires JavaScript interaction (e.g. clicking through a modal)
- PDF documents or non-HTML assets
- Pages blocked by `robots.txt`

If you need to monitor login-protected content, you're better served by manual review for those specific pages.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
