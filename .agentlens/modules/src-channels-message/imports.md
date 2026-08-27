# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_channels_message[src-channels-message] --> helpers[helpers]
    src_channels_message[src-channels-message] --> auto_reply[auto-reply]
    src_channels_message[src-channels-message] --> reply[reply]
    src_channels_message[src-channels-message] --> reply[reply]
    src_channels_message[src-channels-message] --> reply[reply]
    src_channels_message[src-channels-message] --> infra[infra]
    src_channels_message[src-channels-message] --> infra[infra]
    src_channels_message[src-channels-message] --> outbound[outbound]
    src_channels_message[src-channels-message] --> outbound[outbound]
    src_channels_message[src-channels-message] --> outbound[outbound]
    src_channels_message[src-channels-message] --> logging[logging]
    src_channels_message[src-channels-message] --> routing[routing]
    src_channels_message[src-channels-message] --> state[state]
    src_channels_message[src-channels-message] --> utils[utils]
    src_channels_message[src-channels-message] --> plugins[plugins]
    src_channels_message[src-channels-message] --> __[..]
    src_channels_message[src-channels-message] --> __[..]
    src_channels_message[src-channels-message] --> turn[turn]
    src_channels_message[src-channels-message] --> __[..]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _[.]
    src_channels_message[src-channels-message] --> _openclaw[@openclaw]
    src_channels_message[src-channels-message] --> normalization_core[normalization-core]
    src_channels_message[src-channels-message] --> normalization_core[normalization-core]
    src_channels_message[src-channels-message] --> normalization_core[normalization-core]
    src_channels_message[src-channels-message] --> node_child_process[node:child_process]
    src_channels_message[src-channels-message] --> node_crypto[node:crypto]
    src_channels_message[src-channels-message] --> node_fs[node:fs]
    src_channels_message[src-channels-message] --> node_fs[node:fs]
    src_channels_message[src-channels-message] --> node_os[node:os]
    src_channels_message[src-channels-message] --> node_path[node:path]
    src_channels_message[src-channels-message] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/temp-dir.js`
- `../../auto-reply/dispatch.js`
- `../../auto-reply/reply/dispatch-from-config.js`
- `../../auto-reply/reply/response-prefix-template.js`
- `../../auto-reply/reply/source-reply-delivery-mode.js`
- `../../infra/errors.js`
- `../../infra/kysely-sync.js`
- `../../infra/outbound/deliver-types.js`
- `../../infra/outbound/deliver.js`
- `../../infra/outbound/reply-payload-normalize.js`
- `../../logging/subsystem.js`
- `../../routing/account-id.js`
- `../../state/openclaw-state-db.js`
- `../../utils/sleep.js`
- `../plugins/registry-loaded.js`
- `../registry-normalize.js`
- `../reply-prefix.js`
- `../turn/kernel.js`
- `../typing.js`
- `./capabilities.js`
- `./contracts.js`
- `./durable-receive.js`
- `./ingress-claim-owner.js`
- `./ingress-drain.js`
- `./ingress-monitor.js`
- `./ingress-queue.js`
- `./ingress-retry-policy.js`
- `./live.js`
- `./outbound-bridge.js`
- `./outbound-echo-state.js`
- `./outbound-echo.js`
- `./receipt.js`
- `./receive.js`
- `./rendered-batch.js`
- `./send.js`
- `./types.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
