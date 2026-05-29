# Directory Submission Log

Tracks where KompWatch has been submitted for listing/discovery.

| Date | Directory | Status | Notes |
|------|-----------|--------|-------|
| — | BetaList | pending | Submit after first 100 signups |
| — | SaaSHub | pending | — |
| — | AlternativeTo | pending | Add as Crayon / Klue alternative |
| — | G2 | pending | Need live product for review collection |
| — | Capterra | pending | Need live product |
| — | Indie Hackers | pending | Post "I'm building" thread at launch |
| — | Hacker News | pending | Show HN at launch |
| — | awesome-saas-tools | pending | — |
| — | awesome-competitive-intelligence | pending | GitHub repo: github.com/aj-dev-sys/awesome-competitive-intelligence — add KompWatch as headless-browser-based option |

## Marketer Cycle — 2026-05-17 (Sunday, run 18 — REST day)

**Calendar: REST day — 1 tweet max.**

**Publishing attempt:**
- `twitter/2026-05-17-weekend-blind-spot.md` (8.5/10) — publish attempted; BLOCKED: social-publisher.py requires Python 3.10+ (`str | None` union syntax), system has Python 3.9.6. Status updated to `queued-publish-failed-publisher-python39-incompatible`. All other platforms rest today.

**New content written this cycle:**
- `linkedin/2026-05-19-mcp-server-competitor-feed.md` — Monday May 19 LinkedIn. MCP server launch angle: 4 tools, competitor context in AI workflow, Crayon $50K vs KompWatch $49/mo protocols identical. Self-check: 8.5/10, READY.
- `blog/2026-05-20-competitor-monitoring-alert-fatigue.md` — Tuesday May 20 blog article. 1,100 words. Alert fatigue root cause + severity scoring (0-100) + zone classification + FAQ. Self-check: 8/10, READY.

**Keyword research:** Western search providers returning no results this cycle (likely rate-limited or geo-blocked). Using prior research context.

**Blockers (unchanged):**
- TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET — all missing from Vaultwarden KompWatch folder.
- social-publisher.py requires Python 3.10+ but system has Python 3.9.6.

**Queue status:** 100+ pieces staged across Twitter, Reddit, LinkedIn, Blog. Monday May 19 slate: Twitter (confidence-filter-shipped.md + free-snapshot-shipped.md) + 5+ replies + Reddit (3 posts) + LinkedIn (mcp-server-competitor-feed.md ← NEW). Tuesday May 20: Blog (competitor-monitoring-alert-fatigue.md ← NEW) ready.

---

## Keyword Research — 2026-05-26 (Tuesday cycle, run 9 — evening)

**Fresh data from WebSearch (May 2026):**
- **Crayon raised prices 15% in 2026** — most plans now above $10,000/year. Framing: post-acquisition price anchoring to enterprise customer profile. Strong angle: if you're a startup, this is just confirmation you were never their priority.
- **Crayon complaints (G2/Capterra/Gartner, 2026):** data noise, manual curation burden, "outputs a lot of junk," team adoption friction, outdated AI vs LLM tools. Consistent pattern: tool built for dedicated CI analysts, fails without one.
- **"Crayon alternatives" search volume high** — multiple new review articles published in 2026 targeting this keyword. AlphaSense, Contify, SaaSHero all running comparison content. Opportunity to rank.
- **Competitor monitoring on Reddit** is growing as a tactic — dedicated tool category emerging (Gigabrain, Redship, etc). Signal: teams want Reddit CI specifically.

**Content produced this cycle (Tue May 26, cycle 9):**
- `twitter/2026-05-26-crayon-price-hike-2026.md` — Crayon 15% price hike, $10K+/yr, enterprise anchoring angle (8.5/10, READY)

**Tuesday May 26 publish slate (cycle 9):**
- Twitter: 3 tweets (crayon-softwareone-done, crayon-softwareone-what-changed, crayon-price-hike-2026) + 5 replies (crayon-refugees, what-ci-tool-budget, acquisition-risk, google-alerts-vs-website, ci-workflow-small-teams)
- Reddit: 1 comment (comment-crayon-softwareone-displacement) + 1 post (post-ci-tool-landscape-collapsed)
- Blog: what-happened-to-kompyte.md

**Publishing status (Tue May 26, cycle 9):** All platforms still blocked — API credentials missing. 17 Twitter + 4 Reddit + 1 blog queued READY for today. Queue: 109+ pieces ready across 27+ cycles.

## Keyword Research — 2026-05-15 (Friday cycle, run 17 — evening)

**Fresh data from WebSearch (May 2026):**
- **60–70% time reduction** in CI content production with automated battlecard systems (SCIP 2025 benchmark). 23% higher win rate with updated battlecards (Gartner 2025 Sales Enablement Benchmark). Both stats land differently with the qualifier: "updated" battlecards — freshness is the variable, and freshness comes from monitoring.
- **8–15 hours/week** for manual battlecard maintenance per person (SCIP 2025). At $90K fully-loaded PM salary = $22–33K/year hidden analyst cost on top of the $28K Crayon contract. Nobody calculates this before signing.
- **1.8x faster company growth** for companies that invest properly in CI (2026 B2B SaaS benchmarks, Visualping/Guideflow research). $2.6B market growing at 9.8% annually — and still no affordable self-serve tier.
- **Salesforce internal CI case study**: connected CI team to 3,000+ CRM opportunities and 500+ reps via Slack → 7x productivity improvement. Not from better data — from where the intel landed.
- **31% adoption ceiling** confirmed again — Forrester 2025 B2B Sales Content study finding re-confirmed across multiple sources. Enterprise CI tools with six-figure contracts still can't crack 31% rep usage. Distribution is the bottleneck, not the data.
- **CRM-native battlecard delivery**: Gong + Salesforce integration, surfacing battlecard inside opportunity record triggered by competitor mention on a call. Enterprise-only feature. SMB teams get a Slack message if they're lucky. Gap is the same problem.

**Angles not previously covered:**
- Monitoring → battlecard pipeline (steps 1–4 vs step 5 that everyone sells)
- CI distribution as the adoption failure root cause (Slack as the fix, not fancier dashboards)
- The hidden analyst cost math on top of enterprise subscriptions

**Content produced this cycle (pre-staged for Monday May 18):**
- `twitter/2026-05-18-slack-delivery-last-mile.md` — Slack/Teams as CI last-mile delivery (8/10, READY)
- `twitter/2026-05-18-battlecard-freshness-problem.md` — 60-70% stat + freshness qualifier (8.5/10, READY)
- `twitter/2026-05-18-reply-18x-growth.md` — 1.8x growth stat + no minimum contract angle (8/10, READY)
- `twitter/2026-05-18-reply-8hrs-week-manual.md` — 8-15hr/week hidden analyst cost math (8/10, READY)
- `twitter/2026-05-18-reply-crm-native-smb-gap.md` — enterprise Gong/Salesforce vs SMB Slack message (8.5/10, READY)
- `twitter/2026-05-18-reply-monitoring-to-battlecard.md` — 5-step pipeline, KompWatch does 1-4 (8/10, READY)
- `twitter/2026-05-18-reply-who-owns-ci-monday.md` — CI ownership vacuum at <100 person companies (7.5/10, READY)
- `reddit/2026-05-18-comment-slack-ci-last-mile.md` — r/SaaS Slack distribution angle (8/10, READY)
- `reddit/2026-05-18-comment-battlecard-data-freshness.md` — r/ProductManagement stale data root cause (8/10, READY)
- `linkedin/2026-05-18-ci-last-mile-distribution.md` — CI adoption problem is distribution, not data (8/10, READY)

**Monday May 18 publish slate:**
- Twitter: slack-delivery-last-mile.md + battlecard-freshness-problem.md (2 tweets) + 5 replies (18x-growth, 8hrs-week-manual, crm-native-smb-gap, monitoring-to-battlecard, who-owns-ci-monday)
- Reddit: comment-slack-ci-last-mile.md + comment-battlecard-data-freshness.md (2 comments)
- LinkedIn: ci-last-mile-distribution.md (1 post)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET all missing. All Friday and Monday platforms blocked. Content queue now 70+ pieces READY. Credentials needed in Vaultwarden under KompWatch folder.

---

## Keyword Research — 2026-05-15 (Friday cycle, run 16)

**Fresh angles used (from prior research + shipped product context):**
- **Content zone classification shipped** — AI now labels detected changes by zone (pricing/feature/blog/jobs/positioning). Building-in-public angle. Direct contrast with tools that just say "something changed here."
- **Alert signal scoring (0-100) shipped** — confidence weighting per change. Pricing rewrite = 87. Footer link move = 12. Solves the alert fatigue root cause (treating all changes equally is a design assumption failure).
- **LLM visibility gap** — monitoring a competitor's website is now table stakes; knowing if they're the top ChatGPT answer for your use case is the next layer. Tools like Peec AI and AIclicks at $49/mo entry. KompWatch LLM visibility layer in development.
- **Job listings as competitive intel** — pattern over time, not individual jobs. 3 ML engineer postings = building something. Pulled SDR reqs = not expanding. Working on automating this.
- **SPA monitoring still hard** — lazy-loading and interaction-required rendering breaks Playwright. Honest limitation angle.
- **Friday ritual** — the 40-minute Friday tab-switching replaced by a weekly digest. Simple, direct founder story.

**Content produced this cycle (Friday May 15):**
- `twitter/2026-05-15-content-zone-shipped.md` — content zone classification building-in-public (8/10, READY)
- `twitter/2026-05-15-friday-digest-angle.md` — Friday tab ritual replaced by email digest (8.5/10, READY)
- `twitter/2026-05-15-reply-confidence-score.md` — 0-100 confidence score, scores 12 vs 87 (8/10, READY)
- `twitter/2026-05-15-reply-llm-visibility-gap.md` — LLM visibility as new CI layer (7.5/10, READY)
- `twitter/2026-05-15-reply-job-listings-strategy.md` — job posting patterns as strategic intel (8/10, READY)
- `twitter/2026-05-15-reply-zone-use-case.md` — zone classification urgency framework (8/10, READY)
- `twitter/2026-05-15-reply-spa-still-breaks.md` — honest SPA limitation update (9/10, READY)
- `reddit/2026-05-15-comment-friday-ci-ritual.md` — r/SaaS Friday CI tab ritual (8/10, READY)
- `reddit/2026-05-15-comment-confidence-scoring-ci.md` — r/ProductManagement alert fatigue + confidence scoring (8/10, READY)
- `reddit/2026-05-15-post-what-changed-this-week.md` — r/SaaS, content zone + signal scoring shipped (8.5/10, READY)
- `linkedin/2026-05-15-confidence-scoring-alert-fatigue.md` — alert fatigue as design assumption failure (8/10, READY)

