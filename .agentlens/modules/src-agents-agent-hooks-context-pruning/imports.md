# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> cli[cli]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> utils[utils]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> embedded_agent_runner[embedded-agent-runner]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> __[..]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> __[..]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> _[.]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> _[.]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> _[.]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> _[.]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> normalization_core[normalization-core]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> normalization_core[normalization-core]
    src_agents_agent_hooks_context_pruning[src-agents-agent-hooks-context-pruning] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../cli/parse-duration.js`
- `../../../utils/cjk-chars.js`
- `../../embedded-agent-runner/thinking.js`
- `../../glob-pattern.js`
- `../session-manager-runtime-registry.js`
- `./pruner.js`
- `./runtime.js`
- `./settings.js`
- `./tools.js`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `vitest`
