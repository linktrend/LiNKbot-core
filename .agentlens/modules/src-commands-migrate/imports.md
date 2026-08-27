# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_commands_migrate[src-commands-migrate] --> src[src]
    src_commands_migrate[src-commands-migrate] --> src[src]
    src_commands_migrate[src-commands-migrate] --> src[src]
    src_commands_migrate[src-commands-migrate] --> cli[cli]
    src_commands_migrate[src-commands-migrate] --> config[config]
    src_commands_migrate[src-commands-migrate] --> config[config]
    src_commands_migrate[src-commands-migrate] --> plugin_sdk[plugin-sdk]
    src_commands_migrate[src-commands-migrate] --> plugin_sdk[plugin-sdk]
    src_commands_migrate[src-commands-migrate] --> plugins[plugins]
    src_commands_migrate[src-commands-migrate] --> __[..]
    src_commands_migrate[src-commands-migrate] --> test_helpers[test-helpers]
    src_commands_migrate[src-commands-migrate] --> __[..]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _[.]
    src_commands_migrate[src-commands-migrate] --> _clack[@clack]
    src_commands_migrate[src-commands-migrate] --> _clack[@clack]
    src_commands_migrate[src-commands-migrate] --> _openclaw[@openclaw]
    src_commands_migrate[src-commands-migrate] --> normalization_core[normalization-core]
    src_commands_migrate[src-commands-migrate] --> normalization_core[normalization-core]
    src_commands_migrate[src-commands-migrate] --> normalization_core[normalization-core]
    src_commands_migrate[src-commands-migrate] --> normalization_core[normalization-core]
    src_commands_migrate[src-commands-migrate] --> node_fs[node:fs]
    src_commands_migrate[src-commands-migrate] --> node_os[node:os]
    src_commands_migrate[src-commands-migrate] --> node_path[node:path]
    src_commands_migrate[src-commands-migrate] --> node_stream[node:stream]
    src_commands_migrate[src-commands-migrate] --> node_util[node:util]
    src_commands_migrate[src-commands-migrate] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/gateway-protocol/src/index.js`
- `../../../packages/terminal-core/src/ansi.js`
- `../../../packages/terminal-core/src/theme.js`
- `../../cli/progress.js`
- `../../config/config.js`
- `../../config/paths.js`
- `../../plugin-sdk/memory-migration-source.js`
- `../../plugin-sdk/migration.js`
- `../../plugins/migration-provider-runtime.js`
- `../../runtime.js`
- `../../test-helpers/temp-dir.js`
- `../backup.js`
- `./apply.js`
- `./context.js`
- `./item-selection.js`
- `./memory-import.js`
- `./output.js`
- `./providers.js`
- `./selection.js`
- `./skill-selection-prompt.js`
- `@clack/core`
- `@clack/prompts`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:stream`
- `node:util`
- `vitest`
