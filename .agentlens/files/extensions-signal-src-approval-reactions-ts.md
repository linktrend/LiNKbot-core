# extensions/signal/src/approval-reactions.ts

[← Back to Module](../modules/extensions-signal/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1001
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | type | SignalApprovalReactionBinding | (private) | - |
| 39 | type | SignalApprovalReactionResolution | (private) | - |
| 46 | type | ApprovalKind | (private) | - |
| 47 | type | ApprovalForwardingConfig | (private) | - |
| 48 | type | ApprovalForwardingMode | (private) | - |
| 50 | type | SignalApprovalReactionRoute | (private) | - |
| 64 | type | SignalApprovalReactionTarget | (private) | - |
| 70 | type | SignalApprovalDeliveryTarget | (private) | - |
| 76 | type | SignalApprovalDeliveryResult | (private) | - |
| 97 | fn | resolveApprovalForwardingConfig | (private) | `function resolveApprovalForwardingConfig(params: {` |
| 106 | fn | normalizeApprovalForwardingMode | (private) | `function normalizeApprovalForwardingMode(` |
| 112 | fn | approvalModeIncludesSession | (private) | `function approvalModeIncludesSession(mode: Appr...` |
| 116 | fn | approvalModeIncludesTargets | (private) | `function approvalModeIncludesTargets(mode: Appr...` |
| 120 | fn | matchesSignalApprovalReactionFilters | (private) | `function matchesSignalApprovalReactionFilters(p...` |
| 135 | fn | targetAccountMatches | (private) | `function targetAccountMatches(params: {` |
| 150 | fn | resolveSignalApprovalRouteTarget | (private) | `function resolveSignalApprovalRouteTarget(param...` |
| 170 | fn | hasMatchingSignalApprovalReactionTarget | (private) | `function hasMatchingSignalApprovalReactionTarge...` |
| 194 | fn | isSignalApprovalReactionRouteStillEnabled | (private) | `function isSignalApprovalReactionRouteStillEnab...` |
| 223 | fn | resolveSignalApprovalConversationKey | pub | `export function resolveSignalApprovalConversati...` |
| 227 | fn | resolveSignalApprovalConversationKeyForDeliveredTarget | (private) | `function resolveSignalApprovalConversationKeyFo...` |
| 245 | fn | normalizeSignalApprovalTargetAuthorKey | (private) | `function normalizeSignalApprovalTargetAuthorKey...` |
| 262 | fn | resolveSignalApprovalTargetAuthorKeys | pub | `export function resolveSignalApprovalTargetAuth...` |
| 279 | fn | buildReactionTargetKey | (private) | `function buildReactionTargetKey(params: {` |
| 293 | fn | reportPersistentApprovalReactionError | (private) | `function reportPersistentApprovalReactionError(...` |
| 303 | fn | readPersistedTarget | (private) | `function readPersistedTarget(target: unknown): ...` |
| 352 | fn | listSignalApprovalReactionBindings | (private) | `function listSignalApprovalReactionBindings(` |
| 358 | fn | buildSignalApprovalReactionHint | pub | `export function buildSignalApprovalReactionHint(` |
| 364 | fn | addSignalApprovalReactionHintToText | pub | `export function addSignalApprovalReactionHintTo...` |
| 371 | fn | resolveStandaloneApprovalPromptKind | (private) | `function resolveStandaloneApprovalPromptKind(te...` |
| 385 | fn | isStandaloneApprovalPromptText | (private) | `function isStandaloneApprovalPromptText(text: s...` |
| 389 | fn | normalizeApprovalDecision | (private) | `function normalizeApprovalDecision(value: strin...` |
| 404 | fn | extractSignalApprovalPromptBinding | (private) | `function extractSignalApprovalPromptBinding(tex...` |
| 442 | fn | buildTargetRoute | (private) | `function buildTargetRoute(params: {` |
| 483 | fn | shouldAppendSignalApprovalReactionHintForOutboundMessage | (private) | `function shouldAppendSignalApprovalReactionHint...` |
| 516 | fn | appendSignalApprovalReactionHintForOutboundMessage | pub | `export function appendSignalApprovalReactionHin...` |
| 545 | fn | hasSignalApprovalReactionApprovers | pub | `export function hasSignalApprovalReactionApprov...` |
| 552 | fn | registerSignalApprovalReactionTarget | pub | `export function registerSignalApprovalReactionT...` |
| 623 | fn | formatSignalApprovalTerminalTruth | (private) | `function formatSignalApprovalTerminalTruth(appr...` |
| 628 | fn | addSignalApprovalReactionHintToStructuredPayload | pub | `export function addSignalApprovalReactionHintTo...` |
| 667 | fn | readSignalDeliveryVisibleText | (private) | `function readSignalDeliveryVisibleText(result: ...` |
| 672 | fn | listDeliveredSignalMessageIdsWithVisibleHint | (private) | `function listDeliveredSignalMessageIdsWithVisib...` |
| 697 | fn | registerSignalApprovalReactionTargetForDeliveredPayload | pub | `export function registerSignalApprovalReactionT...` |
| 769 | fn | registerSignalApprovalReactionTargetForOutboundMessage | pub | `export function registerSignalApprovalReactionT...` |
| 827 | fn | unregisterSignalApprovalReactionTarget | pub | `export function unregisterSignalApprovalReactio...` |
| 839 | fn | resolveTarget | (private) | `function resolveTarget(params: {` |
| 869 | fn | resolveSignalApprovalReactionTargetWithPersistence | pub | `export async function resolveSignalApprovalReac...` |
| 892 | fn | maybeResolveSignalApprovalReaction | pub | `export async function maybeResolveSignalApprova...` |
| 997 | fn | clearSignalApprovalReactionTargetsForTest | pub | `export function clearSignalApprovalReactionTarg...` |

## Public API

### `resolveSignalApprovalConversationKey`

```
export function resolveSignalApprovalConversationKey(to: string): string | null {
```

**Line:** 223 | **Kind:** fn

### `resolveSignalApprovalTargetAuthorKeys`

```
export function resolveSignalApprovalTargetAuthorKeys(params: {
```

**Line:** 262 | **Kind:** fn

### `buildSignalApprovalReactionHint`

```
export function buildSignalApprovalReactionHint(
```

**Line:** 358 | **Kind:** fn

### `addSignalApprovalReactionHintToText`

```
export function addSignalApprovalReactionHintToText(params: {
```

**Line:** 364 | **Kind:** fn

### `appendSignalApprovalReactionHintForOutboundMessage`

```
export function appendSignalApprovalReactionHintForOutboundMessage(params: {
```

**Line:** 516 | **Kind:** fn

### `hasSignalApprovalReactionApprovers`

```
export function hasSignalApprovalReactionApprovers(params: {
```

**Line:** 545 | **Kind:** fn

### `registerSignalApprovalReactionTarget`

```
export function registerSignalApprovalReactionTarget(params: {
```

**Line:** 552 | **Kind:** fn

### `addSignalApprovalReactionHintToStructuredPayload`

```
export function addSignalApprovalReactionHintToStructuredPayload(params: {
```

**Line:** 628 | **Kind:** fn

### `registerSignalApprovalReactionTargetForDeliveredPayload`

```
export function registerSignalApprovalReactionTargetForDeliveredPayload(params: {
```

**Line:** 697 | **Kind:** fn

### `registerSignalApprovalReactionTargetForOutboundMessage`

```
export function registerSignalApprovalReactionTargetForOutboundMessage(params: {
```

**Line:** 769 | **Kind:** fn

### `unregisterSignalApprovalReactionTarget`

```
export function unregisterSignalApprovalReactionTarget(params: {
```

**Line:** 827 | **Kind:** fn

### `resolveSignalApprovalReactionTargetWithPersistence`

```
export async function resolveSignalApprovalReactionTargetWithPersistence(params: {
```

**Line:** 869 | **Kind:** fn

### `maybeResolveSignalApprovalReaction`

```
export async function maybeResolveSignalApprovalReaction(params: {
```

**Line:** 892 | **Kind:** fn

### `clearSignalApprovalReactionTargetsForTest`

```
export function clearSignalApprovalReactionTargetsForTest(): void {
```

**Line:** 997 | **Kind:** fn
