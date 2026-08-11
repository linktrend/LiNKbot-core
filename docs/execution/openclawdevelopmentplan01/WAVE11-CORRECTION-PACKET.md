# Wave 11 correction packet — Phase 14 (bounded)

**Recorded:** 2026-07-29 Asia/Taipei
**Started from:** `1ccf01dd02c1cdde825a5cf1432de650cd32fa3c`
**Correction commit:** `6c65a0b91a8ec01d49037e84a9f8103b660cc718`
**Exact clean tip:** branch tip after tip-record (`git rev-parse HEAD` on this branch after push; tip-record is docs-only)
**Agent:** Cursor Grok 4.5 High
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft — do not merge)

> OpenClaw Codex must re-verify against the pushed HEAD. This packet does **not** claim Phase 14 complete. Owner countersigns are **not** requested until Codex confirms the final head.

## Corrections

| #   | Deficiency                                                   | Correction                                                                                                                                     | Evidence                                                                                                       |
| --- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | plugin-test-api missing unregister                           | Added no-op + `satisfies` shape; type/runtime test                                                                                             | `src/plugin-sdk/plugin-test-api.ts`; `plugin-test-api.test.ts`                                                 |
| 2   | Core test deep-imported extension src                        | Core fixtures only in agents MCP test; Brain/Skills registration proofs in extension scope; coexistence uses `plugin-sdk/channel-test-helpers` | `agent-bundle-mcp-runtime.mcp-tool-filter.test.ts`; extension registration tests; `native-coexistence.test.ts` |
| 3   | Incomplete §13.3 / grouped phases                            | 384 atomic rows; Phases 7–12 separate; validator rejects missing/duplicate/grouped/invalid                                                     | `section-13.3/*`; check script + tests                                                                         |
| 4   | `readonly string[]` vs `McpServerToolFilterResolved.include` | Feature-flag builders return mutable `{ include: [...include] }`                                                                               | `extensions/linkbrain/src/feature-flags.ts`; `extensions/linkskills/src/feature-flags.ts`                      |

## Validation (local; crabbox Testbox unavailable)

- Focused MCP / plugin-test-api / boundary / ledger tests PASS
- Adapter suite **33 files / 207 tests** PASS
- Boundary: src / relative-outside-package / test-helper clean
- §13.3 ledger validator **384/384**
- `node scripts/run-tsgo.mjs -p tsconfig.core.json` / `tsconfig.extensions.json` PASS
- `OPENCLAW_CHECK_CHANGED_REMOTE_CHILD=1 pnpm check:changed -- <touched>` PASS after oxfmt
- `git diff --check` clean
- Fixture aggregates unchanged (Brain `4493f714…` / Skills `20316371…`)

## Explicit non-claims

- No merge; no hosted CI/Bugbot poll; no Lisa/Platform live; no Phases 7–12 start
- No owner countersign request this wave
- No Phase 14/15 self-certification

## Codex ask

Re-verify tip. Confirm fixture aggregates unchanged. Accept or revise §13.3 classifications. Owners countersign only after that confirmation.
