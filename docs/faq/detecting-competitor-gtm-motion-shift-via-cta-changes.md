# How to Detect a Competitor's GTM Motion Shift via CTA Changes

**Short answer:** A competitor switching their primary CTA from "Start free trial" to "Book a demo" (or the reverse) is one of the clearest signals that their go-to-market motion is changing. KompWatch detects CTA text changes as part of every page snapshot — here's how to read what a CTA change actually means and what to do about it.

---

## Why CTA changes are high-signal for GTM motion

A SaaS company's primary CTA is not just a button — it's a commitment about how they sell. Changing from self-serve ("Start free", "Try it free", "Sign up") to sales-led ("Book a demo", "Talk to sales", "Request a quote") is a significant internal decision that usually reflects one of these situations:

| CTA change | What it most often signals |
|---|---|
| `"Start free trial"` → `"Book a demo"` | Self-serve conversion broke, moving to sales-led — or deliberately moving upmarket |
| `"Book a demo"` → `"Start free trial"` | Sales velocity declining; pivoting to self-serve to reduce CAC |
| `"Get started free"` → `"Start free — no credit card"` | Friction-reduction experiment; free tier is underperforming |
| Adding a secondary `"Or talk to sales"` CTA | Hybrid motion — trying to serve both self-serve and enterprise buyers simultaneously |
| Removing a free tier mention from the CTA | Free plan being wound down or hard-paywalled |
| `"Start 14-day trial"` → `"Start 7-day trial"` | Trial-to-paid conversion problem; shortening trial to force the decision faster |

---

## Why this matters for your sales and marketing team

**If a competitor shifts from self-serve to sales-led:**
- Their conversion rate from sign-up to paid is likely struggling
- They're targeting larger contracts to offset lower volume
- Your self-serve motion becomes a differentiation point — "No sales call required" is suddenly a meaningful competitive advantage
- Expect their pricing to increase, often within 90 days of the CTA shift

**If a competitor shifts from sales-led to self-serve:**
- They're struggling with sales velocity or seeing high demo-to-close time
- They're likely targeting a lower ACV segment or trying to reduce CAC
- Watch for a new lower price point or a free tier — their pricing page will usually update within 30–60 days of the CTA change
- This can signal financial pressure (burn rate concern), or a genuine PLG pivot after a strategy shift

**If they add a demo CTA alongside an existing trial CTA:**
- They've identified an enterprise segment worth serving and are building a dual-motion
- Your upmarket sales reps will start hearing the competitor's name in deals they didn't previously see them in

---

## How KompWatch surfaces CTA changes

KompWatch classifies CTA copy changes as change type `CTA` with severity based on the nature of the shift:

- **HIGH severity:** Primary CTA verb or motion changes (free trial → demo, or demo → free)
- **MEDIUM severity:** CTA qualifier changes ("14-day" → "7-day", "no credit card" added/removed)
- **LOW severity:** Minor CTA microcopy tweaks ("Get started" → "Start now")

CTA changes on the homepage and pricing page are given higher weight than CTA changes deeper in the funnel, since homepage CTA reflects the dominant GTM motion the company wants to project to the market.

---

## Monitoring tips for CTA changes

**Add both homepage and pricing page.** CTA changes on the homepage usually lag the pricing page by 1–2 weeks — pricing page is updated first when a motion shift is in progress, because it's managed by the RevOps or sales team. Monitoring both gives you the earliest signal.

**Watch the secondary CTA too.** The primary CTA may stay the same while a secondary CTA is added. Adding "Or book a demo" below a "Start free trial" is often the first step in a motion shift before the primary CTA changes.

**Check the CTA on category landing pages.** `/for-enterprise` pages often have a different CTA from the homepage (demo vs. trial), and changes there signal ICP targeting shifts before the homepage updates.

**Combine with pricing page monitoring.** A CTA change from self-serve to sales-led is almost always followed by a pricing structure change within 60–90 days. If you see both change together, the GTM motion shift is confirmed and the competitor is unlikely to reverse course.

---

## Practical example

> KompWatch alert: Acme's homepage primary CTA changed from `"Start free — no credit card"` to `"See a demo"`. Secondary CTA `"Or start free"` added.

**Reading this signal:**
- They're not killing self-serve (secondary CTA still exists)
- But they're prioritizing demo-sourced pipeline — likely an enterprise push or conversion rate problem
- Their SDR team will start showing up in your enterprise deals
- Brief your AE team: expect to hear "Acme offers a free plan" as a prospect objection (the secondary CTA is still there as a fallback)
- Watch their pricing page in the next 60 days — expect either a price increase, a new enterprise tier, or both

---

## Related docs
- [Detecting when a competitor is repositioning their product](detecting-competitor-repositioning.md)
- [How to respond when a competitor changes their messaging](how-to-respond-to-competitor-messaging-change.md)
- [Detecting competitor pricing model changes](detecting-competitor-pricing-model-changes.md)
- [Monitoring competitor pricing pages](monitoring-competitor-pricing-pages.md)
- [What counts as positioning vs messaging in KompWatch's classification](competitor-positioning-vs-messaging-classification.md)
