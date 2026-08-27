# extensions/feishu/src/bot.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1891
- **Language:** TypeScript
- **Symbols:** 15
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 104 | fn | shouldSendNoVisibleReplyFallback | (private) | `function shouldSendNoVisibleReplyFallback(dispa...` |
| 126 | fn | isFeishuTopicSessionScope | (private) | `function isFeishuTopicSessionScope(` |
| 132 | fn | resolveFeishuAudioPreflightTranscript | (private) | `async function resolveFeishuAudioPreflightTrans...` |
| 167 | fn | parseFeishuMessageEvent | pub | `export function parseFeishuMessageEvent(` |
| 218 | fn | shouldIncludeFetchedGroupContextMessage | (private) | `async function shouldIncludeFetchedGroupContext...` |
| 252 | fn | filterFetchedGroupContextMessages | (private) | `async function filterFetchedGroupContextMessages<` |
| 286 | fn | handleFeishuMessage | pub | `export async function handleFeishuMessage(param...` |
| 732 | fn | rejectDirectAuthorization | (private) | `const rejectDirectAuthorization = async (` |
| 1189 | fn | getRootMessageInfo | (private) | `const getRootMessageInfo = async () => {` |
| 1241 | fn | resolveThreadContextForAgent | (private) | `const resolveThreadContextForAgent = async (` |
| 1317 | fn | relevantMessages | (private) | `const relevantMessages =` |
| 1357 | fn | buildCtxPayloadForAgent | (private) | `const buildCtxPayloadForAgent = async (` |
| 1470 | fn | buildFeishuInboundLastRouteUpdate | (private) | `const buildFeishuInboundLastRouteUpdate = (para...` |
| 1536 | fn | abandonBroadcast | (private) | `const abandonBroadcast = async (err: unknown) => {` |
| 1560 | fn | dispatchForAgent | (private) | `const dispatchForAgent = async (agentId: string...` |

## Public API

### `parseFeishuMessageEvent`

```
export function parseFeishuMessageEvent(
```

**Line:** 167 | **Kind:** fn

### `handleFeishuMessage`

```
export async function handleFeishuMessage(params: {
```

**Line:** 286 | **Kind:** fn
