# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_canvas[extensions-canvas] --> _[.]
    extensions_canvas[extensions-canvas] --> _[.]
    extensions_canvas[extensions-canvas] --> src[src]
    extensions_canvas[extensions-canvas] --> src[src]
    extensions_canvas[extensions-canvas] --> src[src]
    extensions_canvas[extensions-canvas] --> host[host]
    extensions_canvas[extensions-canvas] --> src[src]
    extensions_canvas[extensions-canvas] --> _a2ui[@a2ui]
    extensions_canvas[extensions-canvas] --> lit[lit]
    extensions_canvas[extensions-canvas] --> _lit[@lit]
    extensions_canvas[extensions-canvas] --> _openclaw[@openclaw]
    extensions_canvas[extensions-canvas] --> lit[lit]
    extensions_canvas[extensions-canvas] --> directives[directives]
    extensions_canvas[extensions-canvas] --> node_fs[node:fs]
    extensions_canvas[extensions-canvas] --> node_fs[node:fs]
    extensions_canvas[extensions-canvas] --> node_module[node:module]
    extensions_canvas[extensions-canvas] --> node_os[node:os]
    extensions_canvas[extensions-canvas] --> node_path[node:path]
    extensions_canvas[extensions-canvas] --> node_url[node:url]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> plugin_sdk[plugin-sdk]
    extensions_canvas[extensions-canvas] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./index.js`
- `./src/a2ui-jsonl.js`
- `./src/config-migration.js`
- `./src/config.js`
- `./src/host/a2ui-shared.js`
- `./src/tool-schema.js`
- `@a2ui/lit`
- `@a2ui/lit/ui`
- `@lit/context`
- `@openclaw/a2ui-theme-context`
- `lit`
- `lit/directives/repeat.js`
- `node:fs`
- `node:fs/promises`
- `node:module`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
