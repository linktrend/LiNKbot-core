# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugin_state[src-plugin-state] --> config[config]
    src_plugin_state[src-plugin-state] --> infra[infra]
    src_plugin_state[src-plugin-state] --> infra[infra]
    src_plugin_state[src-plugin-state] --> infra[infra]
    src_plugin_state[src-plugin-state] --> plugins[plugins]
    src_plugin_state[src-plugin-state] --> shared[shared]
    src_plugin_state[src-plugin-state] --> shared[shared]
    src_plugin_state[src-plugin-state] --> state[state]
    src_plugin_state[src-plugin-state] --> state[state]
    src_plugin_state[src-plugin-state] --> state[state]
    src_plugin_state[src-plugin-state] --> state[state]
    src_plugin_state[src-plugin-state] --> test_utils[test-utils]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _[.]
    src_plugin_state[src-plugin-state] --> _openclaw[@openclaw]
    src_plugin_state[src-plugin-state] --> normalization_core[normalization-core]
    src_plugin_state[src-plugin-state] --> node_crypto[node:crypto]
    src_plugin_state[src-plugin-state] --> node_fs[node:fs]
    src_plugin_state[src-plugin-state] --> node_fs[node:fs]
    src_plugin_state[src-plugin-state] --> node_path[node:path]
    src_plugin_state[src-plugin-state] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../config/paths.js`
- `../infra/kysely-sync.js`
- `../infra/node-sqlite.js`
- `../infra/sqlite-number.js`
- `../plugins/registry.js`
- `../shared/number-coercion.js`
- `../shared/pid-alive.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-state-db.js`
- `../state/openclaw-state-db.paths.js`
- `../state/openclaw-state-lease.js`
- `../test-utils/openclaw-test-state.js`
- `./plugin-blob-store.js`
- `./plugin-blob-store.sqlite.js`
- `./plugin-blob-store.types.js`
- `./plugin-state-lease.js`
- `./plugin-state-lease.types.js`
- `./plugin-state-store.js`
- `./plugin-state-store.sqlite.js`
- `./plugin-state-store.test-helpers.js`
- `./plugin-state-store.types.js`
- `./plugin-store-validation.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:path`
- `vitest`
