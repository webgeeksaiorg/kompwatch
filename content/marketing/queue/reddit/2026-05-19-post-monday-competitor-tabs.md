---
platform: reddit
type: post
target: r/startups
status: queued-publish-failed-no-creds
keywords: [competitor monitoring, track competitor websites, building in public, founder experience]
---
**Title:** I had 12 browser tabs pinned for competitor websites. Here's what actually happened when I automated it.

**Body:**

Every Monday morning I'd open the same 12 tabs. Pricing pages, feature pages, homepages. Spend 30-40 minutes scanning for changes.

Half the time I'd miss something — I'm skim-reading, not diffing HTML. The other half I'd spot a change but have no context for when it happened. Did that pricing tier disappear last week? Last month? Before or after my last enterprise call?

I tried a bunch of workarounds:
- Visual diff tools (Visualping, Distill) — great for simple pages, breaks on anything built in React
- Setting Google Alerts for competitor brand names — mostly picks up press coverage, not page changes
- Paying a VA to do it — actually worked, $300/month, but felt like solving a software problem with labor

Eventually I built something: a cron job that screenshotted pages and diffed the HTML. It worked until my competitors migrated to Next.js and everything went client-side. DOM diffing a React app returns noise, not signal.

So I rebuilt it with Playwright for the screenshots, added AI summarization to filter out "cookie consent banner updated" noise, and wired it up to Slack. Now it runs every 6 hours and tells me when something meaningful changes.

Three things I learned from 6 months of this:

**1. Competitors change their pricing pages more often than you think.** I tracked 8 competitors across that period. Six of them made at least one pricing change. Three made no announcement. I only caught it because I was monitoring.

**2. Messaging changes are the most interesting signal.** When a competitor changes how they describe their product — their hero headline, their ICP language — that's usually a sign they've learned something from customers. More interesting than a $10 price bump.

**3. The goal isn't to react to every change.** Most changes don't require action. The goal is to have the context when it matters — before a big enterprise call, before a pricing review, before you update your battlecards.

Anyway, I turned the thing into a product (KompWatch). Happy to answer questions about the technical side if anyone's building something similar.

---
self-check: 9/10
