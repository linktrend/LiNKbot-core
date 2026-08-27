# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> _[.]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> _[.]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> _[.]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> node_crypto[node:crypto]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> node_fs[node:fs]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> node_net[node:net]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> node_os[node:os]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> node_path[node:path]
    extensions_linux_canvas_src[extensions-linux-canvas-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./commands.js`
- `./ipc-client.js`
- `./socket-path.js`
- `node:crypto`
- `node:fs`
- `node:net`
- `node:os`
- `node:path`
- `vitest`
