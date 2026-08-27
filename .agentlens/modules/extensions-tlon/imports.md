# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> monitor[monitor]
    extensions_tlon[extensions-tlon] --> monitor[monitor]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> _[.]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> urbit[urbit]
    extensions_tlon[extensions-tlon] --> _aws_sdk[@aws-sdk]
    extensions_tlon[extensions-tlon] --> _aws_sdk[@aws-sdk]
    extensions_tlon[extensions-tlon] --> _openclaw[@openclaw]
    extensions_tlon[extensions-tlon] --> node_crypto[node:crypto]
    extensions_tlon[extensions-tlon] --> node_http[node:http]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> plugin_sdk[plugin-sdk]
    extensions_tlon[extensions-tlon] --> vitest[vitest]
    extensions_tlon[extensions-tlon] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./account-fields.js`
- `./channel.js`
- `./channel.runtime.js`
- `./config-schema.js`
- `./doctor-contract.js`
- `./doctor.js`
- `./monitor/index.js`
- `./monitor/utils.js`
- `./session-route.js`
- `./setup-core.js`
- `./setup-surface.js`
- `./targets.js`
- `./tlon-api.js`
- `./types.js`
- `./urbit/auth.js`
- `./urbit/base-url.js`
- `./urbit/channel-ops.js`
- `./urbit/context.js`
- `./urbit/fetch.js`
- `./urbit/send.js`
- `./urbit/upload.js`
- `@aws-sdk/client-s3`
- `@aws-sdk/s3-request-presigner`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:http`
- `openclaw/plugin-sdk/account-helpers`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/channel-config-helpers`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/channel-core`
- `openclaw/plugin-sdk/channel-entry-contract`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/channel-test-helpers`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/media-mime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/runtime-store`
- `openclaw/plugin-sdk/setup`
- `openclaw/plugin-sdk/setup-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/status-helpers`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-chunking`
- `vitest`
- `zod`
