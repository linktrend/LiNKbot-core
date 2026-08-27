# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _[.]
    extensions_sms_src[extensions-sms-src] --> _openclaw[@openclaw]
    extensions_sms_src[extensions-sms-src] --> node_crypto[node:crypto]
    extensions_sms_src[extensions-sms-src] --> node_fs[node:fs]
    extensions_sms_src[extensions-sms-src] --> node_os[node:os]
    extensions_sms_src[extensions-sms-src] --> node_path[node:path]
    extensions_sms_src[extensions-sms-src] --> node_stream[node:stream]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> plugin_sdk[plugin-sdk]
    extensions_sms_src[extensions-sms-src] --> vitest[vitest]
    extensions_sms_src[extensions-sms-src] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `./accounts.js`
- `./channel.js`
- `./config-schema.js`
- `./gateway.js`
- `./inbound.js`
- `./ingress-spool.js`
- `./phone.js`
- `./runtime.js`
- `./secret-contract.js`
- `./send.js`
- `./status.js`
- `./twilio.js`
- `./webhook.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/channel-config-helpers`
- `openclaw/plugin-sdk/channel-config-schema`
- `openclaw/plugin-sdk/channel-core`
- `openclaw/plugin-sdk/channel-ingress-runtime`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/channel-pairing`
- `openclaw/plugin-sdk/channel-policy`
- `openclaw/plugin-sdk/channel-secret-basic-runtime`
- `openclaw/plugin-sdk/directory-runtime`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-state-test-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/runtime-store`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/secret-ref-runtime`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-chunking`
- `openclaw/plugin-sdk/webhook-ingress`
- `openclaw/plugin-sdk/webhook-request-guards`
- `vitest`
- `zod`
