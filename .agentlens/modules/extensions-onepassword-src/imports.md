# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> _[.]
    extensions_onepassword_src[extensions-onepassword-src] --> node_crypto[node:crypto]
    extensions_onepassword_src[extensions-onepassword-src] --> node_fs[node:fs]
    extensions_onepassword_src[extensions-onepassword-src] --> node_fs[node:fs]
    extensions_onepassword_src[extensions-onepassword-src] --> node_os[node:os]
    extensions_onepassword_src[extensions-onepassword-src] --> node_path[node:path]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> plugin_sdk[plugin-sdk]
    extensions_onepassword_src[extensions-onepassword-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./broker.js`
- `./cli.js`
- `./config.js`
- `./errors.js`
- `./memory-store.test-support.js`
- `./op-client.js`
- `./pending-authorization.js`
- `./tool.js`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/secret-file-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `openclaw/plugin-sdk/tool-results`
- `vitest`
