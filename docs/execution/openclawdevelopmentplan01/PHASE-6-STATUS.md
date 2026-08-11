# Phase 6 — Integrated Local and Isolated QA Status (complete matrix)

**Recorded:** 2026-07-28 07:50 Asia/Taipei
**Capture durability amendment:** 2026-07-28 15:35 Asia/Taipei
**Capture concurrency amendment:** 2026-07-28 17:35 Asia/Taipei
**Wave 6 Phase 14 corrections amendment:** 2026-07-28 20:48 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Evidence tier:** `fake/integration-local` — **not** stage, **not** production, **no** live Platform/Lisa.
**Session:** `cursor-local-mac-mini-lisa-wave6-20260728` (completed)

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
# After transport adapters landed on the same branch tip:
# Test Files  21 passed (21)
# Tests       160 passed (160)
```

Focused matrix + perf only:

```text
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/phase6-mandatory-matrix.test.ts \
  test/helpers/link-domain-fakes/phase6-perf-baseline.test.ts
# 16 matrix + 1 perf = 17 tests passed (across unit-fast + tooling shards)
```

### Count breakdown (2026-07-28)

| Surface                                                                     | Files  | Tests   |
| --------------------------------------------------------------------------- | ------ | ------- |
| `test/helpers/link-domain-fakes/` (integrated + matrix + perf + brain-fake) | 4      | 25      |
| `extensions/linkbrain/**/*.test.ts` (+ fake + transport)                    | 8      | —       |
| `extensions/linkskills/**/*.test.ts` (+ fake + transport)                   | 8      | —       |
| **Tip total after wave 8**                                                  | **31** | **203** |
| Tip total after wave 7 (historical)                                         | 29     | 196     |
| Tip total after wave 6 (historical)                                         | 26     | 185     |
| Tip total after bounded timeout (historical)                                | 22     | 171     |

Prior packet was 7 integrated / 82 focused. Wave 5 tip **22/171** — **superseded**. Wave 6 tip **26/185** — **superseded**. Wave 7 tip **29/196** — **superseded**. Current tip claim: **31/203**.

## Privacy / cross-domain

- Skills observes exact `skills_*` via public `after_tool_call` only; non-Skills tools produce no Skills telemetry.
- Skills never registers conversation hooks.
- Brain conversation text never appears in Skills outbox/diagnostics/fake cache.
- Secret canaries redacted or stripped; allowlisted schemas reject unknown nesting.

## Explicit non-goals

- No live Platform stage endpoints, real credential issuer, or audit proof (marked SKIPPED_PLATFORM_LIVE).
- No Lisa profile mutation or live MCP wiring.
- No Testbox/Crabbox heavy suite in this session (focused local vitest only).
- Concurrent transport-adapter WIP in the same checkout was waited out; transport landed separately at `e88ba95d0a2`; Phase 6 matrix re-verified green on tip.

## Exit gate

- All mandatory **fake-tier** scenarios pass.
- Performance budgets justified in `PHASE-6-PERF-BASELINE.md`.
- No privacy or cross-domain violation observed under fakes.
- Platform-live gaps explicitly labeled for Phase 7.

## Next

Phase 7 — Platform Stage Readiness Gate (Platform-owned evidence; OpenClaw validates contracts against stage).

## Capture durability amendment (2026-07-28)

- Defect: batch-limit path called `flushRecord(next)` before durable `save(next)`, so `enqueueWrite` failure could lose the new events.
- Fix: durable-save accepted buffer first; flush failures retain retryable buffer and return `flushed: false` (no false ack).
- Outbox overflow remains explicit reject-new; previously accepted buffer events are not silently dropped.
- Regression: `extensions/linkbrain/capture.test.ts` (8). Focused suite **21 / 152**.
- Not Phase 14; not merge; no Lisa mutation; no Phases 7–12.

## Capture concurrency amendment (2026-07-28 wave 4)

- Defect: same-stream `load`→modify→`save`/`flush` was not serialized; concurrent enqueues could duplicate sequences / overwrite accepts; concurrent flush could clear newer data.
- Fix: bounded per-opaque-stream keyed promise chain around enqueue, flush, flushAll (re-load under lock). Failures settle without poisoning the chain; idle keys are deleted.
- No private internals, SQLite sidecar, or schema bump. Fixture JSON bytes unchanged (owner countersigns remain valid).
- Regression: `capture.test.ts` concurrency block (8). Focused suite **21 / 160**.
- Not Phase 14; not merge; no Lisa mutation; no Phases 7–12.

## Capture/lifecycle bounded timeout amendment (2026-07-28 wave 5)

- Defect: `withTimeout` in capture + lifecycle aborted a signal then still awaited the original promise (not a real caller bound); capture ignored the signal; lock wait sat outside the bound; helpers were duplicated.
- Fix: shared `extensions/linkbrain/src/bounded.ts` (`raceDeadline` / `runBounded` / `runExclusiveBounded`). Caller returns within the bound; stream lock is retained until scheduled work settles; queued work that acquires the lock after its deadline does not start; AbortSignal propagated through capture load/save/flush and `runtime.enqueueWrite` / `drainOnce`; uncancellable public keyed-store ops keep ownership until settle with honest `stalledCount` / `lastStalledStatus` diagnostics; timed-out accepted events stay durably buffered (never claim flushed).
- No private internals / SDK prerequisite required for this wave (public store has no cancel seam; retain-until-settle is the honest path). Fixture JSON unchanged.
- Regression: `bounded.test.ts` (11). Focused suite **22 / 171**.
- Functional code tip: `4fa1e9f7ed0b30855dff04082995a7b3b336b7f4`.
- Hosted CI: **deferred / Principal-waived** (CI system being redesigned). Do not claim green. PR readiness and merge deferred. No Lisa/Platform live action.
- Not Phase 14; not merge; no Lisa mutation; no Phases 7–12.
