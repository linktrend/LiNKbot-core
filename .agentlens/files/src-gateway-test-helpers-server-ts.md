# src/gateway/test-helpers.server.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1274
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 20

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 111 | fn | resolveGatewayTestMainSessionKeys | (private) | `function resolveGatewayTestMainSessionKeys(): s...` |
| 129 | fn | serializeGatewayTestSessionConfig | (private) | `function serializeGatewayTestSessionConfig(): s...` |
| 136 | fn | hasUnsyncedGatewayTestSessionConfig | (private) | `function hasUnsyncedGatewayTestSessionConfig():...` |
| 143 | fn | persistTestSessionConfig | (private) | `async function persistTestSessionConfig(): Prom...` |
| 210 | fn | writeSessionStore | pub | `export async function writeSessionStore(params: {` |
| 274 | fn | setupGatewayTestHome | (private) | `async function setupGatewayTestHome() {` |
| 284 | fn | applyGatewaySkipEnv | (private) | `function applyGatewaySkipEnv() {` |
| 298 | fn | resetGatewayLifecycleTestState | (private) | `function resetGatewayLifecycleTestState(options...` |
| 310 | fn | resetGatewayTestState | (private) | `async function resetGatewayTestState(options: {...` |
| 434 | fn | cleanupGatewayTestHome | (private) | `async function cleanupGatewayTestHome(options: ...` |
| 461 | fn | resetGatewayTestRuntimeOnly | (private) | `async function resetGatewayTestRuntimeOnly() {` |
| 530 | fn | installGatewayTestHooks | pub | `export function installGatewayTestHooks(options...` |
| 576 | fn | getFreePort | pub | `export async function getFreePort(): Promise<nu...` |
| 580 | type | GatewayTestMessage | (private) | - |
| 593 | type | TrackedWs | (private) | - |
| 595 | fn | getTrackedConnectChallengeNonce | pub | `export function getTrackedConnectChallengeNonce...` |
| 600 | fn | trackConnectChallengeNonce | pub | `export function trackConnectChallengeNonce(ws: ...` |
| 622 | fn | onceMessage | pub | `export function onceMessage<T extends GatewayTe...` |
| 631 | fn | cleanup | (private) | `function cleanup() {` |
| 636 | fn | closeHandler | (private) | `function closeHandler(code: number, reason: Buf...` |
| 640 | fn | handler | (private) | `function handler(data: WebSocket.RawData) {` |
| 657 | fn | startGatewayServer | pub | `export async function startGatewayServer(port: ...` |
| 695 | fn | startGatewayServerWithRetries | pub | `export async function startGatewayServerWithRet...` |
| 717 | fn | waitForWebSocketOpen | (private) | `async function waitForWebSocketOpen(ws: WebSock...` |
| 720 | fn | cleanup | (private) | `const cleanup = () => {` |
| 726 | fn | onOpen | (private) | `const onOpen = () => {` |
| 730 | fn | onError | (private) | `const onError = (err: unknown) => {` |
| 734 | fn | onClose | (private) | `const onClose = (code: number, reason: Buffer) ...` |
| 744 | fn | openTrackedWebSocket | (private) | `async function openTrackedWebSocket(params: {` |
| 757 | fn | withGatewayServer | pub | `export async function withGatewayServer<T>(` |
| 772 | fn | createGatewaySuiteHarness | pub | `export async function createGatewaySuiteHarness...` |
| 800 | fn | startServer | pub | `export async function startServer(token?: strin...` |
| 833 | fn | startServerWithClient | pub | `export async function startServerWithClient(` |
| 844 | fn | startConnectedServerWithClient | pub | `export async function startConnectedServerWithC...` |
| 853 | type | ConnectResponse | (private) | - |
| 861 | fn | resolveDefaultTestDeviceIdentityPath | (private) | `function resolveDefaultTestDeviceIdentityPath(p...` |
| 878 | fn | readConnectChallengeNonce | pub | `export async function readConnectChallengeNonce(` |
| 904 | fn | resolveAuthTokenForSignature | (private) | `function resolveAuthTokenForSignature(opts?: {` |
| 912 | fn | testOnlyResolveAuthTokenForSignature | pub | `export function testOnlyResolveAuthTokenForSign...` |
| 920 | type | ConnectReqClient | (private) | - |
| 931 | type | ConnectReqDevice | (private) | - |
| 939 | type | ConnectReqOptions | (private) | - |
| 961 | fn | shouldPrePairTestDevice | (private) | `function shouldPrePairTestDevice(params: {` |
| 980 | fn | pairedDeviceAllowsScopes | (private) | `function pairedDeviceAllowsScopes(params: {` |
| 997 | fn | prePairTestDevice | (private) | `async function prePairTestDevice(params: {` |
| 1035 | fn | connectReq | pub | `export async function connectReq(` |
| 1079 | fn | device | (private) | `const device = (() => {` |
| 1173 | fn | connectOk | pub | `export async function connectOk(ws: WebSocket, ...` |
| 1180 | fn | connectWebchatClient | pub | `export async function connectWebchatClient(para...` |
| 1193 | fn | onOpen | (private) | `const onOpen = () => {` |
| 1198 | fn | onError | (private) | `const onError = (err: Error) => {` |
| 1221 | fn | rpcReq | pub | `export async function rpcReq<T extends Record<s...` |
| 1258 | fn | waitForSystemEvent | pub | `export async function waitForSystemEvent(timeou...` |

