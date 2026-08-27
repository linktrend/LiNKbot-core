# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> plugins[plugins]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> __[..]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> __[..]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> _[.]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> _[.]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> _[.]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> normalization_core[normalization-core]
    src_gateway_server_plugins_http[src-gateway-server-plugins-http] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../plugins/registry-empty.js`
- `../../plugin-node-capability.js`
- `../../security-path.js`
- `./path-context.js`
- `./route-capability.js`
- `./route-match.js`
- `@openclaw/normalization-core/string-coerce`
- `vitest`
