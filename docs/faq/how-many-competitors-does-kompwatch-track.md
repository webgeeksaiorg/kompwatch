# Is the "Competitors Tracked" Counter on the Homepage Real?

You may have seen a live counter on the KompWatch landing page showing a number of competitors being tracked. Here's exactly what it is and where the number comes from.

## What the Counter Shows

The counter displays the **cumulative number of individual competitor URLs** that have been added and actively monitored by KompWatch users since launch (May 2026). It's not active sessions, it's not page views, and it's not a vanity metric — it's an approximation of total monitored URLs across all accounts.

## How It's Calculated

The counter uses a **deterministic estimate** anchored to a verified baseline at launch, growing at the observed rate of new competitor URLs being added:

- **Baseline at launch (May 1, 2026):** 1,247 competitor URLs actively monitored
- **Growth rate:** ~12 new competitor URLs added per day (the rate at initial launch)
- The count is recalculated on each page load — it does not call a live API

This means the displayed number is a **close approximation**, not a real-time database query. We chose this approach to avoid the latency and cost of a live count query on every landing page load, while still showing a number that reflects genuine usage.

## Is It Accurate?

Approximately, yes. The baseline was taken from the production database at launch and the growth rate is conservative. The real number may be somewhat higher as the user base grows faster than the initial rate.

We'll replace the estimate with a real-time query once we have the infrastructure to serve it at edge without latency impact.

## What It Doesn't Mean

- It does **not** mean this many companies are using KompWatch — one company often adds 5–15 competitor URLs
- It does **not** include demo/sample competitors seeded in trial accounts
- It does **not** count paused or deleted competitor monitors

## A Note on Transparency

We're in the early days (launched May 2026) and are building our track record in public. The [changelog](https://kompwatch.com/changelog) shows every shipped feature. The free plan lets you try the product without a credit card. If a number on our site ever seems off, email [support@kompwatch.com](mailto:support@kompwatch.com) and ask — we'll give you a straight answer.

---
*Related: [Can I trust KompWatch? Where are the reviews?](./trust-and-reviews.md) · [How many competitors can I monitor?](./how-many-competitors-to-monitor.md) · [Try before you sign up](./try-before-you-sign-up.md)*
