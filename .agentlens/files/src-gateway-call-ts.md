# src/gateway/call.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1324
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 25

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 64 | type | GatewayRequestFunction | pub | - |
| 70 | type | CallGatewayBaseOptions | (private) | - |
| 112 | type | CallGatewayCliOptions | pub | - |
| 116 | type | CallGatewayOptions | pub | - |
| 120 | type | GatewayTransportErrorKind | pub | - |
| 122 | class | GatewayTransportError | pub | - |
| 153 | class | GatewayCredentialsRequiredError | pub | - |
| 171 | class | GatewayExplicitAuthRequiredError | pub | - |
| 178 | class | GatewayStoredDeviceAuthUnavailableError | pub | - |
| 185 | class | GatewayLocalBackendSharedAuthUnavailableError | pub | - |
| 192 | type | GatewayTransportErrorJson | pub | - |
| 210 | type | GatewayClientRequestErrorJson | pub | - |
| 222 | type | GatewayProbeConnectionDetails | pub | - |
| 227 | fn | firstGatewayErrorLine | (private) | `function firstGatewayErrorLine(message: string)...` |
| 231 | fn | formatGatewayTransportErrorJson | pub | `export function formatGatewayTransportErrorJson...` |
| 258 | fn | formatGatewayClientRequestErrorJson | pub | `export function formatGatewayClientRequestError...` |
| 297 | fn | isGatewayTransportError | pub | `export function isGatewayTransportError(value: ...` |
| 312 | fn | isGatewayCredentialsRequiredError | pub | `export function isGatewayCredentialsRequiredError(` |
| 325 | fn | isGatewayExplicitAuthRequiredError | pub | `export function isGatewayExplicitAuthRequiredEr...` |
| 331 | fn | defaultCreateGatewayClient | (private) | `const defaultCreateGatewayClient = (opts: Gatew...` |
| 332 | type | GatewayRuntimeConfigLoader | (private) | - |
| 358 | fn | stopGatewayClient | (private) | `async function stopGatewayClient(client: Gatewa...` |
| 366 | fn | resolveGatewayClientDisplayName | (private) | `function resolveGatewayClientDisplayName(opts: ...` |
| 379 | fn | loadGatewayConfig | (private) | `async function loadGatewayConfig(): Promise<Ope...` |
| 389 | fn | loadGatewayConfigForConnectionDetails | (private) | `function loadGatewayConfigForConnectionDetails(...` |
| 403 | fn | resolveGatewayStateDir | (private) | `function resolveGatewayStateDir(env: NodeJS.Pro...` |
| 411 | fn | resolveGatewayConfigPath | (private) | `function resolveGatewayConfigPath(env: NodeJS.P...` |
| 419 | fn | resolveGatewayPortValue | (private) | `function resolveGatewayPortValue(config?: OpenC...` |
| 427 | fn | buildGatewayConnectionDetails | pub | `export function buildGatewayConnectionDetails(` |
| 475 | fn | isLoopbackGatewayUrl | (private) | `function isLoopbackGatewayUrl(rawUrl: string): ...` |
| 486 | fn | shouldOmitDeviceIdentityForGatewayCall | (private) | `function shouldOmitDeviceIdentityForGatewayCall...` |
| 515 | fn | resolveDeviceIdentityForGatewayCall | (private) | `function resolveDeviceIdentityForGatewayCall():...` |
| 525 | fn | loadStoredOperatorDeviceAuthToken | (private) | `function loadStoredOperatorDeviceAuthToken(` |
| 542 | fn | hasStoredOperatorDeviceAuthToken | (private) | `function hasStoredOperatorDeviceAuthToken(devic...` |
| 546 | fn | resolveGatewayCallAuth | (private) | `function resolveGatewayCallAuth(config: OpenCla...` |
| 554 | fn | ensureGatewayCallCanAuthenticate | (private) | `function ensureGatewayCallCanAuthenticate(param...` |
| 583 | fn | resolveExplicitGatewayAuth | pub | `export function resolveExplicitGatewayAuth(opts...` |
| 593 | fn | ensureExplicitGatewayAuth | pub | `export function ensureExplicitGatewayAuth(param...` |
| 638 | type | GatewayRemoteSettings | (private) | - |
| 645 | type | ResolvedGatewayCallContext | (private) | - |
| 663 | fn | resolveGatewayCallTimeout | (private) | `function resolveGatewayCallTimeout(timeoutValue...` |
| 686 | fn | resolveGatewayCallContext | (private) | `async function resolveGatewayCallContext(` |
| 722 | fn | ensureRemoteModeUrlConfigured | (private) | `function ensureRemoteModeUrlConfigured(context:...` |
| 735 | fn | resolveGatewayCredentials | (private) | `async function resolveGatewayCredentials(contex...` |
| 742 | fn | resolveGatewayCredentialsWithEnv | (private) | `async function resolveGatewayCredentialsWithEnv(` |
| 773 | fn | resolveGatewayTlsFingerprint | (private) | `async function resolveGatewayTlsFingerprint(par...` |
| 802 | fn | formatGatewayCloseError | (private) | `function formatGatewayCloseError(` |
| 825 | fn | formatGatewayTimeoutError | (private) | `function formatGatewayTimeoutError(` |
| 832 | fn | createGatewayCloseTransportError | (private) | `function createGatewayCloseTransportError(param...` |
| 847 | fn | createGatewayTimeoutTransportError | (private) | `function createGatewayTimeoutTransportError(par...` |
| 859 | fn | createGatewayRequestAbortError | (private) | `function createGatewayRequestAbortError(method:...` |
| 863 | fn | ensureGatewaySupportsRequiredMethods | (private) | `function ensureGatewaySupportsRequiredMethods(p...` |
| 892 | fn | isRequiredAgentRuntimeIdentityConnectError | (private) | `function isRequiredAgentRuntimeIdentityConnectE...` |
| 898 | fn | executeGatewayRequestWithScopes | (private) | `async function executeGatewayRequestWithScopes<...` |
| 938 | fn | cleanup | (private) | `const cleanup = () => {` |
| 947 | fn | stopClientThenSettle | (private) | `const stopClientThenSettle = (` |
| 952 | fn | complete | (private) | `const complete = () => {` |
| 965 | fn | stop | (private) | `const stop = (err?: Error, value?: T) => {` |
| 982 | fn | stopAfterAbortHook | (private) | `const stopAfterAbortHook = () => stopClientThen...` |
| 1122 | fn | callGatewayWithScopes | (private) | `async function callGatewayWithScopes<T = Record...` |
| 1238 | fn | buildGatewayProbeConnectionDetails | pub | `export async function buildGatewayProbeConnecti...` |
| 1277 | fn | callGatewayCli | pub | `export async function callGatewayCli<T = Record...` |
| 1288 | fn | callGatewayLeastPrivilege | pub | `export async function callGatewayLeastPrivilege...` |
| 1295 | fn | callGateway | pub | `export async function callGateway<T = Record<st...` |
| 1320 | fn | randomIdempotencyKey | pub | `export function randomIdempotencyKey() {` |

