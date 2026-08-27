# src/gateway/server-methods/agent.test-harness.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1033
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 38

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | fn | getAgentTestMocks | pub | `export function getAgentTestMocks() {` |
| 331 | type | AgentHandler | (private) | - |
| 333 | type | AgentHandlerArgs | pub | - |
| 335 | type | AgentParams | pub | - |
| 337 | type | AgentCommandCall | pub | - |
| 339 | type | AgentIdentityGetHandler | (private) | - |
| 341 | type | AgentIdentityGetHandlerArgs | (private) | - |
| 343 | type | AgentIdentityGetParams | (private) | - |
| 349 | fn | setDateOnlyFakeClockActive | pub | `export function setDateOnlyFakeClockActive(acti...` |
| 353 | fn | waitForRealTimer | (private) | `function waitForRealTimer(ms: number) {` |
| 359 | fn | waitForAssertion | pub | `export async function waitForAssertion(assertio...` |
| 382 | fn | requireValue | pub | `export function requireValue<T>(value: T | null...` |
| 389 | fn | expectRecordFields | pub | `export function expectRecordFields(record: unkn...` |
| 400 | fn | expectStringFieldContains | pub | `export function expectStringFieldContains(` |
| 409 | fn | expectSqliteSessionFileMarkerForEntry | pub | `export function expectSqliteSessionFileMarkerFo...` |
| 416 | fn | mockCallArg | pub | `export function mockCallArg(mock: ReturnType<ty...` |
| 424 | fn | expectRespondError | pub | `export function expectRespondError(` |
| 433 | fn | flushScheduledDispatchStep | pub | `export async function flushScheduledDispatchSte...` |
| 443 | fn | waitForAcceptedRunDispatch | (private) | `async function waitForAcceptedRunDispatch(param...` |
| 466 | fn | mockMainSessionEntry | pub | `export function mockMainSessionEntry(` |
| 482 | fn | buildExistingMainStoreEntry | pub | `export function buildExistingMainStoreEntry(ove...` |
| 490 | type | SessionStoreFixture | (private) | - |
| 492 | type | SessionEntryTargetFixture | (private) | - |
| 497 | fn | cloneSessionStoreFixtureEntry | (private) | `function cloneSessionStoreFixtureEntry(` |
| 503 | fn | selectFreshestTargetFixtureEntry | (private) | `function selectFreshestTargetFixtureEntry(` |
| 524 | fn | resetSessionAccessorMocks | (private) | `function resetSessionAccessorMocks() {` |
| 614 | fn | setupNewYorkTimeConfig | pub | `export function setupNewYorkTimeConfig(isoDate:...` |
| 628 | fn | resetTimeConfig | pub | `export function resetTimeConfig() {` |
| 634 | fn | useTestStateDir | pub | `export function useTestStateDir(root: string): ...` |
| 638 | fn | expectResetCall | pub | `export async function expectResetCall(expectedM...` |
| 645 | fn | primeMainAgentRun | pub | `export function primeMainAgentRun(params?: { se...` |
| 657 | fn | runMainAgent | pub | `export async function runMainAgent(message: str...` |
| 671 | fn | runMainAgentAndCaptureEntry | pub | `export async function runMainAgentAndCaptureEnt...` |
| 692 | fn | readLastAgentCommandCall | (private) | `function readLastAgentCommandCall(): AgentComma...` |
| 698 | fn | backendGatewayClient | pub | `export function backendGatewayClient(): AgentHa...` |
| 714 | fn | cronContinuationGatewayClient | pub | `export function cronContinuationGatewayClient()...` |
| 725 | fn | cronMediaCompletionEvent | pub | `export function cronMediaCompletionEvent(): Age...` |
| 740 | fn | setupCronContinuationReleaseFixture | pub | `export function setupCronContinuationReleaseFix...` |
| 766 | fn | invokeGatewaySuspendPrepare | pub | `export async function invokeGatewaySuspendPrepare(` |
| 795 | fn | operatorWriteGatewayClient | pub | `export function operatorWriteGatewayClient(): A...` |
| 811 | fn | operatorWriteCliClient | pub | `export function operatorWriteCliClient(): Agent...` |
| 827 | fn | waitForAgentCommandCall | pub | `export async function waitForAgentCommandCall<` |
| 838 | fn | mockSessionResetSuccess | pub | `export function mockSessionResetSuccess(params: {` |
| 859 | fn | invokeAgent | pub | `export async function invokeAgent(` |
| 901 | fn | invokeAgentIdentityGet | pub | `export async function invokeAgentIdentityGet(` |
| 928 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |
| 952 | fn | applyGatewaySubagentRegistryTestDeps | pub | `export function applyGatewaySubagentRegistryTes...` |
| 963 | fn | describe0AfterEach0 | pub | `export const describe0AfterEach0 = () => {` |
| 994 | fn | resetIntegrationState | (private) | `function resetIntegrationState() {` |
| 1021 | fn | describe1BeforeEach0 | pub | `export const describe1BeforeEach0 = () => {` |
| 1025 | fn | describe1AfterEach1 | pub | `export const describe1AfterEach1 = () => {` |
| 1029 | fn | prime | pub | `export function prime(sessionId = "existing-ses...` |

## Public API

### `getAgentTestMocks`

