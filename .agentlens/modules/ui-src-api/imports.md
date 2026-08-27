# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_api[ui-src-api] --> nodes[nodes]
    ui_src_api[ui-src-api] --> lib[lib]
    ui_src_api[ui-src-api] --> test_helpers[test-helpers]
    ui_src_api[ui-src-api] --> _[.]
    ui_src_api[ui-src-api] --> _[.]
    ui_src_api[ui-src-api] --> gateway_client[gateway-client]
    ui_src_api[ui-src-api] --> node_crypto[node:crypto]
    ui_src_api[ui-src-api] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../lib/nodes/index.ts`
- `../lib/uuid.ts`
- `../test-helpers/storage.ts`
- `./gateway-browser-auth.ts`
- `./gateway-browser-socket.ts`
- `@openclaw/gateway-client/browser`
- `node:crypto`
- `vitest`
