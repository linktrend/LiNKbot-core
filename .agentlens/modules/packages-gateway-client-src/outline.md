# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## packages/gateway-client/src/client.ts (1203 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | DeviceIdentity | pub |
| 61 | type | DeviceAuthTokenRecord | pub |
| 68 | type | GatewayClientHostDeps | pub |
| 116 | fn | resolveHostDeps | (private) |
| 139 | fn | isPrivateOrLoopbackIpAddress | (private) |
| 145 | fn | isLoopbackHost | (private) |
| 156 | fn | isPrivateOrLoopbackHost | (private) |
| 171 | fn | isTrustedPlaintextWebSocketHost | (private) |
| 181 | fn | isSecureWebSocketUrl | (private) |
| 210 | type | GatewayClientRequestOptions | pub |
| 212 | type | AssembledConnect | (private) |
| 221 | type | FingerprintCheckingClientOptions | (private) |
| 228 | type | GatewayReconnectPausedInfo | pub |
| 234 | type | GatewayClientCloseInfo | pub |
| 241 | class | GatewayClientRequestError | pub |
| 251 | class | GatewayClientTransientPreHelloCloseError | (private) |
| 258 | class | GatewayClientTransportPolicyError | (private) |
| 262 | type | GatewayConnectAssemblyError | (private) |
| 266 | fn | markGatewayConnectAssemblyError | (private) |
| 274 | fn | isGatewayConnectAssemblyError | pub |
| 281 | type | GatewayClientOptions | pub |
| 326 | type | GatewayClientConnectionMetadata | pub |
| 333 | fn | isGatewayClientStoppedError | (private) |
| 338 | fn | formatGatewayClientErrorForLog | (private) |
| 352 | type | PendingStop | (private) |
| 359 | class | GatewayClient | pub |
| 681 | fn | resolve | (private) |
| 1155 | fn | socket | (private) |
| 1198 | fn | createGatewayRequestAbortError | (private) |

## packages/gateway-client/src/client.watchdog.test.ts (675 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | getFreePort | (private) |
| 21 | fn | createOpenGatewayClient | (private) |
| 33 | fn | getPendingCount | (private) |
| 43 | type | ProtocolHarness | (private) |
| 52 | fn | protocolHarness | (private) |
| 56 | fn | installSyntheticSocket | (private) |
| 75 | fn | trackSettlement | (private) |
| 88 | fn | createWatchedGatewayClient | (private) |
| 109 | fn | handleGatewayMessage | (private) |
| 117 | fn | stopSyntheticClient | (private) |
| 644 | fn | finish | (private) |

## packages/gateway-client/src/protocol-client.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | GatewayProtocolSocket | pub |
| 13 | type | GatewayProtocolSocketHandlers | pub |
| 19 | type | GatewayProtocolRequestOptions | pub |
| 31 | type | GatewayProtocolCloseContext | pub |
| 40 | type | GatewayProtocolConnectDecision | (private) |
| 47 | type | GatewayProtocolCloseDecision | (private) |
| 71 | type | GatewayProtocolRequestTiming | pub |
| 122 | class | GatewayProtocolRequestError | pub |
| 140 | type | ConnectTimingState | (private) |
| 147 | type | CloseSnapshot | (private) |
| 148 | type | PendingRequest | (private) |
| 164 | class | GatewayProtocolClient | pub |
| 257 | fn | onAbort | (private) |
| 268 | fn | cleanup | (private) |
