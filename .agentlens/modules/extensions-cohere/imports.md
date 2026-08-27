# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> _[.]
    extensions_cohere[extensions-cohere] --> node_fs[node:fs]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> plugin_sdk[plugin-sdk]
    extensions_cohere[extensions-cohere] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./models.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `./stream.js`
- `node:fs`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-transport-runtime`
- `vitest`
