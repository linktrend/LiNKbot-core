# Plan §13.3 classification / evidence index — provisional for Codex Phase 14
**Recorded:** 2026-07-29 Asia/Taipei (wave 16)
**Branch tip:** tip after tip-record (`git rev-parse HEAD` after push)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`). **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 16):** every plan-derived atomic item has exactly **one** permitted classification. Combined statuses are forbidden. Inventory is generated from the plan with fail-closed source coverage (`version: 3` + `coverage[]`). Every section is implementation-bearing. Descriptive `non_requirement` rows are permitted only via exact-line `DESCRIPTIVE_EXCLUSION` entries (fingerprint + reason + source anchor). Binding obligation language always overrides an exclusion. Section-level allowlists are forbidden. Hand-maintained mirror rows, `NARRATIVE_CONTEXT` list/table items, and unhandled constructs are rejected.

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
**Extracted item count:** **1033**
**Coverage rows:** **1336**
**Exact-line descriptive exclusions:** **0**
**Kinds:** `task` 356 · `evidence_requirement` 314 · `gate` 158 · `test` 80 · `dod` 39 · `deliverable` 24 · `rollback` 21 · `exit_gate` 16 · `cross_plan_gate` 11 · `assumption` 8 · `risk` 6

## Explicit non-claims

- No seven-value classification is **accepted** here (rows are provisional Grok judgments for Codex).
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested until Codex confirms final head + aggregates.
- Validator proves plan-authority structural completeness + fail-closed coverage only; Codex owns semantic acceptance.

## Sampling (full set is ledger.csv)

| id | kind | classification | item |
| --- | --- | --- | --- |
| `list.3_reconciliation_finding.71.3` | `task` | `INPL` | Platform environment readiness is a gate for live stage proof… |
| `list.3_reconciliation_finding.72.4` | `task` | `INPL` | Platform's domain milestone is not complete until… |
| `list.3_reconciliation_finding.74.6` | `task` | `INPL` | Skills may not begin the Lisa canary until… |
| `list.3_reconciliation_finding.80.4` | `task` | `INPL` | Brain production retention durations require Principal approval |
| `list.10_2_skills_lifecycle_collection.404.1` | `task` | `INPL` | filter by the exact Skills tool namespace… |
| `list.18_security_and_secret_handling.1084.1` | `gate` | `INPL` | Platform owns issuance… |
