# Setting CSS Selectors for Better Change Detection

By default, KompWatch monitors the entire `<body>` of a competitor's page. This works, but it picks up noise: navigation updates, footer changes, cookie banners, and ad rotations that have nothing to do with what you actually care about. **CSS selectors let you narrow monitoring to a specific section of the page.**

## Why Use a CSS Selector?

| Without selector | With selector |
|---|---|
| Monitors entire page | Monitors only the section you care about |
| High noise — nav/footer changes trigger alerts | Low noise — only meaningful content changes |
| Harder for AI to summarise what changed | AI context is tighter, summaries are sharper |

Setting a good selector is the single highest-impact configuration change you can make.

## How to Set a Selector

1. Go to **Competitors** and click the competitor you want to configure
2. Click **Edit**
3. In the **CSS Selector** field, enter a selector (examples below)
4. Click **Save** — the next snapshot will use the new selector

## Finding the Right Selector

Open the competitor's page in Chrome or Firefox, right-click the section you want to track, and choose **Inspect**. In the DevTools panel:

- Look for a `id` attribute → use `#id-name` (most reliable)
- Look for a distinctive `class` → use `.class-name`
- Use the DevTools selector picker: right-click the element → **Copy → Copy selector**

Then paste the result into KompWatch and remove any `:nth-child()` specificity that might break if the page structure shifts.

## Recommended Selectors by Competitor Page Type

| Page type | Suggested selector |
|---|---|
| Pricing page | `#pricing`, `.pricing-table`, `[data-section="pricing"]` |
| Features / product page | `main`, `#features`, `.features-section` |
| Homepage hero | `header`, `.hero`, `#hero` |
| Blog / changelog | `main article`, `.changelog-entries` |
| Job listings | `#jobs`, `.open-positions`, `[data-testid="jobs-list"]` |

## What If No Good Selector Exists?

Some sites use dynamically generated class names (e.g. `css-a1b2c3`). These change between deploys and will cause false positives. In that case:

- Try targeting by **tag + aria role**: `main[role="main"]`
- Try a **data attribute**: `[data-page="pricing"]`
- Fall back to `main` or `article` — broader than ideal but more stable than dynamic classes
- If nothing works, leave the field blank (`body` is used as the default)

## Can I Track Multiple Sections?

Not with a single selector, but you can add the **same competitor URL twice** with different selectors — one for the pricing section, one for the features section. Each will generate independent change alerts.

## Testing Your Selector

After saving, click **Take Snapshot Now** on the competitor detail page. The snapshot preview will show only the HTML matched by your selector — if it looks right, you're set.

## Related Articles

- [Adding a Competitor](./adding-competitors.md)
- [Why No Changes Yet?](./why-no-changes-yet.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Filtering Alerts by Content Zone](./filtering-alerts-by-content-zone.md)

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
