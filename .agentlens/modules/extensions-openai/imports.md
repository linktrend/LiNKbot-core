# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_openai[extensions-openai] --> test_support[test-support]
    extensions_openai[extensions-openai] --> test_support[test-support]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> test_support[test-support]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _[.]
    extensions_openai[extensions-openai] --> _openclaw[@openclaw]
    extensions_openai[extensions-openai] --> node_child_process[node:child_process]
    extensions_openai[extensions-openai] --> node_crypto[node:crypto]
    extensions_openai[extensions-openai] --> node_fs[node:fs]
    extensions_openai[extensions-openai] --> node_fs[node:fs]
    extensions_openai[extensions-openai] --> node_http[node:http]
    extensions_openai[extensions-openai] --> node_os[node:os]
    extensions_openai[extensions-openai] --> node_path[node:path]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> plugin_sdk[plugin-sdk]
    extensions_openai[extensions-openai] --> vitest[vitest]
    extensions_openai[extensions-openai] --> ws[ws]
```

## Internal Dependencies

Dependencies within this module:

- `openai`

## External Dependencies

Dependencies from other modules:

- `../test-support/debug-proxy-env-test-helpers.js`
- `../test-support/streaming-error-response.js`
- `./api.js`
- `./auth-choice-copy.js`
- `./base-url.js`
- `./default-models.js`
- `./embedding-batch.js`
- `./embedding-provider.js`
- `./image-generation-provider.js`
- `./index.js`
- `./media-understanding-provider.js`
- `./memory-embedding-adapter.js`
- `./model-route-contract.js`
- `./native-web-search.js`
- `./openai-chatgpt-auth-identity.js`
- `./openai-chatgpt-device-code.js`
- `./openai-chatgpt-oauth-abort.runtime.js`
- `./openai-chatgpt-oauth-authorization.runtime.js`
- `./openai-chatgpt-oauth-flow.runtime.js`
- `./openai-chatgpt-oauth-page.runtime.js`
- `./openai-chatgpt-oauth-preflight.runtime.js`
- `./openai-chatgpt-oauth-token.runtime.js`
- `./openai-chatgpt-oauth.runtime.js`
- `./openai-chatgpt-pkce.runtime.js`
- `./openai-chatgpt-provider-runtime.factory.js`
- `./openai-chatgpt-provider.js`
- `./openai-chatgpt-shared.js`
- `./openai-provider.js`
- `./openclaw.plugin.json`
- `./prompt-overlay.js`
- `./provider-policy-api.js`
- `./realtime-provider-shared.js`
- `./realtime-quicksilver.js`
- `./realtime-transcription-provider.js`
- `./realtime-voice-provider.js`
- `./replay-policy.js`
- `./setup-api.js`
- `./shared.js`
- `./speech-provider.js`
- `./test-support/provider-catalog.contract-test-support.js`
- `./thinking-policy.js`
- `./transport-policy.js`
- `./tts.js`
- `./usage.js`
- `./video-generation-provider.js`
- `@openclaw/normalization-core`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:os`
- `node:path`
- `openclaw/plugin-sdk/agent-sessions`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/fetch-runtime`
- `openclaw/plugin-sdk/image-generation`
- `openclaw/plugin-sdk/lazy-runtime`
- `openclaw/plugin-sdk/llm`
- `openclaw/plugin-sdk/logging-core`
- `openclaw/plugin-sdk/media-generation-runtime`
- `openclaw/plugin-sdk/media-mime`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/media-understanding`
- `openclaw/plugin-sdk/memory-core-host-engine-embeddings`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/plugin-config-runtime`
- `openclaw/plugin-sdk/plugin-entry`
- `openclaw/plugin-sdk/plugin-test-api`
- `openclaw/plugin-sdk/plugin-test-runtime`
- `openclaw/plugin-sdk/provider-auth`
- `openclaw/plugin-sdk/provider-auth-api-key`
- `openclaw/plugin-sdk/provider-auth-runtime`
- `openclaw/plugin-sdk/provider-catalog-live-runtime`
- `openclaw/plugin-sdk/provider-catalog-shared`
- `openclaw/plugin-sdk/provider-http`
- `openclaw/plugin-sdk/provider-http-test-mocks`
- `openclaw/plugin-sdk/provider-model-shared`
- `openclaw/plugin-sdk/provider-oauth-runtime`
- `openclaw/plugin-sdk/provider-onboard`
- `openclaw/plugin-sdk/provider-stream-family`
- `openclaw/plugin-sdk/provider-stream-shared`
- `openclaw/plugin-sdk/provider-test-contracts`
- `openclaw/plugin-sdk/provider-tools`
- `openclaw/plugin-sdk/provider-usage`
- `openclaw/plugin-sdk/proxy-capture`
- `openclaw/plugin-sdk/realtime-transcription`
- `openclaw/plugin-sdk/realtime-voice`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/runtime-config-snapshot`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/secret-input`
- `openclaw/plugin-sdk/setup-tools`
- `openclaw/plugin-sdk/speech-core`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/test-live`
- `openclaw/plugin-sdk/test-media-understanding`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
- `ws`
