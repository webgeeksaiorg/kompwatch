# Digest Frequency Control — Smart, Daily, and Weekly Settings

KompWatch lets you choose how often you receive competitor change digests. You can set your preferred frequency in **Settings → Digest Preferences → Digest frequency**.

---

## Frequency Options

### Smart (Recommended)
KompWatch sends a digest only when there's something worth reading — typically when **MEDIUM or HIGH severity changes** are detected. During quiet periods with only LOW-severity updates, no email is sent (changes are still saved in your dashboard).

Smart mode adapts to your competitors' activity:
- Active week for competitors → you get digests more frequently
- Quiet week → inbox stays clean

### Daily
A digest is sent every morning at your configured delivery time, regardless of change severity. If no changes were detected since the last digest, no email goes out.

Best for: teams that want a consistent morning briefing ritual.

### Weekly
A digest is sent once per week on your configured day (default: Monday). Summarizes all changes detected in the past 7 days.

Best for: teams that check in less frequently or are monitoring slower-moving competitors.

---

## How to Change Your Frequency

1. Go to [kompwatch.com/settings](https://kompwatch.com/settings)
2. Under **Digest Preferences**, find **Digest frequency**
3. Select Smart, Daily, or Weekly from the dropdown
4. Save — takes effect on the next scheduled digest

---

## Frequency vs. Your Plan

Your plan sets an **upper bound** on how often KompWatch can detect changes (snapshot frequency). Your digest frequency setting controls how often you're *emailed* about those changes.

| Plan | Snapshot frequency | Max useful digest frequency |
|------|-------------------|------------------------------|
| Free | Daily | Weekly or Smart |
| Pro | Every 6 hours | Daily or Smart |
| Team | Hourly | Smart (near real-time) |

Setting Daily digests on a Free plan works fine — you'll get a daily email on days when the daily snapshot finds a change.

---

## Smart Mode — How It Decides to Send

Smart mode sends a digest when any of these are true since the last digest:
- At least one **HIGH** severity change detected
- Two or more **MEDIUM** severity changes detected
- Seven or more days have passed with any pending changes (failsafe — ensures you don't go more than a week without a summary)

LOW severity changes are always saved to your dashboard and included in the next digest that does send, but won't trigger a send on their own.

---

## Related FAQs

- [Digest Schedule and Timing](./digest-schedule-and-timing.md)
- [Understanding Your Digest](./understanding-your-digest.md)
- [Change Severity Levels](./change-severity-levels.md)
- [Per-Competitor Notification Settings](./per-competitor-notification-settings.md)
- [My Digest Email Didn't Arrive](./digest-not-arriving.md)

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we'll respond within 24 hours.*
