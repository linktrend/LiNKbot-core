# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_agent_core_src[packages-agent-core-src] --> __[..]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> session[session]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> _[.]
    packages_agent_core_src[packages-agent-core-src] --> ai[ai]
    packages_agent_core_src[packages-agent-core-src] --> _openclaw[@openclaw]
    packages_agent_core_src[packages-agent-core-src] --> node_async_hooks[node:async_hooks]
    packages_agent_core_src[packages-agent-core-src] --> node_child_process[node:child_process]
    packages_agent_core_src[packages-agent-core-src] --> node_fs[node:fs]
    packages_agent_core_src[packages-agent-core-src] --> typebox[typebox]
    packages_agent_core_src[packages-agent-core-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../messages.js`
- `./agent-loop.js`
- `./agent.js`
- `./errors.js`
- `./harness/session/uuid.js`
- `./llm.js`
- `./reasoning.js`
- `./runtime-deps.js`
- `./session.js`
- `./tool-execution-context.js`
- `./truncate.js`
- `./turn-interruption.js`
- `./validation.js`
- `@openclaw/ai/event-stream`
- `@openclaw/llm-core`
- `node:async_hooks`
- `node:child_process`
- `node:fs`
- `typebox`
- `vitest`
