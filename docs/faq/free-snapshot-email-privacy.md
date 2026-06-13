# Free Snapshot — What Happens to Your Email Address

When you request a free competitor snapshot at `/free-snapshot`, you provide an email address. Here's exactly how it's used.

## Why is an email address required?

The email serves two purposes:

1. **Rate limiting** — The free snapshot endpoint allows 3 requests per email address per hour. Without an identifier, a single person could hammer the endpoint and degrade results for everyone.
2. **Snapshot delivery fallback** — If your browser session drops before results load (slow pages, network blips), we can re-send the report to your inbox.

## Will I receive follow-up emails?

Yes — submitting an email for the free snapshot enrolls you in a short **3-email automated sequence** sent over the following week:

| When | Subject (approximate) |
|------|----------------------|
| T+1 day | Your snapshot recap — what happens next? |
| T+3 days | 4 competitor moves you're probably missing right now |
| T+7 days | One week later — how many competitor changes did you miss? |

The day-7 email explicitly states it is the **last email in the sequence**. After that, you won't receive any further emails from KompWatch unless you create an account.

All three emails are sent from `hello@kompwatch.com` and link only to `kompwatch.com` domains.

## How do I stop the follow-up emails?

Click the **Unsubscribe** link in the footer of any nurture email — it's in every message we send. One click removes you from the sequence immediately; no confirmation required.

If you can't find the email, you can also contact [support@kompwatch.com](mailto:support@kompwatch.com) with the subject "Unsubscribe from snapshot emails" and we'll remove you manually.

## Is my email stored?

Your email is stored as long as the nurture sequence is active (up to 7 days), and deleted afterward. If you opt out early, your record is deleted at the time of your opt-out request.

If you create a KompWatch account with the same email later, your email becomes part of your account record and is governed by our [Privacy Policy](https://kompwatch.com/privacy).

## Can I use a temporary email address?

Yes. If you'd prefer not to receive follow-up emails, a disposable address works fine for the snapshot. Note that rate limits apply per email address, so if you use a new disposable address each time, each one gets its own 3-requests-per-hour limit.

## How do I request deletion of my email?

Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll delete any record of your address immediately. Under GDPR, we honor deletion requests within 72 hours.

## I didn't give consent for follow-up emails

We disclose the follow-up sequence via tooltip on the `/free-snapshot` form. If this wasn't clear when you submitted, we apologize — email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll remove you and delete your record right away.

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com). We respond within 24 hours.*
