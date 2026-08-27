# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_bonjour_src[extensions-bonjour-src] --> _[.]
    extensions_bonjour_src[extensions-bonjour-src] --> _[.]
    extensions_bonjour_src[extensions-bonjour-src] --> node_fs[node:fs]
    extensions_bonjour_src[extensions-bonjour-src] --> node_os[node:os]
    extensions_bonjour_src[extensions-bonjour-src] --> plugin_sdk[plugin-sdk]
    extensions_bonjour_src[extensions-bonjour-src] --> plugin_sdk[plugin-sdk]
    extensions_bonjour_src[extensions-bonjour-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./ciao.js`
- `./errors.js`
- `node:fs`
- `node:os`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/runtime-env`
- `vitest`
