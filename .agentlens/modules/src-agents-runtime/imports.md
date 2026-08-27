# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_agents_runtime[src-agents-runtime] --> infra[infra]
    src_agents_runtime[src-agents-runtime] --> utils[utils]
    src_agents_runtime[src-agents-runtime] --> _[.]
    src_agents_runtime[src-agents-runtime] --> internal[internal]
    src_agents_runtime[src-agents-runtime] --> normalization_core[normalization-core]
    src_agents_runtime[src-agents-runtime] --> node_events[node:events]
    src_agents_runtime[src-agents-runtime] --> node_http[node:http]
    src_agents_runtime[src-agents-runtime] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../infra/http-body.js`
- `../../llm/utils/event-stream.js`
- `./proxy.js`
- `@openclaw/ai/internal/runtime`
- `@openclaw/normalization-core/number-coercion`
- `node:events`
- `node:http`
- `vitest`
