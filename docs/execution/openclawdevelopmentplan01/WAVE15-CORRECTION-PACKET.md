# Wave 15 correction packet — Phase 14 (docs/tooling only)

**Recorded:** 2026-07-29 Asia/Taipei
**Started from:** `54dfb0165b182fbab9a97f439322c4143d887c89`
**Correction commit:** `177134d611cb4536cd4dee3f06e42c4964db8b0c`
**Exact clean tip:** branch tip after tip-record (`git rev-parse HEAD` on this branch after push; tip-record is docs-only)
**Agent:** Cursor Grok 4.5 High
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft — do not merge)

> OpenClaw Codex must re-verify against the pushed HEAD. This packet does **not** claim Phase 14 complete. Owner countersigns are **not** requested until Codex confirms the final head.

## Scope

Documentation/tooling only. No runtime behavior change. Fixture bytes unchanged.

## Corrections

| #   | Deficiency                                                                                   | Correction                                                                                                                                 | Evidence                                     |
| --- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| 1   | Fragile requirement-detection fallback omitted implementation lists lacking modal verbs      | Fail-closed section policy: every list/numbered/table/child paragraph in implementation-bearing sections defaults to an atomic requirement | §§10.2, 12.1, 12.3, 17.1, 17.3, 18 extracted |
| 2   | Soft `NARRATIVE_CONTEXT` inferred from missing modal verbs                                   | `NARRATIVE_CONTEXT` forbidden on list/table items; descriptive non_requirements only via explicit allowlist                                | validator + focused negative test            |
| 3   | Soft inherited `REQUIRED` (“required primitives”) overrode baseline/reconciliation allowlist | Soft `REQUIRED` does not override descriptive allowlist; only strong obligation codes/language force requirements                          | §3 / §5.1 `DESCRIPTIVE_ALLOWLIST` rows       |
| 4   | Missing allowlist provenance                                                                 | Every allowed non_requirement records `allowlistRule` + `sourceAnchor`                                                                     | inventory `coverage[]`                       |
| 5   | No regression that descriptive-looking lists become requirements in implementation sections  | Mini-plan test moves identical bullets from §5.1 → §10.2 and proves requirement extraction                                                 | ledger test file                             |

## Descriptive allowlist (reviewed)

| Rule id                               | Section / construct                                  |
| ------------------------------------- | ---------------------------------------------------- |
| `frontmatter-or-meta`                 | YAML/doc frontmatter and document metadata           |
| `document-title`                      | Top-level document title context                     |
| `section-2-source-hierarchy-metadata` | §2 frozen-input priority/source hierarchy metadata   |
| `section-3-reconciliation-finding`    | §3 reconciliation findings / remaining uncertainties |
| `section-5-baseline`                  | §5 current baseline framing                          |
| `section-5.1-openclaw-baseline`       | §5.1 sanitized OpenClaw capability inventory         |
| `section-5.2-lisa-baseline`           | §5.2 sanitized Lisa baseline observations            |
| `section-5.3-platform-baseline`       | §5.3 inactive Platform environment status narrative  |

Explanatory diagrams remain structural fence coverage (`STRUCTURAL_FENCE`), not inferred narrative.

## Validation

- `node scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs` → **968/968** OK (was 946)
- Coverage rows: **1336**
- Focused ledger tests PASS (15)
- `git diff --check` clean
- Fixture aggregates unchanged (Brain `4493f714…` / Skills `20316371…`)
- Runtime trees (`extensions/linkbrain`, `extensions/linkskills`, `src`, `packages`) byte-identical vs start HEAD

## Explicit non-claims

- No merge; no hosted CI/Bugbot poll; no Lisa/Platform live; no Phases 7–12 start
- No owner countersign request this wave
- No Phase 14/15 self-certification
- Classifications in ledger.csv are provisional for Codex, not accepted

## Codex ask

Re-verify tip. Confirm plan SHA + **968** extracted items + descriptive allowlist + fixture aggregates. Accept or revise §13.3 classifications. Owners countersign only after that confirmation.
