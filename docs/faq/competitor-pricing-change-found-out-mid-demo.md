# Why Did I Find Out About a Competitor's Pricing Change From a Prospect Mid-Demo?

This is one of the most common and painful competitive intelligence gaps on small SaaS teams. You're 20 minutes into a discovery call. The prospect casually mentions a price they saw on a competitor's site — a price you don't recognise. You check your battlecard. It says something different.

You've been selling against stale pricing for days, weeks, or longer.

Here's why it happens and how to stop it.

---

## Why Your Existing Setup Missed It

### Google Alerts didn't catch it

Google Alerts monitors the web for new *pages* or *articles* mentioning a keyword. It does not monitor a specific URL for content changes. A competitor silently updating the numbers on their `/pricing` page — with no new blog post, no press release, no announcement — generates zero Google Alert.

### Screenshot-based monitoring missed the layout staying the same

Visual diff tools compare before-and-after screenshots pixel by pixel. If the page layout didn't change — same table, same number of rows, same tier names — but the prices changed from `$299/mo` to `$149/mo`, many screenshot tools will report no significant visual difference. Numbers rendered the same size in the same font in the same column look visually similar even when the value is different.

### The pricing page was a React or JavaScript SPA

Pricing pages are increasingly built as client-side apps that load prices via API call. Standard monitoring tools that fetch HTML directly will see a loading skeleton, not the actual prices. They miss every change because they never see the rendered content in the first place.

### Your battlecard was "recently updated" but not automatically updated

Battlecards that live in Notion, Google Docs, or Confluence have a last-edited timestamp — but that timestamp reflects when a human last touched the file, not when the competitor's pricing last changed. A battlecard edited three months ago might be citing pricing data from six months ago.

---

## Why This Specific Change Pattern Is Common

Competitors rarely announce pricing changes. They don't send a press release when they cut their entry plan from $299 to $149. They just update the page and wait.

This is by design. A quiet change to a public page is the lowest-friction way to adjust pricing without triggering a PR story, alarming existing customers, or signalling strategy to the market.

Without automated monitoring on the pricing page specifically, you have no way to know the change happened at all — until a prospect tells you.

---

## How to Prevent It

### 1. Add your competitor's pricing page to KompWatch

Add the specific pricing URL (e.g. `https://competitor.com/pricing`) as a tracked URL in your [Competitors dashboard](/competitors). This is more reliable than tracking the homepage or a generic subdomain, because it targets exactly the page most likely to change.

If the pricing page is a React/Next.js/Vue SPA, KompWatch handles this — it uses a full headless Chromium browser to render the page and wait for the network to settle before diffing. See [Does KompWatch Work on JavaScript-Heavy Sites?](./monitoring-javascript-spa-sites.md).

### 2. Enable instant pricing alerts (Pro and Team)

In **Settings → Notifications**, turn on **Instant alerts for pricing changes**. This bypasses your regular digest schedule and sends you an immediate notification the moment a `PRICING`-type change is detected — no waiting until the next daily or weekly digest.

See [Instant Pricing-Change Alerts](./instant-pricing-alerts.md) for setup.

### 3. Set a CSS selector on the pricing content zone

If the pricing page has a lot of surrounding navigation or footer noise, pinning a CSS selector to the pricing table itself reduces false positives and makes diffs cleaner. Something like `#pricing-table` or `.pricing-grid` focuses the snapshot on just the content that matters.

See [Setting CSS Selectors](./setting-css-selectors.md) for instructions.

### 4. Run a manual snapshot before high-stakes calls

KompWatch lets you trigger a manual snapshot at any time — not just during the automated cron cycle. Before a competitive demo or a late-stage evaluation call where pricing comparisons are likely to come up, go to your competitor's entry in the dashboard and click **Refresh now**. You'll get a fresh snapshot with any changes detected in the last few hours.

See [Manual Snapshot Refresh](./manual-snapshot-refresh.md).

---

## What If It Already Happened?

If you were caught with stale pricing data on a call, here's what to do:

1. **Acknowledge it honestly**: "That's a recent change — let me confirm the current pricing and send you an updated comparison." Prospects respect transparency over getting caught bluffing.
2. **Send a follow-up email within 2 hours** with the corrected competitive picture. If the competitor dropped their price, address it directly: compare on value, not just on price.
3. **Log the deal for your own learnings**: if a pricing blind spot affected your pitch, that's a process signal. It's worth fixing before the next deal cycle.

---

## How Often Does This Actually Happen?

More often than most teams realise. Based on data from monitored competitor pages, **22% of pricing changes happen without any public announcement** (no blog post, no social media, no changelog entry). Of those silent changes, the majority occur mid-week (Tuesday–Thursday), when manual Monday-morning CI checks would have already been completed.

See [When Do Competitors Typically Change Their Pricing?](./competitor-pricing-change-timing.md) for the full pattern.

---

## Related FAQs

- [Instant Pricing-Change Alerts](./instant-pricing-alerts.md)
- [Does KompWatch Work on JavaScript-Heavy Sites?](./monitoring-javascript-spa-sites.md)
- [When Do Competitors Typically Change Their Pricing?](./competitor-pricing-change-timing.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [How to Keep Battlecards Up to Date](./how-to-keep-battlecards-up-to-date.md)
- [Manual Snapshot Refresh](./manual-snapshot-refresh.md)
