# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_infra_net[src-infra-net] --> src[src]
    src_infra_net[src-infra-net] --> __[..]
    src_infra_net[src-infra-net] --> test_utils[test-utils]
    src_infra_net[src-infra-net] --> test_utils[test-utils]
    src_infra_net[src-infra-net] --> utils[utils]
    src_infra_net[src-infra-net] --> utils[utils]
    src_infra_net[src-infra-net] --> __[..]
    src_infra_net[src-infra-net] --> __[..]
    src_infra_net[src-infra-net] --> __[..]
    src_infra_net[src-infra-net] --> __[..]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> proxy[proxy]
    src_infra_net[src-infra-net] --> proxy[proxy]
    src_infra_net[src-infra-net] --> proxy[proxy]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> _[.]
    src_infra_net[src-infra-net] --> net_policy[net-policy]
    src_infra_net[src-infra-net] --> _openclaw[@openclaw]
    src_infra_net[src-infra-net] --> normalization_core[normalization-core]
    src_infra_net[src-infra-net] --> normalization_core[normalization-core]
    src_infra_net[src-infra-net] --> normalization_core[normalization-core]
    src_infra_net[src-infra-net] --> _openclaw[@openclaw]
    src_infra_net[src-infra-net] --> proxyline[proxyline]
    src_infra_net[src-infra-net] --> node_dns[node:dns]
    src_infra_net[src-infra-net] --> node_dns[node:dns]
    src_infra_net[src-infra-net] --> node_events[node:events]
    src_infra_net[src-infra-net] --> node_module[node:module]
    src_infra_net[src-infra-net] --> node_net[node:net]
    src_infra_net[src-infra-net] --> node_path[node:path]
    src_infra_net[src-infra-net] --> node_url[node:url]
    src_infra_net[src-infra-net] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/net-policy/src/ip-test-fixtures.js`
- `../../logger.js`
- `../../test-utils/env.js`
- `../../test-utils/node-process.js`
- `../../utils/fetch-timeout.js`
- `../../utils/string-readers.js`
- `../abort-signal.js`
- `../errors.js`
- `../fetch-headers.js`
- `../wsl.js`
- `./configured-local-origin-bypass.js`
- `./fetch-guard.js`
- `./form-data.js`
- `./guarded-body-stream.js`
- `./hostname.js`
- `./node-proxy-agent.js`
- `./proxy-env.js`
- `./proxy/active-managed-proxy-tls.js`
- `./proxy/active-proxy-state.js`
- `./proxy/managed-proxy-undici.js`
- `./redirect-headers.js`
- `./runtime-fetch.js`
- `./ssrf.js`
- `./undici-dispatcher-options.js`
- `./undici-error-diagnostics.js`
- `./undici-family-policy.js`
- `./undici-global-dispatcher.js`
- `./undici-runtime.js`
- `@openclaw/net-policy/ip`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/proxyline`
- `@openclaw/proxyline/dispatcher-brand`
- `node:dns`
- `node:dns/promises`
- `node:events`
- `node:module`
- `node:net`
- `node:path`
- `node:url`
- `vitest`
