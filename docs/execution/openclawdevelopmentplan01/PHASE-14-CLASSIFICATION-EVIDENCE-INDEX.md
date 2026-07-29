# Plan §13.3 classification / evidence index — provisional for Codex Phase 14
**Recorded:** 2026-07-29 Asia/Taipei (wave 13)
**Branch tip:** tip after tip-record (`git rev-parse HEAD` after push)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`). **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 13):** every plan-derived atomic item has exactly **one** permitted classification. Combined statuses (`INPL/BLOCK`, `OUT/consume`, `INPL/PART`) are forbidden. Phases 7–12 remain separate title/work/exit/rollback rows. Inventory is generated from the plan with fail-closed source coverage (`version: 3` + `coverage[]`); hand-maintained mirror rows and unhandled constructs are rejected.

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
**Extracted item count:** **697**
**Coverage rows:** **1336**
**Kinds:** `task` 188 · `evidence_requirement` 265 · `cross_plan_gate` 11 · `deliverable` 24 · `exit_gate` 16 · `rollback` 21 · `test` 80 · `gate` 39 · `assumption` 8 · `risk` 6 · `dod` 39

## Explicit non-claims

- No seven-value classification is **accepted** here (rows are provisional Grok judgments for Codex).
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested until Codex confirms final head + aggregates.
- Validator proves plan-authority structural completeness + fail-closed coverage only; Codex owns semantic acceptance.

## Sampling (full set is ledger.csv)

| id | kind | classification | item |
| --- | --- | --- | --- |
| `phase.0.title` | `task` | `INPL` | Phase 0: … |
| `phase.9.hard_prerequisite.1` | `gate` | `BLOCK` | Skills Cursor and Codex readiness gates… |
| `phase.8.window_rule` | `gate` | `BLOCK` | a Brain failure restarts only the Brain window… |
| `phase.11.sequence.1` | `task` | `BLOCK` | deploy service/binding with actor flags off |
| `phase.12.sequence.8` | `task` | `BLOCK` | complete at least three active operating days… |
| `evidence.correction_packet.1` | `evidence_requirement` | `INPL` | (correction-packet field) |
| `gate.principal.1` | `gate` | `OUT` | (Principal gate) |
| `assumption.verify.1` | `assumption` | `OUT` | (assumption to verify) |
| `verifier.role_separation.*` | `evidence_requirement` | `OUT` | verifier does not silently implement… |
| `phase.14.title` | `task` | `OUT` | Phase 14: Independent OpenClaw Codex… |
