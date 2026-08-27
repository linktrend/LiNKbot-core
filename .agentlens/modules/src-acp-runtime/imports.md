# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_acp_runtime[src-acp-runtime] --> config[config]
    src_acp_runtime[src-acp-runtime] --> sessions[sessions]
    src_acp_runtime[src-acp-runtime] --> sessions[sessions]
    src_acp_runtime[src-acp-runtime] --> sessions[sessions]
    src_acp_runtime[src-acp-runtime] --> sessions[sessions]
    src_acp_runtime[src-acp-runtime] --> infra[infra]
    src_acp_runtime[src-acp-runtime] --> logging[logging]
    src_acp_runtime[src-acp-runtime] --> routing[routing]
    src_acp_runtime[src-acp-runtime] --> shared[shared]
    src_acp_runtime[src-acp-runtime] --> state[state]
    src_acp_runtime[src-acp-runtime] --> state[state]
    src_acp_runtime[src-acp-runtime] --> test_helpers[test-helpers]
    src_acp_runtime[src-acp-runtime] --> __[..]
    src_acp_runtime[src-acp-runtime] --> _[.]
    src_acp_runtime[src-acp-runtime] --> _[.]
    src_acp_runtime[src-acp-runtime] --> _[.]
    src_acp_runtime[src-acp-runtime] --> _openclaw[@openclaw]
    src_acp_runtime[src-acp-runtime] --> _openclaw[@openclaw]
    src_acp_runtime[src-acp-runtime] --> normalization_core[normalization-core]
    src_acp_runtime[src-acp-runtime] --> normalization_core[normalization-core]
    src_acp_runtime[src-acp-runtime] --> node_path[node:path]
    src_acp_runtime[src-acp-runtime] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../config/config.js`
- `../../config/sessions/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/store-load.js`
- `../../config/sessions/types.js`
- `../../infra/kysely-sync.js`
- `../../logging/redact.js`
- `../../routing/session-key.js`
- `../../shared/global-singleton.js`
- `../../state/openclaw-agent-db.js`
- `../../state/openclaw-state-db.js`
- `../../test-helpers/temp-dir.js`
- `../policy.js`
- `./errors.js`
- `./registry.js`
- `./session-meta.js`
- `@openclaw/acp-core`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `node:path`
- `vitest`
