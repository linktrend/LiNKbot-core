# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_cron_isolated_agent[src-cron-isolated-agent] --> helpers[helpers]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> auth_profiles[auth-profiles]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> cli_runner[cli-runner]
    src_cron_isolated_agent[src-cron-isolated-agent] --> embedded_agent_runner[embedded-agent-runner]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> harness[harness]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sandbox[sandbox]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> test_helpers[test-helpers]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> agents[agents]
    src_cron_isolated_agent[src-cron-isolated-agent] --> auto_reply[auto-reply]
    src_cron_isolated_agent[src-cron-isolated-agent] --> auto_reply[auto-reply]
    src_cron_isolated_agent[src-cron-isolated-agent] --> auto_reply[auto-reply]
    src_cron_isolated_agent[src-cron-isolated-agent] --> plugins[plugins]
    src_cron_isolated_agent[src-cron-isolated-agent] --> config[config]
    src_cron_isolated_agent[src-cron-isolated-agent] --> config[config]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> gateway[gateway]
    src_cron_isolated_agent[src-cron-isolated-agent] --> gateway[gateway]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> net[net]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> outbound[outbound]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> infra[infra]
    src_cron_isolated_agent[src-cron-isolated-agent] --> interactive[interactive]
    src_cron_isolated_agent[src-cron-isolated-agent] --> logging[logging]
    src_cron_isolated_agent[src-cron-isolated-agent] --> logging[logging]
    src_cron_isolated_agent[src-cron-isolated-agent] --> plugin_sdk[plugin-sdk]
    src_cron_isolated_agent[src-cron-isolated-agent] --> plugin_sdk[plugin-sdk]
    src_cron_isolated_agent[src-cron-isolated-agent] --> plugins[plugins]
    src_cron_isolated_agent[src-cron-isolated-agent] --> process[process]
    src_cron_isolated_agent[src-cron-isolated-agent] --> process[process]
    src_cron_isolated_agent[src-cron-isolated-agent] --> routing[routing]
    src_cron_isolated_agent[src-cron-isolated-agent] --> secrets[secrets]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> sessions[sessions]
    src_cron_isolated_agent[src-cron-isolated-agent] --> shared[shared]
    src_cron_isolated_agent[src-cron-isolated-agent] --> shared[shared]
    src_cron_isolated_agent[src-cron-isolated-agent] --> runtime[runtime]
    src_cron_isolated_agent[src-cron-isolated-agent] --> state[state]
    src_cron_isolated_agent[src-cron-isolated-agent] --> tasks[tasks]
    src_cron_isolated_agent[src-cron-isolated-agent] --> tasks[tasks]
    src_cron_isolated_agent[src-cron-isolated-agent] --> test_utils[test-utils]
    src_cron_isolated_agent[src-cron-isolated-agent] --> tts[tts]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> service[service]
    src_cron_isolated_agent[src-cron-isolated-agent] --> service[service]
    src_cron_isolated_agent[src-cron-isolated-agent] --> __[..]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _[.]
    src_cron_isolated_agent[src-cron-isolated-agent] --> media_core[media-core]
    src_cron_isolated_agent[src-cron-isolated-agent] --> model_catalog_core[model-catalog-core]
    src_cron_isolated_agent[src-cron-isolated-agent] --> _openclaw[@openclaw]
    src_cron_isolated_agent[src-cron-isolated-agent] --> normalization_core[normalization-core]
    src_cron_isolated_agent[src-cron-isolated-agent] --> normalization_core[normalization-core]
    src_cron_isolated_agent[src-cron-isolated-agent] --> normalization_core[normalization-core]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_crypto[node:crypto]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_fs[node:fs]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_fs[node:fs]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_os[node:os]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_path[node:path]
    src_cron_isolated_agent[src-cron-isolated-agent] --> node_util[node:util]
    src_cron_isolated_agent[src-cron-isolated-agent] --> plugin_sdk[plugin-sdk]
    src_cron_isolated_agent[src-cron-isolated-agent] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/temp-dir.js`
- `../../agents/accepted-session-spawn.js`
- `../../agents/agent-bundle-mcp-tools.js`
- `../../agents/agent-scope.js`
- `../../agents/auth-profiles/source-check.js`
- `../../agents/bootstrap-cache.js`
- `../../agents/cli-runner/tool-policy.js`
- `../../agents/embedded-agent-runner/delivery-evidence.js`
- `../../agents/fast-mode.js`
- `../../agents/harness/hook-helpers.js`
- `../../agents/live-model-switch-error.js`
- `../../agents/memory-search.js`
- `../../agents/model-catalog-lookup.js`
- `../../agents/model-fallback.js`
- `../../agents/model-runtime-aliases.js`
- `../../agents/model-selection-resolve.js`
- `../../agents/model-selection-shared.js`
- `../../agents/openai-routing.js`
- `../../agents/run-termination.js`
- `../../agents/run-wait.js`
- `../../agents/sandbox/config.js`
- `../../agents/sanitize-for-prompt.js`
- `../../agents/session-placement-admission.js`
- `../../agents/session-runtime-compat.js`
- `../../agents/subagent-registry-read.js`
- `../../agents/test-helpers/fast-coding-tools.js`
- `../../agents/tool-policy.js`
- `../../agents/usage.js`
- `../../auto-reply/heartbeat.js`
- `../../auto-reply/reply-payload.js`
- `../../auto-reply/tokens.js`
- `../../channels/plugins/target-parsing-loaded.js`
- `../../config/config.js`
- `../../config/model-input.js`
- `../../config/sessions/cli-session-binding.js`
- `../../config/sessions/entry-freshness.js`
- `../../config/sessions/inbound.runtime.js`
- `../../config/sessions/lifecycle.js`
- `../../config/sessions/main-session.js`
- `../../config/sessions/model-override-provenance.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/reset-policy.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/session-snapshot-merge.js`
- `../../config/sessions/sqlite-marker.js`
- `../../config/sessions/transcript-mirror.js`
- `../../config/sessions/transcript.runtime.js`
- `../../gateway/call.runtime.js`
- `../../gateway/control-reply-text.js`
- `../../infra/agent-events.js`
- `../../infra/backoff.js`
- `../../infra/delivery-recovery.shared.js`
- `../../infra/diagnostic-events.js`
- `../../infra/diagnostic-trace-context.js`
- `../../infra/errors.js`
- `../../infra/net/fetch-guard.js`
- `../../infra/outbound/channel-resolution.js`
- `../../infra/outbound/channel-selection.runtime.js`
- `../../infra/outbound/channel-target-prefix.js`
- `../../infra/outbound/deliver-types.js`
- `../../infra/outbound/deliver.js`
- `../../infra/outbound/outbound-session.js`
- `../../infra/outbound/payloads.js`
- `../../infra/outbound/session-context.js`
- `../../infra/outbound/source-delivery-plan.js`
- `../../infra/outbound/target-errors.js`
- `../../infra/outbound/target-id-resolution.js`
- `../../infra/outbound/target-normalization.js`
- `../../infra/outbound/target-resolver.js`
- `../../infra/outbound/targets-loaded.js`
- `../../infra/outbound/targets-session.js`
- `../../infra/outbound/targets.runtime.js`
- `../../infra/outbound/targets.test-helpers.js`
- `../../infra/retry.js`
- `../../infra/system-events.js`
- `../../interactive/payload.js`
- `../../logging/diagnostic.js`
- `../../logging/message-lifecycle.js`
- `../../plugin-sdk/channel-route.js`
- `../../plugin-sdk/core.js`
- `../../plugins/runtime.js`
- `../../process/command-queue.js`
- `../../process/lanes.js`
- `../../routing/session-key.js`
- `../../secrets/runtime-web-tools-state.js`
- `../../sessions/agent-harness-session-key.js`
- `../../sessions/session-key-utils.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/user-turn-transcript.js`
- `../../shared/lazy-promise.js`
- `../../shared/number-coercion.js`
- `../../skills/runtime/cron-snapshot.js`
- `../../state/openclaw-agent-db.js`
- `../../tasks/cron-run-continuation-cleanup.js`
- `../../tasks/task-status-access.js`
- `../../test-utils/channel-plugins.js`
- `../../tts/tts-config.js`
- `../../utils.js`
- `../delivery-context.js`
- `../delivery-plan.js`
- `../heartbeat-policy.js`
- `../run-diagnostics.js`
- `../run-id.js`
- `../service/execution-errors.js`
- `../service/jobs.js`
- `../session-target.js`
- `./channel-output-policy.js`
- `./delivery-dispatch.js`
- `./delivery-dispatch.test-support.js`
- `./delivery-target.js`
- `./helpers.js`
- `./job-fixtures.js`
- `./model-preflight.runtime.js`
- `./model-selection.js`
- `./run-config.js`
- `./run-execution.runtime.js`
- `./run-fallback-policy.js`
- `./run-model-selection.runtime.js`
- `./run-session-state.js`
- `./run-timeout.js`
- `./run.runtime.js`
- `./run.suite-helpers.js`
- `./run.test-harness.js`
- `./session-cleanup.js`
- `./session-key.js`
- `./session.js`
- `./source-delivery-fallback.js`
- `./subagent-followup-hints.js`
- `./subagent-followup.js`
- `./subagent-followup.runtime.js`
- `@openclaw/media-core/mime`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:util`
- `openclaw/plugin-sdk/reply-payload`
- `vitest`
