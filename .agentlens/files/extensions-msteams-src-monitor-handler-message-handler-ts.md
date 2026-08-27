# extensions/msteams/src/monitor-handler/message-handler.ts

[← Back to Module](../modules/extensions-msteams-src-monitor-handler/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1196
- **Language:** TypeScript
- **Symbols:** 11
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | fn | extractTextFromHtmlAttachments | (private) | `function extractTextFromHtmlAttachments(attachm...` |
| 103 | fn | formatMSTeamsSenderReason | (private) | `function formatMSTeamsSenderReason(params: {` |
| 135 | fn | buildStoredConversationReference | (private) | `function buildStoredConversationReference(param...` |
| 178 | fn | createMSTeamsMessageHandler | pub | `export function createMSTeamsMessageHandler(dep...` |
| 192 | fn | logVerboseMessage | (private) | `const logVerboseMessage = (message: string) => {` |
| 214 | type | MSTeamsDebounceEntry | (private) | - |
| 224 | fn | handleTeamsMessageNow | (private) | `const handleTeamsMessageNow = async (params: MS...` |
| 517 | fn | enqueuePrimaryMessageSystemEvent | (private) | `const enqueuePrimaryMessageSystemEvent = () =>` |
| 736 | fn | isThreadSenderAllowed | (private) | `const isThreadSenderAllowed = (msg: GraphThread...` |
| 1034 | fn | buildFlushIngressLifecycle | (private) | `function buildFlushIngressLifecycle(entries: MS...` |
| 1046 | fn | adoptAll | (private) | `const adoptAll = async () => {` |

## Public API

### `createMSTeamsMessageHandler`

```
export function createMSTeamsMessageHandler(deps: MSTeamsMessageHandlerDeps) {
```

**Line:** 178 | **Kind:** fn
