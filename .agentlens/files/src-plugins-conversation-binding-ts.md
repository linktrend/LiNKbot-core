# src/plugins/conversation-binding.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1005
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 16

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | PluginBindingApprovalDecision | (private) | - |
| 48 | type | PluginBindingApprovalEntry | (private) | - |
| 57 | type | PluginBindingApprovalsState | (private) | - |
| 58 | type | PluginBindingApprovalsDatabase | (private) | - |
| 60 | type | PluginBindingConversation | (private) | - |
| 68 | type | PendingPluginBindingRequest | (private) | - |
| 81 | type | PluginBindingApprovalAction | (private) | - |
| 86 | type | PluginBindingIdentity | (private) | - |
| 92 | type | PluginBindingMetadata | (private) | - |
| 103 | type | PluginBindingResolveResult | (private) | - |
| 124 | type | PluginBindingGlobalState | (private) | - |
| 131 | type | PluginConversationBindingState | (private) | - |
| 158 | fn | getPluginBindingGlobalState | (private) | `function getPluginBindingGlobalState(): PluginB...` |
| 162 | fn | normalizeConversation | (private) | `function normalizeConversation(params: PluginBi...` |
| 175 | fn | normalizeBindingData | (private) | `function normalizeBindingData(data: unknown): R...` |
| 182 | fn | toConversationRef | (private) | `function toConversationRef(params: PluginBindin...` |
| 213 | fn | buildApprovalScopeKey | (private) | `function buildApprovalScopeKey(params: {` |
| 225 | fn | buildPluginBindingIdentity | pub | `export function buildPluginBindingIdentity(para...` |
| 233 | fn | logPluginBindingLifecycleEvent | (private) | `function logPluginBindingLifecycleEvent(params: {` |
| 261 | fn | isLegacyPluginBindingRecord | (private) | `function isLegacyPluginBindingRecord(params: {` |
| 280 | fn | buildApprovalInteractiveReply | (private) | `function buildApprovalInteractiveReply(` |
| 309 | fn | createApprovalRequestId | (private) | `function createApprovalRequestId(): string {` |
| 314 | fn | openApprovalsDatabase | (private) | `function openApprovalsDatabase() {` |
| 318 | fn | loadApprovalsFromDatabase | (private) | `function loadApprovalsFromDatabase(): PluginBin...` |
| 347 | fn | persistApprovalEntry | (private) | `async function persistApprovalEntry(entry: Plug...` |
| 381 | fn | getApprovals | (private) | `function getApprovals(): PluginBindingApprovals...` |
| 390 | fn | hasPersistentApproval | (private) | `function hasPersistentApproval(params: {` |
| 406 | fn | addPersistentApproval | (private) | `async function addPersistentApproval(entry: Plu...` |
| 424 | fn | buildBindingMetadata | (private) | `function buildBindingMetadata(params: {` |
| 445 | fn | isPluginOwnedBindingMetadata | (private) | `function isPluginOwnedBindingMetadata(metadata:...` |
| 457 | fn | isPluginOwnedSessionBindingRecord | pub | `export function isPluginOwnedSessionBindingRecord(` |
| 468 | fn | toPluginConversationBinding | pub | `export function toPluginConversationBinding(` |
| 499 | fn | withConversationBindingContext | (private) | `function withConversationBindingContext(` |
| 510 | fn | resolvePluginConversationBindingState | (private) | `function resolvePluginConversationBindingState(...` |
| 524 | fn | resolveOwnedPluginConversationBinding | (private) | `function resolveOwnedPluginConversationBinding(...` |
| 537 | fn | bindConversationFromIdentity | (private) | `function bindConversationFromIdentity(params: {` |
| 553 | fn | bindConversationFromRequest | (private) | `function bindConversationFromRequest(` |
| 568 | fn | buildApprovalEntryFromRequest | (private) | `function buildApprovalEntryFromRequest(` |
| 585 | fn | bindConversationNow | pub | `export async function bindConversationNow(param...` |
| 625 | fn | buildApprovalMessage | (private) | `function buildApprovalMessage(request: PendingP...` |
| 641 | fn | resolvePluginBindingDisplayName | (private) | `function resolvePluginBindingDisplayName(bindin...` |
| 648 | fn | buildDetachHintSuffix | (private) | `function buildDetachHintSuffix(detachHint?: str...` |
| 653 | fn | buildPluginBindingUnavailableText | pub | `export function buildPluginBindingUnavailableTe...` |
| 657 | fn | buildPluginBindingDeclinedText | pub | `export function buildPluginBindingDeclinedText(...` |
| 661 | fn | buildPluginBindingErrorText | pub | `export function buildPluginBindingErrorText(bin...` |
| 665 | fn | hasShownPluginBindingFallbackNotice | pub | `export function hasShownPluginBindingFallbackNo...` |
| 673 | fn | markPluginBindingFallbackNoticeShown | pub | `export function markPluginBindingFallbackNotice...` |
| 681 | fn | buildPendingReply | (private) | `function buildPendingReply(request: PendingPlug...` |
| 688 | fn | encodeCustomIdValue | (private) | `function encodeCustomIdValue(value: string): st...` |
| 692 | fn | decodeCustomIdValue | (private) | `function decodeCustomIdValue(value: string): st...` |
| 700 | fn | buildPluginBindingApprovalCustomId | pub | `export function buildPluginBindingApprovalCusto...` |
| 708 | fn | parsePluginBindingApprovalCustomId | pub | `export function parsePluginBindingApprovalCusto...` |
| 742 | fn | requestPluginConversationBinding | pub | `export async function requestPluginConversation...` |
| 851 | fn | getCurrentPluginConversationBinding | pub | `export async function getCurrentPluginConversat...` |
| 858 | fn | detachPluginConversationBinding | pub | `export async function detachPluginConversationB...` |
| 881 | fn | resolvePluginConversationBindingApproval | pub | `export async function resolvePluginConversation...` |
| 941 | fn | dispatchPluginConversationBindingResolved | (private) | `function dispatchPluginConversationBindingResol...` |
| 955 | fn | notifyPluginConversationBindingResolved | (private) | `async function notifyPluginConversationBindingR...` |
| 992 | fn | buildPluginBindingResolvedText | pub | `export function buildPluginBindingResolvedText(...` |