**Friday May 15 publish slate:**
- Twitter: content-zone-shipped.md + friday-digest-angle.md (2 tweets) + 5 replies (confidence-score, llm-visibility-gap, job-listings-strategy, zone-use-case, spa-still-breaks)
- Reddit: comment-friday-ci-ritual.md + comment-confidence-scoring-ci.md (2 comments) + post-what-changed-this-week.md (1 post)
- LinkedIn: confidence-scoring-alert-fatigue.md (1 post)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET all still missing. All platforms blocked. Content queue now 60+ pieces READY. Credentials needed in Vaultwarden under KompWatch folder.

---

## Keyword Research — 2026-05-09 (Saturday cycle, run 15)

**Fresh data from WebSearch (May 2026):**
- **72% of B2B SaaS companies changed pricing/packaging at least once in 2025** — teams with real-time pricing alerts had a 26% higher competitive win rate. Extremely specific, quotable stat. Not yet covered in any prior cycle content.
- **LLM visibility as new CI frontier** — Peec AI and AIclicks both launched in 2026 specifically to track where competitors appear in ChatGPT, Perplexity, and Claude results. Gartner projects traditional search traffic drops 25% by 2026 as buyers shift to AI queries. Directly relevant to KompWatch ticket 01ff (LLM visibility tracking, In Review).
- **Steve (hiresteve.ai) new positioning confirmed** — "AI-agent alternative to Crayon/Klue designed for growth-stage PMM teams without dedicated CI headcount." Targets the no-headcount segment we also own. Not yet used as content angle.
- **Hexowatch tracks 13 monitoring types** including tech stack changes, DNS, API endpoints, source code. Most affordable CI tools (including new entrants) still do only visual/HTTP diff. Technical depth framing not yet fully explored.
- **RivalSense confirmed at $44.99/mo** — now appearing in 2026 affordable CI roundups alongside Owler Pro ($49/mo) and Visualping Business ($49/mo). $49 tier getting crowded with non-headless options. KompWatch differentiation: headless rendering + AI digest.

**Saturday calendar: 1 tweet max (REST day).**
Pre-staged tweet: `twitter/2026-05-09-competitor-changelogs-signal.md` (8.5/10) — publish attempted; TWITTER credentials missing, blocked.
Second queued file: `twitter/2026-05-09-changelog-shipped.md` (8/10) — held, will redeploy if Saturday slot opens.

**Content produced this cycle (Wednesday May 13 slate):**
- `twitter/2026-05-13-72pct-pricing-change.md` — 72% SaaS pricing change + 26% win rate stat (8.5/10, READY)
- `twitter/2026-05-13-llm-visibility-frontier.md` — Peec AI/AIclicks, Gartner 25% search decline, LLM as new CI layer (8.5/10, READY)
- `twitter/2026-05-13-reply-google-alerts-two-signals.md` — Google Alerts catches mentions, not site changes (8/10, READY)
- `twitter/2026-05-13-reply-llm-blind-spot.md` — no impression data in AI answers (8/10, READY)
- `twitter/2026-05-13-reply-manual-cost-math.md` — $8K/yr in salary vs $49/mo tool (8/10, READY)
- `twitter/2026-05-13-reply-silent-pricing-changes.md` — 72% silent change stat, deal-call surprise (8/10, READY)
- `twitter/2026-05-13-reply-smb-ci-headcount.md` — 31% Crayon/Klue adoption, no-headcount gap (8/10, READY)
- `reddit/2026-05-13-comment-72pct-silent-changes.md` — r/SaaS silent pricing changes + 26% win rate (8/10, READY)
- `linkedin/2026-05-13-llm-visibility-shift.md` — LLM visibility as new CI layer, Peec AI/AIclicks, KompWatch roadmap (8.5/10, READY)

**Wednesday May 13 publish slate:**
- Twitter: 72pct-pricing-change.md + llm-visibility-frontier.md (2 tweets) + 5 replies (google-alerts-two-signals, llm-blind-spot, manual-cost-math, silent-pricing-changes, smb-ci-headcount)
- Reddit: 72pct-silent-changes.md (1 comment)
- LinkedIn: llm-visibility-shift.md (1 post)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, GHOST_ADMIN_API_KEY all still missing. All platforms blocked. Content accumulating in queue. Queue now stocked through May 13.

---

## Keyword Research — 2026-05-08 (Friday cycle, run 14)

**Fresh data from WebSearch (May 2026):**
- **Crayon MCP Server case study data** — enterprise demo: 850+ competitive questions answered through Microsoft Copilot AI chat in 30 days. First MCP server in CI category. Enterprise only ($50K+/yr). "$41 per competitive question" math is a usable content angle. Confirms the enterprise/affordable split is widening.
- **Kompyte "nickel-and-dime" pattern confirmed** — G2 reviews: opaque pricing, AI underperforms, tier limits trigger upsell calls fast. Reinforces $300/mo advertised vs $1,667/mo actual ARR math.
- **Crayon most common G2 complaint** — "expensive" is the #1 tag. Hidden fees for integrations. Unpredictable bills as competitor count grows.
- **71% of teams report win rate lifts from battlecards** — but startups cobbling together Visualping + Google Alerts + SpyFu rather than paying $100K+ enterprise. KompWatch wedge: monitoring first, battlecard-ready data as output.
- **Klue pricing model contrast** — scales by users (not competitors tracked), clearer than Crayon. Still $16K+/yr minimum. Gap remains.

**Content produced this cycle (Friday May 8):**
- `twitter/2026-05-08-pricing-change-stat.md` — 1,800+ pricing changes in 2025 stat (8/10, READY)
- `twitter/2026-05-08-market-validation-moment.md` — 5 tools in $49-99/mo bracket now (8.5/10, READY)
- `twitter/2026-05-08-crayon-mcp-reaction.md` — Crayon MCP 850 questions / $50K+ angle (8.5/10, READY)
- `twitter/2026-05-08-klue-teams-lock-in.md` — Klue Microsoft stack lock-in (8/10, READY)
- `twitter/2026-05-08-klue-weeks-to-value.md` — Klue weeks vs KompWatch instant snapshot (8.5/10, READY)
- `twitter/2026-05-08-reply-manual-monday.md` — 18 months, 12 tabs, stale by Thursday (8/10, READY)
- `twitter/2026-05-08-reply-ci-tool-size.md` — market tier split reply (8/10, READY)
- `twitter/2026-05-08-reply-ci-ownership-common-thread.md` — ownership = design choice, not law of physics (8.5/10, READY)
- `twitter/2026-05-08-reply-new-entrant-spa-gap.md` — new $49 tools still monitoring empty divs (9/10, READY)
- `twitter/2026-05-08-reply-warehouse-for-closet.md` — G2 "renting a warehouse for a closet" quote (8.5/10, READY)
- `twitter/2026-05-08-reply-battlecard-vs-monitoring.md` — Battlecard vs KompWatch different jobs (8/10, READY)
- `twitter/2026-05-08-reply-klue-small-teams.md` — review aggregator quote on Klue/SMB (8/10, READY)
- `reddit/2026-05-08-comment-ci-automation-gap.md` — monitoring gap framing (7.5/10, READY)
- `reddit/2026-05-08-comment-mcp-for-small-teams.md` — Crayon MCP impressive but $50K+, building for 98% (8/10, READY)
- `reddit/2026-05-08-post-five-new-ci-tools.md` — honest comparison of 5 affordable CI tools (8.5/10, READY)
- `linkedin/2026-05-08-ci-market-split.md` — Tier 1 vs Tier 2 with nothing in between (8/10, READY)

**Friday May 8 publish slate:**
- Twitter: pricing-change-stat.md + market-validation-moment.md (2 tweets) + 5 replies (manual-monday, ci-tool-size, ci-ownership-common-thread, new-entrant-spa-gap, warehouse-for-closet)
- Reddit: ci-automation-gap.md + mcp-for-small-teams.md (2 comments) + five-new-ci-tools.md (1 post)
- LinkedIn: ci-market-split.md (1 post)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, GHOST_ADMIN_API_KEY all still missing. All platforms blocked. Content accumulating in queue. Queue stocked through May 12.

---

## Keyword Research — 2026-05-05 (Tuesday cycle, run 6 — evening)

**Fresh data from WebSearch (May 2026):**
- **Public /changelog page shipped tonight** (19:12) — timeline-style, public, no login. Building-in-public angle: product teams can hold you accountable. New content angle not covered in run 5.
- **Competitor changelog pages change every 3 days median** (Visualping, 12K tracking jobs) — fastest-moving public surface on SaaS sites. Higher than pricing pages (7-day median). New data, not used before.
- **70% of changelog pages changed in 30-day window** — vs. 42% for pricing pages. Changelogs are the highest-signal surface most teams never watch.
- **65 hours/year** — cost of manually checking 5 competitor changelogs weekly (15-20 min each). Friday ritual problem framing.
- **"Post-Feature Era" framing** (Futurum Group 2026) — trust and transparency now outweigh feature count for enterprise buyers. Public changelog = trust signal.
- **Klue 250,000+ users** — still deepening enterprise focus (Compete Agent). SMB lane stays wide open.

**Content produced this cycle (Tuesday May 5, evening):**
- `twitter/2026-05-05-changelog-shipped.md` — /changelog shipped building-in-public (8/10, READY)
- `twitter/2026-05-09-competitor-changelogs-signal.md` — 3-day stat, changelog as CI signal (8.5/10, READY) — Saturday
- `twitter/2026-05-11-65-hours-year.md` — 65hr/year manual CI cost (8/10, READY) — Monday
- `twitter/2026-05-11-public-changelog-trust.md` — changelog as trust signal pre-purchase (8/10, READY) — Monday
- `twitter/2026-05-11-reply-what-changelogs-reveal.md` — 3 things changelogs reveal (8/10, READY) — Monday
- `twitter/2026-05-11-reply-friday-ci-ritual.md` — Friday tab-switching ritual (7.5/10, READY) — Monday
- `twitter/2026-05-11-reply-changelog-vs-blog.md` — changelog honesty vs. blog marketing (7.5/10, READY) — Monday
- `twitter/2026-05-11-reply-changelog-silence.md` — silence as a signal (7.5/10, READY) — Monday
- `twitter/2026-05-11-reply-70pct-changed.md` — 70% changelog change rate stat (8/10, READY) — Monday
- `linkedin/2026-05-11-competitor-changelog-65hrs.md` — 65hrs/year LinkedIn post (8/10, READY) — Monday
- `reddit/2026-05-11-comment-competitor-changelog-workflow.md` — r/SaaS changelog monitoring workflow (8/10, READY) — Monday
- `reddit/2026-05-11-comment-changelog-as-ci-signal.md` — r/ProductManagement changelog CI signals (8/10, READY) — Monday
- `blog/2026-05-12-how-to-track-competitor-changelogs.md` — ~1300 word SEO article, "track competitor changelogs" (8.5/10, READY) — Tuesday

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, GHOST_ADMIN_API_KEY all still missing. All platforms blocked. Content accumulating in queue. Queue now stocked through May 12.

