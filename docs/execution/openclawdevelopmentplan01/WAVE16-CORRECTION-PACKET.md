# Wave 16 correction packet — Phase 14 (docs/tooling only)

**Recorded:** 2026-07-29 Asia/Taipei
**Started from:** `ffb5ea141bf744f9c8a3b31997384458b3b385a4`
**Correction commit:** `7b4be55a3dffa1ecc4e6aa0648c9f70c002efe2b`
**Exact clean tip:** branch tip after tip-record (`git rev-parse HEAD` on this branch after push; tip-record is docs-only)
**Agent:** Cursor Grok 4.5 High
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft — do not merge)

> OpenClaw Codex must re-verify against the pushed HEAD. This packet does **not** claim Phase 14 complete. Owner countersigns are **not** requested until Codex confirms the final head.

## Scope

Documentation/tooling only. No runtime behavior change. Fixture bytes unchanged.

## Corrections

| # | Deficiency | Correction | Evidence |
| - | ---------- | ---------- | -------- |
| 1 | Blanket §3 / §5 / title section allowlists over-excluded binding lines | Removed all section-level descriptive allowlisting; `classifySectionPolicy` always returns `implementation` | empty `DESCRIPTIVE_ALLOWLIST_RULES`; §3 bindings extracted |
| 2 | Descriptive exceptions were section-scoped | Exact-line exclusions only (`DESCRIPTIVE_EXCLUSIONS` + fingerprint/anchor/reason) | `matchDescriptiveExclusion`; inventory `descriptive_exclusions` |
| 3 | Soft obligation detection missed lowercase / gate / sequencing language | Case-insensitive `lineHasBindingObligation` (must/may not/require*/gate/blocked until/retention/canary/credential/rollback/evidence/…) | §3 labels present |
| 4 | Binding obligation could lose to allowlist | Binding language always overrides an exclusion | override regression test |
| 5 | No independent exclusion review surface | Validator prints exclusion list; inventory stores `descriptive_exclusions` | CLI output + inventory field |

## Exact-line descriptive exclusions (reviewed)

**Count: 0**

No frozen-plan line currently qualifies as a reviewed non-binding contextual exclusion. Every contentful list/table/child paragraph defaults to an atomic requirement. Structural machine non_requirements remain (`STRUCTURAL_*`, frontmatter, label/intro openers without binding language).

## Section 3 requirements now extracted (sample)

- Platform environment readiness is a gate for live stage proof
- Platform domain milestone not complete until OpenClaw consumer canary succeeds
- Brain may reach production before Skills
- Skills Lisa canary blocked until Cursor/Codex readiness
- Brain production retention requires Principal approval
- Canary event counts require measurements
- Cursor process-argument credentials are not reusable by OpenClaw

## Validation

- `node scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs` → **1033/1033** OK (was 968)
- Descriptive exclusions listed: **0**
- Coverage rows: **1336**
- Focused ledger tests PASS (18)
- `git diff --check` clean
- Fixture aggregates unchanged (Brain `4493f714…` / Skills `20316371…`)
- Runtime trees byte-identical vs start HEAD

## Explicit non-claims

- No merge; no hosted CI/Bugbot poll; no Lisa/Platform live; no Phases 7–12 start
- No owner countersign request this wave
- No Phase 14/15 self-certification
- Classifications in ledger.csv are provisional for Codex, not accepted

## Codex ask

Re-verify tip. Confirm plan SHA + **1033** extracted items + **0** exact-line descriptive exclusions + fixture aggregates. Accept or revise §13.3 classifications. Owners countersign only after that confirmation.
