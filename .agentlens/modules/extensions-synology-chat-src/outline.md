# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/synology-chat/src/channel.test.ts (772 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | makeSecurityAccount | (private) |
| 30 | fn | expectIncludesSubstring | (private) |
| 34 | fn | mockStringMessages | (private) |
| 304 | fn | makeSharedWebhookConfig | (private) |
| 579 | fn | makeStartAccountCtx | (private) |
| 596 | fn | makeNamedStartAccountCtx | (private) |
| 630 | fn | expectPendingStartAccountPromise | (private) |
| 650 | fn | expectPendingStartAccount | (private) |
| 742 | fn | makeCtx | (private) |

## extensions/synology-chat/src/client.test.ts (508 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | RequestCallback | (private) |
| 40 | type | MockRequestHandler | (private) |
| 45 | type | MockHttpCall | (private) |
| 50 | type | MockResponse | (private) |
| 52 | fn | firstHttpsRequestCall | (private) |
| 60 | fn | firstHttpsGetCall | (private) |
| 68 | fn | createMockResponseEmitter | (private) |
| 74 | fn | createMockRequestEmitter | (private) |
| 82 | fn | settleTimers | (private) |
| 88 | fn | mockResponse | (private) |
| 101 | fn | mockSuccessResponse | (private) |
| 105 | fn | mockFailureResponse | (private) |
| 109 | fn | installFakeTimerHarness | (private) |
| 288 | fn | mockUserListResponse | (private) |
| 292 | fn | mockUserListResponseOnce | (private) |
| 296 | fn | mockUserListResponseImpl | (private) |

## extensions/synology-chat/src/core.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | createSynologySetupPrompter | (private) |
| 57 | fn | expectDmAuthorization | (private) |

## extensions/synology-chat/src/webhook-handler.test.ts (780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | TestDeliver | (private) |
| 18 | type | TestWebhookHandlerDeps | (private) |
| 20 | fn | createWebhookHandler | (private) |
| 43 | type | TestLog | (private) |
| 49 | fn | countMatching | (private) |
| 59 | fn | deliveredMessage | (private) |
| 81 | fn | makeAccount | (private) |
| 111 | fn | runDangerousNameMatchReply | (private) |
| 157 | fn | expectForbiddenByPolicy | (private) |
| 178 | fn | makeTestHandler | (private) |
| 197 | fn | postToWebhook | (private) |
| 208 | fn | expectTokenlessBodyAccepted | (private) |
| 227 | fn | runValidReply | (private) |

## extensions/synology-chat/src/webhook-handler.ts (689 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | InvalidTokenRateLimitState | (private) |
| 48 | class | InvalidTokenRateLimiter | (private) |
| 108 | fn | getRateLimiter | (private) |
| 118 | fn | getInvalidTokenRateLimiter | (private) |
| 129 | fn | getSynologyWebhookInvalidTokenRateLimitKey | (private) |
| 145 | fn | getSynologyWebhookInFlightKey | (private) |
| 153 | fn | readBody | (private) |
| 186 | fn | firstNonEmptyString | (private) |
| 203 | fn | pickAlias | (private) |
| 213 | fn | parseQueryParams | (private) |
| 226 | fn | parseFormBody | (private) |
| 230 | fn | parseJsonBody | (private) |
| 246 | fn | headerValue | (private) |
| 250 | fn | extractTokenFromHeaders | (private) |
| 283 | fn | parseRawEvent | (private) |
| 316 | fn | parsePayload | (private) |
| 358 | fn | respondJson | (private) |
| 364 | fn | respondNoContent | (private) |
| 369 | interface | WebhookHandlerDeps | pub |
| 393 | type | SynologyWebhookAuthorization | (private) |
| 395 | type | AuthorizedSynologyWebhook | (private) |
| 399 | fn | parseWebhookPayloadRequest | (private) |
| 430 | fn | authorizeSynologyWebhook | (private) |
| 494 | fn | sanitizeSynologyWebhookText | (private) |
| 502 | fn | parseAndAuthorizeSynologyWebhook | (private) |
| 541 | fn | resolveSynologyReplyDeliveryUserId | (private) |
| 565 | fn | authorizeClaimedSynologyWebhook | (private) |
| 584 | fn | processSynologyWebhookIngressEvent | pub |
| 633 | fn | createWebhookHandler | pub |
