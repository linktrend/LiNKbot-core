# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_phone_control[extensions-phone-control] --> _[.]
    extensions_phone_control[extensions-phone-control] --> _[.]
    extensions_phone_control[extensions-phone-control] --> _[.]
    extensions_phone_control[extensions-phone-control] --> _openclaw[@openclaw]
    extensions_phone_control[extensions-phone-control] --> ms[ms]
    extensions_phone_control[extensions-phone-control] --> node_crypto[node:crypto]
    extensions_phone_control[extensions-phone-control] --> node_fs[node:fs]
    extensions_phone_control[extensions-phone-control] --> node_os[node:os]
    extensions_phone_control[extensions-phone-control] --> node_path[node:path]
    extensions_phone_control[extensions-phone-control] --> plugin_sdk[plugin-sdk]
    extensions_phone_control[extensions-phone-control] --> plugin_sdk[plugin-sdk]
    extensions_phone_control[extensions-phone-control] --> plugin_sdk[plugin-sdk]
    extensions_phone_control[extensions-phone-control] --> plugin_sdk[plugin-sdk]
    extensions_phone_control[extensions-phone-control] --> plugin_sdk[plugin-sdk]
    extensions_phone_control[extensions-phone-control] --> pretty_ms[pretty-ms]
    extensions_phone_control[extensions-phone-control] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./index.js`
- `./runtime-api.js`
- `@openclaw/normalization-core`
- `ms`
- `node:crypto`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `pretty-ms`
- `vitest`
