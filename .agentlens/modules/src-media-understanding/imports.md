# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_media_understanding[src-media-understanding] --> src[src]
    src_media_understanding[src-media-understanding] --> src[src]
    src_media_understanding[src-media-understanding] --> src[src]
    src_media_understanding[src-media-understanding] --> src[src]
    src_media_understanding[src-media-understanding] --> src[src]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> embedded_agent_runner[embedded-agent-runner]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> agents[agents]
    src_media_understanding[src-media-understanding] --> runtime_plan[runtime-plan]
    src_media_understanding[src-media-understanding] --> sessions[sessions]
    src_media_understanding[src-media-understanding] --> tools[tools]
    src_media_understanding[src-media-understanding] --> reply[reply]
    src_media_understanding[src-media-understanding] --> auto_reply[auto-reply]
    src_media_understanding[src-media-understanding] --> channels[channels]
    src_media_understanding[src-media-understanding] --> cli[cli]
    src_media_understanding[src-media-understanding] --> config[config]
    src_media_understanding[src-media-understanding] --> config[config]
    src_media_understanding[src-media-understanding] --> config[config]
    src_media_understanding[src-media-understanding] --> config[config]
    src_media_understanding[src-media-understanding] --> __[..]
    src_media_understanding[src-media-understanding] --> infra[infra]
    src_media_understanding[src-media-understanding] --> infra[infra]
    src_media_understanding[src-media-understanding] --> infra[infra]
    src_media_understanding[src-media-understanding] --> infra[infra]
    src_media_understanding[src-media-understanding] --> net[net]
    src_media_understanding[src-media-understanding] --> net[net]
    src_media_understanding[src-media-understanding] --> net[net]
    src_media_understanding[src-media-understanding] --> infra[infra]
    src_media_understanding[src-media-understanding] --> llm[llm]
    src_media_understanding[src-media-understanding] --> llm[llm]
    src_media_understanding[src-media-understanding] --> __[..]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> media[media]
    src_media_understanding[src-media-understanding] --> plugin_sdk[plugin-sdk]
    src_media_understanding[src-media-understanding] --> plugin_sdk[plugin-sdk]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> plugins[plugins]
    src_media_understanding[src-media-understanding] --> process[process]
    src_media_understanding[src-media-understanding] --> provider_runtime[provider-runtime]
    src_media_understanding[src-media-understanding] --> secrets[secrets]
    src_media_understanding[src-media-understanding] --> secrets[secrets]
    src_media_understanding[src-media-understanding] --> secrets[secrets]
    src_media_understanding[src-media-understanding] --> security[security]
    src_media_understanding[src-media-understanding] --> shared[shared]
    src_media_understanding[src-media-understanding] --> shared[shared]
    src_media_understanding[src-media-understanding] --> test_helpers[test-helpers]
    src_media_understanding[src-media-understanding] --> test_utils[test-utils]
    src_media_understanding[src-media-understanding] --> test_utils[test-utils]
    src_media_understanding[src-media-understanding] --> test_utils[test-utils]
    src_media_understanding[src-media-understanding] --> utils[utils]
    src_media_understanding[src-media-understanding] --> utils[utils]
    src_media_understanding[src-media-understanding] --> __[..]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> _[.]
    src_media_understanding[src-media-understanding] --> media_core[media-core]
    src_media_understanding[src-media-understanding] --> media_core[media-core]
    src_media_understanding[src-media-understanding] --> model_catalog_core[model-catalog-core]
    src_media_understanding[src-media-understanding] --> net_policy[net-policy]
    src_media_understanding[src-media-understanding] --> _openclaw[@openclaw]
    src_media_understanding[src-media-understanding] --> normalization_core[normalization-core]
    src_media_understanding[src-media-understanding] --> normalization_core[normalization-core]
    src_media_understanding[src-media-understanding] --> normalization_core[normalization-core]
    src_media_understanding[src-media-understanding] --> normalization_core[normalization-core]
    src_media_understanding[src-media-understanding] --> normalization_core[normalization-core]
    src_media_understanding[src-media-understanding] --> jszip[jszip]
    src_media_understanding[src-media-understanding] --> node_crypto[node:crypto]
    src_media_understanding[src-media-understanding] --> node_fs[node:fs]
    src_media_understanding[src-media-understanding] --> node_fs[node:fs]
    src_media_understanding[src-media-understanding] --> node_os[node:os]
    src_media_understanding[src-media-understanding] --> node_path[node:path]
    src_media_understanding[src-media-understanding] --> node_url[node:url]
    src_media_understanding[src-media-understanding] --> p_map[p-map]
    src_media_understanding[src-media-understanding] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../packages/media-understanding-common/src/errors.js`
- `../../packages/media-understanding-common/src/format.js`
- `../../packages/media-understanding-common/src/output-extract.js`
- `../../packages/media-understanding-common/src/provider-supports.js`
- `../../packages/media-understanding-common/src/video.js`
- `../agents/agent-scope.js`
- `../agents/api-key-rotation.js`
- `../agents/embedded-agent-runner/model.js`
- `../agents/minimax-vlm.js`
- `../agents/model-auth-markers.js`
- `../agents/model-auth.js`
- `../agents/model-selection.js`
- `../agents/prepared-model-runtime.js`
- `../agents/provider-attribution.js`
- `../agents/provider-http-errors.js`
- `../agents/provider-model-route-auth.js`
- `../agents/provider-request-config.js`
- `../agents/provider-secret-egress.js`
- `../agents/provider-stream.js`
- `../agents/runtime-plan/credential-scoped-model.js`
- `../agents/sessions/model-registry-runtime.js`
- `../agents/tools/image-tool.helpers.js`
- `../auto-reply/reply/inbound-context.js`
- `../auto-reply/templating.js`
- `../channels/chat-type.js`
- `../cli/command-format.js`
- `../config/model-input.js`
- `../config/paths.js`
- `../config/runtime-snapshot.js`
- `../config/types.secrets.js`
- `../globals.js`
- `../infra/abort-signal.js`
- `../infra/errors.js`
- `../infra/fs-safe.js`
- `../infra/local-file-access.js`
- `../infra/net/fetch-guard.js`
- `../infra/net/proxy-env.js`
- `../infra/net/proxy-fetch.js`
- `../infra/tmp-openclaw-dir.js`
- `../llm/model-runtime-binding.js`
- `../llm/stream.js`
- `../logger.js`
- `../media/channel-inbound-roots.js`
- `../media/fetch.js`
- `../media/file-context.js`
- `../media/input-files.js`
- `../media/local-roots.js`
- `../media/media-reference.js`
- `../media/media-services.js`
- `../media/store.js`
- `../plugin-sdk/provider-auth.js`
- `../plugin-sdk/temp-path.js`
- `../plugins/bundled-compat.js`
- `../plugins/capability-provider-runtime.js`
- `../plugins/loader.js`
- `../plugins/manifest-contract-eligibility.js`
- `../plugins/manifest-registry.js`
- `../plugins/official-external-plugin-catalog.js`
- `../plugins/official-external-plugin-repair-hints.js`
- `../plugins/provider-runtime.runtime.js`
- `../plugins/registry.js`
- `../plugins/runtime.js`
- `../process/exec.js`
- `../provider-runtime/operation-retry.js`
- `../secrets/runtime-degraded-state.js`
- `../secrets/runtime-media-secret-owner.js`
- `../secrets/sentinel.js`
- `../security/external-content.js`
- `../shared/lazy-promise.js`
- `../shared/lazy-runtime.js`
- `../test-helpers/temp-dir.js`
- `../test-utils/env.js`
- `../test-utils/fetch-mock.js`
- `../test-utils/vitest-spies.js`
- `../utils/fetch-timeout.js`
- `../utils/message-channel.js`
- `../version.js`
- `./apply-capability.js`
- `./attachments.js`
- `./attachments.normalize.js`
- `./audio-preflight.js`
- `./audio-transcription-runner.js`
- `./audio.test-helpers.js`
- `./config-provider-models.js`
- `./defaults.constants.js`
- `./defaults.js`
- `./echo-transcript.js`
- `./entry-capabilities.js`
- `./file-extraction-limits.js`
- `./fs.js`
- `./image-input-normalize.js`
- `./image-model-runtime.js`
- `./image-runtime.js`
- `./local-audio.js`
- `./manifest-metadata.js`
- `./openai-audio-api.js`
- `./openai-compatible-audio.js`
- `./provider-capability-registry.js`
- `./provider-id.js`
- `./provider-registry.js`
- `./resolve.js`
- `./runner.attachments.js`
- `./runner.entries.js`
- `./runner.js`
- `./runner.test-support.js`
- `./runner.test-utils.js`
- `./runtime.js`
- `./scope.js`
- `./shared.js`
- `@openclaw/media-core/inbound-path-policy`
- `@openclaw/media-core/mime`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `jszip`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `p-map`
- `vitest`
