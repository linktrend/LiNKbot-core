# extensions/telegram/src/bot-native-commands.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1972
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 122 | type | TelegramNativeCommandContext | (private) | - |
| 123 | type | TelegramChunkMode | (private) | - |
| 126 | type | TelegramNativeReplyPayload | (private) | - |
| 127 | type | TelegramNativeReplyChannelData | (private) | - |
| 134 | type | FastModeState | (private) | - |
| 135 | type | TelegramResolvedGroupConfig | (private) | - |
| 140 | type | TelegramCommandAuthResult | (private) | - |
| 153 | type | TelegramNativeCommandThreadContext | (private) | - |
| 162 | fn | resolveTelegramCodexLoginProviderInput | (private) | `function resolveTelegramCodexLoginProviderInput...` |
| 169 | fn | buildTelegramCodexLoginFlowKey | (private) | `function buildTelegramCodexLoginFlowKey(params: {` |
| 190 | type | TelegramCommandMenuModelContext | (private) | - |
| 198 | fn | buildTelegramCommandMenuModelContext | (private) | `function buildTelegramCommandMenuModelContext(p...` |
| 220 | type | TelegramNativeCommandRuntime | (private) | - |
| 222 | fn | resolveTelegramCommandSessionFile | (private) | `function resolveTelegramCommandSessionFile(para...` |
| 240 | fn | resolveTelegramProgressPlaceholder | (private) | `function resolveTelegramProgressPlaceholder(com...` |
| 249 | fn | resolveTelegramCommandTranscriptContext | (private) | `async function resolveTelegramCommandTranscript...` |
| 284 | fn | resolveTelegramCommandMenuModelContext | (private) | `function resolveTelegramCommandMenuModelContext...` |
| 353 | fn | resolveTelegramFastCommandModelContext | (private) | `function resolveTelegramFastCommandModelContext...` |
| 365 | fn | fallback | (private) | `const fallback = () => ({` |
| 393 | fn | resolveTelegramFastCommandState | (private) | `function resolveTelegramFastCommandState(params: {` |
| 402 | fn | fallback | (private) | `const fallback = () =>` |
| 433 | fn | resolveTelegramThinkMenuCurrentLevel | (private) | `async function resolveTelegramThinkMenuCurrentL...` |
| 465 | fn | formatTelegramCommandArgMenuTitle | (private) | `function formatTelegramCommandArgMenuTitle(para...` |
| 487 | fn | resolveTelegramFastMenuCurrentStatus | (private) | `function resolveTelegramFastMenuCurrentStatus(p...` |
| 495 | fn | resolveTelegramNativeReplyChannelData | (private) | `function resolveTelegramNativeReplyChannelData(` |
| 501 | fn | normalizeTelegramNativeReplyPayload | (private) | `function normalizeTelegramNativeReplyPayload(` |
| 507 | fn | isSuppressedTelegramNativeReplyPayload | (private) | `function isSuppressedTelegramNativeReplyPayload...` |
| 511 | fn | hasTelegramNativeReplyReaction | (private) | `function hasTelegramNativeReplyReaction(result:...` |
| 516 | fn | hasRenderableTelegramNativeReplyPayload | (private) | `function hasRenderableTelegramNativeReplyPayloa...` |
| 527 | fn | isEditableTelegramProgressResult | (private) | `function isEditableTelegramProgressResult(resul...` |
| 542 | fn | cleanupTelegramProgressPlaceholder | (private) | `async function cleanupTelegramProgressPlacehold...` |
| 563 | fn | resolveTelegramNativeCommandThreadContext | (private) | `async function resolveTelegramNativeCommandThre...` |
| 598 | type | RegisterTelegramHandlerParams | pub | - |
| 636 | fn | resolveTelegramNativeCommandDisableBlockStreaming | (private) | `function resolveTelegramNativeCommandDisableBlo...` |
| 643 | type | RegisterTelegramNativeCommandsParams | (private) | - |
| 664 | fn | resolveTelegramCommandAuth | (private) | `async function resolveTelegramCommandAuth(param...` |
| 772 | fn | sendAuthMessage | (private) | `const sendAuthMessage = async (text: string) => {` |
| 779 | fn | rejectNotAuthorized | (private) | `const rejectNotAuthorized = async () => {` |
| 883 | fn | registerTelegramNativeCommands | pub | `export const registerTelegramNativeCommands = ({` |
| 919 | fn | resolveTelegramMenuCommandCatalog | (private) | `const resolveTelegramMenuCommandCatalog = (` |
| 1126 | fn | buildCommandDeliveryBaseOptions | (private) | `const buildCommandDeliveryBaseOptions = (params: {` |
| 1270 | fn | sendLoginMessage | (private) | `const sendLoginMessage = async (text: string) => {` |
| 1440 | fn | resolveNativeCommandRuntime | (private) | `const resolveNativeCommandRuntime = async () => {` |

## Public API

### `registerTelegramNativeCommands`

```
export const registerTelegramNativeCommands = ({
```

**Line:** 883 | **Kind:** fn
