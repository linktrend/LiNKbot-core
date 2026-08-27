# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_media[src-media] --> src[src]
    src_media[src-media] --> helpers[helpers]
    src_media[src-media] --> helpers[helpers]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> agents[agents]
    src_media[src-media] --> canvas[canvas]
    src_media[src-media] --> config[config]
    src_media[src-media] --> __[..]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> net[net]
    src_media[src-media] --> net[net]
    src_media[src-media] --> net[net]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> infra[infra]
    src_media[src-media] --> __[..]
    src_media[src-media] --> logging[logging]
    src_media[src-media] --> plugins[plugins]
    src_media[src-media] --> plugins[plugins]
    src_media[src-media] --> plugins[plugins]
    src_media[src-media] --> plugins[plugins]
    src_media[src-media] --> plugins[plugins]
    src_media[src-media] --> process[process]
    src_media[src-media] --> shared[shared]
    src_media[src-media] --> shared[shared]
    src_media[src-media] --> shared[shared]
    src_media[src-media] --> test_utils[test-utils]
    src_media[src-media] --> test_utils[test-utils]
    src_media[src-media] --> test_utils[test-utils]
    src_media[src-media] --> __[..]
    src_media[src-media] --> utils[utils]
    src_media[src-media] --> utils[utils]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> _[.]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> media_core[media-core]
    src_media[src-media] --> net_policy[net-policy]
    src_media[src-media] --> net_policy[net-policy]
    src_media[src-media] --> _openclaw[@openclaw]
    src_media[src-media] --> normalization_core[normalization-core]
    src_media[src-media] --> normalization_core[normalization-core]
    src_media[src-media] --> normalization_core[normalization-core]
    src_media[src-media] --> _silvia_odwyer[@silvia-odwyer]
    src_media[src-media] --> jszip[jszip]
    src_media[src-media] --> node_crypto[node:crypto]
    src_media[src-media] --> node_events[node:events]
    src_media[src-media] --> node_fs[node:fs]
    src_media[src-media] --> node_fs[node:fs]
    src_media[src-media] --> node_http[node:http]
    src_media[src-media] --> node_https[node:https]
    src_media[src-media] --> node_os[node:os]
    src_media[src-media] --> node_path[node:path]
    src_media[src-media] --> node_stream[node:stream]
    src_media[src-media] --> node_stream[node:stream]
    src_media[src-media] --> node_url[node:url]
    src_media[src-media] --> node_zlib[node:zlib]
    src_media[src-media] --> plugin_sdk[plugin-sdk]
    src_media[src-media] --> qrcode[qrcode]
    src_media[src-media] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `rastermill`

## External Dependencies

Dependencies from other modules:

- `../../packages/markdown-core/src/fences.js`
- `../../test/helpers/image-fixtures.js`
- `../../test/helpers/paths.js`
- `../agents/agent-scope.js`
- `../agents/agent-tools.policy.js`
- `../agents/path-policy.js`
- `../agents/tool-fs-policy.js`
- `../agents/tool-policy-match.js`
- `../agents/workspace-dir.js`
- `../canvas/documents.js`
- `../config/paths.js`
- `../globals.js`
- `../infra/abort-signal.js`
- `../infra/errors.js`
- `../infra/file-store.js`
- `../infra/fs-safe-advanced.js`
- `../infra/fs-safe-defaults.js`
- `../infra/fs-safe.js`
- `../infra/http-body.js`
- `../infra/local-file-access.js`
- `../infra/net/fetch-guard.js`
- `../infra/net/redirect-headers.js`
- `../infra/net/ssrf.js`
- `../infra/path-guards.js`
- `../infra/private-temp-workspace.js`
- `../infra/resolve-system-bin.js`
- `../infra/retry.js`
- `../infra/sibling-temp-file.js`
- `../infra/tmp-openclaw-dir.js`
- `../infra/unhandled-rejections.js`
- `../logger.js`
- `../logging/redact.js`
- `../plugins/document-extractors.runtime.js`
- `../plugins/plugin-cache-primitives.js`
- `../plugins/public-surface-loader.js`
- `../plugins/registry-empty.js`
- `../plugins/runtime.js`
- `../process/exec.js`
- `../shared/lazy-promise.js`
- `../shared/lazy-runtime.js`
- `../shared/number-coercion.js`
- `../test-utils/env.js`
- `../test-utils/openclaw-test-state.js`
- `../test-utils/temp-home.js`
- `../utils.js`
- `../utils/directive-tags.js`
- `../utils/fetch-timeout.js`
- `./audio-tags.js`
- `./audio-transcode.js`
- `./audio.js`
- `./channel-inbound-roots.js`
- `./document-extractors.runtime.js`
- `./fetch.js`
- `./ffmpeg-exec.js`
- `./ffmpeg-limits.js`
- `./file-context.js`
- `./image-ops.js`
- `./load-options.js`
- `./local-media-access.js`
- `./local-media-path.js`
- `./local-roots.js`
- `./media-reference-comparison.js`
- `./media-reference.js`
- `./media-services.js`
- `./parse.js`
- `./pdf-extract.js`
- `./png-encode.js`
- `./qr-image.ts`
- `./qr-runtime.ts`
- `./qr-terminal.ts`
- `./read-capability.js`
- `./sniff-mime-from-base64.js`
- `./store.download.js`
- `./store.js`
- `./store.runtime.js`
- `./store.shared.js`
- `./store.test-support.js`
- `./video-dimensions.js`
- `./web-media.js`
- `@openclaw/media-core/base64`
- `@openclaw/media-core/constants`
- `@openclaw/media-core/content-length`
- `@openclaw/media-core/file-name`
- `@openclaw/media-core/inbound-path-policy`
- `@openclaw/media-core/media-source-url`
- `@openclaw/media-core/mime`
- `@openclaw/net-policy/ip`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `@silvia-odwyer/photon-node`
- `jszip`
- `node:crypto`
- `node:events`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:os`
- `node:path`
- `node:stream`
- `node:stream/promises`
- `node:url`
- `node:zlib`
- `openclaw/plugin-sdk/test-fixtures`
- `qrcode`
- `vitest`
