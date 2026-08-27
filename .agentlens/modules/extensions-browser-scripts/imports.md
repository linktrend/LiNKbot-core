# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_browser_scripts[extensions-browser-scripts] --> __[..]
    extensions_browser_scripts[extensions-browser-scripts] --> _[.]
    extensions_browser_scripts[extensions-browser-scripts] --> esbuild[esbuild]
    extensions_browser_scripts[extensions-browser-scripts] --> node_fs[node:fs]
    extensions_browser_scripts[extensions-browser-scripts] --> node_fs[node:fs]
    extensions_browser_scripts[extensions-browser-scripts] --> node_path[node:path]
    extensions_browser_scripts[extensions-browser-scripts] --> node_url[node:url]
    extensions_browser_scripts[extensions-browser-scripts] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../test-support.js`
- `./build-copilot-runtime.mjs`
- `esbuild`
- `node:fs`
- `node:fs/promises`
- `node:path`
- `node:url`
- `vitest`
