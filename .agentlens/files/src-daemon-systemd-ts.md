# src/daemon/systemd.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1576
- **Language:** TypeScript
- **Symbols:** 73
- **Public symbols:** 16

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | fn | resolveSystemdUnitPathForName | (private) | `function resolveSystemdUnitPathForName(env: Gat...` |
| 71 | fn | resolveSystemdServiceName | (private) | `function resolveSystemdServiceName(env: Gateway...` |
| 79 | fn | resolveSystemdUnitPath | (private) | `function resolveSystemdUnitPath(env: GatewaySer...` |
| 83 | fn | resolveSystemdUserUnitPath | pub | `export function resolveSystemdUserUnitPath(env:...` |
| 93 | fn | findSystemSystemdUnitPath | (private) | `async function findSystemSystemdUnitPath(env: G...` |
| 107 | type | InstalledSystemdGatewayScope | (private) | - |
| 113 | fn | findMarkerOwnedSystemSystemdUnit | (private) | `async function findMarkerOwnedSystemSystemdUnit...` |
| 144 | fn | findInstalledSystemdGatewayScope | pub | `export async function findInstalledSystemdGatew...` |
| 172 | fn | readSystemdServiceExecStart | pub | `export async function readSystemdServiceExecStart(` |
| 235 | fn | buildEnvironmentValueSources | (private) | `function buildEnvironmentValueSources(` |
| 242 | fn | mergeEnvironmentValueSources | (private) | `function mergeEnvironmentValueSources(` |
| 253 | fn | normalizeSystemdEnvironmentKey | (private) | `function normalizeSystemdEnvironmentKey(key: st...` |
| 257 | fn | readSystemdEnvironmentValueSource | (private) | `function readSystemdEnvironmentValueSource(para...` |
| 273 | fn | collectSystemdInlineManagedKeys | (private) | `function collectSystemdInlineManagedKeys(params: {` |
| 302 | fn | collectSystemdFileManagedKeys | (private) | `function collectSystemdFileManagedKeys(params: {` |
| 315 | fn | collectSystemdFileBackedEnvironment | (private) | `function collectSystemdFileBackedEnvironment(pa...` |
| 335 | fn | sanitizeSystemdUnitBackupContent | (private) | `function sanitizeSystemdUnitBackupContent(param...` |
| 377 | fn | resolveSystemdEnvironmentFilePath | (private) | `function resolveSystemdEnvironmentFilePath(para...` |
| 387 | fn | resolveLegacyNodeSystemdEnvironmentFilePath | (private) | `function resolveLegacyNodeSystemdEnvironmentFil...` |
| 399 | fn | isNodeSystemdEnvironment | (private) | `function isNodeSystemdEnvironment(env: GatewayS...` |
| 403 | fn | expandSystemdSpecifier | (private) | `function expandSystemdSpecifier(input: string, ...` |
| 408 | fn | parseEnvironmentFileSpecs | (private) | `function parseEnvironmentFileSpecs(raw: string)...` |
| 412 | fn | decodeSystemdEnvironmentFileValue | (private) | `function decodeSystemdEnvironmentFileValue(rawV...` |
| 416 | type | ParseState | (private) | - |
| 506 | fn | parseEnvironmentFileLine | (private) | `function parseEnvironmentFileLine(` |
| 529 | fn | serializeSystemdEnvironmentFileValue | (private) | `function serializeSystemdEnvironmentFileValue(v...` |
| 543 | fn | serializeSystemdEnvironmentFile | (private) | `function serializeSystemdEnvironmentFile(enviro...` |
| 549 | fn | readSystemdEnvironmentFile | (private) | `async function readSystemdEnvironmentFile(pathn...` |
| 571 | fn | resolveSystemdEnvironmentFiles | (private) | `async function resolveSystemdEnvironmentFiles(p...` |
| 606 | type | SystemdServiceInfo | (private) | - |
| 621 | fn | parseSystemdShow | (private) | `function parseSystemdShow(output: string): Syst...` |
| 693 | type | SystemdUnitScope | pub | - |
| 695 | fn | execSystemctl | (private) | `async function execSystemctl(` |
| 708 | fn | readSystemctlDetail | (private) | `function readSystemctlDetail(result: { stdout: ...` |
| 717 | fn | isSystemdUnitNotEnabled | (private) | `function isSystemdUnitNotEnabled(detail: string...` |
| 733 | fn | isSystemdUnitMissingDetail | (private) | `function isSystemdUnitMissingDetail(detail: str...` |
| 747 | fn | isSystemdUserScopeUnavailable | (private) | `function isSystemdUserScopeUnavailable(detail: ...` |
| 751 | fn | isGenericSystemctlIsEnabledFailure | (private) | `function isGenericSystemctlIsEnabledFailure(det...` |
| 768 | fn | isNonFatalSystemdInstallProbeError | pub | `export function isNonFatalSystemdInstallProbeEr...` |
| 777 | fn | resolveSystemctlDirectUserScopeArgs | (private) | `function resolveSystemctlDirectUserScopeArgs():...` |
| 781 | fn | readSystemctlEnvUser | (private) | `function readSystemctlEnvUser(env: GatewayServi...` |
| 785 | fn | readSystemctlEffectiveUser | (private) | `function readSystemctlEffectiveUser(): string |...` |
| 793 | fn | readSystemctlEffectiveUid | (private) | `function readSystemctlEffectiveUid(): number | ...` |
| 804 | fn | resolveSystemctlProcessEnv | (private) | `function resolveSystemctlProcessEnv(env: Gatewa...` |
| 830 | fn | isNonRootUser | (private) | `function isNonRootUser(user: string | null): us...` |
| 834 | fn | hasRootUserManagerEnvironment | (private) | `function hasRootUserManagerEnvironment(env: Gat...` |
| 845 | fn | resolveSystemctlUserScope | (private) | `function resolveSystemctlUserScope(env: Gateway...` |
| 871 | fn | resolveSystemctlMachineUserScopeArgs | (private) | `function resolveSystemctlMachineUserScopeArgs(u...` |
| 879 | fn | shouldFallbackToMachineUserScope | (private) | `function shouldFallbackToMachineUserScope(detai...` |
| 889 | fn | execSystemctlUser | (private) | `async function execSystemctlUser(` |
| 926 | fn | isSystemdUserServiceAvailable | pub | `export async function isSystemdUserServiceAvail...` |
| 940 | fn | isSystemdUnitActive | pub | `export async function isSystemdUnitActive(` |
| 954 | fn | assertSystemdAvailable | (private) | `async function assertSystemdAvailable(` |
| 975 | fn | writeSystemdUnit | (private) | `async function writeSystemdUnit({` |
| 1076 | fn | writeSystemdGatewayEnvironmentFile | (private) | `async function writeSystemdGatewayEnvironmentFi...` |
| 1174 | fn | removeNodeSystemdManagedEnvironmentKeys | (private) | `async function removeNodeSystemdManagedEnvironm...` |
| 1208 | fn | stageSystemdService | pub | `export async function stageSystemdService({` |
| 1234 | fn | activateSystemdService | (private) | `async function activateSystemdService(params: {...` |
| 1237 | fn | reloadSystemd | (private) | `const reloadSystemd = async () => await execSys...` |
| 1253 | fn | runAfterReloadRetry | (private) | `const runAfterReloadRetry = async (action: "ena...` |
| 1276 | fn | installSystemdService | pub | `export async function installSystemdService(` |
| 1302 | fn | uninstallSystemdService | pub | `export async function uninstallSystemdService({` |
| 1330 | fn | isRunningAsRoot | (private) | `function isRunningAsRoot(): boolean {` |
| 1341 | fn | runSystemdServiceAction | (private) | `async function runSystemdServiceAction(params: {` |
| 1386 | fn | startSystemdService | pub | `export async function startSystemdService({` |
| 1401 | fn | stopSystemdService | pub | `export async function stopSystemdService({` |
| 1416 | fn | restartSystemdService | pub | `export async function restartSystemdService({` |
| 1432 | fn | isSystemdServiceEnabled | pub | `export async function isSystemdServiceEnabled(a...` |
| 1452 | fn | readSystemdServiceRuntime | pub | `export async function readSystemdServiceRuntime(` |
| 1510 | type | LegacySystemdUnit | (private) | - |
| 1517 | fn | isSystemctlAvailable | (private) | `async function isSystemctlAvailable(env: Gatewa...` |
| 1525 | fn | findLegacySystemdUnits | (private) | `async function findLegacySystemdUnits(env: Gate...` |
| 1549 | fn | uninstallLegacySystemdUnits | pub | `export async function uninstallLegacySystemdUni...` |

