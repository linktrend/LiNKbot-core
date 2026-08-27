# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/infra/net/proxy/external-proxy.e2e.test.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | DiscordTlsFixture | (private) |
| 26 | fn | createDiscordTlsFixture | (private) |
| 104 | fn | withDiscordTlsFixture | (private) |
| 118 | fn | listenOnLoopback | (private) |
| 133 | fn | closeServer | (private) |
| 152 | type | ConnectTargetOverride | (private) |
| 157 | fn | createTunnelProxy | (private) |
| 246 | fn | runNodeModule | (private) |
| 375 | fn | nodeHttpGet | (private) |
| 394 | fn | expectFailure | (private) |
| 403 | fn | nodeHttpsProbe | (private) |
| 416 | fn | websocketProbe | (private) |
| 427 | fn | gatewayLoopbackBypassProbe | (private) |
| 431 | fn | cleanup | (private) |
| 529 | fn | nodeHttpsGet | (private) |

## src/infra/net/proxy/proxy-lifecycle.test.ts (795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | startProxy | (private) |
| 75 | fn | expectProxyHandle | (private) |
| 83 | fn | expectBypassUnregister | (private) |
| 143 | fn | writeTempCa | (private) |

## src/infra/net/proxy/proxy-validation.test.ts (690 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | writeTempCa | (private) |
| 102 | fn | onUnhandledRejection | (private) |

## src/infra/net/proxy/proxy-validation.ts (616 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ProxyValidationConfigSource | (private) |
| 27 | type | ProxyValidationResolvedConfig | (private) |
| 36 | type | ProxyValidationCheckKind | (private) |
| 39 | type | ProxyValidationCheck | (private) |
| 48 | type | ProxyValidationResult | pub |
| 55 | type | ProxyValidationFetchCheckParams | (private) |
| 63 | type | ProxyValidationFetchCheckResult | (private) |
| 70 | type | ProxyValidationFetchCheck | (private) |
| 75 | type | ProxyValidationApnsCheckParams | (private) |
| 82 | type | ProxyValidationApnsCheckResult | (private) |
| 91 | type | ProxyValidationApnsCheck | (private) |
| 96 | type | ResolveProxyValidationConfigOptions | (private) |
| 104 | type | RunProxyValidationOptions | (private) |
| 114 | fn | normalizeProxyUrl | (private) |
| 119 | fn | validateProxyUrl | (private) |
| 129 | fn | validateProxyEnabled | (private) |
| 139 | fn | validateResolvedProxy | (private) |
| 148 | fn | resolveProxyValidationConfig | (private) |
| 215 | fn | defaultProxyValidationFetchCheck | (private) |
| 244 | fn | defaultProxyValidationApnsCheck | (private) |
| 263 | fn | parseApnsErrorReason | (private) |
| 276 | fn | hasApnsReachabilityProof | (private) |
| 285 | fn | normalizeTimeoutMs | (private) |
| 292 | type | ProxyValidationDeniedTarget | (private) |
| 298 | type | DeniedCanary | (private) |
| 303 | fn | closeServer | (private) |
| 315 | fn | createLoopbackDeniedCanary | (private) |
| 351 | fn | resolveDeniedTargets | (private) |
| 371 | fn | runAllowedCheck | (private) |
| 414 | fn | runDeniedCheck | (private) |
| 488 | fn | runApnsReachabilityCheck | (private) |
| 529 | fn | runProxyValidation | pub |
