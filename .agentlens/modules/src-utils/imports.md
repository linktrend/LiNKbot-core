# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_utils[src-utils] --> src[src]
    src_utils[src-utils] --> src[src]
    src_utils[src-utils] --> agents[agents]
    src_utils[src-utils] --> agents[agents]
    src_utils[src-utils] --> channels[channels]
    src_utils[src-utils] --> channels[channels]
    src_utils[src-utils] --> channels[channels]
    src_utils[src-utils] --> channels[channels]
    src_utils[src-utils] --> channels[channels]
    src_utils[src-utils] --> gateway[gateway]
    src_utils[src-utils] --> gateway[gateway]
    src_utils[src-utils] --> infra[infra]
    src_utils[src-utils] --> logging[logging]
    src_utils[src-utils] --> plugin_sdk[plugin-sdk]
    src_utils[src-utils] --> plugins[plugins]
    src_utils[src-utils] --> plugins[plugins]
    src_utils[src-utils] --> routing[routing]
    src_utils[src-utils] --> shared[shared]
    src_utils[src-utils] --> test_utils[test-utils]
    src_utils[src-utils] --> test_utils[test-utils]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> _[.]
    src_utils[src-utils] --> net_policy[net-policy]
    src_utils[src-utils] --> _openclaw[@openclaw]
    src_utils[src-utils] --> normalization_core[normalization-core]
    src_utils[src-utils] --> normalization_core[normalization-core]
    src_utils[src-utils] --> normalization_core[normalization-core]
    src_utils[src-utils] --> json5[json5]
    src_utils[src-utils] --> node_buffer[node:buffer]
    src_utils[src-utils] --> node_fs[node:fs]
    src_utils[src-utils] --> node_fs[node:fs]
    src_utils[src-utils] --> node_os[node:os]
    src_utils[src-utils] --> node_path[node:path]
    src_utils[src-utils] --> openai[openai]
    src_utils[src-utils] --> p_limit[p-limit]
    src_utils[src-utils] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `zod`

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-client/src/timeouts.js`
- `../../packages/gateway-protocol/src/client-info.js`
- `../agents/agent-scope-config.js`
- `../agents/model-selection.js`
- `../channels/bundled-channel-catalog-read.js`
- `../channels/chat-meta.js`
- `../channels/ids.js`
- `../channels/registry-normalize.js`
- `../channels/registry.js`
- `../gateway/model-pricing-cache-state.js`
- `../gateway/model-pricing-cache.js`
- `../infra/json-files.js`
- `../logging/subsystem.js`
- `../plugin-sdk/channel-route.js`
- `../plugins/provider-runtime.js`
- `../plugins/runtime.js`
- `../routing/account-id.js`
- `../shared/number-coercion.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/env.js`
- `./account-id.js`
- `./boolean.js`
- `./chunk-items.js`
- `./cjk-chars.js`
- `./delivery-context.js`
- `./delivery-context.shared.js`
- `./directive-tags.js`
- `./fetch-timeout.js`
- `./message-channel-constants.js`
- `./message-channel-core.js`
- `./message-channel-normalize.js`
- `./message-channel.js`
- `./normalize-secret-input.js`
- `./parse-json-compat.js`
- `./provider-utils.js`
- `./queue-helpers.js`
- `./reaction-level.js`
- `./run-with-concurrency.js`
- `./safe-json.js`
- `./shell-argv.js`
- `./string-readers.js`
- `./timer-delay.js`
- `./transcript-tools.js`
- `./usage-format.js`
- `./utf8-truncate.js`
- `./zod-parse.js`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `json5`
- `node:buffer`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openai/streaming`
- `p-limit`
- `vitest`
