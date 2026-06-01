# What Is the Onboarding Checklist on My Dashboard?

When you first sign in to KompWatch, a **Get started with KompWatch** checklist appears at the top of your dashboard. It walks you through five activation steps to make sure you're getting the most out of competitor monitoring.

> **Free tier users** see four steps — the Slack/Teams webhook step requires a Pro or Team plan.

---

## The Five Steps

### 1. Add your first competitor
Paste a URL — a competitor's pricing page, features page, or homepage — and KompWatch starts monitoring it immediately. Your first snapshot runs right away; change detection begins after the second snapshot completes (see [Why Don't I See Any Changes Yet?](why-no-changes-yet.md)).

→ Click **Add competitor** or go to [/competitors](https://kompwatch.com/competitors).

### 2. Add a second competitor
Adding a second competitor enables cross-competitor trend comparison in your digests — useful for spotting industry-wide pricing or messaging shifts vs. company-specific changes.

→ Click **Add competitor** again from [/competitors](https://kompwatch.com/competitors).

### 3. Customize your alert threshold
Choose which severity levels appear in your digest — HIGH only, MEDIUM and above, or all changes including LOW. Setting this early keeps your inbox clean from day one.

→ Click **Configure alerts** or go to **Settings → Notifications → Minimum severity**. See [Managing Alert Fatigue](managing-alert-fatigue.md) for guidance on choosing the right threshold.

### 4. Receive your first digest
Confirms that end-to-end delivery is working — your account email receives the digest, it's not blocked by spam filters, and the digest content looks right.

→ Check your inbox after the next scheduled digest run, or go to [/digests](https://kompwatch.com/digests) to view past digests.

### 5. Connect Slack or Teams *(Pro+ only)*
Add a webhook URL to receive real-time alerts in your Slack channel or Microsoft Teams when a competitor changes. This step is optional for email-only users but highly recommended — most teams get more value from real-time channel alerts than from email digests alone.

→ Click **Set up webhook** or go to **Settings → Notifications → Webhook URL**. See [Integrations and Notifications](integrations-and-notifications.md) for step-by-step instructions.

---

## Progress Bar

The checklist shows a progress bar and a `{completed}/{total}` counter (e.g. `2/5`). As you complete each step, it is checked off and the bar advances automatically.

When all steps are done, **the checklist disappears automatically** with a "Setup complete!" confirmation.

---

## Can I Dismiss It?

Yes — click the **×** button in the top-right corner of the checklist to hide it at any time. Dismissal is stored in your browser's local storage, so the checklist will reappear if you switch devices or clear your browser data (until all steps are complete).

You can still complete the steps by navigating directly to [/competitors](https://kompwatch.com/competitors) and [/settings](https://kompwatch.com/settings).

---

## I Dismissed It by Accident — Can I Bring It Back?

To restore the checklist manually:

1. Open your browser's developer tools (F12 or Cmd+Option+I)
2. Go to **Application → Local Storage → kompwatch.com**
3. Find the key `kw:onboarding-checklist-dismissed` and delete it
4. Refresh the page

---

## What If I Don't Want to Complete All the Steps?

You don't have to — dismiss the checklist at any time. KompWatch works fine with just one competitor and default settings. The checklist is a suggestion, not a requirement.

---

## Related Articles

- [Dashboard Setup Checklist (full reference)](./dashboard-setup-checklist.md)
- [Getting Started with KompWatch](./getting-started.md)
- [Why Don't I See Any Changes Yet?](./why-no-changes-yet.md)
- [Managing Alert Fatigue](./managing-alert-fatigue.md)
- [Integrations and Notifications](./integrations-and-notifications.md)
- [Upgrading Your Plan](./upgrading-your-plan.md)

---

*If you have questions, email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
