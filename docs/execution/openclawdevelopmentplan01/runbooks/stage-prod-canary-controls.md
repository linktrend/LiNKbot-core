# Runbook — 14. Stage/production canary start, pause, restart, accept, reject

**Domain:** Both
**Owner:** OpenClaw Lisa operator
**Tier for this rehearsal:** FAKE / TEMPLATE only (non-live by default)
**Prerequisites:** Read `README.md` evidence tiers. No Lisa live profile mutation. No Platform live contact. Model-routing contract must keep `liveMutationAllowed: false` and `paidSpendEnablementAllowed: false` unless Principal explicitly flips those gates after separate approval.
**Stop conditions:** secret in argv/logs; live credential issue; cross-domain mutation; claiming LIVE readiness; enabling paid Nemotron spend; claiming MiniMax-M3 PDF proven without a first-production-proof receipt; silently routing documents to another paid model.
**Rollback:** leave all plugins/MCP `enabled: false`; retain durable outboxes; on PDF/provider failure disable **PDF document routing only** (preserve text/image/default-fallback; emit non-secret failure event; no paid alternate); escalate to Principal if live boundary crossed.
**Escalation:** Principal + matching Orchestrator when live gates or identity fault suspected.

---

## Default posture (OCP-W30 candidate)

Authoritative candidate language on `origin/development` as of PR #43 / `2025401aafc` (2026-08-01). Staged canary remains **non-live by default**. Candidate routing fragments under `linkbots/lisa/ops/model-routing.contract.*` are workshop artifacts only:

1. Do **not** copy into `~/.openclaw-lisa` from this runbook alone.
2. Do **not** start LIVE canary from FAKE/TEMPLATE rehearsal steps.
3. PDF / documentModels candidate is `minimax/MiniMax-M3` at capability **`approved_unverified`**. First-PDF proof is reserved for a separately authorized production rollout — **not claimed done in this packet**.
4. Paid evaluation models stay `enabledInDefaults: false` with `paidSpendEnablementAllowed: false`.

See `docs/evidence/ocp-w30-approved-pdf-routing/release-graph.md`.

For **Mac Mini lisa-stage** schedule enable/disable/rollback and the real MiniMax PDF canary procedure (OpenRouter-only), use `docs/execution/openclawdevelopmentplan01/runbooks/lisa-stage-ops-canary.md`.

---

## FAKE / TEMPLATE rehearsal (safe anytime)

1. FAKE rehearsal only: toggle `captureDrain` / `telemetryDrain` independently.
2. LIVE canary start/accept/reject requires Phase 8–12 clearance — **not started**.
3. Pause = drain flags false; restart = gateway_start + worker start; reject = disable plugin + keep outbox.
4. Accept must re-check routing hard stops (`liveMutationAllowed`, paid spend, PDF `approved_unverified` honesty + first-production-proof receipt) before any profile write — profile write is out of scope for candidate-only packets.

## Controlled first-PDF proof (production rollout — separate authorization)

Not executable from this FAKE/TEMPLATE rehearsal. When Principal authorizes a production rollout:

1. Deployment and credentials/live profile sync are **separate human gates** (not implied by this candidate).
2. First-PDF proof runs only under that controlled rollout.
3. **Success evidence required:** a first-production-proof receipt before any claim that MiniMax-M3 PDF works.
4. Final acceptance remains a further human gate after the receipt.
5. On provider/PDF failure: disable PDF document routing only; keep text/image/default-fallback; emit non-secret failure event; no paid alternate.

## Expected sanitized evidence

- Commands/docs reviewed at FAKE/TEMPLATE tier
- No LIVE endpoints contacted
- No secrets echoed
- Routing contract shows `liveMutationAllowed: false`, `paidSpendEnablementAllowed: false`, PDF candidate `approved_unverified` (MiniMax-M3) without a production-proof claim
- CI / Bugbot: deferred (honest)

## Rehearsal record

| Field         | Value                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| Rehearsed     | 2026-08-01 Asia/Taipei (OCP-W30 Lane B docs — approved_unverified PDF candidate)                        |
| Operator      | Cursor Local Grok 4.5 High (docs rehearsal)                                                             |
| Live mutation | **none**                                                                                                |
| PDF cutover   | MiniMax-M3 candidate / `approved_unverified` (first proof = controlled production rollout; not claimed) |
| Result        | Runbook executable at non-live tier; staged canary non-live by default; rollback = PDF-only disable     |
