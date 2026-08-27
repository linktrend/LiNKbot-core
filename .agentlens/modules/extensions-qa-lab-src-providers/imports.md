# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> __[..]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> aimock[aimock]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> _[.]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> _[.]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> live_frontier[live-frontier]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> mock_openai[mock-openai]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> node_fs[node:fs]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> node_os[node:os]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> node_path[node:path]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_providers[extensions-qa-lab-src-providers] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../qa-gateway-config.js`
- `./aimock/index.js`
- `./image-generation.js`
- `./index.js`
- `./live-frontier/index.js`
- `./mock-openai/index.js`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
