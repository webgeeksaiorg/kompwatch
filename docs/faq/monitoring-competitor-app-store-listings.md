# Can I Monitor a Competitor's App Store Listing?

Yes — with some caveats. The iOS App Store and Google Play both have publicly accessible web pages, and KompWatch can snapshot them just like any other URL. Here's what works, what doesn't, and how to get useful signal.

## What You Can Track

**App Store (iOS)** — each app has a public web page at `apps.apple.com`:

```
https://apps.apple.com/app/[app-name]/id[app-id]
```

KompWatch can detect changes to:
- App description and "What's New" release notes
- Screenshot captions and ordering (though the screenshots themselves are images)
- Rating and review count (the aggregate number displayed on the page)
- Age rating, size, category, and developer name

**Google Play** — each app has a public page at `play.google.com`:

```
https://play.google.com/store/apps/details?id=[package.name]
```

Similar coverage: description, recent reviews shown in the carousel, rating, and version/update date.

## Recommended CSS Selectors

App store pages are JavaScript-heavy. Use specific selectors to reduce noise from dynamic elements:

| Store | What to track | Suggested selector |
|-------|--------------|-------------------|
| App Store | Description + What's New | `.section__description, .whats-new__content` |
| App Store | Rating | `.we-rating-count` |
| Google Play | Description | `[data-g-id="description"]` |
| Google Play | What's new | `[itemprop="description"]` in the "What's new" section |
| Google Play | Rating | `[aria-label*="stars"]` |

> **Note:** App store page markup changes frequently. If your selector stops matching, fall back to `main` or `body` and refine from there. See [CSS Selectors FAQ](./css-selectors.md) for troubleshooting.

## JavaScript Rendering Requirement

Both app stores render their pages with JavaScript. KompWatch uses a headless Chromium browser, so JS rendering is handled automatically — you don't need to do anything special. See [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md) if you want more detail on how this works.

## What You Won't Get

- **Individual review text** — the full review feed is paginated and dynamically loaded. KompWatch captures whatever the initial page load shows (typically the top 2–3 reviews). For deep review analysis, use a dedicated review monitoring tool or check [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md).
- **Download/install counts** — neither store surfaces exact install counts on the public page.
- **In-app screenshots** — images are not compared; KompWatch detects text and structural changes only.
- **Version history beyond "What's New"** — only the current release notes are visible.

## Practical Workflow

1. Go to **Competitors → Add Competitor**
2. Paste the App Store or Google Play URL for your competitor's app
3. Set a descriptive name like "Acme iOS App" (distinct from their main website entry)
4. Use one of the selectors above or leave it as `body` to start broad
5. After the first snapshot, review what was captured and refine the selector if there's too much noise

Track both the **app store listing** and the **website** as separate competitors — they often update independently, and a "What's New" note is sometimes the first public signal of a feature launch.

## Monitoring Frequency

App store listings typically update every 2–4 weeks (tied to app release cycles). The **Free plan** (daily snapshots) is usually sufficient. If you're in a high-velocity market where your competitor ships frequently, **Pro** (6-hour snapshots) ensures you catch release notes within hours of an app update going live.

---
*Related: [Monitoring Competitor Pricing Pages](./monitoring-competitor-pricing-pages.md) · [Monitoring JavaScript SPA Sites](./monitoring-javascript-spa-sites.md) · [Monitoring Competitor Reviews](./monitoring-competitor-reviews.md) · [CSS Selectors](./css-selectors.md) · [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)*
