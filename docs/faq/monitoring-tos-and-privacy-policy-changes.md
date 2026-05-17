# Monitoring Competitor Terms of Service and Privacy Policy Changes

Tracking when competitors update their legal docs — Terms of Service, Privacy Policy, Data Processing Agreements, SLAs — is a legitimate competitive and compliance use case. KompWatch can do this with a few specific settings.

---

## Why Track Competitor Legal Pages?

| Signal | What it means |
|--------|--------------|
| ToS updated | New restrictions, new permitted uses, monetization changes |
| Privacy Policy updated | Data retention changes, new data sharing, GDPR/CCPA scope changes |
| DPA updated | Enterprise tier changes, subprocessor list updated |
| SLA updated | Uptime guarantee reduced or SLA tiers restructured |
| Pricing terms updated | Auto-renewal language tightened, cancellation policies changed |

Legal page changes are often the *first* visible signal of a larger business model shift — especially when combined with a simultaneous pricing page update.

---

## Setting Up Monitoring

### Step 1: Add the legal page as a separate monitored URL

Most competitors have a single legal landing page or a set of pages like:

```
/terms          /terms-of-service     /legal/terms
/privacy        /privacy-policy       /legal/privacy
/dpa            /data-processing      /legal/dpa
/sla            /service-level        /legal/sla
```

Add each page as its own competitor entry (or use [monitoring multiple pages per competitor →](./monitoring-multiple-pages-per-competitor.md)):

1. Go to **Competitors → Add Competitor**
2. Enter the competitor name with a label, e.g. "Acme — ToS"
3. Paste the URL of the Terms page
4. Set the CSS selector (see below)

### Step 2: Use a focused CSS selector

Legal pages typically have long, stable prose with occasional targeted changes. Narrow your selector to the main content body to exclude nav, footer, and cookie banners that change constantly.

Recommended selectors for legal pages:

```css
main                /* catches most legal page layouts */
article             /* blog-style legal pages */
.legal-content      /* common class on legal templates */
#tos-content        /* id-based layout */
[role="main"]       /* accessibility-compliant layouts */
```

Avoid `body` — it picks up cookie banners, session tokens, and analytics scripts that generate constant noise on legal pages.

### Step 3: Set severity preference

Legal page changes are low-frequency but high-importance. In **Settings → Digest Preferences**, ensure your severity floor is **LOW** or **MEDIUM** so legal changes aren't filtered out. Alternatively, enable **Real-time alerts** (Team plan) for legal page competitors so you're notified the moment a change appears.

---

## What KompWatch Detects on Legal Pages

KompWatch captures a rendered snapshot of the page and diffs it against the previous snapshot. For legal pages, this means:

- **Section additions or deletions** — new clauses, removed rights
- **Paragraph rewrites** — changed obligations or definitions
- **Effective date changes** — the "Last updated: [date]" field is often the first visible change
- **Version number bumps** — if the competitor versions their legal docs

The AI summary will describe what changed in plain language — e.g. "Added a new section titled 'AI-generated content' under Section 5. Effective date updated from 2024-01-15 to 2026-04-01."

---

## Limitations

- **Gated legal docs**: Some enterprise ToS pages require login or are embedded in in-app legal flows. KompWatch cannot monitor pages that require authentication. See [Monitoring Login-Required Pages →](./monitoring-login-required-pages.md).
- **PDF legal docs**: If a competitor hosts their ToS as a PDF file rather than an HTML page, KompWatch cannot diff it (HTML monitoring only).
- **Change detection threshold**: Minor reformatting or punctuation fixes may not generate a change alert depending on your confidence and severity settings. Substantive clause changes always will.

---

## Common Patterns to Watch

| Pattern | What it often signals |
|---------|----------------------|
| "Effective immediately" language added | Unilateral terms change — possible enforcement issue |
| Data retention period shortened | Privacy posture tightening (often pre-audit) |
| New AI/ML clause added | Model training on user data introduced |
| Subprocessor list updated | New third-party integrations or infrastructure changes |
| Arbitration clause added | Preparing to limit legal exposure |
| "Enterprise" section added | Launching an enterprise tier soon |

---

## Related Articles

- [Monitoring Multiple Pages Per Competitor](./monitoring-multiple-pages-per-competitor.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [CSS Selectors — How to Scope What KompWatch Tracks](./css-selectors.md)
- [Monitoring Competitor Help Centers and Docs](./monitoring-competitor-help-centers-and-docs.md)
- [Change Severity Levels](./change-severity-levels.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
