# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cron_service[src-cron-service] --> cron[cron]
    src_cron_service[src-cron-service] --> embedded_agent_runner[embedded-agent-runner]
    src_cron_service[src-cron-service] --> agents[agents]
    src_cron_service[src-cron-service] --> config[config]
    src_cron_service[src-cron-service] --> sessions[sessions]
    src_cron_service[src-cron-service] --> cron[cron]
    src_cron_service[src-cron-service] --> service[service]
    src_cron_service[src-cron-service] --> service[service]
    src_cron_service[src-cron-service] --> cron[cron]
    src_cron_service[src-cron-service] --> store[store]
    src_cron_service[src-cron-service] --> infra[infra]
    src_cron_service[src-cron-service] --> infra[infra]
    src_cron_service[src-cron-service] --> process[process]
    src_cron_service[src-cron-service] --> process[process]
    src_cron_service[src-cron-service] --> process[process]
    src_cron_service[src-cron-service] --> routing[routing]
    src_cron_service[src-cron-service] --> state[state]
    src_cron_service[src-cron-service] --> state[state]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> tasks[tasks]
    src_cron_service[src-cron-service] --> test_utils[test-utils]
    src_cron_service[src-cron-service] --> test_utils[test-utils]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> utils[utils]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> isolated_agent[isolated-agent]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> store[store]
    src_cron_service[src-cron-service] --> store[store]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> __[..]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _[.]
    src_cron_service[src-cron-service] --> _openclaw[@openclaw]
    src_cron_service[src-cron-service] --> normalization_core[normalization-core]
    src_cron_service[src-cron-service] --> normalization_core[normalization-core]
    src_cron_service[src-cron-service] --> normalization_core[normalization-core]
    src_cron_service[src-cron-service] --> node_crypto[node:crypto]
    src_cron_service[src-cron-service] --> node_fs[node:fs]
    src_cron_service[src-cron-service] --> node_path[node:path]
    src_cron_service[src-cron-service] --> node_util[node:util]
    src_cron_service[src-cron-service] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/cron/service-regression-fixtures.js`
- `../../agents/embedded-agent-runner/execution-phase.js`
- `../../agents/failover-error.js`
- `../../config/cron-limits.js`
- `../../config/sessions/session-accessor.js`
- `../../cron/service.test-harness.js`
- `../../cron/service/state.js`
- `../../cron/service/timer.test-support.js`
- `../../cron/store.js`
- `../../cron/store/key.js`
- `../../infra/errors.js`
- `../../infra/heartbeat-wake.js`
- `../../process/command-queue.js`
- `../../process/gateway-work-admission.js`
- `../../process/lanes.js`
- `../../routing/session-key.js`
- `../../state/openclaw-state-db.js`
- `../../state/openclaw-state-db.paths.js`
- `../../tasks/detached-task-runtime.js`
- `../../tasks/task-executor.js`
- `../../tasks/task-registry.js`
- `../../tasks/task-registry.store.sqlite.js`
- `../../tasks/task-runtime.test-helpers.js`
- `../../tasks/task-status.js`
- `../../test-utils/env.js`
- `../../test-utils/openclaw-test-state.js`
- `../../utils.js`
- `../../utils/delivery-context.shared.js`
- `../active-jobs.js`
- `../delivery-defaults.js`
- `../delivery-plan.js`
- `../delivery.test-helpers.js`
- `../execution-error-constants.js`
- `../isolated-agent/session-key.js`
- `../list-snapshot-revision.js`
- `../normalize-job-identity.js`
- `../normalize.js`
- `../pacing.js`
- `../parse.js`
- `../persisted-shape.js`
- `../retry-hint.js`
- `../run-diagnostics.js`
- `../run-id.js`
- `../schedule-identity.js`
- `../schedule.js`
- `../script-payload.js`
- `../service.js`
- `../service.test-harness.js`
- `../session-reaper.js`
- `../session-target.js`
- `../stagger.js`
- `../store.js`
- `../store/key.js`
- `../store/row-codec.js`
- `../task-run-detail.js`
- `../task-run-event-codec.js`
- `../task-run-history.js`
- `../webhook-url.js`
- `./active-run-cancellation.js`
- `./active-run-cancellation.test-support.js`
- `./agent-watchdog.js`
- `./execution-errors.js`
- `./failure-alerts.js`
- `./initial-delivery.js`
- `./jobs.js`
- `./list-page-sort.js`
- `./locked.js`
- `./normalize.js`
- `./ops.js`
- `./payload-merge.js`
- `./run-admission.js`
- `./startup-run-repair.js`
- `./state.js`
- `./store.js`
- `./task-ledger.js`
- `./task-runs.js`
- `./timeout-policy.js`
- `./timer-outcome-finalization.js`
- `./timer.js`
- `./timer.test-support.js`
- `./wake.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:fs/promises`
- `node:path`
- `node:util`
- `vitest`
