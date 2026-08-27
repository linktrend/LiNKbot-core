# extensions/workboard/src/tools.ts

[← Back to Module](../modules/extensions-workboard-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1054
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | fn | contextOwner | (private) | `function contextOwner(ctx: OpenClawPluginToolCo...` |
| 21 | fn | canMutateCard | (private) | `function canMutateCard(card: WorkboardCard, own...` |
| 26 | fn | readParentIds | (private) | `function readParentIds(value: unknown): string[] {` |
| 55 | fn | requireScopedCard | (private) | `async function requireScopedCard(` |
| 71 | fn | requireClaimedCard | (private) | `async function requireClaimedCard(` |
| 84 | fn | summarizeCard | (private) | `function summarizeCard(card: WorkboardCard) {` |
| 113 | fn | redactClaimToken | (private) | `function redactClaimToken(card: WorkboardCard):...` |
| 130 | type | WorkboardToolCardParams | (private) | - |
| 136 | type | WorkboardToolCardParamsReader | (private) | - |
| 137 | type | WorkboardCardMutation | (private) | - |
| 151 | fn | readCardToolParams | (private) | `function readCardToolParams(rawParams: unknown,...` |
| 163 | fn | redactedCardResult | (private) | `function redactedCardResult(card: WorkboardCard) {` |
| 167 | fn | redactedRawCardResult | (private) | `function redactedRawCardResult(card: WorkboardC...` |
| 171 | fn | redactedProofResult | (private) | `function redactedProofResult(card: WorkboardCar...` |
| 190 | fn | createWorkboardTools | pub | `export function createWorkboardTools(params: {` |
| 209 | fn | runCardMutation | (private) | `const runCardMutation = async (` |
| 217 | fn | runScopedCardMutation | (private) | `const runScopedCardMutation = (rawParams: unkno...` |
| 219 | fn | runClaimedCardMutation | (private) | `const runClaimedCardMutation = (rawParams: unkn...` |

## Public API

### `createWorkboardTools`

```
export function createWorkboardTools(params: {
```

**Line:** 190 | **Kind:** fn
