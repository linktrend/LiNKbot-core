# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> _[.]
    packages_acp_core_src[packages-acp-core-src] --> normalization_core[normalization-core]
    packages_acp_core_src[packages-acp-core-src] --> normalization_core[normalization-core]
    packages_acp_core_src[packages-acp-core-src] --> node_crypto[node:crypto]
    packages_acp_core_src[packages-acp-core-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./error-format.js`
- `./meta.js`
- `./numeric-options.js`
- `./session-interaction-mode.js`
- `./session-lineage-meta.js`
- `./session.js`
- `./structured-auth-redaction.js`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/string-coerce`
- `node:crypto`
- `vitest`
