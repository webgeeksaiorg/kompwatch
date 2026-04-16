# What Is a CSS Selector and How Do I Use It?

When you add a competitor to KompWatch, you can optionally specify a **CSS selector**. This tells our scraper exactly which part of the page to monitor, rather than watching the entire page.

## Why it matters

Websites change constantly — navigation links, footer text, cookie banners. Without a selector, every minor layout tweak triggers an alert. With a good selector, you only get notified about the sections you actually care about (pricing tables, feature lists, product headlines).

## Default behavior

If you leave the selector field blank, KompWatch defaults to `body` — meaning it watches the entire page. This works but generates more noise.

## How to find the right selector

1. Open your competitor's website in Chrome or Firefox
2. Right-click the section you want to monitor (e.g. the pricing table)
3. Select **Inspect** (or Inspect Element)
4. In the DevTools panel, look at the highlighted HTML element
5. Note its `id` or `class` attribute

**Common selector patterns:**

| What you want to track | Selector example |
|---|---|
| An element with a specific ID | `#pricing` |
| An element with a class | `.pricing-table` |
| A specific section tag | `section.features` |
| A `<main>` content area | `main` |
| A specific `<div>` by class | `div.hero-content` |

## Examples

- **Pricing page:** `#pricing-section` or `.pricing-table`
- **Features list:** `.features` or `section[data-section="features"]`
- **Blog latest post:** `.blog-feed article:first-child`
- **Product changelog:** `#changelog`

## Tips

- **Be specific but not too specific.** A selector that targets a single hard-coded element ID is fragile — if the competitor redesigns their page, the selector may break. Class-based selectors are more resilient.
- **Test in your browser console.** Open DevTools, go to the Console tab, and type `document.querySelector('YOUR_SELECTOR')` to verify it finds the right element before saving it in KompWatch.
- **Start broad, then narrow.** Begin with `main` or a top-level section, then tighten the selector if you're getting too many false-positive alerts.

## What if my selector stops working?

If a competitor redesigns their site, your selector may no longer match any element. KompWatch will flag this as a monitoring error. Go to your competitor's settings and update the selector.

## Still unsure?

Leave the selector blank to start. Once you see your first few change alerts, you'll have a better sense of which page sections matter most — then you can update the selector to narrow the focus.

For help crafting a selector, email support@kompwatch.com with the competitor URL and a description of what you want to track.
