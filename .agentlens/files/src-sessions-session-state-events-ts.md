# src/sessions/session-state-events.ts

[← Back to Module](../modules/src-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1068
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | type | SessionStateEventInput | (private) | - |
| 53 | type | SessionStateEventRecord | (private) | - |
| 67 | type | SessionStateDatabase | (private) | - |
| 71 | type | SessionStateEventsTable | (private) | - |
| 72 | type | SessionStateEventRow | (private) | - |
| 73 | type | SessionWatchCursorRow | (private) | - |
| 81 | fn | getSessionStateKysely | (private) | `function getSessionStateKysely(db: DatabaseSync) {` |
| 85 | fn | normalizeOptionalSqliteNumber | (private) | `function normalizeOptionalSqliteNumber(` |
| 91 | fn | parsePayload | (private) | `function parsePayload(value: string | null): Re...` |
| 105 | fn | rowToSessionStateEvent | (private) | `function rowToSessionStateEvent(row: SessionSta...` |
| 122 | fn | bindSessionStateEvent | (private) | `function bindSessionStateEvent(` |
| 141 | fn | readCursor | (private) | `function readCursor(` |
| 156 | fn | isAmbientGroupWatchCursor | (private) | `function isAmbientGroupWatchCursor(row: Session...` |
| 160 | fn | upsertSeedCursor | (private) | `function upsertSeedCursor(params: {` |
| 192 | fn | updateMaterialCursor | (private) | `function updateMaterialCursor(params: {` |
| 228 | fn | classifySessionStateActor | pub | `export function classifySessionStateActor(opts: {` |
| 258 | fn | clampSessionStateOccurredAt | (private) | `function clampSessionStateOccurredAt(value: num...` |
| 265 | fn | recordSessionStateEvent | pub | `export function recordSessionStateEvent(` |
| 390 | fn | getSessionStateVersion | pub | `export function getSessionStateVersion(` |
| 414 | fn | getSessionStateVersions | pub | `export function getSessionStateVersions(` |
| 448 | fn | listSessionStateEventsSince | pub | `export function listSessionStateEventsSince(` |
| 512 | fn | acknowledgeSessionStateNotices | pub | `export function acknowledgeSessionStateNotices(` |
| 565 | fn | handleSessionStateSessionReset | pub | `export function handleSessionStateSessionReset(` |
| 584 | fn | handleSessionStateSessionDeleted | pub | `export function handleSessionStateSessionDeleted(` |
| 624 | fn | sessionExists | (private) | `function sessionExists(sessionKey: string, env?...` |
| 633 | fn | sweepSessionStateWatchNotices | pub | `export function sweepSessionStateWatchNotices(` |
| 673 | fn | pruneSessionStateEvents | (private) | `function pruneSessionStateEvents(` |
| 683 | fn | stampPrunedWatermarks | (private) | `const stampPrunedWatermarks = (predicate: {` |
| 747 | fn | recordSessionCompacted | pub | `export function recordSessionCompacted(params: {` |
| 771 | fn | recordSessionGoalChanged | pub | `export function recordSessionGoalChanged(params: {` |
| 794 | fn | hasSessionStateWatchers | (private) | `function hasSessionStateWatchers(` |
| 817 | fn | listAmbientGroupWatchTargets | pub | `export function listAmbientGroupWatchTargets(` |
| 839 | fn | registerSessionStateWatch | pub | `export function registerSessionStateWatch(` |
| 896 | fn | registerMainSessionGroupWatch | pub | `export function registerMainSessionGroupWatch(` |
| 975 | fn | recordSessionHumanDirectMessage | pub | `export function recordSessionHumanDirectMessage(` |
| 1017 | fn | recordSubagentSpawned | pub | `export function recordSubagentSpawned(params: {` |
| 1036 | type | SubagentTerminalStatus | (private) | - |
| 1046 | fn | recordSubagentTerminalState | pub | `export function recordSubagentTerminalState(par...` |

## Public API

### `classifySessionStateActor`

```
export function classifySessionStateActor(opts: {
```

**Line:** 228 | **Kind:** fn

### `recordSessionStateEvent`

```
export function recordSessionStateEvent(
```

**Line:** 265 | **Kind:** fn

### `getSessionStateVersion`

```
export function getSessionStateVersion(
```

**Line:** 390 | **Kind:** fn

### `getSessionStateVersions`

```
export function getSessionStateVersions(
```

**Line:** 414 | **Kind:** fn

### `listSessionStateEventsSince`

```
export function listSessionStateEventsSince(
```

**Line:** 448 | **Kind:** fn

### `acknowledgeSessionStateNotices`

```
export function acknowledgeSessionStateNotices(
```

**Line:** 512 | **Kind:** fn

### `handleSessionStateSessionReset`

```
export function handleSessionStateSessionReset(
```

**Line:** 565 | **Kind:** fn

### `handleSessionStateSessionDeleted`

```
export function handleSessionStateSessionDeleted(
```

**Line:** 584 | **Kind:** fn

### `sweepSessionStateWatchNotices`

```
export function sweepSessionStateWatchNotices(
```

**Line:** 633 | **Kind:** fn

### `recordSessionCompacted`

```
export function recordSessionCompacted(params: {
```

**Line:** 747 | **Kind:** fn

### `recordSessionGoalChanged`

```
export function recordSessionGoalChanged(params: {
```

**Line:** 771 | **Kind:** fn

### `listAmbientGroupWatchTargets`

```
export function listAmbientGroupWatchTargets(
```

**Line:** 817 | **Kind:** fn

### `registerSessionStateWatch`

```
export function registerSessionStateWatch(
```

**Line:** 839 | **Kind:** fn

### `registerMainSessionGroupWatch`

```
export function registerMainSessionGroupWatch(
```

**Line:** 896 | **Kind:** fn

### `recordSessionHumanDirectMessage`

```
export function recordSessionHumanDirectMessage(
```

**Line:** 975 | **Kind:** fn

### `recordSubagentSpawned`

```
export function recordSubagentSpawned(params: {
```

**Line:** 1017 | **Kind:** fn

### `recordSubagentTerminalState`

```
export function recordSubagentTerminalState(params: {
```

**Line:** 1046 | **Kind:** fn
