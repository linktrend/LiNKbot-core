# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _[.]
    extensions_synology_chat_src[extensions-synology-chat-src] --> _openclaw[@openclaw]
    extensions_synology_chat_src[extensions-synology-chat-src] --> node_events[node:events]
    extensions_synology_chat_src[extensions-synology-chat-src] --> node_fs[node:fs]
    extensions_synology_chat_src[extensions-synology-chat-src] --> node_os[node:os]
    extensions_synology_chat_src[extensions-synology-chat-src] --> node_path[node:path]
    extensions_synology_chat_src[extensions-synology-chat-src] --> node_stream[node:stream]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> plugin_sdk[plugin-sdk]
    extensions_synology_chat_src[extensions-synology-chat-src] --> vitest[vitest]
    extensions_synology_chat_src[extensions-synology-chat-src] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./accounts.js`
- `./approval-auth.js`
- `./channel.test-mocks.js`
- `./client.js`
- `./config-schema.js`
- `./gateway-runtime.js`
- `./inbound-event.js`
- `./runtime.js`
- `./security-audit.js`
- `./security.js`
- `./session-key.js`
- `./setup-surface.js`
- `./test-http-utils.js`
- `./webhook-handler.js`
- `./webhook-ingress.js`
- `@openclaw/normalization-core`
- `node:events`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/approval-auth-runtime`
- `openclaw/plugin-sdk/channel-config-helpers`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/channel-core`
- `openclaw/plugin-sdk/channel-ingress-runtime`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/channel-policy`
- `openclaw/plugin-sdk/dangerous-name-runtime`
- `openclaw/plugin-sdk/directory-runtime`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/runtime-store`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/setup`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-chunking`
- `openclaw/plugin-sdk/text-utility-runtime`
- `openclaw/plugin-sdk/webhook-ingress`
- `vitest`
- `zod`
