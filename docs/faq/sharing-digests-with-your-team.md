# Sharing Your Competitor Digest With Your Team

KompWatch sends digests to the email address on your account. If you want colleagues — sales reps, a product manager, your CEO — to see the same competitive intelligence, here are your options.

---

## Option 1: Forward Digests Manually

The simplest approach: forward the digest email to anyone who should see it.

- Digests are self-contained HTML emails — they look good forwarded
- Recipients see the full competitive intel without needing a KompWatch account
- Good for occasional sharing or one-off competitive reviews

**Limitation:** Manual. You have to remember to forward each time.

---

## Option 2: Use a Shared Team Email Alias (Recommended)

Register your KompWatch account with a shared alias instead of a personal inbox. Then everyone on the alias receives every digest automatically.

**Examples:**
```
competitive@yourcompany.com
intel@yourcompany.com
ci-team@yourcompany.com
```

**How to set this up:**
1. Create the alias in Google Workspace, Microsoft 365, or your email provider
2. Add everyone who should receive digests to the alias
3. Use the alias as your KompWatch login email

**If you're already using a personal email:** Email [support@kompwatch.com](mailto:support@kompwatch.com) to change your account email to the alias. We'll update it within 24 hours.

**Why this works well:**
- New team members automatically start receiving digests when added to the alias
- People leave the company? Remove them from the alias — no KompWatch changes needed
- The shared inbox becomes a searchable archive of competitive intel for the whole team

---

## Option 3: Export and Share a PDF

Download any digest as a formatted PDF and send it directly, post it in Slack, or attach it to a weekly meeting doc.

1. Go to [kompwatch.com/digests](https://kompwatch.com/digests)
2. Click on any digest
3. Click **Export PDF** in the top-right corner
4. Share the file however you like

The PDF includes severity color-coding, AI summaries, and the "What this means for you" strategic implication line — useful for exec updates or board prep.

See [Exporting Your Data →](./exporting-your-data.md) for full export options.

---

## Option 4: Share via Webhook to Slack or Teams

If your team lives in Slack or Microsoft Teams, connect KompWatch's webhook to a shared channel. Every detected change (above your severity threshold) posts in real-time to the channel — no email required.

1. Go to [kompwatch.com/settings](https://kompwatch.com/settings)
2. Paste your Slack or Teams incoming webhook URL into the **Webhook URL** field
3. Enable **Webhook notifications**

The whole channel sees changes the moment they're detected, without anyone needing to forward emails.

See [Integrations and Notifications →](./integrations-and-notifications.md) for setup instructions.

---

## Multi-Seat Logins (Coming Soon)

True multi-seat access — where each teammate has their own KompWatch login linked to a shared workspace — is on the roadmap. When available, it will let teammates:
- Log in with their own email and magic link
- See the same competitor feed and digest history
- Set individual notification preferences (e.g. Sales filters to PRICING changes; Product filters to FEATURE changes)

For updates, watch the [product changelog →](./product-changelog.md).

---

## Frequently Asked Questions

**Can I add a CC address to digest emails?**
Not yet — digests go to one address per account. The shared email alias workaround (Option 2 above) achieves the same result reliably.

**What if I want different teammates to get different competitors' alerts?**
Use Zapier with KompWatch's webhook: receive all change payloads, then filter by `competitor.name` and route to different Slack channels or email addresses. See [Integrations and Notifications →](./integrations-and-notifications.md).

**Can I give a colleague read-only access to my dashboard?**
Not yet — account login is one-email, one-session. This changes with multi-seat support (coming). In the meantime, the webhook-to-Slack option gives colleagues a real-time stream without sharing login credentials.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — a team member will respond within 24 hours.*
