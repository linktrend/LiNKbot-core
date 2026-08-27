# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> config[config]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> test_utils[test-utils]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> test_utils[test-utils]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> schema[schema]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _[.]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> _openclaw[@openclaw]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> node_fs[node:fs]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> node_fs[node:fs]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> node_path[node:path]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> typebox[typebox]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> typebox[typebox]
    packages_gateway_protocol_src[packages-gateway-protocol-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../src/config/talk.js`
- `../../../src/test-utils/secret-ref-test-vectors.js`
- `../../../src/test-utils/talk-test-provider.js`
- `./connect-error-details.js`
- `./frame-guards.js`
- `./index.js`
- `./protocol-validator.js`
- `./schema.js`
- `./schema/approvals.js`
- `./schema/channels.js`
- `./schema/migrations.js`
- `./schema/primitives.js`
- `./schema/protocol-schemas.js`
- `./schema/push.js`
- `./schema/terminal.js`
- `./session-icon.js`
- `./system-agent-error-details.js`
- `./version.js`
- `@openclaw/normalization-core`
- `node:fs`
- `node:fs/promises`
- `node:path`
- `typebox/compile`
- `typebox/value`
- `vitest`
