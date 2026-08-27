# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/copilot/harness.test.ts (2673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | asAttemptParams | (private) |
| 58 | fn | asAttemptResult | (private) |
| 79 | fn | createMockCopilotClient | (private) |
| 83 | fn | makePoolMock | (private) |
| 92 | fn | makeSessionStoreMock | (private) |
| 106 | fn | createDeferred | (private) |
| 116 | fn | flushAsyncWork | (private) |
| 833 | fn | makeAttemptParams | (private) |
| 1702 | fn | makeCompactParams | (private) |

## extensions/copilot/harness.ts (1134 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | interface | CreateCopilotAgentHarnessOptions | (private) |
| 45 | interface | TrackedSession | (private) |
| 65 | interface | CopilotHistoryCompactResult | (private) |
| 80 | interface | CopilotHistoryCompactSession | (private) |
| 91 | type | CopilotSessionBinding | pub |
| 102 | type | LegacyCopilotSessionBinding | (private) |
| 109 | type | CopilotAttemptSessionBinding | (private) |
| 110 | type | DeferredCompactionCleanupOutcome | (private) |
| 111 | type | DeferredCompactionCleanup | (private) |
| 116 | type | CopilotSessionBindingStore | (private) |
| 121 | type | CopilotSessionAuth | (private) |
| 126 | fn | sessionAuthFields | (private) |
| 136 | fn | sessionAuthMatches | (private) |
| 150 | fn | normalizeBinding | (private) |
| 191 | fn | normalizeAttemptBinding | (private) |
| 215 | fn | lookupStoredBinding | (private) |
| 231 | fn | registerStoredBinding | (private) |
| 250 | fn | deleteStoredBinding | (private) |
| 260 | fn | throwIfAborted | (private) |
| 273 | fn | isStaleSdkSessionError | (private) |
| 280 | fn | compactTrackedSdkSession | (private) |
| 329 | type | CopilotSessionCompatParams | (private) |
| 331 | fn | readAgentIdFromSessionKey | (private) |
| 339 | fn | computeSessionKey | (private) |
| 537 | fn | readSessionString | (private) |
| 541 | fn | fingerprintSessionValue | (private) |
| 545 | fn | computeSessionCompatKey | (private) |
| 549 | fn | computeSessionCompactKey | (private) |
| 553 | fn | buildCopilotCompactionHookContext | (private) |
| 567 | fn | createCopilotAgentHarness | pub |
| 586 | fn | getPool | (private) |
| 600 | fn | trackDeferredCompactionCleanup | (private) |
| 617 | fn | removeDeferredCompactionCleanup | (private) |
| 631 | fn | hasPendingDeferredCompactionCleanup | (private) |
| 645 | fn | abortDeferredCompactionCleanups | (private) |
| 706 | fn | attemptPromise | (private) |
