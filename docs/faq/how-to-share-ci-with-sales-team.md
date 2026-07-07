# How to Share Competitive Intelligence With Your Sales Team

**Short answer:** Don't send raw digests to sales. Filter first, then route HIGH/CRITICAL changes to sales with a one-sentence "what this means in a deal" framing. The goal is signal, not reports.

---

## The Delivery Problem (Why Sales Stops Reading CI)

Competitive intelligence dies in shared Slack channels. The pattern:

1. A CI digest arrives
2. Someone forwards it to the `#sales` channel
3. Sales sees a wall of text about competitor pricing, feature updates, and positioning changes
4. Nobody knows what's relevant to their current deals
5. Engagement drops, people stop reading, the channel goes quiet

The problem isn't the information — it's the packaging. Sales reps need *actionable* intel in *deal-relevant* context, not a full competitive report.

---

## The Right Delivery Model

### Step 1: One Person Filters First

Assign one person (PM, PMM, or CI owner) to triage the digest before it reaches sales. Their job is to answer:

- Is this change HIGH or CRITICAL severity?
- Does it affect our positioning, pricing, or a feature we're frequently compared on?
- Is it relevant to active deal cycles this week?

If the answer to any of these is yes, it goes to sales. Everything else — LOW severity changes, design tweaks, blog posts — stays in the CI owner's digest.

### Step 2: Add One-Sentence Context

When you route a change to sales, don't forward the raw digest. Write one sentence explaining what it means for them in a deal:

> "Klue just dropped their entry plan from $199 to $149/mo. If a prospect compares to us on price, acknowledge this and redirect to our [X] differentiation."

That's it. One sentence is what sales can absorb between calls. A paragraph is what they skip.

### Step 3: Choose the Right Channel

| Delivery method | Best for |
|-----------------|----------|
| Slack DM to AEs | Individual deal-relevant intel ("hey, you're pitching Acme — their main competitor just launched X") |
| `#competitive` Slack channel | Significant changes all of sales should know (pricing drops, major feature launches) |
| CRM activity log | Documented record that a change occurred before/during a deal |
| Weekly sales briefing | Patterns and context that don't need immediate action |

For real-time alerts on significant changes, configure KompWatch Slack integration to post HIGH/CRITICAL changes to your `#competitive` channel automatically. This keeps the channel signal-dense rather than forwarding noise. See [Slack Alert Setup →](./slack-alert-setup.md).

### Step 4: Tie It to Specific Deals

The highest-value CI delivery happens at deal level:

- Before a demo: check if the competitor in the deal has changed their pricing or messaging in the past 30 days
- After a loss: check the change history for that competitor around the time of the deal
- During negotiation: if a competitor cut their price mid-deal, surface it with updated counter-messaging

KompWatch's change history timeline lets you pull up what a competitor changed in a specific date window — useful for retroactive deal analysis.

---

## Why Battlecards Fail Without This Delivery Layer

Battlecards go stale because the update mechanism relies on someone remembering to update them. Change-triggered updates solve the staleness problem on the production side.

But stale battlecards and *unused* battlecards are different failures. Even fresh battlecards get ignored if sales doesn't trust them to reflect current reality.

The trust repair path:
1. Get monitoring running reliably (so changes are caught)
2. Update battlecards when HIGH changes arrive (so they're actually current)
3. Explicitly tell sales "this was updated 3 days ago after [competitor] changed their pricing" — the date builds trust

One visible update cycle where the battlecard catches something live does more for sales adoption than any template redesign.

---

## What Not to Do

- **Don't forward raw digests to a shared channel.** Too much noise; nobody knows what to act on.
- **Don't create a weekly competitive report.** Nobody reads it by Friday. Use event-driven delivery instead.
- **Don't route LOW severity changes to sales.** CSS redesigns and nav changes are not deal-relevant. Signal quality matters.
- **Don't add everyone to the KompWatch account as digest recipients.** More recipients = more noise = lower engagement. One CI owner receives the digest; they filter and route.

---

## See Also

- [How to Keep Battlecards Up to Date (Without a CI Analyst) →](./how-to-keep-battlecards-up-to-date.md)
- [Who Should Own Competitive Monitoring? →](./who-should-own-competitive-monitoring.md)
- [Configuring Slack Alerts →](./slack-alert-setup.md)
- [Change Severity Levels →](./change-severity-levels.md)
- [Using the Change History Timeline →](./using-the-change-history-timeline.md)
