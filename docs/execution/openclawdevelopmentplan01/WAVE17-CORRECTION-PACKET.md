# Wave 17 correction packet — Phase 13 coverage/evidence (docs/tooling only)

**Recorded:** 2026-07-29 Asia/Taipei
**Started from:** `098abb436fabfa35a058c1447510fdffce708346`
**Correction commit:** `d41eb50435a7425610b0465c6f0929a7fa13a08e`
**Exact clean tip:** `d41eb50435a7425610b0465c6f0929a7fa13a08e` (tip-record docs-only if needed; authoritative `git rev-parse HEAD`)
**Agent:** Cursor Grok 4.5 High
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft — do not merge)

> **Role correction:** Grok owns the Phase-13 coverage/evidence index only. Grok must **not** assign or generate the seven Phase-14 conformance classifications (`IAP` / `INPL` / `PART` / `OMIT` / `DIFF` / `BLOCK` / `OUT`). OpenClaw Codex owns those evidence-driven classifications and the Phase-14 verification report. Owner countersigns are **not** requested until Codex confirms the resulting final head.

## Scope

Documentation/tooling only. No runtime behavior change. Fixture bytes unchanged. No merge, CI/Bugbot poll, Lisa mutation, live Platform contact, or Phases 7–12 start.

## Corrections

| #   | Deficiency                                                                                  | Correction                                                                                           | Evidence                                                                                   |
| --- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | Grok tooling emitted provisional seven-classifications                                      | Removed classification generation; ledger/inventory carry Grok completion claims only                | no `classification` column; inventory `version: 4` without `classifications`               |
| 2   | Naive comma/semicolon/sentence splitting created noun fragments                             | `splitAtomicObligations` returns one cleaned item; `splitPlanList` unused by extraction              | no `credentials`/`cron`/`migration` fragments; `isFragmentedPlanLabel` rejects them        |
| 3   | Observational baseline / hierarchy rows treated as requirements without reviewed exclusions | Exact-line `DESCRIPTIVE_EXCLUSIONS` (22) with fingerprints + reason codes                            | inventory `descriptive_exclusions`; validator prints review list                           |
| 4   | Blanket reused evidence strings for “implemented” claims                                    | Default `not_claimed`; implemented only with specific `[plan-item:<id>]` evidence; reuse rejected    | 13 evidence-mapped implemented claims (Phase 0 tooling)                                    |
| 5   | Focused test expected observational bullet → requirement                                    | Test now registers observational exclusion; unregistered observational still fail-closed requirement | updated Vitest cases                                                                       |
| 6   | Phase-14 index presented Grok classifications as provisional truth                          | Regenerated Phase-13 coverage/evidence index; Phase-14 index redirected to Codex ownership           | `PHASE-13-COVERAGE-EVIDENCE-INDEX.md`; updated `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md` |

## Semantic extraction rules (locked)

- Frontmatter, document titles, table headers, and reviewed descriptive baseline observations are **not** requirements.
- One Markdown bullet, numbered step, table requirement row, named test, gate, risk, evidence field, rollback item, or DoD statement = **one** item unless the source itself contains separately enumerated sub-items (nested bullets / explicit enumerated clauses only — **not** punctuation heuristics).
- Reviewed descriptive exclusions require exact fingerprints + reason codes.

## Exact-line descriptive exclusions (reviewed)

**Count: 22**

| Reason code family                                              | Count | Reason summary                       |
| --------------------------------------------------------------- | ----: | ------------------------------------ |
| Section 2 frozen-input source hierarchy metadata row            |     6 | Source-hierarchy table rows L48–L53  |
| Section 5.1 sanitized OpenClaw capability inventory observation |     8 | Baseline inventory bullets L109–L116 |
| Section 5.2 sanitized Lisa baseline observation                 |     8 | Lisa baseline bullets L124–L131      |

## Machine inventory (Grok Phase-13; no Codex classifications)

| Field                           | Value                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Plan SHA-256                    | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`                                          |
| Requirement items               | **765**                                                                                                     |
| Coverage rows                   | **1336**                                                                                                    |
| Descriptive exclusions          | **22**                                                                                                      |
| Evidence-mapped (`implemented`) | **13**                                                                                                      |
| Grok claims                     | `not_claimed` 560 · `blocked` 126 · `outside_ownership` 66 · `implemented` 13                               |
| Inventory version               | **4** (`owner_role=OpenClaw_Grok_Phase13_coverage_evidence`, `classification_owner=OpenClaw_Codex_Phase14`) |
| Ledger columns                  | `id,kind,item,owner,evidence_location,completion_claim,note,anchor,line,fingerprint`                        |

## Validation

- `node scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs` → **765/765** OK
- Focused ledger tests PASS (**20**)
- `node --check` on extractor + validator OK
- `git diff --check` clean
- Fixture aggregates unchanged (method: SHA-256 of sorted `{file_sha256}  {rel}` lines **with trailing newline**):
  - Brain `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` (75 JSON)
  - Skills `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` (71 JSON)
- Runtime trees (`extensions/linkbrain`, `extensions/linkskills`, helpers) byte-identical vs start HEAD for this wave’s scope
- Crabbox/Testbox `check:changed` unavailable locally (`crabbox` sanity failed); trusted local focused proof used

## Explicit non-claims

- No Codex seven-classifications assigned or generated by Grok
- No merge; no hosted CI/Bugbot poll; no Lisa/Platform live; no Phases 7–12 start
- No owner countersign request this wave
- No Phase 14/15 self-certification
- Phase-14 runtime/fixture work from prior waves preserved unchanged

## Codex ask

Independently assign the seven §13.3 classifications from the Phase-13 coverage/evidence index + machine artifacts at the pushed HEAD. Issue the Phase-14 verification report. Confirm plan SHA, **765** requirement items, **22** descriptive exclusions, **13** evidence-mapped implemented claims, and fixture aggregates. Owners countersign only after that confirmation.
