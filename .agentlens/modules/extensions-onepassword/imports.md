# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_onepassword[extensions-onepassword] --> _[.]
    extensions_onepassword[extensions-onepassword] --> src[src]
    extensions_onepassword[extensions-onepassword] --> src[src]
    extensions_onepassword[extensions-onepassword] --> src[src]
    extensions_onepassword[extensions-onepassword] --> src[src]
    extensions_onepassword[extensions-onepassword] --> src[src]
    extensions_onepassword[extensions-onepassword] --> node_path[node:path]
    extensions_onepassword[extensions-onepassword] --> plugin_sdk[plugin-sdk]
    extensions_onepassword[extensions-onepassword] --> plugin_sdk[plugin-sdk]
    extensions_onepassword[extensions-onepassword] --> plugin_sdk[plugin-sdk]
    extensions_onepassword[extensions-onepassword] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./src/broker.js`
- `./src/config.js`
- `./src/memory-store.test-support.js`
- `./src/op-client.js`
- `./src/tool.js`
- `node:path`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `vitest`
