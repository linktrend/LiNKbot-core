# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> auto_reply[auto-reply]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> outbound[outbound]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> interactive[interactive]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> __[..]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> __[..]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> _[.]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> normalization_core[normalization-core]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> normalization_core[normalization-core]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> plugin_sdk[plugin-sdk]
    src_channels_plugins_outbound[src-channels-plugins-outbound] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../auto-reply/chunk.js`
- `../../../infra/outbound/sanitize-text.js`
- `../../../interactive/payload.js`
- `../media-limits.js`
- `../registry-loader.js`
- `./interactive.js`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `openclaw/plugin-sdk/reply-payload`
- `vitest`
