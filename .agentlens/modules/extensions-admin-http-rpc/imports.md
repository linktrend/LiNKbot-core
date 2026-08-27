# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> _[.]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> _[.]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> _[.]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> _[.]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> src[src]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> node_crypto[node:crypto]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> node_stream[node:stream]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> plugin_sdk[plugin-sdk]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> plugin_sdk[plugin-sdk]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> plugin_sdk[plugin-sdk]
    extensions_admin_http_rpc[extensions-admin-http-rpc] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./handler.js`
- `./index.js`
- `./methods.js`
- `./openclaw.plugin.json`
- `./src/handler.js`
- `node:crypto`
- `node:stream`
- `openclaw/plugin-sdk/gateway-method-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
