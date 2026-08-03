# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Cloud Agent / Cursor / mac-mini / cloud-agent / cloud / feature                                |
| Session ID       | cursor-cloud-mac-mini-feature-machine-facade-reload-fix5-20260803-1951                                |
| Orchestrator key | cursor-mac-mini-cloud-agent-orchestrator                                                              |
| Objective        | Fifth correction: UTF-8 total-order ownership fingerprint sort (not localeCompare)                    |
| Scope            | Repo code only; no stage/live/cloud/Supabase/GCP/IDE Development/VPS                                  |
| Started          | 2026-08-03 19:51 Asia/Taipei                                                                          |
| Ended            | 2026-08-03 20:05 Asia/Taipei                                                                          |
| Starting branch  | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                       |
| Ending branch    | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                       |
| Starting commit  | `b7fb678252dcd2e7ac8f7e32a33408abd4bdd9f7`                                                            |
| Ending commit    | `f40f8f3cf2d65452ff2d31c3e7b8a86f94e651c8` (docs tip; fix `2581a2cd0c8570c72ac5b1729346ffa1e3ecdfa0`) |
| Starting status  | clean at Carlos-stated tip                                                                            |
| Ending status    | fifth ownership fingerprint Unicode total-order fix + regressions                                     |

## Summary

**PASS-HOLD** (not self-approved). Independent Codex audit remains HOLD authority.

**Exact vulnerability:** `compareCanonicalJson` / multi-plugin tuple sort used
`JSON.stringify(...).localeCompare(..., "en")`. Unicode collation equates
distinct binding/plugin ID forms (NFC é vs NFD e+combining acute; comparator
returns 0). `Array#toSorted` then preserves input order for ties, so reversing
otherwise-identical authorization tuples changes
`fingerprintMachineTokenGrantedRecords` / blueprint `ownershipFingerprint`.

**Fix:** Shared `compareMachineTokenCanonicalJson` uses UTF-8
`Buffer.compare` of JSON encodings — a deterministic total order. Applied to
per-binding granted-record sort and multi-plugin blueprint tuple sort.
Versioned domain separators + SHA-256 of deterministic JSON preserved. SecretRef
/ token / SSRF / cleanup / rollback paths unchanged.

**Rollback:** Revert the fix tip on this branch. Prior collision-safe JSON+hash
encoding at `b7fb678252d` / fix4 content returns. No schema/config migration.

## Files Inspected

- `src/agents/machine-token-host.ts`, host tests
- `src/plugins/plugin-runtime-activation.ts`
- Prior handoffs fix1–fix4; coordination briefing/status/active sessions

## Files Created

- `src/plugins/plugin-runtime-activation.machine-token-ownership.test.ts`
- `docs/agent-sessions/active/cursor-cloud-mac-mini-feature-machine-facade-reload-fix5-20260803-1951.md` (moved to completed/)
- this handoff

## Files Modified

- `src/agents/machine-token-host.ts`
- `src/agents/machine-token-host.test.ts`
- `src/plugins/plugin-runtime-activation.ts`
- `docs/plugins/sdk-machine-token.md`

## Files Deleted

None.

## Commands Run

- Git/coordination inspection (tip `b7fb678252d`)
- Focused Vitest shards → **81 passed** (prior 79 + 2 Unicode reorder regressions)
- Broader bounded MT/SecretRef/SDK/extensions/gateway close/startup-post-attach → **470 passed**
- `src/gateway/server-runtime-services.test.ts` → **20 passed** (one pricing-bootstrap case timed out once in a combined shard, then passed alone and on filtered retry)
- `oxfmt` on touched files; `git diff --check`

## Decisions

1. **Replace localeCompare with UTF-8 Buffer.compare for ownership tuple sorts** — evidence: NFC/NFD IDs compare equal under `en` collation; reverse input changes hash. Carlos authorized fifth correction.
2. **Share one exported host comparator for per-binding and multi-plugin paths** — keeps the total-order invariant singular. Implementation judgment.
3. **Do not change domain separator / hash version** — only sort totality; ASCII grant fingerprints unchanged vs fix4. Implementation judgment.
4. **Do not weaken SecretRef, token, SSRF, cleanup, or rollback** — Carlos constraint.

## Tests and Verification

Focused (81):

- `src/agents/machine-token-host.test.ts` (34) — includes Unicode NFC/NFD bindingId reorder + distinct ownership
- `src/plugins/plugin-runtime-activation.machine-token-ownership.test.ts` (1) — Unicode pluginId blueprint reorder
- loader MT generation + boot rematerialize drain + registry MT generation (39)
- `extensions/linkbrain|linkskills/machine-token-facade-lifecycle.test.ts` (7)

Broader (~490 combined): machine-token host/network/fetch/discovery/assertion/fingerprint/MCP + SecretRef + plugin-sdk runtime + full `extensions/linkbrain` + `extensions/linkskills` + gateway close/startup-post-attach (470) + server-runtime-services (20).

Not tested: live/stage Mac Mini restart (explicitly out of scope).

## Problems and Blockers

None for the authorized repo fix. One unrelated gateway services timeout observed once under combined load; clean on isolated rerun.

## Uncommitted Changes

None after tip commits. Unrelated `stash@{0}` preserved.

## Risks and Unknowns

- Sort order for non-ASCII IDs that previously tied under localeCompare now differs (bytewise). Same-owner rematerialize still matches for a given grant set; only pathological Unicode-tie reorder was broken before.
- Stage re-proof still required after deploy (prior Mechanism A/B residual).

## Remaining Work

- Push tip; Orchestrator refresh of `docs/current-status.md`
- Independent Codex audit (HOLD → PASS/FAIL)
- Authorized stage canary after merge/deploy

## Exact Next Action

Leave PASS-HOLD for independent Codex audit. Do not self-approve integration.

## Questions for Carlos

None for the code fix. Stage re-proof after deploy remains separate.

## Questions for the Orchestrator or Next Agent

Please refresh dashboard after this handoff lands. Do not treat PASS-HOLD as self-approval.

## Confidence

99% for localeCompare total-order root cause and fix shape. Residual: stage cold-start proof still ops-owned.

## Amendments
