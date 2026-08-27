# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tokenjuice[extensions-tokenjuice] --> _[.]
    extensions_tokenjuice[extensions-tokenjuice] --> _[.]
    extensions_tokenjuice[extensions-tokenjuice] --> _[.]
    extensions_tokenjuice[extensions-tokenjuice] --> node_fs[node:fs]
    extensions_tokenjuice[extensions-tokenjuice] --> node_process[node:process]
    extensions_tokenjuice[extensions-tokenjuice] --> plugin_sdk[plugin-sdk]
    extensions_tokenjuice[extensions-tokenjuice] --> plugin_sdk[plugin-sdk]
    extensions_tokenjuice[extensions-tokenjuice] --> plugin_sdk[plugin-sdk]
    extensions_tokenjuice[extensions-tokenjuice] --> plugin_sdk[plugin-sdk]
    extensions_tokenjuice[extensions-tokenjuice] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./runtime-api.js`
- `./tool-result-middleware.js`
- `node:fs`
- `node:process`
- `openclaw/plugin-sdk/agent-harness`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
