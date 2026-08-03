# Handoff — OpenClaw Brain capture contract correction

## Session Metadata

| Field            | Value                                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent / Cursor Grok 4.5                                                                                                                                                            |
| Session ID       | cursor-local-mac-mini-agents-window-feature-ocp-brain-capture-contract-fix-20260803-2132                                                                                                        |
| Orchestrator key | cursor-local-mac-mini-desktop-workspace-orchestrator                                                                                                                                            |
| Objective        | Smallest OpenClaw-side adapter so `brain_capture_batch` matches authoritative LiNKbrain PrivateCaptureBatch wire shape (post Luna canary mcp_tool_error / deadletter). Do not change LiNKbrain. |
| Scope            | `extensions/linkbrain` capture adapter/envelopes/fixtures/tests + bounded link-domain-fakes fixture updates; session/handoff docs only. No stage/Lisa/cloud/secrets.                            |
| Started          | 2026-08-03 21:32 Asia/Taipei                                                                                                                                                                    |
| Ended            | 2026-08-03 21:45 Asia/Taipei                                                                                                                                                                    |
| Starting branch  | `dev/cloudcursor/OCP-BRAIN-CAPTURE-CONTRACT-FIX`                                                                                                                                                |
| Ending branch    | `dev/cloudcursor/OCP-BRAIN-CAPTURE-CONTRACT-FIX`                                                                                                                                                |
| Starting commit  | `ccf7de40f39dcce96042b879f5e1476315cbe11b`                                                                                                                                                      |
| Ending commit    | PENDING_AFTER_COMMIT                                                                                                                                                                            |
| Starting status  | dirty uncommitted adapter WIP from interrupted prior Cursor run at exact base SHA                                                                                                               |
| Ending status    | committed + pushed; no merge; integration not self-approved                                                                                                                                     |

## Summary

OpenClaw linkbrain flush previously enqueued legacy capture bodies (`streamId` / `fromSequence` / `toSequence` / `contentHash` / `{sequence,role,text}` events). Authoritative LiNKbrain `captureBatch` parses `PrivateCaptureBatch` input (`batchId`, `sessionId`, `idempotencyKey`, `capturedAt`, ConversationEvent fields) and stamps `actorBindingId` from authenticated actor — body-supplied actor overrides are forbidden.

This branch adds `capture-batch-adapter.ts`, routes flush through Brain wire shape, keeps durable buffer roles local (`user`/`human` → `principal`, `tool_summary` → tool/`tool_result`), strips actor override keys, uses durable `acceptedAtMs` for deterministic `occurredAt`/`capturedAt`/`batchId`/`idempotencyKey` replay hashes matching Brain `canonicalRequestHash` material (no actorBindingId), and updates fixtures/tests accordingly. LiNKbrain repo was read-only verification only.

## Files Inspected

- LiNKbrain (read-only): `packages/contracts/src/schemas.ts` (`ConversationEventSchema`, `PrivateCaptureBatchSchema`, `BRAIN_CONTRACT_VERSION` 1.0.0); `packages/brain-service/src/app.ts` `captureBatch` + requestHash; `packages/brain-service/src/types.ts` `CaptureBatchInput`; `packages/brain-service/src/auth.ts` forbidden override keys; MCP `frozen-tools.ts` / `tools.ts` `brain_capture_batch`
- OpenClaw: `extensions/linkbrain/src/{capture,envelopes,runtime,transport,lifecycle,opaque}.ts`; fixtures MANIFEST; prior interrupted WIP; related phase6 fakes tests
- Coordination: root/extensions `AGENTS.md`, briefing, current-status, active session record

## Files Created

- `extensions/linkbrain/src/capture-batch-adapter.ts`
- `extensions/linkbrain/capture-contract.test.ts`
- `extensions/linkbrain/fixtures/contracts/brain-capture-batch.contract.json`
- `docs/agent-sessions/completed/cursor-local-mac-mini-agents-window-feature-ocp-brain-capture-contract-fix-20260803-2132.md`
- `docs/handoffs/2026-08-03-ocp-brain-capture-contract-fix.md`

## Files Modified

- `extensions/linkbrain/api.ts` — export adapter helpers
- `extensions/linkbrain/src/capture.ts` — durable `sessionId`/`acceptedAtMs`; flush via Brain wire adapter; never forward `actorKey`
- `extensions/linkbrain/src/envelopes.ts` — assert Brain wire capture body
- `extensions/linkbrain/src/opaque.ts` — opaque kind `event`
- `extensions/linkbrain/capture.test.ts`, `runtime.test.ts`
- Fixtures: sample/prohibited capture batches + `brain_capture_batch.request.json` + `MANIFEST.md` hashes (76 JSON files; aggregate with trailing newline `71c5c05e…`)
- `test/helpers/link-domain-fakes/{integrated-brain-skills,phase6-mandatory-matrix,phase6-perf-baseline}.test.ts` — sample batches to Brain wire shape

