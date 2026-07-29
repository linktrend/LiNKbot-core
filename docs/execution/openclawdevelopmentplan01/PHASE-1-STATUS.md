# Phase 1 — Contract and Fake Freeze Status

**Recorded:** 2026-07-27 18:53 Asia/Taipei
**Correction wave 2:** 2026-07-28 09:10 Asia/Taipei — pins/fixtures refreshed
**Correction wave 2b:** 2026-07-28 09:52 Asia/Taipei — sibling HEADs advanced to latest corrected tips
**Brain denial corrections:** 2026-07-28 11:45 Asia/Taipei — Brain fixtures corrected after `COUNTERSIGN_DENIED`; historical aggregate `275c1fb7…9a1d`
**Wave 8 AuthClaims 1.1.0 refresh:** 2026-07-29 Asia/Taipei — fixture-owner gate RE-OPENED (superseded by closeout below)
**Wave 18 reconciliation:** 2026-07-29 Asia/Taipei — AuthClaims **1.0** historical/superseded; AuthClaims **1.1** was pending
**AuthClaims 1.1 countersign closeout:** 2026-07-30 Asia/Taipei — AuthClaims **1.1** fixture-owner gate **CLOSED** / **`OWNER_COUNTERSIGNED`** (`FIXTURE-OWNER-SIGNOFF.md`)

## Deliverables

| Item                                               | Location                                                                        | Status                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Brain fixtures (§9.1 + auth/capture/health/replay) | `extensions/linkbrain/fixtures/**`                                              | AuthClaims **1.1.0** aggregate `4493f714…4811b` (75 JSON) — **`OWNER_COUNTERSIGNED`** at tip `005c9454…` |
| Skills fixtures (§9.2 + prohibited/telemetry)      | `extensions/linkskills/fixtures/**`                                             | AuthClaims **1.1.0** aggregate `20316371…e19a` (71 JSON) — **`OWNER_COUNTERSIGNED`** at tip `005c9454…`  |
| Brain fake (stdio/HTTP, isolated)                  | `extensions/linkbrain/fake/**`, `test/helpers/link-domain-fakes/brain-fake.*`   | present; `BRAIN_CONTRACT_VERSION=1.0.0` + Gateway ErrorEnvelope                                          |
| Skills fake (stdio/HTTP, isolated)                 | `extensions/linkskills/fake/**`, `test/helpers/link-domain-fakes/skills-fake.*` | present                                                                                                  |
| Auth matrix stub                                   | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                          | present; includes rotated / wrong_service / BrainErrorCode                                               |
| Outbox prototype findings                          | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                          | present                                                                                                  |

## Focused proof (re-run by integrator)

```text
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/brain-fake.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts
→ 19 passed (7 + 12)
```

## Exit gate

| Criterion                                  | Status                                                                                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deterministic isolated fakes               | **met** (fake tier)                                                                                                                                                                                                    |
| Negative/prohibited field tests            | **met** (fake tier)                                                                                                                                                                                                    |
| Domain owner fixture approval              | **met** — AuthClaims **1.1** Brain + Skills **`OWNER_COUNTERSIGNED`** at tip `005c9454f1bd3f7427936704131ffe5faa95ef0f` (`FIXTURE-OWNER-SIGNOFF.md`). Domain-owner fixture approval only — **not** Codex certification |
| Platform auth-path approval                | **blocked** — continue fake-only                                                                                                                                                                                       |
| Public surfaces sufficient or SDK proposal | **provisional met** — keyed-store path looks viable; prove in Phase 2                                                                                                                                                  |

## Decision packet — fixture owner sign-off

**AuthClaims 1.1 fixture-owner gate:** **CLOSED** / **`OWNER_COUNTERSIGNED`**. Authoritative record: `FIXTURE-OWNER-SIGNOFF.md` (Brain handoff commit `cfa8e931…`; Skills handoff commit `2fb6f8d5…`).

| Aggregate             | Tree                             | Count | SHA-256                                                            | Status                |
| --------------------- | -------------------------------- | ----: | ------------------------------------------------------------------ | --------------------- |
| AuthClaims 1.1 Brain  | `extensions/linkbrain/fixtures`  |    75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` | `OWNER_COUNTERSIGNED` |
| AuthClaims 1.1 Skills | `extensions/linkskills/fixtures` |    71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` | `OWNER_COUNTERSIGNED` |

### Historical (superseded for positive AuthClaims path)

Prior CLOSED countersigns at tip `429a7818e2f79be27329c1848531ffe9ba0f7367` for AuthClaims **1.0.0** aggregates (`275c1fb7…9a1d` / `8586d89a…ec96`) remain on record as historical only.

**Remaining Phase 1 blockers:** Platform auth-path approval. Fixture-owner gate is closed for AuthClaims 1.1 aggregates only. Do not claim full Phase 1 exit, Codex Phase 14 complete, merge, Lisa mutation, deployment, canary, or production approval from countersign closure. Phases 7–12 remain unstarted.

Brain residual non-blocking notes (`itemId` vs `id`; search stub `authority: "draft"`) recorded in `FIXTURE-OWNER-SIGNOFF.md` — fixture JSON bytes unchanged.

## Exact next action

Hold live Lisa/Platform activation. AuthClaims 1.1 fixture-owner gate is **CLOSED** (domain-owner only). Provisional packet remains for final OpenClaw Codex Phase 14 closeout verification. Do not merge PR #38 from this status.
