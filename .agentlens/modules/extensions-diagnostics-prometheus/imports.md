# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> __[..]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> _[.]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> src[src]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> _openclaw[@openclaw]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_prometheus[extensions-diagnostics-prometheus] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../api.js`
- `./service.js`
- `./src/service.js`
- `@openclaw/normalization-core`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
