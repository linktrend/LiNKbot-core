# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> bridge[bridge]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> test_support[test-support]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> adapter[adapter]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> __[..]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _[.]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> _openclaw[@openclaw]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_async_hooks[node:async_hooks]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_buffer[node:buffer]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_crypto[node:crypto]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_fs[node:fs]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_os[node:os]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> node_path[node:path]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> plugin_sdk[plugin-sdk]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> pretty_ms[pretty-ms]
    extensions_qqbot_src_engine_utils[extensions-qqbot-src-engine-utils] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../bridge/runtime.js`
- `../../test-support/runtime.js`
- `../adapter/index.js`
- `../types.js`
- `./attachment-tags.js`
- `./audio.js`
- `./file-utils.js`
- `./format.js`
- `./image-size.js`
- `./log.js`
- `./media-tags.js`
- `./payload.js`
- `./platform.js`
- `./string-normalize.js`
- `./stt.js`
- `./text-parsing.js`
- `./upload-cache.js`
- `@openclaw/normalization-core`
- `node:async_hooks`
- `node:buffer`
- `node:crypto`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/media-mime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/text-utility-runtime`
- `pretty-ms`
- `vitest`
