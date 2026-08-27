# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_trajectory[src-trajectory] --> agents[agents]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> config[config]
    src_trajectory[src-trajectory] --> config[config]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> sessions[sessions]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> infra[infra]
    src_trajectory[src-trajectory] --> logging[logging]
    src_trajectory[src-trajectory] --> logging[logging]
    src_trajectory[src-trajectory] --> logging[logging]
    src_trajectory[src-trajectory] --> plugins[plugins]
    src_trajectory[src-trajectory] --> plugins[plugins]
    src_trajectory[src-trajectory] --> plugins[plugins]
    src_trajectory[src-trajectory] --> routing[routing]
    src_trajectory[src-trajectory] --> state[state]
    src_trajectory[src-trajectory] --> state[state]
    src_trajectory[src-trajectory] --> test_helpers[test-helpers]
    src_trajectory[src-trajectory] --> utils[utils]
    src_trajectory[src-trajectory] --> utils[utils]
    src_trajectory[src-trajectory] --> __[..]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _[.]
    src_trajectory[src-trajectory] --> _openclaw[@openclaw]
    src_trajectory[src-trajectory] --> normalization_core[normalization-core]
    src_trajectory[src-trajectory] --> node_fs[node:fs]
    src_trajectory[src-trajectory] --> node_fs[node:fs]
    src_trajectory[src-trajectory] --> node_os[node:os]
    src_trajectory[src-trajectory] --> node_path[node:path]
    src_trajectory[src-trajectory] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../agents/payload-redaction.js`
- `../agents/sessions/session-file-parser.js`
- `../config/paths.js`
- `../config/redact-snapshot.js`
- `../config/sessions/paths.js`
- `../config/sessions/session-accessor.js`
- `../config/sessions/session-sqlite-target.js`
- `../config/sessions/sqlite-marker.js`
- `../config/sessions/transcript-tree.js`
- `../infra/file-read.js`
- `../infra/fs-safe.js`
- `../infra/git-commit.js`
- `../infra/home-dir.js`
- `../infra/kysely-sync.js`
- `../infra/os-summary.js`
- `../infra/path-guards.js`
- `../infra/regular-file.js`
- `../logging/diagnostic-support-bundle.js`
- `../logging/diagnostic-support-redaction.js`
- `../logging/redact.js`
- `../plugins/plugin-metadata-snapshot.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../routing/session-key.js`
- `../state/openclaw-agent-db.js`
- `../state/openclaw-state-db.js`
- `../test-helpers/temp-dir.js`
- `../utils/boolean.js`
- `../utils/safe-json.js`
- `../version.js`
- `./cleanup.js`
- `./export.js`
- `./metadata.js`
- `./paths.js`
- `./runtime-file.js`
- `./runtime-store.sqlite.js`
- `./runtime.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
