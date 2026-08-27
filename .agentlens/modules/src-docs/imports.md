# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_docs[src-docs] --> src[src]
    src_docs[src-docs] --> auto_reply[auto-reply]
    src_docs[src-docs] --> config[config]
    src_docs[src-docs] --> plugins[plugins]
    src_docs[src-docs] --> test_utils[test-utils]
    src_docs[src-docs] --> test_utils[test-utils]
    src_docs[src-docs] --> test_utils[test-utils]
    src_docs[src-docs] --> _openclaw[@openclaw]
    src_docs[src-docs] --> json5[json5]
    src_docs[src-docs] --> node_child_process[node:child_process]
    src_docs[src-docs] --> node_fs[node:fs]
    src_docs[src-docs] --> node_fs[node:fs]
    src_docs[src-docs] --> node_path[node:path]
    src_docs[src-docs] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/plugin-package-contract/src/index.ts`
- `../auto-reply/commands-registry.js`
- `../config/zod-schema.js`
- `../plugins/runtime.js`
- `../test-utils/channel-plugins.js`
- `../test-utils/fs-scan-assertions.js`
- `../test-utils/repo-files.js`
- `@openclaw/normalization-core`
- `json5`
- `node:child_process`
- `node:fs`
- `node:fs/promises`
- `node:path`
- `vitest`
