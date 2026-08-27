# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _[.]
    extensions_device_pair[extensions-device-pair] --> _openclaw[@openclaw]
    extensions_device_pair[extensions-device-pair] --> node_crypto[node:crypto]
    extensions_device_pair[extensions-device-pair] --> node_fs[node:fs]
    extensions_device_pair[extensions-device-pair] --> node_net[node:net]
    extensions_device_pair[extensions-device-pair] --> node_os[node:os]
    extensions_device_pair[extensions-device-pair] --> node_path[node:path]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> plugin_sdk[plugin-sdk]
    extensions_device_pair[extensions-device-pair] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./doctor-contract-api.js`
- `./index.js`
- `./notify-state.js`
- `./notify.js`
- `./pair-command-auth.js`
- `./pairing-qr-channel-data.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs/promises`
- `node:net`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/device-bootstrap`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/runtime-doctor`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
