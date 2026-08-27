# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> _[.]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> _[.]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> _[.]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> _[.]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> _anthropic_ai[@anthropic-ai]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> plugin_sdk[plugin-sdk]
    extensions_amazon_bedrock_mantle[extensions-amazon-bedrock-mantle] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./discovery.js`
- `./index.js`
- `./mantle-anthropic.runtime.js`
- `./register.sync.runtime.js`
- `@anthropic-ai/sdk`
- `openclaw/plugin-sdk/core`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-transport-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
