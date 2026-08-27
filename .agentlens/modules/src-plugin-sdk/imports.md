# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> src[src]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> lib[lib]
    src_plugin_sdk[src-plugin-sdk] --> helpers[helpers]
    src_plugin_sdk[src-plugin-sdk] --> control_plane[control-plane]
    src_plugin_sdk[src-plugin-sdk] --> runtime[runtime]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> auth_profiles[auth-profiles]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> embedded_agent_runner[embedded-agent-runner]
    src_plugin_sdk[src-plugin-sdk] --> harness[harness]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> tools[tools]
    src_plugin_sdk[src-plugin-sdk] --> tools[tools]
    src_plugin_sdk[src-plugin-sdk] --> agents[agents]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> reply[reply]
    src_plugin_sdk[src-plugin-sdk] --> channels[channels]
    src_plugin_sdk[src-plugin-sdk] --> channels[channels]
    src_plugin_sdk[src-plugin-sdk] --> channels[channels]
    src_plugin_sdk[src-plugin-sdk] --> inbound_event[inbound-event]
    src_plugin_sdk[src-plugin-sdk] --> message[message]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> channels[channels]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> config[config]
    src_plugin_sdk[src-plugin-sdk] --> gateway[gateway]
    src_plugin_sdk[src-plugin-sdk] --> gateway[gateway]
    src_plugin_sdk[src-plugin-sdk] --> gateway[gateway]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> proxy[proxy]
    src_plugin_sdk[src-plugin-sdk] --> net[net]
    src_plugin_sdk[src-plugin-sdk] --> net[net]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> outbound[outbound]
    src_plugin_sdk[src-plugin-sdk] --> outbound[outbound]
    src_plugin_sdk[src-plugin-sdk] --> outbound[outbound]
    src_plugin_sdk[src-plugin-sdk] --> outbound[outbound]
    src_plugin_sdk[src-plugin-sdk] --> outbound[outbound]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> infra[infra]
    src_plugin_sdk[src-plugin-sdk] --> interactive[interactive]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> stream_wrappers[stream-wrappers]
    src_plugin_sdk[src-plugin-sdk] --> llm[llm]
    src_plugin_sdk[src-plugin-sdk] --> utils[utils]
    src_plugin_sdk[src-plugin-sdk] --> __[..]
    src_plugin_sdk[src-plugin-sdk] --> logging[logging]
    src_plugin_sdk[src-plugin-sdk] --> media[media]
    src_plugin_sdk[src-plugin-sdk] --> memory_host_sdk[memory-host-sdk]
    src_plugin_sdk[src-plugin-sdk] --> memory_host_sdk[memory-host-sdk]
    src_plugin_sdk[src-plugin-sdk] --> pairing[pairing]
    src_plugin_sdk[src-plugin-sdk] --> plugin_state[plugin-state]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> runtime[runtime]
    src_plugin_sdk[src-plugin-sdk] --> plugins[plugins]
    src_plugin_sdk[src-plugin-sdk] --> process[process]
    src_plugin_sdk[src-plugin-sdk] --> process[process]
    src_plugin_sdk[src-plugin-sdk] --> process[process]
    src_plugin_sdk[src-plugin-sdk] --> routing[routing]
    src_plugin_sdk[src-plugin-sdk] --> routing[routing]
    src_plugin_sdk[src-plugin-sdk] --> secrets[secrets]
    src_plugin_sdk[src-plugin-sdk] --> secrets[secrets]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> sessions[sessions]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> shared[shared]
    src_plugin_sdk[src-plugin-sdk] --> tasks[tasks]
    src_plugin_sdk[src-plugin-sdk] --> tasks[tasks]
    src_plugin_sdk[src-plugin-sdk] --> tasks[tasks]
    src_plugin_sdk[src-plugin-sdk] --> test_helpers[test-helpers]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> test_utils[test-utils]
    src_plugin_sdk[src-plugin-sdk] --> __[..]
    src_plugin_sdk[src-plugin-sdk] --> utils[utils]
    src_plugin_sdk[src-plugin-sdk] --> utils[utils]
    src_plugin_sdk[src-plugin-sdk] --> utils[utils]
    src_plugin_sdk[src-plugin-sdk] --> __[..]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> _[.]
    src_plugin_sdk[src-plugin-sdk] --> internal[internal]
    src_plugin_sdk[src-plugin-sdk] --> fs_safe[fs-safe]
    src_plugin_sdk[src-plugin-sdk] --> fs_safe[fs-safe]
    src_plugin_sdk[src-plugin-sdk] --> model_catalog_core[model-catalog-core]
    src_plugin_sdk[src-plugin-sdk] --> model_catalog_core[model-catalog-core]
    src_plugin_sdk[src-plugin-sdk] --> model_catalog_core[model-catalog-core]
    src_plugin_sdk[src-plugin-sdk] --> _openclaw[@openclaw]
    src_plugin_sdk[src-plugin-sdk] --> normalization_core[normalization-core]
    src_plugin_sdk[src-plugin-sdk] --> _openclaw[@openclaw]
    src_plugin_sdk[src-plugin-sdk] --> commander[commander]
    src_plugin_sdk[src-plugin-sdk] --> node_child_process[node:child_process]
    src_plugin_sdk[src-plugin-sdk] --> node_crypto[node:crypto]
    src_plugin_sdk[src-plugin-sdk] --> node_events[node:events]
    src_plugin_sdk[src-plugin-sdk] --> node_fs[node:fs]
    src_plugin_sdk[src-plugin-sdk] --> node_fs[node:fs]
    src_plugin_sdk[src-plugin-sdk] --> node_http[node:http]
    src_plugin_sdk[src-plugin-sdk] --> node_module[node:module]
    src_plugin_sdk[src-plugin-sdk] --> node_net[node:net]
    src_plugin_sdk[src-plugin-sdk] --> node_os[node:os]
    src_plugin_sdk[src-plugin-sdk] --> node_path[node:path]
    src_plugin_sdk[src-plugin-sdk] --> node_url[node:url]
    src_plugin_sdk[src-plugin-sdk] --> node_util[node:util]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> plugin_sdk[plugin-sdk]
    src_plugin_sdk[src-plugin-sdk] --> typebox[typebox]
    src_plugin_sdk[src-plugin-sdk] --> typescript[typescript]
    src_plugin_sdk[src-plugin-sdk] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `zod`

