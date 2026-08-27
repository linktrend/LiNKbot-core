# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> __[..]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> __[..]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> _[.]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> _[.]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> _[.]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> _[.]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> normalization_core[normalization-core]
    packages_acp_core_src_runtime[packages-acp-core-src-runtime] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../error-format.js`
- `../normalize-text.js`
- `./error-text.js`
- `./errors.js`
- `./session-identifiers.js`
- `./session-identity.js`
- `@openclaw/normalization-core/string-coerce`
- `vitest`
