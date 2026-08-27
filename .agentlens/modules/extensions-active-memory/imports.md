# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _[.]
    extensions_active_memory[extensions-active-memory] --> _openclaw[@openclaw]
    extensions_active_memory[extensions-active-memory] --> node_crypto[node:crypto]
    extensions_active_memory[extensions-active-memory] --> node_fs[node:fs]
    extensions_active_memory[extensions-active-memory] --> node_fs[node:fs]
    extensions_active_memory[extensions-active-memory] --> node_os[node:os]
    extensions_active_memory[extensions-active-memory] --> node_path[node:path]
    extensions_active_memory[extensions-active-memory] --> node_timers[node:timers]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> plugin_sdk[plugin-sdk]
    extensions_active_memory[extensions-active-memory] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./config.js`
- `./doctor-contract-api.js`
- `./prompt.js`
- `./query.js`
- `./recall-run.js`
- `./recall-state.js`
- `./recall.js`
- `./session-policy.js`
- `./session.js`
- `./transcript-result.js`
- `./transcript-watch.js`
- `./transcript.js`
- `./types.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:timers/promises`
- `openclaw/plugin-sdk/agent-runtime`
- `openclaw/plugin-sdk/json-schema-runtime`
- `openclaw/plugin-sdk/memory-core-host-runtime-core`
- `openclaw/plugin-sdk/memory-host-search`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/session-store-runtime`
- `openclaw/plugin-sdk/session-transcript-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
