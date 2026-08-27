# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_skills_security[src-skills-security] --> agents[agents]
    src_skills_security[src-skills-security] --> infra[infra]
    src_skills_security[src-skills-security] --> infra[infra]
    src_skills_security[src-skills-security] --> security[security]
    src_skills_security[src-skills-security] --> security[security]
    src_skills_security[src-skills-security] --> _[.]
    src_skills_security[src-skills-security] --> _[.]
    src_skills_security[src-skills-security] --> _[.]
    src_skills_security[src-skills-security] --> _openclaw[@openclaw]
    src_skills_security[src-skills-security] --> normalization_core[normalization-core]
    src_skills_security[src-skills-security] --> child_process[child_process]
    src_skills_security[src-skills-security] --> node_fs[node:fs]
    src_skills_security[src-skills-security] --> node_fs[node:fs]
    src_skills_security[src-skills-security] --> node_os[node:os]
    src_skills_security[src-skills-security] --> node_path[node:path]
    src_skills_security[src-skills-security] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../agents/workspace-dirs.js`
- `../../infra/clawhub.js`
- `../../infra/errors.js`
- `../../security/scan-paths.js`
- `../../security/test-temp-cases.js`
- `./scan-evidence.js`
- `./scanner.js`
- `./workspace-audit.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/utf16-slice`
- `child_process`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `vitest`
