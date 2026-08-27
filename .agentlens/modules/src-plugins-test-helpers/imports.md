# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_plugins_test_helpers[src-plugins-test-helpers] --> __[..]
    src_plugins_test_helpers[src-plugins-test-helpers] --> node_fs[node:fs]
    src_plugins_test_helpers[src-plugins-test-helpers] --> node_fs[node:fs]
    src_plugins_test_helpers[src-plugins-test-helpers] --> node_os[node:os]
    src_plugins_test_helpers[src-plugins-test-helpers] --> node_path[node:path]
    src_plugins_test_helpers[src-plugins-test-helpers] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../install-paths.js`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
