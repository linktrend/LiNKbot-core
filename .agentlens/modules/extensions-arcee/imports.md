# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_arcee[extensions-arcee] --> test_support[test-support]
    extensions_arcee[extensions-arcee] --> _[.]
    extensions_arcee[extensions-arcee] --> _[.]
    extensions_arcee[extensions-arcee] --> _[.]
    extensions_arcee[extensions-arcee] --> _[.]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> plugin_sdk[plugin-sdk]
    extensions_arcee[extensions-arcee] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../test-support/provider-model-test-helpers.js`
- `./index.js`
- `./models.js`
- `./onboard.js`
- `./provider-catalog.js`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-env-vars`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-onboard`
- `vitest`
