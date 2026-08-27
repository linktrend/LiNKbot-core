# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> src[src]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> __[..]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> __[..]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> _[.]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> node_child_process[node:child_process]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> node_fs[node:fs]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> node_path[node:path]
    scripts_lib_ts_topology[scripts-lib-ts-topology] --> typescript[typescript]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/normalization-core/src/expect.js`
- `../bundled-plugin-paths.mjs`
- `../plugin-sdk-entries.mjs`
- `./context.js`
- `node:child_process`
- `node:fs`
- `node:path`
- `typescript`
