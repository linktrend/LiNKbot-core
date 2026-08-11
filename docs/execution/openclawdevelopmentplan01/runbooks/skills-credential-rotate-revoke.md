# Runbook — 4. Skills credential issue/rotate/revoke/recover

**Domain:** Skills
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)

1. Document Skills SecretRef **names** only (never reuse Brain IDs).
2. Rehearse revoke by disabling `linkskills` + Skills MCP template independently of Brain.
3. Recover remains gated on Phase 5 auth + Phase 7 stage clearance.

## Expected sanitized evidence

- Commands/docs reviewed at FAKE/TEMPLATE tier
- No LIVE endpoints contacted
- No secrets echoed

## Rehearsal record

| Field         | Value                                       |
| ------------- | ------------------------------------------- |
| Rehearsed     | 2026-07-28 Asia/Taipei (wave 6 non-live)    |
| Operator      | Cursor Local Grok 4.5 High (docs rehearsal) |
| Live mutation | **none**                                    |
| Result        | Runbook executable at non-live tier         |
