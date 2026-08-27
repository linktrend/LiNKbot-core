# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/nostr/src/channel.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | normalizeNostrTestEntry | (private) |
| 26 | fn | resolveNostrTestDmPolicy | (private) |
| 99 | fn | requireNostrLooksLikeId | (private) |
| 107 | fn | requireNostrNormalizeTarget | (private) |
| 115 | fn | requireNostrPairingNormalizer | (private) |
| 123 | fn | requireNostrResolveDmPolicy | (private) |
| 131 | fn | createUnresolvedNostrPrivateKeyCfg | (private) |

## extensions/nostr/src/nostr-bus.inbound.test.ts (937 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | TestNostrBusState | (private) |
| 51 | class | MockSimplePool | (private) |
| 112 | fn | createEvent | (private) |
| 125 | fn | emitEvent | (private) |
| 140 | fn | startTestNostrBus | (private) |
| 363 | fn | releaseClose | (private) |

## extensions/nostr/src/nostr-bus.ts (808 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | interface | NostrBusOptions | (private) |
| 94 | interface | NostrBusHandle | pub |
| 117 | interface | CircuitBreakerState | (private) |
| 124 | interface | CircuitBreaker | (private) |
| 135 | fn | createCircuitBreaker | (private) |
| 202 | interface | RelayHealthStats | (private) |
| 211 | interface | RelayHealthTracker | (private) |
| 222 | fn | createRelayHealthTracker | (private) |
| 225 | fn | getOrCreate | (private) |
| 293 | fn | startNostrBus | pub |
| 368 | fn | updateRateLimiterSizeMetric | (private) |
| 399 | fn | dispatchEvent | (private) |
| 706 | fn | getProfileState | (private) |
| 743 | fn | sendEncryptedDm | (private) |

## extensions/nostr/src/nostr-profile-http.test.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | NostrProfileHttpContext | (private) |
| 59 | fn | setGatewayRuntimeScopes | (private) |
| 73 | fn | responseChunkText | (private) |
| 83 | fn | createMockRequest | (private) |
| 114 | type | MockResponse | (private) |
| 122 | fn | createMockResponse | (private) |
| 152 | fn | createMockContext | (private) |
| 169 | fn | createProfileHttpHarness | (private) |
| 191 | fn | expectOkResponse | (private) |
| 198 | fn | mockSuccessfulProfileImport | (private) |
| 215 | fn | expectAdminScopeRejected | (private) |
| 301 | fn | mockPublishSuccess | (private) |
| 310 | fn | expectBadRequestResponse | (private) |
| 317 | fn | expectPrivatePictureRejected | (private) |
| 494 | fn | expectImportSuccessResponse | (private) |

## extensions/nostr/src/nostr-profile-http.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | interface | NostrProfileHttpContext | (private) |
| 61 | fn | checkRateLimit | (private) |
| 71 | fn | withPublishLock | (private) |
| 103 | fn | sendJson | (private) |
| 109 | fn | readJsonBody | (private) |
| 134 | fn | parseAccountIdFromPath | (private) |
| 140 | fn | isLoopbackRemoteAddress | (private) |
| 166 | fn | isLoopbackOriginLike | (private) |
| 176 | fn | firstHeaderValue | (private) |
| 183 | fn | normalizeIpCandidate | (private) |
| 196 | fn | hasNonLoopbackForwardedClient | (private) |
| 221 | fn | enforceLoopbackMutationGuards | (private) |
| 269 | fn | enforceGatewayMutationScope | (private) |
| 288 | fn | createNostrProfileHttpHandler | pub |
| 340 | fn | handleGetProfile | (private) |
| 360 | fn | handleUpdateProfile | (private) |
| 466 | fn | handleImportProfile | (private) |
