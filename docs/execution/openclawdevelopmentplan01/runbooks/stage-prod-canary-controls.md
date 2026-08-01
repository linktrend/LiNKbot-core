# Runbook — 14. Stage/production canary start, pause, restart, accept, reject

**Domain:** Both
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live by default)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact. Model-routing contract must keep `liveMutationAllowed: false` and `paidSpendEnablementAllowed: false` unless Principal explicitly flips those gates after separate approval.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness; enabling paid Nemotron spend; claiming MiniMax-M3 PDF without provider+capability proof; silently routing documents to another paid model.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; keep `pdfDocumentModelsCutover.state=needs_human_gate` / `documentModelsEnabled: false`; escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## Default posture (OCP-W20 candidate)

Staged canary remains **non-live by default**. Candidate routing fragments under `linkbots/lisa/ops/model-routing.contract.*` are workshop artifacts only:

1. Do **not** copy into `~/.openclaw-lisa` from this runbook alone.
2. Do **not** start LIVE canary from FAKE/TEMPLATE rehearsal steps.
3. PDF cutover stays `needs_human_gate` until human-approved after MiniMax-M3 PDF proof (media PDF owner today: MiniMax-M2.7).
4. Paid evaluation models stay `enabledInDefaults: false` with `paidSpendEnablementAllowed: false`.

---

## FAKE / TEMPLATE rehearsal (safe anytime)


1. FAKE rehearsal only: toggle `captureDrain` / `telemetryDrain` independently.
2. LIVE canary start/accept/reject requires Phase 8–12 clearance — **not started**.
3. Pause = drain flags false; restart = gateway_start + worker start; reject = disable plugin + keep outbox.
4. Accept must re-check routing hard stops (`liveMutationAllowed`, paid spend, PDF gate) before any profile write — profile write is out of scope for candidate-only packets.


## Expected sanitized evidence

- Commands/docs reviewed at FAKE/TEMPLATE tier
- No LIVE endpoints contacted
- No secrets echoed
- Routing contract shows `liveMutationAllowed: false`, `paidSpendEnablementAllowed: false`, `pdfDocumentModelsCutover.state: needs_human_gate`

## Rehearsal record

| Field | Value |
| ----- | ----- |
| Rehearsed | 2026-08-01 Asia/Taipei (OCP-W20 Lane C non-live strengthen) |
| Operator | Cursor Local Grok 4.5 High (docs rehearsal) |
| Live mutation | **none** |
| PDF cutover | `needs_human_gate` (disabled) |
| Result | Runbook executable at non-live tier; staged canary non-live by default |