## Public API

### `resolveSystemdUserUnitPath`

```
export function resolveSystemdUserUnitPath(env: GatewayServiceEnv): string {
```

**Line:** 83 | **Kind:** fn

### `findInstalledSystemdGatewayScope`

```
export async function findInstalledSystemdGatewayScope(
```

**Line:** 144 | **Kind:** fn

### `readSystemdServiceExecStart`

```
export async function readSystemdServiceExecStart(
```

**Line:** 172 | **Kind:** fn

### `isNonFatalSystemdInstallProbeError`

```
export function isNonFatalSystemdInstallProbeError(error: unknown): boolean {
```

**Line:** 768 | **Kind:** fn

### `isSystemdUserServiceAvailable`

```
export async function isSystemdUserServiceAvailable(
```

**Line:** 926 | **Kind:** fn

### `isSystemdUnitActive`

```
export async function isSystemdUnitActive(
```

**Line:** 940 | **Kind:** fn

### `stageSystemdService`

```
export async function stageSystemdService({
```

**Line:** 1208 | **Kind:** fn

### `installSystemdService`

```
export async function installSystemdService(
```

**Line:** 1276 | **Kind:** fn

### `uninstallSystemdService`

```
export async function uninstallSystemdService({
```

**Line:** 1302 | **Kind:** fn

### `startSystemdService`

```
export async function startSystemdService({
```

**Line:** 1386 | **Kind:** fn

### `stopSystemdService`

```
export async function stopSystemdService({
```

**Line:** 1401 | **Kind:** fn

### `restartSystemdService`

```
export async function restartSystemdService({
```

**Line:** 1416 | **Kind:** fn

### `isSystemdServiceEnabled`

```
export async function isSystemdServiceEnabled(args: GatewayServiceEnvArgs): Promise<boolean> {
```

**Line:** 1432 | **Kind:** fn

### `readSystemdServiceRuntime`

```
export async function readSystemdServiceRuntime(
```

**Line:** 1452 | **Kind:** fn

### `uninstallLegacySystemdUnits`

```
export async function uninstallLegacySystemdUnits({
```

**Line:** 1549 | **Kind:** fn
