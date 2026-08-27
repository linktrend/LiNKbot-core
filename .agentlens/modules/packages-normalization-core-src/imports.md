# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> _[.]
    packages_normalization_core_src[packages-normalization-core-src] --> normalization_core[normalization-core]
    packages_normalization_core_src[packages-normalization-core-src] --> normalization_core[normalization-core]
    packages_normalization_core_src[packages-normalization-core-src] --> normalization_core[normalization-core]
    packages_normalization_core_src[packages-normalization-core-src] --> node_fs[node:fs]
    packages_normalization_core_src[packages-normalization-core-src] --> node_path[node:path]
    packages_normalization_core_src[packages-normalization-core-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./error-coercion.js`
- `./expect.js`
- `./format.js`
- `./json-coercion.js`
- `./number-coercion.js`
- `./record-coerce.js`
- `./result.js`
- `./string-coerce.js`
- `./string-normalization.js`
- `./text-decoding.js`
- `./utf16-slice.js`
- `@openclaw/normalization-core/agent-id`
- `@openclaw/normalization-core/boolean-coercion`
- `@openclaw/normalization-core/string-coerce`
- `node:fs`
- `node:path`
- `vitest`
