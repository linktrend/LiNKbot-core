# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> test_support[test-support]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> utils[utils]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> utils[utils]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> utils[utils]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> utils[utils]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> utils[utils]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> _[.]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> node_fs[node:fs]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> node_os[node:os]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> node_path[node:path]
    extensions_qqbot_src_engine_ref[extensions-qqbot-src-engine-ref] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/runtime.js`
- `../utils/attachment-tags.js`
- `../utils/format.js`
- `../utils/log.js`
- `../utils/sqlite-state.js`
- `../utils/text-parsing.js`
- `./format-ref-entry.js`
- `node:fs`
- `node:os`
- `node:path`
- `vitest`
