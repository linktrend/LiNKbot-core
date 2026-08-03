# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Cloud Agent / Cursor / mac-mini / agents-window / cloud / feature                             |
| Session ID       | cursor-cloud-mac-mini-feature-machine-facade-reload-fix2-20260803-1842                               |
| Orchestrator key | cursor-mac-mini-agents-window-orchestrator                                                           |
| Objective        | Second correction: same-generation service.stop must not unregister shared live machine-token facade |
| Scope            | Repo code only; no stage/live/cloud/Supabase/GCP/IDE/VPS                                             |
| Started          | 2026-08-03 18:42 Asia/Taipei                                                                         |
| Ended            | 2026-08-03 19:05 Asia/Taipei                                                                         |
| Starting branch  | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                      |
| Ending branch    | `dev/cloudcursor/OCP-MACHINE-FACADE-RELOAD-FIX`                                                      |
| Starting commit  | `48ffa273a1d2f2202107d40163eb2fae7ecd9951`                                                           |
| Ending commit    | (see tip after push)                                                                                 |
| Starting status  | clean at start SHA                                                                                   |
| Ending status    | second facade ownership fix + regressions                                                            |

## Summary

Root cause: `facade.unregister()` still force-retired the live generation. On cache-hit reuse reload (same registry/generation), `previousPluginServices.stop()` called unregister and killed the shared live facade before `startPluginServices` restarted the same closures. First fix only moved unregister out of `gateway_stop` and generation-scoped cross-generation cleanup — insufficient for same-generation stop/restart.

Fix: host service lease around `startPluginServices`. While leases > 0, plugin `unregister` is a no-op. Lease release does not retire. Owner force-retire remains `publish` / `destroy` / `unregisterMachineTokenFacadesForPlugin` / gateway-close `retireActivePluginRuntimeMachineTokenOwnership`.

## Files Inspected

- `src/agents/machine-token-host.ts`, types, host tests
- `src/plugins/registry-api.ts`, services, loader, activation
- `src/gateway/server.impl.ts`, server-close, startup-post-attach
- `extensions/linkbrain/**`, `extensions/linkskills/**`
- Prior handoff/session for first fix

## Files Created

- `docs/agent-sessions/active/cursor-cloud-mac-mini-feature-machine-facade-reload-fix2-20260803-1842.md`
- this handoff

## Files Modified

- `src/agents/machine-token-host.ts`
- `src/agents/machine-token-types.ts`
- `src/agents/machine-token-host.test.ts`
- `src/plugins/services.ts`
- `src/plugins/plugin-runtime-activation.ts`
- `src/plugins/loader.machine-token-generation.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server.impl.ts`
- `extensions/linkbrain/index.ts`
- `extensions/linkskills/index.ts`
- `extensions/linkbrain/machine-token-facade-lifecycle.test.ts`
- `extensions/linkskills/machine-token-facade-lifecycle.test.ts`
- `docs/plugins/sdk-machine-token.md`

## Files Deleted

None.

## Commands Run

- Git coordination inspection
- Focused Vitest suites (machine-token host/loader/registry/services, gateway close/startup, linkbrain/linkskills) — **472 passed** across shards
- `oxfmt` on touched files
- `git diff --check`

## Decisions

1. **Lease + owner-only force-retire** — evidence: cache-hit reuse stop/restart shares one live generation; plugin unregister cannot know shutdown vs restart. Carlos authorized ownership/lease fix shape.
2. **Keep plugin `unregister` call sites** — under lease they are inert; without lease they remain authoritative for standalone/test embeddings.
3. **Gateway close owner retire after plugin-services stop** — preserves shutdown cleanup without relying on post-lease plugin unregister.

## Tests and Verification

Passed focused suite totaling **472** tests (prior MT/brain/skills/gateway surfaces + new lease regressions), including:

- `src/agents/machine-token-host.test.ts` (lease protection + replacement)
- `src/plugins/loader.machine-token-generation.test.ts` (cache-hit reuse brain+skills service.stop/restart)
- `extensions/linkbrain|linkskills/machine-token-facade-lifecycle.test.ts`
- full `extensions/linkbrain` + `extensions/linkskills`
- gateway close / startup-post-attach
- machine-token host/network/fetch/discovery/assertion/fingerprint/MCP/SDK/SecretRef

Not tested: live/stage gateway restart (explicitly out of scope).

## Problems and Blockers

None for the authorized repo fix.

## Uncommitted Changes

Session work listed above (to be committed). Unrelated `stash@{0}` preserved.

## Risks and Unknowns

- Residual Mechanism A risk: a competing activating load that **publishes a replacement** (or reconciles linkbrain away) while an old service still holds a retired generation remains fail-closed by design. This fix targets same-generation unregister from duplicate/stale stop.
- Stage re-proof required after deploy.

## Remaining Work

- Push tip; Orchestrator refresh of `docs/current-status.md`
- Authorized stage canary after merge/deploy

## Exact Next Action

Push branch tip; request stage re-proof of Brain restart drain.

## Questions for Carlos

None for the code fix. Stage re-proof after deploy.

## Questions for the Orchestrator or Next Agent

Please refresh dashboard after this handoff lands.

## Confidence

97% for same-generation unregister/lease root cause and fix. Residual: stage cold-start may also involve competing rematerialize (Mechanism A); lease fix does not change publish-replacement semantics.

## Amendments
