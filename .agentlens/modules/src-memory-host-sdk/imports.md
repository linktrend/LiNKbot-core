# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_memory_host_sdk[src-memory-host-sdk] --> agents[agents]
    src_memory_host_sdk[src-memory-host-sdk] --> agents[agents]
    src_memory_host_sdk[src-memory-host-sdk] --> plugin_state[plugin-state]
    src_memory_host_sdk[src-memory-host-sdk] --> _[.]
    src_memory_host_sdk[src-memory-host-sdk] --> _[.]
    src_memory_host_sdk[src-memory-host-sdk] --> normalization_core[normalization-core]
    src_memory_host_sdk[src-memory-host-sdk] --> normalization_core[normalization-core]
    src_memory_host_sdk[src-memory-host-sdk] --> normalization_core[normalization-core]
    src_memory_host_sdk[src-memory-host-sdk] --> normalization_core[normalization-core]
    src_memory_host_sdk[src-memory-host-sdk] --> node_crypto[node:crypto]
    src_memory_host_sdk[src-memory-host-sdk] --> node_path[node:path]
    src_memory_host_sdk[src-memory-host-sdk] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../agents/agent-scope.js`
- `../agents/workspace-state-store.js`
- `../plugin-state/plugin-state-store.js`
- `./dreaming.js`
- `./event-store.js`
- `@openclaw/normalization-core/boolean-coercion`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `node:crypto`
- `node:path`
- `vitest`
