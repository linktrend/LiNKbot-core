# Runbook — 10. Privacy or secret incident containment

**Domain:** Both
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)

1. Disable Brain conversation hooks / Skills plugin immediately (domain-first).
2. Revoke affected credential names (request Platform revoke — do not issue here).
3. Search logs for canaries without printing secret values; open incident note.

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
