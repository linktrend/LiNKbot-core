# extensions/slack/src/monitor/events/interactions.block-actions.ts

[← Back to Module](../modules/extensions-slack-src-monitor-events/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1177
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | InteractionMessageBlock | (private) | - |
| 52 | type | SelectOption | (private) | - |
| 57 | type | InteractionSelectionFields | (private) | - |
| 86 | type | InteractionSummary | (private) | - |
| 100 | type | SlackActionSummary | (private) | - |
| 102 | type | SlackBlockActionBody | (private) | - |
| 112 | type | SlackBlockActionRespond | (private) | - |
| 114 | type | ParsedSlackBlockAction | (private) | - |
| 132 | fn | readOptionValues | (private) | `function readOptionValues(options: unknown): st...` |
| 142 | fn | readOptionLabels | (private) | `function readOptionLabels(options: unknown): st...` |
| 154 | fn | uniqueNonEmptyStrings | (private) | `function uniqueNonEmptyStrings(values: string[]...` |
| 158 | fn | collectRichTextFragments | (private) | `function collectRichTextFragments(value: unknow...` |
| 173 | fn | summarizeRichTextPreview | (private) | `function summarizeRichTextPreview(value: unknow...` |
| 187 | fn | readInteractionAction | (private) | `function readInteractionAction(raw: unknown) {` |
| 194 | fn | summarizeAction | pub | `export function summarizeAction(action: Record<...` |
| 294 | fn | formatInteractionSelectionLabel | (private) | `function formatInteractionSelectionLabel(params: {` |
| 339 | fn | formatInteractionConfirmationText | (private) | `function formatInteractionConfirmationText(para...` |
| 348 | fn | buildSlackPluginInteractionData | (private) | `function buildSlackPluginInteractionData(params: {` |
| 372 | fn | isSlackReplyActionId | (private) | `function isSlackReplyActionId(actionId: string)...` |
| 381 | fn | readSlackApprovalAction | (private) | `function readSlackApprovalAction(parsed: Parsed...` |
| 390 | fn | isSlackReplyLinkAction | (private) | `function isSlackReplyLinkAction(parsed: ParsedS...` |
| 401 | fn | buildSlackPluginInteractionId | (private) | `function buildSlackPluginInteractionId(params: {` |
| 423 | fn | parseSlackBlockAction | (private) | `function parseSlackBlockAction(params: {` |
| 459 | fn | respondEphemeral | (private) | `async function respondEphemeral(` |
| 476 | fn | updateSlackInteractionMessage | (private) | `async function updateSlackInteractionMessage(pa...` |
| 494 | type | SlackApprovalTerminalState | (private) | - |
| 499 | fn | resolveSlackApprovalTerminalLabel | (private) | `function resolveSlackApprovalTerminalLabel(appr...` |
| 512 | fn | removeSlackApprovalControls | (private) | `function removeSlackApprovalControls(blocks: un...` |
| 529 | fn | buildSlackApprovalTerminalBlocks | (private) | `function buildSlackApprovalTerminalBlocks(param...` |
| 551 | fn | authorizeSlackBlockAction | (private) | `async function authorizeSlackBlockAction(params: {` |
| 582 | fn | handleSlackPluginBindingApproval | (private) | `async function handleSlackPluginBindingApproval...` |
| 612 | fn | handleSlackApprovalInteraction | (private) | `async function handleSlackApprovalInteraction(p...` |
| 698 | fn | handleSlackLegacyApprovalInteraction | (private) | `async function handleSlackLegacyApprovalInterac...` |
| 768 | fn | dispatchSlackPluginInteraction | (private) | `async function dispatchSlackPluginInteraction(p...` |
| 852 | fn | resolveSlackBlockActionCommandAuthorized | (private) | `async function resolveSlackBlockActionCommandAu...` |
| 915 | fn | enqueueSlackBlockActionEvent | (private) | `function enqueueSlackBlockActionEvent(params: {` |
| 975 | fn | buildSlackConfirmationBlocks | (private) | `function buildSlackConfirmationBlocks(params: {` |
| 1004 | fn | updateSlackLegacyBlockAction | (private) | `async function updateSlackLegacyBlockAction(par...` |
| 1034 | fn | handleSlackBlockAction | (private) | `async function handleSlackBlockAction(params: {` |
| 1160 | fn | registerSlackBlockActionHandler | pub | `export function registerSlackBlockActionHandler...` |

## Public API

### `summarizeAction`

```
export function summarizeAction(action: Record<string, unknown>): SlackActionSummary {
```

**Line:** 194 | **Kind:** fn

### `registerSlackBlockActionHandler`

```
export function registerSlackBlockActionHandler(params: {
```

**Line:** 1160 | **Kind:** fn