## Public API

### `writeSessionStore`

```
export async function writeSessionStore(params: {
```

**Line:** 210 | **Kind:** fn

### `installGatewayTestHooks`

```
export function installGatewayTestHooks(options?: { scope?: "test" | "suite" }) {
```

**Line:** 530 | **Kind:** fn

### `getFreePort`

```
export async function getFreePort(): Promise<number> {
```

**Line:** 576 | **Kind:** fn

### `getTrackedConnectChallengeNonce`

```
export function getTrackedConnectChallengeNonce(ws: WebSocket): string | undefined {
```

**Line:** 595 | **Kind:** fn

### `trackConnectChallengeNonce`

```
export function trackConnectChallengeNonce(ws: WebSocket): void {
```

**Line:** 600 | **Kind:** fn

### `onceMessage`

```
export function onceMessage<T extends GatewayTestMessage = GatewayTestMessage>(
```

**Line:** 622 | **Kind:** fn

### `startGatewayServer`

```
export async function startGatewayServer(port: number, opts?: GatewayServerOptions) {
```

**Line:** 657 | **Kind:** fn

### `startGatewayServerWithRetries`

```
export async function startGatewayServerWithRetries(params: {
```

**Line:** 695 | **Kind:** fn

### `withGatewayServer`

```
export async function withGatewayServer<T>(
```

**Line:** 757 | **Kind:** fn

### `createGatewaySuiteHarness`

```
export async function createGatewaySuiteHarness(opts?: {
```

**Line:** 772 | **Kind:** fn

### `startServer`

```
export async function startServer(token?: string, opts?: GatewayServerOptions) {
```

**Line:** 800 | **Kind:** fn

### `startServerWithClient`

```
export async function startServerWithClient(
```

**Line:** 833 | **Kind:** fn

### `startConnectedServerWithClient`

```
export async function startConnectedServerWithClient(
```

**Line:** 844 | **Kind:** fn

### `readConnectChallengeNonce`

```
export async function readConnectChallengeNonce(
```

**Line:** 878 | **Kind:** fn

### `testOnlyResolveAuthTokenForSignature`

```
export function testOnlyResolveAuthTokenForSignature(opts?: {
```

**Line:** 912 | **Kind:** fn

### `connectReq`

```
export async function connectReq(
```

**Line:** 1035 | **Kind:** fn

### `connectOk`

```
export async function connectOk(ws: WebSocket, opts?: Parameters<typeof connectReq>[1]) {
```

**Line:** 1173 | **Kind:** fn

### `connectWebchatClient`

```
export async function connectWebchatClient(params: {
```

**Line:** 1180 | **Kind:** fn

### `rpcReq`

```
export async function rpcReq<T extends Record<string, unknown>>(
```

**Line:** 1221 | **Kind:** fn

### `waitForSystemEvent`

```
export async function waitForSystemEvent(timeoutMs = 2000) {
```

**Line:** 1258 | **Kind:** fn
