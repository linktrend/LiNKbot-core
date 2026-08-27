# Module: src/cron

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 136

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/cron/active-jobs-manual-run.test.ts` | 245 |  |
| `src/cron/active-jobs.test.ts` | 47 |  |
| `src/cron/active-jobs.ts` | 220 |  |
| `src/cron/command-output-summary.test.ts` | 47 |  |
| `src/cron/command-output-summary.ts` | 113 |  |
| `src/cron/command-runner.test.ts` | 201 |  |
| `src/cron/command-runner.ts` | 166 |  |
| `src/cron/config-revision.test.ts` | 215 |  |
| `src/cron/config-revision.ts` | 39 |  |
| `src/cron/cron-protocol-conformance.test.ts` | 131 |  |
| `src/cron/cron-protocol-schema.test.ts` | 36 |  |
| `src/cron/delivery-channel-validation.ts` | 123 |  |
| `src/cron/delivery-context.test.ts` | 126 |  |
| `src/cron/delivery-context.ts` | 64 |  |
| `src/cron/delivery-defaults.ts` | 23 |  |
| `src/cron/delivery-field-schemas.ts` | 59 |  |
| `src/cron/delivery-plan.test.ts` | 46 |  |
| `src/cron/delivery-plan.ts` | 262 |  |
| `src/cron/delivery-preview.test.ts` | 138 |  |
| `src/cron/delivery-preview.ts` | 116 |  |
| `src/cron/delivery-target-validation.test.ts` | 66 |  |
| `src/cron/delivery-target-validation.ts` | 36 |  |
| `src/cron/delivery.failure-notify.test.ts` | 230 |  |
| `src/cron/delivery.test-helpers.ts` | 20 |  |
| `src/cron/delivery.test.ts` | 496 |  |
| `src/cron/delivery.ts` | 189 |  |
| `src/cron/execution-error-constants.ts` | 2 |  |
| `src/cron/heartbeat-policy.test.ts` | 43 |  |
| `src/cron/heartbeat-policy.ts` | 37 |  |
| `src/cron/isolated-agent.auth-profile-propagation.test.ts` | 95 |  |
| `src/cron/isolated-agent.delivery-awareness.test.ts` | 163 |  |
| `src/cron/isolated-agent.delivery.test-helpers.ts` | 75 |  |
| `src/cron/isolated-agent.direct-delivery-core-channels.test.ts` | 565 | 📊 |
| `src/cron/isolated-agent.helpers.test.ts` | 465 |  |
| `src/cron/isolated-agent.hook-content-wrapping.test.ts` | 164 |  |
| `src/cron/isolated-agent.isolated-auth-session-flag.test.ts` | 93 |  |
| `src/cron/isolated-agent.lane.test.ts` | 59 |  |
| `src/cron/isolated-agent.mocks.ts` | 37 |  |
| `src/cron/isolated-agent.model-formatting.test.ts` | 795 | 📊 |
| `src/cron/isolated-agent.model-preflight.test.ts` | 225 |  |
| `src/cron/isolated-agent.run-timeout-override.test.ts` | 31 |  |
| `src/cron/isolated-agent.session-identity.test.ts` | 344 |  |
| `src/cron/isolated-agent.test-harness.ts` | 72 |  |
| `src/cron/isolated-agent.test-setup.ts` | 235 |  |
| `src/cron/isolated-agent.ts` | 2 |  |
| `src/cron/isolated-agent.turn-test-helpers.ts` | 105 |  |
| `src/cron/job-session-bindings.test.ts` | 166 |  |
| `src/cron/job-session-bindings.ts` | 110 |  |
| `src/cron/list-snapshot-revision.ts` | 9 |  |
| `src/cron/normalize-job-identity.test.ts` | 54 |  |
| `src/cron/normalize-job-identity.ts` | 22 |  |
| `src/cron/normalize-payload.ts` | 262 |  |
| `src/cron/normalize.test.ts` | 1133 | 📊 |
| `src/cron/normalize.ts` | 534 | 📊 |
| `src/cron/pacing.test.ts` | 10 |  |
| `src/cron/pacing.ts` | 50 |  |
| `src/cron/parse.test.ts` | 274 |  |
| `src/cron/parse.ts` | 40 |  |
| `src/cron/persisted-shape.onexit.test.ts` | 37 |  |
| `src/cron/persisted-shape.trigger.test.ts` | 46 |  |
| `src/cron/persisted-shape.ts` | 125 |  |
| `src/cron/public-job.test.ts` | 45 |  |
| `src/cron/public-job.ts` | 11 |  |
| `src/cron/retry-hint.test.ts` | 123 |  |
| `src/cron/retry-hint.ts` | 65 |  |
| `src/cron/run-diagnostics-normalize.ts` | 177 |  |
| `src/cron/run-diagnostics.test.ts` | 333 |  |
| `src/cron/run-diagnostics.ts` | 269 |  |
| `src/cron/run-id.ts` | 4 |  |
| `src/cron/run-log-types.ts` | 34 |  |
| `src/cron/schedule-identity.test.ts` | 91 |  |
| `src/cron/schedule-identity.ts` | 119 |  |
| `src/cron/schedule-number.ts` | 8 |  |
| `src/cron/schedule.test-support.ts` | 30 |  |
| `src/cron/schedule.test.ts` | 268 |  |
| `src/cron/schedule.ts` | 160 |  |
| `src/cron/script-payload.ts` | 33 |  |
| `src/cron/service-contract.ts` | 53 |  |
| `src/cron/service.add-recompute-drops-due-every.test.ts` | 73 |  |
| `src/cron/service.armtimer-tight-loop.test.ts` | 224 |  |
| `src/cron/service.declarative-jobs.test.ts` | 264 |  |
| `src/cron/service.delivery-plan.test.ts` | 127 |  |
| `src/cron/service.every-jobs-fire.test.ts` | 371 |  |
| `src/cron/service.failure-alert.test.ts` | 652 | 📊 |
| `src/cron/service.get-job.test.ts` | 95 |  |
| `src/cron/service.heartbeat-ok-summary-suppressed.test.ts` | 116 |  |
| `src/cron/service.issue-13992-regression.test.ts` | 302 |  |
| `src/cron/service.issue-16156-list-skips-cron.test.ts` | 171 |  |
| `src/cron/service.issue-17852-daily-skip.test.ts` | 89 |  |
| `src/cron/service.issue-19676-at-reschedule.test.ts` | 79 |  |
| `src/cron/service.issue-22895-every-next-run.test.ts` | 59 |  |
| `src/cron/service.issue-35195-backup-timing.test.ts` | 73 |  |
| `src/cron/service.issue-66019-unresolved-next-run.test.ts` | 185 |  |
| `src/cron/service.issue-regressions.test-helpers.ts` | 44 |  |
| `src/cron/service.issue-regressions.test.ts` | 278 |  |
| `src/cron/service.jobs.test.ts` | 1669 | 📊 |
| `src/cron/service.jobs.top-of-hour-stagger.test.ts` | 108 |  |
| `src/cron/service.list-page-sort-guards.test.ts` | 191 |  |
| `src/cron/service.main-job-passes-heartbeat-target-last.test.ts` | 190 |  |
| `src/cron/service.persists-delivered-status.test.ts` | 515 | 📊 |
| `src/cron/service.prevents-duplicate-timers.test.ts` | 67 |  |
| `src/cron/service.read-ops-nonblocking.test.ts` | 291 |  |
| `src/cron/service.rearm-timer-when-running.test.ts` | 167 |  |
| `src/cron/service.removal-postcommit.test.ts` | 237 |  |
| `src/cron/service.remove-recompute-drops-due-every.test.ts` | 95 |  |
| `src/cron/service.restart-catchup.test.ts` | 1010 | 📊 |
| `src/cron/service.runs-one-shot-main-job-disables-it.test.ts` | 764 | 📊 |
| `src/cron/service.session-reaper-in-finally.test.ts` | 162 |  |
| `src/cron/service.skips-main-jobs-empty-systemevent-text.test.ts` | 167 |  |
| `src/cron/service.startup-overflow-clobber.test.ts` | 145 |  |
| `src/cron/service.store-load-invalid-main-job.test.ts` | 79 |  |
| `src/cron/service.test-harness.ts` | 268 |  |
| `src/cron/service.trigger-eval.test.ts` | 363 |  |
| `src/cron/service.ts` | 161 |  |
| `src/cron/service.update-recompute-drops-due-every.test.ts` | 164 |  |
| `src/cron/service.wake-now-real-heartbeat.test.ts` | 170 |  |
| `src/cron/session-reaper.test-support.ts` | 15 |  |
| `src/cron/session-reaper.test.ts` | 515 | 📊 |
| `src/cron/session-reaper.ts` | 162 |  |
| `src/cron/session-target.test.ts` | 68 |  |
| `src/cron/session-target.ts` | 70 |  |
| `src/cron/stagger.test.ts` | 62 |  |
| `src/cron/stagger.ts` | 73 |  |
| `src/cron/store.test.ts` | 1276 | 📊 |
| `src/cron/store.ts` | 328 |  |
| `src/cron/task-run-detail.ts` | 302 |  |
| `src/cron/task-run-event-codec.ts` | 54 |  |
| `src/cron/task-run-history.test.ts` | 464 |  |
| `src/cron/task-run-history.ts` | 180 |  |
| `src/cron/trigger-script.test.ts` | 537 | 📊 |
| `src/cron/trigger-script.ts` | 629 | 📊 |
| `src/cron/types-shared.ts` | 26 |  |
| `src/cron/types.ts` | 471 |  |
| `src/cron/validate-timestamp.test.ts` | 37 |  |
| `src/cron/validate-timestamp.ts` | 71 |  |
| `src/cron/webhook-url.ts` | 16 |  |

## Child Modules

- [src-cron-isolated-agent](../src-cron-isolated-agent/MODULE.md)
- [src-cron-service](../src-cron-service/MODULE.md)
- [src-cron-store](../src-cron-store/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (src/cron/service.issue-13992-regression.test.ts:45)

> in onTimer this recovery branch is used only when due scan found no
