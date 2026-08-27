# ui/src/test-helpers/control-ui-e2e.ts

[← Back to Module](../modules/ui-src-test-helpers/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1497
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | MockGatewayRequest | pub | - |
| 46 | type | ControlUiMockGatewayScenario | pub | - |
| 91 | type | NormalizedControlUiMockGatewayScenario | (private) | - |
| 93 | type | ControlUiE2eServer | pub | - |
| 98 | type | MockGatewayControls | pub | - |
| 127 | fn | resolveRepoRoot | (private) | `function resolveRepoRoot(): string {` |
| 132 | fn | resolvePlaywrightChromiumExecutablePath | pub | `export function resolvePlaywrightChromiumExecut...` |
| 150 | fn | canRunPlaywrightChromium | pub | `export function canRunPlaywrightChromium(chromi...` |
| 157 | fn | startControlUiE2eServer | pub | `export async function startControlUiE2eServer(` |
| 213 | fn | resolveAvailableLoopbackPort | (private) | `async function resolveAvailableLoopbackPort(): ...` |
| 234 | fn | resolveServerBaseUrl | (private) | `function resolveServerBaseUrl(server: ViteDevSe...` |
| 242 | fn | normalizeScenario | (private) | `function normalizeScenario(` |
| 282 | fn | createControlUiMockBootstrapConfig | pub | `export function createControlUiMockBootstrapCon...` |
| 298 | fn | createControlUiMockGatewayInitScript | pub | `export function createControlUiMockGatewayInitS...` |
| 308 | fn | installControlUiMockGateway | (private) | `function installControlUiMockGateway(input: {` |
| 312 | type | BrowserRequest | (private) | - |
| 313 | type | BrowserFrame | (private) | - |
| 319 | type | BrowserScenario | (private) | - |
| 320 | type | BrowserMethodResponseCase | (private) | - |
| 324 | type | BrowserMethodResponseCases | (private) | - |
| 327 | type | BrowserMethodResponseSequence | (private) | - |
| 330 | type | DeferredResponse | (private) | - |
| 336 | type | ExposedGateway | (private) | - |
| 354 | type | WindowWithGateway | (private) | - |
| 459 | fn | persistConfigState | (private) | `function persistConfigState(): void {` |
| 467 | fn | mockConfigHash | (private) | `function mockConfigHash(): string {` |
| 471 | fn | mockAppliedConfigHash | (private) | `function mockAppliedConfigHash(): string {` |
| 475 | fn | persistGroupsState | (private) | `function persistGroupsState(): void {` |
| 483 | fn | groupsPayload | (private) | `function groupsPayload(): { groups: Array<{ nam...` |
| 487 | fn | normalizedGroupNames | (private) | `function normalizedGroupNames(value: unknown): ...` |
| 503 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 507 | fn | hasOwn | (private) | `function hasOwn(record: Record<string, unknown>...` |
| 511 | fn | valuesEqual | (private) | `function valuesEqual(actual: unknown, expected:...` |
| 525 | fn | paramsMatch | (private) | `function paramsMatch(params: unknown, match: Re...` |
| 541 | fn | responseCases | (private) | `function responseCases(value: unknown): Browser...` |
| 549 | fn | responseSequence | (private) | `function responseSequence(value: unknown): unkn...` |
| 557 | fn | configuredResponse | (private) | `function configuredResponse(` |
| 586 | fn | recordSessionPatch | (private) | `function recordSessionPatch(params: unknown): v...` |
| 602 | fn | applySessionPatches | (private) | `function applySessionPatches(response: unknown,...` |
| 641 | fn | stopRepeatingSessionEvents | (private) | `function stopRepeatingSessionEvents(): void {` |
| 648 | fn | emitRepeatingSessionEvent | (private) | `function emitRepeatingSessionEvent(): void {` |
| 669 | fn | startRepeatingSessionEvents | (private) | `function startRepeatingSessionEvents(): void {` |
| 678 | fn | updateSessionMessageSubscription | (private) | `function updateSessionMessageSubscription(metho...` |
| 696 | fn | sessionRow | (private) | `function sessionRow() {` |
| 712 | fn | buildResponse | (private) | `function buildResponse(method: string, params: ...` |
| 991 | fn | shouldDefer | (private) | `function shouldDefer(method: string): boolean {` |
| 1000 | fn | parseFrame | (private) | `function parseFrame(raw: string | ArrayBufferLi...` |
| 1012 | class | MockWebSocket | (private) | - |
| 1244 | fn | installMockGateway | pub | `export async function installMockGateway(` |
| 1260 | fn | createMockGatewayControls | (private) | `function createMockGatewayControls(page: Page, ...` |
| 1261 | fn | emitGatewayEvent | (private) | `const emitGatewayEvent = async (event: string, ...` |
| 1264 | fn | gateway | (private) | `const gateway = (` |
| 1280 | fn | deliverLatest | (private) | `const deliverLatest = async (frame: unknown) => {` |
| 1282 | fn | gateway | (private) | `const gateway = (` |
| 1296 | fn | getRequests | (private) | `const getRequests = async (method?: string) =>` |
| 1298 | fn | gateway | (private) | `const gateway = (` |
| 1312 | fn | gateway | (private) | `const gateway = (` |
| 1330 | fn | gateway | (private) | `const gateway = (` |
| 1359 | fn | gateway | (private) | `const gateway = (` |
| 1371 | fn | gateway | (private) | `const gateway = (` |
| 1384 | fn | gateway | (private) | `const gateway = (` |
| 1410 | fn | gateway | (private) | `const gateway = (` |
| 1427 | fn | gateway | (private) | `const gateway = (` |
| 1442 | fn | gateway | (private) | `const gateway = (` |
| 1458 | fn | gateway | (private) | `const gateway = (` |

## Public API

### `resolvePlaywrightChromiumExecutablePath`

```
export function resolvePlaywrightChromiumExecutablePath(
```

**Line:** 132 | **Kind:** fn

### `canRunPlaywrightChromium`

```
export function canRunPlaywrightChromium(chromiumExecutablePath: string): boolean {
```

**Line:** 150 | **Kind:** fn

### `startControlUiE2eServer`

```
export async function startControlUiE2eServer(
```

**Line:** 157 | **Kind:** fn

### `createControlUiMockBootstrapConfig`

```
export function createControlUiMockBootstrapConfig(scenario: ControlUiMockGatewayScenario = {}) {
```

**Line:** 282 | **Kind:** fn

### `createControlUiMockGatewayInitScript`

```
export function createControlUiMockGatewayInitScript(
```

**Line:** 298 | **Kind:** fn

### `installMockGateway`

```
export async function installMockGateway(
```

**Line:** 1244 | **Kind:** fn
