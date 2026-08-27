# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_discord_src_voice[extensions-discord-src-voice] --> __[..]
    extensions_discord_src_voice[extensions-discord-src-voice] --> internal[internal]
    extensions_discord_src_voice[extensions-discord-src-voice] --> __[..]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> monitor[monitor]
    extensions_discord_src_voice[extensions-discord-src-voice] --> __[..]
    extensions_discord_src_voice[extensions-discord-src-voice] --> __[..]
    extensions_discord_src_voice[extensions-discord-src-voice] --> test_support[test-support]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _[.]
    extensions_discord_src_voice[extensions-discord-src-voice] --> _openclaw[@openclaw]
    extensions_discord_src_voice[extensions-discord-src-voice] --> discord_api_types[discord-api-types]
    extensions_discord_src_voice[extensions-discord-src-voice] --> libopus_wasm[libopus-wasm]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_child_process[node:child_process]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_events[node:events]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_fs[node:fs]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_module[node:module]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_path[node:path]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_stream[node:stream]
    extensions_discord_src_voice[extensions-discord-src-voice] --> node_string_decoder[node:string_decoder]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> plugin_sdk[plugin-sdk]
    extensions_discord_src_voice[extensions-discord-src-voice] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../accounts.js`
- `../internal/discord.js`
- `../mentions.js`
- `../monitor/allow-list.js`
- `../monitor/channel-access.js`
- `../monitor/format.js`
- `../monitor/inbound-context.js`
- `../monitor/sender-identity.js`
- `../monitor/thread-channel-context.js`
- `../runtime.js`
- `../target-parsing.js`
- `../test-support/partial-channel.js`
- `./access.js`
- `./activation.js`
- `./agent-control.js`
- `./audio.js`
- `./capture-state.js`
- `./command.js`
- `./config.js`
- `./ingress.js`
- `./log-preview.js`
- `./manager.js`
- `./membership.js`
- `./owner-access.js`
- `./participant-context.js`
- `./prompt.js`
- `./realtime-transcript.js`
- `./realtime.js`
- `./receive-recovery.js`
- `./sanitize.js`
- `./sdk-runtime.js`
- `./segment.js`
- `./session.js`
- `./speaker-context.js`
- `./transcripts-source.js`
- `./tts.js`
- `@openclaw/normalization-core`
- `discord-api-types/v10`
- `libopus-wasm`
- `node:child_process`
- `node:events`
- `node:fs/promises`
- `node:module`
- `node:path`
- `node:stream`
- `node:string_decoder`
- `openclaw/plugin-sdk/agent-harness`
- `openclaw/plugin-sdk/agent-runtime`
- `openclaw/plugin-sdk/command-auth-native`
- `openclaw/plugin-sdk/expect-runtime`
- `openclaw/plugin-sdk/media-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/realtime-bootstrap-context`
- `openclaw/plugin-sdk/realtime-voice`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/runtime-group-policy`
- `openclaw/plugin-sdk/ssrf-runtime`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/system-event-runtime`
- `openclaw/plugin-sdk/temp-path`
- `openclaw/plugin-sdk/text-chunking`
- `openclaw/plugin-sdk/text-utility-runtime`
- `vitest`
