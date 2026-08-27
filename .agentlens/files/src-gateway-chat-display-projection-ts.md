# src/gateway/chat-display-projection.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2146
- **Language:** TypeScript
- **Symbols:** 97
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | type | RoleContentMessage | (private) | - |
| 42 | type | ChatDisplayProjectionOptions | (private) | - |
| 48 | type | ChatDisplayProjectionResult | (private) | - |
| 53 | type | PendingMessageToolVisibleReply | (private) | - |
| 66 | fn | resolveEffectiveChatHistoryMaxChars | pub | `export function resolveEffectiveChatHistoryMaxC...` |
| 73 | fn | truncateChatHistoryText | (private) | `function truncateChatHistoryText(` |
| 87 | fn | isToolHistoryBlockType | (private) | `function isToolHistoryBlockType(type: unknown):...` |
| 102 | fn | isToolResultHistoryBlockType | (private) | `function isToolResultHistoryBlockType(type: unk...` |
| 110 | fn | projectToolResultDetails | (private) | `function projectToolResultDetails(` |
| 148 | fn | messageHasToolResultShape | (private) | `function messageHasToolResultShape(message: Rec...` |
| 180 | fn | extractChatHistoryBlockText | (private) | `function extractChatHistoryBlockText(message: u...` |
| 206 | fn | extractChatHistoryCanvasPreview | (private) | `function extractChatHistoryCanvasPreview(messag...` |
| 223 | fn | appendCanvasBlockToAssistantHistoryMessage | (private) | `function appendCanvasBlockToAssistantHistoryMes...` |
| 268 | fn | messageContainsToolHistoryContent | (private) | `function messageContainsToolHistoryContent(mess...` |
| 292 | fn | augmentChatHistoryWithCanvasBlocks | pub | `export function augmentChatHistoryWithCanvasBlo...` |
| 370 | fn | sanitizeChatHistoryContentBlock | (private) | `function sanitizeChatHistoryContentBlock(` |
| 458 | fn | sanitizeAssistantPhasedContentBlocks | (private) | `function sanitizeAssistantPhasedContentBlocks(c...` |
| 490 | fn | projectAssistantTextFromMixedToolContent | (private) | `function projectAssistantTextFromMixedToolContent(` |
| 523 | fn | toFiniteNumber | (private) | `function toFiniteNumber(x: unknown): number | u...` |
| 527 | fn | sanitizeCost | (private) | `function sanitizeCost(raw: unknown): Record<str...` |
| 542 | fn | sanitizeUsage | (private) | `function sanitizeUsage(raw: unknown): Record<st...` |
| 585 | fn | sanitizeChatHistoryMessage | (private) | `function sanitizeChatHistoryMessage(` |
| 728 | fn | extractAssistantTextForSilentCheck | (private) | `function extractAssistantTextForSilentCheck(mes...` |
| 763 | fn | isAssistantTextContentType | (private) | `function isAssistantTextContentType(type: unkno...` |
| 767 | fn | isAssistantInternalReasoningContentType | (private) | `function isAssistantInternalReasoningContentTyp...` |
| 771 | fn | hasAssistantNonTextContent | (private) | `function hasAssistantNonTextContent(message: un...` |
| 787 | fn | hasAssistantDisplayableNonTextContent | (private) | `function hasAssistantDisplayableNonTextContent(...` |
| 804 | fn | shouldPreserveAssistantControlReplyText | (private) | `function shouldPreserveAssistantControlReplyTex...` |
| 832 | fn | hasAssistantMixedToolVisibleText | (private) | `function hasAssistantMixedToolVisibleText(messa...` |
| 861 | fn | normalizeToolHistoryType | (private) | `function normalizeToolHistoryType(value: unknow...` |
| 866 | fn | parseJsonRecord | (private) | `function parseJsonRecord(value: string): Record...` |
| 874 | fn | readMaybeJsonRecord | (private) | `function readMaybeJsonRecord(value: unknown): R...` |
| 881 | fn | readToolBlockName | (private) | `function readToolBlockName(block: Record<string...` |
| 894 | fn | readToolBlockCallId | (private) | `function readToolBlockCallId(block: Record<stri...` |
| 904 | fn | readToolBlockArguments | (private) | `function readToolBlockArguments(block: Record<s...` |
| 921 | fn | hasNonEmptyValue | (private) | `function hasNonEmptyValue(value: unknown): bool...` |
| 934 | fn | hasExplicitMessageToolRoute | (private) | `function hasExplicitMessageToolRoute(args: Reco...` |
| 958 | fn | readMessageToolVisibleText | (private) | `function readMessageToolVisibleText(args: Recor...` |
| 968 | fn | isDryRunMessageToolRecord | (private) | `function isDryRunMessageToolRecord(record: Reco...` |
| 979 | fn | extractMessageToolVisibleReplies | (private) | `function extractMessageToolVisibleReplies(` |
| 1020 | fn | isAssistantSilentControlReplyOnly | (private) | `function isAssistantSilentControlReplyOnly(mess...` |
| 1029 | fn | isRenderableAssistantDisplayMessage | (private) | `function isRenderableAssistantDisplayMessage(me...` |
| 1037 | fn | readMessageToolResultName | (private) | `function readMessageToolResultName(message: Rec...` |
| 1046 | fn | readMessageToolResultCallId | (private) | `function readMessageToolResultCallId(message: R...` |
| 1056 | fn | readToolResultOkValue | (private) | `function readToolResultOkValue(value: unknown):...` |
| 1088 | fn | hasDryRunToolResultValue | (private) | `function hasDryRunToolResultValue(value: unknow...` |
| 1110 | fn | hasSuppressedToolResultValue | (private) | `function hasSuppressedToolResultValue(value: un...` |
| 1144 | fn | isSuccessfulMessageToolResult | (private) | `function isSuccessfulMessageToolResult(` |
| 1170 | fn | isSuccessfulMessageToolResultPayload | (private) | `function isSuccessfulMessageToolResultPayload(m...` |
| 1199 | fn | readMessageToolSourceReplySink | (private) | `function readMessageToolSourceReplySink(` |
| 1206 | fn | buildMessageToolVisibleReplyMirror | (private) | `function buildMessageToolVisibleReplyMirror(` |
| 1232 | fn | readMessageToolDeliveryMirrorText | (private) | `function readMessageToolDeliveryMirrorText(mess...` |
| 1242 | fn | mirrorMessageToolVisibleReplies | (private) | `function mirrorMessageToolVisibleReplies(messag...` |
| 1253 | fn | clearPending | (private) | `const clearPending = () => {` |
| 1259 | fn | flushSucceededMirrors | (private) | `const flushSucceededMirrors = () => {` |
| 1270 | fn | flushSelectedMirrors | (private) | `const flushSelectedMirrors = (items: PendingMes...` |
| 1373 | fn | shouldDropAssistantHistoryMessage | (private) | `function shouldDropAssistantHistoryMessage(mess...` |
| 1398 | fn | sanitizeChatHistoryMessages | pub | `export function sanitizeChatHistoryMessages(` |
| 1423 | fn | asRoleContentMessage | (private) | `function asRoleContentMessage(message: Record<s...` |
| 1438 | fn | isEmptyTextOnlyContent | (private) | `function isEmptyTextOnlyContent(content: unknow...` |
| 1465 | fn | hasTranscriptMediaPaths | (private) | `function hasTranscriptMediaPaths(message: Recor...` |
| 1474 | fn | extractProjectedText | (private) | `function extractProjectedText(content: unknown)...` |
| 1494 | fn | digestTtsSupplementText | (private) | `function digestTtsSupplementText(text: string):...` |
| 1498 | fn | readTtsSupplementMarker | (private) | `function readTtsSupplementMarker(` |
| 1517 | fn | isAssistantTtsSupplementMessage | (private) | `function isAssistantTtsSupplementMessage(messag...` |
| 1549 | fn | ttsSupplementMatchesAssistant | (private) | `function ttsSupplementMatchesAssistant(` |
| 1572 | fn | mergeTtsSupplementContent | (private) | `function mergeTtsSupplementContent(` |
| 1598 | fn | mergeTtsSupplementMessages | (private) | `function mergeTtsSupplementMessages(` |
| 1631 | fn | isSubagentAnnounceInterSessionUserMessage | (private) | `function isSubagentAnnounceInterSessionUserMess...` |
| 1642 | fn | readChatHistoryRecordTimestampMs | (private) | `function readChatHistoryRecordTimestampMs(messa...` |
| 1652 | fn | isSubagentAnnounceInterSessionUserChatHistoryMessage | (private) | `function isSubagentAnnounceInterSessionUserChat...` |
| 1669 | fn | isChatHistoryAssistantMessage | (private) | `function isChatHistoryAssistantMessage(message:...` |
| 1673 | fn | dropPreSessionStartAnnouncePairs | pub | `export function dropPreSessionStartAnnouncePairs(` |
| 1707 | fn | isSessionsSendInterSessionUserMessage | (private) | `function isSessionsSendInterSessionUserMessage(...` |
| 1715 | fn | isProjectedSessionsSendForwardedMessage | (private) | `function isProjectedSessionsSendForwardedMessag...` |
| 1723 | fn | isDisplayHiddenProjectedMessage | (private) | `function isDisplayHiddenProjectedMessage(messag...` |
| 1730 | fn | shouldHideProjectedHistoryMessage | (private) | `function shouldHideProjectedHistoryMessage(mess...` |
| 1761 | fn | isHeartbeatHistoryTurnBoundaryMessage | pub | `export function isHeartbeatHistoryTurnBoundaryM...` |
| 1770 | fn | attachProjectedTurnBoundary | (private) | `function attachProjectedTurnBoundary(message: R...` |
| 1784 | fn | canCarryProjectedTurnBoundary | (private) | `function canCarryProjectedTurnBoundary(message:...` |
| 1788 | fn | openclawAssistantModel | (private) | `function openclawAssistantModel(message: Record...` |
| 1796 | fn | displayTextForDuplicateCheck | (private) | `function displayTextForDuplicateCheck(message: ...` |
| 1801 | fn | isDuplicateAcpGatewayInjectedMessage | (private) | `function isDuplicateAcpGatewayInjectedMessage(` |
| 1822 | fn | isDuplicateChannelFinalDeliveryMirror | (private) | `function isDuplicateChannelFinalDeliveryMirror(` |
| 1854 | fn | toProjectedMessages | (private) | `function toProjectedMessages(messages: unknown[...` |
| 1861 | fn | filterVisibleProjectedHistoryMessages | (private) | `function filterVisibleProjectedHistoryMessages(` |
| 1921 | fn | stripInterSessionPromptPrefixFromContent | (private) | `function stripInterSessionPromptPrefixFromConte...` |
| 1941 | fn | extractPromptPrefixField | (private) | `function extractPromptPrefixField(text: string,...` |
| 1953 | fn | resolveSessionsSendForwardedSenderLabel | (private) | `function resolveSessionsSendForwardedSenderLabe...` |
| 1962 | fn | projectSessionsSendInterSessionMessages | (private) | `function projectSessionsSendInterSessionMessages(` |
| 1989 | fn | sanitizeAssistantErrorDisplayMessage | (private) | `function sanitizeAssistantErrorDisplayMessage(` |
| 2019 | fn | projectEmptyAssistantErrorMessages | (private) | `function projectEmptyAssistantErrorMessages(` |
| 2089 | fn | projectChatDisplayMessagesWithState | pub | `export function projectChatDisplayMessagesWithS...` |
| 2111 | fn | projectChatDisplayMessages | pub | `export function projectChatDisplayMessages(` |
| 2118 | fn | limitChatDisplayMessages | (private) | `function limitChatDisplayMessages<T>(messages: ...` |
| 2130 | fn | projectRecentChatDisplayMessages | pub | `export function projectRecentChatDisplayMessages(` |
| 2140 | fn | projectChatDisplayMessage | pub | `export function projectChatDisplayMessage(` |

