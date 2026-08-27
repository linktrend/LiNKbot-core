# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> _[.]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> transports[transports]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> transports[transports]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> transports[transports]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> transports[transports]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> node_child_process[node:child_process]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> node_crypto[node:crypto]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> plugin_sdk[plugin-sdk]
    extensions_teams_meetings_src[extensions-teams-meetings-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./config.js`
- `./node-invoke-policy.js`
- `./runtime-probes.js`
- `./runtime-session.js`
- `./runtime-setup.js`
- `./runtime.js`
- `./transports/chrome-audio-device.js`
- `./transports/chrome.js`
- `./transports/teams-meetings-platform-adapter.js`
- `./transports/teams-meetings-platform-constants.js`
- `node:child_process`
- `node:crypto`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/gateway-runtime`
- `openclaw/plugin-sdk/meeting-runtime`
- `openclaw/plugin-sdk/number-runtime`
- `openclaw/plugin-sdk/realtime-voice`
- `openclaw/plugin-sdk/routing`
- `openclaw/plugin-sdk/runtime-env`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `vitest`
