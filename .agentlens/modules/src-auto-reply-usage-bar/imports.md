# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> helpers[helpers]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> infra[infra]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> logging[logging]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _[.]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _[.]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _[.]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _[.]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _[.]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> _openclaw[@openclaw]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> node_fs[node:fs]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> node_os[node:os]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> node_path[node:path]
    src_auto_reply_usage_bar[src-auto-reply-usage-bar] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../test/helpers/temp-dir.js`
- `../../infra/dedupe.js`
- `../../logging/subsystem.js`
- `./contract.js`
- `./default-template.js`
- `./template.js`
- `./template.test-support.js`
- `./translator.js`
- `@openclaw/normalization-core`
- `node:fs`
- `node:os`
- `node:path`
- `vitest`
