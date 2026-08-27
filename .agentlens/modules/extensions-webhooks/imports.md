# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_webhooks[extensions-webhooks] --> __[..]
    extensions_webhooks[extensions-webhooks] --> _[.]
    extensions_webhooks[extensions-webhooks] --> _[.]
    extensions_webhooks[extensions-webhooks] --> _[.]
    extensions_webhooks[extensions-webhooks] --> _[.]
    extensions_webhooks[extensions-webhooks] --> src[src]
    extensions_webhooks[extensions-webhooks] --> src[src]
    extensions_webhooks[extensions-webhooks] --> node_events[node:events]
    extensions_webhooks[extensions-webhooks] --> plugin_sdk[plugin-sdk]
    extensions_webhooks[extensions-webhooks] --> plugin_sdk[plugin-sdk]
    extensions_webhooks[extensions-webhooks] --> plugin_sdk[plugin-sdk]
    extensions_webhooks[extensions-webhooks] --> plugin_sdk[plugin-sdk]
    extensions_webhooks[extensions-webhooks] --> plugin_sdk[plugin-sdk]
    extensions_webhooks[extensions-webhooks] --> vitest[vitest]
    extensions_webhooks[extensions-webhooks] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../runtime-api.js`
- `./api.js`
- `./config.js`
- `./http.js`
- `./index.js`
- `./src/config.js`
- `./src/http.js`
- `node:events`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `vitest`
- `zod`
