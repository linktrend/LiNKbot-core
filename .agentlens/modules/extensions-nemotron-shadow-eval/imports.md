# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> __[..]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> _[.]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> _[.]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> src[src]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> node_crypto[node:crypto]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> plugin_sdk[plugin-sdk]
    extensions_nemotron_shadow_eval[extensions-nemotron-shadow-eval] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../openclaw.plugin.json`
- `./index.js`
- `./policy.js`
- `./src/policy.js`
- `node:crypto`
- `openclaw/plugin-sdk/plugin-entry`
- `vitest`
