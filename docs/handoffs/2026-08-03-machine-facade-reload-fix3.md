# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| Agent identity   | Cursor Cloud Agent / Cursor / mac-mini / cloud-agent / cloud / feature                                 |
| Session ID       | cursor-cloud-mac-mini-feature-machine-facade-reload-fix3-20260803-1916                                 |
| Orchestrator key | cursor-mac-mini-cloud-agent-orchestrator                                                               |
| Objective        | Third correction: same-ownership rematerialize must not force-retire service-held machine-token facade |
| Scope            | Repo code only; no stage/live/cloud/Supabase/GCP/IDE/VPS                                               |
| Started          | 2026-08-03 19:16 Asia/Taipei                                                                           |
| Ended            | 2026-08-03 19:31 Asia/Taipei                                                                           |
| Starting branch  | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                        |
| Ending branch    | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                        |
| Starting commit  | `4e31a626e407e1c4b8469eedeb83d0cb7fa4e85f`                                                             |
| Ending commit    | 269572682ac5e925bfaed1072e3d91fe46afbe80                                                               |
| Starting status  | clean at start SHA                                                                                     |
| Ending status    | third facade ownership fix + integration regression                                                    |

## Summary

**PASS-HOLD** (not self-approved). Stage after lease fix still deadlettered:
`Machine-token facade for plugin linkbrain is unregistered; reload must create a new facade`
after state open + repeated registrations + capture drain.

**Root cause:** Owner `publishMachineTokenFacadeGeneration` force-retires the prior live
generation (leases do not block owner publish). After services start and close over
generation A, repeated activating loads (agent runtime prewarm / config validation /
register) rematerialize with the **same ownership descriptors**, stage a new candidate,
publish it, and retire A. The running service still mints on A → unregistered →
retryable `machine_token_error` → deadletter. Fix1/2 addressed gateway_stop order and
same-generation service leases only.

**Fix:** Same-ownership rematerialize **reuses** the live generation (handle + facade)
instead of publishing a replacement. Ownership fingerprint includes operator
`bindingId` (credential fingerprints intentionally omit it) so label renames still
replace. Rollback/abandon does not destroy reused live; deactivate still force-retires
generations this registration created. Gateway-close owner retire unchanged.

**Rollback:** Revert the tip commit(s) on this branch; prior lease behavior at
`4e31a626e40` / `783e1fd46d7` returns. No schema/config migration.

## Files Inspected

- `src/agents/machine-token-host.ts` (+ types/tests)
- `src/plugins/plugin-runtime-activation.ts`, `registry-api.ts`, `registry-state.ts`, `services.ts`, `loader-runtime-load.ts`
- `src/gateway/server-startup-post-attach.ts` (agent runtime prewarm), `server.impl.ts`, `server-close.ts`
- `extensions/linkbrain/**` (service close-over facade, drain path)
- Prior handoffs fix1/fix2

## Files Created

- `src/plugins/machine-token-boot-rematerialize-drain.integration.test.ts`
- `docs/agent-sessions/active/cursor-cloud-mac-mini-feature-machine-facade-reload-fix3-20260803-1916.md`
- this handoff

## Files Modified

- `src/agents/machine-token-host.ts`
- `src/agents/machine-token-host.test.ts`
- `src/plugins/registry-api.ts`
- `src/plugins/registry-state.ts`
- `src/plugins/plugin-runtime-activation.ts`
- `src/plugins/loader.machine-token-generation.test.ts`
- `docs/plugins/sdk-machine-token.md`

## Files Deleted

None.

## Commands Run

- Git/coordination inspection
- Focused Vitest (isolated): host, loader MT generation, registry MT generation, boot rematerialize drain integration, linkbrain/linkskills lifecycle — **76 passed** across shards
- `oxfmt` on touched files
- `git diff --check`

## Decisions

1. **Reuse live generation on same ownership fingerprint** — evidence: stage open+register+drain sequence; publish ignores leases. Carlos authorized third correction beyond leases.
2. **Ownership fingerprint includes bindingId** — evidence: credential fingerprints exclude bindingId by design; label rename must still replace. Implementation judgment.
3. **Mark reused guards so deactivate still tears down owned live** — evidence: registry-api stop/deactivate test. Implementation judgment.
4. **Do not weaken token/SecretRef/SSRF/tenant isolation; keep required cleanup** — Carlos constraint.

## Tests and Verification

Passed focused suites totaling **76** tests:

- `src/agents/machine-token-host.test.ts` (30) — includes bindingId ownership match
- `src/plugins/loader.machine-token-generation.test.ts` (30) — includes same-ownership rematerialize keeps service-held facade
- `src/plugins/machine-token-boot-rematerialize-drain.integration.test.ts` (1) — boot → repeated rematerialize → drain mint → process restart → drain
- `src/plugins/registry-api.machine-token-generation.test.ts` (8)
- `extensions/linkbrain|linkskills/machine-token-facade-lifecycle.test.ts` (7)

Not tested: live/stage Mac Mini restart (explicitly out of scope this session).

## Problems and Blockers

None for the authorized repo fix.

## Uncommitted Changes

Session work listed above (to be committed). Unrelated `stash@{0}` preserved.

## Risks and Unknowns

- Residual: ownership **change** rematerialize without coordinated plugin-service restart can still retire a service-held facade by design. Gateway reload path stops/starts services; opportunistic activating loads with changed MT config remain a fail-closed edge.
- Stage re-proof required after deploy.

## Remaining Work

- Push tip; Orchestrator refresh of `docs/current-status.md`
- Authorized stage canary after merge/deploy (Carlos/ops)

## Exact Next Action

Push branch tip; request stage re-proof of Brain restart drain (second process restart + outbox drain).

## Questions for Carlos

None for the code fix. Stage re-proof after deploy.

## Questions for the Orchestrator or Next Agent

Please refresh dashboard after this handoff lands. Do not treat PASS-HOLD as self-approval.

## Confidence

96% for same-ownership rematerialize root cause and fix. Residual: stage cold-start timing of prewarm vs first drain still needs Mac Mini proof.

## Amendments
