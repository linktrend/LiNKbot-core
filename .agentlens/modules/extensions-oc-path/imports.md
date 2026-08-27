# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_oc_path[extensions-oc-path] --> _[.]
    extensions_oc_path[extensions-oc-path] --> _[.]
    extensions_oc_path[extensions-oc-path] --> oc_path[oc-path]
    extensions_oc_path[extensions-oc-path] --> commander[commander]
    extensions_oc_path[extensions-oc-path] --> node_fs[node:fs]
    extensions_oc_path[extensions-oc-path] --> node_os[node:os]
    extensions_oc_path[extensions-oc-path] --> node_path[node:path]
    extensions_oc_path[extensions-oc-path] --> plugin_sdk[plugin-sdk]
    extensions_oc_path[extensions-oc-path] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./cli-registration.js`
- `./cli.js`
- `./oc-path/index.js`
- `commander`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/plugin-entry`
- `vitest`
