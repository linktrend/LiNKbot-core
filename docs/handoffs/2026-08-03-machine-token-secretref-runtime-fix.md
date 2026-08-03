# Handoff — machine-token SecretRef runtime materialization fix

## Session Metadata

| Field            | Value                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent / Grok 4.5 High                                                                                                                       |
| Session ID       | cursor-local-mac-mini-feature-machine-token-secretref-runtime-fix-20260803-1450                                                                          |
| Orchestrator key | cursor-local-mac-mini-desktop-workspace-orchestrator-20260723-1539                                                                                       |
| Objective        | Fix live Lisa-stage defect: linkbrain/linkskills fail plugin load with `machineToken.clientAssertionKeyRef: must be object` after valid SecretRef config |
| Scope            | Plugin secretInputs contract + regression test; no live Lisa/stage/cloud/GSM/Tailscale/runtime                                                           |
| Started          | 2026-08-03 14:50 Asia/Taipei                                                                                                                             |
| Ended            | 2026-08-03 Asia/Taipei                                                                                                                                   |
| Starting branch  | `dev/cloudcursor/OCP-MACHINE-TOKEN-SECRETREF-RUNTIME-FIX`                                                                                                |
| Ending branch    | `dev/cloudcursor/OCP-MACHINE-TOKEN-SECRETREF-RUNTIME-FIX`                                                                                                |
| Starting commit  | `26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6`                                                                                                               |
| Ending commit    | `7174ee3cba8c94edd85c7d44317fa59f5dbb64aa` (content tip; this amendment docs-only)                                                                       |
| Starting status  | clean at exact base SHA                                                                                                                                  |
| Ending status    | committed + pushed; no merge                                                                                                                             |

## Summary

Root cause: linkbrain/linkskills manifests declared `machineToken.clientAssertionKeyRef` under `configContracts.secretInputs` with `expected: "string"`. Gateway `prepareSecretsRuntimeSnapshot` therefore materialized the file SecretRef into a PEM string before `validatePluginConfig`. Plugin schemas require a SecretRef object → TypeBox `must be object`. Static config validation never ran secrets prepare, so it accepted the object.

Fix: remove that path from both plugins' `secretInputs` so the SecretRef remains an object through plugin validation/registration. Host `resolveKeyPem` / `resolveConfiguredSecretInputString` still resolve PEM only at acquire time. Credential SecretInputs (`ingestionCredential` / `skillsCredential`) remain string-materialized.

## Files Inspected

- `src/secrets/runtime.ts`, `runtime-config-collectors-plugins.ts`, `runtime-shared.ts`
- `src/plugins/plugin-runtime-activation.ts`, `registry-api.ts`, `loader-shared.ts`, `manifest.ts`
- `extensions/linkbrain|linkskills` config/manifest/transport
- PACI machine-token handoffs / templates; docs/plugins/manifest.md secretInputs contract

## Files Created

- `src/secrets/runtime-machine-token-plugin-secretref.integration.test.ts`
- `docs/agent-sessions/active/cursor-local-mac-mini-feature-machine-token-secretref-runtime-fix-20260803-1450.md` (moved to completed on closeout)
- `docs/handoffs/2026-08-03-machine-token-secretref-runtime-fix.md`

## Files Modified

- `extensions/linkbrain/openclaw.plugin.json` — drop `machineToken.clientAssertionKeyRef` from secretInputs
- `extensions/linkskills/openclaw.plugin.json` — same
- `extensions/linkbrain/manifest.test.ts` — contract guard
- `extensions/linkskills/manifest.test.ts` — contract guard

## Files Deleted

- none

## Commands Run

- Base verify: `git rev-parse` on `origin/issue/ocp-openclawdevelopmentplan01` → `26d2a9e6ee0f796bbb2a40b28dbffb78b6cd1ad6`
- Branch: `dev/cloudcursor/OCP-MACHINE-TOKEN-SECRETREF-RUNTIME-FIX` in worktree `ocp-machine-token-secretref-runtime-fix`
- `node scripts/run-vitest.mjs` focused suites (see Tests)
- `git diff --check`; `oxfmt` on touched TS files

## Decisions

1. **Remove secretInputs path rather than add a new expected mode**
   - Reason: `expected` currently only supports `"string"` materialization into config; machine-token keys must stay SecretRef objects by design. Host already resolves at acquire.
   - Evidence: live error + collector apply path; schema `$ref: secretRef`; host `resolveKeyPem`.
   - Impact: doctor/configure no longer treat assertion key as string SecretInput target (correct — it is SecretRef-only).
   - Authority: implementation judgment within Carlos-assigned defect scope.

## Tests and Verification

| Suite                                                                                    | Result                        |
| ---------------------------------------------------------------------------------------- | ----------------------------- |
| `src/secrets/runtime-machine-token-plugin-secretref.integration.test.ts`                 | PASS (5)                      |
| `extensions/linkbrain/manifest.test.ts` + `linkskills/manifest.test.ts`                  | PASS (16)                     |
| `src/plugins/loader.machine-token-generation.test.ts` + registry-api machine-token tests | PASS (35)                     |
| `src/agents/machine-token-host.test.ts`                                                  | PASS (25)                     |
| `src/secrets/runtime-config-collectors-plugins.test.ts`                                  | PASS (17)                     |
| `extensions/linkbrain                                                                    | linkskills/transport.test.ts` | PASS (49) |
| Live Lisa / stage gateway restart                                                        | **Not run** (forbidden)       |

## Problems and Blockers

- none for repo fix. Live stage still needs operator restart after this lands to clear the observed plugin invalid-config errors.

## Uncommitted Changes

- none after commit (session docs + code included).

## Risks and Unknowns

- Operators who relied on secrets-prepare rewriting `clientAssertionKeyRef` to a string would have been broken already (schema reject). No intended compat for that path.
- Secret target registry / doctor plan entries derived from secretInputs no longer include this path (desired).

## Remaining Work

- Merge/land when Carlos authorizes (not part of this session).
- After land: restart lisa-stage gateway to confirm plugins load with existing SecretRef config (operator-owned; not this agent).

## Exact Next Action

- Orchestrator/Carlos: review branch + optional PR; authorize merge separately. Do not touch live Lisa from this branch.

## Questions for Carlos

- none

## Questions for the Orchestrator or Next Agent

- After merge, schedule authorized lisa-stage gateway restart only (no config rewrite needed if SecretRefs already valid).

## Confidence

98%

## Amendments

- 2026-08-03: recorded ending commit SHA `7174ee3cba8c94edd85c7d44317fa59f5dbb64aa` after push (session owner).
