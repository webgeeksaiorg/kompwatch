# Can I Monitor Non-English or International Competitor Websites?

Yes. KompWatch monitors any publicly accessible URL regardless of language or country. Here's how each layer of the system handles multilingual content.

---

## Change Detection

Change detection compares HTML structure and text content between snapshots. This is language-agnostic — differences in German, French, Japanese, or any other language are detected exactly the same way as English content.

**CSS selectors work across all languages.** If a German competitor uses `#preise` for their pricing section, set that as your selector and KompWatch tracks it precisely. See [CSS Selector Targeting](./css-selectors.md).

---

## AI Summaries

KompWatch uses Claude to generate plain-English summaries of detected changes. When the source page is not in English:

- Claude reads the non-English content and **writes the summary in English by default**
- The summary describes what changed (e.g. "Pricing page updated — the 'Pro' tier (previously 'Profi') increased from €49/mo to €69/mo")
- Quality is best for languages with strong AI training coverage: German, French, Spanish, Portuguese, Italian, Dutch, Japanese, Korean, and Chinese (Simplified/Traditional)

For less common languages, summaries may be less precise but change detection still works reliably.

---

## Geo-Blocked or Region-Specific Pages

Some competitor sites serve different content based on visitor location (IP-based geo-routing). If a competitor shows different pricing for EU vs. US visitors, KompWatch captures the version visible from its monitoring infrastructure — not your local version.

**Workaround for geo-split pages:** Add separate competitors for each regional URL if the competitor uses distinct URLs per region (e.g. `acmecorp.com/en-us/pricing` and `acmecorp.com/de/pricing`). Each URL is monitored independently.

---

## Pages Behind a Country-Specific Login

If a competitor page requires a regional account or is behind a country-specific paywall, KompWatch cannot access it (same as any login-required page). See [Monitoring Login-Required Pages](./monitoring-login-required-pages.md).

---

## Right-to-Left Languages

Pages in Arabic, Hebrew, Persian, or other RTL languages are supported for change detection. AI summaries will be in English. CSS selectors function the same way regardless of text direction.

---

## Plan Limits

There is no per-country or per-language restriction. Your plan's competitor limit (2 / 10 / 50) applies to all monitored URLs regardless of language or geography. See [Pricing](./pricing.md).

---

## Tips for Global Competitor Tracking

- **Use descriptive names** — when adding the competitor, include the region or language in the name (e.g. "Acme — Germany", "Acme — Japan") to keep your dashboard clear.
- **Scope selectors to stable elements** — international sites often have translated navigation or footer text that changes frequently. Scope your selector to the substantive section (pricing table, feature list) to reduce noise from minor copy updates.
- **Watch for hreflang and regional duplication** — some competitors maintain near-identical pages across multiple locales. Monitor the locale most relevant to your market to avoid redundant alerts.

---

*Questions about a specific competitor or language? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours.*
