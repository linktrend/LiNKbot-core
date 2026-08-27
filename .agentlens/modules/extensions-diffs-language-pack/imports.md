# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> _[.]
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> src[src]
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> _[.]
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> node_crypto[node:crypto]
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> node_fs[node:fs]
    extensions_diffs_language_pack[extensions-diffs-language-pack] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./src/plugin.js`
- `./viewer-assets.js`
- `node:crypto`
- `node:fs/promises`
- `node:url`
