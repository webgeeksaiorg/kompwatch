# Monitoring a Competitor's Product Launch with KompWatch

When a competitor launches — on Product Hunt, at a conference, or through a press release — their website, pricing, and messaging shift fast. KompWatch is designed to catch those changes as they happen.

## Why Launch Windows Matter

The 30–90 days after a competitor launches are some of the most information-dense you'll see:

- **Pricing is often soft** — launch pricing is frequently discounted, time-limited, or subject to rapid revision as the team responds to feedback.
- **Messaging tests run hot** — landing pages, hero copy, and taglines get A/B tested aggressively during launch. Watching these shifts reveals how the team is positioning against you.
- **Feature scope clarifies** — features pages are filled in post-launch as the team responds to FAQs. Early gaps in the feature set become visible before they're papered over.
- **Social proof builds** — the "As seen on Product Hunt", G2 badges, and early testimonials appear in a specific sequence. Knowing when they land tells you when to push on reviews yourself.

## Setting Up a Launch Monitor

1. **Add the competitor URL** in Dashboard → Add Competitor. Use their homepage, pricing page, and any dedicated features page as separate tracked URLs.
2. **Set tight CSS selectors** — for a launch, you care about the hero, pricing table, and features list. Add selectors like `.hero`, `.pricing`, `[data-section="features"]` to filter out nav and footer churn.
3. **Upgrade to Pro for 6-hour snapshots** — daily snapshots can miss same-day price changes and A/B tests that run for under 48 hours. Pro (10 competitors, $49/mo) gives you 6-hour cadence, catching intraday changes.

## What to Watch in the First 30 Days

| Signal | What it reveals |
|---|---|
| Hero copy changes | How they're positioning after initial feedback |
| Pricing page edits | Whether launch pricing is sticking or adjusting |
| New feature bullets | What customers are asking for that wasn't ready at launch |
| Social proof additions | When they hit G2/Capterra momentum (time to push your own) |
| Job listing bursts | What they're building next (ML engineers = AI feature coming) |
| Footer/nav additions | New product lines, partnership pages, or compliance pages |

## Product Hunt Launch Specifically

On launch day and the day after, Product Hunt-launched products often:

- Run limited-time pricing visible only through the PH listing and their own site.
- Update their landing page 3–5 times in the first 48 hours in response to hunter comments.
- Ship a changelog or roadmap page that wasn't live pre-launch.

If you add a competitor on launch day, KompWatch captures a baseline snapshot immediately. All subsequent changes are diff'd against that baseline — so you'll see every edit made in the post-launch scramble.

## Setting Up Slack Alerts During a Launch Window

On the Team plan, you can route a specific competitor's high/critical severity changes directly to a Slack channel. This is useful for a 30-day launch watch:

1. Go to Settings → Integrations → Slack.
2. Set up a dedicated `#competitor-[name]-launch` channel.
3. Enable High + Critical severity alerts for that competitor only.

After 30 days, downgrade back to digest-only if the signal-to-noise ratio drops.

## After the Launch Window

Once a competitor has been live for 90+ days, their change rate stabilizes. At that point:

- Switch from Pro (6-hour) back to Free (daily) cadence if you only track that one competitor.
- Focus your selectors on pricing and job listings, which remain high-signal long-term.
- Use KompWatch's digest summaries for quarterly competitive reviews rather than real-time alerts.

---
*For a full breakdown of what KompWatch tracks, see [What Does KompWatch Track?](./what-does-kompwatch-track.md)*
