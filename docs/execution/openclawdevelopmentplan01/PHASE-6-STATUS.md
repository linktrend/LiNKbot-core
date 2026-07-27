# Phase 6 — Integrated Local and Isolated QA Status (complete matrix)

**Recorded:** 2026-07-28 07:50 Asia/Taipei  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**Evidence tier:** `fake/integration-local` — **not** stage, **not** production, **no** live Platform/Lisa.  
**Session:** `cursor-cloud-mac-mini-feature-phase6-matrix-20260728-0744`

## Delivered

| Item                                                           | Location                                                            |
| -------------------------------------------------------------- | ------------------------------------------------------------------- |
| Coexistence proofs (prior)                                     | `test/helpers/link-domain-fakes/integrated-brain-skills.test.ts`    |
| Mandatory failure/recovery/durability/privacy/isolation matrix | `test/helpers/link-domain-fakes/phase6-mandatory-matrix.test.ts`    |
| Performance baseline harness + budgets                         | `test/helpers/link-domain-fakes/phase6-perf-baseline.test.ts`       |
| Perf budget rationale                                          | `docs/execution/openclawdevelopmentplan01/PHASE-6-PERF-BASELINE.md` |
| This status record                                             | `docs/execution/openclawdevelopmentplan01/PHASE-6-STATUS.md`        |

## Mandatory scenario matrix

| #   | Scenario                                                                              | Result                    | Notes                                                                                               |
| --- | ------------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | Brain unavailable → Skills + native continue                                          | **PASS**                  | Brain retry retains outbox; Skills drains; default-disabled manifests hold                          |
| 2   | Skills unavailable → Brain + native continue                                          | **PASS**                  | Skills retry retains outbox; Brain drains                                                           |
| 3   | Both unavailable → native honest degraded                                             | **PASS**                  | Both retry; pending retained; no crash; native baselines hold                                       |
| 4   | Brain auth revoked → Skills still works                                               | **PASS**                  | Fake auth matrix (`fake-revoked-token`); Brain dead-letters; Skills drains                          |
| 5   | Skills auth revoked → Brain still works                                               | **PASS**                  | Fake auth matrix (`cred:fixture-revoked-01`); Skills dead-letters; Brain drains                     |
| 6   | Restart with both outboxes pending → durable recover + drain                          | **PASS**                  | Shutdown → new runtime over same stores → drain both                                                |
| 7   | Queue capacity reject-new                                                             | **PASS**                  | Both domains overflow at capacity with explicit error                                               |
| 8   | Duplicate delivery / replay                                                           | **PASS**                  | Idempotent re-drain after ack on both fakes                                                         |
| 9   | Brain content → Skills rejected before transmission                                   | **PASS**                  | Envelope builder + fake ingress prohibit conversation/content                                       |
| 10  | Secret canaries absent from logs/state/events                                         | **PASS**                  | Ingress sanitize + prohibited-field strip; diagnostics/state clean                                  |
| 11  | Cross-domain namespace isolation                                                      | **PASS**                  | Separate stores; Brain-only `capture-buffer`; keyed lookup isolation                                |
| 12  | Independent enable/disable/drain                                                      | **PASS**                  | Per-domain enqueue/drain flags; independent pending vs drain                                        |
| 13  | Perf: hook/enqueue latency, record size, drain throughput, queue growth, restart time | **PASS**                  | Budgets in `PHASE-6-PERF-BASELINE.md` / `PHASE6_PERF_BUDGETS`                                       |
| 14  | Throttling, malformed responses, fake crash/restart                                   | **PASS**                  | Throttle→retry→recover; terminal malformed→dead-letter; idempotency clear + rewrite                 |
| 15  | Privacy: Skills never registers conversation hooks                                    | **PASS**                  | Static source scan + runtime policy constant assert                                                 |
| —   | Platform audit/correlation rejection                                                  | **SKIPPED_PLATFORM_LIVE** | Needs live stage audit API + opaque correlation issuer (Phase 7)                                    |
| —   | Real Platform credential issuer revoke                                                | **SKIPPED_PLATFORM_LIVE** | Platform-owned issuer/rotate/expiry evidence (Phase 7); fake auth matrix covers revoked tokens only |

## Coexistence proofs (retained from prior Phase 6 packet)

| #   | Proof                                                                      | Result |
| --- | -------------------------------------------------------------------------- | ------ |
| A   | Both Brain and Skills fake HTTP servers (process/port isolated)            | Pass   |
| B   | Brain capture/outbox + Skills telemetry concurrent drain                   | Pass   |
| C   | Skills never receives conversation/content (enqueue + fake ingress + HTTP) | Pass   |
| D   | Cross-domain KV/namespace isolation                                        | Pass   |
| E   | Independent disable Brain ≠ Skills broken and vice versa                   | Pass   |
| F   | Native-regression smoke: default-disabled baselines                        | Pass   |
| G   | Evidence labeled `fake/integration-local`                                  | Pass   |

## Proof commands and counts

```text
node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# Phase 6 gate evidence (committed plugin tests + new matrix/perf; no transport WIP):
# Test Files  15 passed (15)
# Tests       99 passed (99)
```

Focused matrix + perf only:

```text
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/phase6-mandatory-matrix.test.ts \
  test/helpers/link-domain-fakes/phase6-perf-baseline.test.ts
# 16 matrix + 1 perf = 17 tests passed (across unit-fast + tooling shards)
```

### Count breakdown (2026-07-28)

| Surface                                                                            | Files  | Tests  |
| ---------------------------------------------------------------------------------- | ------ | ------ |
| `test/helpers/link-domain-fakes/` (incl. integrated + matrix + perf + brain-fake)  | 4      | 25     |
| `extensions/linkbrain/**/*.test.ts` (+ fake; excluding uncommitted transport WIP)  | 6      | ~40    |
| `extensions/linkskills/**/*.test.ts` (+ fake; excluding uncommitted transport WIP) | 5      | ~34    |
| **Phase 6 gate total**                                                             | **15** | **99** |

Prior packet was 7 integrated / 82 focused; this completion adds the mandatory matrix + perf baseline (net +17 tests). A concurrent transport-adapter session may add uncommitted `transport.test.ts` files in the same checkout; those are out of Phase 6 scope and were not staged.

## Privacy / cross-domain

- Skills index registers only `gateway_start` / `gateway_stop` (no conversation hooks).
- Brain conversation text never appears in Skills outbox/diagnostics/fake cache.
- Secret canaries redacted or stripped before durable state claims cleanliness.

## Explicit non-goals

- No live Platform stage endpoints, real credential issuer, or audit proof (marked SKIPPED_PLATFORM_LIVE).
- No Lisa profile mutation or live MCP wiring.
- No Testbox/Crabbox heavy suite in this session (focused local vitest only).
- Concurrent transport-adapter WIP in the same checkout was **not** owned or committed by this session.

## Exit gate

- All mandatory **fake-tier** scenarios pass.
- Performance budgets justified in `PHASE-6-PERF-BASELINE.md`.
- No privacy or cross-domain violation observed under fakes.
- Platform-live gaps explicitly labeled for Phase 7.

## Next

Phase 7 — Platform Stage Readiness Gate (Platform-owned evidence; OpenClaw validates contracts against stage).
