# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_ollama_src[extensions-ollama-src] --> test_support[test-support]
    extensions_ollama_src[extensions-ollama-src] --> __[..]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> sanitizers[sanitizers]
    extensions_ollama_src[extensions-ollama-src] --> sanitizers[sanitizers]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _[.]
    extensions_ollama_src[extensions-ollama-src] --> _openclaw[@openclaw]
    extensions_ollama_src[extensions-ollama-src] --> node_crypto[node:crypto]
    extensions_ollama_src[extensions-ollama-src] --> node_fs[node:fs]
    extensions_ollama_src[extensions-ollama-src] --> node_http[node:http]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> plugin_sdk[plugin-sdk]
    extensions_ollama_src[extensions-ollama-src] --> typebox[typebox]
    extensions_ollama_src[extensions-ollama-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../test-support/streaming-error-response.js`
- `../web-search-contract-api.js`
- `./defaults.js`
- `./discovery-shared.js`
- `./embedding-provider.js`
- `./model-behavior.js`
- `./model-id.js`
- `./node-inference.js`
- `./ollama-json.js`
- `./provider-base-url.js`
- `./provider-models.js`
- `./sanitizers/kimi-inline-reasoning.js`
- `./sanitizers/visible-content.js`
- `./setup.js`
- `./stream.js`
- `./web-search-provider.js`
- `./wsl2-crash-loop-check.js`
- `@openclaw/normalization-core`
- `node:crypto`
- `node:fs/promises`
- `node:http`
- `openclaw/plugin-sdk/channel-actions`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/media-understanding`
- `openclaw/plugin-sdk/param-readers`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-auth-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-web-search`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/setup`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/ssrf-runtime-internal`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `openclaw/plugin-sdk/text-utility-runtime`
- `typebox`
- `vitest`
