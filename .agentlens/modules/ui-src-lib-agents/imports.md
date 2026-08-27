# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lib_agents[ui-src-lib-agents] --> agents[agents]
    ui_src_lib_agents[ui-src-lib-agents] --> shared[shared]
    ui_src_lib_agents[ui-src-lib-agents] --> i18n[i18n]
    ui_src_lib_agents[ui-src-lib-agents] --> __[..]
    ui_src_lib_agents[ui-src-lib-agents] --> chat[chat]
    ui_src_lib_agents[ui-src-lib-agents] --> __[..]
    ui_src_lib_agents[ui-src-lib-agents] --> sessions[sessions]
    ui_src_lib_agents[ui-src-lib-agents] --> __[..]
    ui_src_lib_agents[ui-src-lib-agents] --> _[.]
    ui_src_lib_agents[ui-src-lib-agents] --> _[.]
    ui_src_lib_agents[ui-src-lib-agents] --> _[.]
    ui_src_lib_agents[ui-src-lib-agents] --> _[.]
    ui_src_lib_agents[ui-src-lib-agents] --> _openclaw[@openclaw]
    ui_src_lib_agents[ui-src-lib-agents] --> lit[lit]
    ui_src_lib_agents[ui-src-lib-agents] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../src/agents/tool-policy-shared.js`
- `../../../../src/shared/avatar-limits.js`
- `../../i18n/index.ts`
- `../avatar.ts`
- `../chat/model-ref.ts`
- `../gateway-errors.ts`
- `../sessions/session-key.ts`
- `../string-coerce.ts`
- `./display.ts`
- `./identity.ts`
- `./index.ts`
- `./tools-effective.ts`
- `@openclaw/normalization-core`
- `lit`
- `vitest`
