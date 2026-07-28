# Plan §13.3 classification / evidence index — provisional for Codex Phase 14

**Recorded:** 2026-07-29 Asia/Taipei (wave 8)
**Branch tip:** see Phase 13 Current HEAD after push
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38)
**Local tip proof:** **31 files / 203 tests** PASS; base-to-head `git diff --check` required clean
**Authority:** Plan §13.3 evidence index for OpenClaw Codex. **Not** self-certification. Codex alone accepts classifications.

Legend: `IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`

---

## A. Phases 0–15 (task / evidence / DoD)

| Item | Classification | Evidence | Risks | Evidence requirement / DoD | Deficiency |
| ---- | -------------- | -------- | ----- | -------------------------- | ---------- |
| Phase 0 freeze | `INPL` | `PHASE-0-FREEZE-PACKET.md` | live gates uncleared | Packet exists; live not claimed | Live/external |
| Phase 1 contracts/pins | `PART` | `PHASE-1-*`; `contracts/**`; AuthClaims 1.1.0 pin | auth-path live | Pins + 1.1 consumer tests; owner countersign pending wave 8 | Platform auth-path; fixture countersign reopened |
| Phase 1 fixture-owner gate | `PART` | `FIXTURE-OWNER-SIGNOFF.md`; `COUNTERSIGN-REQUEST-WAVE8-*` | stale sign | Owners must countersign new aggregates | PENDING |
| Phase 2 Brain skeleton | `INPL` | `extensions/linkbrain/**`; `PHASE-2-STATUS.md` | live MCP | Default-disabled plugin + tests | Live |
| Phase 3 Brain lifecycle | `INPL` | capture/lifecycle tests | timeout races | Bounded capture proofs | Live |
| Phase 4 Skills skeleton | `INPL` | `extensions/linkskills/**` | privacy | No conversation hooks; telemetry allowlist | Live |
| Phase 5 managed MCP/auth | `PART` / `BLOCK` (flags→toolFilter) | templates; `MCP-TOOLFILTER-SDK-PREREQUISITE-DEVIATION.md` | discovery vs flags | Public SDK resolver missing | SDK prerequisite |
| Phase 6 integrated fake QA | `IAP` (fake) | matrix/perf; coexistence harness | platform-live gaps | Fake scenarios green; SKIPPED_PLATFORM_LIVE named | Platform live |
| Phases 7–12 | `BLOCK` | `PHASE-*-STATUS-BLOCKED.md` | premature start | Not started | External |
| Phase 13 Grok handoff | `INPL` | `PHASE-13-PROVISIONAL-GROK-HANDOFF.md` | tip lag | Provisional only | — |
| Phase 14 Codex | `OUT` | Plan Phase 14 | — | Codex owns | — |
| Phase 15 reconciliation | `OUT` | Plan Phase 15 | — | LiNKbrain Codex + Principal | — |

---

## B. Cross-plan gates (§14)

| Gate | Classification | Evidence | Owner |
| ---- | -------------- | -------- | ----- |
| 1 Platform identity/credentials | `BLOCK` | Phase 5; AuthClaims pin only | Platform |
| 2 Brain contract/fake | `OUT` / consume | fixtures PENDING countersign | LiNKbrain |
| 3 Skills contract/fake | `OUT` / consume | fixtures PENDING countersign | LiNKskills |
| 4 Platform migration/env | `BLOCK` | blocked packets | Platform |
| 5 OpenClaw implementation ownership | `INPL` | plugins/tests on branch | OpenClaw |
| 6–9 Lisa/stage/prod | `BLOCK` | not started | Multi |
| 10 Independent repo verification | `OUT` | Codex | OpenClaw Codex |
| 11 Four-plan reconciliation | `OUT` | Phase 15 | LiNKbrain Codex + Principal |

---

## C. Plugin / runtime requirements (individual)

| Requirement | Classification | Tests / evidence | Risk | DoD |
| ----------- | -------------- | ---------------- | ---- | --- |
| Two plugins / two MCP / independent domains | `INPL` | linkbrain + linkskills | cross-talk | Separate stores/flags |
| Brain conversation hooks only | `INPL` | lifecycle + boundary tests | Skills leakage | Skills forbids conversation hooks |
| Skills `skills_*` via public `after_tool_call` | `INPL` | collect + adversarial | over-collect | Non-Skills silent |
| Allowlisted Skills schemas | `INPL` | envelopes + adversarial | nesting | Exact keys/limits |
| Durable outboxes reject-new | `INPL` | runtime + matrix | overflow | reject-new |
| Independent drain workers + flushIntervalMs | `INPL` | drain-worker + tests | storm | Ownership until raw settle (wave 8) |
| Feature flags → managed MCP toolFilter | `BLOCK` / `DIFF` | deviation packet | false ops claim | Public SDK seam required |
| Feature flags → invoke helpers only | `INPL` | feature-flags tests | incomplete ops | Enabled success / disabled fail |
| Bounded hooks / enqueue / shutdown | `INPL` | bounded + enqueue tests | race/dup | Signal + exclusive enqueue |
| Native coexistence under adapter failure | `INPL` | `native-coexistence.test.ts` | synthetic gaps | Service start + native channel/memory host paths |
| Fourteen runbooks non-live | `INPL` | independent rehearsal wave 7 | implementer-as-indep | Independent FAKE/TEMPLATE |
| AuthClaims consumer 1.1.0 | `INPL` (shape) / `PART` (owner gate) | auth-claims-1.1 tests + fixtures | stale countersign | Positive 1.1; reject 1.0; PENDING sign |
| Lisa live enablement | `OMIT` | — | — | Explicit non-goal |
| Live Platform contact | `OMIT` | — | — | Explicit non-goal |

---

## D. Phase 6 mandatory scenarios

| # | Scenario | Classification | Evidence |
| - | -------- | -------------- | -------- |
| 1–15 fake-tier | `IAP` (fake) | `phase6-mandatory-matrix.test.ts` |
| Platform audit/correlation live | `BLOCK` | SKIPPED_PLATFORM_LIVE |
| Real credential issuer revoke | `BLOCK` | SKIPPED_PLATFORM_LIVE |
| Perf budgets fake | `IAP` (fake) | `PHASE-6-PERF-BASELINE.md` |

---

## E. Wave 8 finding map (tests)

| Finding | Tests |
| ------- | ----- |
| 1 MCP toolFilter | (none — deviation packet) |
| 2 Drain ownership / storm | `feature-flags-drain.test.ts`; `feature-flags-enqueue.test.ts` drain suites |
| 3 AuthClaims 1.1 | `auth-claims-1.1.test.ts` (both); fixture parse updates in brain-fake helper |
| 4 Coexistence | `native-coexistence.test.ts` |
| 5 Ledger / totals | this file; Phase 13 |

---

## F. Explicit non-claims

- No seven-value classification is **accepted** here.
- No merge / self-certify / hosted CI green claim.
- Fixture-owner gate reopened for wave-8 aggregates.
- Finding 1 not claimed fixed.
