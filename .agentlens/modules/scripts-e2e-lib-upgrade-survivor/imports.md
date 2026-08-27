# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> lib[lib]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> lib[lib]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> __[..]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> __[..]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_child_process[node:child_process]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_fs[node:fs]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_http[node:http]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_path[node:path]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_sqlite[node:sqlite]
    scripts_e2e_lib_upgrade_survivor[scripts-e2e-lib-upgrade-survivor] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `../../../lib/bounded-response.mjs`
- `../../../lib/npm-publish-plan.mjs`
- `../../../windows-cmd-helpers.mjs`
- `../plugin-index-sqlite.mjs`
- `node:child_process`
- `node:fs`
- `node:http`
- `node:path`
- `node:sqlite`
- `node:url`
