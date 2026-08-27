# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> _[.]
    packages_gateway_client_src[packages-gateway-client-src] --> gateway_protocol[gateway-protocol]
    packages_gateway_client_src[packages-gateway-client-src] --> gateway_protocol[gateway-protocol]
    packages_gateway_client_src[packages-gateway-client-src] --> gateway_protocol[gateway-protocol]
    packages_gateway_client_src[packages-gateway-client-src] --> gateway_protocol[gateway-protocol]
    packages_gateway_client_src[packages-gateway-client-src] --> gateway_protocol[gateway-protocol]
    packages_gateway_client_src[packages-gateway-client-src] --> net_policy[net-policy]
    packages_gateway_client_src[packages-gateway-client-src] --> _openclaw[@openclaw]
    packages_gateway_client_src[packages-gateway-client-src] --> node_buffer[node:buffer]
    packages_gateway_client_src[packages-gateway-client-src] --> node_crypto[node:crypto]
    packages_gateway_client_src[packages-gateway-client-src] --> node_https[node:https]
    packages_gateway_client_src[packages-gateway-client-src] --> node_net[node:net]
    packages_gateway_client_src[packages-gateway-client-src] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `ws`

## External Dependencies

Dependencies from other modules:

- `./browser-device-auth.js`
- `./client-address-utils.js`
- `./client.js`
- `./connect-auth.js`
- `./device-auth.js`
- `./event-loop-ready.js`
- `./protocol-client.js`
- `./readiness.js`
- `./reconnect-policy.js`
- `./timeouts.js`
- `./websocket-data.js`
- `@openclaw/gateway-protocol/client-info`
- `@openclaw/gateway-protocol/connect-error-details`
- `@openclaw/gateway-protocol/frame-guards`
- `@openclaw/gateway-protocol/startup-unavailable`
- `@openclaw/gateway-protocol/version`
- `@openclaw/net-policy/ip`
- `@openclaw/retry`
- `node:buffer`
- `node:crypto`
- `node:https`
- `node:net`
- `vitest`
