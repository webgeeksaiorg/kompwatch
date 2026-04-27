---
platform: blog
type: article
target: ~
status: ready
keywords: [competitor monitoring javascript, monitor competitor react site, visualping alternative, competitor monitoring SPA, track competitor website changes, headless competitor monitoring]
---

# Your Competitor Monitor Is Reading an Empty Page

Here's something most competitor monitoring tools won't tell you: if your competitor's website runs on React, Next.js, or any modern JavaScript framework, your monitor probably isn't reading it.

It's reading an empty shell.

## What Actually Happens When a Monitor Runs

Most website monitoring tools work like this: they send an HTTP request to a URL, get back some HTML, and compare it to yesterday's HTML. Simple, fast, cheap to run at scale.

The problem is that most modern SaaS websites don't serve their content in that initial HTML response. They serve a skeleton — a `<div id="root"></div>` or similar — and then render the actual content in your browser using JavaScript.

So when Visualping, ChangeDetection, or most lightweight monitors fetch your competitor's pricing page, they get something like:

```html
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>
    <div id="root"></div>
    <script src="/static/js/main.chunk.js"></script>
  </body>
</html>
```

The pricing table, the feature list, the CTA button — none of it is there. It's all rendered by that JavaScript file after the browser loads.

Your monitoring tool screenshots the empty div, compares it to yesterday's empty div, reports "no changes detected," and you get no alert.

## Why This Is Worse Than You Think

It fails silently. That's the problem.

If your monitor crashed, you'd know. You'd get an error notification. You'd fix it. But when it "succeeds" and returns an empty page diff, everything looks fine. Green status. Last checked: 2 hours ago. No changes.

Meanwhile, your competitor just quietly moved from a free tier to paid-only. Or killed their Agency plan. Or added a feature you've been promising customers for six months. You find out from a churned customer, not your CI tool.

I hit this exact wall in 2023. Built my own Playwright scraper because I was tired of manual Monday morning competitor checks. Worked perfectly on a few sites. Then I noticed one competitor had apparently not changed their homepage in three months. Not a single diff.

Checked manually. They'd redesigned the whole thing.

Turned out that site was Next.js. My scraper was fetching server-rendered HTML fine — but they'd switched to client-side rendering on the pricing page specifically. My diffs were all empty divs.

## How Many Sites Are Affected?

More than you'd guess.

Any SaaS product built in the last 3-4 years is likely running React, Next.js, Vue, or Angular on at least some pages. Pricing pages, feature pages, and landing pages are exactly the kind of content modern marketing teams put in their CMS or render client-side for easy A/B testing.

In practice: if you're monitoring more than a few competitors in the SaaS space, statistically some of your targets are JS-rendered.

## The Fix: Headless Browser Execution

The solution is running a full browser engine — Chromium, Firefox — that actually executes the JavaScript and renders the page before taking the snapshot. Then you diff the rendered DOM, not the raw HTTP response.

In code, you want something like:

```javascript
await page.goto(url, { waitUntil: 'networkidle' });
const content = await page.content(); // rendered HTML, not raw
```

`waitUntil: 'networkidle'` waits for all async requests to complete before capturing. That means API calls that populate pricing tables, feature flags that toggle sections, dynamic content loaded after mount — all of it is present in your snapshot.

This is why KompWatch uses Playwright with headless Chromium for every snapshot. It's slower and more resource-intensive than a raw HTTP scrape. But it's the only way to actually see what your users see.

## The Second Problem: Noise

Even if you fix the rendering problem, you hit the next one: noise.

A competitor's website changes constantly without anything meaningful changing. Hero image rotation. A/B test variants. Cookie consent banners appearing. Footer link updates. Timestamps. Dynamic content from their own API calls.

A raw diff of a rendered page will catch all of it. Which means 40 alerts per day, 2 actionable. Teams mute the tool. Stop trusting it. Go back to manual checking.

This is why the AI digest layer matters as much as the headless rendering. Instead of "here's every pixel that changed," you get: "pricing page: Pro tier increased from $39/mo to $49/mo. Free tier limit reduced from 5 to 3 monitors."

Signal, not noise.

## Who's Affected

If you're using any of these for competitor monitoring, check whether they use headless rendering:

**Visualping**: Uses screenshot comparison, which requires a real browser. But their free and base plans heavily throttle headless execution and default to HTTP fetching for speed. Check their docs for your specific plan.

**ChangeDetection.io**: Supports Playwright via self-hosted Playwright container, but it's not the default. Requires setup. Most users run it without.

**Google Alerts**: Monitors when someone writes *about* your competitor, not when your competitor changes their own site. Completely different tool.

**PageCrawl**: HTTP-based, $80/yr. Fast, cheap, won't catch JS-rendered content.

**Crayon/Klue**: Enterprise tools ($20K-$100K/yr) with research analyst teams that likely catch meaningful changes through multiple methods. But you're paying for a lot more than monitoring.

## What to Check Right Now

If you're running a competitor monitoring setup today:

1. Pick one competitor. Open their pricing page in your browser.
2. Right-click → View Page Source (not Inspect — Source).
3. Search for your competitor's pricing numbers in the raw source.
4. If they're not there, you're monitoring an empty div.

That's it. Takes 2 minutes. You might find out your whole monitoring stack is watching shells.

---

KompWatch uses Playwright with headless Chromium for every snapshot, plus an AI digest layer to filter the noise. If you're monitoring SaaS competitors and want to actually see what changes, [start a free trial](/signup) — 2 competitors, daily snapshots, no credit card.

---

## FAQ

**Does Visualping work on React websites?**
It depends on the plan and the site. Visualping's browser-based plans can render JavaScript, but the default for faster/cheaper monitoring often falls back to HTTP. Check which rendering method your plan uses and test with a known JS-heavy page.

**What is a headless browser for competitor monitoring?**
A headless browser is a full browser engine (like Chrome) running without a visible UI. It executes JavaScript, loads fonts and images, runs async requests — everything a real user's browser does. Then it returns the fully-rendered page for comparison.

**Why does my competitor monitoring tool show no changes when I can see changes manually?**
Most likely cause: the page you're monitoring is JavaScript-rendered. Your tool is fetching the raw HTML before JS executes, which is mostly empty. You need a tool that uses headless browser execution to see the rendered content.

**How do I monitor a React or Next.js competitor site?**
Use a monitoring tool that runs Playwright or Puppeteer with headless Chromium. KompWatch, or a self-hosted ChangeDetection.io instance with a Playwright container configured. Avoid tools that only fetch HTTP — they won't see client-rendered content.
