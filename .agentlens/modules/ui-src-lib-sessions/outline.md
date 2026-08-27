# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## ui/src/lib/sessions/index.test.ts (1082 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | sessionsResult | (private) |
| 22 | fn | deferred | (private) |
| 32 | fn | createGatewayHarness | (private) |
| 79 | fn | sessionChangedEvent | (private) |

## ui/src/lib/sessions/index.ts (1750 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | SessionState | (private) |
| 71 | type | SessionGroupMutationResult | (private) |
| 73 | type | SessionListOptions | pub |
| 94 | type | SessionRefreshOptions | (private) |
| 100 | type | SessionRunTerminal | pub |
| 110 | type | SessionDeleteOptions | (private) |
| 116 | type | SessionDeleteTarget | (private) |
| 124 | type | SessionDeleteOutcome | (private) |
| 129 | type | SessionDeleteBatchResult | (private) |
| 136 | type | SessionCompactResult | (private) |
| 143 | type | SessionSteerResult | (private) |
| 148 | type | SessionResetOptions | (private) |
| 152 | type | SessionResetResult | (private) |
| 154 | type | SessionGateway | (private) |
| 166 | type | SessionRequestClient | (private) |
| 168 | type | SessionDeleteResponse | (private) |
| 173 | type | SessionConnectionScope | (private) |
| 178 | type | SessionMessageSubscription | (private) |
| 183 | type | SessionCapability | pub |
| 300 | fn | buildSessionRequestParams | (private) |
| 312 | fn | buildTranscriptMutationParams | (private) |
| 324 | fn | buildSessionListParams | (private) |
| 375 | fn | requestSessionList | (private) |
| 386 | fn | requestSessionPatch | (private) |
| 398 | fn | requestSessionDelete | (private) |
| 410 | fn | confirmsSessionDeletion | (private) |
| 416 | fn | requestSessionReset | (private) |
| 428 | fn | requestSessionCompact | (private) |
| 438 | fn | requestSessionSteer | (private) |
| 450 | fn | requestSessionFilesList | (private) |
| 463 | fn | requestSessionFile | (private) |
| 476 | fn | requestSessionFileSet | (private) |
| 492 | fn | subscribeSessionGateway | (private) |
| 496 | fn | subscribeSessionMessages | (private) |
| 514 | fn | unsubscribeSessionMessages | pub |
| 526 | fn | listSessionCheckpoints | (private) |
| 537 | fn | branchSessionCheckpoint | (private) |
| 549 | fn | restoreSessionCheckpoint | (private) |
| 561 | fn | rewindSessionAtMessage | (private) |
| 573 | fn | forkSessionAtMessage | (private) |
| 585 | fn | listSessionBranches | (private) |
| 596 | fn | switchSessionBranch | (private) |
| 608 | fn | appendSessionResults | (private) |
| 636 | fn | isSessionStateEvent | (private) |
| 640 | fn | reconcileSessionRunTerminal | pub |
| 706 | fn | createSessionCapability | pub |
| 763 | fn | publish | (private) |
| 770 | fn | setModelOverride | (private) |
| 794 | fn | rollbackPendingModelPatches | (private) |
| 802 | fn | load | (private) |
| 881 | fn | drainRefreshQueue | (private) |
| 894 | fn | refresh | (private) |
| 917 | fn | refreshReplacement | (private) |
| 926 | fn | createResult | (private) |
| 958 | fn | create | (private) |
| 970 | fn | clearGroupsRetry | (private) |
| 977 | fn | invalidateGroupsLoad | (private) |
| 994 | fn | publishGroups | (private) |
| 1031 | fn | loadGroups | (private) |
| 1085 | fn | groupsLoad | (private) |
| 1181 | fn | restoreModelOverride | (private) |
| 1467 | fn | unsubscribeMessages | (private) |
