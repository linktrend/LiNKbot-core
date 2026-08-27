# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/qa-lab/src/live-transports/shared/credential-lease.runtime.test.ts (820 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | jsonResponse | (private) |
| 17 | type | FetchMock | (private) |
| 19 | fn | fetchCall | (private) |
| 27 | fn | fetchUrl | (private) |
| 35 | fn | fetchInit | (private) |
| 43 | fn | startStreamingFailureBroker | (private) |

## extensions/qa-lab/src/live-transports/shared/credential-lease.runtime.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ConvexCredentialBrokerConfig | (private) |
| 73 | type | QaCredentialLeaseHeartbeat | (private) |
| 79 | type | QaCredentialRole | (private) |
| 81 | type | QaCredentialLeaseSource | (private) |
| 111 | class | QaCredentialBrokerError | (private) |
| 123 | fn | parsePositiveIntegerEnv | (private) |
| 127 | fn | normalizeQaCredentialSource | (private) |
| 135 | fn | normalizeQaCredentialRole | (private) |
| 147 | fn | normalizeConvexSiteUrl | (private) |
| 151 | fn | normalizeEndpointPrefix | (private) |
| 162 | fn | resolveConvexAuthToken | (private) |
| 177 | fn | resolveConvexCredentialBrokerConfig | (private) |
| 233 | fn | parseChunkedPayloadMarker | (private) |
| 270 | fn | toBrokerError | (private) |
| 285 | fn | postConvexBroker | (private) |
| 335 | fn | resolveConvexCredentialPayload | (private) |
| 380 | fn | computeAcquireBackoffMs | (private) |
| 394 | fn | assertConvexOk | (private) |
| 411 | fn | isTransientBrokerTransportError | (private) |
| 423 | fn | acquireQaCredentialLease | pub |
| 476 | fn | releaseLease | (private) |
| 589 | fn | startQaCredentialLeaseHeartbeat | pub |
| 623 | fn | schedule | (private) |
