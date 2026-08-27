# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_ai_src_providers[packages-ai-src-providers] --> __[..]
    packages_ai_src_providers[packages-ai-src-providers] --> __[..]
    packages_ai_src_providers[packages-ai-src-providers] --> internal[internal]
    packages_ai_src_providers[packages-ai-src-providers] --> internal[internal]
    packages_ai_src_providers[packages-ai-src-providers] --> __[..]
    packages_ai_src_providers[packages-ai-src-providers] --> __[..]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> oauth[oauth]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> utils[utils]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _[.]
    packages_ai_src_providers[packages-ai-src-providers] --> _anthropic_ai[@anthropic-ai]
    packages_ai_src_providers[packages-ai-src-providers] --> core[core]
    packages_ai_src_providers[packages-ai-src-providers] --> _google[@google]
    packages_ai_src_providers[packages-ai-src-providers] --> _mistralai[@mistralai]
    packages_ai_src_providers[packages-ai-src-providers] --> models[models]
    packages_ai_src_providers[packages-ai-src-providers] --> _openclaw[@openclaw]
    packages_ai_src_providers[packages-ai-src-providers] --> _openclaw[@openclaw]
    packages_ai_src_providers[packages-ai-src-providers] --> normalization_core[normalization-core]
    packages_ai_src_providers[packages-ai-src-providers] --> normalization_core[normalization-core]
    packages_ai_src_providers[packages-ai-src-providers] --> normalization_core[normalization-core]
    packages_ai_src_providers[packages-ai-src-providers] --> normalization_core[normalization-core]
    packages_ai_src_providers[packages-ai-src-providers] --> normalization_core[normalization-core]
    packages_ai_src_providers[packages-ai-src-providers] --> node_crypto[node:crypto]
    packages_ai_src_providers[packages-ai-src-providers] --> node_http[node:http]
    packages_ai_src_providers[packages-ai-src-providers] --> node_os[node:os]
    packages_ai_src_providers[packages-ai-src-providers] --> node_util[node:util]
    packages_ai_src_providers[packages-ai-src-providers] --> node_zlib[node:zlib]
    packages_ai_src_providers[packages-ai-src-providers] --> typebox[typebox]
    packages_ai_src_providers[packages-ai-src-providers] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `openai`

## External Dependencies

Dependencies from other modules:

- `../env-api-keys.js`
- `../host.js`
- `../internal/retry-after.js`
- `../internal/retry-sleep.js`
- `../model-utils.js`
- `../session-resources.js`
- `../utils/deferred-event-buffer.js`
- `../utils/diagnostics.js`
- `../utils/event-stream.js`
- `../utils/hash.js`
- `../utils/headers.js`
- `../utils/json-parse.js`
- `../utils/llm-request-activity.js`
- `../utils/oauth/openai-chatgpt-jwt.js`
- `../utils/overflow.js`
- `../utils/provider-error.js`
- `../utils/reasoning-tag-text-partitioner.js`
- `../utils/sanitize-unicode.js`
- `../utils/stream-first-event-timeout.js`
- `../utils/streaming-byte-guard.js`
- `../utils/system-prompt-cache-boundary.js`
- `./agent-tools-parameter-schema.js`
- `./anthropic-auth-headers.js`
- `./anthropic-model-contract.js`
- `./anthropic-refusal.js`
- `./anthropic-server-fallback.js`
- `./anthropic-thinking-replay.js`
- `./anthropic-tool-projection.js`
- `./anthropic-usage.js`
- `./anthropic.js`
- `./azure-deployment-map.js`
- `./azure-openai-responses-client-compat.js`
- `./azure-openai-responses.js`
- `./cache-retention.js`
- `./clean-for-gemini.js`
- `./cloudflare.js`
- `./github-copilot-headers.js`
- `./google-shared.js`
- `./google-shared.test-helpers.js`
- `./google-vertex.js`
- `./google.js`
- `./mistral.js`
- `./openai-chatgpt-responses.js`
- `./openai-completions.js`
- `./openai-prompt-cache.js`
- `./openai-reasoning-effort.js`
- `./openai-responses-shared.js`
- `./openai-responses-stream-compat.js`
- `./openai-responses-terminal-usage.js`
- `./openai-responses-tool-call-tracker.js`
- `./openai-responses-tools.js`
- `./openai-responses.js`
- `./openai-stop-reason.js`
- `./openai-tool-projection.js`
- `./openai-tool-schema-compat.js`
- `./openai-tool-schema.js`
- `./schema-keyword-strip.js`
- `./simple-options.js`
- `./tool-result-text.js`
- `./tool-schema-json-projection.js`
- `./transform-messages.js`
- `@anthropic-ai/sdk`
- `@anthropic-ai/sdk/core/streaming.js`
- `@google/genai`
- `@mistralai/mistralai`
- `@mistralai/mistralai/models/components`
- `@openclaw/llm-core`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `node:crypto`
- `node:http`
- `node:os`
- `node:util`
- `node:zlib`
- `typebox`
- `vitest`
