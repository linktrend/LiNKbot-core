# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_scripts[src-scripts] --> scripts[scripts]
    src_scripts[src-scripts] --> scripts[scripts]
    src_scripts[src-scripts] --> scripts[scripts]
    src_scripts[src-scripts] --> scripts[scripts]
    src_scripts[src-scripts] --> scripts[scripts]
    src_scripts[src-scripts] --> helpers[helpers]
    src_scripts[src-scripts] --> test_utils[test-utils]
    src_scripts[src-scripts] --> _openclaw[@openclaw]
    src_scripts[src-scripts] --> node_child_process[node:child_process]
    src_scripts[src-scripts] --> node_fs[node:fs]
    src_scripts[src-scripts] --> node_fs[node:fs]
    src_scripts[src-scripts] --> node_os[node:os]
    src_scripts[src-scripts] --> node_path[node:path]
    src_scripts[src-scripts] --> plugin_sdk[plugin-sdk]
    src_scripts[src-scripts] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../scripts/control-ui-i18n-report.ts`
- `../../scripts/control-ui-i18n.ts`
- `../../scripts/prepare-codex-ci-auth.ts`
- `../../scripts/prepare-codex-ci-config.ts`
- `../../scripts/sync-plugin-versions.js`
- `../../test/helpers/temp-dir.js`
- `../test-utils/temp-dir.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/test-fixtures`
- `vitest`
