# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_clawrouter[extensions-clawrouter] --> _[.]
    extensions_clawrouter[extensions-clawrouter] --> _[.]
    extensions_clawrouter[extensions-clawrouter] --> _[.]
    extensions_clawrouter[extensions-clawrouter] --> _[.]
    extensions_clawrouter[extensions-clawrouter] --> _[.]
    extensions_clawrouter[extensions-clawrouter] --> _openclaw[@openclaw]
    extensions_clawrouter[extensions-clawrouter] --> node_buffer[node:buffer]
    extensions_clawrouter[extensions-clawrouter] --> node_crypto[node:crypto]
    extensions_clawrouter[extensions-clawrouter] --> node_http[node:http]
    extensions_clawrouter[extensions-clawrouter] --> node_net[node:net]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> plugin_sdk[plugin-sdk]
    extensions_clawrouter[extensions-clawrouter] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./provider-catalog.js`
- `./stream.js`
- `./tool-schemas.js`
- `./usage.js`
- `@openclaw/normalization-core`
- `node:buffer`
- `node:crypto`
- `node:http`
- `node:net`
- `openclaw/plugin-sdk/fetch-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-catalog-live-runtime`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-tools`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `vitest`
