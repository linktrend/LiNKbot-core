# src/interactive/payload.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1056
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 53

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | type | InteractiveButtonStyle | pub | - |
| 12 | type | MessagePresentationTone | pub | - |
| 15 | type | MessagePresentationButtonStyle | pub | - |
| 18 | type | MessagePresentationAction | pub | - |
| 65 | type | MessagePresentationButton | pub | - |
| 99 | type | MessagePresentationOption | pub | - |
| 108 | fn | resolveMessagePresentationActionValue | pub | `export function resolveMessagePresentationActio...` |
| 120 | fn | resolveMessagePresentationControlValue | pub | `export function resolveMessagePresentationContr...` |
| 132 | fn | resolveMessagePresentationButtonAction | pub | `export function resolveMessagePresentationButto...` |
| 149 | fn | resolveMessagePresentationOptionAction | pub | `export function resolveMessagePresentationOptio...` |
| 159 | type | LegacyInteractiveReplyButton | pub | - |
| 162 | type | InteractiveReplyButton | pub | - |
| 164 | type | LegacyInteractiveReplyOption | pub | - |
| 167 | type | InteractiveReplyOption | pub | - |
| 169 | type | LegacyInteractiveReplyTextBlock | pub | - |
| 175 | type | InteractiveReplyTextBlock | pub | - |
| 177 | type | LegacyInteractiveReplySelectBlock | pub | - |
| 184 | type | InteractiveReplySelectBlock | pub | - |
| 186 | type | LegacyInteractiveReplyBlock | pub | - |
| 192 | type | InteractiveReplyBlock | pub | - |
| 194 | type | LegacyInteractiveReply | pub | - |
| 198 | fn | reduceLegacyInteractiveReply | pub | `export function reduceLegacyInteractiveReply<TS...` |
| 211 | type | InteractiveReply | pub | - |
| 213 | type | MessagePresentationTextBlock | pub | - |
| 219 | type | MessagePresentationContextBlock | pub | - |
| 225 | type | MessagePresentationDividerBlock | pub | - |
| 229 | type | MessagePresentationButtonsBlock | pub | - |
| 235 | type | MessagePresentationSelectBlock | pub | - |
| 243 | type | MessagePresentationChartSegment | pub | - |
| 250 | type | MessagePresentationChartSeries | pub | - |
| 257 | type | MessagePresentationChartBlock | pub | - |
| 278 | type | MessagePresentationTableCell | pub | - |
| 281 | type | MessagePresentationTableBlock | pub | - |
| 293 | type | MessagePresentationInteractiveBlock | pub | - |
| 297 | type | MessagePresentationBlock | pub | - |
| 306 | type | MessagePresentation | pub | - |
| 315 | type | ReplyPayloadDeliveryPin | pub | - |
| 321 | type | ReplyPayloadDelivery | pub | - |
| 325 | fn | normalizeButtonStyle | (private) | `function normalizeButtonStyle(value: unknown): ...` |
| 332 | fn | normalizePresentationTone | (private) | `function normalizePresentationTone(value: unkno...` |
| 343 | fn | normalizePresentationAction | (private) | `function normalizePresentationAction(raw: unkno...` |
| 405 | fn | normalizeButton | (private) | `function normalizeButton(raw: unknown): Interac...` |
| 444 | fn | normalizeOption | (private) | `function normalizeOption(raw: unknown): Interac...` |
| 463 | fn | normalizeList | (private) | `function normalizeList<T>(value: unknown, norma...` |
| 469 | fn | normalizeInteractiveBlock | (private) | `function normalizeInteractiveBlock(raw: unknown...` |
| 496 | fn | normalizeChartSegments | (private) | `function normalizeChartSegments(value: unknown)...` |
| 515 | fn | normalizeChartCategories | (private) | `function normalizeChartCategories(value: unknow...` |
| 527 | fn | normalizeChartSeries | (private) | `function normalizeChartSeries(params: {` |
| 557 | fn | normalizeChartBlock | (private) | `function normalizeChartBlock(` |
| 593 | fn | normalizeTableBlock | (private) | `function normalizeTableBlock(` |
| 645 | fn | normalizeLegacyInteractiveReply | pub | `export function normalizeLegacyInteractiveReply...` |
| 657 | fn | normalizePresentationBlock | (private) | `function normalizePresentationBlock(raw: unknow...` |
| 693 | fn | normalizeMessagePresentation | pub | `export function normalizeMessagePresentation(ra...` |
| 715 | fn | hasLegacyInteractiveReplyBlocks | pub | `export function hasLegacyInteractiveReplyBlocks...` |
| 719 | fn | hasMessagePresentationBlocks | pub | `export function hasMessagePresentationBlocks(va...` |
| 726 | fn | presentationToInteractiveReply | pub | `export function presentationToInteractiveReply(` |
| 820 | fn | isMessagePresentationInteractiveBlock | pub | `export function isMessagePresentationInteractiv...` |
| 829 | fn | presentationToInteractiveControlsReply | pub | `export function presentationToInteractiveContro...` |
| 837 | fn | legacyInteractiveReplyToPresentation | pub | `export function legacyInteractiveReplyToPresent...` |
| 876 | fn | renderMessagePresentationChartFallbackText | pub | `export function renderMessagePresentationChartF...` |
| 901 | fn | renderTableFallbackValue | (private) | `function renderTableFallbackValue(value: Messag...` |
| 905 | fn | renderMessagePresentationTableFallbackText | pub | `export function renderMessagePresentationTableF...` |
| 921 | fn | renderMessagePresentationFallbackText | pub | `export function renderMessagePresentationFallba...` |
| 984 | fn | hasReplyChannelData | pub | `export function hasReplyChannelData(value: unkn...` |
| 990 | fn | hasReplyContent | pub | `export function hasReplyContent(params: {` |
| 1012 | fn | hasReplyPayloadContent | pub | `export function hasReplyPayloadContent(` |
| 1039 | fn | resolveLegacyInteractiveTextFallback | pub | `export function resolveLegacyInteractiveTextFal...` |

