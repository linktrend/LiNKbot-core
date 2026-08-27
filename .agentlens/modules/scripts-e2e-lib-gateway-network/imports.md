# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> lib[lib]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> __[..]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> _[.]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> _[.]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> node_assert[node:assert]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> node_fs[node:fs]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> node_http[node:http]
    scripts_e2e_lib_gateway_network[scripts-e2e-lib-gateway-network] --> node_url[node:url]
```

## Internal Dependencies

Dependencies within this module:

- `ws`

## External Dependencies

Dependencies from other modules:

- `../../../lib/sleep.mjs`
- `../websocket-open.mjs`
- `./limits.mjs`
- `./ws-frames.mjs`
- `node:assert/strict`
- `node:fs/promises`
- `node:http`
- `node:url`
