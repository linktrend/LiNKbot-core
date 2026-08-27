# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_linux_node_src[extensions-linux-node-src] --> _[.]
    extensions_linux_node_src[extensions-linux-node-src] --> _[.]
    extensions_linux_node_src[extensions-linux-node-src] --> _[.]
    extensions_linux_node_src[extensions-linux-node-src] --> _[.]
    extensions_linux_node_src[extensions-linux-node-src] --> _[.]
    extensions_linux_node_src[extensions-linux-node-src] --> node_fs[node:fs]
    extensions_linux_node_src[extensions-linux-node-src] --> node_fs[node:fs]
    extensions_linux_node_src[extensions-linux-node-src] --> node_os[node:os]
    extensions_linux_node_src[extensions-linux-node-src] --> node_path[node:path]
    extensions_linux_node_src[extensions-linux-node-src] --> plugin_sdk[plugin-sdk]
    extensions_linux_node_src[extensions-linux-node-src] --> plugin_sdk[plugin-sdk]
    extensions_linux_node_src[extensions-linux-node-src] --> plugin_sdk[plugin-sdk]
    extensions_linux_node_src[extensions-linux-node-src] --> plugin_sdk[plugin-sdk]
    extensions_linux_node_src[extensions-linux-node-src] --> vitest[vitest]
    extensions_linux_node_src[extensions-linux-node-src] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./command-utils.js`
- `./commands.js`
- `./config.js`
- `./executables.js`
- `./location.js`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
- `zod`
