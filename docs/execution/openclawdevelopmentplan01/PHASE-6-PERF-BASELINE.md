# Phase 6 — Performance Baseline (fake / integration-local)

**Recorded:** 2026-07-28 07:50 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Evidence tier:** `fake/integration-local` — **not** stage, **not** production SLOs.
**Harness:** `test/helpers/link-domain-fakes/phase6-perf-baseline.test.ts`
**Budgets constant:** `PHASE6_PERF_BUDGETS`

## Purpose

Set initial evidence thresholds from local fake-tier measurements of:

- hook latency (enqueue + single-item drain proxy)
- enqueue latency
- outbox record size
- drain throughput
- queue growth until reject-new
- restart recover time (shutdown → reopen → drain pending)

These are **ceilings / floors for local fake QA**, not Lisa or Platform stage commitments.

## Budgets (asserted)

| Metric                                     | Budget         | Direction           | Rationale                                                                                                                |
| ------------------------------------------ | -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Enqueue latency (Brain+Skills sample pair) | **50 ms**      | must be `<`         | In-process memory keyed-store write; anything near 50 ms indicates unexpected I/O or lock contention in the fake harness |
| Hook latency proxy (paired single drain)   | **100 ms**     | must be `<`         | Covers fake transport write + outbox delete for one item each domain; headroom for CI jitter                             |
| Max sample outbox record size              | **8192 bytes** | must be `≤`         | Sample capture/telemetry envelopes stay compact; growth beyond 8 KiB signals payload bloat or missing redaction          |
| Min drain throughput (20+20 items)         | **50 items/s** | must be `≥`         | Combined Brain+Skills drain of 40 items; fake HTTP not in path — pure in-process transport                               |
| Queue growth before reject-new             | **10**         | must equal capacity | With `outboxMaxEntries=10`, exactly 10 accepts then overflow; proves reject-new not silent drop                          |
| Restart recover time                       | **500 ms**     | must be `<`         | Dual-domain shutdown + reopen + drain of one pending each; memory stores only                                            |

## Measurement method

1. Open both plugin memory stores (`overflowPolicy: reject-new`).
2. Wire `createBrainFakeTransport` / `createSkillsFakeTransport` (in-process fakes).
3. Time `process.hrtime.bigint()` around enqueue, drain, restart sequences.
4. Byte-size `JSON.stringify` of outbox record values (UTF-8).
5. Assert against `PHASE6_PERF_BUDGETS`; fail closed if exceeded.

## Explicit non-claims

- Not measured under Gateway process load, real MCP HTTP, or Lisa LaunchAgent.
- Not a soak / multi-hour durability proof.
- Not Testbox/Crabbox heavy-suite evidence (focused local vitest only).
- Stage/prod budgets belong to Phase 7+ with Platform-owned endpoints.

## Refresh rule

Re-run `node scripts/run-vitest.mjs test/helpers/link-domain-fakes/phase6-perf-baseline.test.ts` after material outbox/transport changes. Raise budgets only with recorded rationale in this file and a matching constant update.