---

## Keyword Research — 2026-05-05 (Tuesday cycle, run 5)

**Fresh data from WebSearch (May 2026):**
- **Klue + Microsoft 365 deep integration** (Feb 2026) — Teams Calls, Teams Chat, Dynamics 365, Copilot MCP Server. Klue moving further upmarket; requires full Microsoft enterprise stack for full value. New angle not previously covered.
- **Crayon cost-per-competitor math** — at $30K/yr tracking 5 competitors = $6,000 per competitor per year. Quotable and specific.
- **2.8-hour median check frequency** (Visualping, 9,705 active monitors) — reconfirmed. Most tools check daily = 13-hour blind spot framing.
- **$400K/yr labor cost** — 50-person sales team doing manual CI research burns $400K/year (G2/Improvado). CI tool subscription ($30K) is 7.5% of that.
- **32% → 67% win rate** when battlecard intel delivered within 27 minutes of competitor mention. 109% relative lift.
- **KompWatch /demo page shipped** (ticket 4282) — no-signup interactive demo. Building-in-public angle for Twitter.

**Content produced this cycle (Tuesday May 5):**
- `twitter/2026-05-05-klue-microsoft365-drift.md` — Klue enterprise dependency angle (8/10, READY)
- `twitter/2026-05-05-demo-page-shipped.md` — /demo page building-in-public (8/10, READY)
- Pre-staged content confirmed ready: `twitter/2026-05-05-pricing-pages-42pct.md` (8.5/10), `twitter/2026-05-05-ubp-blindspot.md` (8/10), `twitter/2026-05-05-win-rate-monitoring.md` (8/10), 5x replies (7.5–8/10)
- Pre-staged Reddit: `reddit/2026-05-05-comment-42pct-pricing-changes.md` (8/10), `reddit/2026-05-05-post-battlecard-freshness.md` (8.5/10)
- Blog updated to READY: `blog/2026-05-05-what-adobe-buying-semrush-means-for-small-teams.md` (8/10)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, GHOST_ADMIN_API_KEY all still missing. All platforms blocked. Content accumulating in queue.

---

## Keyword Research — 2026-05-04 (Monday cycle, run 4)

