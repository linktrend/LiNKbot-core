# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> attachments[attachments]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> __[..]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _[.]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> _openclaw[@openclaw]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> plugin_sdk[plugin-sdk]
    extensions_msteams_src_monitor_handler[extensions-msteams-src-monitor-handler] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../runtime-api.js`
- `../adaptive-card-submit.js`
- `../attachments.js`
- `../attachments/shared.js`
- `../bot-framework-service-url.js`
- `../errors.js`
- `../graph-thread.js`
- `../inbound.js`
- `../monitor-handler.test-helpers.js`
- `../policy.js`
- `../polls.js`
- `../reaction-types.js`
- `../reply-dispatcher.js`
- `../request-timeout.js`
- `../runtime.js`
- `../sent-message-cache.js`
- `../team-identity.js`
- `../thread-parent-context.js`
- `./access.js`
- `./inbound-media.js`
- `./message-handler-mock-support.test-support.js`
- `./message-handler.js`
- `./message-handler.test-support.js`
- `./reaction-handler.js`
- `./thread-session.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/allow-from`
- `openclaw/plugin-sdk/channel-inbound`
- `openclaw/plugin-sdk/channel-inbound-debounce`
- `openclaw/plugin-sdk/channel-ingress-runtime`
- `openclaw/plugin-sdk/channel-outbound`
- `openclaw/plugin-sdk/context-visibility-runtime`
- `openclaw/plugin-sdk/reply-history`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
