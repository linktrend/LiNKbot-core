# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## packages/gateway-protocol/src/connect-error-details.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | normalizeOptionalString | (private) |
| 15 | fn | normalizeArrayBackedTrimmedStringList | (private) |
| 60 | type | ConnectErrorDetailCode | (private) |
| 71 | type | ConnectPairingRequiredReason | pub |
| 75 | type | ConnectRecoveryNextStep | (private) |
| 83 | type | ConnectErrorRecoveryAdvice | (private) |
| 89 | type | PairingConnectErrorDetails | (private) |
| 105 | type | ConnectPairingRequiredDetails | pub |
| 168 | fn | resolveAuthConnectErrorDetailCode | pub |
| 208 | fn | resolveDeviceAuthConnectErrorDetailCode | pub |
| 230 | fn | readConnectErrorDetailCode | pub |
| 239 | fn | readConnectErrorRecoveryAdvice | pub |
| 261 | fn | normalizePairingConnectReason | (private) |
| 269 | fn | normalizePairingConnectRequestId | pub |
| 274 | fn | normalizeStringArray | (private) |
| 278 | fn | createPairingConnectErrorDetails | (private) |
| 308 | fn | describePairingConnectRequirement | pub |
| 317 | fn | buildPairingConnectErrorMessage | pub |
| 325 | fn | buildPairingConnectRemediationHint | (private) |
| 334 | fn | buildPairingConnectRecoveryTitle | pub |
| 343 | fn | buildPairingConnectErrorDetails | pub |
| 381 | fn | buildPairingConnectCloseReason | pub |
| 391 | fn | readPairingConnectErrorDetails | pub |
| 444 | fn | readConnectPairingRequiredMessage | pub |
| 477 | fn | formatConnectPairingRequiredMessage | pub |
| 487 | fn | formatConnectErrorMessage | pub |
| 497 | fn | formatProtocolMismatchMessage | (private) |
| 526 | fn | normalizeProtocolNumber | (private) |

## packages/gateway-protocol/src/index.test.ts (780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ProtocolValidator | (private) |

## packages/gateway-protocol/src/index.ts (1969 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 597 | fn | checkWorkerProtocolJson | (private) |
| 1942 | type | SessionsPatchResult | pub |
| 1956 | type | GatewayAgentRuntime | (private) |
