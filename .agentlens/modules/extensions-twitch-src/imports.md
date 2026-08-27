# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> _[.]
    extensions_twitch_src[extensions-twitch-src] --> utils[utils]
    extensions_twitch_src[extensions-twitch-src] --> utils[utils]
    extensions_twitch_src[extensions-twitch-src] --> _openclaw[@openclaw]
    extensions_twitch_src[extensions-twitch-src] --> _twurple[@twurple]
    extensions_twitch_src[extensions-twitch-src] --> _twurple[@twurple]
    extensions_twitch_src[extensions-twitch-src] --> _twurple[@twurple]
    extensions_twitch_src[extensions-twitch-src] --> node_fs[node:fs]
    extensions_twitch_src[extensions-twitch-src] --> node_path[node:path]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> plugin_sdk[plugin-sdk]
    extensions_twitch_src[extensions-twitch-src] --> vitest[vitest]
    extensions_twitch_src[extensions-twitch-src] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./access-control.js`
- `./actions.js`
- `./client-manager-registry.js`
- `./config-schema.js`
- `./config.js`
- `./constants.js`
- `./monitor.js`
- `./outbound.js`
- `./plugin.js`
- `./probe.js`
- `./resolver.js`
- `./runtime.js`
- `./send.js`
- `./setup-surface.js`
- `./status.js`
- `./test-fixtures.js`
- `./token.js`
- `./twitch-client.js`
- `./twitch-ingress.js`
- `./twitch-ingress.test-support.js`
- `./utils/markdown.js`
- `./utils/twitch.js`
- `@openclaw/normalization-core`
- `@twurple/api-call`
- `@twurple/auth`
- `@twurple/chat`
- `node:fs/promises`
- `node:path`
- `openclaw/plugin-sdk/account-helpers`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/channel-core`
- `openclaw/plugin-sdk/channel-inbound`
- `openclaw/plugin-sdk/channel-ingress-runtime`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/channel-pairing`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/json-schema-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/runtime-store`
- `openclaw/plugin-sdk/setup`
- `openclaw/plugin-sdk/status-helpers`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-chunking`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
- `zod`
