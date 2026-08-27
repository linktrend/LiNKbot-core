# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> test_helpers[test-helpers]
    src_infra_net_proxy[src-infra-net-proxy] --> test_utils[test-utils]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> __[..]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> _[.]
    src_infra_net_proxy[src-infra-net-proxy] --> proxy[proxy]
    src_infra_net_proxy[src-infra-net-proxy] --> net_policy[net-policy]
    src_infra_net_proxy[src-infra-net-proxy] --> net_policy[net-policy]
    src_infra_net_proxy[src-infra-net-proxy] --> normalization_core[normalization-core]
    src_infra_net_proxy[src-infra-net-proxy] --> _openclaw[@openclaw]
    src_infra_net_proxy[src-infra-net-proxy] --> node_child_process[node:child_process]
    src_infra_net_proxy[src-infra-net-proxy] --> node_crypto[node:crypto]
    src_infra_net_proxy[src-infra-net-proxy] --> node_fs[node:fs]
    src_infra_net_proxy[src-infra-net-proxy] --> node_fs[node:fs]
    src_infra_net_proxy[src-infra-net-proxy] --> node_http[node:http]
    src_infra_net_proxy[src-infra-net-proxy] --> node_https[node:https]
    src_infra_net_proxy[src-infra-net-proxy] --> node_os[node:os]
    src_infra_net_proxy[src-infra-net-proxy] --> node_path[node:path]
    src_infra_net_proxy[src-infra-net-proxy] --> vitest[vitest]
    src_infra_net_proxy[src-infra-net-proxy] --> ws[ws]
```

## Internal Dependencies

Dependencies within this module:

- `undici`

## External Dependencies

Dependencies from other modules:

- `../../../logger.js`
- `../../../test-helpers/temp-dir.js`
- `../../../test-utils/node-process.js`
- `../../push-apns-http2.js`
- `../../resolve-system-bin.js`
- `../../tmp-openclaw-dir.js`
- `../proxy-env.js`
- `../runtime-fetch.js`
- `../undici-global-dispatcher.js`
- `../undici-runtime.js`
- `./active-managed-proxy-tls.js`
- `./active-proxy-state.js`
- `./managed-proxy-undici.js`
- `./proxy-lifecycle.js`
- `./proxy-tls.js`
- `./proxy-validation.js`
- `./src/infra/net/proxy/proxy-lifecycle.ts`
- `@openclaw/net-policy/ip`
- `@openclaw/net-policy/url-protocol`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/proxyline`
- `node:child_process`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:http`
- `node:https`
- `node:os`
- `node:path`
- `vitest`
- `ws`
