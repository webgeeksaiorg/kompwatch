# Switching from SoftwareOne (Formerly Crayon) to KompWatch

**Short answer:** If you were a Crayon customer and your contract is now under SoftwareOne, you have a clean exit window. KompWatch offers self-serve competitor change detection with no sales negotiation, no enterprise contract, and no annual commit. Migration takes under 15 minutes.

---

## What Happened to Crayon?

In April 2026, SoftwareOne completed its $1.4B acquisition of Crayon. As of mid-2026, Crayon has been rebranded under the SoftwareOne umbrella. SoftwareOne is primarily an IT asset management and cloud services company — competitive intelligence is not their core business.

For existing Crayon customers, this means:

- **Renewal negotiations now go through SoftwareOne's enterprise sales process** — longer timelines, unfamiliar reps, and pricing that may not reflect your historical Crayon relationship.
- **Product roadmap priority has shifted** — SoftwareOne's investment focus is on SAM (Software Asset Management) and cloud cost optimization, not CI feature development.
- **Support quality may have degraded** — large integrations frequently cause service disruption and team turnover during the transition period.
- **Your Crayon data and battlecards remain accessible**, but data export and migration paths are not always clearly documented under the new ownership.

See [Crayon Is Now SoftwareOne — What Does That Mean for Me? →](./crayon-rebranded-to-softwareone.md) for the full background.

---

## What KompWatch Replaces from the Crayon/SoftwareOne Stack

KompWatch focuses on the website change-detection layer of competitive intelligence — the part that's most immediately actionable. Here's how the overlap maps:

| Crayon/SoftwareOne Feature | KompWatch Equivalent |
|---|---|
| Website change tracking (competitor pages) | ✅ Core capability — 1–6 hour snapshots |
| AI-generated change summaries | ✅ Per-change AI summary with confidence score |
| Digest emails (daily/weekly) | ✅ Configurable digest frequency |
| Slack alerts | ✅ Slack + webhook integration |
| Pricing change detection | ✅ High-priority detection with PRICING change type |
| Signal noise filtering | ✅ AI classification + confidence scoring |
| Battlecard generation | Lightweight — KompWatch surfaces the changes; your team writes the card |
| Win-loss analysis | ❌ Not in scope — KompWatch tracks pages, not deal outcomes |
| CRM-embedded battlecards (Salesforce, Dynamics) | ❌ Not in scope — use webhook to push alerts to your CRM |
| In-call competitive assistance (Teams/Copilot) | ❌ Not in scope — Klue Compete Agent handles this use case |

**Who switches from SoftwareOne to KompWatch successfully:** Teams whose primary use case was website change detection and digest delivery — i.e., "tell me when a competitor changes their pricing or features page." Teams who relied heavily on Crayon's battlecard curation layer or Salesforce integration will need to manage those workflows separately.

---

## Migration Steps (Under 15 Minutes)

### 1. Export your competitor list from SoftwareOne/Crayon

In your Crayon/SoftwareOne dashboard, navigate to **Competitors** and note the primary URLs you were monitoring. Focus on:
- Pricing pages (`/pricing`)
- Features/product pages (`/features`, `/product`)
- Alternatives or compare pages (`/alternatives`, `/compare`)

You do not need to export snapshot history — KompWatch will start fresh baselines.

### 2. Sign up for KompWatch (free, no credit card)

