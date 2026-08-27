# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_llm_utils_oauth[src-llm-utils-oauth] --> agents[agents]
    src_llm_utils_oauth[src-llm-utils-oauth] --> infra[infra]
    src_llm_utils_oauth[src-llm-utils-oauth] --> infra[infra]
    src_llm_utils_oauth[src-llm-utils-oauth] --> infra[infra]
    src_llm_utils_oauth[src-llm-utils-oauth] --> plugin_sdk[plugin-sdk]
    src_llm_utils_oauth[src-llm-utils-oauth] --> plugin_sdk[plugin-sdk]
    src_llm_utils_oauth[src-llm-utils-oauth] --> plugin_sdk[plugin-sdk]
    src_llm_utils_oauth[src-llm-utils-oauth] --> plugin_sdk[plugin-sdk]
    src_llm_utils_oauth[src-llm-utils-oauth] --> _[.]
    src_llm_utils_oauth[src-llm-utils-oauth] --> _[.]
    src_llm_utils_oauth[src-llm-utils-oauth] --> _[.]
    src_llm_utils_oauth[src-llm-utils-oauth] --> _[.]
    src_llm_utils_oauth[src-llm-utils-oauth] --> normalization_core[normalization-core]
    src_llm_utils_oauth[src-llm-utils-oauth] --> node_events[node:events]
    src_llm_utils_oauth[src-llm-utils-oauth] --> node_http[node:http]
    src_llm_utils_oauth[src-llm-utils-oauth] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../agents/provider-http-errors.js`
- `../../../infra/errors.js`
- `../../../infra/http-body.js`
- `../../../infra/parse-finite-number.js`
- `../../../plugin-sdk/facade-runtime.js`
- `../../../plugin-sdk/github-copilot-domain.js`
- `../../../plugin-sdk/github-copilot-token-endpoint.js`
- `../../../plugin-sdk/provider-oauth-runtime.js`
- `./abort.js`
- `./anthropic.js`
- `./github-copilot.js`
- `./openai-chatgpt.js`
- `@openclaw/normalization-core/number-coercion`
- `node:events`
- `node:http`
- `vitest`
