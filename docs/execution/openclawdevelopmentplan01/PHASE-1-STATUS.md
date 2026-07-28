# Phase 1 — Contract and Fake Freeze Status

**Recorded:** 2026-07-27 18:53 Asia/Taipei  
**Correction wave 2:** 2026-07-28 09:10 Asia/Taipei — pins/fixtures refreshed; **Phase 1 still NOT complete** (`AWAITING_OWNER_COUNTERSIGN`)

## Deliverables

| Item                                               | Location                                                                        | Status                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Brain fixtures (§9.1 + auth/capture/health/replay) | `extensions/linkbrain/fixtures/**`                                              | refreshed wave 2; draft pending Brain countersign (`d539debc…45fb`)  |
| Skills fixtures (§9.2 + prohibited/telemetry)      | `extensions/linkskills/fixtures/**`                                             | refreshed wave 2; draft pending Skills countersign (`8586d89a…ec96`) |
| Brain fake (stdio/HTTP, isolated)                  | `extensions/linkbrain/fake/**`, `test/helpers/link-domain-fakes/brain-fake.*`   | present                                                              |
| Skills fake (stdio/HTTP, isolated)                 | `extensions/linkskills/fake/**`, `test/helpers/link-domain-fakes/skills-fake.*` | present                                                              |
| Auth matrix stub                                   | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                          | present; Platform approval pending                                   |
| Outbox prototype findings                          | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                          | present                                                              |

## Focused proof (re-run by integrator)

```text
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/brain-fake.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts
→ 19 passed (7 + 12)
```

## Exit gate

| Criterion                                  | Status                                                                                              |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Deterministic isolated fakes               | **met** (fake tier)                                                                                 |
| Negative/prohibited field tests            | **met** (fake tier)                                                                                 |
| Domain owner fixture approval              | **blocked** — `AWAITING_OWNER_COUNTERSIGN` (see `COUNTERSIGN-REQUEST.md`); **NOT Phase 1 complete** |
| Platform auth-path approval                | **blocked** — continue fake-only                                                                    |
| Public surfaces sufficient or SDK proposal | **provisional met** — keyed-store path looks viable; prove in Phase 2                               |

## Decision packet — fixture owner sign-off

**Blocker:** Brain and Skills versioned owner-approved fixture packages are required for Phase 1 full exit. OpenClaw created sanitized drafts from frozen plans because upstream `docs/contracts` JSON packages were missing/incomplete.

**Options:**

1. Principal asks Brain/Skills owners to review and sign `extensions/link*/fixtures/MANIFEST.md` (recommended).
2. Continue Phase 2–6 against drafts; keep “owner fixture approval” open; never claim domain conformance.
3. Pause all plugin work until fixtures signed (slower; safer for contract freeze purity).

**Recommendation:** Option 2 — continue safe OpenClaw skeleton/state work against drafts; hold live Lisa/Platform activation until owners sign and Platform readiness exists.

**Authority requested:** none for Option 2; Option 1 needs Principal to route to Brain/Skills owners.

## Exact next action

Phase 2 — default-disabled `linkbrain` plugin skeleton + local state against Brain fake; no Lisa activation.
