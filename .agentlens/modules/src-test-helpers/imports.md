# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_test_helpers[src-test-helpers] --> net[net]
    src_test_helpers[src-test-helpers] --> test_utils[test-utils]
    src_test_helpers[src-test-helpers] --> test_utils[test-utils]
    src_test_helpers[src-test-helpers] --> _[.]
    src_test_helpers[src-test-helpers] --> _[.]
    src_test_helpers[src-test-helpers] --> node_fs[node:fs]
    src_test_helpers[src-test-helpers] --> node_fs[node:fs]
    src_test_helpers[src-test-helpers] --> node_os[node:os]
    src_test_helpers[src-test-helpers] --> node_path[node:path]
    src_test_helpers[src-test-helpers] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../infra/net/hostname.js`
- `../test-utils/env.js`
- `../test-utils/session-state-cleanup.js`
- `./state-dir-env.js`
- `./temp-dir.js`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
