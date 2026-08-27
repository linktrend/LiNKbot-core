# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_logbook_src[extensions-logbook-src] --> _[.]
    extensions_logbook_src[extensions-logbook-src] --> _[.]
    extensions_logbook_src[extensions-logbook-src] --> _[.]
    extensions_logbook_src[extensions-logbook-src] --> _[.]
    extensions_logbook_src[extensions-logbook-src] --> _[.]
    extensions_logbook_src[extensions-logbook-src] --> _openclaw[@openclaw]
    extensions_logbook_src[extensions-logbook-src] --> node_child_process[node:child_process]
    extensions_logbook_src[extensions-logbook-src] --> node_crypto[node:crypto]
    extensions_logbook_src[extensions-logbook-src] --> node_fs[node:fs]
    extensions_logbook_src[extensions-logbook-src] --> node_fs[node:fs]
    extensions_logbook_src[extensions-logbook-src] --> node_module[node:module]
    extensions_logbook_src[extensions-logbook-src] --> node_os[node:os]
    extensions_logbook_src[extensions-logbook-src] --> node_path[node:path]
    extensions_logbook_src[extensions-logbook-src] --> node_sqlite[node:sqlite]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> plugin_sdk[plugin-sdk]
    extensions_logbook_src[extensions-logbook-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./analyze.js`
- `./config.js`
- `./prompts.js`
- `./service.js`
- `./store.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:module`
- `node:os`
- `node:path`
- `node:sqlite`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/plugin-state-runtime`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/sqlite-runtime`
- `openclaw/plugin-sdk/temp-path`
- `vitest`
