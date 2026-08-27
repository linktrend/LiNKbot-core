# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_acp_control_plane[src-acp-control-plane] --> helpers[helpers]
    src_acp_control_plane[src-acp-control-plane] --> agents[agents]
    src_acp_control_plane[src-acp-control-plane] --> config[config]
    src_acp_control_plane[src-acp-control-plane] --> sessions[sessions]
    src_acp_control_plane[src-acp-control-plane] --> gateway[gateway]
    src_acp_control_plane[src-acp-control-plane] --> __[..]
    src_acp_control_plane[src-acp-control-plane] --> infra[infra]
    src_acp_control_plane[src-acp-control-plane] --> outbound[outbound]
    src_acp_control_plane[src-acp-control-plane] --> infra[infra]
    src_acp_control_plane[src-acp-control-plane] --> routing[routing]
    src_acp_control_plane[src-acp-control-plane] --> sessions[sessions]
    src_acp_control_plane[src-acp-control-plane] --> sessions[sessions]
    src_acp_control_plane[src-acp-control-plane] --> shared[shared]
    src_acp_control_plane[src-acp-control-plane] --> state[state]
    src_acp_control_plane[src-acp-control-plane] --> tasks[tasks]
    src_acp_control_plane[src-acp-control-plane] --> tasks[tasks]
    src_acp_control_plane[src-acp-control-plane] --> test_utils[test-utils]
    src_acp_control_plane[src-acp-control-plane] --> runtime[runtime]
    src_acp_control_plane[src-acp-control-plane] --> runtime[runtime]
    src_acp_control_plane[src-acp-control-plane] --> runtime[runtime]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> _[.]
    src_acp_control_plane[src-acp-control-plane] --> acp_core[acp-core]
    src_acp_control_plane[src-acp-control-plane] --> runtime[runtime]
    src_acp_control_plane[src-acp-control-plane] --> runtime[runtime]
    src_acp_control_plane[src-acp-control-plane] --> _openclaw[@openclaw]
    src_acp_control_plane[src-acp-control-plane] --> normalization_core[normalization-core]
    src_acp_control_plane[src-acp-control-plane] --> normalization_core[normalization-core]
    src_acp_control_plane[src-acp-control-plane] --> normalization_core[normalization-core]
    src_acp_control_plane[src-acp-control-plane] --> normalization_core[normalization-core]
    src_acp_control_plane[src-acp-control-plane] --> node_path[node:path]
    src_acp_control_plane[src-acp-control-plane] --> node_timers[node:timers]
    src_acp_control_plane[src-acp-control-plane] --> node_timers[node:timers]
    src_acp_control_plane[src-acp-control-plane] --> plugin_sdk[plugin-sdk]
    src_acp_control_plane[src-acp-control-plane] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/acp-manager-task-state.js`
- `../../agents/timeout.js`
- `../../config/runtime-snapshot.js`
- `../../config/sessions/main-session.js`
- `../../gateway/call.js`
- `../../globals.js`
- `../../infra/errors.js`
- `../../infra/outbound/session-binding-service.js`
- `../../infra/parse-finite-number.js`
- `../../routing/session-key.js`
- `../../sessions/session-key-utils.js`
- `../../sessions/session-state-events.js`
- `../../shared/global-singleton.js`
- `../../state/openclaw-state-db.js`
- `../../tasks/detached-task-runtime.js`
- `../../tasks/task-completion-contract.js`
- `../../test-utils/env.js`
- `../runtime/errors.js`
- `../runtime/registry.js`
- `../runtime/session-meta.js`
- `./active-turns.js`
- `./active-turns.test-support.js`
- `./manager.backend-failover.js`
- `./manager.background-task.js`
- `./manager.cancel-session.js`
- `./manager.close-session.js`
- `./manager.core.js`
- `./manager.identity-reconcile.js`
- `./manager.initialize-session.js`
- `./manager.js`
- `./manager.runtime-controls.js`
- `./manager.runtime-handle-cache.js`
- `./manager.runtime-handle-ensure.js`
- `./manager.runtime-options-commands.js`
- `./manager.runtime-resume-state.js`
- `./manager.startup-identity-reconcile.js`
- `./manager.status.js`
- `./manager.test-helpers.js`
- `./manager.turn-runner.js`
- `./manager.turn-stream.js`
- `./manager.turn-timeout.js`
- `./manager.types.js`
- `./manager.utils.js`
- `./runtime-cache.js`
- `./runtime-options.js`
- `./session-actor-queue.js`
- `@openclaw/acp-core/normalize-text`
- `@openclaw/acp-core/runtime/errors`
- `@openclaw/acp-core/runtime/session-identity`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:path`
- `node:timers`
- `node:timers/promises`
- `openclaw/plugin-sdk/keyed-async-queue`
- `vitest`
