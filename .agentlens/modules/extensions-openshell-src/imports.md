# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_openshell_src[extensions-openshell-src] --> _[.]
    extensions_openshell_src[extensions-openshell-src] --> _[.]
    extensions_openshell_src[extensions-openshell-src] --> _[.]
    extensions_openshell_src[extensions-openshell-src] --> _[.]
    extensions_openshell_src[extensions-openshell-src] --> _[.]
    extensions_openshell_src[extensions-openshell-src] --> _openclaw[@openclaw]
    extensions_openshell_src[extensions-openshell-src] --> node_child_process[node:child_process]
    extensions_openshell_src[extensions-openshell-src] --> node_fs[node:fs]
    extensions_openshell_src[extensions-openshell-src] --> node_fs[node:fs]
    extensions_openshell_src[extensions-openshell-src] --> node_net[node:net]
    extensions_openshell_src[extensions-openshell-src] --> node_os[node:os]
    extensions_openshell_src[extensions-openshell-src] --> node_path[node:path]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> plugin_sdk[plugin-sdk]
    extensions_openshell_src[extensions-openshell-src] --> p_limit[p-limit]
    extensions_openshell_src[extensions-openshell-src] --> vitest[vitest]
    extensions_openshell_src[extensions-openshell-src] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./backend.js`
- `./cli.js`
- `./config.js`
- `./fs-bridge.js`
- `./mirror.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:net`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/file-access-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/sandbox`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-fixtures`
- `p-limit`
- `vitest`
- `zod`
