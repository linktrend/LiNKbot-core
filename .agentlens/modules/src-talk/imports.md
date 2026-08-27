# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_talk[src-talk] --> embedded_agent_runner[embedded-agent-runner]
    src_talk[src-talk] --> agents[agents]
    src_talk[src-talk] --> reply[reply]
    src_talk[src-talk] --> sessions[sessions]
    src_talk[src-talk] --> sessions[sessions]
    src_talk[src-talk] --> sessions[sessions]
    src_talk[src-talk] --> infra[infra]
    src_talk[src-talk] --> infra[infra]
    src_talk[src-talk] --> outbound[outbound]
    src_talk[src-talk] --> outbound[outbound]
    src_talk[src-talk] --> logging[logging]
    src_talk[src-talk] --> logging[logging]
    src_talk[src-talk] --> plugin_sdk[plugin-sdk]
    src_talk[src-talk] --> plugins[plugins]
    src_talk[src-talk] --> plugins[plugins]
    src_talk[src-talk] --> plugins[plugins]
    src_talk[src-talk] --> routing[routing]
    src_talk[src-talk] --> sessions[sessions]
    src_talk[src-talk] --> sessions[sessions]
    src_talk[src-talk] --> shared[shared]
    src_talk[src-talk] --> shared[shared]
    src_talk[src-talk] --> state[state]
    src_talk[src-talk] --> state[state]
    src_talk[src-talk] --> test_utils[test-utils]
    src_talk[src-talk] --> __[..]
    src_talk[src-talk] --> utils[utils]
    src_talk[src-talk] --> utils[utils]
    src_talk[src-talk] --> utils[utils]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _[.]
    src_talk[src-talk] --> _openclaw[@openclaw]
    src_talk[src-talk] --> normalization_core[normalization-core]
    src_talk[src-talk] --> normalization_core[normalization-core]
    src_talk[src-talk] --> normalization_core[normalization-core]
    src_talk[src-talk] --> normalization_core[normalization-core]
    src_talk[src-talk] --> normalization_core[normalization-core]
    src_talk[src-talk] --> node_crypto[node:crypto]
    src_talk[src-talk] --> node_fs[node:fs]
    src_talk[src-talk] --> node_fs[node:fs]
    src_talk[src-talk] --> node_os[node:os]
    src_talk[src-talk] --> node_path[node:path]
    src_talk[src-talk] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../agents/embedded-agent-runner/runs.js`
- `../agents/tool-mutation.js`
- `../auto-reply/reply/session-fork.js`
- `../config/sessions/lifecycle.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/thread-info.js`
- `../infra/diagnostic-events.js`
- `../infra/errors.js`
- `../infra/outbound/session-context.js`
- `../infra/outbound/targets-session.js`
- `../logging/diagnostic-run-activity.js`
- `../logging/logger.js`
- `../plugin-sdk/provider-selection-runtime.js`
- `../plugins/capability-provider-runtime.js`
- `../plugins/memory-runtime.js`
- `../plugins/provider-registry-shared.js`
- `../routing/session-key.js`
- `../sessions/model-overrides.js`
- `../sessions/session-lifecycle-admission.js`
- `../shared/levenshtein-distance.js`
- `../shared/number-coercion.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-state-db.js`
- `../test-utils/env.js`
- `../utils.js`
- `../utils/delivery-context.shared.js`
- `../utils/string-readers.js`
- `../utils/with-timeout.js`
- `./activation-name.js`
- `./agent-consult-runtime.js`
- `./agent-consult-tool.js`
- `./agent-run-control-shared.js`
- `./agent-run-control.js`
- `./agent-talkback-runtime.js`
- `./audio-codec.js`
- `./audio-energy.js`
- `./client-voice-confirmation.js`
- `./client-voice-confirmation.test-support.js`
- `./client-voice-session-store.js`
- `./client-voice-session.js`
- `./client-voice-session.test-support.js`
- `./consult-question.js`
- `./consult-transcript.js`
- `./diagnostics.js`
- `./event-metrics.js`
- `./fast-context-runtime.js`
- `./forced-consult-coordinator.js`
- `./logging.js`
- `./observability.js`
- `./output-activity-tracker.js`
- `./provider-registry.js`
- `./provider-resolver.js`
- `./provider-types.js`
- `./realtime-session-harness.js`
- `./session-log-runtime.js`
- `./session-runtime.js`
- `./talk-events.js`
- `./talk-session-controller.js`
- `./turn-context-tracker.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
