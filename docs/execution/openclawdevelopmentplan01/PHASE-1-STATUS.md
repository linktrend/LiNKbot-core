# Phase 1 — Contract and Fake Freeze Status

**Recorded:** 2026-07-27 18:53 Asia/Taipei
**Correction wave 2:** 2026-07-28 09:10 Asia/Taipei — pins/fixtures refreshed; **Phase 1 still NOT complete** (`AWAITING_OWNER_COUNTERSIGN`)
**Correction wave 2b:** 2026-07-28 09:52 Asia/Taipei — sibling HEADs advanced to latest corrected tips; contract file hashes + fixture aggregates **unchanged**; **Phase 1 still NOT complete** (`AWAITING_OWNER_COUNTERSIGN`)
**Brain denial corrections:** 2026-07-28 11:45 Asia/Taipei — Brain fixtures corrected after `COUNTERSIGN_DENIED`; new Brain aggregate `275c1fb7…9a1d`; Skills bytes unchanged `8586d89a…ec96`; Brain **not** self-countersigned; Skills awaiting tip reaffirmation; **Phase 1 still NOT complete**

## Deliverables

| Item                                               | Location                                                                        | Status                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Brain fixtures (§9.1 + auth/capture/health/replay) | `extensions/linkbrain/fixtures/**`                                              | corrected draft awaiting Brain re-countersign (`275c1fb7…9a1d`; 72 JSON); prior denial of `d539debc…45fb` |
| Skills fixtures (§9.2 + prohibited/telemetry)      | `extensions/linkskills/fixtures/**`                                             | tree countersigned at tip `0b19e43…` (`8586d89a…ec96`); awaiting tip reaffirmation |
| Brain fake (stdio/HTTP, isolated)                  | `extensions/linkbrain/fake/**`, `test/helpers/link-domain-fakes/brain-fake.*`   | present; `BRAIN_CONTRACT_VERSION=1.0.0` + Gateway ErrorEnvelope      |
| Skills fake (stdio/HTTP, isolated)                 | `extensions/linkskills/fake/**`, `test/helpers/link-domain-fakes/skills-fake.*` | present                                                              |
| Auth matrix stub                                   | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                          | present; includes rotated / wrong_service / BrainErrorCode           |
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
| Domain owner fixture approval              | **blocked** — Brain `AWAITING_OWNER_COUNTERSIGN` after denial corrections; Skills tree signed but tip reaffirmation pending (`COUNTERSIGN-REQUEST.md`); **NOT Phase 1 complete** |
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
