# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/mattermost/src/channel.test.ts (1761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | MattermostHandleAction | (private) |
| 36 | type | MattermostActionContext | (private) |
| 37 | type | MattermostSendText | (private) |
| 38 | type | MattermostSendTextParams | (private) |
| 39 | type | MattermostSendMedia | (private) |
| 40 | type | MattermostSendMediaParams | (private) |
| 41 | type | MattermostRenderPresentation | (private) |
| 44 | type | MattermostSendPayload | (private) |
| 48 | fn | getDescribedActions | (private) |
| 52 | fn | requireMattermostNormalizeTarget | (private) |
| 60 | fn | requireMattermostTargetResolver | (private) |
| 68 | fn | requireMattermostPairingNormalizer | (private) |
| 76 | fn | requireMattermostReplyToModeResolver | (private) |
| 84 | fn | requireMattermostThreadTargetMatcher | (private) |
| 92 | fn | requireMattermostSendText | (private) |
| 100 | fn | requireMattermostSendMedia | (private) |
| 108 | fn | requireMattermostChunker | (private) |
| 116 | fn | requireMattermostRenderPresentation | (private) |
| 124 | fn | requireMattermostSendPayload | (private) |
| 132 | fn | createMattermostActionContext | (private) |
| 144 | fn | expectSingleMattermostSend | (private) |
| 645 | fn | runReactAction | (private) |

## extensions/mattermost/src/channel.ts (984 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | buildMattermostPresentationButtons | (private) |
| 112 | fn | hasMattermostPresentationNavigation | (private) |
| 123 | fn | readMattermostPresentationButtons | (private) |
| 131 | type | MattermostDirectoryListParams | (private) |
| 148 | fn | describeMattermostMessageTool | (private) |
| 186 | fn | hasConfiguredMattermostDirectoryAccount | (private) |
| 200 | fn | extractMattermostToolSend | (private) |
| 222 | fn | extractMattermostToolSendResult | (private) |
| 252 | fn | resolveMattermostAutoThreadId | (private) |
| 286 | fn | normalizeMattermostThreadTarget | (private) |
| 295 | fn | matchesMattermostToolContextTarget | (private) |
| 308 | fn | normalizeMattermostThreadId | (private) |
| 312 | fn | buildMattermostThreadingToolContext | (private) |
| 349 | fn | listMattermostDirectoryGroups | (private) |
| 356 | fn | listMattermostDirectoryPeers | (private) |
| 524 | fn | parseMattermostReactActionParams | (private) |
| 547 | fn | collectNonBlankStrings | (private) |
| 560 | fn | toSnakeCaseKey | (private) |
| 567 | fn | readMattermostParam | (private) |
| 575 | fn | readMattermostStringParam | (private) |
| 583 | fn | readMattermostStringArrayParam | (private) |
| 600 | fn | requiresMattermostMediaUpload | (private) |
| 605 | fn | collectMattermostAttachmentMedia | (private) |
