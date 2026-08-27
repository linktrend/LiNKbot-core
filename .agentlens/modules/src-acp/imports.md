# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_acp[src-acp] --> src[src]
    src_acp[src-acp] --> src[src]
    src_acp[src-acp] --> agents[agents]
    src_acp[src-acp] --> agents[agents]
    src_acp[src-acp] --> agents[agents]
    src_acp[src-acp] --> auto_reply[auto-reply]
    src_acp[src-acp] --> auto_reply[auto-reply]
    src_acp[src-acp] --> plugins[plugins]
    src_acp[src-acp] --> config[config]
    src_acp[src-acp] --> gateway[gateway]
    src_acp[src-acp] --> gateway[gateway]
    src_acp[src-acp] --> gateway[gateway]
    src_acp[src-acp] --> __[..]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> infra[infra]
    src_acp[src-acp] --> logging[logging]
    src_acp[src-acp] --> plugin_sdk[plugin-sdk]
    src_acp[src-acp] --> plugins[plugins]
    src_acp[src-acp] --> plugins[plugins]
    src_acp[src-acp] --> routing[routing]
    src_acp[src-acp] --> secrets[secrets]
    src_acp[src-acp] --> sessions[sessions]
    src_acp[src-acp] --> shared[shared]
    src_acp[src-acp] --> state[state]
    src_acp[src-acp] --> test_helpers[test-helpers]
    src_acp[src-acp] --> test_utils[test-utils]
    src_acp[src-acp] --> test_utils[test-utils]
    src_acp[src-acp] --> test_utils[test-utils]
    src_acp[src-acp] --> __[..]
    src_acp[src-acp] --> utils[utils]
    src_acp[src-acp] --> __[..]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> control_plane[control-plane]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _[.]
    src_acp[src-acp] --> _agentclientprotocol[@agentclientprotocol]
    src_acp[src-acp] --> schema[schema]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> runtime[runtime]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> acp_core[acp-core]
    src_acp[src-acp] --> net_policy[net-policy]
    src_acp[src-acp] --> _openclaw[@openclaw]
    src_acp[src-acp] --> normalization_core[normalization-core]
    src_acp[src-acp] --> normalization_core[normalization-core]
    src_acp[src-acp] --> normalization_core[normalization-core]
    src_acp[src-acp] --> node_child_process[node:child_process]
    src_acp[src-acp] --> node_crypto[node:crypto]
    src_acp[src-acp] --> node_fs[node:fs]
    src_acp[src-acp] --> node_fs[node:fs]
    src_acp[src-acp] --> node_os[node:os]
    src_acp[src-acp] --> node_path[node:path]
    src_acp[src-acp] --> node_stream[node:stream]
    src_acp[src-acp] --> node_stream[node:stream]
    src_acp[src-acp] --> node_url[node:url]
    src_acp[src-acp] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/gateway-protocol/src/client-info.js`
- `../../packages/terminal-core/src/safe-text.js`
- `../agents/agent-scope.js`
- `../agents/tool-catalog.js`
- `../agents/tool-mutation.js`
- `../auto-reply/commands-registry.data.js`
- `../auto-reply/thinking.shared.js`
- `../channels/plugins/binding-registry.js`
- `../config/config.js`
- `../gateway/client-bootstrap.js`
- `../gateway/client-start-readiness.js`
- `../gateway/client.js`
- `../globals.js`
- `../infra/crypto-digest.js`
- `../infra/errors.js`
- `../infra/fixed-window-rate-limit.js`
- `../infra/is-main.js`
- `../infra/node-sqlite.js`
- `../infra/path-env.js`
- `../infra/path-guards.js`
- `../infra/secret-file.js`
- `../logging/console.js`
- `../plugin-sdk/windows-spawn.js`
- `../plugins/runtime.js`
- `../plugins/schema-validator.js`
- `../routing/session-key.js`
- `../secrets/provider-env-vars.js`
- `../sessions/session-key-utils.js`
- `../shared/lazy-runtime.js`
- `../state/openclaw-state-db.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/env.js`
- `../test-utils/tracked-temp-dirs.js`
- `../utils.js`
- `../utils/string-readers.js`
- `../version.js`
- `./approval-classifier.js`
- `./client-helpers.js`
- `./commands.js`
- `./control-plane/manager.js`
- `./event-ledger.js`
- `./event-mapper.js`
- `./permission-relay.js`
- `./persistent-bindings.types.js`
- `./policy.js`
- `./secret-file.js`
- `./session-mapper.js`
- `./translator.bridge-test-helpers.js`
- `./translator.js`
- `./translator.presentation.js`
- `./translator.prompt-harness.test-support.js`
- `./translator.replay.js`
- `./translator.session-list.js`
- `./translator.session-updates.js`
- `./translator.test-helpers.js`
- `./types.js`
- `@agentclientprotocol/sdk`
- `@agentclientprotocol/sdk/schema/schema.json`
- `@openclaw/acp-core/meta`
- `@openclaw/acp-core/normalize-text`
- `@openclaw/acp-core/numeric-options`
- `@openclaw/acp-core/record-shared`
- `@openclaw/acp-core/runtime/errors`
- `@openclaw/acp-core/session`
- `@openclaw/acp-core/session-lineage-meta`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `node:stream/web`
- `node:url`
- `vitest`
