# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> __[..]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> __[..]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> __[..]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> __[..]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> __[..]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _[.]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _[.]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _[.]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _[.]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _[.]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> _openclaw[@openclaw]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> node_buffer[node:buffer]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> node_dns[node:dns]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_attachments[extensions-msteams-src-attachments] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../runtime-api.js`
- `../request-timeout.js`
- `../response-with-release.js`
- `../runtime.js`
- `../user-agent.js`
- `./bot-framework.js`
- `./download.js`
- `./graph.js`
- `./remote-media.js`
- `./shared.js`
- `@openclaw/normalization-core`
- `node:buffer`
- `node:dns/promises`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/ssrf-policy`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