## Public API

### `resolveMessagePresentationActionValue`

```
export function resolveMessagePresentationActionValue(
```

**Line:** 108 | **Kind:** fn

### `resolveMessagePresentationControlValue`

```
export function resolveMessagePresentationControlValue(control: {
```

**Line:** 120 | **Kind:** fn

### `resolveMessagePresentationButtonAction`

```
export function resolveMessagePresentationButtonAction(
```

**Line:** 132 | **Kind:** fn

### `resolveMessagePresentationOptionAction`

```
export function resolveMessagePresentationOptionAction(
```

**Line:** 149 | **Kind:** fn

### `reduceLegacyInteractiveReply`

```
export function reduceLegacyInteractiveReply<TState>(
```

**Line:** 198 | **Kind:** fn

### `normalizeLegacyInteractiveReply`

```
export function normalizeLegacyInteractiveReply(raw: unknown): LegacyInteractiveReply | undefined {
```

**Line:** 645 | **Kind:** fn

### `normalizeMessagePresentation`

```
export function normalizeMessagePresentation(raw: unknown): MessagePresentation | undefined {
```

**Line:** 693 | **Kind:** fn

### `hasLegacyInteractiveReplyBlocks`

```
export function hasLegacyInteractiveReplyBlocks(value: unknown): value is LegacyInteractiveReply {
```

**Line:** 715 | **Kind:** fn

### `hasMessagePresentationBlocks`

```
export function hasMessagePresentationBlocks(value: unknown): value is MessagePresentation {
```

**Line:** 719 | **Kind:** fn

### `presentationToInteractiveReply`

```
export function presentationToInteractiveReply(
```

**Line:** 726 | **Kind:** fn

### `isMessagePresentationInteractiveBlock`

```
export function isMessagePresentationInteractiveBlock(
```

**Line:** 820 | **Kind:** fn

### `presentationToInteractiveControlsReply`

```
export function presentationToInteractiveControlsReply(
```

**Line:** 829 | **Kind:** fn

### `legacyInteractiveReplyToPresentation`

```
export function legacyInteractiveReplyToPresentation(
```

**Line:** 837 | **Kind:** fn

### `renderMessagePresentationChartFallbackText`

```
export function renderMessagePresentationChartFallbackText(
```

**Line:** 876 | **Kind:** fn

### `renderMessagePresentationTableFallbackText`

```
export function renderMessagePresentationTableFallbackText(
```

**Line:** 905 | **Kind:** fn

### `renderMessagePresentationFallbackText`

```
export function renderMessagePresentationFallbackText(params: {
```

**Line:** 921 | **Kind:** fn

### `hasReplyChannelData`

```
export function hasReplyChannelData(value: unknown): value is Record<string, unknown> {
```

**Line:** 984 | **Kind:** fn

### `hasReplyContent`

```
export function hasReplyContent(params: {
```

**Line:** 990 | **Kind:** fn

### `hasReplyPayloadContent`

```
export function hasReplyPayloadContent(
```

**Line:** 1012 | **Kind:** fn

### `resolveLegacyInteractiveTextFallback`

```
export function resolveLegacyInteractiveTextFallback(params: {
```

**Line:** 1039 | **Kind:** fn
