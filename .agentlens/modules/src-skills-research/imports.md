# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_skills_research[src-skills-research] --> sessions[sessions]
    src_skills_research[src-skills-research] --> sessions[sessions]
    src_skills_research[src-skills-research] --> sessions[sessions]
    src_skills_research[src-skills-research] --> infra[infra]
    src_skills_research[src-skills-research] --> logging[logging]
    src_skills_research[src-skills-research] --> test_utils[test-utils]
    src_skills_research[src-skills-research] --> test_utils[test-utils]
    src_skills_research[src-skills-research] --> discovery[discovery]
    src_skills_research[src-skills-research] --> lifecycle[lifecycle]
    src_skills_research[src-skills-research] --> workshop[workshop]
    src_skills_research[src-skills-research] --> workshop[workshop]
    src_skills_research[src-skills-research] --> workshop[workshop]
    src_skills_research[src-skills-research] --> workshop[workshop]
    src_skills_research[src-skills-research] --> _[.]
    src_skills_research[src-skills-research] --> _[.]
    src_skills_research[src-skills-research] --> _[.]
    src_skills_research[src-skills-research] --> _openclaw[@openclaw]
    src_skills_research[src-skills-research] --> node_fs[node:fs]
    src_skills_research[src-skills-research] --> node_path[node:path]
    src_skills_research[src-skills-research] --> plugin_sdk[plugin-sdk]
    src_skills_research[src-skills-research] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../config/sessions/paths.js`
- `../../config/sessions/session-accessor.js`
- `../../config/sessions/skill-suggestions.js`
- `../../infra/crypto-digest.js`
- `../../logging/subsystem.js`
- `../../test-utils/openclaw-test-state.js`
- `../../test-utils/tracked-temp-dirs.js`
- `../discovery/skill-index.js`
- `../lifecycle/workspace-skill-write.js`
- `../workshop/config.js`
- `../workshop/frontmatter.js`
- `../workshop/service.js`
- `../workshop/store.js`
- `./autocapture.js`
- `./signals.js`
- `./text.js`
- `@openclaw/normalization-core`
- `node:fs/promises`
- `node:path`
- `openclaw/plugin-sdk/keyed-async-queue`
- `vitest`
