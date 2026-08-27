# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_routing[src-routing] --> agents[agents]
    src_routing[src-routing] --> channels[channels]
    src_routing[src-routing] --> channels[channels]
    src_routing[src-routing] --> config[config]
    src_routing[src-routing] --> gateway[gateway]
    src_routing[src-routing] --> __[..]
    src_routing[src-routing] --> infra[infra]
    src_routing[src-routing] --> __[..]
    src_routing[src-routing] --> sessions[sessions]
    src_routing[src-routing] --> sessions[sessions]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _[.]
    src_routing[src-routing] --> _openclaw[@openclaw]
    src_routing[src-routing] --> normalization_core[normalization-core]
    src_routing[src-routing] --> normalization_core[normalization-core]
    src_routing[src-routing] --> normalization_core[normalization-core]
    src_routing[src-routing] --> node_crypto[node:crypto]
    src_routing[src-routing] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../agents/agent-scope.js`
- `../channels/chat-type.js`
- `../channels/ids.js`
- `../config/bindings.js`
- `../gateway/session-store-key.js`
- `../globals.js`
- `../infra/prototype-keys.js`
- `../logger.js`
- `../sessions/session-chat-type-shared.js`
- `../sessions/session-key-utils.js`
- `./account-id.js`
- `./account-lookup.js`
- `./binding-scope.js`
- `./bindings.js`
- `./bound-account-read.js`
- `./channel-route-targets.js`
- `./peer-kind-match.js`
- `./resolve-route.js`
- `./session-key.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/agent-id`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `node:crypto`
- `vitest`
