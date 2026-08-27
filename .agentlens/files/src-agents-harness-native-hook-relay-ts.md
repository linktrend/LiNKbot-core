# src/agents/harness/native-hook-relay.ts

[← Back to Module](../modules/src-agents-harness/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2466
- **Language:** TypeScript
- **Symbols:** 125
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | type | JsonValue | (private) | - |
| 66 | type | NativeHookRelayEvent | pub | - |
| 67 | type | NativeHookRelayProvider | pub | - |
| 69 | type | NativeHookRelayInvocation | (private) | - |
| 91 | type | NativeHookRelayProcessResponse | pub | - |
| 98 | type | NativeHookRelayRegistration | (private) | - |
| 121 | type | NativeHookRelayRegistrationHandle | pub | - |
| 132 | type | RegisterNativeHookRelayParams | (private) | - |
| 153 | type | NativeHookRelayCommandOptions | (private) | - |
| 160 | type | NativeHookRelayCommandForEventOptions | (private) | - |
| 164 | type | InvokeNativeHookRelayParams | (private) | - |
| 173 | type | InvokeNativeHookRelayBridgeParams | (private) | - |
| 179 | type | NativeHookRelayInvocationMetadata | (private) | - |
| 195 | type | NativeHookRelayProviderAdapter | (private) | - |
| 241 | fn | resolveNativeHookRelayExpiresAtMs | (private) | `function resolveNativeHookRelayExpiresAtMs(ttlM...` |
| 245 | type | NativeHookRelayPermissionDecision | (private) | - |
| 247 | type | NativeHookRelayPermissionApprovalResult | (private) | - |
| 252 | type | NativeHookRelaySharedState | (private) | - |
| 262 | type | ActiveNativeHookRelayRegistration | (private) | - |
| 268 | type | ActiveNativeHookRelayRegistrationHandle | (private) | - |
| 274 | fn | getNativeHookRelaySharedState | (private) | `function getNativeHookRelaySharedState(): Nativ...` |
| 299 | type | NativeHookRelayPermissionApprovalRequest | (private) | - |
| 313 | type | NativeHookRelayPermissionApprovalRequester | (private) | - |
| 317 | type | NativeHookRelayDeferredToolApprovalRequester | (private) | - |
| 319 | type | NativeHookRelayPreToolUseApproval | (private) | - |
| 325 | type | NativeHookRelayDeferredApprovalOutcome | (private) | - |
| 337 | type | NativeHookRelayBridgeRegistration | (private) | - |
| 344 | type | NativeHookRelayBridgeRequestAuth | (private) | - |
| 420 | fn | registerNativeHookRelay | pub | `export function registerNativeHookRelay(` |
| 522 | fn | unregisterNativeHookRelay | (private) | `function unregisterNativeHookRelay(` |
| 537 | fn | normalizeRelayId | (private) | `function normalizeRelayId(value: string | undef...` |
| 548 | fn | normalizeRelayGeneration | (private) | `function normalizeRelayGeneration(value: string...` |
| 559 | fn | resolveNativeHookRelayNicePrefix | (private) | `function resolveNativeHookRelayNicePrefix(value...` |
| 570 | fn | resolveNativeHookRelayCommandTimeoutMs | (private) | `function resolveNativeHookRelayCommandTimeoutMs(` |
| 585 | fn | buildNativeHookRelayCommand | pub | `export function buildNativeHookRelayCommand(par...` |
| 599 | fn | buildNativeHookRelayCommandWithStateDatabase | (private) | `function buildNativeHookRelayCommandWithStateDa...` |
| 639 | fn | nativePreToolUseMayRunLoopDetection | (private) | `function nativePreToolUseMayRunLoopDetection(` |
| 652 | fn | nativeHookRelayEventHasLocalWork | (private) | `function nativeHookRelayEventHasLocalWork(` |
| 670 | fn | invokeNativeHookRelay | pub | `export async function invokeNativeHookRelay(` |
| 735 | fn | projectNativeHookRelayPreToolUseFailure | (private) | `function projectNativeHookRelayPreToolUseFailure(` |
| 782 | fn | hasNativeHookRelayInvocation | pub | `export function hasNativeHookRelayInvocation(pa...` |
| 799 | fn | resolveNativeHookRelayDeferredToolApproval | pub | `export async function resolveNativeHookRelayDef...` |
| 826 | fn | resolveNativeHookRelayPreToolUseApproval | (private) | `async function resolveNativeHookRelayPreToolUse...` |
| 860 | fn | invokeNativeHookRelayBridge | pub | `export async function invokeNativeHookRelayBridge(` |
| 912 | fn | renderNativeHookRelayUnavailableResponse | pub | `export function renderNativeHookRelayUnavailabl...` |
| 937 | fn | isNativeHookRelayBridgeStaleRegistrationError | pub | `export function isNativeHookRelayBridgeStaleReg...` |
| 943 | fn | recordNativeHookRelayInvocation | (private) | `function recordNativeHookRelayInvocation(invoca...` |
| 953 | fn | removeNativeHookRelayInvocations | (private) | `function removeNativeHookRelayInvocations(relay...` |
| 961 | fn | canAcceptNativeHookRelayGenerationMismatch | (private) | `function canAcceptNativeHookRelayGenerationMism...` |
| 976 | fn | nativeHookRelayPreToolUseApprovalKey | (private) | `function nativeHookRelayPreToolUseApprovalKey(p...` |
| 984 | fn | setNativeHookRelayPreToolUseApproval | (private) | `function setNativeHookRelayPreToolUseApproval(p...` |
| 1015 | fn | removeNativeHookRelayPreToolUseApprovals | (private) | `function removeNativeHookRelayPreToolUseApprova...` |
| 1025 | fn | pruneExpiredNativeHookRelays | (private) | `function pruneExpiredNativeHookRelays(now = Dat...` |
| 1033 | fn | isNativeHookRelayBridgePidDead | (private) | `function isNativeHookRelayBridgePidDead(pid: nu...` |
| 1042 | fn | registerNativeHookRelayBridge | (private) | `function registerNativeHookRelayBridge(` |
| 1103 | fn | writeNativeHookRelayBridgeRecordForRegistration | (private) | `function writeNativeHookRelayBridgeRecordForReg...` |
| 1117 | fn | resolveNativeHookRelayBridgeRecord | (private) | `function resolveNativeHookRelayBridgeRecord(` |
| 1141 | fn | unregisterNativeHookRelayBridge | (private) | `function unregisterNativeHookRelayBridge(` |
| 1151 | fn | removeRecord | (private) | `const removeRecord = () => {` |
| 1175 | fn | handleNativeHookRelayBridgeRequest | (private) | `async function handleNativeHookRelayBridgeRequest(` |
| 1226 | fn | isCurrentNativeHookRelayBridgeRequest | (private) | `function isCurrentNativeHookRelayBridgeRequest(...` |
| 1232 | fn | readNativeHookRelayBridgeBody | (private) | `async function readNativeHookRelayBridgeBody(re...` |
| 1246 | fn | readNativeHookRelayBridgePayload | (private) | `function readNativeHookRelayBridgePayload(value...` |
| 1259 | fn | writeNativeHookRelayBridgeJson | (private) | `function writeNativeHookRelayBridgeJson(` |
| 1272 | fn | readNativeHookRelayBridgeRecord | (private) | `function readNativeHookRelayBridgeRecord(` |
| 1283 | fn | readNativeHookRelayBridgeRecordIfExists | (private) | `function readNativeHookRelayBridgeRecordIfExists(` |
| 1295 | fn | invokeNativeHookRelayBridgeRecord | (private) | `async function invokeNativeHookRelayBridgeRecor...` |
| 1303 | fn | postNativeHookRelayBridgeRecord | (private) | `function postNativeHookRelayBridgeRecord(params: {` |
| 1311 | fn | resolveOnce | (private) | `const resolveOnce = (value: NativeHookRelayProc...` |
| 1317 | fn | rejectOnce | (private) | `const rejectOnce = (error: unknown) => {` |
| 1378 | fn | isRetryableNativeHookRelayBridgeError | (private) | `function isRetryableNativeHookRelayBridgeError(...` |
| 1388 | fn | isRetryableNativeHookRelayBridgeLookupError | (private) | `function isRetryableNativeHookRelayBridgeLookup...` |
| 1399 | fn | delay | (private) | `function delay(ms: number): Promise<void> {` |
| 1405 | fn | processNativeHookRelayInvocation | (private) | `async function processNativeHookRelayInvocation...` |
| 1422 | fn | runNativeHookRelayPreToolUse | (private) | `async function runNativeHookRelayPreToolUse(par...` |
| 1484 | fn | runNativeHookRelayPostToolUse | (private) | `async function runNativeHookRelayPostToolUse(pa...` |
| 1528 | fn | runNativeHookRelayPermissionRequest | (private) | `async function runNativeHookRelayPermissionRequ...` |
| 1585 | fn | runNativeHookRelayBeforeAgentFinalize | (private) | `async function runNativeHookRelayBeforeAgentFin...` |
| 1626 | fn | startNativeHookRelayPermissionApprovalWithBudget | (private) | `async function startNativeHookRelayPermissionAp...` |
| 1647 | fn | nativeHookRelayPermissionApprovalKey | (private) | `function nativeHookRelayPermissionApprovalKey(p...` |
| 1661 | fn | nativeHookRelayPermissionAllowAlwaysKey | (private) | `function nativeHookRelayPermissionAllowAlwaysKe...` |
| 1680 | fn | permissionRequestFallbackKey | (private) | `function permissionRequestFallbackKey(request: ...` |
| 1688 | fn | permissionRequestToolInputKeyFingerprint | (private) | `function permissionRequestToolInputKeyFingerpri...` |
| 1706 | fn | permissionRequestContentFingerprint | (private) | `function permissionRequestContentFingerprint(` |
| 1718 | fn | updateJsonHash | (private) | `function updateJsonHash(hash: ReturnType<typeof...` |
| 1777 | fn | readBoundedOwnKeys | (private) | `function readBoundedOwnKeys(` |
| 1797 | fn | consumeNativeHookRelayPermissionBudget | (private) | `function consumeNativeHookRelayPermissionBudget...` |
| 1811 | fn | hasNativeHookRelayPermissionAllowAlways | (private) | `function hasNativeHookRelayPermissionAllowAlway...` |
| 1828 | fn | rememberNativeHookRelayPermissionAllowAlways | (private) | `function rememberNativeHookRelayPermissionAllow...` |
| 1848 | fn | pruneNativeHookRelayPermissionAllowAlways | (private) | `function pruneNativeHookRelayPermissionAllowAlw...` |
| 1861 | fn | removeNativeHookRelayPermissionState | (private) | `function removeNativeHookRelayPermissionState(r...` |
| 1870 | fn | snapshotNativeHookRelayPayload | (private) | `function snapshotNativeHookRelayPayload(payload...` |
| 1876 | fn | snapshotJsonValue | (private) | `function snapshotJsonValue(value: JsonValue, st...` |
| 1906 | fn | snapshotString | (private) | `function snapshotString(value: string, state: {...` |
| 1925 | fn | normalizeNativeHookInvocation | (private) | `function normalizeNativeHookInvocation(params: {` |
| 1947 | fn | getNativeHookRelayProviderAdapter | (private) | `function getNativeHookRelayProviderAdapter(` |
| 1953 | fn | normalizeCodexHookMetadata | (private) | `function normalizeCodexHookMetadata(rawPayload:...` |
| 1999 | fn | readCodexToolInput | (private) | `function readCodexToolInput(rawPayload: JsonVal...` |
| 2015 | fn | normalizeCodexToolInput | (private) | `function normalizeCodexToolInput(` |
| 2029 | fn | normalizeCodexCommand | (private) | `function normalizeCodexCommand(value: JsonValue...` |
| 2039 | fn | nativeHookRelayParamsWereRewritten | (private) | `function nativeHookRelayParamsWereRewritten(` |
| 2049 | fn | readCodexToolResponse | (private) | `function readCodexToolResponse(rawPayload: Json...` |
| 2054 | fn | readNativeHookRelayApprovalMode | (private) | `function readNativeHookRelayApprovalMode(rawPay...` |
| 2059 | fn | normalizeNativeHookToolName | (private) | `function normalizeNativeHookToolName(toolName: ...` |
| 2064 | fn | requestNativeHookRelayPermissionApproval | (private) | `async function requestNativeHookRelayPermission...` |
| 2128 | fn | waitForNativeHookRelayApprovalDecision | (private) | `async function waitForNativeHookRelayApprovalDe...` |
| 2160 | fn | formatPermissionApprovalDescription | (private) | `function formatPermissionApprovalDescription(` |
| 2172 | fn | formatToolInputPreview | (private) | `function formatToolInputPreview(toolInput: Reco...` |
| 2186 | fn | sanitizeApprovalText | (private) | `function sanitizeApprovalText(value: string): s...` |
| 2195 | fn | isUnsafeApprovalCodePoint | (private) | `function isUnsafeApprovalCodePoint(codePoint: n...` |
| 2207 | fn | nativeHookRelayProviderDisplayName | (private) | `function nativeHookRelayProviderDisplayName(pro...` |
| 2214 | fn | truncateText | (private) | `function truncateText(value: string, maxLength:...` |
| 2221 | fn | resolveOpenClawCliExecutable | (private) | `function resolveOpenClawCliExecutable(): string {` |
| 2252 | fn | normalizeAllowedEvents | (private) | `function normalizeAllowedEvents(` |
| 2261 | fn | normalizePositiveInteger | (private) | `function normalizePositiveInteger(value: number...` |
| 2267 | fn | normalizeOptionalPositiveInteger | (private) | `function normalizeOptionalPositiveInteger(value...` |
| 2273 | fn | shellQuoteArgs | (private) | `function shellQuoteArgs(args: readonly string[]...` |
| 2277 | fn | shellQuoteArg | (private) | `function shellQuoteArg(value: string, platform:...` |
| 2287 | fn | readNativeHookRelayProvider | (private) | `function readNativeHookRelayProvider(value: unk...` |
| 2294 | fn | readNativeHookRelayEvent | (private) | `function readNativeHookRelayEvent(value: unknow...` |
| 2306 | fn | readNonEmptyString | (private) | `function readNonEmptyString(value: unknown, nam...` |
| 2313 | fn | readOptionalString | (private) | `function readOptionalString(value: unknown): st...` |
| 2317 | fn | readOptionalBoolean | (private) | `function readOptionalBoolean(value: unknown): b...` |
| 2321 | fn | isJsonValue | (private) | `function isJsonValue(value: unknown): value is ...` |
| 2392 | fn | isJsonObject | (private) | `function isJsonObject(value: unknown): value is...` |

## Public API

### `registerNativeHookRelay`

```
export function registerNativeHookRelay(
```

**Line:** 420 | **Kind:** fn

### `buildNativeHookRelayCommand`

```
export function buildNativeHookRelayCommand(params: {
```

**Line:** 585 | **Kind:** fn

### `invokeNativeHookRelay`

```
export async function invokeNativeHookRelay(
```

**Line:** 670 | **Kind:** fn

### `hasNativeHookRelayInvocation`

```
export function hasNativeHookRelayInvocation(params: {
```

**Line:** 782 | **Kind:** fn

### `resolveNativeHookRelayDeferredToolApproval`

```
export async function resolveNativeHookRelayDeferredToolApproval(params: {
```

**Line:** 799 | **Kind:** fn

### `invokeNativeHookRelayBridge`

```
export async function invokeNativeHookRelayBridge(
```

**Line:** 860 | **Kind:** fn

### `renderNativeHookRelayUnavailableResponse`

```
export function renderNativeHookRelayUnavailableResponse(params: {
```

**Line:** 912 | **Kind:** fn

### `isNativeHookRelayBridgeStaleRegistrationError`

```
export function isNativeHookRelayBridgeStaleRegistrationError(error: unknown): boolean {
```

**Line:** 937 | **Kind:** fn
