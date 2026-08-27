# extensions/msteams/src/channel.ts

[← Back to Module](../modules/extensions-msteams-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1346
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 70 | type | ResolvedMSTeamsAccount | (private) | - |
| 121 | fn | resolveMSTeamsChannelConfig | (private) | `const resolveMSTeamsChannelConfig = (cfg: OpenC...` |
| 145 | fn | jsonActionResult | (private) | `function jsonActionResult(data: Record<string, ...` |
| 153 | fn | jsonMSTeamsActionResult | (private) | `function jsonMSTeamsActionResult(action: string...` |
| 157 | fn | jsonMSTeamsOkActionResult | (private) | `function jsonMSTeamsOkActionResult(action: stri...` |
| 161 | fn | jsonMSTeamsConversationResult | (private) | `function jsonMSTeamsConversationResult(conversa...` |
| 172 | fn | jsonActionResultWithDetails | (private) | `function jsonActionResultWithDetails(` |
| 184 | fn | actionError | (private) | `function actionError(message: string) {` |
| 192 | fn | requireMSTeamsGroupManagementAuthorization | (private) | `function requireMSTeamsGroupManagementAuthoriza...` |
| 204 | fn | resolveActionTarget | (private) | `function resolveActionTarget(` |
| 215 | fn | resolveGraphActionTarget | (private) | `function resolveGraphActionTarget(` |
| 243 | fn | resolveCurrentGraphActionTarget | (private) | `function resolveCurrentGraphActionTarget(toolCo...` |
| 253 | fn | resolveActionMessageId | (private) | `function resolveActionMessageId(params: Record<...` |
| 257 | fn | resolveActionPinnedMessageId | (private) | `function resolveActionPinnedMessageId(params: R...` |
| 265 | fn | resolveActionQuery | (private) | `function resolveActionQuery(params: Record<stri...` |
| 269 | fn | resolveActionContent | (private) | `function resolveActionContent(params: Record<st...` |
| 279 | fn | readOptionalTrimmedString | (private) | `function readOptionalTrimmedString(` |
| 286 | fn | resolveActionUploadFilePath | (private) | `function resolveActionUploadFilePath(params: Re...` |
| 298 | fn | resolveRequiredActionTarget | (private) | `function resolveRequiredActionTarget(params: {` |
| 320 | fn | resolveRequiredActionMessageTarget | (private) | `function resolveRequiredActionMessageTarget(par...` |
| 343 | fn | resolveRequiredActionPinnedMessageTarget | (private) | `function resolveRequiredActionPinnedMessageTarg...` |
| 366 | fn | runWithRequiredActionTarget | (private) | `async function runWithRequiredActionTarget<T>(p...` |
| 389 | fn | runWithRequiredActionMessageTarget | (private) | `async function runWithRequiredActionMessageTarg...` |
| 412 | fn | runWithRequiredActionPinnedMessageTarget | (private) | `async function runWithRequiredActionPinnedMessa...` |
| 435 | fn | describeMSTeamsMessageTool | (private) | `function describeMSTeamsMessageTool({` |
| 638 | type | ResolveTargetResultEntry | (private) | - |
| 639 | type | PendingTargetEntry | (private) | - |
| 641 | fn | stripPrefix | (private) | `const stripPrefix = (value: string) => normaliz...` |
| 642 | fn | markPendingLookupFailed | (private) | `const markPendingLookupFailed = (pending: Pendi...` |
| 1263 | fn | formatPermission | (private) | `const formatPermission = (permission: string) => {` |
