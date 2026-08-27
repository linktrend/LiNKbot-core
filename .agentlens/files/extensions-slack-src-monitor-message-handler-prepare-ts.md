# extensions/slack/src/monitor/message-handler/prepare.ts

[← Back to Module](../modules/extensions-slack-src-monitor-message-handler/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1717
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 102 | fn | recordString | (private) | `function recordString(` |
| 109 | fn | recordNullableString | (private) | `function recordNullableString(` |
| 122 | fn | mergeSlackAssistantThreadContext | (private) | `function mergeSlackAssistantThreadContext(` |
| 142 | fn | hasSlackAssistantThreadMetadata | (private) | `function hasSlackAssistantThreadMetadata(` |
| 148 | fn | resolveSlackMessageAssistantThreadContext | (private) | `function resolveSlackMessageAssistantThreadCont...` |
| 171 | fn | restoreSlackAssistantThreadContextFromMetadata | (private) | `async function restoreSlackAssistantThreadConte...` |
| 222 | fn | resolveCachedMentionRegexes | (private) | `function resolveCachedMentionRegexes(` |
| 247 | fn | isSlackImageFileCandidate | (private) | `function isSlackImageFileCandidate(file: SlackF...` |
| 255 | fn | sliceSlackImageFileCandidates | (private) | `function sliceSlackImageFileCandidates(files: S...` |
| 262 | fn | sliceSlackHistoryAttachmentCandidates | (private) | `function sliceSlackHistoryAttachmentCandidates(` |
| 292 | fn | buildSlackHistoryMediaCandidateMessage | (private) | `function buildSlackHistoryMediaCandidateMessage(` |
| 310 | fn | resolveSlackHistoryMediaForPendingRecord | (private) | `async function resolveSlackHistoryMediaForPendi...` |
| 339 | type | SlackConversationContext | (private) | - |
| 357 | type | SlackAuthorizationContext | (private) | - |
| 362 | type | SlackMentionMetadata | (private) | - |
| 369 | type | SlackExplicitMentionState | (private) | - |
| 375 | type | SlackMentionContextPayload | (private) | - |
| 385 | fn | collectUniqueSlackMentionIds | (private) | `function collectUniqueSlackMentionIds(text: str...` |
| 397 | fn | collectSlackMentionMetadata | (private) | `function collectSlackMentionMetadata(text: stri...` |
| 406 | fn | resolveSlackExplicitMentionState | (private) | `async function resolveSlackExplicitMentionState...` |
| 437 | fn | resolveSlackMentionSource | (private) | `function resolveSlackMentionSource(params: {` |
| 462 | fn | buildSlackMentionContextPayload | (private) | `function buildSlackMentionContextPayload(params: {` |
| 488 | fn | resolveSlackConversationContext | (private) | `async function resolveSlackConversationContext(...` |
| 552 | fn | authorizeSlackInboundMessage | (private) | `async function authorizeSlackInboundMessage(par...` |
| 640 | fn | prepareSlackMessage | pub | `export async function prepareSlackMessage(param...` |
| 786 | fn | resolveWasMentioned | (private) | `const resolveWasMentioned = (mentionRegexes: Re...` |
| 799 | fn | buildPolicyMentionRegexes | (private) | `const buildPolicyMentionRegexes = (agentId: str...` |
| 950 | fn | getThreadStarter | (private) | `const getThreadStarter = () => {` |
| 962 | fn | resolveMessageContent | (private) | `const resolveMessageContent = (` |
| 981 | fn | getMessageContent | (private) | `const getMessageContent = () => {` |
| 1092 | fn | getSeededMentionRouting | (private) | `const getSeededMentionRouting = () => {` |
| 1293 | fn | shouldAckReaction | (private) | `const shouldAckReaction = () =>` |

## Public API

### `prepareSlackMessage`

```
export async function prepareSlackMessage(params: {
```

**Line:** 640 | **Kind:** fn
