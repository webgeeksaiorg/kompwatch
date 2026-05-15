# Failed Payment and Account Access

If a payment fails — declined card, expired card, insufficient funds — KompWatch does not cut off your access immediately. Here's what happens and how to recover.

## What Happens When a Payment Fails

KompWatch uses **Stripe's automatic retry schedule** for failed payments:

| Day | Action |
|-----|--------|
| Day 0 | First charge attempt fails — Stripe sends you an email |
| Day 3 | Second attempt |
| Day 5 | Third attempt |
| Day 7 | Fourth attempt — if this fails, subscription is cancelled |

During the retry window your account stays fully active. Monitoring continues, digests keep arriving, and no data is lost.

## How You're Notified

Stripe sends automatic payment failure emails to the billing email on your account. You'll receive:

1. An email immediately after the first failed attempt
2. A reminder email before each retry
3. A final notice if all retries are exhausted and the subscription is cancelled

KompWatch also shows a **"Payment issue — update your card"** banner in the dashboard during the retry window so you don't have to rely on email alone.

## How to Update Your Payment Method

1. Go to [kompwatch.com/settings](https://kompwatch.com/settings)
2. Click **Manage Subscription**
3. In the Stripe Customer Portal, click **Payment methods** → **Add payment method**
4. Enter your new card details and set it as default

Once the new card is saved, Stripe retries the outstanding charge automatically (usually within a few minutes).

## What Happens If All Retries Fail

If the payment cannot be collected after all retry attempts, your subscription is cancelled and your account drops to the **Free plan** limits:

- Competitor limit drops to 2 (excess competitors are paused, not deleted)
- Snapshot frequency drops to daily
- Digest frequency drops to weekly

Your historical snapshot and change data is preserved. You can resubscribe at any time from [kompwatch.com/pricing](https://kompwatch.com/pricing) and your data will be waiting for you.

## What Happens to Paused Competitors

If you had more competitors than the Free plan allows (2), the excess are automatically **paused** — not deleted. No data is lost. When you resubscribe to Pro or Team, resume them from the Competitors page.

## Can I Get a Grace Period Extension?

If you're dealing with a billing issue and need extra time, email [support@kompwatch.com](mailto:support@kompwatch.com). We can manually extend the grace period in exceptional cases (card stolen, billing cycle timing issues, etc.).

## Frequently Asked Questions

**Will I lose my competitor data if my payment fails?**
No. All snapshots, change history, and competitor configurations are retained regardless of billing status. Only active monitoring stops if your subscription lapses.

**My card was charged after I thought I cancelled — what do I do?**
See the [Billing Dispute FAQ →](./billing-dispute.md). If the charge is in error, we'll make it right.

**I updated my card — why is there still a banner?**
Give it a minute — Stripe retries the charge shortly after the card is updated. Refresh the page once the payment goes through and the banner will clear.

---
*Billing questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
