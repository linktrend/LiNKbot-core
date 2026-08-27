# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_gateway_terminal[src-gateway-terminal] --> src[src]
    src_gateway_terminal[src-gateway-terminal] --> helpers[helpers]
    src_gateway_terminal[src-gateway-terminal] --> agents[agents]
    src_gateway_terminal[src-gateway-terminal] --> sandbox[sandbox]
    src_gateway_terminal[src-gateway-terminal] --> infra[infra]
    src_gateway_terminal[src-gateway-terminal] --> infra[infra]
    src_gateway_terminal[src-gateway-terminal] --> infra[infra]
    src_gateway_terminal[src-gateway-terminal] --> process[process]
    src_gateway_terminal[src-gateway-terminal] --> routing[routing]
    src_gateway_terminal[src-gateway-terminal] --> shared[shared]
    src_gateway_terminal[src-gateway-terminal] --> utils[utils]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _[.]
    src_gateway_terminal[src-gateway-terminal] --> _openclaw[@openclaw]
    src_gateway_terminal[src-gateway-terminal] --> node_crypto[node:crypto]
    src_gateway_terminal[src-gateway-terminal] --> node_fs[node:fs]
    src_gateway_terminal[src-gateway-terminal] --> node_os[node:os]
    src_gateway_terminal[src-gateway-terminal] --> node_path[node:path]
    src_gateway_terminal[src-gateway-terminal] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../../test/helpers/temp-dir.js`
- `../../agents/agent-scope-config.js`
- `../../agents/sandbox/config.js`
- `../../infra/errors.js`
- `../../infra/node-commands.js`
- `../../infra/terminal-file-upload.js`
- `../../process/terminal-pty.js`
- `../../routing/session-key.js`
- `../../shared/bounded-buffer.js`
- `../../utils/utf8-truncate.js`
- `./backend.js`
- `./buffer-text.js`
- `./gateway-transport.js`
- `./launch.js`
- `./node-relay.js`
- `./output-coalescer.js`
- `./output-flow-control.js`
- `./output-ring.js`
- `./session-limits.js`
- `./session-manager.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs`
- `node:os`
- `node:path`
- `vitest`
