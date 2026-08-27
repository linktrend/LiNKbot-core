# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_logbook[extensions-logbook] --> src[src]
    extensions_logbook[extensions-logbook] --> src[src]
    extensions_logbook[extensions-logbook] --> src[src]
    extensions_logbook[extensions-logbook] --> node_fs[node:fs]
    extensions_logbook[extensions-logbook] --> node_path[node:path]
    extensions_logbook[extensions-logbook] --> plugin_sdk[plugin-sdk]
    extensions_logbook[extensions-logbook] --> plugin_sdk[plugin-sdk]
    extensions_logbook[extensions-logbook] --> plugin_sdk[plugin-sdk]
```

## External Dependencies

Dependencies from other modules:

- `./src/config.js`
- `./src/service.js`
- `./src/store.js`
- `node:fs`
- `node:path`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/gateway-runtime`
- `openclaw/plugin-sdk/plugin-entry`