## Public API

### `buildPluginBindingIdentity`

```
export function buildPluginBindingIdentity(params: PluginBindingIdentity): PluginBindingIdentity {
```

**Line:** 225 | **Kind:** fn

### `isPluginOwnedSessionBindingRecord`

```
export function isPluginOwnedSessionBindingRecord(
```

**Line:** 457 | **Kind:** fn

### `toPluginConversationBinding`

```
export function toPluginConversationBinding(
```

**Line:** 468 | **Kind:** fn

### `bindConversationNow`

```
export async function bindConversationNow(params: {
```

**Line:** 585 | **Kind:** fn

### `buildPluginBindingUnavailableText`

```
export function buildPluginBindingUnavailableText(binding: PluginConversationBinding): string {
```

**Line:** 653 | **Kind:** fn

### `buildPluginBindingDeclinedText`

```
export function buildPluginBindingDeclinedText(binding: PluginConversationBinding): string {
```

**Line:** 657 | **Kind:** fn

### `buildPluginBindingErrorText`

```
export function buildPluginBindingErrorText(binding: PluginConversationBinding): string {
```

**Line:** 661 | **Kind:** fn

### `hasShownPluginBindingFallbackNotice`

```
export function hasShownPluginBindingFallbackNotice(bindingId: string): boolean {
```

**Line:** 665 | **Kind:** fn

### `markPluginBindingFallbackNoticeShown`

```
export function markPluginBindingFallbackNoticeShown(bindingId: string): void {
```

**Line:** 673 | **Kind:** fn

### `buildPluginBindingApprovalCustomId`

```
export function buildPluginBindingApprovalCustomId(
```

**Line:** 700 | **Kind:** fn

### `parsePluginBindingApprovalCustomId`

```
export function parsePluginBindingApprovalCustomId(
```

**Line:** 708 | **Kind:** fn

### `requestPluginConversationBinding`

```
export async function requestPluginConversationBinding(params: {
```

**Line:** 742 | **Kind:** fn

### `getCurrentPluginConversationBinding`

```
export async function getCurrentPluginConversationBinding(params: {
```

**Line:** 851 | **Kind:** fn

### `detachPluginConversationBinding`

```
export async function detachPluginConversationBinding(params: {
```

**Line:** 858 | **Kind:** fn

### `resolvePluginConversationBindingApproval`

```
export async function resolvePluginConversationBindingApproval(params: {
```

**Line:** 881 | **Kind:** fn

### `buildPluginBindingResolvedText`

```
export function buildPluginBindingResolvedText(params: PluginBindingResolveResult): string {
```

**Line:** 992 | **Kind:** fn
