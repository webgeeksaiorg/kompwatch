# Does My Competitor Know KompWatch Is Monitoring Their Site?

**Short answer:** No. KompWatch visits public pages the same way any browser would. Competitors have no way to identify you or KompWatch as the source of a visit.

---

## How KompWatch visits competitor pages

KompWatch uses a headless Chromium browser (via Playwright). Each visit looks identical to a real user opening the page in Chrome — the same rendered HTML, the same JavaScript execution, the same HTTP headers a normal browser sends. There is no KompWatch-specific User-Agent string. The request is not signed or labeled in any way that would identify you or the tool.

Your competitor's analytics will record one anonymous pageview. That's it.

---

## Can competitors see who owns the KompWatch account?

No. KompWatch never discloses your identity, company name, or email to the websites it monitors. Your account information stays entirely within KompWatch — it is not shared with third parties and is never sent as part of a monitoring request.

---

## Does KompWatch show up in a competitor's server logs?

It shows up as an anonymous IP address making a normal HTTP request. No different from someone Googling the competitor and clicking through to their pricing page.

KompWatch rotates requests and rate-limits to at most once per hour per competitor URL. A single anonymous visit per hour is undetectable in any normal traffic analysis.

---

## What if a competitor runs bot-detection software (e.g. Cloudflare)?

KompWatch renders pages through a real headless browser, which passes most standard bot-detection checks. It sends realistic headers, executes JavaScript, and does not use data center IP ranges that trigger common blocklists.

However, very aggressive anti-bot configurations (e.g. requiring CAPTCHA verification, behavioral mouse-movement analysis, or device fingerprinting) can block headless browsers. If a competitor's page is blocked, KompWatch will mark the snapshot as failed and alert you — it will not attempt to bypass the protection. See [Anti-Bot Protection and Blocked Pages](./anti-bot-protection-and-blocked-pages.md).

---

## Does KompWatch respect robots.txt?

Yes. KompWatch reads and respects `robots.txt` on every domain it monitors. If a competitor's `robots.txt` disallows crawling a path, KompWatch will not scrape that path. This is both a legal safeguard and a policy commitment.

---

## Should I worry about tipping off a competitor?

No. Competitive intelligence research is standard business practice. Marketing teams, sales reps, and analysts manually visit competitor websites every day — KompWatch automates that process. Your competitors are almost certainly monitoring your public pages too.

The only scenario where a competitor would know you specifically are monitoring them is if you told them. KompWatch doesn't.

---

## What about legal risk — could a competitor send a cease-and-desist?

Monitoring publicly available web pages is legal. KompWatch is designed to stay well within those boundaries: no authentication bypass, no aggressive crawl rates, no proprietary data access. See [Is Competitor Monitoring Legal?](./is-competitor-monitoring-legal.md) for the full legal picture.

---

*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and we'll respond within 24 hours.*
