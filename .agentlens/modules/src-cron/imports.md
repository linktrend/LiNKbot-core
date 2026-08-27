# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cron[src-cron] --> src[src]
    src_cron[src-cron] --> src[src]
    src_cron[src-cron] --> cron[cron]
    src_cron[src-cron] --> helpers[helpers]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> run[run]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> agents[agents]
    src_cron[src-cron] --> auto_reply[auto-reply]
    src_cron[src-cron] --> auto_reply[auto-reply]
    src_cron[src-cron] --> message[message]
    src_cron[src-cron] --> cli[cli]
    src_cron[src-cron] --> cli[cli]
    src_cron[src-cron] --> cron[cron]
    src_cron[src-cron] --> config[config]
    src_cron[src-cron] --> config[config]
    src_cron[src-cron] --> sessions[sessions]
    src_cron[src-cron] --> sessions[sessions]
    src_cron[src-cron] --> sessions[sessions]
    src_cron[src-cron] --> gateway[gateway]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> outbound[outbound]
    src_cron[src-cron] --> outbound[outbound]
    src_cron[src-cron] --> outbound[outbound]
    src_cron[src-cron] --> outbound[outbound]
    src_cron[src-cron] --> outbound[outbound]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> infra[infra]
    src_cron[src-cron] --> __[..]
    src_cron[src-cron] --> logging[logging]
    src_cron[src-cron] --> plugin_sdk[plugin-sdk]
    src_cron[src-cron] --> plugins[plugins]
    src_cron[src-cron] --> plugins[plugins]
    src_cron[src-cron] --> process[process]
    src_cron[src-cron] --> process[process]
    src_cron[src-cron] --> process[process]
    src_cron[src-cron] --> process[process]
    src_cron[src-cron] --> routing[routing]
    src_cron[src-cron] --> sessions[sessions]
    src_cron[src-cron] --> sessions[sessions]
    src_cron[src-cron] --> shared[shared]
    src_cron[src-cron] --> shared[shared]
    src_cron[src-cron] --> state[state]
    src_cron[src-cron] --> state[state]
    src_cron[src-cron] --> tasks[tasks]
    src_cron[src-cron] --> tasks[tasks]
    src_cron[src-cron] --> tasks[tasks]
    src_cron[src-cron] --> test_utils[test-utils]
    src_cron[src-cron] --> test_utils[test-utils]
    src_cron[src-cron] --> test_utils[test-utils]
    src_cron[src-cron] --> test_utils[test-utils]
    src_cron[src-cron] --> __[..]
    src_cron[src-cron] --> utils[utils]
    src_cron[src-cron] --> utils[utils]
    src_cron[src-cron] --> utils[utils]
    src_cron[src-cron] --> utils[utils]
    src_cron[src-cron] --> utils[utils]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> isolated_agent[isolated-agent]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> service[service]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> store[store]
    src_cron[src-cron] --> store[store]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> _[.]
    src_cron[src-cron] --> net_policy[net-policy]
    src_cron[src-cron] --> _openclaw[@openclaw]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> normalization_core[normalization-core]
    src_cron[src-cron] --> croner[croner]
    src_cron[src-cron] --> node_child_process[node:child_process]
    src_cron[src-cron] --> node_crypto[node:crypto]
    src_cron[src-cron] --> node_fs[node:fs]
    src_cron[src-cron] --> node_fs[node:fs]
    src_cron[src-cron] --> node_os[node:os]
    src_cron[src-cron] --> node_path[node:path]
    src_cron[src-cron] --> plugin_sdk[plugin-sdk]
    src_cron[src-cron] --> plugin_sdk[plugin-sdk]
    src_cron[src-cron] --> vitest[vitest]
    src_cron[src-cron] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-protocol/src/index.js`
- `../../packages/gateway-protocol/src/schema.js`
- `../../test/helpers/cron/service-regression-fixtures.js`
- `../../test/helpers/temp-dir.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/agent-tools.before-tool-call.js`
- `../agents/agent-tools.js`
- `../agents/before-tool-call-metadata.js`
- `../agents/code-mode.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-runner/run/attempt-tool-construction-plan.js`
- `../agents/embedded-agent.js`
- `../agents/failover-error.js`
- `../agents/lanes.js`
- `../agents/prepared-model-catalog.js`
- `../agents/runtime-plugins.js`
- `../agents/sandbox.js`
- `../agents/stable-stringify.js`
- `../agents/subagent-announce.js`
- `../agents/tool-policy-match.js`
- `../agents/tool-policy.js`
- `../agents/tool-search.js`
- `../agents/workspace.js`
- `../auto-reply/heartbeat.js`
- `../auto-reply/reply-payload.js`
- `../channels/message/runtime.js`
- `../cli/outbound-send-deps.js`
- `../cli/parse-duration.js`
- `../commands/doctor/cron/legacy-store-migration.js`
- `../config/config.js`
- `../config/sessions.js`
- `../config/sessions/delivery-info.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/store-maintenance-runtime.js`
- `../gateway/call.js`
- `../infra/crypto-digest.js`
- `../infra/errors.js`
- `../infra/gateway-suspend-coordinator.js`
- `../infra/heartbeat-runner.js`
- `../infra/heartbeat-runner.test-utils.js`
- `../infra/heartbeat-wake.js`
- `../infra/home-dir.js`
- `../infra/node-sqlite.js`
- `../infra/outbound/channel-selection.js`
- `../infra/outbound/channel-target-prefix.js`
- `../infra/outbound/identity.js`
- `../infra/outbound/send-deps.js`
- `../infra/outbound/session-context.js`
- `../infra/parse-finite-number.js`
- `../infra/replace-file.js`
- `../infra/system-events.js`
- `../logging.js`
- `../logging/redact.js`
- `../plugin-sdk/core.js`
- `../plugins/runtime.js`
- `../plugins/tools.js`
- `../process/command-queue.js`
- `../process/exec.js`
- `../process/gateway-work-admission.js`
- `../process/lanes.js`
- `../routing/session-key.js`
- `../sessions/session-key-utils.js`
- `../sessions/session-lifecycle-admission.js`
- `../shared/global-singleton.js`
- `../shared/iso-time.js`
- `../state/openclaw-state-db.js`
- `../state/openclaw-state-db.paths.js`
- `../tasks/task-registry.store.sqlite.js`
- `../tasks/task-runtime.test-helpers.js`
- `../tasks/task-status-access.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/deferred.js`
- `../test-utils/env.js`
- `../test-utils/openclaw-test-state.js`
- `../utils.js`
- `../utils/delivery-context.shared.js`
- `../utils/message-channel.js`
- `../utils/parse-json-compat.js`
- `../utils/usage-format.js`
- `../utils/with-timeout.js`
- `./active-jobs.js`
- `./command-output-summary.js`
- `./command-runner.js`
- `./config-revision.js`
- `./delivery-context.js`
- `./delivery-defaults.js`
- `./delivery-field-schemas.js`
- `./delivery-plan.js`
- `./delivery-target-validation.js`
- `./delivery.test-helpers.js`
- `./execution-error-constants.js`
- `./heartbeat-policy.js`
- `./isolated-agent.delivery.test-helpers.js`
- `./isolated-agent.js`
- `./isolated-agent.mocks.js`
- `./isolated-agent.test-harness.js`
- `./isolated-agent.test-setup.js`
- `./isolated-agent.turn-test-helpers.js`
- `./isolated-agent/delivery-dispatch.test-support.js`
- `./isolated-agent/delivery-target.js`
- `./isolated-agent/helpers.js`
- `./isolated-agent/job-fixtures.js`
- `./isolated-agent/model-selection.js`
- `./isolated-agent/run-config.js`
- `./isolated-agent/run-timeout.js`
- `./isolated-agent/run.suite-helpers.js`
- `./isolated-agent/run.test-harness.js`
- `./isolated-agent/session-key.js`
- `./job-session-bindings.js`
- `./normalize-job-identity.js`
- `./normalize-payload.js`
- `./normalize.js`
- `./pacing.js`
- `./parse.js`
- `./persisted-shape.js`
- `./public-job.js`
- `./retry-hint.js`
- `./run-diagnostics-normalize.js`
- `./run-diagnostics.js`
- `./schedule-identity.js`
- `./schedule-number.js`
- `./schedule.js`
- `./schedule.test-support.js`
- `./script-payload.js`
- `./service.issue-regressions.test-helpers.js`
- `./service.js`
- `./service.test-harness.js`
- `./service/execution-errors.js`
- `./service/jobs.js`
- `./service/normalize.js`
- `./service/ops.js`
- `./service/state.js`
- `./service/store.js`
- `./service/timer.js`
- `./service/timer.test-support.js`
- `./session-reaper.js`
- `./session-reaper.test-support.js`
- `./session-target.js`
- `./stagger.js`
- `./store.js`
- `./store/key.js`
- `./store/row-codec.js`
- `./task-run-detail.js`
- `./task-run-event-codec.js`
- `./task-run-history.js`
- `./trigger-script.js`
- `./validate-timestamp.js`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/boolean-coercion`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `croner`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/reply-payload`
- `openclaw/plugin-sdk/test-env`
- `vitest`
- `zod`
