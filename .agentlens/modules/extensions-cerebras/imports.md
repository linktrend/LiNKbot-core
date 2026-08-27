# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_cerebras[extensions-cerebras] --> _[.]
    extensions_cerebras[extensions-cerebras] --> _[.]
    extensions_cerebras[extensions-cerebras] --> _[.]
    extensions_cerebras[extensions-cerebras] --> _[.]
    extensions_cerebras[extensions-cerebras] --> plugin_sdk[plugin-sdk]
    extensions_cerebras[extensions-cerebras] --> plugin_sdk[plugin-sdk]
    extensions_cerebras[extensions-cerebras] --> plugin_sdk[plugin-sdk]
    extensions_cerebras[extensions-cerebras] --> plugin_sdk[plugin-sdk]
```

## External Dependencies

Dependencies from other modules:

- `./models.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-onboard`
