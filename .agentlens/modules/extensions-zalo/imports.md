# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_zalo[extensions-zalo] --> _[.]
    extensions_zalo[extensions-zalo] --> _[.]
    extensions_zalo[extensions-zalo] --> node_fs[node:fs]
    extensions_zalo[extensions-zalo] --> node_http[node:http]
    extensions_zalo[extensions-zalo] --> node_path[node:path]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> plugin_sdk[plugin-sdk]
    extensions_zalo[extensions-zalo] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./setup-entry.js`
- `node:fs/promises`
- `node:http`
- `node:path`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/temp-path`
- `vitest`
