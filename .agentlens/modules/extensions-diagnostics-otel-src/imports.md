# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> __[..]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _[.]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> _opentelemetry[@opentelemetry]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> semantic_conventions[semantic-conventions]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> node_fs[node:fs]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> node_os[node:os]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> node_path[node:path]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> plugin_sdk[plugin-sdk]
    extensions_diagnostics_otel_src[extensions-diagnostics-otel-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../api.js`
- `./service-attributes.js`
- `./service-constants.js`
- `./service-content-normalization.js`
- `./service-events.js`
- `./service-exporter.js`
- `./service-genai-attributes.js`
- `./service-genai-content.js`
- `./service-logs.js`
- `./service-metrics.js`
- `./service-recorder-runtime.js`
- `./service-recorders-harness.js`
- `./service-recorders-model.js`
- `./service-recorders-operations.js`
- `./service-recorders-tools.js`
- `./service-recorders-usage.js`
- `./service-trace-context.js`
- `./service-traces.js`
- `./service.js`
- `@opentelemetry/api`
- `@opentelemetry/exporter-logs-otlp-proto`
- `@opentelemetry/exporter-metrics-otlp-proto`
- `@opentelemetry/exporter-trace-otlp-proto`
- `@opentelemetry/resources`
- `@opentelemetry/sdk-logs`
- `@opentelemetry/sdk-metrics`
- `@opentelemetry/sdk-node`
- `@opentelemetry/sdk-trace-base`
- `@opentelemetry/semantic-conventions`
- `@opentelemetry/semantic-conventions/incubating`
- `node:fs`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/diagnostic-runtime`
- `openclaw/plugin-sdk/fetch-runtime`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
