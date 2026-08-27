# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _[.]
    extensions_chutes[extensions-chutes] --> _openclaw[@openclaw]
    extensions_chutes[extensions-chutes] --> node_crypto[node:crypto]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> plugin_sdk[plugin-sdk]
    extensions_chutes[extensions-chutes] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./index.js`
- `./model-discovery-env.js`
- `./models.js`
- `./oauth.js`
- `./onboard.js`
- `./openclaw.plugin.json`
- `./provider-catalog.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-auth-runtime`
- `openclaw/plugin-sdk/provider-catalog-live-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-oauth-runtime`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
