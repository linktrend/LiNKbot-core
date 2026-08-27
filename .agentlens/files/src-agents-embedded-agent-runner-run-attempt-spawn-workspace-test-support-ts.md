# src/agents/embedded-agent-runner/run/attempt.spawn-workspace.test-support.ts

[← Back to Module](../modules/src-agents-embedded-agent-runner-run/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1437
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | type | SubscribeEmbeddedAgentSessionFn | (private) | - |
| 39 | type | AcquireSessionWriteLockFn | (private) | - |
| 41 | type | ShouldPreemptivelyCompactBeforePromptFn | (private) | - |
| 44 | type | SubscriptionMock | (private) | - |
| 45 | type | UnknownMock | (private) | - |
| 46 | type | AsyncUnknownMock | (private) | - |
| 47 | type | AsyncContextEngineMaintenanceMock | (private) | - |
| 50 | type | BootstrapContext | (private) | - |
| 54 | type | CapturedTrajectoryEvent | (private) | - |
| 60 | fn | normalizeMockProviderId | (private) | `function normalizeMockProviderId(providerId?: s...` |
| 66 | type | SessionManagerMocks | (private) | - |
| 83 | type | AttemptSpawnWorkspaceHoisted | (private) | - |
| 125 | fn | createSubscriptionMock | (private) | `function createSubscriptionMock(): Subscription...` |
| 292 | fn | getHoisted | pub | `export function getHoisted(): AttemptSpawnWorks...` |
| 386 | fn | AuthStorage | (private) | `function AuthStorage() {}` |
| 387 | class | DefaultResourceLoader | (private) | - |
| 393 | fn | ModelRegistry | (private) | `function ModelRegistry() {}` |
| 394 | fn | estimateTokens | (private) | `const estimateTokens = (value: unknown) =>` |
| 954 | type | MutableSession | (private) | - |
| 990 | type | SessionPromptOverride | (private) | - |
| 996 | type | TestAgentStream | (private) | - |
| 1001 | fn | createCompletedAssistantStream | (private) | `function createCompletedAssistantStream(): Test...` |
| 1021 | fn | preloadRunEmbeddedAttemptForTests | pub | `export async function preloadRunEmbeddedAttempt...` |
| 1025 | fn | resetEmbeddedAttemptHarness | pub | `export function resetEmbeddedAttemptHarness(` |
| 1135 | fn | cleanupTempPaths | pub | `export async function cleanupTempPaths(tempPath...` |
| 1144 | fn | createDefaultEmbeddedSession | pub | `export function createDefaultEmbeddedSession(pa...` |
| 1232 | fn | createContextEngineBootstrapAndAssemble | pub | `export function createContextEngineBootstrapAnd...` |
| 1244 | fn | expectCalledWithSessionKey | pub | `export function expectCalledWithSessionKey(mock...` |
| 1260 | fn | createContextEngineAttemptRunner | pub | `export async function createContextEngineAttemp...` |

## Public API

### `getHoisted`

```
export function getHoisted(): AttemptSpawnWorkspaceHoisted {
```

**Line:** 292 | **Kind:** fn

### `preloadRunEmbeddedAttemptForTests`

```
export async function preloadRunEmbeddedAttemptForTests(): Promise<void> {
```

**Line:** 1021 | **Kind:** fn

### `resetEmbeddedAttemptHarness`

```
export function resetEmbeddedAttemptHarness(
```

**Line:** 1025 | **Kind:** fn

### `cleanupTempPaths`

```
export async function cleanupTempPaths(tempPaths: string[]) {
```

**Line:** 1135 | **Kind:** fn

### `createDefaultEmbeddedSession`

```
export function createDefaultEmbeddedSession(params?: {
```

**Line:** 1144 | **Kind:** fn

### `createContextEngineBootstrapAndAssemble`

```
export function createContextEngineBootstrapAndAssemble() {
```

**Line:** 1232 | **Kind:** fn

### `expectCalledWithSessionKey`

```
export function expectCalledWithSessionKey(mock: ReturnType<typeof vi.fn>, sessionKey: string) {
```

**Line:** 1244 | **Kind:** fn

### `createContextEngineAttemptRunner`

```
export async function createContextEngineAttemptRunner(params: {
```

**Line:** 1260 | **Kind:** fn
