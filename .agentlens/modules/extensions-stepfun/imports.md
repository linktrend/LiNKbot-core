# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_stepfun[extensions-stepfun] --> _[.]
    extensions_stepfun[extensions-stepfun] --> _[.]
    extensions_stepfun[extensions-stepfun] --> _[.]
    extensions_stepfun[extensions-stepfun] --> _[.]
    extensions_stepfun[extensions-stepfun] --> node_fs[node:fs]
    extensions_stepfun[extensions-stepfun] --> node_path[node:path]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> plugin_sdk[plugin-sdk]
    extensions_stepfun[extensions-stepfun] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `node:fs`
- `node:path`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-transport-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
