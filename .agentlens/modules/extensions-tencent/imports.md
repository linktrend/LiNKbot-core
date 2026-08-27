# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tencent[extensions-tencent] --> test_support[test-support]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> _[.]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> plugin_sdk[plugin-sdk]
    extensions_tencent[extensions-tencent] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../test-support/provider-model-test-helpers.js`
- `./api.js`
- `./config-compat.js`
- `./index.js`
- `./models.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `./stream.js`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-transport-runtime`
- `vitest`
