# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> __[..]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> __[..]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> __[..]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> __[..]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> session[session]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> __[..]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> _[.]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> _[.]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> _openclaw[@openclaw]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> normalization_core[normalization-core]
    packages_agent_core_src_harness_compaction[packages-agent-core-src-harness-compaction] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../llm.js`
- `../../reasoning.js`
- `../../runtime-deps.js`
- `../messages.js`
- `../session/session.js`
- `../types.js`
- `./compaction.js`
- `./utils.js`
- `@openclaw/llm-core`
- `@openclaw/normalization-core/utf16-slice`
- `vitest`