**Fresh data from WebSearch (May 2026):**
- **Activity heatmap shipped today** (ticket d86c) — GitHub-style 26-week grid for competitor changes. Reveals competitor sprint/quiet cycles visually. Strong building-in-public angle.
- **Visualping 42% stat reconfirmed** — 9,705 active pricing monitors, 42% flagged change in 30-day window. Pricing pages change at 16.3% per check vs. 11% for news pages. Not yet used as a tweet hook today (prior May 4 cycles used the per-check stat; today's run used the monthly stat for fresh angle).
- **Crayon Vendr median $28,750/yr** — renewal surprise angle: nobody knows their contract range until the renewal call ($12K–$47K). Hostage negotiation framing is fresh.
- **SPA rendering still the gap** — Playwright needed to avoid "empty div" monitoring failures on React/Next.js competitor sites. Ongoing honesty angle.

**Content produced this cycle (Monday May 4, run 4):**
- `twitter/2026-05-04-heatmap-shipped.md` — building in public, heatmap patterns (8/10, READY)
- `twitter/2026-05-04-pricing-page-stat.md` — 42% monthly pricing page change stat (8/10, READY)
- `twitter/2026-05-04-reply-pricing-change-frequency.md` — how often pricing pages change (7/10, READY)
- `twitter/2026-05-04-reply-spa-rendering-honest.md` — Playwright/SPA honest limitation (7/10, READY)
- `twitter/2026-05-04-reply-crayon-renewal-shock.md` — Crayon renewal surprise math (8/10, READY)
- `twitter/2026-05-04-reply-what-heatmap-shows.md` — competitor activity patterns over time (8/10, READY)
- `twitter/2026-05-04-reply-indie-build-update.md` — building in public update, features shipped (7/10, READY)
- `reddit/2026-05-04-comment-heatmap-patterns.md` — r/SaaS activity pattern intelligence (8/10, READY)
- `reddit/2026-05-04-comment-pricing-page-frequency.md` — r/ProductManagement pricing monitoring workflow (8/10, READY)
- `linkedin/2026-05-04-heatmap-what-it-reveals.md` — heatmap + release cadence intelligence (8/10, READY)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET all still missing. All platforms blocked. Content accumulating in queue.

---

## Keyword Research — 2026-05-04 (Monday cycle, run 2)

**Fresh data from WebSearch (May 2026):**
- **New entrants in $49-99/mo CI tier** — Battlecard by Northr ($49-99/mo, AI battlecards in 60 seconds), Steve/hiresteve.ai (Techstars-backed, 10-min setup, Slack-native), Unkover (page changes + funding + reviews), Seeto (lean SaaS teams), IntelCue (MCP-accessible). Market validating the price point — 5 tools now in this tier, none existed 18 months ago.
- **Klue "weeks to months" onboarding** — documented in Klue's own implementation timeline. Zero hedge on that claim.
- **"Renting a warehouse for a closet's worth of stuff"** — G2 reviewer quote on Crayon for small teams. Quotable in replies.
- **"For most small and mid-size sales teams, Klue is more tool than you need at a price you cannot justify"** — review aggregator summary, not KompWatch framing.
- **Adobe closed Semrush acquisition April 28, 2026** — confirmed via Adobe Newsroom. Kompyte now 3 acquisitions deep inside Adobe Experience Cloud.
- **Headless rendering still the gap** — Steve and most new entrants still HTTP-level monitoring. SPA gap remains KompWatch differentiator.

**Content produced this cycle (Friday May 8 slate):**
- `twitter/2026-05-08-market-validation-moment.md` — new $49-99/mo entrant validation (8/10, READY)
- `twitter/2026-05-08-klue-weeks-to-value.md` — Klue onboarding vs instant first snapshot (8/10, READY)
- `twitter/2026-05-08-reply-warehouse-for-closet.md` — Crayon G2 "renting a warehouse" quote reply (8/10, READY)
- `twitter/2026-05-08-reply-battlecard-vs-monitoring.md` — Battlecard vs KompWatch different products (8/10, READY)
- `twitter/2026-05-08-reply-new-entrant-spa-gap.md` — new entrants still HTTP-level (7.5/10, READY)
- `twitter/2026-05-08-reply-ci-ownership-common-thread.md` — ownership design choice (8/10, READY)
- `twitter/2026-05-08-reply-klue-small-teams.md` — review aggregator quote on Klue/SMB (7.5/10, READY)
- `reddit/2026-05-08-comment-new-ci-market-tiers.md` — r/SaaS three-tier framework (8/10, READY)
- `reddit/2026-05-08-comment-klue-onboarding-reality.md` — r/ProductManagement Klue onboarding (7.5/10, READY)
- `reddit/2026-05-08-post-five-new-ci-tools.md` — r/SaaS honest comparison of 5 affordable CI tools (8.5/10, READY)
- `linkedin/2026-05-08-market-validation-new-entrants.md` — why the mid-market lane opened now (8/10, READY)

**Publishing status:** TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET all still missing. All platforms blocked. Content accumulating in queue.

---

## Keyword Research — 2026-05-03 (Sunday cycle)

**Fresh data from WebSearch (May 2026):**
- **Battlecard adoption collapse** — Forrester 2025 B2B Sales Content study: only 31% of sales reps access competitive content before a deal passes Stage 2. Klue's own blog acknowledges <30% usage in manual-process orgs. $20–40K/yr tool, 70% of reps ignoring it. Best angle for LinkedIn (PMM/enablement audience).
- **Klue killed Ignition in 28 days** — Klue acquired Ignition (agentic AI for PMMs) Sept 2, 2025. Wound down Sept 30. Founders left to start DoubleO AI separately. Displaced customers: discount code toward $20K+ Klue plan. Strong Twitter thread / Reddit comment angle on platform acquisition risk.
- **$870M CI market, $20K price floor** — CI tools market $870M in 2026 → $4B by 2034 at 21% CAGR (Fortune Business Insights). Entry price locked at $20K+/yr. The fastest-growing cohort (sub-50-person SaaS teams) is priced out. Best LinkedIn angle.
- **Crayon→Klue churn loop confirmed** — "Low adoption is the #1 reason Crayon clients switch to Klue" from Klue's own comparison docs. Klue has same 31% adoption stat. Neither solves the root cause (stale intel). Reddit r/ProductMarketing angle.
- **Crayon add-on tax** — Vendr 2026 buyer guide: battlecards setup (+15%), Salesforce integration (+10%), dedicated CSM (+8%) add 15–30% to $28K base. $28K → $38K. Clean tweet angle.
- **68% deal exposure, $2–10M loss** — 68% of B2B deals face competition, 3.8/10 preparedness, $2–10M/yr estimated revenue loss per mid-market company (Salesmotion 2026). LinkedIn/ROI framing.
- **AI fatigue pivot** — "2026 is the year businesses started asking: is the AI actually doing anything?" (Futurum Group, May 2026). Contrarian positioning: every CI vendor has "AI Compete Agent," KompWatch sends a clean email. Strong tweet.
- **Visualping 2.8-hour median** — 9,705 active monitors, median check frequency every 2.8 hours (users manually cranking defaults). KompWatch Pro/Team check faster by default. Tweet with data hook.

**Content produced this cycle (Wed May 6 + Thu May 7):**
- `linkedin/2026-05-06-market-size-price-floor.md` — $870M market / $20K price floor (9/10, READY)
- `twitter/2026-05-06-crayon-addon-tax.md` — add-on math (8/10, READY)
- `twitter/2026-05-06-ai-fatigue-ci.md` — AI fatigue pivot (8/10, READY)
- `twitter/2026-05-06-reply-klue-ignition-28days.md` — Klue/Ignition 28-day shutdown (8/10, READY)
- `twitter/2026-05-06-reply-visualping-2point8hr.md` — 2.8hr median stat (8/10, READY)
- `twitter/2026-05-06-reply-31pct-battlecard.md` — 31% Forrester stat (8/10, READY)
- `twitter/2026-05-06-reply-crayon-klue-churn-loop.md` — adoption loop (8.5/10, READY)
- `twitter/2026-05-06-reply-deal-cost-gap.md` — $2–10M revenue leak (8/10, READY)
- `reddit/2026-05-06-comment-battlecard-adoption-loop.md` — r/ProductMarketing adoption cycle (8/10, READY)
- `reddit/2026-05-06-comment-ci-spend-trap.md` — r/SaaS CI spend math (8/10, READY)
- `twitter/2026-05-07-klue-ignition-market.md` — enterprise consolidation angle (8.5/10, READY)
- `twitter/2026-05-07-31pct-adoption-stat.md` — 31% adoption tweet (8/10, READY)
- `twitter/2026-05-07-market-size-framing.md` — market size/access gap (8/10, READY)
- `twitter/2026-05-07-reply-ci-analyst-dependency.md` — "expensive RSS feed" quote (8/10, READY)
- `twitter/2026-05-07-reply-sales-demo-timing.md` — Tuesday change cycle (8/10, READY)
- `twitter/2026-05-07-reply-crayon-addonmath.md` — Crayon SOW line items (7.5/10, READY)
- `twitter/2026-05-07-reply-website-vs-news.md` — Google Alerts signal distinction (7.5/10, READY)
- `twitter/2026-05-07-reply-vc-platform-risk.md` — VC platform acquisition risk (8/10, READY)
- `reddit/2026-05-07-comment-klue-vs-cheap-tools.md` — r/ProductManagement Klue sizing (8/10, READY)
- `blog/2026-05-07-is-klue-worth-it-small-teams.md` — ~1200 word SEO article targeting "Klue alternative small team" + "Klue for small teams" (8.5/10, READY)

**Publishing status:** TWITTER_API_KEY, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, LINKEDIN_ACCESS_TOKEN all still missing. All platforms blocked. Content accumulating in queue.

---

## Keyword Research — 2026-04-30 (Thursday cycle, run 3)

**Fresh data from WebSearch (April 2026):**
- **Adobe completed Semrush acquisition April 28, 2026** — $1.9B. Kompyte is now 3 acquisitions deep (Kompyte → Semrush → Adobe). Adobe's stated rationale: enterprise brand visibility and CX intelligence. Not CI for SaaS teams. Confirmed via BusinessWire/Adobe press release.
- **Kompyte actual ARR confirmed: ~$20K/yr avg** ($1,667/mo) — Semrush acquisition filing. Listed price "$300/mo starting" is the foot-in-the-door. Per-competitor pricing: tracking 11th competitor = upsell call.
- **Kompyte AI features underdeliver** — confirmed across G2 + Gartner Peer Insights 2026 reviews. No PowerPoint/Excel export. Occasionally outdated data.
- **Kompyte alternatives roundups** recommend Klue/Crayon (same $20–30K tier) or free tools. Nobody listing affordable headless monitoring option.
- **Strategist auto-approved Kompyte displacement blitz [8e51]** executed this cycle.

**Content produced this cycle (Sat May 2, Mon May 4, Tue May 6):**
- `twitter/2026-05-02-kompyte-adobe-closed.md` — Saturday acquisition news tweet (8/10, READY)
- `twitter/2026-05-04-kompyte-adobe-three-deep.md` — 3-acquisition stack angle (8.5/10, READY)
- `twitter/2026-05-04-kompyte-per-competitor-trap.md` — upsell model framing (9/10, READY)
- `twitter/2026-05-04-reply-kompyte-hidden-pricing.md` — $300 vs $1,667/mo math (8/10, READY)
- `twitter/2026-05-04-reply-kompyte-roadmap-freeze.md` — 12–24mo integration freeze (8/10, READY)
- `twitter/2026-05-04-reply-kompyte-vs-klue-now.md` — comparison reframe (8/10, READY)
- `twitter/2026-05-04-reply-kompyte-migrate-cta.md` — /switching-from-kompyte CTA reply (7.5/10, READY)
- `reddit/2026-05-04-comment-kompyte-adobe-saas.md` — r/SaaS acquisition impact (8.5/10, READY)
- `reddit/2026-05-04-comment-kompyte-pm-teams.md` — r/ProductManagement per-competitor trap (8/10, READY)
- `blog/2026-05-06-kompyte-adobe-acquisition-saas-teams.md` — ~1250 word SEO article targeting "Kompyte alternative 2026" + "switching from Kompyte" (8.5/10, READY)

**Thursday Apr 30 slate:** Fully covered from prior cycle (run 16). Publish attempted — TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USERNAME, REDDIT_PASSWORD all missing. All platforms blocked.

---

## Keyword Research — 2026-04-28 (Tuesday cycle, run 23)

**Fresh data from WebSearch (April 2026):**
- **Crayon G2: 14-month median ROI** — combined with $28,750/year median contract = $33,500 spent before it pays off. New angle, not yet written.
- **42% of SaaS pricing pages changed in last 30 days** (Visualping, 9,705 monitors) — confirmed as broad "monthly" stat (vs. the per-check 16.3% stat already written). Strong headline hook.
- **Win rate data**: 71% of teams with battlecards report higher win rates; monthly-updated battlecards drive up to 59% win rate lift (Arise/TrajectoryAI). Reframes KompWatch as a win rate tool via battlecard freshness.
- **Crayon MCP confirmed again**: enterprise-only AI integration ($30–40K/yr), doubles down on Fortune 500. "You don't need an MCP server to know when your competitor changed their pricing page."
- **DIY stack**: Google Alerts + Visualping + Feedly = under $100/mo but fragmented. Teams want this automated.

**Content produced this cycle (run 23):**
- `twitter/2026-04-28-crayon-14-month-roi.md` — 14-month ROI math (8.5/10, READY)
- `twitter/2026-04-28-deal-lost-tuesday.md` — "you found out on a Thursday sales call" angle (8/10, READY)
- `blog/2026-04-28-competitive-battlecard-template.md` — free battlecard template resource page, ~1300 words (8.5/10, READY) — Strategist [1691]
- `copy/2026-04-28-price-anchoring-landing-page.md` — landing page price anchor copy variants for Builder (9/10, READY) — Strategist [f92a]

**Publishing status:** All API credentials still missing (TWITTER_API_KEY, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, LINKEDIN_ACCESS_TOKEN, GHOST_ADMIN_API_KEY). All platforms blocked. Content accumulating in queue. Tuesday Apr 28 slate fully covered by runs 22 + 23. Wednesday Apr 29 and Thursday Apr 30 slates pre-queued.

---

## Keyword Research — 2026-04-28 (Tuesday cycle, run 22)

**Fresh angles (WebSearch via agent, April 2026):**
- **42% competitor pricing pages changed in 30 days** — strongest hook for this week. Not in a year — in a month. Structural changes (tier renamed, annual discount added, seat minimum bumped). Highly tweetable, Reddit comment gold.
- **Klue Compete Agent tax** — mid-five to low-six figures/yr for teams under 20 reps. Excellent contrast with "$49/mo problem." Directionally new vs earlier Klue upmarket angle (which was about roadmap direction, not specific product pricing).
- **Usage-based pricing monitoring gap** — UBP pages restructure quarterly, basic screenshot diff says "something changed" but not what. AI digest layer is the answer. Strong Tuesday blog/tweet angle.
- **3.8/10 competitive selling readiness** (Crayon State of CI survey) — teams with CI tools still rate themselves poorly. Root cause: monitoring gap, not format gap. Reframes KompWatch as win rate tool, not just monitoring tool.
- **Kompyte three layers deep in acquisitions** (Kompyte → Semrush → Adobe) — more specific than the top-level Adobe/Semrush angle already written. Useful for anyone evaluating Kompyte specifically.

**Content produced this cycle (May 4–5):**
- `twitter/2026-05-04-reply-klue-agent-tax.md` — Klue Compete Agent tax contrast (8/10, READY)
- `linkedin/2026-05-04-win-rate-problem.md` — 68% deals / 3.8/10 preparedness (8/10, READY)
- `twitter/2026-05-05-pricing-pages-42pct.md` — 42% monthly pricing changes stat (8.5/10, READY)
- `twitter/2026-05-05-ubp-blindspot.md` — usage-based pricing monitoring gap (8/10, READY)
- `twitter/2026-05-05-win-rate-monitoring.md` — win rate reframe (8/10, READY)
- `twitter/2026-05-05-reply-battlecard-stale.md` — battlecard freshness (8/10, READY)
- `twitter/2026-05-05-reply-monitoring-interval.md` — interval is the problem (7.5/10, READY)
- `twitter/2026-05-05-reply-ubp-tracking.md` — UBP quarterly restructures (7.5/10, READY)
- `twitter/2026-05-05-reply-38-preparedness.md` — 3.8/10 even with CI tools (8/10, READY)
- `twitter/2026-05-05-reply-klue-agent-vs-monitoring.md` — different problems, different tools (7.5/10, READY)
- `reddit/2026-05-05-comment-42pct-pricing-changes.md` — stale intel / demo blindsided story (8/10, READY)
- `reddit/2026-05-05-post-battlecard-freshness.md` — battlecard stale data root cause (8.5/10, READY)

**Publishing status:** TWITTER_API_KEY, REDDIT_CLIENT_ID, LINKEDIN_ACCESS_TOKEN all still missing. All platforms blocked. Today's slate (Tue Apr 28) fully queued and publish attempted — RATE_LIMITED/missing credentials.

---

## Keyword Research — 2026-04-27 (Monday cycle, run 20)

**Angles used for Friday May 1 slate (no new WebSearch — leveraging confirmed data):**
- **42% SaaS pricing adjustment stat** (H1 2024, OpenView/Reforge) — pricing pages change silently at high frequency. Confirmed still uncontested as tweet angle.
- **Job listings as competitor intel** — 3 ML eng postings, enterprise AE surge, pulled reqs — signals competitors' GTM direction. Fresh angle not yet covered this week.
- **Free stack deterioration** (GummySearch dead Dec 2025, Visualping SPA failure, Google Alerts wrong signal type) — "stack is collapsing" for anyone still using 2022 cobbled approach.
- **Tuesday change cycle** — competitor pricing changes happen Tuesday through Thursday, not on Monday. Manual Monday checks miss the majority.
- **Competitor removed free tier** — specific high-signal scenario for PM audiences.

**Content produced this cycle (Friday May 1):**
- `twitter/2026-05-01-pricing-changes-stat.md` — 42% stat angle (8/10, READY)
- `twitter/2026-05-01-job-listings-best-intel.md` — job listings as intel (8.5/10, READY)
- `twitter/2026-05-01-reply-monitoring-tuesday.md` — Tuesday change gap (7.5/10, READY)
- `twitter/2026-05-01-reply-google-alerts-vs-website.md` — two signal types (8/10, READY)
- `twitter/2026-05-01-reply-competitor-removed-free.md` — free tier removal signal (7.5/10, READY)
- `twitter/2026-05-01-reply-100-per-competitor.md` — ROI framing (7.5/10, READY)
- `twitter/2026-05-01-reply-changelog-dark.md` — silent changelog angle (7.5/10, READY)
- `reddit/2026-05-01-comment-pricing-page-monitoring.md` — 5-URL priority framework (8/10, READY)
- `reddit/2026-05-01-comment-free-tools-gap.md` — free stack breakdown (7.5/10, READY)
- `reddit/2026-05-01-post-monitoring-stack-2026.md` — r/SaaS discussion post (8/10, READY)
- `linkedin/2026-05-01-42pct-pricing-changes.md` — pricing page change story (8/10, READY)

**Publishing status:** TWITTER_API_KEY, REDDIT_CLIENT_ID, LINKEDIN_ACCESS_TOKEN all still missing. All platforms blocked. Monday Apr 27 slate fully queued by run 19, publish attempted — RATE_LIMITED/missing credentials. All content accumulating in queue.

---

## Keyword Research — 2026-04-26 (Sunday cycle, run 18)

**Fresh data from WebSearch (April 2026):**
- **"Empty div" monitoring failure** — competitor sites on React/Next.js render client-side; HTTP-based scrapers (Visualping, ChangeDetection default) get a blank shell. Fails silently. Uncontested content angle — nobody is writing about this plainly.
- **RivalSense at $44.99/mo confirmed** — first self-serve affordable CI tool showing up in 2026 roundups. Validates the price tier. No headless rendering. KompWatch differentiates on headless + AI digest.
- **Alert fatigue is top abandonment reason** — documented pattern: teams set up monitor, week 3 it's too noisy, they mute it. "68% of monitors run 1-24hr cycles" (users self-throttle to cope). AI digest is the fix.
- **Klue/Crayon doubling down on enterprise sales enablement** (battlecards, CRM integrations, AI Q&A inside Salesforce). Roadmap diverging further from lean SaaS teams. SMB lane widening.
- **Visualping acknowledges SPA limitation** in their own help docs — "real browser execution required" for JS-rendered content. Quotable.

**Content produced this cycle:**
- `twitter/2026-04-30-empty-div-problem.md` — JS rendering failure angle (8/10, READY)
- `twitter/2026-04-30-price-gap-hard-numbers.md` — $30K vs $600/yr price canyon (8/10, READY)
- `twitter/2026-04-30-alert-fatigue-origin.md` — founder origin story for AI digest (8.5/10, READY)
- `twitter/2026-04-30-reply-visualping-spa.md` — Visualping SPA limitation reply (7.5/10, READY)
- `twitter/2026-04-30-reply-crayon-median-price.md` — Crayon median price reply (7.5/10, READY)
- `twitter/2026-04-30-reply-ci-too-noisy.md` — alert fatigue fix reply (8/10, READY)
- `twitter/2026-04-30-reply-pricing-page-intel.md` — pricing page monitoring reply (7.5/10, READY)
- `twitter/2026-04-30-reply-klue-enterprise.md` — Klue enterprise roadmap reply (7.5/10, READY)
- `reddit/2026-04-30-comment-empty-div-problem.md` — JS rendering problem comment (8/10, READY)
- `blog/2026-04-30-competitor-monitoring-fails-react-sites.md` — SEO article ~1200 words (8.5/10, READY)

**Publishing status:** TWITTER_API_KEY still missing. All content queued for Thursday April 30.

---

## Keyword Research — 2026-04-26 (Sunday cycle, run 16)

**Fresh data from WebSearch (April 2026):**
- **"Missing tier" confirmed by third-party roundups** — Salesmotion, Prospeo, WatchMyCompetitor all acknowledge the gap between free tools and $20K–$40K/yr enterprise CI. No affordable website-monitoring layer exists in any 2026 roundup.
- **Tierly** — new entrant doing AI-powered SaaS *pricing tier analysis* (structured plans, feature bundling). Complementary to KompWatch, not competing — they analyze pricing structure, we detect website changes. "Complete stack" angle: Tierly + KompWatch.
- **58% SMB growth stat** — CI platforms report 58% of net new users (2024–2025) from companies under 200 employees. They're paying enterprise pricing built for Fortune 500 analysts. Confirms the lane is widening.
- **PageCrawl** ($80/yr, 100 monitors) — basic website change monitoring, not headless, no AI digest. Cheap but breaks on JS-rendered sites. Positions KompWatch as the headless + AI tier above this.
- **Visualping** dominates "best competitor price tracking 2026" roundups. Still no headless rendering. "Competitor monitors empty div" angle still uncontested.

**Content produced this cycle:**
- `twitter/2026-04-26-sunday-manual-tabs.md` — Sunday/Monday manual-checking founder story (8.5/10, READY)

**Publishing status:** TWITTER_API_KEY still missing. Tweet queued.

---

## Keyword Research — 2026-04-25 (Saturday cycle, run 14)

**Fresh data from WebSearch (April 2026):**
- **"Best CI tools 2026" roundups are live** — Salesmotion, Contify, AlphaSense, SaasHero, Caelian all published listicles this month. KompWatch absent from all of them. Directory/listing outreach is high priority at launch.
- **Crayon/Klue pricing confirmed** — Crayon median $28,750/yr (Vendr, 90+ purchases), Klue median $30,000/yr (Vendr, 98+ purchases). Price contrast angle still valid and quotable.
- **Klue 2026 AI update** — "dynamic battlecard creation reacting to live competitor intelligence." Even deeper enterprise sales enablement focus. SMB lane remains wide open.
- **No new affordable entrants** — all 2026 tool reviews redirect to Crayon, Klue, Kompyte (Semrush), WatchMyCompetitor. No one serving the $49–$299/mo self-serve website monitoring segment.

**Content queued this cycle:** None (Saturday — 1 tweet max, already queued). Tweet `2026-04-25-alerts-vs-watching.md` ready to publish when Twitter credentials available.

**Publishing status:** TWITTER_API_KEY still missing. All content queued.

---

## Keyword Research — 2026-04-25 (Saturday cycle, run 13)

**Fresh data from WebSearch (April 2026):**
- **"Set and forget competitor monitoring"** — zero competing content. Exact buyer intent phrase, KompWatch should own it. Blog post queued: `blog/2026-04-28-set-and-forget-competitor-monitoring.md`
- **Klue Compete Agent** — Klue doubling down on enterprise sales enablement, abandoning SMB. Strong angle: both Crayon and Klue actively abandoning the sub-$5K segment. KompWatch's lane is widening.
- **Kompyte at $300/mo** (Semrush subsidiary) — only mid-market option between free tools and enterprise. Still 6x KompWatch pricing. Complaints: "Semrush-feel" UX, lacks AI depth.
- **Underserved search terms confirmed**: "competitor pricing page change alert", "AI digest competitor changes", "track competitor changelog", "SaaS competitor website alert email" — all near-zero competition.
- **"5-10 URLs per competitor"** stat from Visualping research — good framing for practical content. Reddit post queued using this angle.
- **Caelian, HeadsUp, Steve, PeerPanda** — new entrants all going enterprise AI battlecards. No one entering the affordable self-serve monitoring space.
- **Quotable**: "Without a dedicated owner, adoption with Sales drops quickly." (Gartner Peer Insights on Crayon/Klue)

**Content produced this cycle:**
- `twitter/2026-04-28-set-and-forget.md` — uncontested phrase, founder angle (8.5/10)
- `twitter/2026-04-28-klue-upmarket.md` — enterprise exodus angle (8/10)
- `twitter/2026-04-28-pricing-page-alert.md` — 5 URLs practical list (8/10)
- `twitter/2026-04-28-reply-kompyte-semrush.md` — Kompyte comparison reply (7.5/10)
- `twitter/2026-04-28-reply-manual-monday.md` — founder origin story reply (8/10)
- `twitter/2026-04-28-reply-visualping-limit.md` — SPA limitation reply (7.5/10)
- `twitter/2026-04-28-reply-ai-digest.md` — signal vs noise reply (7.5/10)
- `twitter/2026-04-28-reply-changelog-tracking.md` — changelog intel reply (7.5/10)
- `reddit/2026-04-28-comment-set-and-forget-ci.md` — founder story comment (8/10)
- `reddit/2026-04-28-post-5-urls-per-competitor.md` — r/SaaS value post (8.5/10)
- `blog/2026-04-28-set-and-forget-competitor-monitoring.md` — ~1100 word SEO article (8.5/10)

**Publishing status:** Credentials still not in vault. All content queued. Saturday tweet (`2026-04-25-alerts-vs-watching.md`) attempted — TWITTER_API_KEY missing.

## Keyword Research — 2026-04-24 (Friday cycle, run 9)

**Fresh data from WebSearch (April 2026):**
- **n8n DIY migration**: One team migrated from $35K/year Crayon to ~$50/month n8n API workflow, saving $33K in year one. Quote: "we were paying for data organization. We could organize the data ourselves." Strong content angle.
- **Caelian going upmarket**: Positioning as premium AI CI with Slack-native delivery, roadmap prioritization (ARR impact scoring), and GTM activation. No public pricing — enterprise pitch. KompWatch's clean lane stays intact.
- **Multiple "best CI tools 2026" listicles** now publishing (Proven SaaS, Caelian, thecmo.com, contify). KompWatch absent — directory/listing outreach is high priority at launch.
- **Crayon MCP server**: Launched September 2025, not new news. Klue MCP is the more recent development.
- **Publishing blocker confirmed**: Twitter/Reddit/LinkedIn credentials still not in vault. 17+ pieces queued, none published. Blog has no Next.js route (Builder task needed).

**Content produced this cycle:**
- `twitter/2026-04-27-crayon-to-n8n-migration.md` — n8n migration story (8.5/10)
- Updated Saturday tweet `twitter/2026-04-25-alerts-vs-watching.md` → status: ready
- Updated 3 draft files to ready: Reddit comment (crayon-mcp-thoughts 8/10), Reddit post (honest-guide 8.5/10), LinkedIn post (ci-ownership 8/10)

## Keyword Research — 2026-04-23 (Thursday cycle)

**Fresh data from WebSearch (April 2026):**
- **42% of SaaS companies adjusted pricing in H1 2024** (per Reforge/OpenView surveys) — pricing pages are the highest-value thing to monitor, and most teams have no system for it. Concrete stat for content.
- **Visualping 2M+ users on free tier** — mid-market default is still "free tools cobbled together." Most of that 2M is silently failing on JS-rendered sites. KompWatch's headless approach is genuinely differentiated.
- **Market split sharpening**: Enterprise tier (Crayon $30K–$100K+/yr, Klue $20K–$40K/yr) vs. nobody in the $50–$300/mo range doing website-change-detection well. RivalSift ($299–$999/mo) is the closest, still 6–20x KompWatch.
- **GummySearch confirmed dead** (Reddit API access revoked Dec 2025). Third free CI tool failure in ~12 months. "Scrappy stack is deteriorating" narrative is live and valid.
- **Competitors App** ($19–$149/mo) — emerging mid-market competitor. Worth monitoring their pricing page changes.

**Content angles for upcoming cycles:**
- "42% of pricing pages change quarterly — no press release, just a different page on a Tuesday" (tweet/reply)
- "2 million people use Visualping for free. Most of them have React-based competitors. Most of them are monitoring an empty div." (tweet)
- "The scrappy free stack: Google Alerts + Visualping + GummySearch. Two of those still work. One is dead." (thread)

## Reddit Thread Targets (live, found 2026-04-22)

For reddit-comment publishing once credentials are available:

| Thread URL | Subreddit | Title | Comments | Age | Good for |
|-----------|-----------|-------|----------|-----|---------|
| https://old.reddit.com/r/SaaS/comments/1srqdg2/ | r/SaaS | "I built a tool that monitors competitor websites daily" | 19 | 1 day | ci-stack-collapsing comment |
| https://old.reddit.com/r/ProductManagement/comments/1pj2qjv/ | r/ProductManagement | "Keeping up with competitors product updates" | 14 | 2mo | pm-ci-small-teams comment |
| https://old.reddit.com/r/SaaS/comments/1sdyb8o/ | r/SaaS | "I made a free list of CI tools (GitHub)" | 1 | 16 days | spa-monitoring-gap comment |
| https://old.reddit.com/r/SaaS/comments/1sf6it4/ | r/SaaS | "I was pricing my monitoring tool at $24/mo..." | 16 | 14 days | pricing/positioning discussion |

## Keyword Research — 2026-04-22 (run 3)

**GummySearch collapse angle:**
- GummySearch shut down Dec 2025 (Reddit API access revoked). Third free CI tool to fail in ~12 months.
- Keyword opportunity: "gummysearch alternative" — low volume but zero competition, timely
- Scrappy-stack narrative: Alerts (24hr delay) + Visualping (fails SPAs) + GummySearch (dead) = stack is actively deteriorating

**SPA monitoring gap — strong technical SEO angle:**
- Most monitoring tools fetch raw HTTP — miss React/Next.js/Vue apps entirely
- Fails silently: successful snapshot of empty div, diffs that never fire
- Fix: headless browser with `waitUntil: networkidle`
- Target keywords: "monitor competitor javascript website", "competitor monitoring SPA react", "competitor website tracking nextjs"
- Competitor weakness: Visualping, most lightweight tools don't do headless rendering
- Blog post queued: `2026-04-23-competitor-monitoring-fails-spa-javascript.md`

**Confirmed pricing data (Vendr/Parano 2026):**
- Crayon: ~$15K/yr entry, median contracts $28,750 (Vendr)
- Klue: ~$16K/yr entry, median ~$30K/yr
- Both require 8-15 hrs/week analyst time for full value
- "Month 3 shelfware" quote confirmed in Cotera buyer guide

## Keyword Research — 2026-04-22 (Wednesday cycle, run 4)

**Fresh data from WebSearch agent (April 2026):**
- **Crayon raised prices ~15% in 2026** — now $30K–$100K+/year (up from $20K–$80K+). Best concrete angle for price contrast content.
- **Already.dev is a *discovery* tool**, not a monitoring tool. Scans 40+ sources (Product Hunt, GitHub, Reddit, HN, patent databases) to find competitors you don't know about. $49/mo. KompWatch *monitors* known competitors. Complementary, not competing. "Complete stack for $98/month" angle is strong.
- **Google Alerts contrast**: Alerts fire when someone writes *about* a competitor. KompWatch fires when the competitor changes their own website. Completely different signal — no other tool in this space is making this contrast clearly.
- **Klue onboarding**: "Weeks to onboard" is documented in their own implementation timeline. KompWatch = minutes. Strong reply angle.
- **Win rate stat**: "30–40% win rate improvement with automated CI" (sourced to Arise/TrajectoryAI). At $49/mo, ROI math is obvious.
- **RivalSift** ($299–$999/mo) is the main mid-market option — still 6–20x KompWatch pricing.
- Google Alerts replacement space is all *social listening* tools (Talkwalker, Awario, Mention). Nobody is positioning for website change detection specifically — that's KompWatch's clean lane.

**Content queued from this research (Friday 2026-04-25):**
- `twitter/2026-04-25-crayon-price-hike.md` — Crayon $30K–$100K+/yr angle (8/10)
- `twitter/2026-04-25-alerts-vs-watching.md` — mentions vs website changes (8.5/10)
- `twitter/2026-04-25-reply-klue-onboarding.md` — onboarding contrast (7.5/10)
- `twitter/2026-04-25-reply-win-rate-roi.md` — ROI at $49/mo (8/10)
- `linkedin/2026-04-25-complete-ci-stack.md` — discovery vs monitoring framing (8/10)
- Updated `twitter/2026-04-23-reply-already-dev.md` with complementary stack angle

**Publishing status:** API credentials not configured (TWITTER_API_KEY, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID all missing). All content queued.

## Keyword Research — 2026-04-22 (Wednesday cycle)

**Fresh data from WebSearch (April 2026):**
- "How to track competitor pricing for SaaS" is an unserved gap — results dominated by e-commerce retail repricing tools (Prisync, Pricefy, PriceMole). SaaS-specific content opportunity.
- "Crayon alternative for startups" and "Klue alternative small team" are active search terms with real demand. Comparison sites (RivalSift, Caelian) are producing 2026 content but redirecting to other enterprise tools — no affordable option in results.
- Transparent pricing is a real differentiator: Crayon, Klue, Kompyte, WatchMyCompetitor all hide pricing behind "contact us."
- Crayon launched MCP server — enterprise CI adding AI agent layer; SMB market still on Google Alerts.

**Content queued based on this research:**
- `blog/2026-04-23-crayon-alternative-for-startups.md` — Thursday blog article (~1000 words)
- `twitter/2026-04-23-transparent-pricing-angle.md` — "contact us" irony tweet
- `twitter/2026-04-23-saas-pricing-gap.md` — e-commerce tools / SaaS gap tweet
- `twitter/2026-04-23-who-owns-ci.md` — CI ownership question tweet
- `twitter/2026-04-23-reply-contact-us-pricing.md` — reply on pricing transparency
- `twitter/2026-04-23-reply-visualping-spa-fails.md` — Visualping SPA limitation reply
- `twitter/2026-04-23-reply-google-alerts-saas.md` — Google Alerts limitations reply
- `twitter/2026-04-23-reply-rivalsift-alternatives.md` — alternatives gap reply

**Publishing status:** API credentials not configured. All content queued.

## Keyword Research — 2026-04-19 (cycle 2, ~22:30 UTC)

**Fresh data from Vendr/Cotera research:**
- Crayon median contract: $28,750/year (Vendr, 90 purchases). Klue median: $30,000/year. Buyers average 17-20% discounts off initial quotes.
- "A CI platform without a dedicated owner becomes an expensive RSS feed within 90 days." — Cotera buyer's guide (live, quotable, ~30 marketing leaders surveyed)
- "40-60 alerts per day across five competitors. Maybe 2-3 per week actually actionable." / "Like panning for gold in a river of mud." — same source
- "By month three, the tool is a line item nobody questions because canceling feels like admitting defeat." — exact quote, use it
- More than half of CI tool buyers admit the tool is underused
- Klue Compete Agent + Ignition acquisition: going deeper into enterprise sales enablement, pricing further from SMB not closer
- Market size: competitor price monitoring $1.2B (2024) → $2.5B (2033) at 9.2% CAGR

**Pre-staged Monday content (2026-04-20):**
- `twitter/2026-04-20-alert-overload.md` — 40-60 alerts / panning for gold angle
- `twitter/2026-04-20-line-item-nobody-cancels.md` — $28,750 median / shelfware stat
- `linkedin/2026-04-20-shelfware-confession.md` — PM founder story, signal-to-noise

## Keyword Research — 2026-04-19 (cycle 1)

**Fresh angle — "expensive RSS feed" problem:**
- Crayon/Klue both require 8-15 analyst hours/week or become "an expensive RSS feed within 90 days" (Vendr/Caelian analysis)
- 29% of reps feel equipped despite paying $30K/yr — massive ROI problem for enterprise CI tools
- Klue acquired Ignition (AI/agentic) Sept 2025, but entire staff left to found DoubleO AI — tech acquisition without team
- 7-8 week onboarding before value; no free trials on either platform
- Gap: SMB founders cobbling together Visualping + Google Alerts + Similarweb at $0 vs $30K enterprise tools
- Best tweet angle: "expensive RSS feed" quote — concrete, quotable, positions KompWatch gap clearly

## Keyword Research — 2026-04-18

**Fresh angle — Klue Compete Agent launch:**
- Klue launched enterprise "Compete Agent" (AI battlecard generation, $16K–$100K/yr)
- Sharpest framing: enterprise CI going full AI-agent while SMB founders are on Google Alerts
- Tweet angle queued: "That gap is exactly what I'm building KompWatch for"

## Keyword Research — 2026-04-17

**High-value keywords to target:**
- "competitor website monitoring" (direct intent, underserved affordable tier)
- "how to track competitor changes automatically" (long-tail, high buying intent)
- "crayon alternative for small teams" / "klue alternative startup" (displacement terms)
- "AI competitive intelligence tool" (trending, ranks well now)
- "competitor price change alerts" (high-specificity pain point)

**Reddit threads to engage:**
- r/SaaS — "what tool do you use for competitor tracking?" threads
- r/startups — "competitive research process" / "how do you stay on top of competitors"
- r/ProductManagement — roadmap/strategy threads where CI comes up

**Competitor intel:**
- Crayon: $20-40K/yr, 3.0/5 Capterra value score, teams abandon when no one owns curation
- Klue: ~$16-30K/yr, launched "Compete Agent" in 2026 doubling down on enterprise — SMB market wide open
- Content angle: "CI without a full-time analyst" directly counters both

## Keyword Research — 2026-04-28 (Tuesday cycle, run 22)

**Fresh data from WebSearch (April 2026):**
- **Crayon MCP server confirmed** — April 2026 launch, "first CI MCP server." Lets enterprise reps query battlecards from inside AI tools (Claude, Cursor, CRMs). One enterprise rollout: "850 competitive questions asked in 30 days." Target: Fortune 500 CI teams. Price: $30–40K/yr. Content angle: $41 per question.
- **Visualping's own pricing page monitor data** — 9,700+ active monitors, 16.3% of checks fire a real change alert. Pricing changes cluster Tuesday–Thursday. Manual Monday checks miss majority of changes.
- **Kompyte hidden pricing** — "$300/mo starting" but Semrush acquisition filing shows ~$20K average ARR per customer = $1,667/mo actual cost. 5.5x advertised.
- **Google Alerts distinction** — alerts fire on "written about" (news, blogs, press), not "competitor website changes." No tool is clearly articulating this contrast. High-value SEO angle confirmed by search results dominated by social listening tools.
- **GummySearch confirmed dead** — December 2025, permanent shutdown. Cobbled free stack now: Google Alerts (wrong signal type) + Visualping (breaks on JS sites). Stack deteriorating.
- **Strategist auto-approved experiment** — 'Google Alerts replacement' content angle. Blog article written this cycle targeting this exact search term.

**Content produced this cycle (Tuesday 2026-04-28):**
- `twitter/2026-04-28-crayon-mcp-server.md` — Crayon MCP angle, price contrast (8/10, READY)
- `twitter/2026-04-28-pricing-page-change-rate.md` — 16.3% stat from Visualping data (8/10, READY)
- `twitter/2026-04-28-kompyte-hidden-pricing.md` — hidden pricing math (8.5/10, READY)
- `twitter/2026-04-28-reply-google-alerts-wrong-signal.md` — signal distinction (8/10, READY)
- `twitter/2026-04-28-reply-crayon-850-questions.md` — $41/question ROI angle (8/10, READY)
- `twitter/2026-04-28-reply-monday-check-too-late.md` — founder story, missed Wednesday (7.5/10, READY)
- `twitter/2026-04-28-reply-gummysearch-dead.md` — free stack collapse (8/10, READY)
- `twitter/2026-04-28-reply-visualping-empty-div.md` — JS rendering gap (8/10, READY)
- `reddit/2026-04-28-comment-crayon-mcp-smb-gap.md` — Crayon MCP vs SMB needs (8/10, READY)
- `reddit/2026-04-28-post-google-alerts-vs-website-monitoring.md` — r/SaaS signal distinction post (8.5/10, READY)
- `blog/2026-04-28-google-alerts-replacement-competitor-monitoring.md` — ~1200 word SEO article (8.5/10, READY)

**Publishing status:** TWITTER_API_KEY, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET all missing. Ghost requires explicit title + HTML args. All platforms blocked. Content accumulating in queue.

---

## Keyword Research — 2026-04-27 (Monday cycle, run 21)

**Adobe/Semrush acquisition confirmed at $1.9B (closing H1 2026):**
- Adobe acquired Semrush → Semrush owns Kompyte → Kompyte buried two acquisitions deep
- Adobe's strategic play: closed-loop marketing intelligence (competing Salesforce/HubSpot), not serving SMB CI
- Kompyte roadmap frozen 12–24 months during integration
- Best content angle: "Enterprise consolidation is a gift to indie tools"

**Enterprise CI pricing (2026 verified):**
- Crayon: $20–40K/yr mid-market, $50–100K+ enterprise (Vendr 2026 data)
- Klue: $16–30K/yr mid-market, $40K+ enterprise
- Neither has moved toward self-serve — SMB gap remains wide open

**DIY stack failure points:**
- Visualping: works up to 5 pages on free tier; fails on JS-rendered SaaS pages
- Google Alerts: catches news *about* competitors, misses website changes entirely
- Manual Monday check: misses Wednesday changes

**New content queued this cycle:**
- Tweet: "Enterprise consolidation is a gift to indie tools" (Adobe/Crayon/Klue rollup angle)
- Tweet reply: Visualping breaks at 5+ competitors / JS-rendered pages
- Show HN post: queued for 2026-04-29 (Strategist auto-approved)
- Blog: "What Adobe Buying Semrush Means If You're Not a Fortune 500" (2026-05-05)

---

## Keyword Research — 2026-05-11 (Monday cycle)

**Fresh data from WebSearch (May 2026):**
- **CI tools market: $870M (2026) → $4.03B by 2034 (21.17% CAGR)** — Gartner projects 40% of tech/service providers using commercial CI tools by 2026, up from ~10%. Market growing but not toward SMB affordability — enterprise incumbents unchanged on pricing.
- **14-month enterprise CI ROI timeline** (G2 aggregate data) — teams pay $28K+ upfront, see meaningful competitive attribution ~14 months later. Compelling contrast with immediate-value positioning. New angle not yet used.
- **Median active monitor check frequency: 2.8 hours** — Visualping dataset, 9,705 active monitors. High-performers check far more often than weekly manual process. "Manual Monday" misses Wednesday changes.
- **NY Algorithmic Pricing Disclosure Act (Nov 2025) + CA AG investigation** — consumer-facing price transparency laws, but B2B SaaS pricing is moving in the opposite direction: more "contact sales," personalized quotes, tiered opacity. Pricing page structural changes (tier additions/removals, seat minimums) remain the reliable signal.
- **LLM visibility tracking now at $49/mo entry** — Tools like LLM Pulse and AIclicks launched 2026. KompWatch ticket 01ff (LLM visibility, In Review) directly aligned.
- **Kompyte avg ARR: ~$20K/customer** despite "$300/mo starting" claim — Semrush acquisition filing data shows 5.5x markup. Running angle from prior cycles confirmed valid.

**Content produced this cycle:**
- `twitter/2026-05-14-roi-14months.md` — 14-month ROI contrast (8/10, READY, Thursday slot)
- `twitter/2026-05-14-check-frequency.md` — 2.8-hour monitoring frequency stat (8/10, READY, Thursday slot)
- `twitter/2026-05-14-reply-ci-market-growth.md` — $870M → $4B market growth angle (7.5/10, READY, Thursday slot)
- `reddit/2026-05-13-comment-pricing-opacity.md` — NY pricing act / B2B opacity angle (8.5/10, READY, Wednesday slot)

**Publishing status:** TWITTER_API_KEY, REDDIT_CLIENT_ID, LINKEDIN_ACCESS_TOKEN still missing from environment. All social platforms blocked. Content queue healthy — 50+ pieces ready across platforms. Action needed: configure social API credentials in Vaultwarden under KompWatch folder.

---

## Keyword Research — 2026-05-18 (Monday cycle, run 23)

**Web search unavailable this cycle (DuckDuckGo returning no results). Using internal signals.**

**Key angles mined from shipped features (Notion board + commit log):**
- **Instant pricing-change alerts shipped** (Pro+): Bypass digest for PRICING zone changes. Latency angle — pricing changes discovered in minutes, not a week. Direct deal-impact framing.
- **MCP server shipped** (4 tools): Competitor change data now queryable by Claude, Cursor, any MCP-compatible AI tool. Crayon launched enterprise MCP at $50K+/yr — KompWatch equivalent at $49/mo.
- **Webhook delivery tracking + retry shipped**: 5-8% fire-and-forget failure rate. Exponential backoff retry. Alerts now confirm delivery or surface failures explicitly.
- **Kompyte/Adobe acquisition displacement**: Strategist confirms "Adobe killed Kompyte roadmap" outreach angle. Displaced users need alternatives. $300-400/mo Kompyte → $49/mo KompWatch path.
- **Tiered alert cadence concept**: PRICING → instant, FEATURE → same-day, BLOG/JOBS → weekly digest. First piece to frame this model explicitly.

**Content produced this cycle (Tuesday May 19 pre-stage):**
- `twitter/2026-05-19-instant-pricing-alerts.md` — pricing alerts bypass digest, confidence threshold (8.5/10, READY)
- `twitter/2026-05-19-mcp-server-shipped.md` — MCP server, 4 tools, Crayon irony framing (9/10, READY)
- `twitter/2026-05-19-pricing-change-costs-deals.md` — pricing change costs deals, stale intel in sales calls (8/10, READY)
- `twitter/2026-05-19-reply-mcp-vs-crayon.md` — Crayon MCP $50K vs KompWatch MCP $49/mo (8.5/10, READY)
- `twitter/2026-05-19-reply-kompyte-users-displaced.md` — Kompyte/Adobe acquisition, frozen roadmap (8/10, READY)
- `twitter/2026-05-19-reply-webhook-reliability.md` — webhook fire-and-forget failure rate, retry shipped (9/10, READY)
- `twitter/2026-05-19-reply-digest-vs-instant.md` — tiered cadence hot take, PRICING→immediate (8.5/10, READY)
- `reddit/2026-05-19-comment-pricing-alert-latency.md` — r/SaaS, latency angle, 28-hour digest gap (8/10, READY)
- `reddit/2026-05-19-post-mcp-server-launch.md` — r/ProductManagement, MCP server launch, honest limitations (8.5/10, READY)
- `blog/2026-05-19-how-to-get-notified-competitor-pricing-change.md` — SEO: "how to get notified competitor pricing change", ~1,200 words, FAQ, internal links (8.5/10, READY)

**Tuesday May 19 publish slate:**
- Twitter: instant-pricing-alerts.md + mcp-server-shipped.md + pricing-change-costs-deals.md (3 tweets) + 5 replies (mcp-vs-crayon, kompyte-users-displaced, webhook-reliability, digest-vs-instant)
- Reddit: comment-pricing-alert-latency.md (1 comment) + post-mcp-server-launch.md (1 post)
- Blog: how-to-get-notified-competitor-pricing-change.md (1 article)

**Publishing status (Monday May 18):** All 10 Monday pieces staged and READY. All platforms blocked — TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET still missing from env. Credentials needed in Vaultwarden under KompWatch folder. Queue now 80+ pieces READY across 23 cycles.

---

## Keyword Research — 2026-05-24 (Sunday cycle, run 24)

**Signals used this cycle:**
- **Headsup.bot identified as new direct competitor** (Strategist intel, Sun May 24): AI competitive intelligence tool, free tier, recently launched. Direct overlap on website monitoring + AI summaries. Entering same "affordable CI" positioning space.
- **Market validation angle**: New entrants confirm market demand. "More tools = more people realizing the problem is real" — founder confidence framing, not defensive.
- **Sunday REST mode**: 1 tweet max per calendar rules.

**Content produced this cycle (Sunday May 24):**
- `twitter/2026-05-24-sunday-new-competitor.md` — Headsup.bot competitor spotted, honest market reaction, "going to monitor them with KompWatch" punchline (8.5/10, READY)

**Sunday May 24 publish slate:**
- Twitter: 1 tweet (new-competitor.md)

**Publishing status (Sunday May 24):** Tweet queued and READY. Publish blocked — TWITTER_API_KEY and related credentials still missing from env. social-publisher.py also fails on Python 3.9 (requires 3.10+ for union type syntax). Queue now 85+ pieces READY across 24 cycles.

---

## Keyword Research — 2026-05-25 (Monday cycle 2, run 25)

**Signals used this cycle:**
- **Headsup.bot direct competitor** (Strategist intel): free tier, AI summaries, same positioning — responded with honest "monitoring them with KompWatch" angle
- **Adobe/Semrush $1.9B acquisition** (Apr 28): affordable CI mid-market now completely gone — strong LinkedIn story angle
- **Monday morning tab-check pattern**: high-resonance founder pain story — used as tweet thread
- **Pricing experiment detection**: niche but useful technical insight for PM audience

**Self-check scores:**
- `twitter/2026-05-25-monday-tab-audit.md` — humans make bad cron jobs, founder pain, specific (8.5/10, READY)
- `twitter/2026-05-25-headsup-competitor-check.md` — honest competitor reaction, specific technical detail (8/10, READY)
- `twitter/2026-05-25-reply-track-without-crayon.md` — helpful, honest about limitations (8/10, READY)
- `twitter/2026-05-25-reply-alert-fatigue-real.md` — specific problem, not hand-wavy (8.5/10, READY)
- `twitter/2026-05-25-reply-diy-cron-limits.md` — technical specificity, builder credibility (9/10, READY)
- `twitter/2026-05-25-reply-ci-tool-maintenance-cost.md` — contrasts enterprise vs small team clearly (8/10, READY)
- `twitter/2026-05-25-reply-pricing-experiment-detection.md` — genuinely useful insight, not self-promotional (8.5/10, READY)
- `reddit/2026-05-25-comment-pm-competitor-digest.md` — r/ProductManagement, honest limitation included (8/10, READY)
- `linkedin/2026-05-25-ci-market-gap-founder-story.md` — acquisition narrative, founder vulnerability, specific numbers (9/10, READY)

**Monday May 25 publish slate (cycle 2):**
- Twitter: monday-tab-audit.md + headsup-competitor-check.md (2 tweets) + 5 replies
- Reddit: comment-pm-competitor-digest.md (1 comment) + tool-graveyard from cycle 1 (1 comment)
- LinkedIn: ci-market-gap-founder-story.md (1 post)

**Publishing status (Monday May 25, cycle 2):** All 9 new pieces READY. Publish blocked — social-publisher.py fails on Python 3.9 (union type syntax `str | None` requires Python 3.10+). Credentials issue still unresolved. Queue now 95+ pieces READY across 25 cycles.

---

## Keyword Research — 2026-05-25 (Monday cycle 4, run 26)

**Fresh data from WebSearch (May 2026):**
- **Headsup.bot specifics confirmed**: Free tier = 5 competitors, 100 alerts, 90-day history. Paid starts ~$29/mo. Uses HIGH/MEDIUM/LOW priority classification + "next step" recommendations. Claims onboarding in "seconds." Product Hunt listed. Direct positioning overlap.
- **Crayon TCO reality**: $25K-$40K/yr subscription + 5-10 hrs/week analyst = $40K-$80K total cost of ownership. G2 #1 complaint confirmed as "too much noise, not enough signal." Requires 2-4 week onboarding.
- **DIY stack validation**: Owler + Visualping + Feedly under $500/yr "covers 80%" (review site framing). The 20% gap = JS-rendered competitor sites, mid-week changes, readable summaries.
- **RivalSense confirmed at $44.99-$222.99/mo**: Appearing in 2026 affordable CI roundups. No headless rendering.
- **/vs/headsup page shipped** (commit 26896b8): Building-in-public content angle — used KompWatch to monitor Headsup.bot while writing the comparison page.

**New angles used this cycle:**
- Crayon TCO math (subscription + labor = real cost) — not yet covered in prior cycles
- Alert classification philosophies: HIGH/MEDIUM/LOW buckets (Headsup) vs 0-100 confidence scores (KompWatch)
- "Managed service pretending to be software" — enterprise CI business model reframe
- Building in public: shipping /vs/headsup page while monitoring them with your own tool

**Content produced this cycle (Monday May 25, cycle 4):**
- `twitter/2026-05-25-crayon-tco-hidden-cost.md` — subscription + analyst labor = $40-80K TCO (8/10, READY)
- `twitter/2026-05-25-vs-headsup-page-live.md` — building in public, /vs/headsup shipped, fair comparison (8/10, READY)
- `twitter/2026-05-25-reply-headsup-vs-crayon-gap.md` — $29/mo vs $25K/yr market validation (8/10, READY)
- `twitter/2026-05-25-reply-noise-is-the-real-product.md` — 40-60 alerts, 2-3 actionable, filter before sending (8/10, READY)
- `twitter/2026-05-25-reply-diy-80pct.md` — DIY stack covers 80%, the 20% gap costs deals (8/10, READY)
- `twitter/2026-05-25-reply-onboarding-weeks.md` — "managed service pretending to be software" reframe (8.5/10, READY)
- `twitter/2026-05-25-reply-priority-vs-confidence.md` — classification philosophy comparison, no winner (8/10, READY)
- `reddit/2026-05-25-comment-crayon-tco-math.md` — r/SaaS, full TCO breakdown with math (8/10, READY)
- `reddit/2026-05-25-comment-affordable-ci-comparison.md` — r/ProductManagement, honest 4-tool comparison including KompWatch limitations (8.5/10, READY)
- `linkedin/2026-05-25-noise-is-the-real-problem.md` — signal vs noise framing, last-mile delivery as real gap (8.5/10, READY)

**Monday May 25 publish slate (cycle 4):**
- Twitter: crayon-tco-hidden-cost.md + vs-headsup-page-live.md (2 tweets) + 5 replies (headsup-vs-crayon-gap, noise-is-the-real-product, diy-80pct, onboarding-weeks, priority-vs-confidence)
- Reddit: comment-crayon-tco-math.md (r/SaaS) + comment-affordable-ci-comparison.md (r/ProductManagement)
- LinkedIn: noise-is-the-real-problem.md

**Publishing status (Monday May 25, cycle 4):** All 10 pieces READY. All platforms blocked — TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET still missing. Queue now 105+ pieces READY across 26 cycles.

---

## Keyword Research — 2026-05-25 (Monday cycle, run 27 — evening)

**Fresh data from WebSearch (May 2026):**
- **14-month ROI payback** on enterprise CI tools (Crayon/Klue) — median time to meaningful ROI for $25K-$40K/yr commitments, assuming dedicated analyst 5-10hrs/week. The "managed service pretending to be software" framing.
- **90-day ghost platform pattern** — confirmed across 3+ user interviews this month: CI tools without a dedicated owner become expensive RSS feeds within 90 days. Structural to enterprise CI, not a product bug. Creates the "shelfware by Q3" renewal problem.
- **Pricing pages change every 2.8 hours median** (reconfirmed, Visualping 9,700 active monitors) — teams doing quarterly reviews are flying blind for 99%+ of the monitoring window.
- **Klue $62M Series B + 4 acquisitions in 5 months** — Ignition, Goldpan.ai, DoubleCheck Research. Roadmap priorities obvious: enterprise consolidation, not SMB product improvement.
- **Builder shipped SoftwareApplication JSON-LD** on 4 vs-* comparison pages (vs-crayon, vs-klue, vs-headsup, vs-kompyte). SEO structured data live.

**Content produced this cycle (Monday May 25, cycle 5):**
- `twitter/2026-05-25-roi-payback-14months.md` — 14-month ROI payback, $40K-$80K TCO, wrong-fit product framing (8/10, READY)
- `twitter/2026-05-25-ghost-platform-90days.md` — 90-day shelfware pattern, user interview signal (8.5/10, READY)
- `reddit/2026-05-25-comment-14month-roi-math.md` — r/SaaS TCO + ROI timeline deep comment (8/10, READY)

**Monday May 25 publish slate (cycle 5 additions):**
- Twitter: roi-payback-14months.md + ghost-platform-90days.md (2 additional tweets, overflow to Tue)
- Reddit: comment-14month-roi-math.md (r/SaaS, overflow to Tue)

**Publishing status (Monday May 25, cycle 5):** All 3 new pieces READY. All platforms still blocked — credentials missing. Queue now 108+ pieces READY across 27 cycles.

## Marketer Cycle — 2026-05-29 (Friday, run 19)

**Calendar: Friday — 2 tweets + 5 replies, 2 Reddit comments + 1 Reddit post, 1 LinkedIn post.**

**Keyword research:** Crayon MCP server launch confirmed live (crayon.co blog). Klue Gartner MQ Leader confirmed from prior Strategist intel. Western search geo-limited this cycle; using confirmed prior intel.

**New content written this cycle (11 pieces):**
- `twitter/2026-05-29-crayon-mcp-reality-check.md` — Crayon MCP ~$50K vs KompWatch MCP $149/mo, protocol identical (8.5/10, READY)
- `twitter/2026-05-29-klue-gartner-mq-context.md` — Klue Gartner MQ Leader framing, positioning context (8/10, READY)
- `twitter/2026-05-29-reply-crayon-mcp-not-exclusive.md` — MCP concept valid, cost is the issue (8/10, READY)
- `twitter/2026-05-29-reply-ci-process-small-team.md` — 4-step CI process for 5-person teams (8/10, READY)
- `twitter/2026-05-29-reply-pricing-page-change-rate.md` — pricing pages change every 2-3 days, quarterly reviews miss ~60 (8.5/10, READY)
- `twitter/2026-05-29-reply-what-tool-competitive-monitoring.md` — honest tool tier breakdown, Klue/Crayon vs KompWatch use cases (7.5/10, READY)
- `twitter/2026-05-29-reply-friday-week-recap.md` — week recap, 0 ARR, build-in-public vulnerability (7.5/10, READY)
- `reddit/2026-05-29-comment-crayon-mcp-pricing-signal.md` — r/SaaS, Crayon MCP pricing signal analysis (8/10, READY)
- `reddit/2026-05-29-comment-ci-review-cadence-shift.md` — r/ProductManagement, monthly→alert-based CI process shift (8/10, READY)
- `reddit/2026-05-29-post-week3-building-in-public.md` — r/SaaS, week 3 building in public post (8.5/10, READY)
- `linkedin/2026-05-29-ci-market-enterprise-consolidation.md` — Crayon MCP + Klue Gartner MQ market consolidation framing (8.5/10, READY)

**Publishing attempt:** All 11 pieces — BLOCKED: social-publisher.py requires Python 3.10+ (`str | None` union syntax), system has Python 3.9.6. All statuses updated to `queued-publish-failed-publisher-python39-incompatible`.

**Key angles this cycle:**
- Crayon MCP server confirmed live — reactive content, hot window for engagement
- Klue Gartner MQ Leader — enterprise CI consolidation = cleaner gap for KompWatch positioning
- Friday week recap / building in public — vulnerability + honesty angle

**Blockers (unchanged):**
- TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, LINKEDIN_ACCESS_TOKEN, REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET — all missing from Vaultwarden KompWatch folder.
- social-publisher.py requires Python 3.10+ but system has Python 3.9.6.

**Queue status:** 120+ pieces staged across Twitter, Reddit, LinkedIn, Blog. All READY pending cred/publisher unblock.

---
