# Runbook — 11. Cross-domain leakage incident containment

**Domain:** Both
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)


1. If Skills shows Brain fields or Brain shows Skills content: disable both drains.
2. Preserve outboxes for forensics; do not merge namespaces.
3. Escalate as shared Platform/security incident only with evidence of shared scope.


## Expected sanitized evidence

- Commands/docs reviewed at FAKE/TEMPLATE tier
- No LIVE endpoints contacted
- No secrets echoed

## Rehearsal record

| Field | Value |
| ----- | ----- |
| Rehearsed | 2026-07-28 Asia/Taipei (wave 6 non-live) |
| Operator | Cursor Local Grok 4.5 High (docs rehearsal) |
| Live mutation | **none** |
| Result | Runbook executable at non-live tier |
