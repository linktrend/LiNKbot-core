# Plan §13.3 classification / evidence index — provisional for Codex Phase 14
**Recorded:** 2026-07-29 Asia/Taipei (wave 14)
**Branch tip:** tip after tip-record (`git rev-parse HEAD` after push)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`). **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 14):** every plan-derived atomic item has exactly **one** permitted classification. Combined statuses are forbidden. Inventory is generated from the plan with fail-closed source coverage (`version: 3` + `coverage[]` with machine-checkable `reasonCode` / `sourceContext`). Inherited obligation context and structural requirement-bearing sections default list children to requirements. Hand-maintained mirror rows and unhandled constructs are rejected.

Legend: `IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`

## Machine-validated artifacts

| Artifact | Path |
| --- | --- |
| Frozen plan (authority) | `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` |
| Plan-derived inventory | `section-13.3/inventory.json` (`authority: frozen_plan`, `version: 3`) |
| Complete ledger rows | `section-13.3/ledger.csv` |
| Extractor | `scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs` |
| Validator | `scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs` |
| Validator tests | `test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts` |

**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`
**Extracted item count:** **946**
**Coverage rows:** **1336**
**Kinds:** `task` 333 · `evidence_requirement` 266 · `gate` 142 · `test` 80 · `dod` 39 · `deliverable` 24 · `rollback` 21 · `exit_gate` 16 · `cross_plan_gate` 11 · `assumption` 8 · `risk` 6

## Explicit non-claims

- No seven-value classification is **accepted** here (rows are provisional Grok judgments for Codex).
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested until Codex confirms final head + aggregates.
- Validator proves plan-authority structural completeness + fail-closed coverage only; Codex owns semantic acceptance.

## Sampling (full set is ledger.csv)

| id | kind | classification | item |
| --- | --- | --- | --- |
| `list.1_purpose_and_decision.28.1` | `task` | `INPL` | one canonical Lisa actor |
| `list.4_non_goals_and_hard_boundaries.88.1` | `gate` | `INPL` | replacing OpenClaw local memory… |
| `list.7_1_plugin_placement_and_packaging.232.3` | `task` | `INPL` | depend only on public SDK barrels… |
| `decision.resolved.1` | `gate` | `INPL` | two private bundled plugins… |
| `next_action.1` | `task` | `OUT` | assign the four repository-specific… |
| `phase.9.hard_prerequisite.1` | `gate` | `BLOCK` | Skills Cursor and Codex readiness… |
| `phase.14.title` | `task` | `OUT` | Phase 14: Independent OpenClaw Codex… |
