# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> _[.]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> _[.]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> node_fs[node:fs]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> node_os[node:os]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> node_path[node:path]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_providers_shared[extensions-qa-lab-src-providers-shared] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./auth-store.js`
- `./mock-model-config.js`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
