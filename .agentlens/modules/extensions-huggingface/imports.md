# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _[.]
    extensions_huggingface[extensions-huggingface] --> _openclaw[@openclaw]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> plugin_sdk[plugin-sdk]
    extensions_huggingface[extensions-huggingface] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./index.js`
- `./model-discovery-env.js`
- `./models.js`
- `./onboard.js`
- `./provider-catalog.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/fetch-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
