# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_slack_src_http[extensions-slack-src-http] --> _[.]
    extensions_slack_src_http[extensions-slack-src-http] --> _[.]
    extensions_slack_src_http[extensions-slack-src-http] --> _[.]
    extensions_slack_src_http[extensions-slack-src-http] --> plugin_sdk[plugin-sdk]
    extensions_slack_src_http[extensions-slack-src-http] --> plugin_sdk[plugin-sdk]
    extensions_slack_src_http[extensions-slack-src-http] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./paths.js`
- `./plugin-routes.js`
- `./registry.js`
- `openclaw/plugin-sdk/account-id`
- `openclaw/plugin-sdk/plugin-test-api`
- `vitest`