## Public API

### `formatGatewayTransportErrorJson`

```
export function formatGatewayTransportErrorJson(value: unknown): GatewayTransportErrorJson | null {
```

**Line:** 231 | **Kind:** fn

### `formatGatewayClientRequestErrorJson`

```
export function formatGatewayClientRequestErrorJson(
```

**Line:** 258 | **Kind:** fn

### `isGatewayTransportError`

```
export function isGatewayTransportError(value: unknown): value is GatewayTransportError {
```

**Line:** 297 | **Kind:** fn

### `isGatewayCredentialsRequiredError`

```
export function isGatewayCredentialsRequiredError(
```

**Line:** 312 | **Kind:** fn

### `isGatewayExplicitAuthRequiredError`

```
export function isGatewayExplicitAuthRequiredError(
```

**Line:** 325 | **Kind:** fn

### `buildGatewayConnectionDetails`

```
export function buildGatewayConnectionDetails(
```

**Line:** 427 | **Kind:** fn

### `resolveExplicitGatewayAuth`

```
export function resolveExplicitGatewayAuth(opts?: ExplicitGatewayAuth): ExplicitGatewayAuth {
```

**Line:** 583 | **Kind:** fn

### `ensureExplicitGatewayAuth`

```
export function ensureExplicitGatewayAuth(params: {
```

**Line:** 593 | **Kind:** fn

### `buildGatewayProbeConnectionDetails`

```
export async function buildGatewayProbeConnectionDetails(
```

**Line:** 1238 | **Kind:** fn

### `callGatewayCli`

```
export async function callGatewayCli<T = Record<string, unknown>>(
```

**Line:** 1277 | **Kind:** fn

### `callGatewayLeastPrivilege`

```
export async function callGatewayLeastPrivilege<T = Record<string, unknown>>(
```

**Line:** 1288 | **Kind:** fn

### `callGateway`

```
export async function callGateway<T = Record<string, unknown>>(
```

**Line:** 1295 | **Kind:** fn

### `randomIdempotencyKey`

```
export function randomIdempotencyKey() {
```

**Line:** 1320 | **Kind:** fn