Go to [kompwatch.com](https://kompwatch.com) and create a free account. Free tier includes 2 competitor slots and daily snapshots.

### 3. Add your top competitors

In your KompWatch dashboard → **Competitors** → **Add Competitor**:
- Enter the competitor URL (use the specific page, e.g., `https://competitor.com/pricing`)
- Set a CSS selector if you want to focus on a specific section (optional — `body` works for most cases)
- Add a name for your reference

Start with your 2–3 highest-priority competitor pricing pages. See [Which Pages to Monitor Per Competitor →](./which-pages-to-monitor-per-competitor.md)

### 4. Set up Slack notifications (optional but recommended)

Go to **Settings → Integrations → Slack** and connect your workspace. You'll get alerts within your snapshot window whenever a meaningful change is detected.

### 5. Upgrade if needed

If you need more than 2 competitor slots or 6-hour snapshot frequency, upgrade to Pro at $49/month — no call required, instant activation.

---

## What You're Giving Up (Be Honest)

SoftwareOne/Crayon is a broader platform. If you were actively using these capabilities, KompWatch is not a full replacement:

**Battlecard workflow at scale:** Crayon had tools for curating, distributing, and updating battlecards across a sales team. KompWatch surfaces the raw change signals; you'll need to manage battlecard updates manually or via a separate doc/wiki system.

**CRM integration depth:** Crayon had Salesforce integration for embedding battlecards directly in Opportunity records. KompWatch's Salesforce integration is webhook-based — you can push alerts, but you won't get native Opportunity-level embedding without custom configuration.

**Historical corpus:** Crayon maintained a curated knowledge corpus about competitors (funding, announcements, product history). KompWatch only tracks page changes from the day you start monitoring — no historical corpus.

If these were core use cases, evaluate whether KompWatch covers your actual day-to-day workflow before canceling SoftwareOne.

---

## The Cost Difference

| | SoftwareOne/Crayon | KompWatch |
|---|---|---|
| Entry price | Enterprise contract (typically $15K–$40K/year) | Free |
| Self-serve paid tier | No — sales required | $49/month |
| Annual commitment | Yes | No (month-to-month) |
| Sales process to start | Yes | No |

For teams paying enterprise prices primarily for the website-monitoring and digest layer, the cost delta is significant. Most teams that migrate cite the renewal friction and pricing as the primary driver — not a feature gap in the core detection use case.

---

## Frequently Asked Questions

**Q: Will I lose my Crayon/SoftwareOne data when I switch?**  
A: KompWatch starts fresh baselines — you won't import historical Crayon snapshots. Your Crayon/SoftwareOne data remains in your account until you cancel; export anything you need before your contract ends.

**Q: Can I run KompWatch alongside SoftwareOne during a trial period?**  
A: Yes. KompWatch free tier is instant signup with no contract. Many teams run both in parallel for 2–4 weeks before canceling the incumbent.

**Q: Does KompWatch support monitoring the same pages Crayon monitored?**  
A: Yes — any publicly accessible URL. Some Crayon users monitored pages behind login-gated portals or partner intranets; those require workarounds. See [Can I Monitor Login-Required Pages? →](./monitoring-login-required-pages.md)

**Q: How do I cancel SoftwareOne/Crayon?**  
A: Contact your SoftwareOne account manager. Your contract terms govern the cancellation window — check for auto-renewal clauses, which Crayon contracts typically included. Provide written notice before the renewal date.

**Q: Is there a migration discount?**  
A: Check [Migration Reimbursement →](./migration-reimbursement-other-tools.md) — KompWatch offers partial reimbursement for switchers from paid CI tools during the contract overlap period.

---

## Related Articles

- [Crayon Is Now SoftwareOne — What Does That Mean for Me?](./crayon-rebranded-to-softwareone.md)
- [Switching from Crayon](./switching-from-crayon.md)
- [Why CI Tools Become Shelfware](./why-ci-tools-become-shelfware.md)
- [Which Pages to Monitor Per Competitor](./which-pages-to-monitor-per-competitor.md)
- [Migration Reimbursement](./migration-reimbursement-other-tools.md)
- [What's Happening to the Competitive Intelligence Market in 2026?](./ci-market-consolidation-2026.md)
- [Competitive Intelligence Without a Dedicated Analyst](./how-to-use-kompwatch-without-a-dedicated-ci-analyst.md)

---

*Questions about migrating? Email [support@kompwatch.com](mailto:support@kompwatch.com) — we respond within 24 hours and can walk you through the setup.*
