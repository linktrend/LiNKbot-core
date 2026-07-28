# Runbook — 3. Brain credential issue/rotate/revoke/recover

**Domain:** Brain
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## FAKE / TEMPLATE rehearsal (safe anytime)


1. Document SecretRef **names** only (`LINKTREND_LINKBRAIN_STAGE_*`). Never mint or print values.
2. Prefer Platform OAuth `authProfileId` template over static bearer.
3. Rehearse revoke = set plugin `enabled:false` + remove template auth binding from non-Lisa probe config.
4. Recover = restore TEMPLATE binding after Phase 5/7 clearance — not executed live here.


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
