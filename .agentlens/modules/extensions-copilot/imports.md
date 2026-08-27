# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_copilot[extensions-copilot] --> _[.]
    extensions_copilot[extensions-copilot] --> _[.]
    extensions_copilot[extensions-copilot] --> _[.]
    extensions_copilot[extensions-copilot] --> src[src]
    extensions_copilot[extensions-copilot] --> src[src]
    extensions_copilot[extensions-copilot] --> src[src]
    extensions_copilot[extensions-copilot] --> _openclaw[@openclaw]
    extensions_copilot[extensions-copilot] --> node_fs[node:fs]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> plugin_sdk[plugin-sdk]
    extensions_copilot[extensions-copilot] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./doctor-contract-api.js`
- `./harness.js`
- `./index.js`
- `./src/auth-bridge.js`
- `./src/byok-proxy.js`
- `./src/provider-bridge.js`
- `@openclaw/normalization-core`
- `node:fs`
- `openclaw/plugin-sdk/agent-harness-runtime`
- `openclaw/plugin-sdk/hook-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
