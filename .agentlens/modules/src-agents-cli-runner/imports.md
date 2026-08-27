# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_cli_runner[src-agents-cli-runner] --> src[src]
    src_agents_cli_runner[src-agents-cli-runner] --> helpers[helpers]
    src_agents_cli_runner[src-agents-cli-runner] --> runtime[runtime]
    src_agents_cli_runner[src-agents-cli-runner] --> reply[reply]
    src_agents_cli_runner[src-agents-cli-runner] --> config[config]
    src_agents_cli_runner[src-agents-cli-runner] --> config[config]
    src_agents_cli_runner[src-agents-cli-runner] --> config[config]
    src_agents_cli_runner[src-agents-cli-runner] --> sessions[sessions]
    src_agents_cli_runner[src-agents-cli-runner] --> sessions[sessions]
    src_agents_cli_runner[src-agents-cli-runner] --> sessions[sessions]
    src_agents_cli_runner[src-agents-cli-runner] --> context_engine[context-engine]
    src_agents_cli_runner[src-agents-cli-runner] --> context_engine[context-engine]
    src_agents_cli_runner[src-agents-cli-runner] --> context_engine[context-engine]
    src_agents_cli_runner[src-agents-cli-runner] --> context_engine[context-engine]
    src_agents_cli_runner[src-agents-cli-runner] --> gateway[gateway]
    src_agents_cli_runner[src-agents-cli-runner] --> gateway[gateway]
    src_agents_cli_runner[src-agents-cli-runner] --> gateway[gateway]
    src_agents_cli_runner[src-agents-cli-runner] --> gateway[gateway]
    src_agents_cli_runner[src-agents-cli-runner] --> gateway[gateway]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> outbound[outbound]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> infra[infra]
    src_agents_cli_runner[src-agents-cli-runner] --> logging[logging]
    src_agents_cli_runner[src-agents-cli-runner] --> logging[logging]
    src_agents_cli_runner[src-agents-cli-runner] --> mcp[mcp]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> plugins[plugins]
    src_agents_cli_runner[src-agents-cli-runner] --> supervisor[supervisor]
    src_agents_cli_runner[src-agents-cli-runner] --> routing[routing]
    src_agents_cli_runner[src-agents-cli-runner] --> sessions[sessions]
    src_agents_cli_runner[src-agents-cli-runner] --> loading[loading]
    src_agents_cli_runner[src-agents-cli-runner] --> runtime[runtime]
    src_agents_cli_runner[src-agents-cli-runner] --> runtime[runtime]
    src_agents_cli_runner[src-agents-cli-runner] --> test_utils[test-utils]
    src_agents_cli_runner[src-agents-cli-runner] --> test_utils[test-utils]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> utils[utils]
    src_agents_cli_runner[src-agents-cli-runner] --> utils[utils]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> auth_profiles[auth-profiles]
    src_agents_cli_runner[src-agents-cli-runner] --> auth_profiles[auth-profiles]
    src_agents_cli_runner[src-agents-cli-runner] --> auth_profiles[auth-profiles]
    src_agents_cli_runner[src-agents-cli-runner] --> auth_profiles[auth-profiles]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> command[command]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> run[run]
    src_agents_cli_runner[src-agents-cli-runner] --> run[run]
    src_agents_cli_runner[src-agents-cli-runner] --> run[run]
    src_agents_cli_runner[src-agents-cli-runner] --> run[run]
    src_agents_cli_runner[src-agents-cli-runner] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> harness[harness]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> sessions[sessions]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> __[..]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> _[.]
    src_agents_cli_runner[src-agents-cli-runner] --> server[server]
    src_agents_cli_runner[src-agents-cli-runner] --> server[server]
    src_agents_cli_runner[src-agents-cli-runner] --> internal[internal]
    src_agents_cli_runner[src-agents-cli-runner] --> media_core[media-core]
    src_agents_cli_runner[src-agents-cli-runner] --> media_core[media-core]
    src_agents_cli_runner[src-agents-cli-runner] --> _openclaw[@openclaw]
    src_agents_cli_runner[src-agents-cli-runner] --> normalization_core[normalization-core]
    src_agents_cli_runner[src-agents-cli-runner] --> normalization_core[normalization-core]
    src_agents_cli_runner[src-agents-cli-runner] --> normalization_core[normalization-core]
    src_agents_cli_runner[src-agents-cli-runner] --> normalization_core[normalization-core]
    src_agents_cli_runner[src-agents-cli-runner] --> node_child_process[node:child_process]
    src_agents_cli_runner[src-agents-cli-runner] --> node_crypto[node:crypto]
    src_agents_cli_runner[src-agents-cli-runner] --> node_fs[node:fs]
    src_agents_cli_runner[src-agents-cli-runner] --> node_fs[node:fs]
    src_agents_cli_runner[src-agents-cli-runner] --> node_http[node:http]
    src_agents_cli_runner[src-agents-cli-runner] --> node_os[node:os]
    src_agents_cli_runner[src-agents-cli-runner] --> node_path[node:path]
    src_agents_cli_runner[src-agents-cli-runner] --> node_util[node:util]
    src_agents_cli_runner[src-agents-cli-runner] --> plugin_sdk[plugin-sdk]
    src_agents_cli_runner[src-agents-cli-runner] --> plugin_sdk[plugin-sdk]
    src_agents_cli_runner[src-agents-cli-runner] --> typebox[typebox]
    src_agents_cli_runner[src-agents-cli-runner] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/normalization-core/src/record-coerce.js`
- `../../../test/helpers/temp-dir.js`
- `../../acp/runtime/availability.js`
- `../../auto-reply/reply/groups.js`
- `../../config/config.js`
- `../../config/mcp-config-normalize.js`
- `../../config/merge-patch.js`
- `../../config/sessions/main-session.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/transcript-tree.js`
- `../../context-engine/host-compat.js`
- `../../context-engine/init.js`
- `../../context-engine/legacy.registration.js`
- `../../context-engine/registry.js`
- `../../gateway/mcp-grant-store.js`
- `../../gateway/mcp-http.js`
- `../../gateway/mcp-http.loopback-runtime.js`
- `../../gateway/mcp-http.runtime.js`
- `../../gateway/node-agent-cli-runtime.js`
- `../../globals.js`
- `../../infra/abort-signal.js`
- `../../infra/agent-events.js`
- `../../infra/diagnostic-error-metadata.js`
- `../../infra/diagnostic-event-listener-presence.js`
- `../../infra/diagnostic-events.js`
- `../../infra/diagnostic-llm-content.js`
- `../../infra/diagnostic-trace-context.js`
- `../../infra/env.js`
- `../../infra/errors.js`
- `../../infra/event-session-routing.js`
- `../../infra/exec-approvals.js`
- `../../infra/file-read.js`
- `../../infra/heartbeat-wake.js`
- `../../infra/host-env-security.js`
- `../../infra/json-files.js`
- `../../infra/os-summary.js`
- `../../infra/outbound/internal-source-reply.js`
- `../../infra/path-guards.js`
- `../../infra/private-file-store.js`
- `../../infra/private-temp-workspace.js`
- `../../infra/system-events.js`
- `../../infra/tmp-openclaw-dir.js`
- `../../logging/diagnostic-run-activity.js`
- `../../logging/subsystem.js`
- `../../mcp/openclaw-tools-serve-config.js`
- `../../plugins/bundle-mcp.js`
- `../../plugins/bundle-mcp.test-support.js`
- `../../plugins/command-registry-state.js`
- `../../plugins/commands.js`
- `../../plugins/hook-agent-context.js`
- `../../plugins/hook-runner-global.js`
- `../../plugins/memory-state.test-fixtures.js`
- `../../plugins/runtime.js`
- `../../process/supervisor/index.js`
- `../../routing/session-key.js`
- `../../sessions/input-provenance.js`
- `../../skills/loading/workspace.js`
- `../../skills/runtime/embedded-run-entries.js`
- `../../skills/runtime/env-overrides.js`
- `../../test-utils/channel-plugins.js`
- `../../test-utils/env.js`
- `../../utils.js`
- `../../utils/message-channel.js`
- `../../utils/utf8-truncate.js`
- `../agent-scope-config.js`
- `../agent-scope.js`
- `../auth-profiles/external-cli-discovery.js`
- `../auth-profiles/oauth.js`
- `../auth-profiles/order.js`
- `../auth-profiles/store.js`
- `../bash-tools.exec-approval-request.js`
- `../bootstrap-budget.js`
- `../bootstrap-files.js`
- `../bootstrap-routing.js`
- `../bundle-mcp-config.js`
- `../cli-auth-epoch.js`
- `../cli-auth-epoch.test-support.js`
- `../cli-backends.js`
- `../cli-backends.test-support.js`
- `../cli-executable-identity.js`
- `../cli-output.js`
- `../cli-runner.test-support.js`
- `../cli-session.js`
- `../cli-watchdog-defaults.js`
- `../codex-mcp-config.js`
- `../command/attempt-execution.helpers.js`
- `../context-window-guard.js`
- `../context.js`
- `../defaults.js`
- `../embedded-agent-helpers.js`
- `../embedded-agent-message-tool-source-reply.js`
- `../embedded-agent-messaging.js`
- `../embedded-agent-runner/run/attempt.prompt-helpers.js`
- `../embedded-agent-runner/run/attempt.thread-helpers.js`
- `../embedded-agent-runner/run/images.js`
- `../embedded-agent-runner/run/runtime-context-prompt.js`
- `../embedded-agent-runner/sandbox-skills.js`
- `../embedded-agent-subscribe.tools.js`
- `../failover-error.js`
- `../harness/hook-history.js`
- `../heartbeat-system-prompt.js`
- `../image-generation-task-status.js`
- `../lanes.js`
- `../live-test-helpers.js`
- `../mcp-auth-profile.js`
- `../mcp-connection-resolver.js`
- `../model-selection.js`
- `../music-generation-task-status.js`
- `../plugin-text-transforms.js`
- `../run-termination.js`
- `../runtime-capabilities.js`
- `../sandbox.js`
- `../sessions/session-manager.js`
- `../shell-utils.js`
- `../system-prompt-config.js`
- `../system-prompt-params.js`
- `../system-prompt-report.js`
- `../system-prompt.js`
- `../tool-images.js`
- `../tool-policy.js`
- `../video-generation-task-status.js`
- `../workspace-run.js`
- `../workspace.js`
- `./bundle-mcp-adapter-shared.js`
- `./bundle-mcp-claude.js`
- `./bundle-mcp-codex.js`
- `./bundle-mcp-gemini.js`
- `./bundle-mcp.js`
- `./bundle-mcp.test-support.js`
- `./claude-live-session-policy.js`
- `./claude-live-session.js`
- `./claude-live-session.test-support.js`
- `./claude-skills-plugin.js`
- `./delivery-evidence.js`
- `./execute-messaging.js`
- `./execute-node-claude.js`
- `./execute-output-buffer.js`
- `./execute.js`
- `./execute.test-support.js`
- `./helpers.js`
- `./log.js`
- `./mcp-grant-context.js`
- `./model-call-diagnostics.js`
- `./output-error.js`
- `./prepare-claude.js`
- `./prepare.js`
- `./prepare.test-support.js`
- `./reseed-envelope.js`
- `./run-diagnostics.js`
- `./session-history.js`
- `./toml-inline.js`
- `./tool-policy.js`
- `@modelcontextprotocol/sdk/server/mcp.js`
- `@modelcontextprotocol/sdk/server/streamableHttp.js`
- `@openclaw/ai/internal/shared`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/mime`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:os`
- `node:path`
- `node:util`
- `openclaw/plugin-sdk/agent-sessions`
- `openclaw/plugin-sdk/keyed-async-queue`
- `typebox`
- `vitest`
