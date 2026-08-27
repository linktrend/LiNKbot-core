# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/msteams/src/attachments/bot-framework.test.ts (766 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | SavedCall | (private) |
| 19 | type | MockRuntime | (private) |
| 25 | type | DownloadSingleAttachmentParams | (private) |
| 30 | fn | downloadMSTeamsBotFrameworkAttachment | (private) |
| 39 | fn | installRuntime | (private) |
| 98 | fn | createMockFetch | (private) |
| 110 | fn | buildTokenProvider | (private) |
| 121 | fn | firstMockCall | (private) |
| 129 | fn | resolvePublicHost | (private) |
| 564 | fn | onUnhandledRejection | (private) |
| 683 | fn | mkInfo | (private) |

## extensions/msteams/src/attachments/graph.test.ts (613 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | mockFetchResponse | (private) |
| 81 | fn | mockBinaryResponse | (private) |
| 85 | fn | oversizedGraphJson | (private) |
| 89 | type | GuardedFetchParams | (private) |
| 91 | fn | guardedFetchResult | (private) |
| 103 | fn | requireFirstMockCall | (private) |
| 114 | fn | mockGraphMediaFetch | (private) |

## extensions/msteams/src/attachments/shared.test.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | publicResolve | (private) |
| 18 | fn | privateResolve | (private) |
| 19 | fn | failingResolve | (private) |
| 23 | fn | resolveAllowedHosts | (private) |
| 25 | fn | resolveAuthAllowedHosts | (private) |
| 27 | fn | isGraphSharedLinkUrl | (private) |
| 30 | type | SafeFetchParams | (private) |
| 35 | fn | safeFetch | (private) |
| 46 | fn | mockFetchWithRedirect | (private) |
| 59 | fn | fetchInitAt | (private) |
| 67 | fn | expectSafeFetchStatus | (private) |
| 182 | fn | customFetch | (private) |
| 249 | fn | rebindingResolve | (private) |

## extensions/msteams/src/attachments/shared.ts (731 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | InlineImageCandidate | (private) |
| 36 | type | InlineImageLimitOptions | (private) |
| 93 | fn | estimateBase64DecodedBytes | (private) |
| 151 | fn | isGraphSharedLinkUrl | (private) |
| 169 | fn | encodeGraphShareId | pub |
| 181 | fn | tryBuildGraphSharesUrlForSharedLink | pub |
| 188 | fn | resolveRequestUrl | pub |
| 205 | fn | normalizeContentType | pub |
| 219 | fn | inferPlaceholder | pub |
| 234 | fn | isLikelyImageAttachment | pub |
| 265 | fn | isDownloadableAttachment | pub |
| 285 | fn | isHtmlAttachment | (private) |
| 290 | fn | extractHtmlFromAttachment | pub |
| 311 | fn | canonicalizeInlineBase64Payload | (private) |
| 343 | fn | decodeDataImageWithLimits | (private) |
| 381 | fn | fileHintFromUrl | (private) |
| 391 | fn | extractInlineImageCandidates | pub |
| 437 | fn | safeHostForUrl | pub |
| 445 | fn | resolveAllowedHosts | (private) |
| 449 | fn | resolveAuthAllowedHosts | (private) |
| 453 | type | MSTeamsAttachmentFetchPolicy | pub |
| 464 | type | MSTeamsAttachmentDownloadLogger | pub |
| 470 | type | MSTeamsAttachmentResolveFn | pub |
| 472 | fn | isMockFetchFn | (private) |
| 477 | fn | resolveGuardedFetchImpl | (private) |
| 497 | fn | resolveRetainedAuthorizationRedirectHostnameAllowlist | (private) |
| 509 | fn | resolveAttachmentFetchPolicy | pub |
| 519 | fn | isUrlAllowed | pub |
| 523 | fn | applyAuthorizationHeaderForUrl | pub |
| 540 | fn | resolveMediaSsrfPolicy | pub |
| 558 | fn | resolveAndValidateIP | (private) |
| 585 | fn | safeFetch | (private) |
| 712 | fn | safeFetchWithPolicy | pub |
