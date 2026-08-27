# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_infra_command_explainer[src-infra-command-explainer] --> command_analysis[command-analysis]
    src_infra_command_explainer[src-infra-command-explainer] --> __[..]
    src_infra_command_explainer[src-infra-command-explainer] --> __[..]
    src_infra_command_explainer[src-infra-command-explainer] --> __[..]
    src_infra_command_explainer[src-infra-command-explainer] --> _[.]
    src_infra_command_explainer[src-infra-command-explainer] --> _[.]
    src_infra_command_explainer[src-infra-command-explainer] --> _[.]
    src_infra_command_explainer[src-infra-command-explainer] --> node_module[node:module]
    src_infra_command_explainer[src-infra-command-explainer] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../command-analysis/risks.js`
- `../exec-wrapper-resolution.js`
- `../exec-wrapper-tokens.js`
- `../shell-wrapper-resolution.js`
- `./extract.js`
- `./format.js`
- `./tree-sitter-runtime.js`
- `node:module`
- `vitest`
