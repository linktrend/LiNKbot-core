# Phase 1 — Contract and Fake Freeze Status

**Recorded:** 2026-07-27 18:53 Asia/Taipei
**Correction wave 2:** 2026-07-28 09:10 Asia/Taipei — pins/fixtures refreshed
**Correction wave 2b:** 2026-07-28 09:52 Asia/Taipei — sibling HEADs advanced to latest corrected tips
**Brain denial corrections:** 2026-07-28 11:45 Asia/Taipei — Brain fixtures corrected after `COUNTERSIGN_DENIED`; aggregate `275c1fb7…9a1d`; Skills bytes unchanged `8586d89a…ec96`
**Fixture-owner gate closed:** 2026-07-28 13:05 Asia/Taipei — Brain `OWNER_COUNTERSIGNED` + Skills tip reaffirmation at tip `429a7818e2f79be27329c1848531ffe9ba0f7367`. **Phase 1 fixture-owner gate CLOSED.** **Phase 1 overall still NOT complete** (Platform auth-path blocked). Provisional pending Codex Phase 14.

## Deliverables

| Item                                               | Location                                                                        | Status                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Brain fixtures (§9.1 + auth/capture/health/replay) | `extensions/linkbrain/fixtures/**`                                              | **`OWNER_COUNTERSIGNED`** at tip `429a7818…` (`275c1fb7…9a1d`; 72 JSON); denial of `d539debc…45fb` superseded |
| Skills fixtures (§9.2 + prohibited/telemetry)      | `extensions/linkskills/fixtures/**`                                             | **`OWNER_COUNTERSIGNED`** reaffirmed at tip `429a7818…` (`8586d89a…ec96`)                                     |
| Brain fake (stdio/HTTP, isolated)                  | `extensions/linkbrain/fake/**`, `test/helpers/link-domain-fakes/brain-fake.*`   | present; `BRAIN_CONTRACT_VERSION=1.0.0` + Gateway ErrorEnvelope                                               |
| Skills fake (stdio/HTTP, isolated)                 | `extensions/linkskills/fake/**`, `test/helpers/link-domain-fakes/skills-fake.*` | present                                                                                                       |
| Auth matrix stub                                   | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                          | present; includes rotated / wrong_service / BrainErrorCode                                                    |
| Outbox prototype findings                          | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                          | present                                                                                                       |

## Focused proof (re-run by integrator)

```text
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/brain-fake.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts
→ 19 passed (7 + 12)
```

## Exit gate

| Criterion                                  | Status                                                                                                                                                                             |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deterministic isolated fakes               | **met** (fake tier)                                                                                                                                                                |
| Negative/prohibited field tests            | **met** (fake tier)                                                                                                                                                                |
| Domain owner fixture approval              | **met** — Brain + Skills `OWNER_COUNTERSIGNED` at tip `429a7818…` (`FIXTURE-OWNER-SIGNOFF.md`); **fixture-owner gate CLOSED**; Phase 1 overall still blocked on Platform auth-path |
| Platform auth-path approval                | **blocked** — continue fake-only                                                                                                                                                   |
| Public surfaces sufficient or SDK proposal | **provisional met** — keyed-store path looks viable; prove in Phase 2                                                                                                              |

## Decision packet — fixture owner sign-off

**Fixture-owner gate:** CLOSED at tip `429a7818e2f79be27329c1848531ffe9ba0f7367` after:

1. Brain `OWNER_COUNTERSIGNED` — `LiNKbrain/docs/handoffs/OPENCLAW-BRAIN-FIXTURE-OWNER-COUNTERSIGNED-2026-07-28.md` (`d43552742b6a3e9eb942275106b103d873a889fb`) for aggregate `275c1fb7…9a1d`
2. Skills reaffirmation — `LiNKskills/docs/handoffs/2026-07-28-linkskills-openclaw-fixtures-OWNER-COUNTERSIGNED-reaffirm.md` (`41ab5a3d31a79a662158d8fb434f76b707701b7a`) for aggregate `8586d89a…ec96`

**Remaining Phase 1 blocker:** Platform auth-path approval. Do not claim full Phase 1 exit, Codex Phase 14, merge, or Lisa live enablement from fixture countersign alone.

## Exact next action

Hold live Lisa/Platform activation until Platform auth-path approval. Provisional packet remains for OpenClaw Codex Phase 14. Do not merge PR #38 from this closeout.
