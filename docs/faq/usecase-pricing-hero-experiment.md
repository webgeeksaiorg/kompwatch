# What Is the A/B Test on the Competitor Pricing Use-Case Page?

Some visitors to [/use-case/track-competitor-pricing](/use-case/track-competitor-pricing) see different headline and CTA copy than others.

## What Are the Two Variants?

- **Variant A (Control):** "Track competitor pricing automatically" — the original copy targeting the "track competitor pricing" keyword cluster.
- **Variant B (Treatment):** "Monitor competitor pricing changes before your customers notice" — rewritten copy targeting the "monitor competitor pricing" keyword cluster, with an urgency-driven subheadline and faster-onboarding CTA ("live in 60 seconds").

## Why Are We Testing This?

Search data shows two distinct keyword clusters with similar intent: "track competitor pricing" and "monitor competitor pricing." The control copy targets the "track" cluster. Variant B tests whether leading with "monitor" language and a speed-of-setup CTA improves conversion for users arriving via the "monitor" search cluster.

## How Is the Variant Assigned?

Each visitor is assigned a variant (A or B) via a 50/50 random split on first visit. The assignment is stored in `sessionStorage` so it persists within the session but resets on new sessions. Both variants fire a `UseCase Pricing Hero Impression` Plausible event with the variant label for cohort analysis. CTA clicks are tracked via the `UseCase Pricing Hero CTA` event with the same variant context.

## Does This Affect SEO or Page Content Below the Hero?

No. The experiment only changes the hero section (headline, subheadline, CTA text, and footnote). All other page content — pain points, how-it-works, detection types, pricing, FAQ, and structured data — remain identical for both variants. The `<title>` and meta description are server-rendered and unchanged by the client-side experiment.

---

*Related: [How Does Monitoring Work? →](./how-monitoring-works.md) · [Monitoring Competitor Pricing Pages →](./monitoring-competitor-pricing-pages.md)*

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
