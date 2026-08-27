# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_sessions[src-sessions] --> helpers[helpers]
    src_sessions[src-sessions] --> agents[agents]
    src_sessions[src-sessions] --> agents[agents]
    src_sessions[src-sessions] --> harness[harness]
    src_sessions[src-sessions] --> reply[reply]
    src_sessions[src-sessions] --> auto_reply[auto-reply]
    src_sessions[src-sessions] --> channels[channels]
    src_sessions[src-sessions] --> plugins[plugins]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> sessions[sessions]
    src_sessions[src-sessions] --> infra[infra]
    src_sessions[src-sessions] --> infra[infra]
    src_sessions[src-sessions] --> infra[infra]
    src_sessions[src-sessions] --> infra[infra]
    src_sessions[src-sessions] --> logging[logging]
    src_sessions[src-sessions] --> plugins[plugins]
    src_sessions[src-sessions] --> process[process]
    src_sessions[src-sessions] --> routing[routing]
    src_sessions[src-sessions] --> shared[shared]
    src_sessions[src-sessions] --> shared[shared]
    src_sessions[src-sessions] --> state[state]
    src_sessions[src-sessions] --> state[state]
    src_sessions[src-sessions] --> utils[utils]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> _[.]
    src_sessions[src-sessions] --> media_core[media-core]
    src_sessions[src-sessions] --> _openclaw[@openclaw]
    src_sessions[src-sessions] --> normalization_core[normalization-core]
    src_sessions[src-sessions] --> normalization_core[normalization-core]
    src_sessions[src-sessions] --> node_async_hooks[node:async_hooks]
    src_sessions[src-sessions] --> node_crypto[node:crypto]
    src_sessions[src-sessions] --> node_fs[node:fs]
    src_sessions[src-sessions] --> node_os[node:os]
    src_sessions[src-sessions] --> node_path[node:path]
    src_sessions[src-sessions] --> plugin_sdk[plugin-sdk]
    src_sessions[src-sessions] --> plugin_sdk[plugin-sdk]
    src_sessions[src-sessions] --> plugin_sdk[plugin-sdk]
    src_sessions[src-sessions] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test/helpers/temp-dir.js`
- `../agents/agent-runtime-id.js`
- `../agents/embedded-agent.js`
- `../agents/harness/hook-helpers.js`
- `../auto-reply/reply/session-system-events.js`
- `../auto-reply/thinking.js`
- `../channels/chat-type.js`
- `../channels/plugins/bootstrap-registry.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/session-store-path.js`
- `../config/sessions/sqlite-marker.js`
- `../config/sessions/store-entry.js`
- `../config/sessions/store-writer.js`
- `../config/sessions/transcript.js`
- `../infra/heartbeat-wake.js`
- `../infra/kysely-sync.js`
- `../infra/sqlite-number.js`
- `../infra/system-events.js`
- `../logging/subsystem.js`
- `../plugins/runtime-state.js`
- `../process/gateway-work-admission.js`
- `../routing/session-key.js`
- `../shared/global-singleton.js`
- `../shared/store-writer-queue.js`
- `../state/openclaw-state-db.js`
- `../state/session-watch-cursor-provenance.js`
- `../utils/string-readers.js`
- `./agent-harness-session-key.js`
- `./classify-session-kind.js`
- `./conversation-turns.js`
- `./input-provenance.js`
- `./model-overrides.js`
- `./send-policy.js`
- `./session-chat-type-shared.js`
- `./session-chat-type.js`
- `./session-id-resolution.js`
- `./session-id.js`
- `./session-key-utils.js`
- `./session-lifecycle-admission.js`
- `./session-lifecycle-events.js`
- `./session-lifecycle-identity.js`
- `./session-state-event-kinds.js`
- `./session-state-events.js`
- `./session-state-notices.js`
- `./session-upstream-links.js`
- `./session-upstream-monitor.js`
- `./session-upstream-monitor.test-support.js`
- `./session-work-admission-handoff.js`
- `./transcript-events.js`
- `./user-turn-transcript.js`
- `./user-turn-transcript.test-support.js`
- `@openclaw/media-core/mime`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `node:async_hooks`
- `node:crypto`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/hook-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/test-fixtures`
- `vitest`
