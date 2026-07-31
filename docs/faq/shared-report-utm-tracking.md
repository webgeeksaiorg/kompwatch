# Shared Report UTM Tracking — How Attribution Works on `/report/[token]`

## Does KompWatch Track When Someone Clicks Through My Shared Report?

Yes. Every link on a shared report page that leads back to KompWatch is tagged with UTM parameters so you can see exactly how shared reports drive signups and trial starts — in your analytics dashboard (Plausible) or any UTM-aware tool you use.

---

## What UTM Parameters Are Used?

Shared report pages have **four clickable entry points** to KompWatch, each tagged:

| Click location | Destination | `utm_source` | `utm_medium` | `utm_campaign` |
|---|---|---|---|---|
| KompWatch logo (top-left) | `/` (homepage) | `shared-report` | `report-nav` | `viewer-to-signup` |
| "Start monitoring →" (top-right) | `/pricing` | `shared-report` | `report-nav` | `viewer-to-signup` |
| "Get a free competitor snapshot" (bottom CTA) | `/free-snapshot` | `shared-report` | `report-cta` | `viewer-to-signup` |
| "See pricing" (bottom CTA) | `/pricing` | `shared-report` | `report-cta` | `viewer-to-signup` |

The `utm_medium` distinguishes **skimmers** who click the top nav (`report-nav`) from **engaged readers** who scroll to the bottom CTA (`report-cta`).

---

## Why Are There Two Different `utm_medium` Values?

- **`report-nav`** — The viewer clicked the logo or top-right link without finishing the report. This is often a quick-glance click from a stakeholder who wants to check out KompWatch immediately.
- **`report-cta`** — The viewer scrolled through the full report and clicked one of the bottom call-to-action buttons. These tend to be higher-intent visitors who read the content first.

Separating the two lets you see which placement drives better-quality signups.

---

## Where Can I See This Data?

If you're a KompWatch account holder, your analytics are in **Plausible** (self-hosted). Filter by:

- **Source** → `shared-report`
- **Campaign** → `viewer-to-signup`

You can also see this in Google Analytics, PostHog, or any other analytics tool if you've set up UTM parsing — the parameters are standard and will be captured automatically.

---

## Can I See Which Specific Report Drove a Signup?

Not currently. UTM parameters identify the **channel** (shared report) and **placement** (nav vs. CTA) but not the specific report token. If you need token-level attribution, contact support — we can look up server-side referral data for your account.

---

## Does the Viewer Know They're Being Tracked?

The shared report page follows standard web analytics practices. Clicking a link and being routed through UTM parameters is equivalent to any normal web link — no additional tracking beyond what the destination site collects from any visitor. Our privacy policy covers this.

---

## Related

- [Shareable Report Links — /report/[token]](shareable-report-link.md)
- [What Does KompWatch Track?](what-does-kompwatch-track.md)
- [How to Share CI With Your Sales Team](how-to-share-ci-with-sales-team.md)
