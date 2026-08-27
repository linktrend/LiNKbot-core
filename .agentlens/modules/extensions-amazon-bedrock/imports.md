# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _[.]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _aws_sdk[@aws-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _aws_sdk[@aws-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _openclaw[@openclaw]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> _smithy[@smithy]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> node_events[node:events]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> node_fs[node:fs]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> node_http[node:http]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> node_path[node:path]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock[extensions-amazon-bedrock] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api.js`
- `./aws-credential-refresh.js`
- `./bedrock-options.js`
- `./config-api.js`
- `./config-compat.js`
- `./control-plane.js`
- `./discovery-shared.js`
- `./discovery.js`
- `./embedding-provider.js`
- `./index.js`
- `./memory-embedding-adapter.js`
- `./provider-policy-api.js`
- `./register.sync.runtime.js`
- `./stream.runtime.js`
- `./test-support.js`
- `./thinking-policy.js`
- `@aws-sdk/client-bedrock`
- `@aws-sdk/client-bedrock-runtime`
- `@openclaw/normalization-core`
- `@smithy/node-http-handler`
- `node:events`
- `node:fs`
- `node:http`
- `node:path`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/extension-shared`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/memory-core-host-engine-embeddings`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth-runtime`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-transport-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-env`
- `vitest`
