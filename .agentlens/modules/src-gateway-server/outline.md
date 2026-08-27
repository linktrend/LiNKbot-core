# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/gateway/server/hooks.agent-trust.test.ts (575 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | waitForFast | (private) |
| 61 | fn | buildMinimalParams | (private) |
| 77 | fn | buildAgentPayload | (private) |
| 97 | fn | dispatchAgentHook | (private) |
| 101 | fn | resolveDispatchAgentHook | (private) |
| 108 | fn | createDeferred | (private) |
| 116 | type | HookLogMeta | (private) |
| 129 | fn | logInfoMetaFor | (private) |
| 137 | fn | logWarnMetaFor | (private) |
| 165 | fn | continueRun | (private) |

## src/gateway/server/plugins-http.runtime-scopes.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | PluginHttpRoute | (private) |
| 27 | type | PluginRequestHandler | (private) |
| 28 | type | PluginRequestAuthContext | (private) |
| 30 | fn | createRoute | (private) |
| 50 | fn | createMockLogger | (private) |
| 68 | fn | assertWriteHelperAllowed | (private) |
| 76 | fn | assertAdminHelperAllowed | (private) |
| 84 | fn | createPluginRequestHandler | (private) |
| 100 | fn | dispatchPluginRequest | (private) |
| 117 | fn | dispatchTrustedGatewayRequest | (private) |
| 128 | fn | expectMissingWriteScopeFailure | (private) |
| 148 | fn | invokeRoute | (private) |

## src/gateway/server/plugins-http.test.ts (626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | PluginHandlerLog | (private) |
| 27 | fn | createPluginLog | (private) |
| 31 | fn | createRoute | (private) |
| 54 | fn | createMockUpgradeSocket | (private) |
| 68 | fn | buildRepeatedEncodedSlash | (private) |
| 76 | fn | createSecurePluginRouteHandler | (private) |
| 101 | fn | invokeSecureGatewayRoute | (private) |
| 124 | fn | invokeRouteAndCollectRuntimeScopes | (private) |
| 156 | fn | invokeImessageWebhook | (private) |
| 170 | fn | invokeCanvasGatewayUpgrade | (private) |

## src/gateway/server/ws-connection.ts (707 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | SubsystemLogger | (private) |
| 62 | fn | replaceControlChars | (private) |
| 78 | fn | stringMetaValue | (private) |
| 99 | fn | formatSocketEndpoint | (private) |
| 112 | fn | resolveSocketAddress | (private) |
| 138 | fn | isWsPayloadLimitError | (private) |
| 150 | type | GatewayWsSharedHandlerParams | (private) |
| 173 | type | AttachGatewayWsConnectionHandlerParams | pub |
| 191 | fn | attachGatewayWsMessageHandlerOnDemand | (private) |
| 195 | fn | queueMessage | (private) |
| 229 | fn | attachGatewayWsConnectionHandler | pub |
| 284 | fn | headerValue | (private) |
| 322 | fn | advanceHandshakePhase | (private) |
| 328 | fn | setCloseCause | (private) |
| 337 | fn | releasePreauthBudget | (private) |
| 345 | fn | setLastFrameMeta | (private) |
| 378 | fn | close | (private) |
| 399 | fn | send | (private) |
| 459 | fn | isNoisySwiftPmHelperClose | (private) |
| 463 | fn | isExpectedLocalAppStartupAbort | (private) |
| 593 | fn | setClient | (private) |
