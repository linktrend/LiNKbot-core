# Runbook — 12. Platform environment rollback, migration recovery, backup, restore

**Domain:** Platform/OpenClaw
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)

1. OpenClaw does not own Platform migrations. Record blocked status.
2. Local recovery: disable plugins; retain keyed-store outboxes; restore prior plugin build if needed.
3. Backup/restore of Platform DBs is Platform-owned — TEMPLATE note only.

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
