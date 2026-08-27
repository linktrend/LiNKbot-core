# extensions/telegram/src/thread-bindings.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1022
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | TelegramBindingTargetKind | (private) | - |
| 38 | type | TelegramThreadBindingRecord | (private) | - |
| 53 | type | StoredTelegramBindingState | (private) | - |
| 58 | type | TelegramThreadBindingStore | (private) | - |
| 60 | type | TelegramThreadBindingManager | (private) | - |
| 82 | type | TelegramThreadBindingsState | (private) | - |
| 95 | fn | getThreadBindingsState | (private) | `function getThreadBindingsState(): TelegramThre...` |
| 110 | fn | normalizeDurationMs | (private) | `function normalizeDurationMs(raw: unknown, fall...` |
| 117 | fn | resolveBindingKey | (private) | `function resolveBindingKey(params: { accountId:...` |
| 121 | fn | resolveStoredBindingKey | (private) | `function resolveStoredBindingKey(params: { acco...` |
| 128 | fn | openThreadBindingStore | (private) | `function openThreadBindingStore(): TelegramThre...` |
| 135 | fn | toSessionBindingTargetKind | (private) | `function toSessionBindingTargetKind(raw: Telegr...` |
| 139 | fn | toTelegramTargetKind | (private) | `function toTelegramTargetKind(raw: BindingTarge...` |
| 143 | fn | toSessionBindingRecord | (private) | `function toSessionBindingRecord(` |
| 184 | fn | fromSessionBindingInput | (private) | `function fromSessionBindingInput(params: {` |
| 242 | fn | resolveBindingsPath | (private) | `function resolveBindingsPath(accountId: string,...` |
| 247 | fn | normalizeMetadataForStore | (private) | `function normalizeMetadataForStore(` |
| 261 | fn | summarizeLifecycleForLog | (private) | `function summarizeLifecycleForLog(` |
| 276 | fn | sanitizeStoredBinding | (private) | `function sanitizeStoredBinding(` |
| 326 | fn | readLegacyBindingsFile | (private) | `function readLegacyBindingsFile(` |
| 353 | fn | loadBindingsFromStore | (private) | `function loadBindingsFromStore(accountId: strin...` |
| 389 | fn | persistBindingsToStore | (private) | `async function persistBindingsToStore(params: {` |
| 420 | fn | listBindingsForAccount | (private) | `function listBindingsForAccount(accountId: stri...` |
| 426 | fn | enqueuePersistBindings | (private) | `function enqueuePersistBindings(params: {` |
| 444 | fn | persistBindingsSafely | (private) | `function persistBindingsSafely(params: {` |
| 457 | fn | normalizeTimestampMs | (private) | `function normalizeTimestampMs(raw: unknown): nu...` |
| 464 | fn | shouldExpireByIdle | (private) | `function shouldExpireByIdle(params: {` |
| 481 | fn | shouldExpireByMaxAge | (private) | `function shouldExpireByMaxAge(params: {` |
| 496 | fn | createTelegramThreadBindingManager | pub | `export function createTelegramThreadBindingMana...` |
| 914 | fn | getTelegramThreadBindingManager | pub | `export function getTelegramThreadBindingManager(` |
| 920 | fn | updateTelegramBindingsBySessionKey | (private) | `function updateTelegramBindingsBySessionKey(par...` |
| 951 | fn | setTelegramThreadBindingIdleTimeoutBySessionKey | pub | `export function setTelegramThreadBindingIdleTim...` |
| 972 | fn | setTelegramThreadBindingMaxAgeBySessionKey | pub | `export function setTelegramThreadBindingMaxAgeB...` |
| 993 | fn | resetTelegramThreadBindingsForTests | pub | `export async function resetTelegramThreadBindin...` |
| 1006 | fn | listTelegramLegacyThreadBindingEntries | pub | `export function listTelegramLegacyThreadBinding...` |

## Public API

### `createTelegramThreadBindingManager`

```
export function createTelegramThreadBindingManager(params: {
```

**Line:** 496 | **Kind:** fn

### `getTelegramThreadBindingManager`

```
export function getTelegramThreadBindingManager(
```

**Line:** 914 | **Kind:** fn

### `setTelegramThreadBindingIdleTimeoutBySessionKey`

```
export function setTelegramThreadBindingIdleTimeoutBySessionKey(params: {
```

**Line:** 951 | **Kind:** fn

### `setTelegramThreadBindingMaxAgeBySessionKey`

```
export function setTelegramThreadBindingMaxAgeBySessionKey(params: {
```

**Line:** 972 | **Kind:** fn

### `resetTelegramThreadBindingsForTests`

```
export async function resetTelegramThreadBindingsForTests() {
```

**Line:** 993 | **Kind:** fn

### `listTelegramLegacyThreadBindingEntries`

```
export function listTelegramLegacyThreadBindingEntries(params: {
```

**Line:** 1006 | **Kind:** fn
