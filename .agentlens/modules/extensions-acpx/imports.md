# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_acpx[extensions-acpx] --> _[.]
    extensions_acpx[extensions-acpx] --> _[.]
    extensions_acpx[extensions-acpx] --> _[.]
    extensions_acpx[extensions-acpx] --> _[.]
    extensions_acpx[extensions-acpx] --> _[.]
    extensions_acpx[extensions-acpx] --> src[src]
    extensions_acpx[extensions-acpx] --> src[src]
    extensions_acpx[extensions-acpx] --> src[src]
    extensions_acpx[extensions-acpx] --> src[src]
    extensions_acpx[extensions-acpx] --> src[src]
    extensions_acpx[extensions-acpx] --> _openclaw[@openclaw]
    extensions_acpx[extensions-acpx] --> node_child_process[node:child_process]
    extensions_acpx[extensions-acpx] --> node_fs[node:fs]
    extensions_acpx[extensions-acpx] --> node_fs[node:fs]
    extensions_acpx[extensions-acpx] --> node_os[node:os]
    extensions_acpx[extensions-acpx] --> node_path[node:path]
    extensions_acpx[extensions-acpx] --> node_readline[node:readline]
    extensions_acpx[extensions-acpx] --> node_url[node:url]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> plugin_sdk[plugin-sdk]
    extensions_acpx[extensions-acpx] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./index.js`
- `./mcp-command-line.mjs`
- `./register.runtime.js`
- `./setup-api.js`
- `./src/config-schema.js`
- `./src/pi-session-catalog-plugin.js`
- `./src/process-lease.js`
- `./src/runtime-proxy.js`
- `./src/state.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:readline`
- `node:url`
- `openclaw/plugin-sdk/acp-runtime-backend`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-fixtures`
- `vitest`
