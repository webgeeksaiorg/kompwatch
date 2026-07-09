# My Card Was Declined or Checkout Failed

If you received an error during the KompWatch upgrade or signup checkout, this guide covers the most common causes and how to fix them.

---

## Why Checkout Errors Happen

KompWatch uses **Stripe Checkout** to process payments. Stripe communicates directly with your card issuer, and the card issuer makes the final decision on whether to approve or decline a charge. Stripe (and KompWatch) have no visibility into exactly why a card issuer declines a charge — but the most common causes are:

| Error type | What it usually means |
|---|---|
| Card declined | Card issuer refused the charge — call your bank, or try a different card |
| Insufficient funds | Not enough available credit or balance |
| Do not honor | Bank blocked the transaction as suspicious — call your bank to authorize |
| 3DS / authentication required | Your bank requires 3D Secure (extra verification step) |
| Card expired | Card expiry date has passed |
| Incorrect CVC | The security code entered doesn't match |
| Incorrect ZIP/postal code | Billing address mismatch — check the postcode you entered |
| Card number entered incorrectly | Typo in the card number field |

---

## Step-by-Step Troubleshooting

### 1. Try the checkout again with the same card
Sometimes card issuer systems have transient failures. A simple retry resolves ~20% of decline cases.

### 2. Check if 3D Secure triggered
Many European and UK banks require a one-time password or app approval (3D Secure). If your checkout showed an authentication prompt that timed out or was dismissed:
- Retry checkout
- When the 3DS screen appears, complete the authentication in your banking app before the timer runs out

### 3. Try a different card
If the issue persists with one card, try a different card (different issuer or card type). If the second card works, the original issuer is blocking the charge.

### 4. Call your bank
Tell your bank you're authorizing an online subscription purchase to **KompWatch (Stripe)** and ask them to allow it. This resolves "do not honor" and international transaction blocks.

### 5. Use a PayPal account or bank debit
If you have a PayPal account linked to a bank account, Stripe Checkout supports PayPal on some plans. This bypasses card issuer restrictions entirely.

### 6. Use a virtual card or company card
If your personal card is being blocked by your bank's fraud filters, a company card or a virtual card from a service like Revolut or Wise often processes without issue.

---

## What Happens to My Account While I'm Troubleshooting?

Nothing. If you're upgrading from Free, your Free account remains fully active. If you're on Pro and attempting to upgrade to Team, your Pro subscription continues without interruption. No monitoring is paused, no data is lost.

---

## I Got Charged but Didn't Get Access

This is rare but can happen if the browser session ended before Stripe completed the redirect back to KompWatch. Wait 5–10 minutes and refresh your dashboard — in most cases, the webhook arrives and your plan is updated automatically.

If your plan still shows as Free/Pro after 15 minutes and your card statement shows a charge:
1. Check your email for a confirmation receipt from Stripe/KompWatch
2. Reply to that email with your account email and we'll verify and correct your plan within 24 hours
3. Alternatively, email support@kompwatch.com with subject "Charged but access not updated"

---

## Company Card / Procurement Notes

If your company requires a purchase order or invoice before charging a card:
- See [Billing by Invoice or PO →](./billing-by-invoice-or-po.md)
- KompWatch can issue invoices for Pro and Team annual plans — contact support@kompwatch.com

---

## Still Stuck?

Email support@kompwatch.com with:
- The email address on your account
- The error message you saw (screenshot if possible)
- Which plan you were trying to upgrade to

We typically respond within a few hours.

---

## See Also

- [Updating Your Payment Method →](./updating-your-payment-method.md)
- [Failed Payment and Dunning →](./failed-payment-and-dunning.md)
- [Billing by Invoice or PO →](./billing-by-invoice-or-po.md)
- [Which Plan Is Right for Me? →](./which-plan-is-right-for-me.md)