```
export function getAgentTestMocks() {
```

**Line:** 72 | **Kind:** fn

### `setDateOnlyFakeClockActive`

```
export function setDateOnlyFakeClockActive(active: boolean): void {
```

**Line:** 349 | **Kind:** fn

### `waitForAssertion`

```
export async function waitForAssertion(assertion: () => void, timeoutMs = 2_000, stepMs = 5) {
```

**Line:** 359 | **Kind:** fn

### `requireValue`

```
export function requireValue<T>(value: T | null | undefined, message: string): T {
```

**Line:** 382 | **Kind:** fn

### `expectRecordFields`

```
export function expectRecordFields(record: unknown, expected: Record<string, unknown>) {
```

**Line:** 389 | **Kind:** fn

### `expectStringFieldContains`

```
export function expectStringFieldContains(
```

**Line:** 400 | **Kind:** fn

### `expectSqliteSessionFileMarkerForEntry`

```
export function expectSqliteSessionFileMarkerForEntry(entry: Record<string, unknown> | undefined) {
```

**Line:** 409 | **Kind:** fn

### `mockCallArg`

```
export function mockCallArg(mock: ReturnType<typeof vi.fn>, callIndex = 0, argIndex = 0) {
```

**Line:** 416 | **Kind:** fn

### `expectRespondError`

```
export function expectRespondError(
```

**Line:** 424 | **Kind:** fn

### `flushScheduledDispatchStep`

```
export async function flushScheduledDispatchStep() {
```

**Line:** 433 | **Kind:** fn

### `mockMainSessionEntry`

```
export function mockMainSessionEntry(
```

**Line:** 466 | **Kind:** fn

### `buildExistingMainStoreEntry`

```
export function buildExistingMainStoreEntry(overrides: Record<string, unknown> = {}) {
```

**Line:** 482 | **Kind:** fn

### `setupNewYorkTimeConfig`

```
export function setupNewYorkTimeConfig(isoDate: string) {
```

**Line:** 614 | **Kind:** fn

### `resetTimeConfig`

```
export function resetTimeConfig() {
```

**Line:** 628 | **Kind:** fn

### `useTestStateDir`

```
export function useTestStateDir(root: string): void {
```

**Line:** 634 | **Kind:** fn

### `expectResetCall`

```
export async function expectResetCall(expectedMessage: string) {
```

**Line:** 638 | **Kind:** fn

### `primeMainAgentRun`

```
export function primeMainAgentRun(params?: { sessionId?: string; cfg?: Record<string, unknown> }) {
```

**Line:** 645 | **Kind:** fn

### `runMainAgent`

```
export async function runMainAgent(message: string, idempotencyKey: string) {
```

**Line:** 657 | **Kind:** fn

### `runMainAgentAndCaptureEntry`

```
export async function runMainAgentAndCaptureEntry(idempotencyKey: string) {
```

**Line:** 671 | **Kind:** fn

### `backendGatewayClient`

```
export function backendGatewayClient(): AgentHandlerArgs["client"] {
```

**Line:** 698 | **Kind:** fn

### `cronContinuationGatewayClient`

```
export function cronContinuationGatewayClient(): AgentHandlerArgs["client"] {
```

**Line:** 714 | **Kind:** fn

### `cronMediaCompletionEvent`

```
export function cronMediaCompletionEvent(): AgentInternalEvent {
```

**Line:** 725 | **Kind:** fn

### `setupCronContinuationReleaseFixture`

```
export function setupCronContinuationReleaseFixture() {
```

**Line:** 740 | **Kind:** fn

### `invokeGatewaySuspendPrepare`

```
export async function invokeGatewaySuspendPrepare(
```

**Line:** 766 | **Kind:** fn

### `operatorWriteGatewayClient`

```
export function operatorWriteGatewayClient(): AgentHandlerArgs["client"] {
```

**Line:** 795 | **Kind:** fn

### `operatorWriteCliClient`

```
export function operatorWriteCliClient(): AgentHandlerArgs["client"] {
```

**Line:** 811 | **Kind:** fn

### `waitForAgentCommandCall`

```
export async function waitForAgentCommandCall<
```

**Line:** 827 | **Kind:** fn

### `mockSessionResetSuccess`

```
export function mockSessionResetSuccess(params: {
```

**Line:** 838 | **Kind:** fn

### `invokeAgent`

```
export async function invokeAgent(
```

**Line:** 859 | **Kind:** fn

### `invokeAgentIdentityGet`

```
export async function invokeAgentIdentityGet(
```

**Line:** 901 | **Kind:** fn

### `applyGatewaySubagentRegistryTestDeps`

```
export function applyGatewaySubagentRegistryTestDeps(
```

**Line:** 952 | **Kind:** fn

### `describe0AfterEach0`

```
export const describe0AfterEach0 = () => {
```

**Line:** 963 | **Kind:** fn

### `describe1BeforeEach0`

```
export const describe1BeforeEach0 = () => {
```

**Line:** 1021 | **Kind:** fn

### `describe1AfterEach1`

```
export const describe1AfterEach1 = () => {
```

**Line:** 1025 | **Kind:** fn

### `prime`

```
export function prime(sessionId = "existing-session-id", cfg: Record<string, unknown> = {}) {
```

**Line:** 1029 | **Kind:** fn
