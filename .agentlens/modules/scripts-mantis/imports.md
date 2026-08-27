# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_mantis[scripts-mantis] --> lib[lib]
    scripts_mantis[scripts-mantis] --> node_child_process[node:child_process]
    scripts_mantis[scripts-mantis] --> node_crypto[node:crypto]
    scripts_mantis[scripts-mantis] --> node_fs[node:fs]
    scripts_mantis[scripts-mantis] --> node_os[node:os]
    scripts_mantis[scripts-mantis] --> node_path[node:path]
    scripts_mantis[scripts-mantis] --> node_url[node:url]
```

## External Dependencies

Dependencies from other modules:

- `../lib/bounded-response.mjs`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:os`
- `node:path`
- `node:url`
