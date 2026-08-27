# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_status[src-status] --> src[src]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> auth_profiles[auth-profiles]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> embedded_agent_runner[embedded-agent-runner]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> harness[harness]
    src_status[src-status] --> harness[harness]
    src_status[src-status] --> harness[harness]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> agents[agents]
    src_status[src-status] --> tools[tools]
    src_status[src-status] --> auto_reply[auto-reply]
    src_status[src-status] --> auto_reply[auto-reply]
    src_status[src-status] --> channels[channels]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> config[config]
    src_status[src-status] --> config[config]
    src_status[src-status] --> config[config]
    src_status[src-status] --> sessions[sessions]
    src_status[src-status] --> sessions[sessions]
    src_status[src-status] --> sessions[sessions]
    src_status[src-status] --> sessions[sessions]
    src_status[src-status] --> context_engine[context-engine]
    src_status[src-status] --> context_engine[context-engine]
    src_status[src-status] --> context_engine[context-engine]
    src_status[src-status] --> gateway[gateway]
    src_status[src-status] --> gateway[gateway]
    src_status[src-status] --> format_time[format-time]
    src_status[src-status] --> format_time[format-time]
    src_status[src-status] --> infra[infra]
    src_status[src-status] --> infra[infra]
    src_status[src-status] --> infra[infra]
    src_status[src-status] --> infra[infra]
    src_status[src-status] --> media_understanding[media-understanding]
    src_status[src-status] --> plugin_state[plugin-state]
    src_status[src-status] --> plugin_state[plugin-state]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> plugins[plugins]
    src_status[src-status] --> routing[routing]
    src_status[src-status] --> routing[routing]
    src_status[src-status] --> routing[routing]
    src_status[src-status] --> shared[shared]
    src_status[src-status] --> shared[shared]
    src_status[src-status] --> tasks[tasks]
    src_status[src-status] --> tasks[tasks]
    src_status[src-status] --> test_helpers[test-helpers]
    src_status[src-status] --> tts[tts]
    src_status[src-status] --> utils[utils]
    src_status[src-status] --> __[..]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _[.]
    src_status[src-status] --> _openclaw[@openclaw]
    src_status[src-status] --> normalization_core[normalization-core]
    src_status[src-status] --> node_child_process[node:child_process]
    src_status[src-status] --> node_fs[node:fs]
    src_status[src-status] --> node_os[node:os]
    src_status[src-status] --> node_path[node:path]
    src_status[src-status] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/terminal-core/src/safe-text.js`
- `../agents/agent-scope.js`
- `../agents/auth-profiles/store.js`
- `../agents/cli-backends.test-support.js`
- `../agents/context.js`
- `../agents/current-time.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-runner/extra-params.js`
- `../agents/fast-mode.js`
- `../agents/harness/auto-selection.js`
- `../agents/harness/policy.js`
- `../agents/harness/registry.js`
- `../agents/model-auth-label.js`
- `../agents/model-auth-markers.js`
- `../agents/model-auth.js`
- `../agents/model-runtime-aliases.js`
- `../agents/model-selection.js`
- `../agents/openai-routing.js`
- `../agents/openai-text-verbosity.js`
- `../agents/provider-auth-aliases.js`
- `../agents/sandbox.js`
- `../agents/session-runtime-compat.js`
- `../agents/tool-schema-quarantine-health.js`
- `../agents/tools/sessions-helpers.js`
- `../auto-reply/group-activation.js`
- `../auto-reply/model-runtime.js`
- `../channels/model-overrides.js`
- `../channels/plugins/read-only.js`
- `../config/model-input.js`
- `../config/runtime-snapshot.js`
- `../config/sessions.js`
- `../config/sessions/lifecycle.js`
- `../config/sessions/model-override-provenance.js`
- `../config/sessions/paths.js`
- `../config/sessions/sqlite-marker.js`
- `../context-engine/quarantine-health.js`
- `../context-engine/registry.js`
- `../context-engine/registry.test-support.js`
- `../gateway/plugin-activation-runtime-config.js`
- `../gateway/session-transcript-readers.js`
- `../infra/format-time/format-duration.ts`
- `../infra/format-time/format-relative.ts`
- `../infra/git-commit.js`
- `../infra/provider-usage.js`
- `../infra/session-cost-usage-totals.js`
- `../infra/session-cost-usage.js`
- `../media-understanding/runner.entries.js`
- `../plugin-state/plugin-state-store.js`
- `../plugin-state/runtime-health-store.js`
- `../plugins/active-runtime-registry.js`
- `../plugins/gateway-startup-plugin-ids.js`
- `../plugins/provider-thinking-active.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../routing/account-id.js`
- `../routing/account-lookup.js`
- `../routing/session-key.js`
- `../shared/fast-mode.js`
- `../shared/lazy-runtime.js`
- `../tasks/task-status-access.js`
- `../tasks/task-status.js`
- `../test-helpers/state-dir-env.js`
- `../tts/status-config.js`
- `../utils/usage-format.js`
- `../version.js`
- `./agent-runtime-label.js`
- `./codex-synthetic-usage.js`
- `./fallback-notice-state.js`
- `./status-message.js`
- `./status-plugin-health.js`
- `./status-plugin-health.runtime.js`
- `./status-runtime-lines.js`
- `./status-text.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `node:child_process`
- `node:fs`
- `node:os`
- `node:path`
- `vitest`
