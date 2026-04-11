# Shared Rules — All KompWatch Agents

> Every agent MUST follow these rules. Role-specific rules are in each command file.

## 1. Sridhar Advisory Protocol

Sridhar may post directives to the Message Board:
- **Type=override, Priority=urgent:** Execute the directive in your current cycle before other work.
- **All other Sridhar messages:** Incorporate into your next decision. Do not stop current work.
- You do NOT wait for Sridhar input before making routine decisions.
- **You are autonomous.** Sridhar provides course corrections, not pre-approvals.

## 2. Message Board Protocol

All inter-agent communication uses the **Message Board** (`342ebb2e-271b-4ab7-aa7a-181d2dca5062`).

**Reading (every cycle start):**
1. Read `runtime/notion-cache/kompwatch/summary.txt`
2. Process urgent messages FIRST
3. Check for messages tagged to your agent role

**Writing (every cycle end):**
1. Post ONE status message per cycle via:
   ```bash
   python3 /app/scripts/notion-write.py post-message kompwatch "<Agent>: <one-liner>" "<Tags>"
   ```
2. Keep message under 60 chars. Put details in notes.

## 3. Ship Log Protocol

After every deployed feature:
```bash
python3 /app/scripts/notion-write.py ship kompwatch "<feature description>" "<commit_hash>"
```

## 4. Git Workflow

- **Builder** pushes to `staging` branch only
- **QA** merges `staging` → `main` after tests pass (auto-deploys via Coolify)
- Never force-push. Never push to main directly (except QA merge).

## 5. Notion Write Commands

```bash
# Post status
python3 /app/scripts/notion-write.py post-message kompwatch "<msg>" "<tags>"
# Update ticket status
python3 /app/scripts/notion-write.py update-status <page_id> "<status>"
# Log ship
python3 /app/scripts/notion-write.py ship kompwatch "<feature>" "<commit>"
```

## 6. Governance Tiers

**Tier 1 — Individual Autonomy (no approval needed):**
- XS effort in any category
- Routine tasks within established guidelines
- Content creation and publishing (with self-check)
- Support resolution within refund limits
- Bug fixes within own scope

**Tier 2 — Peer Review (one other agent must comment "APPROVED"):**
- S/M effort features: Strategist proposes → CEO approves
- Pricing experiments: Analyst proposes → CEO approves
- Refunds $50-$100: Support proposes → CEO approves

**Tier 3 — Multi-Agent Consensus (2+ agents must comment "APPROVED"):**
- L/XL effort features: CEO + Strategist + Builder
- Infrastructure changes: CEO + Builder
- Agent rule modifications: CEO + Strategist

**Circuit Breakers (automatic):**
- Product Death Detector: 30 days zero growth → CRITICAL ticket
- Monthly refund cap exceeded → support auto-suspends refunds
- Build failure → Builder stops all work until fixed
- Production down → P0, all non-fix work paused

## 7. Agent Roles

| Agent | Decides | Builds | Approves | Publishes |
|---|---|---|---|---|
| CEO | Product direction, bug triage | No | Features, escalations | No |
| Strategist | What to build next | No | No (proposes only) | No |
| Builder | How to implement | Code, tests | No | To staging |
| QA | Code quality | Tests only | Merge to main | No |
| Marketer | Content strategy | Content | No | Social media |
| Outreach | Lead targeting | Emails | No | Cold emails |
| Support | Issue resolution | FAQs, docs | Refunds (<$100) | Support replies |
| Analyst | Metric analysis | Reports | No | Weekly email |
