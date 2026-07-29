# Plan §13.3 classification / evidence index — provisional for Codex Phase 14
**Recorded:** 2026-07-29 Asia/Taipei (wave 12)
**Branch tip:** tip after tip-record (`git rev-parse HEAD` after push)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`). **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 12):** every plan-derived atomic item has exactly **one** permitted classification. Combined statuses (`INPL/BLOCK`, `OUT/consume`, `INPL/PART`) are forbidden. Phases 7–12 remain separate title/work/exit/rollback rows. Inventory is generated from the plan (or must match plan extraction); hand-maintained mirror rows are rejected.

Legend: `IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`

## Machine-validated artifacts

| Artifact | Path |
| --- | --- |
| Frozen plan (authority) | `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` |
| Plan-derived inventory | `section-13.3/inventory.json` (`authority: frozen_plan`) |
| Complete ledger rows | `section-13.3/ledger.csv` |
| Extractor | `scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs` |
| Validator | `scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs` |
| Validator tests | `test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts` |

**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`
**Extracted item count:** **413**
**Kinds:** `cross_plan_gate` 11 · `task` 141 · `deliverable` 24 · `exit_gate` 16 · `rollback` 21 · `test` 80 · `evidence_requirement` 62 · `gate` 13 · `risk` 6 · `dod` 39

## Explicit non-claims

- No seven-value classification is **accepted** here (rows are provisional Grok judgments for Codex).
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested until Codex confirms final head + aggregates.
- Validator proves plan-authority structural completeness only; Codex owns semantic acceptance.

## Sampling (full set is ledger.csv)

| id | kind | classification | item |
| --- | --- | --- | --- |
| `phase.0.title` | `task` | `INPL` | Phase 0: Approval, Snapshot, and Ownership Freeze |
| `phase.5.exit_gate` | `exit_gate` | `INPL` | fake-backed MCP and auth suites… |
| `phase.7.title` | `task` | `BLOCK` | Phase 7: Platform Stage Readiness Gate |
| `phase.8.title` | `task` | `BLOCK` | Phase 8: Brain Stage Shadow and Write Canary |
| `phase.14.title` | `task` | `OUT` | Phase 14: Independent OpenClaw Codex Plan-Conformance Verification |
| `cross_plan_gate.5` | `cross_plan_gate` | `INPL` | OpenClaw implementation-ownership gate… |
| `cross_plan_gate.1` | `cross_plan_gate` | `BLOCK` | Platform identity and credential gate… |
| `dod.1` | `dod` | `INPL` | [Architecture and ownership] Lisa maps to one canonical… |
