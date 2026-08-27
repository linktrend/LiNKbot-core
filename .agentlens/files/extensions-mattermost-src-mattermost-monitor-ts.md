# extensions/mattermost/src/mattermost/monitor.ts

[← Back to Module](../modules/extensions-mattermost-src-mattermost/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2107
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 134 | type | MonitorMattermostOpts | (private) | - |
| 145 | type | MediaKind | (private) | - |
| 147 | type | MattermostReaction | (private) | - |
| 153 | fn | normalizeInteractionSourceIps | (private) | `function normalizeInteractionSourceIps(values?:...` |
| 157 | fn | resolveRuntime | (private) | `function resolveRuntime(opts: MonitorMattermost...` |
| 169 | fn | isSystemPost | (private) | `function isSystemPost(post: MattermostPost): bo...` |
| 173 | fn | channelChatType | (private) | `function channelChatType(kind: ChatType): "dire...` |
| 183 | fn | createDisabledMattermostDraftStream | (private) | `function createDisabledMattermostDraftStream():...` |
| 184 | fn | noopAsync | (private) | `const noopAsync = async () => {};` |
| 200 | fn | buildMattermostWsUrl | (private) | `function buildMattermostWsUrl(baseUrl: string):...` |
| 209 | fn | monitorMattermostProvider | pub | `export async function monitorMattermostProvider...` |
| 542 | fn | logVerboseMessage | (private) | `const logVerboseMessage = (message: string) => {` |
| 748 | fn | handleModelPickerInteraction | (private) | `async function handleModelPickerInteraction(par...` |
| 960 | fn | handlePost | (private) | `const handlePost = async (` |
| 1145 | fn | recordPendingHistory | (private) | `const recordPendingHistory = () => {` |
| 1440 | fn | enterBlockPreviewActivity | (private) | `const enterBlockPreviewActivity = (activity: "r...` |
| 1479 | fn | resolveFinalDeliveryText | (private) | `const resolveFinalDeliveryText = (text?: string...` |
| 1487 | fn | resolvePreviewFinalText | (private) | `const resolvePreviewFinalText = (text?: string)...` |
| 1514 | fn | updateDraftFromPartial | (private) | `const updateDraftFromPartial = (text?: string) ...` |
| 1569 | fn | markThreadParticipation | (private) | `const markThreadParticipation = () => {` |
| 1842 | fn | handleReactionEvent | (private) | `const handleReactionEvent = async (payload: Mat...` |
| 2058 | fn | runAbortCleanup | (private) | `const runAbortCleanup = () => {` |

## Public API

### `monitorMattermostProvider`

```
export async function monitorMattermostProvider(opts: MonitorMattermostOpts = {}): Promise<void> {
```

**Line:** 209 | **Kind:** fn
