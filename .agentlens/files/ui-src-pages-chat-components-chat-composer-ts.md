# ui/src/pages/chat/components/chat-composer.ts

[← Back to Module](../modules/ui-src-pages-chat-components/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2913
- **Language:** TypeScript
- **Symbols:** 100
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 97 | type | ChatComposerProps | (private) | - |
| 170 | type | PendingClearedSubmittedDraft | (private) | - |
| 175 | type | ComposingDraft | (private) | - |
| 180 | type | ChatComposerState | (private) | - |
| 212 | fn | createChatComposerState | (private) | `function createChatComposerState(): ChatCompose...` |
| 246 | fn | getChatComposerState | (private) | `function getChatComposerState(paneId: string): ...` |
| 256 | fn | hasTerminalRunStatus | (private) | `function hasTerminalRunStatus(status: ChatRunUi...` |
| 260 | fn | isCurrentSessionSubmittedProgress | (private) | `function isCurrentSessionSubmittedProgress(` |
| 276 | fn | isChatRunWorking | pub | `export function isChatRunWorking(` |
| 288 | fn | composerDraftKey | (private) | `function composerDraftKey(props: Pick<ChatCompo...` |
| 292 | fn | commitComposerDraft | (private) | `function commitComposerDraft(props: ChatCompose...` |
| 299 | fn | markComposerInputIntent | (private) | `function markComposerInputIntent(state: ChatCom...` |
| 303 | fn | consumeComposerInputIntent | (private) | `function consumeComposerInputIntent(state: Chat...` |
| 311 | fn | clearPendingClearedSubmittedDraft | (private) | `function clearPendingClearedSubmittedDraft(stat...` |
| 317 | fn | isExplicitComposerInsertion | (private) | `function isExplicitComposerInsertion(event: Inp...` |
| 321 | fn | suppressStaleSubmittedDraftReplay | (private) | `function suppressStaleSubmittedDraftReplay(` |
| 341 | fn | resetChatComposerState | pub | `export function resetChatComposerState(paneId?:...` |
| 362 | fn | updateTextareaOverflow | (private) | `function updateTextareaOverflow(el: HTMLTextAre...` |
| 366 | fn | adjustTextareaHeight | (private) | `function adjustTextareaHeight(el: HTMLTextAreaE...` |
| 375 | fn | observeTextareaOverflow | (private) | `function observeTextareaOverflow(el: HTMLTextAr...` |
| 384 | fn | disconnectTextareaOverflowObserver | (private) | `function disconnectTextareaOverflowObserver(el:...` |
| 389 | fn | syncQuestionDockHeight | (private) | `function syncQuestionDockHeight(el: HTMLElement...` |
| 396 | fn | observeQuestionDock | (private) | `function observeQuestionDock(el: HTMLElement): ...` |
| 406 | fn | disconnectQuestionDock | (private) | `function disconnectQuestionDock(el: HTMLElement...` |
| 412 | fn | scheduleTextareaHeightAdjustment | (private) | `function scheduleTextareaHeightAdjustment(el: H...` |
| 422 | fn | focusComposerFromChrome | (private) | `function focusComposerFromChrome(event: MouseEv...` |
| 439 | fn | restoreHistoryCaret | (private) | `function restoreHistoryCaret(target: HTMLTextAr...` |
| 453 | fn | clearGoalElapsedTimer | (private) | `function clearGoalElapsedTimer(el: HTMLElement) {` |
| 463 | fn | createGoalElapsedRef | (private) | `function createGoalElapsedRef(goal: SessionGoal) {` |
| 486 | type | ChatGoalActions | (private) | - |
| 493 | fn | renderChatGoalActionButton | (private) | `function renderChatGoalActionButton(options: {` |
| 513 | fn | renderChatGoal | (private) | `function renderChatGoal(` |
| 530 | fn | toggleExpanded | (private) | `const toggleExpanded = () => {` |
| 606 | fn | resetSlashMenuState | (private) | `function resetSlashMenuState(state: ChatCompose...` |
| 614 | fn | hasVisibleSlashMenuState | (private) | `function hasVisibleSlashMenuState(state: ChatCo...` |
| 625 | fn | closeSlashMenuIfNeeded | (private) | `function closeSlashMenuIfNeeded(state: ChatComp...` |
| 634 | fn | requestSlashCommandRefresh | (private) | `function requestSlashCommandRefresh(` |
| 660 | fn | updateSlashMenu | (private) | `function updateSlashMenu(` |
| 720 | fn | selectSlashCommand | (private) | `function selectSlashCommand(` |
| 749 | fn | tabCompleteSlashCommand | (private) | `function tabCompleteSlashCommand(` |
| 772 | fn | selectSlashArg | (private) | `function selectSlashArg(` |
| 789 | fn | slashOptionIdSegment | (private) | `function slashOptionIdSegment(value: string): s...` |
| 798 | fn | paneDomId | (private) | `function paneDomId(paneId: string, suffix: stri...` |
| 802 | fn | getSlashCommandOptionId | (private) | `function getSlashCommandOptionId(paneId: string...` |
| 806 | fn | getSlashArgOptionId | (private) | `function getSlashArgOptionId(paneId: string, co...` |
| 813 | fn | isSlashMenuVisible | (private) | `function isSlashMenuVisible(state: ChatComposer...` |
| 823 | fn | getActiveSlashMenuOptionId | (private) | `function getActiveSlashMenuOptionId(state: Chat...` |
| 836 | fn | getActiveSlashMenuOptionLabel | (private) | `function getActiveSlashMenuOptionLabel(state: C...` |
| 853 | fn | scrollActiveSlashMenuOptionIntoView | (private) | `function scrollActiveSlashMenuOptionIntoView(st...` |
| 876 | fn | renderSlashIcon | (private) | `function renderSlashIcon(name: string) {` |
| 880 | fn | tokenEstimate | (private) | `function tokenEstimate(draft: string): string |...` |
| 887 | fn | exportMarkdown | (private) | `function exportMarkdown(props: Pick<ChatCompose...` |
| 891 | fn | renderSlashMenu | (private) | `function renderSlashMenu(` |
| 1042 | type | ChatQueueProps | (private) | - |
| 1050 | fn | sendStateLabel | (private) | `function sendStateLabel(item: ChatQueueItem): s...` |
| 1072 | fn | renderChatQueue | (private) | `function renderChatQueue(props: ChatQueueProps) {` |
| 1084 | fn | renderChatQueueItem | (private) | `function renderChatQueueItem(item: ChatQueueIte...` |
| 1160 | type | ComposerRunStatus | (private) | - |
| 1172 | fn | renderChatRunStatusIndicator | (private) | `function renderChatRunStatusIndicator(status: C...` |
| 1191 | fn | renderCompactionIndicator | (private) | `function renderCompactionIndicator(status: Comp...` |
| 1223 | fn | renderFallbackIndicator | (private) | `function renderFallbackIndicator(status: Fallba...` |
| 1259 | type | ContextNoticeOptions | (private) | - |
| 1267 | type | ProviderCostStats | (private) | - |
| 1276 | fn | readCostRecord | (private) | `function readCostRecord(value: unknown): Record...` |
| 1280 | fn | readCostValue | (private) | `function readCostValue(` |
| 1288 | fn | latestProviderCostStats | (private) | `function latestProviderCostStats(messages: unkn...` |
| 1324 | fn | parseHexRgb | (private) | `function parseHexRgb(hex: string): [number, num...` |
| 1343 | fn | getThemeNoticeColors | (private) | `function getThemeNoticeColors() {` |
| 1359 | fn | getContextNoticeViewModel | (private) | `function getContextNoticeViewModel(` |
| 1446 | fn | formatUsageWindowLabel | (private) | `function formatUsageWindowLabel(label: string):...` |
| 1463 | fn | formatBudgetAmount | (private) | `function formatBudgetAmount(amount: number, uni...` |
| 1478 | fn | renderLimitBar | (private) | `function renderLimitBar(usedPercent: number, ar...` |
| 1497 | fn | renderQuotaLimitRow | (private) | `function renderQuotaLimitRow(limit: QuotaLimitS...` |
| 1518 | fn | renderQuotaBudgetRow | (private) | `function renderQuotaBudgetRow(budget: QuotaBudg...` |
| 1536 | fn | renderQuotaGroup | (private) | `function renderQuotaGroup(` |
| 1568 | fn | renderContextNotice | (private) | `function renderContextNotice(` |
| 1616 | fn | formatStat | (private) | `const formatStat = (value: number | null) =>` |
| 1618 | fn | renderCostStat | (private) | `const renderCostStat = (label: string, value: n...` |
| 1767 | type | ChatRunControlsProps | (private) | - |
| 1798 | type | MicrophonePickerProps | (private) | - |
| 1810 | fn | renderMicrophonePicker | (private) | `function renderMicrophonePicker(props: Micropho...` |
| 1875 | fn | renderComposerVoiceButton | (private) | `function renderComposerVoiceButton(props: ChatR...` |
| 1923 | fn | renderChatPrimaryActions | (private) | `function renderChatPrimaryActions(props: ChatRu...` |
| 1943 | fn | storeDraftAndSend | (private) | `const storeDraftAndSend = () => {` |
| 2092 | fn | renderChatComposer | pub | `export function renderChatComposer(props: ChatC...` |
| 2199 | fn | selectGatewayQuestion | (private) | `const selectGatewayQuestion = (index: number) => {` |
| 2262 | fn | canSubmitDraft | (private) | `const canSubmitDraft = (draft: string) =>` |
| 2265 | fn | syncComposerDraftAfterSend | (private) | `const syncComposerDraftAfterSend = (target: HTM...` |
| 2284 | fn | handleKeyDown | (private) | `const handleKeyDown = (event: KeyboardEvent) => {` |
| 2420 | fn | syncComposerValue | (private) | `const syncComposerValue = (target: HTMLTextArea...` |
| 2426 | fn | handleBeforeInput | (private) | `const handleBeforeInput = (event: InputEvent) => {` |
| 2431 | fn | handleInput | (private) | `const handleInput = (event: InputEvent) => {` |
| 2455 | fn | handleCompositionEnd | (private) | `const handleCompositionEnd = (event: Compositio...` |
| 2462 | fn | handleBlur | (private) | `const handleBlur = (event: FocusEvent) => {` |
| 2469 | fn | handleSend | (private) | `const handleSend = () => {` |
| 2478 | fn | handleVoicePrimaryAction | (private) | `const handleVoicePrimaryAction = () => {` |
| 2490 | fn | openMicrophonePicker | (private) | `const openMicrophonePicker = () => {` |
| 2523 | fn | closeMicrophonePicker | (private) | `const closeMicrophonePicker = () => {` |
| 2530 | fn | selectMicrophone | (private) | `const selectMicrophone = (deviceId: string) => {` |
| 2600 | fn | handleDictationPointerDown | (private) | `const handleDictationPointerDown = (event: Poin...` |

## Public API

### `isChatRunWorking`

```
export function isChatRunWorking(
```

**Line:** 276 | **Kind:** fn

### `resetChatComposerState`

```
export function resetChatComposerState(paneId?: string) {
```

**Line:** 341 | **Kind:** fn

### `renderChatComposer`

```
export function renderChatComposer(props: ChatComposerProps) {
```

**Line:** 2092 | **Kind:** fn
