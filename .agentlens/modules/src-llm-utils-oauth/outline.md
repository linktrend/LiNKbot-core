# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/llm/utils/oauth/github-copilot.test.ts (630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | refreshThroughGitHubCopilotProvider | (private) |
| 17 | fn | startGitHubCopilotLogin | (private) |
| 25 | fn | deviceCodeResponse | (private) |
| 39 | fn | deviceTokenResponse | (private) |
| 46 | fn | copilotTokenResponse | (private) |
| 56 | fn | finishGitHubCopilotLogin | (private) |
| 61 | fn | abortListenerCount | (private) |
| 65 | fn | stubHangingFetch | (private) |
| 86 | fn | abort | (private) |
| 235 | fn | stubTokenFetch | (private) |
| 289 | fn | credential | (private) |
| 430 | fn | createOversizedOAuthErrorResponse | (private) |
| 459 | fn | captureError | (private) |
| 471 | fn | expectBoundedRedactedError | (private) |
| 556 | fn | pendingResponse | (private) |

## src/llm/utils/oauth/github-copilot.ts (594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | CopilotCredentials | (private) |
| 49 | fn | resolveExpiresAtFromDurationSeconds | (private) |
| 53 | fn | resolveExpiresAtFromEpochSeconds | (private) |
| 57 | fn | normalizeDomain | (private) |
| 70 | fn | getUrls | (private) |
| 83 | fn | getGitHubCopilotBaseUrl | (private) |
| 108 | fn | formatCopilotRequestError | (private) |
| 126 | fn | buildCopilotRequestSignal | (private) |
| 136 | fn | fetchResponse | (private) |
| 158 | fn | fetchJson | (private) |
| 170 | fn | startDeviceFlow | (private) |
| 230 | fn | abortableSleep | (private) |
| 242 | fn | onAbort | (private) |
| 248 | fn | settle | (private) |
| 262 | fn | pollForGitHubAccessToken | (private) |
| 348 | fn | refreshGitHubCopilotToken | (private) |
| 397 | fn | enableGitHubCopilotModel | (private) |
| 432 | fn | listGitHubCopilotModelIds | (private) |
| 482 | fn | enableAllGitHubCopilotModels | (private) |
| 504 | fn | loginGitHubCopilot | (private) |