## Public API

### `resolveEffectiveChatHistoryMaxChars`

```
export function resolveEffectiveChatHistoryMaxChars(_cfg: unknown, maxChars?: number): number {
```

**Line:** 66 | **Kind:** fn

### `augmentChatHistoryWithCanvasBlocks`

```
export function augmentChatHistoryWithCanvasBlocks(messages: unknown[]): unknown[] {
```

**Line:** 292 | **Kind:** fn

### `sanitizeChatHistoryMessages`

```
export function sanitizeChatHistoryMessages(
```

**Line:** 1398 | **Kind:** fn

### `dropPreSessionStartAnnouncePairs`

```
export function dropPreSessionStartAnnouncePairs(
```

**Line:** 1673 | **Kind:** fn

### `isHeartbeatHistoryTurnBoundaryMessage`

```
export function isHeartbeatHistoryTurnBoundaryMessage(message: unknown): boolean {
```

**Line:** 1761 | **Kind:** fn

### `projectChatDisplayMessagesWithState`

```
export function projectChatDisplayMessagesWithState(
```

**Line:** 2089 | **Kind:** fn

### `projectChatDisplayMessages`

```
export function projectChatDisplayMessages(
```

**Line:** 2111 | **Kind:** fn

### `projectRecentChatDisplayMessages`

```
export function projectRecentChatDisplayMessages(
```

**Line:** 2130 | **Kind:** fn

### `projectChatDisplayMessage`

```
export function projectChatDisplayMessage(
```

**Line:** 2140 | **Kind:** fn
