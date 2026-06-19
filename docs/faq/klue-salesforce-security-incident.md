# Klue Salesforce Security Incident — What It Means for CI Vendor Evaluation

In June 2026, Klue experienced a security incident related to their Salesforce integration. This FAQ explains what happened (as publicly known), what questions to ask any CI vendor about their security posture, and how KompWatch approaches data security.

## What Happened?

In June 2026, Klue disclosed a security incident affecting their Salesforce connector. The incident involved unauthorized access to data passing through the Salesforce integration layer. Klue notified affected customers and published guidance on their status page.

The details of scope, data types exposed, and remediation timeline are best confirmed directly with Klue. Their security contact is listed on their website.

## What Does This Mean for Teams Evaluating CI Vendors?

A security incident at a competitive intelligence platform is worth examining carefully because CI tools have unusual access:

- **They scrape competitor public websites** — relatively low risk, that content is public
- **But they also receive your internal context** — which deals you're tracking, which competitors you care about, who your sales reps are following

A breach at your CI vendor doesn't just expose your account email. It can expose your competitive strategy, the list of companies you're monitoring, and in integrated setups (Salesforce, HubSpot, Gong), data that flows through those connections.

**Questions to ask any CI vendor before connecting them to your CRM:**

1. What data from my CRM do you store, and for how long?
2. Is the integration read-only, or does it write back to my CRM?
3. Where is the integration data hosted — multi-tenant SaaS or your own infrastructure?
4. Do you have a Data Processing Addendum (DPA) available?
5. What is your responsible disclosure / incident notification process?
6. Do you have SOC 2 Type II, ISO 27001, or equivalent?

## How KompWatch Handles CRM Integrations

KompWatch does not have a native CRM connector that holds long-lived access to your Salesforce or HubSpot account. The integration model is different:

**Outbound webhooks only.** KompWatch fires an outbound HTTP POST to a URL you control (your Zapier endpoint, your own server, etc.) when a competitor change is detected. KompWatch never requests OAuth access to your CRM, never reads your CRM data, and never stores CRM records.

What this means for security:
- There is no Salesforce OAuth token stored in KompWatch's database
- A breach of KompWatch's database would not expose your Salesforce data
- You can revoke the Zapier/Make integration at any time without touching KompWatch

The trade-off: KompWatch can't do bidirectional sync (e.g., pulling deal data to route alerts to the right rep). If you need that, you set it up in Zapier with a lookup step — but that logic lives in your Zapier account, not in KompWatch.

## KompWatch's Security Posture

- **Hosting:** EU infrastructure (Hetzner, Germany) on dedicated hardware — not shared with other tenants
- **Authentication:** Magic link only — no passwords stored
- **Data encrypted:** In transit (TLS 1.2+, HSTS) and at rest (AES-256)
- **CRM access model:** Outbound webhooks only — KompWatch never reads your CRM
- **No passwords at risk:** Nothing to phish for CRM access, because there is no CRM OAuth token stored
- **SOC 2:** Not yet — in roadmap for post-early-access. Security practices published at [kompwatch.com/security](https://kompwatch.com/security)
- **DPA:** Available on request — email [privacy@kompwatch.com](mailto:privacy@kompwatch.com)
- **Responsible disclosure:** [security@kompwatch.com](mailto:security@kompwatch.com)

Full details: [Data Security & Privacy →](./data-security.md)

## Should I Switch CI Vendors Because of This?

That depends on what you need. A security incident is one factor among many — scope, remediation speed, vendor transparency, and whether the affected integration was one you use all matter.

If you were already evaluating whether Klue's enterprise pricing and analyst-heavy model fits your team, the incident may be a prompt to accelerate that decision. If you're a current Klue customer who relies on their Salesforce battlecard overlays, weigh the full switching cost before moving.

If your team's primary need is automated website monitoring with AI-generated digests — and you don't need battlecard CMS, win/loss workflows, or a Compete Agent — KompWatch covers that at $49/mo with no annual contract.

See [Switching from Klue →](./switching-from-klue.md) for a full feature comparison.

## Related Articles

- [Data Security & Privacy](./data-security.md)
- [Salesforce Integration](./salesforce-integration.md)
- [Switching from Klue](./switching-from-klue.md)
- [What Happens to My Data When I Cancel Klue?](./what-happens-to-my-data-when-i-cancel-klue.md)
- [Can I Trust KompWatch?](./trust-and-reviews.md)

---
*Questions about KompWatch security? Email [security@kompwatch.com](mailto:security@kompwatch.com). We respond within two business days.*
