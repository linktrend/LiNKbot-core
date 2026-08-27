# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> __[..]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> __[..]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> browser[browser]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> __[..]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> _[.]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> _openclaw[@openclaw]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> node_crypto[node:crypto]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> plugin_sdk[plugin-sdk]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> plugin_sdk[plugin-sdk]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> plugin_sdk[plugin-sdk]
    extensions_browser_src_gateway[extensions-browser-src-gateway] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../browser-node-fallback.js`
- `../browser-proxy-envelope.js`
- `../browser/test-port.js`
- `../core-api.js`
- `./browser-request.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
