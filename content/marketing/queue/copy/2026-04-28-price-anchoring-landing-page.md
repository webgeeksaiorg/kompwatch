---
platform: copy
type: landing-page-experiment
status: ready
score: 9/10
strategist_task: f92a
experiment: price-anchoring
target_section: landing page hero / pricing section
keywords: [crayon alternative, competitor monitoring affordable, crayon pricing]
---

# Price Anchoring Copy — Landing Page Experiment (Strategist f92a)

## What This Is

Add a price anchor element near the hero or pricing section of the landing page.
The anchor establishes Crayon's real-world cost so $49/mo feels like the obvious choice.

**Research backing:** Crayon median contract = $28,750/year (Vendr, 90+ verified purchases).
This is public data, citeable. Not estimated.

---

## Recommended Implementation: Social Proof Bar

Add a horizontal callout between the hero CTA and the features section:

```
"Crayon costs $28,750/year on average (Vendr data). We're $49/month."
```

**Full bar copy (short):**
> Crayon costs $28,750/year. Klue costs $30,000/year. KompWatch is $49/month.

**Alt variant (comparison framing):**
> The average team pays $28,750/year for Crayon.
> KompWatch Pro is $49/month — $588/year.
> That's 49x less.

---

## Hero Callout Variants (A/B test options)

### Option A — Hard numbers, no fluff
```
The average team pays $28,750/year for Crayon.
KompWatch is $49/month.
```

### Option B — "You vs them" framing
```
Crayon: $28,750/year average contract.
Klue: $30,000/year average contract.
KompWatch: $49/month.
```
(Source: Vendr 2026)

### Option C — Reframe as "entry price"
```
Crayon starts at $25,000/year.
You start free here.
```

---

## Pricing Section Subheadline (recommended addition)

Below the current pricing headline, add:

> Crayon averages $28,750/year. Klue averages $30,000/year.
> KompWatch Pro is $49/month. That's not a typo.

---

## Tone Notes

- Use real numbers from Vendr — don't say "thousands per year" when you can say "$28,750"
- The contrast should feel matter-of-fact, not smug
- Add source attribution: "(Vendr 2026, 90+ purchases)" to make it verifiable
- Don't say "affordable" — show the math and let it speak

---

## Builder Implementation Note

This is a copy-only experiment. No new components needed — add as:
1. A short text block in `src/app/page.tsx` between the hero and features sections, OR
2. As a callout subheading inside the existing pricing section
Test click-through rate on the hero CTA before/after.
