# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_nvidia[extensions-nvidia] --> _[.]
    extensions_nvidia[extensions-nvidia] --> _[.]
    extensions_nvidia[extensions-nvidia] --> _[.]
    extensions_nvidia[extensions-nvidia] --> _[.]
    extensions_nvidia[extensions-nvidia] --> node_dns[node:dns]
    extensions_nvidia[extensions-nvidia] --> node_fs[node:fs]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> plugin_sdk[plugin-sdk]
    extensions_nvidia[extensions-nvidia] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `node:dns/promises`
- `node:fs`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-catalog-live-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
