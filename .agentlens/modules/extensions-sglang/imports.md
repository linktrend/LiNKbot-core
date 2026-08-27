# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_sglang[extensions-sglang] --> _[.]
    extensions_sglang[extensions-sglang] --> _[.]
    extensions_sglang[extensions-sglang] --> _[.]
    extensions_sglang[extensions-sglang] --> node_url[node:url]
    extensions_sglang[extensions-sglang] --> plugin_sdk[plugin-sdk]
    extensions_sglang[extensions-sglang] --> plugin_sdk[plugin-sdk]
    extensions_sglang[extensions-sglang] --> plugin_sdk[plugin-sdk]
    extensions_sglang[extensions-sglang] --> plugin_sdk[plugin-sdk]
    extensions_sglang[extensions-sglang] --> plugin_sdk[plugin-sdk]
    extensions_sglang[extensions-sglang] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./defaults.js`
- `./index.js`
- `node:url`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-setup`
- `openclaw/plugin-sdk/provider-test-contracts`
- `vitest`
