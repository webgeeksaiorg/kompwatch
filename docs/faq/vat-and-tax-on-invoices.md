# VAT and Tax on KompWatch Invoices

KompWatch uses Stripe for all billing. Stripe automatically calculates and applies VAT (Value Added Tax), GST, or sales tax based on your billing address and business type.

## Does KompWatch Charge VAT?

**EU customers:** If you're in the EU and have not provided a valid VAT ID, Stripe will add VAT at the local rate for your country. If you're a VAT-registered business, enter your VAT ID to have it removed.

**UK customers:** VAT applies at 20% unless you're VAT-registered (enter your VAT number to remove it).

**US customers:** Sales tax may apply depending on your state. Stripe handles this automatically.

**Other countries:** GST or equivalent may apply where required by local law. Stripe handles compliance automatically — KompWatch does not manually manage tax rates.

## How to Add or Update Your VAT/Tax ID

1. Log in to your KompWatch account.
2. Go to **Settings → Billing**.
3. Click **Manage Billing** to open the Stripe Customer Portal.
4. Under **Billing information**, click **Tax ID**.
5. Select your country and enter your VAT or tax registration number.
6. Save — Stripe will validate the ID and apply the exemption on future invoices.

> **Note:** Tax IDs cannot be applied retroactively to already-issued invoices. If you believe a past invoice is incorrect, contact [support@kompwatch.com](mailto:support@kompwatch.com) with your tax registration details.

## What VAT/Tax IDs Are Accepted?

Stripe supports tax IDs for most countries including:

| Region | ID Type | Example |
|--------|---------|---------|
| EU | VAT number | DE123456789 |
| UK | VAT number | GB123456789 |
| Australia | ABN | 51 824 753 556 |
| Canada | GST/HST | 123456789 RT 0001 |
| US | EIN (for sales tax exemption) | 12-3456789 |

For a full list of supported ID types, see [Stripe's tax ID documentation](https://stripe.com/docs/billing/customer/tax-ids).

## Why Was Tax Charged When I Have a VAT ID?

Common reasons:
- Your VAT ID was entered after the invoice was issued (IDs only apply to future invoices).
- The ID failed Stripe's VIES validation — double-check the format.
- Your billing country and VAT ID country don't match.

If your ID is valid but tax is still being applied, email [support@kompwatch.com](mailto:support@kompwatch.com) and include your VAT/tax ID and the invoice number.

## I'm a Non-Profit or Tax-Exempt Organization

Contact [support@kompwatch.com](mailto:support@kompwatch.com) with your tax exemption certificate. We'll add the exemption manually to your account.

## Reverse Charge (B2B EU Transactions)

If you're a VAT-registered business in the EU (outside the country where KompWatch is established), the reverse charge mechanism may apply. Enter your VAT ID in the portal — Stripe will automatically apply reverse charge and mark the invoice accordingly.

## Related

- [Downloading your invoices and billing history](downloading-invoices-and-billing-history.md)
- [Updating your payment method](updating-your-payment-method.md)
- [Billing by invoice or purchase order (PO)](billing-by-invoice-or-po.md)
- [Annual plan billing and savings](annual-plan-billing-and-savings.md)

---
*Questions about your specific tax situation? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll respond within 24 hours.*
