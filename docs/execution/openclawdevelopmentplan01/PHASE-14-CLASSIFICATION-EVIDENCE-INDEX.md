# Plan §13.3 classification evidence index — Codex-owned (Phase 14)

**Recorded:** 2026-07-29 Asia/Taipei (wave 17 role correction)
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Authority:** Frozen plan bytes (`docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, SHA-256 `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`)

> **Ownership split (wave 17):**
> - **Grok** owns the Phase-13 coverage/evidence inventory only — see `PHASE-13-COVERAGE-EVIDENCE-INDEX.md` and `section-13.3/{inventory.json,ledger.csv}`.
> - **OpenClaw Codex** owns the seven evidence-driven classifications (`IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`) and the Phase-14 verification report.
> Grok tooling **must not** generate or store those seven values. Prior provisional classification columns are retired.

## Machine inputs for Codex (no classifications)

| Artifact | Path | Notes |
| --- | --- | --- |
| Coverage/evidence index | `PHASE-13-COVERAGE-EVIDENCE-INDEX.md` | Grok-owned; no seven-classifications |
| Inventory | `section-13.3/inventory.json` | `version: 4`; `classification_owner=OpenClaw_Codex_Phase14` |
| Ledger | `section-13.3/ledger.csv` | columns: id, kind, item, owner, evidence_location, completion_claim, note, anchor, line, fingerprint |
| Wave 17 packet | `WAVE17-CORRECTION-PACKET.md` | extraction + evidence-quality correction |

**Requirement-item count:** **765**
**Descriptive exclusions:** **22**
**Evidence-mapped implemented claims (Grok):** **13**
**Coverage rows:** **1336**

## Classification status

| Status | Value |
| --- | --- |
| Grok-generated classifications | **none** (removed) |
| Codex-assigned classifications | **pending independent Phase-14 verification** |

Legend (Codex only): `IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`

## Explicit non-claims

- This file does not certify Phase 14 complete.
- Grok `completion_claim` values (`implemented` / `blocked` / `outside_ownership` / `not_claimed`) are **not** §13.3 classifications.
- No merge; no owner countersign request until Codex confirms the final head after classification.
