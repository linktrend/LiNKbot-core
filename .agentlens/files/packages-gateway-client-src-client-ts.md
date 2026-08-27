# packages/gateway-client/src/client.ts

[← Back to Module](../modules/packages-gateway-client-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1203
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | DeviceIdentity | pub | - |
| 61 | type | DeviceAuthTokenRecord | pub | - |
| 68 | type | GatewayClientHostDeps | pub | - |
| 116 | fn | resolveHostDeps | (private) | `function resolveHostDeps(overrides?: GatewayCli...` |
| 139 | fn | isPrivateOrLoopbackIpAddress | (private) | `function isPrivateOrLoopbackIpAddress(address: ...` |
| 145 | fn | isLoopbackHost | (private) | `function isLoopbackHost(host: string): boolean {` |
| 156 | fn | isPrivateOrLoopbackHost | (private) | `function isPrivateOrLoopbackHost(host: string):...` |
| 171 | fn | isTrustedPlaintextWebSocketHost | (private) | `function isTrustedPlaintextWebSocketHost(hostna...` |
| 181 | fn | isSecureWebSocketUrl | (private) | `function isSecureWebSocketUrl(rawUrl: string, o...` |
| 210 | type | GatewayClientRequestOptions | pub | - |
| 212 | type | AssembledConnect | (private) | - |
| 221 | type | FingerprintCheckingClientOptions | (private) | - |
| 228 | type | GatewayReconnectPausedInfo | pub | - |
| 234 | type | GatewayClientCloseInfo | pub | - |
| 241 | class | GatewayClientRequestError | pub | - |
| 251 | class | GatewayClientTransientPreHelloCloseError | (private) | - |
| 258 | class | GatewayClientTransportPolicyError | (private) | - |
| 262 | type | GatewayConnectAssemblyError | (private) | - |
| 266 | fn | markGatewayConnectAssemblyError | (private) | `function markGatewayConnectAssemblyError(error:...` |
| 274 | fn | isGatewayConnectAssemblyError | pub | `export function isGatewayConnectAssemblyError(v...` |
| 281 | type | GatewayClientOptions | pub | - |
| 326 | type | GatewayClientConnectionMetadata | pub | - |
| 333 | fn | isGatewayClientStoppedError | (private) | `function isGatewayClientStoppedError(err: unkno...` |
| 338 | fn | formatGatewayClientErrorForLog | (private) | `function formatGatewayClientErrorForLog(err: un...` |
| 352 | type | PendingStop | (private) | - |
| 359 | class | GatewayClient | pub | - |
| 681 | fn | resolve | (private) | `let resolve = () => {};` |
| 1155 | fn | socket | (private) | `const socket = (` |
| 1198 | fn | createGatewayRequestAbortError | (private) | `function createGatewayRequestAbortError(method:...` |

## Public API

### `isGatewayConnectAssemblyError`

```
export function isGatewayConnectAssemblyError(value: unknown): value is Error {
```

**Line:** 274 | **Kind:** fn
