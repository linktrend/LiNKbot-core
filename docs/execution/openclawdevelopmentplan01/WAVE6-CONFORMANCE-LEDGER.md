# Item-level conformance ledger — OpenClaw PR #38 wave 6

**Recorded:** 2026-07-28 20:48 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38)
**Authority:** Plan §13.3 item tracking for Codex Phase 14 re-verification (not self-certification)
**Tip proof (local, wave 6 historical):** `node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills` → **26 files / 185 tests** PASS; working-tree `git diff --check` clean

> **Superseded for §13.3 classification duty (wave 7):** use `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md` + `WAVE7-CORRECTION-PACKET.md`. This file remains the wave-6 correction-only historical ledger. Tip proof after wave 7 is **29/196**. AuthClaims item 10 below is historical — wave 7 repinned to `1.1.0` / `0.2.2`.

> This ledger lists plan findings addressed in correction wave 6. It does **not** assign the seven Section 13.3 classifications. OpenClaw Codex Phase 14 owns verification.

| Item | Phase 14 finding | Correction status | Evidence |
| ---- | ---------------- | ----------------- | -------- |
| 1 | Wire exact `skills_*` into Skills telemetry via public seams; non-Skills silent | **Corrected (local)** | `extensions/linkskills/src/collect.ts`; `index.ts` `after_tool_call`; `telemetry-adversarial.test.ts`; `coexistence-registered.test.ts` |
| 2 | Independent stoppable drain workers; `flushIntervalMs` operational | **Corrected (local)** | `extensions/link{brain,skills}/src/drain-worker.ts`; workers started when drain flags true |
| 3 | Every advertised feature flag operational or plan deviation | **Corrected (local)** | `feature-tools.ts` registers tools when `mcpRead` / `mcpDiscoveryRead` / `governedExecution` true; remote still needs `transportMode!=disabled`; age alarm via `outboxAgeAlarmMs` |
| 4 | Bound coordination enqueue, gateway-stop flush, shutdown; retain mutation ownership | **Corrected (local)** | lifecycle `enqueueCoordination` + `gateway_stop` via `runBounded`; capture `flushAll` abort-aware; runtime `shutdown` bounded |
| 5 | Replace Skills denylist/open metrics/payload with exact allowlists | **Corrected (local)** | `extensions/linkskills/src/envelopes.ts` exact key/event/outcome/metrics/payload schemas + size limits |
| 6 | Adversarial tests (secrets, tokens, raw I/O, conversation, Brain, nesting, size, silence) | **Corrected (local)** | `extensions/linkskills/telemetry-adversarial.test.ts` |
| 7 | Registered-plugin integration (native memory/compaction/sessions/cron/channels/skills, disablement, isolation) | **Corrected (local)** | `registered-plugin.test.ts` (both); `coexistence-registered.test.ts` |
| 8 | Fourteen applicable runbooks at non-live tier + rehearsal | **Corrected (docs)** | `docs/execution/openclawdevelopmentplan01/runbooks/README.md` §19 index; 14 mapped; FAKE/TEMPLATE rehearsal recorded; **no live mutation** |
| 9 | Close stale active Cursor session; correct 20/144→final totals; ledger; `git diff --check` | **Corrected (docs)** | sessions moved to `completed/`; tip totals **26/185**; this ledger; `git diff --check` clean |
| 10 | Repin corrected Platform AuthClaims after publish | **Waiting on Platform** | Platform `platform.auth-claims/1.1.0` exists as **uncommitted WIP** on `issue/LP-01…` (not frozen/published). OCP remains pinned to `platform.auth-claims/1.0.0` at Platform head `e845ac17…`. Brain/Skills fixture countersigns preserved (bytes unchanged). |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged
- Hosted CI not re-polled / not claimed green this wave
- No Lisa live profile mutation
- No Platform live services / credentials
- Phases 7–12 not started
