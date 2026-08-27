# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_mxc[extensions-mxc] --> _[.]
    extensions_mxc[extensions-mxc] --> _[.]
    extensions_mxc[extensions-mxc] --> src[src]
    extensions_mxc[extensions-mxc] --> src[src]
    extensions_mxc[extensions-mxc] --> plugin_sdk[plugin-sdk]
    extensions_mxc[extensions-mxc] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./openclaw.plugin.json`
- `./src/config.js`
- `./src/plugin.js`
- `openclaw/plugin-sdk/plugin-entry`
- `vitest`
