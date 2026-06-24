# Data Residency, SOC 2, and Compliance Questions

Common questions from security-conscious teams, procurement, and enterprise buyers about where KompWatch stores data, what certifications it holds, and how it handles compliance requirements.

## Where Is KompWatch Data Stored?

KompWatch stores all customer data in the **United States** on AWS infrastructure. This includes:
- Account and user data
- Competitor URLs and configuration
- Snapshots (HTML content captured from competitor pages)
- Change records and AI-generated summaries
- Digest history

**EU/EEA customers:** KompWatch does not currently offer EU-based data residency. Data is transferred to and processed in the US. If you're in the EU, please review the GDPR section below.

**Regional data residency** (EU, APAC) is on the roadmap for the Enterprise plan. Contact [support@kompwatch.com](mailto:support@kompwatch.com) to register your interest or discuss requirements.

## Is KompWatch SOC 2 Certified?

KompWatch is not currently SOC 2 Type II certified. We are working toward SOC 2 Type II certification.

If your procurement or InfoSec team requires SOC 2, contact [support@kompwatch.com](mailto:support@kompwatch.com) — we can:
- Share our current security documentation and controls summary
- Discuss a timeline for certification
- In some cases, complete a security questionnaire for enterprise accounts

## GDPR Compliance

KompWatch complies with GDPR as it applies to the data we store about you (our customers). Key points:

### What Data We Hold
- Your email address and name (used for login and digest delivery)
- Your payment method details (stored by Stripe, not KompWatch directly)
- Your account activity (competitors added, snapshots taken, digests sent)

### Your Rights Under GDPR
- **Right to access** — request a copy of all data we hold about you
- **Right to erasure** — request full account and data deletion
- **Right to portability** — export your data before deleting your account
- **Right to rectification** — correct inaccurate personal data

To exercise any of these rights: email [privacy@kompwatch.com](mailto:privacy@kompwatch.com) or go to **Settings → Account → Delete Account**.

See: [GDPR Data Deletion](./gdpr-data-deletion.md)

### Data Processing Agreements (DPA)

KompWatch offers a **Data Processing Agreement (DPA)** for EU customers. To request a DPA, email [privacy@kompwatch.com](mailto:privacy@kompwatch.com) with your company name and use case. We'll respond within 5 business days.

### International Transfers

KompWatch transfers data from the EU to the US under **Standard Contractual Clauses (SCCs)**. Our DPA includes the current SCCs as required by GDPR Article 46.

## What Data Does KompWatch Collect About Competitors?

KompWatch scrapes **publicly accessible web pages** — the same content any anonymous visitor would see in a browser. We do not:
- Collect personal data about competitor employees
- Scrape login-required or private pages
- Intercept network traffic or use any form of unauthorized access
- Store competitor customer data

This is functionally equivalent to manually visiting a competitor's public website. For more on the legal standing:

See: [Is Competitor Monitoring Legal?](./is-competitor-monitoring-legal.md) · [Does KompWatch Respect robots.txt?](./does-kompwatch-respect-robots-txt.md)

## HIPAA Compliance

KompWatch is **not HIPAA-compliant** and is not designed for use with Protected Health Information (PHI). KompWatch is a competitive intelligence tool for SaaS teams — the data it handles is competitor website content and your account preferences, not health data.

If you work in healthcare and want to monitor competitor websites (e.g., a health tech startup tracking competitor SaaS marketing sites), that use case is fine — you would not be sending PHI into KompWatch.

## What Security Practices Does KompWatch Follow?

While we're working toward formal certification, our current security practices include:

| Practice | Status |
|----------|--------|
| Data encrypted in transit (TLS 1.2+) | ✅ |
| Data encrypted at rest (AES-256) | ✅ |
| Access controls (least privilege) | ✅ |
| Secrets management (no hardcoded credentials) | ✅ |
| Dependency vulnerability scanning | ✅ |
| Regular backups with tested restore procedures | ✅ |
| Incident response plan | ✅ |
| SOC 2 Type II | 🔄 In progress |
| Penetration testing (annual) | 🔄 Planned |
| Bug bounty program | ⏳ Roadmap |

For the full security overview: [Data Security](./data-security.md)

## Can I Sign a Business Associate Agreement (BAA)?

No. KompWatch does not offer BAAs and is not a HIPAA Business Associate.

## Vendor Security Questionnaires

Enterprise and mid-market teams often need to complete InfoSec/procurement security questionnaires before purchasing. We're happy to complete standard security questionnaires (e.g., SIG Lite, CAIQ, or custom forms).

Email [support@kompwatch.com](mailto:support@kompwatch.com) with your questionnaire. We respond to questionnaires within **5 business days**.

## Subprocessors

KompWatch uses the following subprocessors that may process your data:

| Subprocessor | Role | Location |
|-------------|------|----------|
| AWS | Infrastructure (compute, storage, database) | United States |
| Stripe | Payment processing | United States |
| Resend | Transactional email delivery | United States |
| Anthropic | AI digest generation (change summaries) | United States |

> Note: Anthropic processes the **content of competitor web pages** (publicly accessible HTML) and **your competitor names/URLs** to generate AI change summaries. No personal data about you or your customers is sent to Anthropic.

For a complete and up-to-date subprocessor list, email [privacy@kompwatch.com](mailto:privacy@kompwatch.com).

## Requesting a Security Review Call

For enterprise buyers who need a security review call with our team, contact [support@kompwatch.com](mailto:support@kompwatch.com) with your company name, procurement contact, and what you need covered. We schedule security calls within 3–5 business days.

---
*Related: [Data Security](./data-security.md) · [GDPR Data Deletion](./gdpr-data-deletion.md) · [Is Competitor Monitoring Legal?](./is-competitor-monitoring-legal.md) · [Enterprise Plan](./enterprise-plan.md) · [SSO and Single Sign-On](./sso-and-single-sign-on.md)*
