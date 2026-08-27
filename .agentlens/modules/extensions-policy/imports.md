# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> doctor[doctor]
    extensions_policy[extensions-policy] --> doctor[doctor]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> src[src]
    extensions_policy[extensions-policy] --> doctor[doctor]
    extensions_policy[extensions-policy] --> _[.]
    extensions_policy[extensions-policy] --> commander[commander]
    extensions_policy[extensions-policy] --> json5[json5]
    extensions_policy[extensions-policy] --> node_crypto[node:crypto]
    extensions_policy[extensions-policy] --> node_fs[node:fs]
    extensions_policy[extensions-policy] --> node_os[node:os]
    extensions_policy[extensions-policy] --> node_path[node:path]
    extensions_policy[extensions-policy] --> node_timers[node:timers]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> plugin_sdk[plugin-sdk]
    extensions_policy[extensions-policy] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./cli.js`
- `./doctor/fix-metadata.js`
- `./doctor/register.js`
- `./policy-conformance.js`
- `./policy-state-core.js`
- `./policy-state-data.js`
- `./policy-state-exec-approvals.js`
- `./policy-state-gateway.js`
- `./policy-state-helpers.js`
- `./policy-state-ingress.js`
- `./policy-state-sandbox.js`
- `./policy-state-tool-posture.js`
- `./policy-state-tools.js`
- `./policy-state-types.js`
- `./policy-state-workspace.js`
- `./policy-state.js`
- `./src/cli.js`
- `./src/doctor/register.js`
- `./tool-policy-conformance.js`
- `commander`
- `json5`
- `node:crypto`
- `node:fs`
- `node:os`
- `node:path`
- `node:timers/promises`
- `openclaw/plugin-sdk/health`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-config-snapshot`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
