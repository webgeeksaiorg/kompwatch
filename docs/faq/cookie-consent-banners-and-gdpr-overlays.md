# Cookie Consent Banners and GDPR Overlays

Many European competitor websites (and increasingly US ones) show a cookie consent banner or GDPR overlay on the first visit. This can affect how KompWatch captures and reports changes. Here's what to expect and how to get clean monitoring despite the noise.

---

## Why Cookie Banners Cause Noise

KompWatch uses a headless Chromium browser to capture competitor pages. Like a real first-time visitor, it may encounter:

- **Cookie consent banners** — full-screen or bottom-bar overlays asking to accept/reject cookies
- **GDPR preference dialogs** — multi-step panels for granular consent
- **Privacy-first page gates** — overlays that dim the underlying content until consent is given

These banners are part of the page HTML. If the banner text changes (e.g. the competitor updates their consent copy or switches to a new CMP platform like OneTrust or Cookiebot), KompWatch detects it as a content change — even if nothing changed on the actual pricing or features page underneath.

---

## How KompWatch Handles Cookie Banners

KompWatch does **not** click "Accept" or interact with consent dialogs. This is intentional:

- Accepting cookies could alter how the page renders for returning visits, making comparisons inconsistent
- The unauthenticated, cookie-free view is the closest approximation to what a new prospect sees

What this means in practice:

| Scenario | What KompWatch captures |
|---|---|
| Banner overlays content but content is in DOM | Full page HTML including banner — content changes are detected beneath it |
| Banner replaces content (full blocking gate) | Only the banner HTML — underlying content is not accessible |
| Banner changes copy or vendor | Triggers a change alert (LOW severity, CONTENT type) |

---

## How to Filter Out Cookie Banner Noise

If you're getting frequent low-value alerts due to consent banner updates, use a **CSS selector** to scope monitoring to the content section below the banner.

**Step 1: Find the right selector**

Open the competitor's page in Chrome DevTools (right-click → Inspect). The main page content (pricing table, feature list, etc.) is usually in a `<main>`, `<article>`, or a named `<section>`. The banner typically lives in a `<div>` with an id like `#cookie-banner`, `#cmp-container`, or a class like `.cc-window`.

**Step 2: Target the content, not the whole page**

Rather than using the default `body` selector, use the selector for the content area:

```
main
#pricing-section
section.features
article.hero-content
```

This tells KompWatch to ignore anything outside that element — including overlays injected at the top or bottom of the DOM.

**Step 3: Update the selector**

1. Go to [kompwatch.com/competitors](https://kompwatch.com/competitors)
2. Click **Edit** (⋮ menu) on the competitor row
3. Enter your selector in the **CSS Selector** field
4. Save — the new selector takes effect on the next snapshot cycle

See [CSS Selectors →](./css-selectors.md) for a full guide on choosing and testing selectors.

---

## What If the Banner Fully Blocks the Page?

Some competitors (particularly those using strict consent-gating CMPs) serve a page that is **only** the consent wall — no underlying HTML until the user accepts. In this case:

- KompWatch captures only the banner content
- The actual pricing/feature content is not in the DOM and cannot be monitored
- You'll see repeated snapshots with near-identical banner HTML and no meaningful changes detected

**Workarounds:**

1. **Try a subpage** — Consent gates often appear only on the homepage. Add the direct URL to the pricing or features page (e.g. `example.com/pricing`), which may load without the gate.
2. **Try the /en/ or regional path** — Some competitors only gate their default locale landing page. The English or US subdirectory (`/en-us/pricing`) may be accessible without consent.
3. **Email support** — If you're on Pro or Team and a critical competitor is fully gated, email [support@kompwatch.com](mailto:support@kompwatch.com). We'll review the specific site and advise on a working approach.

---

## Will Every Competitor Show This?

No. Only sites that serve a consent overlay to unrecognized/unauthenticated visitors are affected. Most SaaS competitors (especially US-based ones that haven't implemented GDPR consent flows) don't show these banners at all. EU-based competitors and large enterprise vendors are more likely to.

---

## Related Articles

- [CSS Selectors — Targeting Specific Page Sections](./css-selectors.md)
- [What Happens When a Competitor Blocks Scraping?](./anti-bot-protection-and-blocked-pages.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Can I Monitor Non-English or International Competitor Websites?](./monitoring-international-competitors.md)
- [Snapshot Errors and Warning States](./snapshot-errors-and-warning-states.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
