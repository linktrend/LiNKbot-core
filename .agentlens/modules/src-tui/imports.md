# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_tui[src-tui] --> src[src]
    src_tui[src-tui] --> src[src]
    src_tui[src-tui] --> src[src]
    src_tui[src-tui] --> helpers[helpers]
    src_tui[src-tui] --> helpers[helpers]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> embedded_agent_runner[embedded-agent-runner]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> agents[agents]
    src_tui[src-tui] --> auto_reply[auto-reply]
    src_tui[src-tui] --> auto_reply[auto-reply]
    src_tui[src-tui] --> auto_reply[auto-reply]
    src_tui[src-tui] --> reply[reply]
    src_tui[src-tui] --> queue[queue]
    src_tui[src-tui] --> queue[queue]
    src_tui[src-tui] --> reply[reply]
    src_tui[src-tui] --> auto_reply[auto-reply]
    src_tui[src-tui] --> cli[cli]
    src_tui[src-tui] --> config[config]
    src_tui[src-tui] --> config[config]
    src_tui[src-tui] --> sessions[sessions]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> server_methods[server-methods]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> gateway[gateway]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> format_time[format-time]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> infra[infra]
    src_tui[src-tui] --> __[..]
    src_tui[src-tui] --> logging[logging]
    src_tui[src-tui] --> logging[logging]
    src_tui[src-tui] --> process[process]
    src_tui[src-tui] --> process[process]
    src_tui[src-tui] --> process[process]
    src_tui[src-tui] --> routing[routing]
    src_tui[src-tui] --> __[..]
    src_tui[src-tui] --> sessions[sessions]
    src_tui[src-tui] --> sessions[sessions]
    src_tui[src-tui] --> shared[shared]
    src_tui[src-tui] --> shared[shared]
    src_tui[src-tui] --> shared[shared]
    src_tui[src-tui] --> shared[shared]
    src_tui[src-tui] --> shared[shared]
    src_tui[src-tui] --> state[state]
    src_tui[src-tui] --> state[state]
    src_tui[src-tui] --> state[state]
    src_tui[src-tui] --> state[state]
    src_tui[src-tui] --> test_utils[test-utils]
    src_tui[src-tui] --> test_utils[test-utils]
    src_tui[src-tui] --> test_utils[test-utils]
    src_tui[src-tui] --> utils[utils]
    src_tui[src-tui] --> utils[utils]
    src_tui[src-tui] --> utils[utils]
    src_tui[src-tui] --> utils[utils]
    src_tui[src-tui] --> __[..]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> components[components]
    src_tui[src-tui] --> components[components]
    src_tui[src-tui] --> components[components]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> theme[theme]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _[.]
    src_tui[src-tui] --> _earendil_works[@earendil-works]
    src_tui[src-tui] --> _openclaw[@openclaw]
    src_tui[src-tui] --> normalization_core[normalization-core]
    src_tui[src-tui] --> normalization_core[normalization-core]
    src_tui[src-tui] --> normalization_core[normalization-core]
    src_tui[src-tui] --> node_child_process[node:child_process]
    src_tui[src-tui] --> node_crypto[node:crypto]
    src_tui[src-tui] --> node_events[node:events]
    src_tui[src-tui] --> node_fs[node:fs]
    src_tui[src-tui] --> node_fs[node:fs]
    src_tui[src-tui] --> node_http[node:http]
    src_tui[src-tui] --> node_os[node:os]
    src_tui[src-tui] --> node_path[node:path]
    src_tui[src-tui] --> node_string_decoder[node:string_decoder]
    src_tui[src-tui] --> node_url[node:url]
    src_tui[src-tui] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-protocol/src/client-info.js`
- `../../packages/gateway-protocol/src/index.js`
- `../../packages/terminal-core/src/ansi.js`
- `../../test/helpers/normalize-text.js`
- `../../test/helpers/openclaw-test-instance.js`
- `../agents/agent-command.js`
- `../agents/agent-scope.js`
- `../agents/context.js`
- `../agents/defaults.js`
- `../agents/embedded-agent-helpers.js`
- `../agents/embedded-agent-runner/runs.js`
- `../agents/internal-runtime-context.js`
- `../agents/model-ref-profile.js`
- `../agents/model-ref-shared.js`
- `../agents/model-selection-display.js`
- `../agents/model-selection.js`
- `../agents/runtime-plugins.js`
- `../agents/tool-error-summary.js`
- `../auto-reply/commands-registry.js`
- `../auto-reply/commands-registry.shared.js`
- `../auto-reply/group-activation.js`
- `../auto-reply/reply/commands-goal.js`
- `../auto-reply/reply/queue/settings.js`
- `../auto-reply/reply/queue/state.js`
- `../auto-reply/reply/strip-inbound-meta.js`
- `../auto-reply/thinking.js`
- `../cli/deps.js`
- `../config/config.js`
- `../config/sessions.js`
- `../config/sessions/session-accessor.js`
- `../gateway/auth-mode-policy.js`
- `../gateway/auth-surface-resolution.js`
- `../gateway/call.js`
- `../gateway/chat-abort.js`
- `../gateway/chat-display-projection.js`
- `../gateway/cli-session-history.js`
- `../gateway/client-start-readiness.js`
- `../gateway/client.js`
- `../gateway/gateway-connection.test-mocks.js`
- `../gateway/live-chat-projector.js`
- `../gateway/net.js`
- `../gateway/server-constants.js`
- `../gateway/server-methods/chat.js`
- `../gateway/server-model-catalog.js`
- `../gateway/session-create-service.js`
- `../gateway/session-reset-service.js`
- `../gateway/session-transcript-readers.js`
- `../gateway/session-utils.js`
- `../gateway/sessions-patch.js`
- `../infra/agent-events.js`
- `../infra/approval-errors.js`
- `../infra/embedded-mode.js`
- `../infra/embedded-plugin-approval-broker.js`
- `../infra/errors.js`
- `../infra/format-time/format-relative.ts`
- `../infra/gateway-lock.js`
- `../infra/kysely-sync.js`
- `../infra/parse-finite-number.js`
- `../infra/safe-cwd.js`
- `../infra/unhandled-rejections.js`
- `../infra/windows-install-roots.js`
- `../logger.js`
- `../logging/console.js`
- `../logging/state.js`
- `../process/child-process-bridge.js`
- `../process/exec.js`
- `../process/windows-command.js`
- `../routing/session-key.js`
- `../runtime.js`
- `../sessions/agent-harness-session-key.js`
- `../sessions/session-key-utils.js`
- `../shared/assistant-error-format.js`
- `../shared/chat-message-content.js`
- `../shared/listeners.js`
- `../shared/operator-scope-compat.js`
- `../shared/text-chunking.js`
- `../state/openclaw-state-db-readonly.js`
- `../state/openclaw-state-db-schema-helpers.js`
- `../state/openclaw-state-db.js`
- `../state/openclaw-state-db.paths.js`
- `../test-utils/deferred.js`
- `../test-utils/env.js`
- `../test-utils/vitest-spies.js`
- `../utils/message-channel.js`
- `../utils/queue-helpers.js`
- `../utils/sleep.js`
- `../utils/usage-format.js`
- `../version.js`
- `./commands.js`
- `./components/chat-log.js`
- `./components/custom-editor.js`
- `./components/selectors.js`
- `./gateway-chat.js`
- `./local-run-shutdown.js`
- `./osc8-hyperlinks.js`
- `./setup-launch-env.js`
- `./theme/theme.js`
- `./tui-busy-notice.js`
- `./tui-command-handlers.js`
- `./tui-event-handlers.js`
- `./tui-formatters.js`
- `./tui-last-session.js`
- `./tui-launch.js`
- `./tui-local-shell.js`
- `./tui-overlays.js`
- `./tui-plugin-approvals.js`
- `./tui-pty-test-support.js`
- `./tui-session-actions.js`
- `./tui-session-list-policy.js`
- `./tui-status-summary.js`
- `./tui-stream-assembler.js`
- `./tui-submit-state.js`
- `./tui-submit-test-helpers.js`
- `./tui-submit.js`
- `./tui-task-suggestions.js`
- `./tui-waiting.js`
- `./tui.js`
- `@earendil-works/pi-tui`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:os`
- `node:path`
- `node:string_decoder`
- `node:url`
- `vitest`
