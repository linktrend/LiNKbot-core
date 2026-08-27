# scripts/e2e/kitchen-sink-rpc-walk.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2823
- **Language:** JavaScript
- **Symbols:** 142
- **Public symbols:** 49

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | fn | installCommandSignalHandlers | (private) | `function installCommandSignalHandlers() {` |
| 82 | fn | removeCommandSignalHandlers | (private) | `function removeCommandSignalHandlers() {` |
| 101 | fn | usage | (private) | `function usage() {` |
| 125 | fn | shouldPrintHelp | pub | `export function shouldPrintHelp(argv) {` |
| 129 | fn | validateCliArgs | pub | `export function validateCliArgs(argv) {` |
| 138 | fn | readPositiveInt | pub | `export function readPositiveInt(raw, fallback, ...` |
| 153 | fn | clampKitchenSinkTimerTimeoutMs | (private) | `function clampKitchenSinkTimerTimeoutMs(value) {` |
| 160 | fn | readPositiveTimerMs | pub | `export function readPositiveTimerMs(raw, fallba...` |
| 164 | fn | resolveKitchenSinkRpcConfig | pub | `export function resolveKitchenSinkRpcConfig(env...` |
| 215 | fn | findAvailableLoopbackPort | (private) | `async function findAvailableLoopbackPort(option...` |
| 219 | fn | fail | (private) | `const fail = (error) => {` |
| 243 | fn | resolveKitchenSinkRpcPort | pub | `export async function resolveKitchenSinkRpcPort...` |
| 257 | fn | resolveOpenClawRunner | (private) | `function resolveOpenClawRunner() {` |
| 274 | fn | makeEnv | pub | `export function makeEnv() {` |
| 296 | fn | cleanupKitchenSinkEnv | pub | `export async function cleanupKitchenSinkEnv(roo...` |
| 326 | fn | writeJson | (private) | `function writeJson(file, value) {` |
| 331 | fn | readJson | (private) | `function readJson(file) {` |
| 335 | fn | appendBoundedOutput | pub | `export function appendBoundedOutput(` |
| 349 | fn | formatCapturedOutput | (private) | `function formatCapturedOutput(label, buffer) {` |
| 355 | fn | runCommand | pub | `export function runCommand(command, args, optio...` |
| 396 | fn | collectResourceSample | (private) | `const collectResourceSample = () => {` |
| 420 | fn | stopResourceSampling | (private) | `const stopResourceSampling = async () => {` |
| 467 | fn | finish | (private) | `const finish = () => {` |
| 524 | fn | finishTimedOutCommandProcessTree | (private) | `async function finishTimedOutCommandProcessTree...` |
| 539 | fn | releaseCommandChild | (private) | `function releaseCommandChild(child) {` |
| 546 | fn | shutdownActiveCommands | (private) | `async function shutdownActiveCommands(signal) {` |
| 572 | fn | resolveCommandParentSignalKillGraceMs | (private) | `function resolveCommandParentSignalKillGraceMs(...` |
| 581 | fn | waitForCommandProcessTreeExit | (private) | `async function waitForCommandProcessTreeExit(ch...` |
| 594 | fn | commandProcessTreeIsAlive | (private) | `function commandProcessTreeIsAlive(child) {` |
| 609 | fn | signalWindowsProcessTree | (private) | `function signalWindowsProcessTree(pid, signal, ...` |
| 619 | fn | signalWindowsProcessTreeOrForce | (private) | `function signalWindowsProcessTreeOrForce(pid, s...` |
| 626 | fn | signalProcessGroup | pub | `export function signalProcessGroup(` |
| 655 | fn | runOpenClaw | (private) | `async function runOpenClaw(runner, args, env, o...` |
| 673 | fn | resolveOpenClawCommand | (private) | `async function resolveOpenClawCommand(runner, a...` |
| 689 | fn | parseJsonOutput | pub | `export function parseJsonOutput(stdout) {` |
| 708 | fn | parseGatewayCliRequestFailure | pub | `export function parseGatewayCliRequestFailure(e...` |
| 721 | fn | createGatewayClientRequestError | (private) | `function createGatewayClientRequestError(reques...` |
| 743 | fn | boundedJsonPreview | (private) | `function boundedJsonPreview(value, space) {` |
| 751 | fn | previewJsonValue | (private) | `function previewJsonValue(value, depth = 0, see...` |
| 805 | fn | previewJsonString | (private) | `function previewJsonString(value) {` |
| 816 | fn | extractBalancedJsonObjects | (private) | `function extractBalancedJsonObjects(text) {` |
| 834 | fn | isJsonObjectRecordStart | (private) | `function isJsonObjectRecordStart(text, index) {` |
| 845 | fn | findBalancedJsonObjectEnd | (private) | `function findBalancedJsonObjectEnd(text, startI...` |
| 875 | fn | hasOwnPayloadField | (private) | `function hasOwnPayloadField(raw, field) {` |
| 882 | fn | unwrapRpcPayload | pub | `export function unwrapRpcPayload(raw) {` |
| 910 | fn | rpcCall | (private) | `async function rpcCall(method, params, options) {` |
| 928 | fn | loadCallGatewayModule | (private) | `async function loadCallGatewayModule(runner) {` |
| 936 | fn | importCallGatewayModule | (private) | `async function importCallGatewayModule() {` |
| 948 | fn | rpcCallViaCli | (private) | `async function rpcCallViaCli(method, params, op...` |
| 977 | fn | createRpcCliRunOptions | pub | `export function createRpcCliRunOptions(method, ...` |
| 986 | fn | findDistCallGatewayModuleFiles | pub | `export function findDistCallGatewayModuleFiles(...` |
| 996 | fn | usesBuiltOpenClawEntry | pub | `export function usesBuiltOpenClawEntry(runner, ...` |
| 1008 | fn | retryRpcCall | (private) | `async function retryRpcCall(method, params, opt...` |
| 1029 | fn | isRetryableGatewayCallError | (private) | `function isRetryableGatewayCallError(error) {` |
| 1040 | fn | isRetryableTransientNetworkError | (private) | `function isRetryableTransientNetworkError(error...` |
| 1061 | fn | fetchJson | pub | `export async function fetchJson(url, options = ...` |
| 1074 | fn | removeExternalAbort | (private) | `let removeExternalAbort = () => {};` |
| 1077 | fn | onAbort | (private) | `const onAbort = () => {` |
| 1133 | fn | getExternalAbortReason | (private) | `function getExternalAbortReason(signal) {` |
| 1137 | fn | createExternalAbortError | (private) | `function createExternalAbortError(signal) {` |
| 1142 | fn | delayWithAbort | (private) | `async function delayWithAbort(delayMs, signal) {` |
| 1160 | fn | readBoundedResponseText | pub | `export async function readBoundedResponseText(r...` |
| 1210 | fn | createFetchBodyTooLargeError | (private) | `function createFetchBodyTooLargeError(byteLimit) {` |
| 1216 | fn | withOptionalTimeout | (private) | `async function withOptionalTimeout(promise, tim...` |
| 1223 | fn | cancelReaderSoon | (private) | `function cancelReaderSoon(reader) {` |
| 1229 | fn | configureKitchenSink | (private) | `function configureKitchenSink(env, port) {` |
| 1287 | fn | startGateway | (private) | `async function startGateway(runner, port, env, ...` |
| 1306 | fn | stopGateway | pub | `export async function stopGateway(child, option...` |
| 1316 | fn | waitForExit | (private) | `const waitForExit = async (ms) => {` |
| 1339 | fn | hasChildExited | pub | `export function hasChildExited(child) {` |
| 1343 | fn | defaultKillProcess | (private) | `function defaultKillProcess(pid, signal) {` |
| 1347 | fn | isGatewayAlive | (private) | `function isGatewayAlive(child, killProcess) {` |
| 1362 | fn | createChildExitPromise | (private) | `function createChildExitPromise(child) {` |
| 1371 | fn | releaseUnsettledGatewayChild | (private) | `function releaseUnsettledGatewayChild(child) {` |
| 1378 | fn | signalGateway | pub | `export function signalGateway(child, signal, ki...` |
| 1409 | fn | createGatewayReadyLogScanner | pub | `export function createGatewayReadyLogScanner(lo...` |
| 1460 | fn | waitForGatewayReady | pub | `export async function waitForGatewayReady(child...` |
| 1468 | fn | exitedBeforeReadyError | (private) | `const exitedBeforeReadyError = () =>` |
| 1479 | fn | readyzProbe | (private) | `const readyzProbe = (async () => {` |
| 1524 | fn | extractPluginCommandNames | pub | `export function extractPluginCommandNames(paylo...` |
| 1543 | fn | extractToolEntries | (private) | `function extractToolEntries(payload) {` |
| 1549 | fn | assertIncludesAny | (private) | `function assertIncludesAny(actual, expected, la...` |
| 1557 | fn | assertIncludesAll | (private) | `function assertIncludesAll(actual, expected, la...` |
| 1564 | fn | assertExpectedKitchenSinkToolEntries | pub | `export function assertExpectedKitchenSinkToolEn...` |
| 1589 | fn | assertChannelAccountRunning | pub | `export function assertChannelAccountRunning(pay...` |
| 1610 | fn | extractTtsProviderIds | pub | `export function extractTtsProviderIds(payload, ...` |
| 1620 | fn | assertTtsProviderCoverage | pub | `export function assertTtsProviderCoverage(paylo...` |
| 1646 | fn | assertKitchenSinkSearchInvokeResult | pub | `export function assertKitchenSinkSearchInvokeRe...` |
| 1660 | fn | assertKitchenSinkTextInvokeResult | pub | `export function assertKitchenSinkTextInvokeResu...` |
| 1676 | fn | assertKitchenSinkImageJobInvokeResult | pub | `export function assertKitchenSinkImageJobInvoke...` |
| 1709 | fn | decodePngDataUrl | (private) | `function decodePngDataUrl(value) {` |
| 1720 | fn | hasPngSignature | (private) | `function hasPngSignature(buffer) {` |
| 1786 | fn | listKitchenSinkToolInvokeNames | pub | `export function listKitchenSinkToolInvokeNames() {` |
| 1790 | fn | listKitchenSinkReadOnlyRpcProbeNames | pub | `export function listKitchenSinkReadOnlyRpcProbe...` |
| 1794 | fn | listKitchenSinkAuthorizationRpcProbeNames | pub | `export function listKitchenSinkAuthorizationRpc...` |
| 1798 | fn | assertOperatorRpcDenied | pub | `export async function assertOperatorRpcDenied(p...` |
| 1812 | fn | assertCreatedKitchenSinkSession | pub | `export function assertCreatedKitchenSinkSession...` |
| 1824 | fn | assertKitchenSinkUiDescriptors | pub | `export function assertKitchenSinkUiDescriptors(...` |
| 1846 | fn | assertDiagnosticStabilityClean | pub | `export function assertDiagnosticStabilityClean(...` |
| 1878 | fn | assertObjectPayload | (private) | `function assertObjectPayload(payload, label) {` |
| 1885 | fn | assertGatewayHealthPayload | pub | `export function assertGatewayHealthPayload(payl...` |
| 1926 | fn | assertGatewayStatusPayload | pub | `export function assertGatewayStatusPayload(payl...` |
| 1975 | fn | countDiagnosticEvents | (private) | `function countDiagnosticEvents(payload, type) {` |
| 1985 | fn | sampleProcess | pub | `export async function sampleProcess(pid, option...` |
| 1997 | fn | summarizeProcessSamples | pub | `export function summarizeProcessSamples(samples) {` |
| 2018 | fn | samplePosixProcess | (private) | `async function samplePosixProcess(pid, run, com...` |
| 2028 | fn | samplePosixProcessWithDescendants | (private) | `async function samplePosixProcessWithDescendant...` |
| 2056 | fn | samplePosixProcessTree | (private) | `async function samplePosixProcessTree(pid, run,...` |
| 2076 | fn | matchesCommandNeedles | (private) | `const matchesCommandNeedles = (row) =>` |
| 2106 | fn | parsePosixProcessRows | (private) | `function parsePosixProcessRows(stdout) {` |
| 2144 | fn | parseStrictNonNegativeDecimal | (private) | `function parseStrictNonNegativeDecimal(raw) {` |
| 2153 | fn | parseStrictUnsignedInteger | (private) | `function parseStrictUnsignedInteger(raw) {` |
| 2162 | fn | parseStrictPositiveInteger | (private) | `function parseStrictPositiveInteger(raw) {` |
| 2167 | fn | parseTasklistMemoryKiB | (private) | `function parseTasklistMemoryKiB(raw) {` |
| 2177 | fn | collectPosixProcessTree | (private) | `function collectPosixProcessTree(rows, rootPid) {` |
| 2202 | fn | hasMalformedProcessTreeRows | (private) | `function hasMalformedProcessTreeRows(malformedR...` |
| 2214 | fn | rawProcessTokenMatchesTree | (private) | `function rawProcessTokenMatchesTree(raw, treePi...` |
| 2228 | fn | selectPeakRssProcess | (private) | `function selectPeakRssProcess(rows) {` |
| 2232 | fn | formatPosixProcessSample | (private) | `function formatPosixProcessSample(row) {` |
| 2241 | fn | formatPosixProcessTreeSample | (private) | `function formatPosixProcessTreeSample(selected,...` |
| 2249 | fn | parseTasklistCsvLine | (private) | `function parseTasklistCsvLine(line) {` |
| 2275 | fn | sampleWindowsPidWithTasklist | (private) | `async function sampleWindowsPidWithTasklist(pid...` |
| 2312 | fn | sampleWindowsProcessByPort | pub | `export async function sampleWindowsProcessByPor...` |
| 2336 | fn | parseWindowsNetstatListeningPid | (private) | `function parseWindowsNetstatListeningPid(line, ...` |
| 2349 | fn | powershellSingleQuoted | (private) | `function powershellSingleQuoted(value) {` |
| 2353 | fn | sampleWindowsProcess | (private) | `async function sampleWindowsProcess(pid, run, c...` |
| 2415 | fn | assertProcessResourceCeiling | (private) | `function assertProcessResourceCeiling(sample, {...` |
| 2437 | fn | assertResourceCeiling | pub | `export function assertResourceCeiling(sample) {` |
| 2445 | fn | assertCommandResourceCeiling | pub | `export function assertCommandResourceCeiling(sa...` |
| 2453 | fn | findErrorLogFindings | pub | `export function findErrorLogFindings(logPath) {` |
| 2464 | fn | recordLine | (private) | `const recordLine = (lineNumber, line) => {` |
| 2480 | fn | inspectCurrentLine | (private) | `const inspectCurrentLine = () => {` |
| 2485 | fn | appendLineFragment | (private) | `const appendLineFragment = (fragment) => {` |
| 2494 | fn | finishLine | (private) | `const finishLine = () => {` |
| 2530 | fn | assertNoErrorLogs | (private) | `function assertNoErrorLogs(logPath) {` |
| 2541 | fn | tailFile | pub | `export function tailFile(file, maxBytes = LOG_T...` |
| 2558 | fn | tailText | (private) | `function tailText(text) {` |
| 2562 | fn | isNonEmptyString | (private) | `function isNonEmptyString(value) {` |
| 2566 | fn | main | pub | `export async function main() {` |
| 2622 | fn | sampleGateway | (private) | `const sampleGateway = async () => {` |
| 2639 | fn | collectTimedSample | (private) | `const collectTimedSample = () => {` |
| 2811 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value, fallbackMessa...` |

## Public API

### `shouldPrintHelp`

```
export function shouldPrintHelp(argv) {
```

**Line:** 125 | **Kind:** fn

### `validateCliArgs`

```
export function validateCliArgs(argv) {
```

**Line:** 129 | **Kind:** fn

### `readPositiveInt`

```
export function readPositiveInt(raw, fallback, label = "value") {
```

**Line:** 138 | **Kind:** fn

### `readPositiveTimerMs`

```
export function readPositiveTimerMs(raw, fallback, label = "value") {
```

**Line:** 160 | **Kind:** fn

### `resolveKitchenSinkRpcConfig`

```
export function resolveKitchenSinkRpcConfig(env = process.env) {
```

**Line:** 164 | **Kind:** fn

### `resolveKitchenSinkRpcPort`

```
export async function resolveKitchenSinkRpcPort(env = process.env, options = {}) {
```

**Line:** 243 | **Kind:** fn

### `makeEnv`

```
export function makeEnv() {
```

**Line:** 274 | **Kind:** fn

### `cleanupKitchenSinkEnv`

```
export async function cleanupKitchenSinkEnv(root, options = {}) {
```

**Line:** 296 | **Kind:** fn

### `appendBoundedOutput`

```
export function appendBoundedOutput(
```

**Line:** 335 | **Kind:** fn

### `runCommand`

```
export function runCommand(command, args, options = {}) {
```

**Line:** 355 | **Kind:** fn

### `signalProcessGroup`

```
export function signalProcessGroup(
```

**Line:** 626 | **Kind:** fn

### `parseJsonOutput`

```
export function parseJsonOutput(stdout) {
```

**Line:** 689 | **Kind:** fn

### `parseGatewayCliRequestFailure`

```
export function parseGatewayCliRequestFailure(error) {
```

**Line:** 708 | **Kind:** fn

### `unwrapRpcPayload`

```
export function unwrapRpcPayload(raw) {
```

**Line:** 882 | **Kind:** fn

### `createRpcCliRunOptions`

```
export function createRpcCliRunOptions(method, options = {}) {
```

**Line:** 977 | **Kind:** fn

### `findDistCallGatewayModuleFiles`

```
export function findDistCallGatewayModuleFiles(cwd = process.cwd()) {
```

**Line:** 986 | **Kind:** fn

### `usesBuiltOpenClawEntry`

```
export function usesBuiltOpenClawEntry(runner, cwd = process.cwd(), env = process.env) {
```

**Line:** 996 | **Kind:** fn

### `fetchJson`

```
export async function fetchJson(url, options = {}) {
```

**Line:** 1061 | **Kind:** fn

### `readBoundedResponseText`

```
export async function readBoundedResponseText(response, byteLimit, timeoutPromise) {
```

**Line:** 1160 | **Kind:** fn

### `stopGateway`

```
export async function stopGateway(child, options = {}) {
```

**Line:** 1306 | **Kind:** fn

### `hasChildExited`

```
export function hasChildExited(child) {
```

**Line:** 1339 | **Kind:** fn

### `signalGateway`

```
export function signalGateway(child, signal, killProcess = defaultKillProcess, options = {}) {
```

**Line:** 1378 | **Kind:** fn

### `createGatewayReadyLogScanner`

```
export function createGatewayReadyLogScanner(logPath, marker = "[gateway] ready") {
```

**Line:** 1409 | **Kind:** fn

### `waitForGatewayReady`

```
export async function waitForGatewayReady(child, port, logPath, options = {}) {
```

**Line:** 1460 | **Kind:** fn

### `extractPluginCommandNames`

```
export function extractPluginCommandNames(payload) {
```

**Line:** 1524 | **Kind:** fn

### `assertExpectedKitchenSinkToolEntries`

```
export function assertExpectedKitchenSinkToolEntries(
```

**Line:** 1564 | **Kind:** fn

### `assertChannelAccountRunning`

```
export function assertChannelAccountRunning(payload) {
```

**Line:** 1589 | **Kind:** fn

### `extractTtsProviderIds`

```
export function extractTtsProviderIds(payload, surface) {
```

**Line:** 1610 | **Kind:** fn

### `assertTtsProviderCoverage`

```
export function assertTtsProviderCoverage(payload, surface) {
```

**Line:** 1620 | **Kind:** fn

### `assertKitchenSinkSearchInvokeResult`

```
export function assertKitchenSinkSearchInvokeResult(payload) {
```

**Line:** 1646 | **Kind:** fn

### `assertKitchenSinkTextInvokeResult`

```
export function assertKitchenSinkTextInvokeResult(payload) {
```

**Line:** 1660 | **Kind:** fn

### `assertKitchenSinkImageJobInvokeResult`

```
export function assertKitchenSinkImageJobInvokeResult(payload) {
```

**Line:** 1676 | **Kind:** fn

### `listKitchenSinkToolInvokeNames`

```
export function listKitchenSinkToolInvokeNames() {
```

**Line:** 1786 | **Kind:** fn

### `listKitchenSinkReadOnlyRpcProbeNames`

```
export function listKitchenSinkReadOnlyRpcProbeNames() {
```

**Line:** 1790 | **Kind:** fn

### `listKitchenSinkAuthorizationRpcProbeNames`

```
export function listKitchenSinkAuthorizationRpcProbeNames() {
```

**Line:** 1794 | **Kind:** fn

### `assertOperatorRpcDenied`

```
export async function assertOperatorRpcDenied(probe, call) {
```

**Line:** 1798 | **Kind:** fn

### `assertCreatedKitchenSinkSession`

```
export function assertCreatedKitchenSinkSession(payload, expectedKey = SESSION_KEY) {
```

**Line:** 1812 | **Kind:** fn

### `assertKitchenSinkUiDescriptors`

```
export function assertKitchenSinkUiDescriptors(payload, options = {}) {
```

**Line:** 1824 | **Kind:** fn

### `assertDiagnosticStabilityClean`

```
export function assertDiagnosticStabilityClean(payload) {
```

**Line:** 1846 | **Kind:** fn

### `assertGatewayHealthPayload`

```
export function assertGatewayHealthPayload(payload) {
```

**Line:** 1885 | **Kind:** fn

### `assertGatewayStatusPayload`

```
export function assertGatewayStatusPayload(payload) {
```

**Line:** 1926 | **Kind:** fn

### `sampleProcess`

```
export async function sampleProcess(pid, options = {}) {
```

**Line:** 1985 | **Kind:** fn

### `summarizeProcessSamples`

```
export function summarizeProcessSamples(samples) {
```

**Line:** 1997 | **Kind:** fn

### `sampleWindowsProcessByPort`

```
export async function sampleWindowsProcessByPort(port, options = {}) {
```

**Line:** 2312 | **Kind:** fn

### `assertResourceCeiling`

```
export function assertResourceCeiling(sample) {
```

**Line:** 2437 | **Kind:** fn

### `assertCommandResourceCeiling`

```
export function assertCommandResourceCeiling(sample) {
```

**Line:** 2445 | **Kind:** fn

### `findErrorLogFindings`

```
export function findErrorLogFindings(logPath) {
```

**Line:** 2453 | **Kind:** fn

### `tailFile`

```
export function tailFile(file, maxBytes = LOG_TAIL_BYTES) {
```

**Line:** 2541 | **Kind:** fn

### `main`

```
export async function main() {
```

**Line:** 2566 | **Kind:** fn
