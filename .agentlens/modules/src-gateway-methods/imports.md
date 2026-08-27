# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_gateway_methods[src-gateway-methods] --> shared[shared]
    src_gateway_methods[src-gateway-methods] --> __[..]
    src_gateway_methods[src-gateway-methods] --> _[.]
    src_gateway_methods[src-gateway-methods] --> _[.]
    src_gateway_methods[src-gateway-methods] --> _[.]
    src_gateway_methods[src-gateway-methods] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../shared/gateway-method-policy.js`
- `../operator-scopes.js`
- `./core-descriptors.js`
- `./descriptor.js`
- `./registry.js`
- `vitest`
