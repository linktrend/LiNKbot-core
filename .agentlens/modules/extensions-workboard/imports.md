# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_workboard[extensions-workboard] --> _[.]
    extensions_workboard[extensions-workboard] --> _[.]
    extensions_workboard[extensions-workboard] --> _[.]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> src[src]
    extensions_workboard[extensions-workboard] --> _openclaw[@openclaw]
    extensions_workboard[extensions-workboard] --> node_fs[node:fs]
    extensions_workboard[extensions-workboard] --> node_os[node:os]
    extensions_workboard[extensions-workboard] --> node_path[node:path]
    extensions_workboard[extensions-workboard] --> plugin_sdk[plugin-sdk]
    extensions_workboard[extensions-workboard] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./doctor-contract-api.js`
- `./runtime-api.js`
- `./src/change-events.js`
- `./src/command.js`
- `./src/dispatcher-workspace.js`
- `./src/sqlite-store.js`
- `./src/store.js`
- `./src/tools.js`
- `./src/workspace-access.js`
- `@openclaw/normalization-core`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `vitest`
