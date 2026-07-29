# Plan §13.3 classification / evidence index — provisional for Codex Phase 14
**Recorded:** 2026-07-29 Asia/Taipei (wave 15)
**Branch tip:** tip after tip-record (`git rev-parse HEAD` after push)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`). **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 15):** every plan-derived atomic item has exactly **one** permitted classification. Combined statuses are forbidden. Inventory is generated from the plan with fail-closed source coverage (`version: 3` + `coverage[]` with machine-checkable `reasonCode` / `sourceContext` / `sectionPolicy`). Implementation-bearing sections default list/numbered/table/child paragraphs to requirements. `non_requirement` on those constructs is allowed only via an explicit descriptive allowlist (`DESCRIPTIVE_ALLOWLIST` + `allowlistRule` + `sourceAnchor`). Soft inherited `REQUIRED` does not override that allowlist. Hand-maintained mirror rows, `NARRATIVE_CONTEXT` list/table items, and unhandled constructs are rejected.

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
**Extracted item count:** **968**
**Coverage rows:** **1336**
**Kinds:** `task` 329 · `evidence_requirement` 280 · `gate` 154 · `test` 80 · `dod` 39 · `deliverable` 24 · `rollback` 21 · `exit_gate` 16 · `cross_plan_gate` 11 · `assumption` 8 · `risk` 6

## Explicit non-claims

- No seven-value classification is **accepted** here (rows are provisional Grok judgments for Codex).
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested until Codex confirms final head + aggregates.
- Validator proves plan-authority structural completeness + fail-closed coverage only; Codex owns semantic acceptance.

## Sampling (full set is ledger.csv)

| id | kind | classification | item |
| --- | --- | --- | --- |
| `list.10_2_skills_lifecycle_collection.404.1` | `task` | `INPL` | filter by the exact Skills tool namespace… |
| `list.12_1_plugin_configuration_shape.472.3` | `task` | `INPL` | credential `SecretRef` for that endpoint |
| `list.12_3_change_application.504.5` | `task` | `INPL` | every change has a same-domain rollback step… |
| `list.17_1_per_domain_health.1052.1` | `evidence_requirement` | `INPL` | enabled/disabled/degraded state |
| `list.17_3_honest_degraded_states.1077.1` | `evidence_requirement` | `INPL` | Brain unavailable:… |
| `list.18_security_and_secret_handling.1084.1` | `gate` | `INPL` | Platform owns issuance… |
