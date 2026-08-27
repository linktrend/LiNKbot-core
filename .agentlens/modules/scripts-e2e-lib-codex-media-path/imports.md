# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> protocol[protocol]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> helpers[helpers]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> lib[lib]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> __[..]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> __[..]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> __[..]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> _[.]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> _[.]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> node_crypto[node:crypto]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> node_fs[node:fs]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> node_path[node:path]
    scripts_e2e_lib_codex_media_path[scripts-e2e-lib-codex-media-path] --> node_timers[node:timers]
```

## External Dependencies

Dependencies from other modules:

- `../../../../dist/gateway/protocol/index.js`
- `../../../../test/helpers/live-image-probe.ts`
- `../../../lib/gateway-ws-client.ts`
- `../codex-app-server-fixture.mjs`
- `../gateway-frame-payload.mjs`
- `../incremental-line-reader.mjs`
- `./jsonl-request-tail.mjs`
- `./limits.mjs`
- `node:crypto`
- `node:fs`
- `node:path`
- `node:timers/promises`