## External Dependencies

Dependencies from other modules:

- `../../packages/agent-core/src/agent.js`
- `../../packages/normalization-core/src/boolean-coercion.js`
- `../../packages/normalization-core/src/expect.js`
- `../../packages/normalization-core/src/number-coercion.js`
- `../../packages/normalization-core/src/record-coerce.js`
- `../../packages/normalization-core/src/string-coerce.js`
- `../../packages/normalization-core/src/string-normalization.js`
- `../../packages/terminal-core/src/ansi.js`
- `../../packages/terminal-core/src/links.js`
- `../../packages/tool-call-repair/src/index.js`
- `../../scripts/lib/plugin-sdk-deprecated-barrel-subpaths.json`
- `../../scripts/lib/plugin-sdk-deprecated-public-subpaths.json`
- `../../scripts/lib/plugin-sdk-doc-metadata.ts`
- `../../scripts/lib/plugin-sdk-entries.mjs`
- `../../scripts/lib/plugin-sdk-entrypoints.json`
- `../../scripts/lib/plugin-sdk-private-local-only-subpaths.json`
- `../../test/helpers/temp-dir.js`
- `../acp/control-plane/manager.js`
- `../acp/runtime/registry.js`
- `../agents/agent-scope-config.js`
- `../agents/agent-scope.js`
- `../agents/announce-idempotency.js`
- `../agents/auth-profiles/external-cli-discovery.js`
- `../agents/auth-profiles/identity.js`
- `../agents/auth-profiles/oauth.js`
- `../agents/auth-profiles/order.js`
- `../agents/auth-profiles/profiles.js`
- `../agents/auth-profiles/store.js`
- `../agents/copilot-dynamic-headers.js`
- `../agents/embedded-agent-runner/runs.js`
- `../agents/harness/tool-surface-bridge.js`
- `../agents/internal-event-contract.js`
- `../agents/internal-events.js`
- `../agents/main-session-recovery-clear.js`
- `../agents/model-allowlist-entry.js`
- `../agents/model-auth-env.js`
- `../agents/model-auth-markers.js`
- `../agents/model-auth.js`
- `../agents/model-ref-shared.js`
- `../agents/model-selection.js`
- `../agents/openai-reasoning-compat.js`
- `../agents/prepared-model-catalog.js`
- `../agents/provider-attribution.js`
- `../agents/provider-http-errors.js`
- `../agents/provider-local-service.js`
- `../agents/sanitize-for-prompt.js`
- `../agents/subagent-announce-delivery.js`
- `../agents/subagent-announce-origin.js`
- `../agents/tool-display.js`
- `../agents/tools/common.js`
- `../agents/tools/web-search-provider-config.js`
- `../agents/transcript-redact.js`
- `../auto-reply/reply/commands-status.js`
- `../auto-reply/reply/context-text.js`
- `../auto-reply/reply/directive-handling.defaults.js`
- `../auto-reply/reply/directive-handling.levels.js`
- `../auto-reply/reply/model-selection.js`
- `../auto-reply/reply/test-ctx.js`
- `../channels/allow-from.js`
- `../channels/bundled-channel-catalog-read.js`
- `../channels/chat-meta-shared.js`
- `../channels/inbound-event/context.js`
- `../channels/message/index.js`
- `../channels/plugins/chat-target-prefixes.js`
- `../channels/plugins/config-helpers.js`
- `../channels/plugins/config-schema.js`
- `../channels/plugins/config-write-policy-shared.js`
- `../channels/plugins/group-policy-warnings.js`
- `../channels/plugins/helpers.js`
- `../channels/plugins/threading-helpers.js`
- `../channels/run-state-machine.js`
- `../config/config.js`
- `../config/dangerous-name-matching.js`
- `../config/model-input.js`
- `../config/paths.js`
- `../config/plugin-auto-enable.js`
- `../config/plugin-auto-enable.shared.js`
- `../config/plugins-allowlist.js`
- `../config/runtime-group-policy.js`
- `../config/runtime-snapshot.js`
- `../config/sessions/ambient-transcript-watermark.js`
- `../config/sessions/artifacts.js`
- `../config/sessions/paths.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/session-accessor.sqlite-scope.js`
- `../config/sessions/session-sqlite-target.js`
- `../config/sessions/session-transcript-reconcile.js`
- `../config/sessions/sqlite-marker.js`
- `../config/sessions/store-entry.js`
- `../config/sessions/store-maintenance.js`
- `../config/sessions/transcript-mirror.js`
- `../config/sessions/transcript-visible-events.js`
- `../config/types.secrets.js`
- `../config/zod-schema.sensitive.js`
- `../gateway/call.js`
- `../gateway/server-plugins.js`
- `../gateway/session-utils.js`
- `../infra/approval-display-paths.js`
- `../infra/approval-request-account-binding.js`
- `../infra/approval-request-filters.js`
- `../infra/approval-view-model.js`
- `../infra/boundary-file-read.js`
- `../infra/crypto-digest.js`
- `../infra/dedupe.js`
- `../infra/errors.js`
- `../infra/exec-approval-reply.js`
- `../infra/exec-approval-session-target.js`
- `../infra/executable-path.js`
- `../infra/fetch-headers.js`
- `../infra/file-lock.js`
- `../infra/fs-safe-advanced.js`
- `../infra/fs-safe-defaults.js`
- `../infra/fs-safe.js`
- `../infra/home-dir.js`
- `../infra/http-body.js`
- `../infra/json-file.js`
- `../infra/json-files.js`
- `../infra/map-size.js`
- `../infra/net/proxy/managed-proxy-undici.js`
- `../infra/net/redirect-headers.js`
- `../infra/net/ssrf.js`
- `../infra/openclaw-root.js`
- `../infra/outbound/base-session-key.js`
- `../infra/outbound/delivery-queue.js`
- `../infra/outbound/reply-payload-normalize.js`
- `../infra/outbound/reply-policy.js`
- `../infra/outbound/thread-id.js`
- `../infra/plugin-approval-canonical-decisions.js`
- `../infra/plugin-approvals.js`
- `../infra/prototype-keys.js`
- `../infra/question-channel-runtime.js`
- `../infra/question-gateway-resolver.js`
- `../infra/question-reaction-runtime.js`
- `../infra/replace-file.js`
- `../infra/shell-env.js`
- `../infra/sqlite-snapshot.js`
- `../infra/stale-lock-file.js`
- `../infra/tmp-openclaw-dir.js`
- `../interactive/payload.js`
- `../llm/providers/stream-wrappers/google.js`
- `../llm/providers/stream-wrappers/minimax.js`
- `../llm/providers/stream-wrappers/moonshot-thinking.js`
- `../llm/providers/stream-wrappers/openai.js`
- `../llm/providers/stream-wrappers/proxy.js`
- `../llm/providers/stream-wrappers/reasoning-effort-utils.js`
- `../llm/providers/stream-wrappers/stream-payload-utils.js`
- `../llm/stream.js`
- `../llm/utils/event-stream.js`
- `../logger.js`
- `../logging/redact.js`
- `../media/load-options.js`
- `../memory-host-sdk/event-export.js`
- `../memory-host-sdk/event-store.js`
- `../pairing/pairing-challenge.js`
- `../plugin-state/plugin-state-store.js`
- `../plugins/api-facades.js`
- `../plugins/bundled-dir.js`
- `../plugins/captured-registration.js`
- `../plugins/config-schema.js`
- `../plugins/config-state.js`
- `../plugins/current-plugin-metadata-snapshot.js`
- `../plugins/default-enablement.js`
- `../plugins/hardlink-policy.js`
- `../plugins/hook-runner-global.js`
- `../plugins/hooks.test-fixtures.js`
- `../plugins/http-registry.js`
- `../plugins/installed-plugin-index-policy.js`
- `../plugins/manifest-registry.js`
- `../plugins/memory-state.test-fixtures.js`
- `../plugins/native-module-require.js`
- `../plugins/plugin-load-profile.js`
- `../plugins/plugin-module-loader-cache.js`
- `../plugins/provider-api-key-auth.js`
- `../plugins/provider-catalog-unified-text.js`
- `../plugins/provider-replay-helpers.js`
- `../plugins/public-surface-runtime.js`
- `../plugins/registry-empty.js`
- `../plugins/registry.js`
- `../plugins/runtime.js`
- `../plugins/runtime/gateway-request-scope.js`
- `../plugins/sdk-alias.js`
- `../process/exec.js`
- `../process/gateway-work-admission.js`
- `../process/gateway-work-admission.test-helpers.js`
- `../routing/account-id.js`
- `../routing/session-key.js`
- `../secrets/ref-contract.js`
- `../secrets/target-registry-query.js`
- `../sessions/session-key-utils.js`
- `../sessions/session-state-events.js`
- `../shared/chat-message-content.js`
- `../shared/deferred.js`
- `../shared/import-specifier.js`
- `../shared/lazy-runtime.js`
- `../shared/markdown-code.js`
- `../shared/number-coercion.js`
- `../shared/pid-alive.js`
- `../shared/safe-record.js`
- `../shared/text-chunking.js`
- `../tasks/agent-harness-task-runtime-scope.js`
- `../tasks/detached-task-runtime.js`
- `../tasks/runtime-internal.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/deferred.js`
- `../test-utils/env.js`
- `../test-utils/mock-http-response.js`
- `../test-utils/node-process.js`
- `../test-utils/ports.js`
- `../test-utils/secret-ref-test-vectors.js`
- `../test-utils/vitest-spies.js`
- `../utils.js`
- `../utils/message-channel.js`
- `../utils/normalize-secret-input.js`
- `../utils/parse-json-compat.js`
- `../version.js`
- `./access-groups.js`
- `./acp-runtime.js`
- `./agent-harness-runtime.js`
- `./agent-harness-task-runtime.js`
- `./agent-runtime.js`
- `./allow-from.js`
- `./allowlist-config-edit.js`
- `./anthropic-vertex-auth-presence.js`
- `./api-baseline.js`
- `./approval-approvers.js`
- `./approval-auth-helpers.js`
- `./approval-client-helpers.js`
- `./approval-delivery-helpers.js`
- `./approval-native-helpers.js`
- `./approval-reaction-runtime.js`
- `./approval-renderers.js`
- `./browser-cdp.js`
- `./browser-config.js`
- `./browser-control-auth.js`
- `./browser-facade-test-helpers.js`
- `./browser-profiles.js`
- `./channel-access-compat.js`
- `./channel-config-helpers.js`
- `./channel-config-ui-hints.js`
- `./channel-core.js`
- `./channel-entry-contract.js`
- `./channel-inbound.js`
- `./channel-ingress-runtime.js`
- `./channel-lifecycle.core.js`
- `./channel-message.js`
- `./channel-outbound.js`
- `./channel-pairing.js`
- `./channel-policy.js`
- `./channel-replay-guard.js`
- `./channel-reply-pipeline.js`
- `./channel-route.js`
- `./channel-secret-basic-runtime.js`
- `./channel-send-result.js`
- `./channel-setup.js`
- `./channel-streaming.js`
- `./chat-channel-ids.js`
- `./command-auth.js`
- `./command-status.js`
- `./config-runtime.js`
- `./core.js`
- `./dedupe-runtime.js`
- `./directory-runtime.js`
- `./error-runtime.js`
- `./extension-shared.js`
- `./facade-activation-check.runtime.js`
- `./facade-activation-contract.js`
- `./facade-loader.js`
- `./facade-resolution-shared.js`
- `./facade-runtime.js`
- `./fetch-auth.js`
- `./file-lock.js`
- `./gateway-method-runtime.js`
- `./github-copilot-domain.js`
- `./github-copilot-token-endpoint.js`
- `./group-access.js`
- `./html-entity-runtime.js`
- `./inbound-reply-dispatch.js`
- `./ingress-effect-once.js`
- `./keyed-async-queue.js`
- `./lazy-value.js`
- `./llm.js`
- `./machine-token-runtime.js`
- `./mcp-http-fetch.js`
- `./media-runtime.js`
- `./memory-core-host-status.js`
- `./memory-host-core.js`
- `./memory-host-event-export.js`
- `./memory-host-events.js`
- `./memory-host-markdown.js`
- `./memory-host-search.js`
- `./memory-migration-source.js`
- `./migration-runtime.js`
- `./migration.js`
- `./opencode.js`
- `./optional-channel-setup.js`
- `./pair-loop-guard-runtime.js`
- `./pairing-access.js`
- `./persistent-dedupe.js`
- `./plugin-entry.js`
- `./plugin-state-test-runtime.js`
- `./plugin-test-api.js`
- `./private-qa-bundled-env.js`
- `./process-runtime.js`
- `./provider-auth-api-key.js`
- `./provider-auth-copilot-cache.js`
- `./provider-auth-result.js`
- `./provider-auth-runtime.js`
- `./provider-auth.js`
- `./provider-catalog-live-runtime.js`
- `./provider-catalog-shared.js`
- `./provider-enable-config.js`
- `./provider-entry.js`
- `./provider-model-shared.js`
- `./provider-oauth-runtime.js`
- `./provider-selection-runtime.js`
- `./provider-stream-shared.js`
- `./provider-stream.js`
- `./provider-tools.js`
- `./provider-web-fetch-contract.js`
- `./provider-web-search-contract-fields.js`
- `./provider-web-search-contract.js`
- `./qa-channel-protocol.js`
- `./qa-runner-runtime.js`
- `./qa-runtime.test-helpers.js`
- `./reply-payload.js`
- `./request-url.js`
- `./routing.js`
- `./runtime-config-snapshot.js`
- `./runtime-logger.internal.js`
- `./runtime-store-registry.js`
- `./runtime-store.js`
- `./runtime.js`
- `./secret-input-schema.js`
- `./secret-input.js`
- `./session-store-runtime-internal.js`
- `./session-store-runtime.js`
- `./session-transcript-hit.js`
- `./session-transcript-memory-hit.js`
- `./session-transcript-runtime.js`
- `./session-visibility.js`
- `./setup-credential.js`
- `./ssrf-policy.js`
- `./ssrf-runtime.js`
- `./status-helpers.js`
- `./string-coerce-runtime.js`
- `./temp-path.js`
- `./test-helpers.js`
- `./text-chunking.js`
- `./text-utility-runtime.js`
- `./tool-payload.js`
- `./tool-plugin.js`
- `./tool-results.js`
- `./web-media.js`
- `./webhook-memory-guards.js`
- `./webhook-numeric-options.js`
- `./webhook-request-guards.js`
- `./webhook-targets.js`
- `./widget-html.js`
- `./windows-spawn.js`
- `@openclaw/ai/internal/openai`
- `@openclaw/fs-safe/atomic`
- `@openclaw/fs-safe/file-lock`
- `@openclaw/model-catalog-core/model-catalog-normalize`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/model-catalog-core/provider-model-id-normalize`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/error-coercion`
- `@openclaw/proxyline`
- `commander`
- `node:child_process`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:module`
- `node:net`
- `node:os`
- `node:path`
- `node:url`
- `node:util`
- `openclaw/plugin-sdk/agent-runtime-test-contracts`
- `openclaw/plugin-sdk/channel-contract-testing`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/file-access-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/secret-file-runtime`
- `openclaw/plugin-sdk/test-fixtures`
- `typebox`
- `typescript`
- `vitest`
