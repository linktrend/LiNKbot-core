# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugins_runtime[src-plugins-runtime] --> src[src]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> embedded_agent_runner[embedded-agent-runner]
    src_plugins_runtime[src-plugins-runtime] --> embedded_agent_runner[embedded-agent-runner]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> sandbox[sandbox]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> agents[agents]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> reply[reply]
    src_plugins_runtime[src-plugins-runtime] --> reply[reply]
    src_plugins_runtime[src-plugins-runtime] --> reply[reply]
    src_plugins_runtime[src-plugins-runtime] --> reply[reply]
    src_plugins_runtime[src-plugins-runtime] --> reply[reply]
    src_plugins_runtime[src-plugins-runtime] --> auto_reply[auto-reply]
    src_plugins_runtime[src-plugins-runtime] --> channels[channels]
    src_plugins_runtime[src-plugins-runtime] --> channels[channels]
    src_plugins_runtime[src-plugins-runtime] --> inbound_event[inbound-event]
    src_plugins_runtime[src-plugins-runtime] --> channels[channels]
    src_plugins_runtime[src-plugins-runtime] --> plugins[plugins]
    src_plugins_runtime[src-plugins-runtime] --> outbound[outbound]
    src_plugins_runtime[src-plugins-runtime] --> channels[channels]
    src_plugins_runtime[src-plugins-runtime] --> turn[turn]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> config[config]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> gateway[gateway]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> image_generation[image-generation]
    src_plugins_runtime[src-plugins-runtime] --> infra[infra]
    src_plugins_runtime[src-plugins-runtime] --> infra[infra]
    src_plugins_runtime[src-plugins-runtime] --> infra[infra]
    src_plugins_runtime[src-plugins-runtime] --> infra[infra]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> logging[logging]
    src_plugins_runtime[src-plugins-runtime] --> media[media]
    src_plugins_runtime[src-plugins-runtime] --> media[media]
    src_plugins_runtime[src-plugins-runtime] --> media[media]
    src_plugins_runtime[src-plugins-runtime] --> media[media]
    src_plugins_runtime[src-plugins-runtime] --> media[media]
    src_plugins_runtime[src-plugins-runtime] --> music_generation[music-generation]
    src_plugins_runtime[src-plugins-runtime] --> pairing[pairing]
    src_plugins_runtime[src-plugins-runtime] --> pairing[pairing]
    src_plugins_runtime[src-plugins-runtime] --> plugin_sdk[plugin-sdk]
    src_plugins_runtime[src-plugins-runtime] --> process[process]
    src_plugins_runtime[src-plugins-runtime] --> routing[routing]
    src_plugins_runtime[src-plugins-runtime] --> routing[routing]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> sessions[sessions]
    src_plugins_runtime[src-plugins-runtime] --> shared[shared]
    src_plugins_runtime[src-plugins-runtime] --> shared[shared]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> tasks[tasks]
    src_plugins_runtime[src-plugins-runtime] --> test_utils[test-utils]
    src_plugins_runtime[src-plugins-runtime] --> utils[utils]
    src_plugins_runtime[src-plugins-runtime] --> utils[utils]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> video_generation[video-generation]
    src_plugins_runtime[src-plugins-runtime] --> web_search[web-search]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> __[..]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> _[.]
    src_plugins_runtime[src-plugins-runtime] --> media_core[media-core]
    src_plugins_runtime[src-plugins-runtime] --> media_core[media-core]
    src_plugins_runtime[src-plugins-runtime] --> model_catalog_core[model-catalog-core]
    src_plugins_runtime[src-plugins-runtime] --> _openclaw[@openclaw]
    src_plugins_runtime[src-plugins-runtime] --> normalization_core[normalization-core]
    src_plugins_runtime[src-plugins-runtime] --> normalization_core[normalization-core]
    src_plugins_runtime[src-plugins-runtime] --> node_async_hooks[node:async_hooks]
    src_plugins_runtime[src-plugins-runtime] --> node_events[node:events]
    src_plugins_runtime[src-plugins-runtime] --> node_fs[node:fs]
    src_plugins_runtime[src-plugins-runtime] --> node_os[node:os]
    src_plugins_runtime[src-plugins-runtime] --> node_path[node:path]
    src_plugins_runtime[src-plugins-runtime] --> node_util[node:util]
    src_plugins_runtime[src-plugins-runtime] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/markdown-core/src/tables.js`
- `../../agents/agent-scope.js`
- `../../agents/defaults.js`
- `../../agents/embedded-agent-runner/cli-backend-dispatch-eligibility.js`
- `../../agents/embedded-agent-runner/context-engine-capabilities.js`
- `../../agents/identity.js`
- `../../agents/model-auth.js`
- `../../agents/model-ref-shared.js`
- `../../agents/model-selection.js`
- `../../agents/sandbox/workspace-authority.js`
- `../../agents/thinking-runtime.js`
- `../../agents/timeout.js`
- `../../agents/usage.js`
- `../../agents/workspace.js`
- `../../auto-reply/chunk.js`
- `../../auto-reply/command-detection.js`
- `../../auto-reply/commands-registry.js`
- `../../auto-reply/dispatch.js`
- `../../auto-reply/envelope.js`
- `../../auto-reply/inbound-debounce.js`
- `../../auto-reply/reply/dispatch-from-config.js`
- `../../auto-reply/reply/inbound-context.js`
- `../../auto-reply/reply/mentions.js`
- `../../auto-reply/reply/provider-dispatcher.js`
- `../../auto-reply/reply/reply-dispatcher.js`
- `../../auto-reply/thinking.js`
- `../../channels/ack-reactions.js`
- `../../channels/command-gating.js`
- `../../channels/inbound-event/context.js`
- `../../channels/mention-gating.js`
- `../../channels/plugins/conversation-bindings.js`
- `../../channels/plugins/outbound/load.js`
- `../../channels/session.js`
- `../../channels/turn/kernel.js`
- `../../config/config.js`
- `../../config/group-policy.js`
- `../../config/markdown-tables.js`
- `../../config/mutate.js`
- `../../config/paths.js`
- `../../config/plugin-auto-enable.apply.js`
- `../../config/plugin-auto-enable.js`
- `../../config/sessions.js`
- `../../config/sessions/entry-freshness.js`
- `../../config/sessions/lifecycle.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/store-maintenance.js`
- `../../gateway/session-create-service.js`
- `../../globals.js`
- `../../image-generation/runtime.js`
- `../../infra/agent-events.js`
- `../../infra/channel-activity.js`
- `../../infra/heartbeat-wake.js`
- `../../infra/system-events.js`
- `../../logging.js`
- `../../logging/levels.js`
- `../../media/audio.js`
- `../../media/fetch.js`
- `../../media/media-services.js`
- `../../media/store.js`
- `../../media/web-media.js`
- `../../music-generation/runtime.js`
- `../../pairing/pairing-messages.js`
- `../../pairing/pairing-store.js`
- `../../plugin-sdk/error-runtime.js`
- `../../process/exec.js`
- `../../routing/resolve-route.js`
- `../../routing/session-key.js`
- `../../sessions/session-lifecycle-admission.js`
- `../../sessions/transcript-events.js`
- `../../shared/global-singleton.js`
- `../../shared/lazy-runtime.js`
- `../../tasks/detached-task-runtime.js`
- `../../tasks/runtime-internal.js`
- `../../tasks/task-domain-views.js`
- `../../tasks/task-executor.js`
- `../../tasks/task-flow-owner-access.js`
- `../../tasks/task-flow-registry.js`
- `../../tasks/task-flow-runtime-internal.js`
- `../../tasks/task-owner-access.js`
- `../../tasks/task-registry.js`
- `../../tasks/task-runtime.test-helpers.js`
- `../../test-utils/openclaw-test-state.js`
- `../../utils/delivery-context.shared.js`
- `../../utils/usage-format.js`
- `../../version.js`
- `../../video-generation/runtime.js`
- `../../web-search/runtime.js`
- `../activation-context.js`
- `../activation-source-config.js`
- `../active-runtime-registry.js`
- `../channel-plugin-ids.js`
- `../config-state.js`
- `../current-plugin-metadata-snapshot.js`
- `../effective-plugin-ids.js`
- `../installed-plugin-index-install-records.js`
- `../loader.js`
- `../loader.test-fixtures.js`
- `../manifest-registry.js`
- `../native-module-require.js`
- `../plugin-metadata-lifecycle.js`
- `../plugin-metadata-snapshot.js`
- `../plugin-module-loader-cache.js`
- `../plugin-scope.js`
- `../provider-runtime.runtime.js`
- `../registry-empty.js`
- `../registry.js`
- `../runtime.js`
- `./channel-runtime-contexts.js`
- `./gateway-bindings.js`
- `./gateway-bindings.test-fixtures.js`
- `./gateway-request-scope.js`
- `./index.js`
- `./load-context.js`
- `./native-deps.js`
- `./runtime-agent-thinking.js`
- `./runtime-agent.js`
- `./runtime-cache.js`
- `./runtime-channel.js`
- `./runtime-config.js`
- `./runtime-events.js`
- `./runtime-llm.runtime.js`
- `./runtime-logging.js`
- `./runtime-media.js`
- `./runtime-plugin-boundary.js`
- `./runtime-system.js`
- `./runtime-task-test-harness.js`
- `./runtime-taskflow.js`
- `./runtime-tasks.js`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/mime`
- `@openclaw/model-catalog-core/model-catalog-refs`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `node:async_hooks`
- `node:events`
- `node:fs`
- `node:os`
- `node:path`
- `node:util`
- `vitest`
