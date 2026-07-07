# Competitive Intelligence Process for Teams With No CI Budget

**Short answer:** A practical CI process for a small team costs under $100/month and about 2 hours/month of someone's time. The key insight is that most of the cost comes from monitoring *the wrong things* — and most of the time wasted comes from not having an automated trigger to act on.

---

## Why the Standard Setup Fails

The typical small-team CI setup:

1. Set up Google Alerts for competitor names
2. Route alerts to a Slack channel
3. Channel gets noisy with irrelevant results (news, job listings, random mentions)
4. Engagement drops to zero
5. Nobody checks it
6. "CI" becomes: wait for a prospect to mention something on a call

This isn't a willpower problem. It's a signal-to-noise problem. Google Alerts doesn't monitor pricing pages. It doesn't detect when a competitor quietly drops their entry plan from $199/mo to $99/mo. It sends you blog posts and news articles you don't need to act on.

---

## The 4-Step Process That Actually Works

### Step 1: Pick 3 pages per competitor (not the whole site)

Don't monitor everything. Most competitor website changes are irrelevant. Focus on the pages where meaningful competitive information lives:

| Page | Why it matters |
|------|---------------|
| **Pricing page** | Where you'll lose deals if you miss a change |
| **Features or product page** | What they've shipped, not what they're promising |
| **Changelog or "What's New"** | Change velocity is itself a signal — are they shipping fast or slowing down? |

Optional additions if relevant:
- `/vs/[your-brand]` or `/compare/` pages — if they're targeting you directly, read their framing
- Careers/jobs page — a spike in engineering hires is a 3–6 month leading indicator

**Skip:** Homepage (changes for design, not competition), blog (too slow, too much), social media (noise, not signal).

### Step 2: Set up automated watchers on each page

You need change detection — not periodic screenshots. The difference matters: you want to be notified *when* something changes, not every 24 hours regardless of whether anything happened.

Options:
- **KompWatch** — monitors competitor pages with Playwright (handles JavaScript-rendered SPAs), runs AI-generated change summaries, delivers digests when something actually changes. Free tier covers 2 competitors. Pro ($49/mo) covers 10.
- **DIY scraper** — a cron job that fetches pages and diffs HTML. Takes a weekend to build, breaks on React/Next.js sites, needs ongoing maintenance.
- **Changedetection.io** — open-source, self-hosted, limited JS rendering support.

The key capability: your watcher must handle JavaScript-rendered pages (most modern SaaS pricing pages are SPAs). Fetching raw HTML from a React app returns near-empty content.

See [Why Google Alerts Misses Competitor Pricing Changes →](./google-alerts-and-simple-tools.md) and [DIY Scraper vs KompWatch →](./switching-from-diy-playwright-scraper.md).

### Step 3: Route alerts to a single owner (not a Slack channel)

Shared Slack channels for CI die because nobody feels ownership. The "everyone sees it" model means nobody acts on it.

Assign one person — even 30 minutes a week — as the CI owner. Their job:
- Read the change alert
- Decide: signal or noise?
- If signal: update the relevant battlecard or pricing sheet
- If it's major: flag for the team

One inbox. One person. One Notion doc or Google Sheet that holds the current competitive picture.

### Step 4: Run a 30-minute monthly CI sync

This is the only scheduled meeting in this workflow. The monitoring handles the *trigger*. This meeting handles the *response*.

What to cover in 30 minutes:
1. What changed in the past month (monitoring has already surfaced this)
2. Does our positioning still hold, or do we need to update it?
3. Any changes to battlecards for sales?
4. Any upcoming competitor launches or signals we need to watch?

That's it. No more quarterly "competitive deep dives" that nobody has time for and produce decks that go stale immediately.

---

## What This Costs

| Item | Cost |
|------|------|
| KompWatch Pro (10 competitors, 6-hour snapshots) | $49/month |
| CI owner time (2 hours/month total) | Your team's blended rate |
| Monthly CI sync (30 min × attendees) | Your team's blended rate |

**Total tool cost:** $49/month (~$588/year)

For comparison: Klue starts at ~$18,000/year. Crayon (now SoftwareOne) runs ~$28,750/year median contract. The monitoring capability is essentially the same.

---

## What You'll Catch That You're Missing Now

Teams that switch from Google Alerts + manual checks to automated monitoring typically discover within the first 30 days:

- **Pricing changes they missed** — competitors often change pricing quietly without announcement
- **Features that shifted the competitive comparison** — things they shipped while you were looking elsewhere
- **Pages targeting your brand** — `/compare/them-vs-you` pages they built to intercept your prospects

These aren't hypotheticals. They're the most common outcomes in onboarding interviews. The monitoring makes them visible; without it, they stay invisible until a prospect finds them first.

---

## See Also

- [Competitor Monitoring for Startups and Small Teams →](./competitor-monitoring-for-startups-and-small-teams.md)
- [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)
- [Why Google Alerts and Simple Tools Miss Pricing Changes →](./google-alerts-and-simple-tools.md)
- [How to Keep Battlecards Up to Date →](./how-to-keep-battlecards-up-to-date.md)
- [DIY Free Tools Stack Cost →](./diy-free-tools-stack-cost.md)
