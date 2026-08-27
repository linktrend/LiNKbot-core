# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> __[..]
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> __[..]
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> _[.]
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> is_number[is-number]
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> node_fs[node:fs]
    scripts_e2e_lib_fixtures[scripts-e2e-lib-fixtures] --> node_path[node:path]
```

## External Dependencies

Dependencies from other modules:

- `../env-limits.mjs`
- `../text-file-utils.mjs`
- `./common.mjs`
- `is-number`
- `node:fs`
- `node:path`
