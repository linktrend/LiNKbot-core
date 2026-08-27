# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/minimax/music-generation-provider.test.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | mockMusicGenerationResponse | (private) |
| 47 | fn | mockCallArg | (private) |
| 55 | fn | expectMinimaxGuardedFetchCall | (private) |
| 71 | fn | expectDownloadFetchTimeout | (private) |
| 84 | fn | expectAllowPrivateNetworkPolicy | (private) |
| 90 | fn | streamedAudioResponse | (private) |

## extensions/minimax/oauth.test.ts (763 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | cancelTrackedResponse | (private) |
| 32 | fn | timeoutResult | (private) |
| 38 | fn | captureMiniMaxOAuthFetchTimeout | (private) |
| 65 | fn | listenOnLoopback | (private) |
| 67 | fn | onError | (private) |
| 81 | fn | startHangingLoopbackServer | (private) |
| 87 | type | RequestWaiter | (private) |
| 98 | fn | resolveWaiters | (private) |
| 169 | fn | expectFetchWithoutDeadlineToStayPending | (private) |
| 192 | fn | loginOutcomeWithin | (private) |
| 212 | fn | expectAbortOrTimeoutError | (private) |

## extensions/minimax/speech-provider.test.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | clearMinimaxAuthEnv | (private) |
| 27 | fn | minimaxPortalStore | (private) |
| 40 | fn | seedMinimaxPortalProfile | (private) |
| 50 | fn | resolveProviderConfig | (private) |
| 60 | fn | parseDirectiveToken | (private) |
| 405 | fn | firstFetchCall | (private) |
| 413 | fn | firstFetchInit | (private) |
| 417 | fn | firstFetchBody | (private) |

## extensions/minimax/video-generation-provider.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | MinimaxBaseResp | (private) |
| 53 | type | MinimaxCreateResponse | (private) |
| 58 | type | MinimaxQueryResponse | (private) |
| 66 | type | MinimaxFileRetrieveResponse | (private) |
| 74 | type | MinimaxRequestPolicy | (private) |
| 79 | type | MinimaxResponseHandle | (private) |
| 84 | fn | resolveMinimaxVideoBaseUrl | (private) |
| 99 | fn | resolveGeneratedVideoMaxBytes | (private) |
| 107 | fn | assertMinimaxBaseResp | (private) |
| 116 | fn | resolveMinimaxRequestTimeoutMs | (private) |
| 125 | fn | resolveMinimaxGuardedRequestOptions | (private) |
| 137 | fn | fetchMinimaxResponse | (private) |
| 170 | fn | resolveFirstFrameImage | (private) |
| 185 | fn | resolveDurationSeconds | (private) |
| 202 | fn | resolveResolution | (private) |
| 239 | fn | pollMinimaxVideo | (private) |
| 301 | fn | downloadVideoFromUrl | (private) |
| 346 | fn | downloadVideoFromFileId | (private) |
| 438 | fn | buildMinimaxVideoProvider | (private) |
| 619 | fn | buildMinimaxVideoGenerationProvider | pub |
| 623 | fn | buildMinimaxPortalVideoGenerationProvider | pub |
