# My Subscription Price Doesn't Match the Pricing Page

If you see a charge or subscription amount that differs from what's listed on the [KompWatch pricing page](https://kompwatch.com/pricing), here's what to check.

---

## Current Pricing

| Plan | Monthly | Annual (billed yearly) |
|------|---------|------------------------|
| Free | $0      | $0                     |
| Pro  | $49/mo  | $39/mo ($468/year)     |
| Team | $149/mo | $119/mo ($1,428/year)  |

---

## Common Reasons for a Price Mismatch

### 1. You're on a Founding Customer rate ($29/mo)

If you subscribed during the **Founding Customer Program** (first 20 Pro monthly subscribers), your price is **$29/mo** — this is correct and intentional. Your founding rate is locked for life and will never be raised.

A $29/mo charge for a Pro plan is **not a billing error**. See [Founding Customer Program](./founding-pricing.md) for full details.

### 2. You're on an annual plan

Annual plans are billed upfront at a discounted rate ($39/mo equivalent for Pro, $119/mo equivalent for Team). A single annual charge will look different from the monthly price listed on the pricing page.

- Pro Annual: **$468 charged once per year** (not $49/mo)
- Team Annual: **$1,428 charged once per year** (not $149/mo)

See [Annual Billing](/docs/faq/annual-billing) for details.

### 3. You're on a legacy beta price

Early KompWatch beta users were occasionally onboarded at promotional or test pricing (e.g. **$9.99/mo**) that no longer matches current plan rates. These prices reflect old Stripe price IDs from our beta period that were never intended for long-term use.

**What to do:** Check your subscription details in [Settings → Manage Subscription](https://kompwatch.com/settings). If your plan label says "Pro" but your charge is $9.99/mo or another unexpected amount, contact [support@kompwatch.com](mailto:support@kompwatch.com) — we'll clarify whether your price is intentional or the result of a billing configuration issue.

> **Note:** If you were charged $9.99/mo as a beta user and your subscription is current, we will honour that rate and proactively reach out before making any changes.

### 4. A Stripe pricing ID mismatch

In rare cases, a webhook or checkout session may attach a subscription to an outdated Stripe price ID — one that reflects an old price point that was never meant to be active. KompWatch's billing system now detects and flags these automatically.

**What to do:** If you believe your subscription price is incorrect due to a Stripe configuration issue, email [support@kompwatch.com](mailto:support@kompwatch.com) with your account email. We can verify your price ID and correct it. Any overcharge will be refunded.

### 5. A trial or promotional credit was applied

If you used a referral code, a promotional link, or were offered a trial extension, your first charge may be reduced or zero. Subsequent billing cycles revert to standard pricing.

---

## What to Do If Your Price Looks Wrong

1. Go to [Settings → Manage Subscription](https://kompwatch.com/settings) and open the Stripe Customer Portal
2. Check the plan name and billing cycle listed there
3. If the plan name and price don't match the [pricing page](https://kompwatch.com/pricing), email [support@kompwatch.com](mailto:support@kompwatch.com) with:
   - Your account email
   - The amount you're being charged
   - The plan name shown in your settings

We'll investigate and correct any billing errors within 24 hours. Overcharges are refunded immediately.

---

*Questions about your bill? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
