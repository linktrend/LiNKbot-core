# extensions/discord/src/monitor/model-picker.view.ts

[← Back to Module](../modules/extensions-discord-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1015
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | DiscordModelPickerButtonOptions | (private) | - |
| 43 | type | DiscordModelPickerCurrentModelRef | (private) | - |
| 48 | type | DiscordModelPickerRow | (private) | - |
| 49 | type | CompactRuntimeState | (private) | - |
| 54 | type | DiscordModelPickerRenderShellParams | (private) | - |
| 66 | type | DiscordModelPickerRenderedView | (private) | - |
| 72 | type | DiscordModelPickerProviderViewParams | (private) | - |
| 82 | type | DiscordModelPickerModelViewParams | (private) | - |
| 100 | fn | parseCurrentModelRef | (private) | `function parseCurrentModelRef(raw?: string): Di...` |
| 120 | fn | formatCurrentModelLine | (private) | `function formatCurrentModelLine(currentModel?: ...` |
| 128 | fn | createModelPickerButton | (private) | `function createModelPickerButton(params: Discor...` |
| 129 | class | DiscordModelPickerButton | (private) | - |
| 138 | fn | createModelSelect | (private) | `function createModelSelect(params: {` |
| 144 | class | DiscordModelPickerSelect | (private) | - |
| 163 | fn | buildBucketSelectRow | (private) | `function buildBucketSelectRow(params: {` |
| 213 | fn | getRuntimeChoices | (private) | `function getRuntimeChoices(params: {` |
| 230 | fn | resolveSelectedRuntime | (private) | `function resolveSelectedRuntime(params: {` |
| 249 | fn | resolveExplicitRuntimeState | (private) | `function resolveExplicitRuntimeState(params: {` |
| 266 | fn | getActiveBucketId | (private) | `function getActiveBucketId(` |
| 272 | fn | resolveCompactRuntimeState | (private) | `function resolveCompactRuntimeState(params: {` |
| 287 | fn | buildRenderedShell | (private) | `function buildRenderedShell(` |
| 326 | fn | buildProviderSelectRow | (private) | `function buildProviderSelectRow(params: {` |
| 359 | fn | buildPaginationRow | (private) | `function buildPaginationRow(params: {` |
| 428 | fn | buildModelRows | (private) | `function buildModelRows(params: {` |
| 704 | fn | renderDiscordModelPickerProvidersView | pub | `export function renderDiscordModelPickerProvide...` |
| 772 | fn | renderDiscordModelPickerModelsView | pub | `export function renderDiscordModelPickerModelsV...` |
| 880 | type | DiscordModelPickerRecentsViewParams | (private) | - |
| 895 | fn | formatRecentsButtonLabel | (private) | `function formatRecentsButtonLabel(modelRef: str...` |
| 907 | fn | createModelRefToken | (private) | `function createModelRefToken(modelRef: string):...` |
| 912 | fn | renderDiscordModelPickerRecentsView | pub | `export function renderDiscordModelPickerRecents...` |
| 1002 | fn | toDiscordModelPickerMessagePayload | pub | `export function toDiscordModelPickerMessagePayl...` |

## Public API

### `renderDiscordModelPickerProvidersView`

```
export function renderDiscordModelPickerProvidersView(
```

**Line:** 704 | **Kind:** fn

### `renderDiscordModelPickerModelsView`

```
export function renderDiscordModelPickerModelsView(
```

**Line:** 772 | **Kind:** fn

### `renderDiscordModelPickerRecentsView`

```
export function renderDiscordModelPickerRecentsView(
```

**Line:** 912 | **Kind:** fn

### `toDiscordModelPickerMessagePayload`

```
export function toDiscordModelPickerMessagePayload(
```

**Line:** 1002 | **Kind:** fn