## Files Deleted

- none (active session record moved to `completed/`)

## Commands Run

- Git coordination: status/branch/worktree/stash; `HEAD` = `ccf7de40f39…`
- LiNKbrain schema/app read-only verification
- Fixture inventory SHA recompute (trailing-newline aggregate matches MANIFEST)
- `node scripts/run-vitest.mjs` focused + bounded broader suites (see Tests)
- `./node_modules/.bin/oxfmt` on touched TS; `git diff --check`
- Local `node_modules` symlink to sibling wp0 checkout for proof only (gitignored; not committed)

## Decisions

1. **OpenClaw-side adapter only; no LiNKbrain change**
   - Reason: canary failure is OpenClaw emitting retired wire shape; Brain contract is authoritative and already correct.
   - Evidence: LiNKbrain `PrivateCaptureBatchSchema` + `captureBatch` requestHash; canary mcp_tool_error on legacy body.
   - Impact: flush/outbox/MCP args become Brain-compatible without touching Brain deploy.
   - Authority: Carlos-assigned task scope; implementation judgment on adapter placement.

2. **Deterministic stamps from durable `acceptedAtMs`, exclude flush reason from idempotency**
   - Reason: Brain idempotent replay requires identical requestHash for same sequence window.
   - Evidence: Brain `canonicalRequestHash({batchId,sessionId,taskId,capturedAt,events})`.
   - Impact: restart drain of same buffer window replays identically.
   - Authority: implementation judgment.

3. **Never send actor override fields; ignore enqueue `actorKey` on wire**
   - Reason: Brain `guardIdentity` / ADR 0005 — binding from auth only.
   - Evidence: LiNKbrain auth forbidden keys; CaptureBatchInput optional overrides are probes/reject path.
   - Authority: contract requirement.

## Tests and Verification

| Suite                                                                                                                                                                          | Result                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `extensions/linkbrain/capture-contract.test.ts` + `capture.test.ts` + `runtime.test.ts` + `transport.test.ts` + `lifecycle.test.ts` + `machine-token-facade-lifecycle.test.ts` | PASS — 6 files / 76 tests     |
| `extensions/linkbrain/fake/brain-fake.test.ts` + `feature-flags-drain.test.ts` + `brain-capture-drain-canary.receipt.test.ts` + `registered-plugin.test.ts`                    | PASS — 4 files / 15 tests     |
| `test/helpers/link-domain-fakes/integrated-brain-skills.test.ts` + `phase6-mandatory-matrix.test.ts` + `phase6-perf-baseline.test.ts`                                          | PASS — 3 files / 24 tests     |
| Combined focused + bounded broader                                                                                                                                             | **13 files / 115 tests PASS** |
| `git diff --check` + oxfmt                                                                                                                                                     | clean                         |
| Live Lisa / stage / port 18790 / cloud / Supabase                                                                                                                              | **Not run** (forbidden)       |

## Problems and Blockers

- Prior run interrupted by unrelated Shadcn MCP hang only; code WIP preserved and verified.
- Integration/merge not authorized by this session.

## Uncommitted Changes

- none after closeout commit (this session's code + docs). Pre-existing `stash@{0}: On main: wip-auth-unrelated` untouched. Other worktrees untouched.

## Risks and Unknowns

- Pre-contract durable buffers without `acceptedAtMs` fall back to `updatedAtMs` (stable per record, but not original accept time). Acceptable migration for unreleased Stage-2 wiring.
- Fixture package aggregate changed; Brain countersign of the new aggregate is **not** claimed — shape mirror only; do not treat as owner countersign refresh.
- No live canary re-run from this lane; post-merge stage proof remains operator-owned.

## Remaining Work

- Carlos/Orchestrator review; optional PR; merge only with explicit authorization.
- After land: authorized stage canary rewrite proof (not this agent; do not self-approve).

## Exact Next Action

- Orchestrator: refresh `docs/current-status.md` from this completed session. Do not merge without Carlos authorization. Do not touch live Lisa/stage from this branch.

## Questions for Carlos

- none

## Questions for the Orchestrator or Next Agent

- Do not self-approve integration. Confirm whether a PR against `development` / WP-0 release branch is desired next.

## Confidence

97% — repo contract + tests verified against LiNKbrain source; live Brain MCP round-trip not re-proven here.

## Amendments

- PENDING: record ending commit SHA after commit/push.
