# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> shared[shared]
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> shared[shared]
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> shared[shared]
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> _[.]
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> _copilotkit[@copilotkit]
    extensions_qa_lab_src_providers_aimock[extensions-qa-lab-src-providers-aimock] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../shared/debug-request-cursor.js`
- `../shared/http-json.js`
- `../shared/mock-provider-definition.js`
- `./server.js`
- `@copilotkit/aimock`
- `vitest`
