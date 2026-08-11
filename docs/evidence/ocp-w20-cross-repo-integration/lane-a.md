# OCP-W20 Lane A — sessions_wait + cross-repo PACI contract

- **Lane:** A
- **Model:** cursor-grok-4.5-high
- **Worktree:** `ocp-w20-cross-repo-integration-cli`
- **Branch:** `ocp-w20-cross-repo-integration-cli`
- **Base SHA (verified, no drift):** `3169119fb697fa28cc6d2c244231729a8206e68d`
- **Scope:** candidate-only; no live Lisa / credentials / cloud / merge / promote / deploy
- **Date (Asia/Taipei):** 2026-08-01

## 1. sessions_wait wake contract

`src/agents/tools/sessions-wait-tool.ts` (unchanged vs reentry tip; SHA-256
`9b87e0e9b6f502e5d0e1e34a5c462682b1c196839518fd72bc7d9b4e80917b78`):

| Check                 | Evidence                                                                |
| --------------------- | ----------------------------------------------------------------------- |
| Registry persist wake | imports + calls `onSubagentRegistryPersisted(check)` (L3, L295)         |
| Single deadline timer | one `setTimeout(onDeadline, …)` (L296); cleared in `finish`             |
| No polling            | no `setInterval`; description forbids poll of `sessions_list`/`history` |
| No `sessions_yield`   | description explicitly forbids calling `sessions_yield` (L315)          |
| Settled once          | `settled` guard unsubscribes + clears timer + removes abort listener    |

## 2. Prior-input reconciliation (ancestors of base; no merges)

| Input                        | SHA                                        | Relationship to base | sessions_wait surface                                                                                                                          |
| ---------------------------- | ------------------------------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| PR #38 head                  | `3c8dbf9f5741cad1d1cd50d88b260be48dfa97e5` | ancestor of base     | **path absent** on that tip (`git cat-file` fatal: exists on disk but not in tree) — PACI/docs lineage, not wait-tool source                   |
| `issue/ocp-acp-wait-reentry` | `0675755d170aaa264dac898081cc10d58af017a4` | ancestor of base     | **tool source byte-identical** to current HEAD; HEAD already carries +96 test LOC (deadline timer, race, duplicate wake, abort) beyond reentry |

PR #38 and reentry are **not** ancestors of each other; both are ancestors of base independently. No branch merge performed.

## 3. Test strengthenings (Lane A)

Added in `src/agents/tools/sessions-wait-tool.test.ts`:

1. **No bearer/token auth field invention** — child result/error may contain bearer-ish text; wait envelope keys remain only `completed`/`pending` (no `access_token`, `client_assertion`, `Authorization`).
2. **Wake shape** — parked wait registers exactly one registry listener; `setInterval` never called; deadline settles via single timer.

Pre-existing coverage retained: cancel/abort, duplicate wake, deadline, race-with-deadline, re-entry `firstObservation`, collector/owner rejection, no-yield contract text.

## 4. Cross-repo contract / fixture (READ-ONLY pins)

| Repo                                               | Pin HEAD (verified)                        | Envelope                                                                              | Schema SHA-256                                                     | Fixture SHA-256s                              |
| -------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| LiNKplatform                                       | `421a35e97bc302be0f5e1f196d0a5e8d132f6fd8` | `platform.auth-token-envelope/0.1.0`                                                  | `7173b9f9bca59ce8a0e3e3dc2b78b680dd07fdd2451215e3ecd97ff3dd463eed` | match paci-fake README table (all 7 fixtures) |
| LiNKbrain (`brain-repin-diffcheck-correction-2`)   | `a5bc9fe13f58374e3e5267c7352b1c342d6171c1` | pin package `PLATFORM_PACI_SOURCE_HEAD` = `421a35e…`; schema/content hashes identical | same                                                               | N/A (pin package)                             |
| LiNKskills (`skills-repin-certified-platform-cli`) | `35d528f510cfb41bfab9ee306556dcd7a495ff16` | `PLATFORM_HEAD_PACI` / docs = `421a35e…`; envelope `0.1.0`                            | same                                                               | N/A                                           |

**Compatibility verdict:** compatible. Certified Platform candidate is a provenance-only descendant of freeze `0455846487d0…` with byte-identical schema + fixtures. Candidate ≠ live PACI issuer (Skills/Brain docs agree).

OpenClaw `test/helpers/paci-fake/**` docs/comments updated to record certified pin `421a35e…` alongside freeze; **no behavioral/code logic change** in the fake runtime.

No `extensions/linkbrain/**` or `extensions/linkskills/**` candidate code edits required.

## 5. Focused local proof

Deps: this worktree had no `node_modules`; temporarily symlinked
`../ocp-w10-independent-cli-v2/node_modules` (same base SHA) for proof, then removed.

| Command                                                                                                                                              | Result                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `node scripts/run-vitest.mjs src/agents/tools/sessions-wait-tool.test.ts`                                                                            | **13 passed** (1 file)  |
| `node scripts/run-vitest.mjs test/helpers/paci-fake/paci-fake.test.ts`                                                                               | **16 passed** (1 file)  |
| `node scripts/run-vitest.mjs src/agents/machine-token.test.ts src/agents/machine-token-fetch.test.ts src/agents/mcp-transport.machine-token.test.ts` | **31 passed** (3 files) |
| `node scripts/run-vitest.mjs extensions/linkbrain/runtime.test.ts extensions/linkskills/runtime.test.ts`                                             | **17 passed** (2 files) |

## 6. Lane A changed paths

- `src/agents/tools/sessions-wait-tool.test.ts` (strengthen cancel/dup/deadline/leak/wake proofs)
- `test/helpers/paci-fake/README.md` (certified pin documentation)
- `test/helpers/paci-fake/constants.ts` (certified pin documentation)
- `test/helpers/paci-fake/server.ts` (certified pin documentation)
- `docs/evidence/ocp-w20-cross-repo-integration/lane-a.md` (this file)

**Not modified by Lane A:** `sessions-wait-tool.ts` production source; `extensions/linkbrain/**`; `extensions/linkskills/**`; machine-token production sources; linkbots/lisa; session records; release-graph.

## 7. Blockers

None for Lane A candidate scope. Live PACI issuer / stage credentials remain out of scope (candidate ≠ live).

## 8. Result

**passed**
