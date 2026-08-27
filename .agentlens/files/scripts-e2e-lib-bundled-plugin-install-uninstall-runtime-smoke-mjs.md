# scripts/e2e/lib/bundled-plugin-install-uninstall/runtime-smoke.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1559
- **Language:** JavaScript
- **Symbols:** 84
- **Public symbols:** 26

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | fn | readPositiveIntEnv | (private) | `function readPositiveIntEnv(name, fallback) {` |
| 65 | fn | readPositiveInt | (private) | `function readPositiveInt(raw, fallback, name) {` |
| 80 | fn | readNonNegativeInt | (private) | `function readNonNegativeInt(raw, fallback, name) {` |
| 95 | fn | resolveRuntimeSmokePort | pub | `export function resolveRuntimeSmokePort(pluginI...` |
| 106 | fn | readJson | (private) | `function readJson(file) {` |
| 110 | fn | writeJson | (private) | `function writeJson(file, value) {` |
| 115 | fn | readFileChunk | (private) | `function readFileChunk(file, startOffset, maxBy...` |
| 143 | fn | readFileTailBuffer | (private) | `function readFileTailBuffer(file, maxBytes = LO...` |
| 155 | fn | readFileTail | pub | `export function readFileTail(file, maxBytes = L...` |
| 159 | fn | findFirstNeedleOffset | (private) | `function findFirstNeedleOffset(file, needles) {` |
| 200 | fn | createReadyLogScanner | pub | `export function createReadyLogScanner(file) {` |
| 241 | fn | manifestPath | (private) | `function manifestPath(pluginDir, pluginRoot) {` |
| 250 | fn | loadManifest | (private) | `function loadManifest(pluginDir, pluginRoot) {` |
| 258 | fn | configPathFromEnv | (private) | `function configPathFromEnv(env = process.env) {` |
| 264 | fn | readConfig | (private) | `function readConfig(env = process.env) {` |
| 269 | fn | writeConfig | (private) | `function writeConfig(config, env = process.env) {` |
| 273 | fn | ensureGatewayConfig | (private) | `function ensureGatewayConfig(config, port) {` |
| 292 | fn | activateSmokePlugin | pub | `export function activateSmokePlugin(config, plu...` |
| 323 | fn | channelActivationEnvName | (private) | `function channelActivationEnvName(channel) {` |
| 330 | fn | withManifestChannelActivationEnv | pub | `export function withManifestChannelActivationEn...` |
| 345 | fn | buildPluginPlan | (private) | `function buildPluginPlan(manifest) {` |
| 372 | fn | isNonEmptyString | (private) | `function isNonEmptyString(value) {` |
| 376 | fn | appendBoundedOutput | pub | `export function appendBoundedOutput(buffer, chu...` |
| 385 | fn | formatCapturedOutput | (private) | `function formatCapturedOutput(label, buffer) {` |
| 396 | fn | createBoundedGatewayLog | (private) | `function createBoundedGatewayLog(logPath) {` |
| 434 | fn | runCommand | pub | `export function runCommand(command, args, optio...` |
| 504 | fn | startGateway | pub | `export function startGateway(params) {` |
| 537 | fn | hasChildExited | pub | `export function hasChildExited(child) {` |
| 541 | fn | trackGatewayChild | (private) | `function trackGatewayChild(child) {` |
| 543 | fn | untrack | (private) | `const untrack = () => {` |
| 553 | fn | trackCommandChild | (private) | `function trackCommandChild(child) {` |
| 555 | fn | untrack | (private) | `const untrack = () => {` |
| 565 | fn | installParentCleanup | (private) | `function installParentCleanup() {` |
| 576 | fn | handler | (private) | `const handler = () => {` |
| 589 | fn | cleanupActiveChildren | (private) | `function cleanupActiveChildren(signal) {` |
| 604 | fn | stopGateway | pub | `export async function stopGateway(child) {` |
| 608 | fn | waitForExit | (private) | `const waitForExit = async (ms) => {` |
| 627 | fn | processTreeIsAlive | (private) | `function processTreeIsAlive(child) {` |
| 645 | fn | defaultRunTaskkill | (private) | `function defaultRunTaskkill(command, args, opti...` |
| 649 | fn | signalChildProcessTree | pub | `export function signalChildProcessTree(` |
| 689 | fn | waitForReady | pub | `export async function waitForReady(params) {` |
| 723 | fn | fetchHttpProbeStatus | (private) | `async function fetchHttpProbeStatus(port, pathN...` |
| 776 | fn | httpOk | pub | `export async function httpOk(port, pathName, op...` |
| 785 | fn | assertHttpOk | (private) | `async function assertHttpOk(port, pathName) {` |
| 806 | fn | listReadyzFailingComponents | (private) | `function listReadyzFailingComponents(body) {` |
| 820 | fn | isAllowedDegradedReadyz | (private) | `function isAllowedDegradedReadyz(res, allowedFa...` |
| 831 | fn | formatHttpProbeBody | (private) | `function formatHttpProbeBody(res) {` |
| 842 | fn | assertReadyzProbe | pub | `export async function assertReadyzProbe(options) {` |
| 872 | fn | rpcCall | pub | `export async function rpcCall(method, params, o...` |
| 904 | fn | retryRpcCall | (private) | `async function retryRpcCall(method, params, opt...` |
| 924 | fn | isRetryableGatewayCallError | (private) | `function isRetryableGatewayCallError(error) {` |
| 936 | fn | parseJsonOutput | (private) | `function parseJsonOutput(stdout) {` |
| 972 | fn | parseJsonValue | (private) | `function parseJsonValue(text) {` |
| 980 | fn | isGatewayJsonOutput | (private) | `function isGatewayJsonOutput(raw) {` |
| 989 | fn | hasOwnPayloadField | (private) | `function hasOwnPayloadField(raw, field) {` |
| 996 | fn | isRecord | (private) | `function isRecord(value) {` |
| 1000 | fn | unwrapRpcPayload | pub | `export function unwrapRpcPayload(raw) {` |
| 1016 | fn | assertGatewayHealthPayload | pub | `export function assertGatewayHealthPayload(payl...` |
| 1046 | fn | smokePlugin | (private) | `async function smokePlugin(pluginId, pluginDir,...` |
| 1109 | fn | assertBaseGatewayProbes | (private) | `async function assertBaseGatewayProbes(options) {` |
| 1115 | fn | runManifestProbes | (private) | `async function runManifestProbes(plan, options) {` |
| 1150 | fn | isChannelVisible | (private) | `function isChannelVisible(payload, channel) {` |
| 1161 | fn | assertChannelVisible | pub | `export function assertChannelVisible(payload, c...` |
| 1170 | fn | isCommandVisible | pub | `export function isCommandVisible(payload, alias) {` |
| 1185 | fn | assertCommandVisible | (private) | `function assertCommandVisible(payload, alias) {` |
| 1194 | fn | retryCommandsListWithAliases | (private) | `async function retryCommandsListWithAliases(ali...` |
| 1211 | fn | assertToolVisible | (private) | `function assertToolVisible(payload, tool) {` |
| 1223 | fn | assertSpeechProviderVisible | (private) | `function assertSpeechProviderVisible(payload, p...` |
| 1237 | fn | runWatchdog | (private) | `async function runWatchdog(options) {` |
| 1254 | fn | findReadyLogOffset | pub | `export function findReadyLogOffset(logPath) {` |
| 1258 | fn | assertGatewayLogNotTruncated | pub | `export function assertGatewayLogNotTruncated(lo...` |
| 1268 | fn | assertNoPostReadyRuntimeDepsWork | pub | `export function assertNoPostReadyRuntimeDepsWor...` |
| 1296 | fn | commandIncludesPackageManager | (private) | `function commandIncludesPackageManager(args) {` |
| 1307 | fn | parseProcessSnapshot | (private) | `function parseProcessSnapshot(stdout) {` |
| 1323 | fn | findPackageManagerDescendants | pub | `export function findPackageManagerDescendants(p...` |
| 1353 | fn | assertNoPackageManagerChildren | pub | `export async function assertNoPackageManagerChi...` |
| 1377 | fn | smokeTtsGlobalDisable | (private) | `async function smokeTtsGlobalDisable(pluginId, ...` |
| 1432 | fn | smokeOpenAiTts | (private) | `async function smokeOpenAiTts(pluginIndex) {` |
| 1492 | fn | createIsolatedStateEnv | pub | `export function createIsolatedStateEnv(label) {` |
| 1510 | fn | cleanupIsolatedStateEnv | pub | `export function cleanupIsolatedStateEnv(env) {` |
| 1519 | fn | tailFile | (private) | `function tailFile(file) {` |
| 1523 | fn | tailText | (private) | `function tailText(text) {` |
| 1527 | fn | main | (private) | `async function main(argv = process.argv.slice(2...` |
| 1547 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value, fallbackMessa...` |

## Public API

### `resolveRuntimeSmokePort`

```
export function resolveRuntimeSmokePort(pluginIndex, offset = 0, env = process.env) {
```

**Line:** 95 | **Kind:** fn

### `readFileTail`

```
export function readFileTail(file, maxBytes = LOG_SCAN_BYTES) {
```

**Line:** 155 | **Kind:** fn

### `createReadyLogScanner`

```
export function createReadyLogScanner(file) {
```

**Line:** 200 | **Kind:** fn

### `activateSmokePlugin`

```
export function activateSmokePlugin(config, pluginId, channels = []) {
```

**Line:** 292 | **Kind:** fn

### `withManifestChannelActivationEnv`

```
export function withManifestChannelActivationEnv(env, channels = []) {
```

**Line:** 330 | **Kind:** fn

### `appendBoundedOutput`

```
export function appendBoundedOutput(buffer, chunk, maxChars = OUTPUT_CAPTURE_CHARS) {
```

**Line:** 376 | **Kind:** fn

### `runCommand`

```
export function runCommand(command, args, options = {}) {
```

**Line:** 434 | **Kind:** fn

### `startGateway`

```
export function startGateway(params) {
```

**Line:** 504 | **Kind:** fn

### `hasChildExited`

```
export function hasChildExited(child) {
```

**Line:** 537 | **Kind:** fn

### `stopGateway`

```
export async function stopGateway(child) {
```

**Line:** 604 | **Kind:** fn

### `signalChildProcessTree`

```
export function signalChildProcessTree(
```

**Line:** 649 | **Kind:** fn

### `waitForReady`

```
export async function waitForReady(params) {
```

**Line:** 689 | **Kind:** fn

### `httpOk`

```
export async function httpOk(port, pathName, options = {}) {
```

**Line:** 776 | **Kind:** fn

### `assertReadyzProbe`

```
export async function assertReadyzProbe(options) {
```

**Line:** 842 | **Kind:** fn

### `rpcCall`

```
export async function rpcCall(method, params, options) {
```

**Line:** 872 | **Kind:** fn

### `unwrapRpcPayload`

```
export function unwrapRpcPayload(raw) {
```

**Line:** 1000 | **Kind:** fn

### `assertGatewayHealthPayload`

```
export function assertGatewayHealthPayload(payload, label = "health") {
```

**Line:** 1016 | **Kind:** fn

### `assertChannelVisible`

```
export function assertChannelVisible(payload, channel, pluginId) {
```

**Line:** 1161 | **Kind:** fn

### `isCommandVisible`

```
export function isCommandVisible(payload, alias) {
```

**Line:** 1170 | **Kind:** fn

### `findReadyLogOffset`

```
export function findReadyLogOffset(logPath) {
```

**Line:** 1254 | **Kind:** fn

### `assertGatewayLogNotTruncated`

```
export function assertGatewayLogNotTruncated(logPath) {
```

**Line:** 1258 | **Kind:** fn

### `assertNoPostReadyRuntimeDepsWork`

```
export function assertNoPostReadyRuntimeDepsWork(logPath, readyOffset) {
```

**Line:** 1268 | **Kind:** fn

### `findPackageManagerDescendants`

```
export function findPackageManagerDescendants(psOutput, rootPid) {
```

**Line:** 1323 | **Kind:** fn

### `assertNoPackageManagerChildren`

```
export async function assertNoPackageManagerChildren(pid) {
```

**Line:** 1353 | **Kind:** fn

### `createIsolatedStateEnv`

```
export function createIsolatedStateEnv(label) {
```

**Line:** 1492 | **Kind:** fn

### `cleanupIsolatedStateEnv`

```
export function cleanupIsolatedStateEnv(env) {
```

**Line:** 1510 | **Kind:** fn
