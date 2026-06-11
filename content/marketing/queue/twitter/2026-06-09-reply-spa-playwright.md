---
platform: twitter
type: reply
target: developers building DIY competitor monitoring
status: draft
keywords: [playwright competitor scraping, SPA monitoring, website change detection]
---
how are you handling SPAs?

that was the week-killer for our first version. changedetection returns empty diffs when React apps re-render because the HTML structure stays the same — only the content changes after hydration.

ended up using Playwright, waiting for network idle, then targeting specific CSS selectors. pricing pages usually live in `.pricing-card` or `.plan-features` anyway. whole-page diffing is too noisy.
