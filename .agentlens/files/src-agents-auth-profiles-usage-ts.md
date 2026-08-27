# src/agents/auth-profiles/usage.ts

[← Back to Module](../modules/src-agents-auth-profiles/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1172
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 67 | fn | logDroppedAuthProfileBookkeeping | (private) | `function logDroppedAuthProfileBookkeeping(kind:...` |
| 105 | type | WhamUsageWindow | (private) | - |
| 112 | type | WhamUsageResponse | (private) | - |
| 120 | type | WhamCooldownProbeResult | (private) | - |
| 128 | fn | shouldProbeWhamForFailure | (private) | `function shouldProbeWhamForFailure(` |
| 148 | fn | isSameWhamCredential | (private) | `function isSameWhamCredential(` |
| 161 | fn | resolveActiveWindowUntil | (private) | `function resolveActiveWindowUntil(value: unknow...` |
| 166 | fn | resolveUsageWindowUntil | (private) | `function resolveUsageWindowUntil(now: number, d...` |
| 175 | fn | resolveWhamResetMs | (private) | `function resolveWhamResetMs(window: WhamUsageWi...` |
| 197 | fn | isWhamWindowExhausted | (private) | `function isWhamWindowExhausted(window: WhamUsag...` |
| 206 | fn | applyWhamCooldownResult | (private) | `function applyWhamCooldownResult(params: {` |
| 250 | fn | cancelUnreadResponseBody | (private) | `async function cancelUnreadResponseBody(respons...` |
| 256 | fn | probeWhamForCooldown | (private) | `async function probeWhamForCooldown(` |
| 366 | fn | shouldHalfOpenProbeWhamBlock | (private) | `function shouldHalfOpenProbeWhamBlock(params: {` |
| 401 | type | WhamBlockGeneration | (private) | - |
| 406 | fn | matchesWhamBlockGeneration | (private) | `function matchesWhamBlockGeneration(` |
| 419 | fn | claimWhamHalfOpenReprobe | (private) | `async function claimWhamHalfOpenReprobe(params: {` |
| 471 | fn | runWhamHalfOpenReprobe | (private) | `async function runWhamHalfOpenReprobe(params: {` |
| 538 | fn | maybeReprobeWhamBlockedProfiles | pub | `export function maybeReprobeWhamBlockedProfiles...` |
| 588 | fn | resolveProfilesUnavailableReason | pub | `export function resolveProfilesUnavailableReaso...` |
| 595 | fn | addScore | (private) | `const addScore = (reason: AuthProfileFailureRea...` |
| 667 | fn | calculateAuthProfileCooldownMs | pub | `export function calculateAuthProfileCooldownMs(...` |
| 678 | type | ResolvedAuthCooldownConfig | (private) | - |
| 686 | type | DisabledFailureReason | (private) | - |
| 688 | type | DisabledFailureBackoffPolicy | (private) | - |
| 713 | fn | resolveAuthCooldownConfig | (private) | `function resolveAuthCooldownConfig(): ResolvedA...` |
| 723 | fn | calculateDisabledLaneBackoffMs | (private) | `function calculateDisabledLaneBackoffMs(params: {` |
| 736 | fn | resolveDisabledFailureBackoffMs | (private) | `function resolveDisabledFailureBackoffMs(params: {` |
| 750 | fn | resolveProfileUnusableUntilForDisplay | pub | `export function resolveProfileUnusableUntilForD...` |
| 764 | fn | resetUsageStats | (private) | `function resetUsageStats(` |
| 786 | fn | updateUsageStatsEntry | (private) | `function updateUsageStatsEntry(` |
| 795 | fn | keepActiveWindowOrRecompute | (private) | `function keepActiveWindowOrRecompute(params: {` |
| 806 | fn | computeNextProfileUsageStats | (private) | `function computeNextProfileUsageStats(params: {` |
| 918 | fn | markAuthProfileFailure | pub | `export async function markAuthProfileFailure(pa...` |
| 1017 | fn | buildBlockedProfileUsageStats | (private) | `function buildBlockedProfileUsageStats(params: {` |
| 1057 | fn | markAuthProfileBlockedUntil | pub | `export async function markAuthProfileBlockedUnt...` |
| 1128 | fn | markAuthProfileCooldown | pub | `export async function markAuthProfileCooldown(p...` |
| 1147 | fn | clearAuthProfileCooldown | pub | `export async function clearAuthProfileCooldown(...` |

## Public API

### `maybeReprobeWhamBlockedProfiles`

```
export function maybeReprobeWhamBlockedProfiles(params: {
```

**Line:** 538 | **Kind:** fn

### `resolveProfilesUnavailableReason`

```
export function resolveProfilesUnavailableReason(params: {
```

**Line:** 588 | **Kind:** fn

### `calculateAuthProfileCooldownMs`

```
export function calculateAuthProfileCooldownMs(errorCount: number): number {
```

**Line:** 667 | **Kind:** fn

### `resolveProfileUnusableUntilForDisplay`

```
export function resolveProfileUnusableUntilForDisplay(
```

**Line:** 750 | **Kind:** fn

### `markAuthProfileFailure`

```
export async function markAuthProfileFailure(params: {
```

**Line:** 918 | **Kind:** fn

### `markAuthProfileBlockedUntil`

```
export async function markAuthProfileBlockedUntil(params: {
```

**Line:** 1057 | **Kind:** fn

### `markAuthProfileCooldown`

```
export async function markAuthProfileCooldown(params: {
```

**Line:** 1128 | **Kind:** fn

### `clearAuthProfileCooldown`

```
export async function clearAuthProfileCooldown(params: {
```

**Line:** 1147 | **Kind:** fn

## Memory Markers

### 🔴 `INVARIANT` (line 137)

> a 401 that looks like a 12h token-family outage.
