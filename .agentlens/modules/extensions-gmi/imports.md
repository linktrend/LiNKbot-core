# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_gmi[extensions-gmi] --> _[.]
    extensions_gmi[extensions-gmi] --> _[.]
    extensions_gmi[extensions-gmi] --> _[.]
    extensions_gmi[extensions-gmi] --> _[.]
    extensions_gmi[extensions-gmi] --> plugin_sdk[plugin-sdk]
    extensions_gmi[extensions-gmi] --> plugin_sdk[plugin-sdk]
    extensions_gmi[extensions-gmi] --> plugin_sdk[plugin-sdk]
    extensions_gmi[extensions-gmi] --> plugin_sdk[plugin-sdk]
    extensions_gmi[extensions-gmi] --> plugin_sdk[plugin-sdk]
    extensions_gmi[extensions-gmi] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./models.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-tools`
- `vitest`
