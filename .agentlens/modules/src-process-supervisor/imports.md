# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_process_supervisor[src-process-supervisor] --> agents[agents]
    src_process_supervisor[src-process-supervisor] --> logging[logging]
    src_process_supervisor[src-process-supervisor] --> shared[shared]
    src_process_supervisor[src-process-supervisor] --> adapters[adapters]
    src_process_supervisor[src-process-supervisor] --> adapters[adapters]
    src_process_supervisor[src-process-supervisor] --> _[.]
    src_process_supervisor[src-process-supervisor] --> _[.]
    src_process_supervisor[src-process-supervisor] --> _openclaw[@openclaw]
    src_process_supervisor[src-process-supervisor] --> normalization_core[normalization-core]
    src_process_supervisor[src-process-supervisor] --> normalization_core[normalization-core]
    src_process_supervisor[src-process-supervisor] --> node_crypto[node:crypto]
    src_process_supervisor[src-process-supervisor] --> node_perf_hooks[node:perf_hooks]
    src_process_supervisor[src-process-supervisor] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../agents/shell-utils.js`
- `../../logging/subsystem.js`
- `../../shared/lazy-runtime.js`
- `./adapters/child.js`
- `./adapters/pty.js`
- `./registry.js`
- `./supervisor.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:perf_hooks`
- `vitest`
