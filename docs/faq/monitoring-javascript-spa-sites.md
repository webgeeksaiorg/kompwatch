# Does KompWatch Work on JavaScript-Heavy Sites?

Yes — KompWatch uses a **full headless browser** (Playwright + Chromium) to render pages, not a simple HTTP fetcher. This means it captures the fully rendered DOM after JavaScript executes, including content built with React, Next.js, Vue, Angular, and other SPA frameworks.

## How It Works for SPAs

1. **Browser loads the page** — Chromium opens the URL just like a real user's browser
2. **JavaScript executes** — the page runs its client-side rendering
3. **Network settles** — KompWatch waits for network activity to finish (network idle) before taking the snapshot
4. **Rendered DOM captured** — the final HTML seen by a real user is what gets diffed

This approach catches content that only appears after JavaScript runs — pricing loaded by API call, feature sections rendered client-side, etc.

## Known Limitations

- **Session tokens / personalized content**: If a page renders different content for different users (e.g., logged-in state), KompWatch will see the unauthenticated view. This is a known limitation with no workaround today.
- **Heavy animation or skeleton loaders**: Some sites show a loading spinner and then swap in content. KompWatch's network-idle wait catches most of these, but sites with streaming or infinite scroll may require a specific CSS selector to target the stable portion of the page.
- **Bot detection**: A small number of sites block headless browsers with advanced fingerprinting (Cloudflare, Akamai bot protection). KompWatch will log a warning in those cases and show a partial or empty snapshot.

## Tips for SPA Sites

- **Use a CSS selector** to target a stable container (e.g., `.pricing-table`, `#features-section`). This ignores dynamic sidebar content or navigation elements that change constantly.
- Check your **Change Severity** settings — CSS-only changes from animations or rotating content are filtered as Low severity by default.
- If a competitor site consistently produces noisy, irrelevant diffs, email [support@kompwatch.com](mailto:support@kompwatch.com) and we can help tune the selector.

## Does KompWatch Follow Client-Side Navigation?

No — KompWatch monitors the URL you specify, not additional pages that load via client-side routing. To monitor multiple pages (e.g., `/pricing`, `/features`, `/blog`), add each as a separate competitor entry or separate URL.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
