# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qianfan[extensions-qianfan] --> test_support[test-support]
    extensions_qianfan[extensions-qianfan] --> _[.]
    extensions_qianfan[extensions-qianfan] --> _[.]
    extensions_qianfan[extensions-qianfan] --> _[.]
    extensions_qianfan[extensions-qianfan] --> _[.]
    extensions_qianfan[extensions-qianfan] --> plugin_sdk[plugin-sdk]
    extensions_qianfan[extensions-qianfan] --> plugin_sdk[plugin-sdk]
    extensions_qianfan[extensions-qianfan] --> plugin_sdk[plugin-sdk]
    extensions_qianfan[extensions-qianfan] --> plugin_sdk[plugin-sdk]
    extensions_qianfan[extensions-qianfan] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../test-support/provider-model-test-helpers.js`
- `./index.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-entry`
- `openclaw/plugin-sdk/provider-onboard`
- `vitest`
