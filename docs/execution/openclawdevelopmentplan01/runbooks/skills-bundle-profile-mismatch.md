# Runbook — 9. Skills bundle/profile mismatch and last-verified-bundle policy

**Domain:** Skills
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)


1. On profile/hash mismatch, disable `governedExecution` and `telemetryDrain`.
2. Keep outbox durable; do not invent a new bundle hash locally.
3. Escalate to LiNKskills owner for certification evidence.


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
