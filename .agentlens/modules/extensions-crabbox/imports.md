# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_crabbox[extensions-crabbox] --> _[.]
    extensions_crabbox[extensions-crabbox] --> _[.]
    extensions_crabbox[extensions-crabbox] --> _[.]
    extensions_crabbox[extensions-crabbox] --> src[src]
    extensions_crabbox[extensions-crabbox] --> node_crypto[node:crypto]
    extensions_crabbox[extensions-crabbox] --> node_fs[node:fs]
    extensions_crabbox[extensions-crabbox] --> node_path[node:path]
    extensions_crabbox[extensions-crabbox] --> plugin_sdk[plugin-sdk]
    extensions_crabbox[extensions-crabbox] --> plugin_sdk[plugin-sdk]
    extensions_crabbox[extensions-crabbox] --> plugin_sdk[plugin-sdk]
    extensions_crabbox[extensions-crabbox] --> plugin_sdk[plugin-sdk]
    extensions_crabbox[extensions-crabbox] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./crabbox-worker-inspect.js`
- `./crabbox-worker-profile.js`
- `./crabbox-worker-provider.js`
- `./src/crabbox-worker-provider.js`
- `node:crypto`
- `node:fs`
- `node:path`
- `openclaw/plugin-sdk/logging-core`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
