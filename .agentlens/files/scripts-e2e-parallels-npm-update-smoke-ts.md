# scripts/e2e/parallels/npm-update-smoke.ts

[← Back to Module](../modules/scripts-e2e-parallels/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1633
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | interface | NpmUpdateOptions | (private) | - |
| 74 | interface | Job | (private) | - |
| 88 | interface | UpdateJobContext | (private) | - |
| 94 | interface | SpawnLoggedOptions | (private) | - |
| 100 | interface | NpmUpdateSummary | (private) | - |
| 136 | fn | resolveRequiredTimerMs | (private) | `function resolveRequiredTimerMs(timeoutMs: numb...` |
| 140 | fn | resolveOptionalTimerMs | (private) | `function resolveOptionalTimerMs(timeoutMs: numb...` |
| 144 | fn | resolveSecondsTimerMs | (private) | `function resolveSecondsTimerMs(timeoutSeconds: ...` |
| 161 | fn | freshLaneTimeoutMs | pub | `export function freshLaneTimeoutMs(platform: Pl...` |
| 168 | fn | spawnLoggedCommand | pub | `export function spawnLoggedCommand(` |
| 189 | fn | append | (private) | `const append = (text: string) => {` |
| 236 | fn | finish | (private) | `const finish = () => {` |
| 253 | fn | trackLoggedChild | (private) | `function trackLoggedChild(child: ReturnType<typ...` |
| 268 | fn | untrackLoggedChild | (private) | `function untrackLoggedChild(child: ReturnType<t...` |
| 274 | fn | installLoggedParentCleanup | (private) | `function installLoggedParentCleanup() {` |
| 283 | fn | handler | (private) | `const handler = () => {` |
| 296 | fn | cleanupActiveLoggedChildren | (private) | `function cleanupActiveLoggedChildren(signal: No...` |
| 305 | fn | loggedProcessTreeIsAlive | (private) | `function loggedProcessTreeIsAlive(child: Return...` |
| 317 | fn | waitForLoggedProcessTreeExit | (private) | `async function waitForLoggedProcessTreeExit(` |
| 333 | fn | finishTimedOutLoggedProcessTree | (private) | `async function finishTimedOutLoggedProcessTree(` |
| 354 | fn | signalLoggedChild | (private) | `function signalLoggedChild(child: ReturnType<ty...` |
| 374 | fn | usage | (private) | `function usage(): string {` |
| 400 | fn | parseArgs | pub | `export function parseArgs(argv: string[]): NpmU...` |
| 502 | fn | stripLeadingPackageManagerSeparator | (private) | `function stripLeadingPackageManagerSeparator(ar...` |
| 506 | fn | platformRecord | (private) | `function platformRecord<T>(value: T): Record<Pl...` |
| 510 | fn | formatDuration | (private) | `function formatDuration(durationMs: number): st...` |
| 514 | fn | readHarnessCheckoutVersion | (private) | `function readHarnessCheckoutVersion(): string {` |
| 521 | fn | openClawVersionFamily | (private) | `function openClawVersionFamily(version: string)...` |
| 525 | fn | parseOpenClawPackageSpecVersion | (private) | `function parseOpenClawPackageSpecVersion(spec: ...` |
| 533 | fn | readString | (private) | `function readString(value: unknown): string {` |
| 537 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 541 | fn | parseRegistryPackageMetadata | pub | `export function parseRegistryPackageMetadata(ra...` |
| 566 | class | NpmUpdateSmoke | pub | - |
| 1628 | fn | runSmoke | (private) | `const runSmoke = () => new NpmUpdateSmoke(optio...` |

## Public API

### `freshLaneTimeoutMs`

```
export function freshLaneTimeoutMs(platform: Platform): number {
```

**Line:** 161 | **Kind:** fn

### `spawnLoggedCommand`

```
export function spawnLoggedCommand(
```

**Line:** 168 | **Kind:** fn

### `parseArgs`

```
export function parseArgs(argv: string[]): NpmUpdateOptions {
```

**Line:** 400 | **Kind:** fn

### `parseRegistryPackageMetadata`

```
export function parseRegistryPackageMetadata(raw: string): {
```

**Line:** 541 | **Kind:** fn
