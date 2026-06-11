# Free Snapshot — What Happens to Your Email Address

When you request a free competitor snapshot at `/free-snapshot`, you provide an email address. Here's exactly how it's used.

## Why is an email address required?

The email serves two purposes:

1. **Rate limiting** — The free snapshot endpoint allows 3 requests per email address per hour. Without an identifier, a single person could hammer the endpoint and degrade results for everyone.
2. **Snapshot delivery fallback** — If your browser session drops before results load (slow pages, network blips), we can re-send the report to your inbox.

## Will I receive marketing emails?

Not automatically. Submitting an email for the free snapshot **does not** subscribe you to any mailing list or newsletter.

You may receive:

- A one-time email with your snapshot results if the on-screen delivery fails
- A one-time follow-up if our team notices your snapshot and thinks we can help (rare, always manually sent — never automated drip)

If you create a KompWatch account with the same email later, you'll receive digest emails as configured for your account. You can unsubscribe from those at any time.

## Is my email stored?

Your email is stored for up to 7 days — long enough to enforce rate limits and recover failed snapshot deliveries. After 7 days it is deleted from our systems.

If you create an account, your email becomes part of your account record and is governed by our [Privacy Policy](https://kompwatch.com/privacy).

## Can I use a temporary email address?

Yes. If you'd prefer not to share your real email, a disposable address works fine for the snapshot. Note that rate limits apply per email address, so if you use a new disposable address each time, each one gets its own 3-requests-per-hour limit.

## How do I request deletion of my email?

Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll delete any record of your address from the free snapshot store immediately. Under GDPR, we honor deletion requests within 72 hours.

## I didn't give consent for you to store my email

We disclose the rate-limiting and fallback-delivery use in the form tooltip at `/free-snapshot`. If this wasn't clear when you submitted, we apologize — email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll delete your record right away.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com). We respond within 24 hours.*
