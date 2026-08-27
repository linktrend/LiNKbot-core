# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_github[scripts-github] --> lib[lib]
    scripts_github[scripts-github] --> lib[lib]
    scripts_github[scripts-github] --> _[.]
    scripts_github[scripts-github] --> _[.]
    scripts_github[scripts-github] --> node_fs[node:fs]
    scripts_github[scripts-github] --> node_fs[node:fs]
    scripts_github[scripts-github] --> node_timers[node:timers]
    scripts_github[scripts-github] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `../lib/bounded-response.mjs`
- `../lib/regexp.mjs`
- `./guard-shared.mjs`
- `./real-behavior-proof-policy.mjs`
- `node:fs`
- `node:fs/promises`
- `node:timers/promises`
- `node:url`
