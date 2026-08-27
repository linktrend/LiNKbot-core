# extensions/browser/src/browser/chrome-mcp.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2685
- **Language:** TypeScript
- **Symbols:** 149
- **Public symbols:** 31

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | ChromeMcpStructuredPage | (private) | - |
| 58 | type | ChromeMcpToolResult | (private) | - |
| 64 | type | ChromeMcpSession | (private) | - |
| 73 | type | ChromeMcpRoutingState | (private) | - |
| 82 | type | ChromeMcpOperationOptions | pub | - |
| 87 | type | ChromeMcpOpenOptions | (private) | - |
| 92 | type | ChromeMcpTargetOperation | (private) | - |
| 99 | class | ChromeMcpDocumentUnavailableError | pub | - |
| 106 | fn | rethrowChromeMcpDocumentError | (private) | `function rethrowChromeMcpDocumentError(error: u...` |
| 118 | type | ChromeMcpCallOptions | (private) | - |
| 125 | type | ChromeMcpProfileOptions | pub | - |
| 132 | type | NormalizedChromeMcpProfileOptions | (private) | - |
| 138 | type | ChromeMcpOptionsInput | (private) | - |
| 140 | type | ChromeMcpSessionLease | (private) | - |
| 146 | type | ChromeMcpSessionFactory | (private) | - |
| 151 | type | PendingChromeMcpSession | (private) | - |
| 166 | type | PendingChromeMcpSessionLease | (private) | - |
| 172 | type | ChromeMcpProcessSnapshot | (private) | - |
| 179 | type | ChromeMcpProcessCleanupDeps | (private) | - |
| 187 | type | ChromeMcpOwnedProcess | (private) | - |
| 192 | type | ChromeMcpProcessCleanupTarget | (private) | - |
| 197 | type | ChromeMcpProcessCleanupState | (private) | - |
| 235 | class | ChromeMcpReconnectRequiredError | (private) | - |
| 236 | class | ChromeMcpProcessSnapshotError | (private) | - |
| 246 | fn | decodeChromeMcpStderrTail | pub | `export function decodeChromeMcpStderrTail(buffe...` |
| 250 | fn | asPages | (private) | `function asPages(value: unknown): ChromeMcpStru...` |
| 269 | fn | getChromeMcpRoutingState | (private) | `function getChromeMcpRoutingState(session: Chro...` |
| 284 | fn | withChromeMcpOperationLock | (private) | `async function withChromeMcpOperationLock<T>(` |
| 316 | fn | cancel | (private) | `const cancel = (reason: unknown) => {` |
| 357 | fn | clearChromeMcpSnapshotRefsForTarget | (private) | `function clearChromeMcpSnapshotRefsForTarget(` |
| 368 | fn | updateChromeMcpTargetMappings | (private) | `function updateChromeMcpTargetMappings(` |
| 380 | fn | wrapChromeMcpSnapshotRefs | (private) | `function wrapChromeMcpSnapshotRefs(` |
| 411 | fn | resolveChromeMcpSnapshotRef | (private) | `function resolveChromeMcpSnapshotRef(` |
| 423 | fn | extractStructuredContent | (private) | `function extractStructuredContent(result: Chrom...` |
| 427 | fn | extractTextContent | (private) | `function extractTextContent(result: ChromeMcpTo...` |
| 437 | fn | extractTextPages | (private) | `function extractTextPages(result: ChromeMcpTool...` |
| 455 | fn | extractStructuredPages | (private) | `function extractStructuredPages(result: ChromeM...` |
| 460 | fn | extractSnapshot | (private) | `function extractSnapshot(result: ChromeMcpToolR...` |
| 469 | fn | extractJsonBlock | (private) | `function extractJsonBlock(text: string): unknown {` |
| 475 | fn | extractMessageText | (private) | `function extractMessageText(result: ChromeMcpTo...` |
| 484 | fn | extractToolErrorMessage | (private) | `function extractToolErrorMessage(result: Chrome...` |
| 489 | fn | formatChromeMcpEndpointForDiagnostic | (private) | `function formatChromeMcpEndpointForDiagnostic(b...` |
| 493 | fn | formatChromeMcpToolErrorMessage | (private) | `function formatChromeMcpToolErrorMessage(params: {` |
| 524 | fn | shouldReconnectForToolError | (private) | `function shouldReconnectForToolError(name: stri...` |
| 528 | fn | extractJsonMessage | (private) | `function extractJsonMessage(result: ChromeMcpTo...` |
| 546 | fn | normalizeChromeMcpUserDataDir | (private) | `function normalizeChromeMcpUserDataDir(userData...` |
| 551 | fn | normalizeChromeMcpStringList | (private) | `function normalizeChromeMcpStringList(values?: ...` |
| 559 | fn | normalizeChromeMcpOptions | (private) | `function normalizeChromeMcpOptions(` |
| 575 | fn | hasFlag | (private) | `function hasFlag(args: string[], flags: Set<str...` |
| 582 | fn | isChromeMcpWebSocketEndpoint | (private) | `function isChromeMcpWebSocketEndpoint(url: stri...` |
| 586 | fn | buildChromeMcpConnectionArgs | (private) | `function buildChromeMcpConnectionArgs(options: ...` |
| 598 | fn | buildChromeMcpUserDataDirArgs | (private) | `function buildChromeMcpUserDataDirArgs(options:...` |
| 610 | fn | buildChromeMcpSessionCacheKey | (private) | `function buildChromeMcpSessionCacheKey(` |
| 623 | fn | chromeMcpProfileOptionsFromParams | (private) | `function chromeMcpProfileOptionsFromParams(para...` |
| 630 | fn | cacheKeyMatchesProfileName | (private) | `function cacheKeyMatchesProfileName(cacheKey: s...` |
| 639 | fn | closeChromeMcpSessionsForProfile | (private) | `async function closeChromeMcpSessionsForProfile(` |
| 688 | fn | buildChromeMcpArgsFromOptions | (private) | `function buildChromeMcpArgsFromOptions(options:...` |
| 705 | fn | drainStderr | (private) | `function drainStderr(transport: StdioClientTran...` |
| 718 | fn | redactChromeMcpDiagnosticText | (private) | `function redactChromeMcpDiagnosticText(text: st...` |
| 722 | fn | redactChromeMcpDiagnosticTextWithLocalPaths | (private) | `function redactChromeMcpDiagnosticTextWithLocal...` |
| 729 | fn | redactChromeMcpLocalPathForDiagnostic | (private) | `function redactChromeMcpLocalPathForDiagnostic(...` |
| 745 | fn | redactChromeMcpProfileLabelForDiagnostic | (private) | `function redactChromeMcpProfileLabelForDiagnost...` |
| 751 | fn | readChromeMcpTransportPid | (private) | `function readChromeMcpTransportPid(transport: S...` |
| 758 | fn | parseChromeMcpLinuxStat | (private) | `function parseChromeMcpLinuxStat(pid: number, s...` |
| 765 | fn | listChromeMcpLinuxProcesses | (private) | `async function listChromeMcpLinuxProcesses(): P...` |
| 783 | fn | parseChromeMcpDelimitedProcessList | (private) | `function parseChromeMcpDelimitedProcessList(` |
| 800 | fn | parseChromeMcpUnixProcessListForTest | pub | `export function parseChromeMcpUnixProcessListFo...` |
| 808 | fn | listChromeMcpPlatformProcesses | (private) | `async function listChromeMcpPlatformProcesses(` |
| 851 | fn | captureChromeMcpProcessTarget | (private) | `function captureChromeMcpProcessTarget(` |
| 881 | fn | sameChromeMcpProcesses | (private) | `function sameChromeMcpProcesses(` |
| 889 | fn | cleanupTarget | (private) | `function cleanupTarget(` |
| 895 | fn | refreshChromeMcpCleanupProcess | (private) | `async function refreshChromeMcpCleanupProcess(s...` |
| 903 | fn | refresh | (private) | `const refresh = (async () => {` |
| 946 | fn | taskkillChromeMcpProcessTree | (private) | `async function taskkillChromeMcpProcessTree(` |
| 961 | fn | currentChromeMcpProcesses | (private) | `async function currentChromeMcpProcesses(` |
| 968 | fn | terminateChromeMcpProcessTree | (private) | `async function terminateChromeMcpProcessTree(` |
| 1033 | fn | closeChromeMcpSessionHandle | (private) | `async function closeChromeMcpSessionHandle(sess...` |
| 1036 | fn | attempt | (private) | `const attempt = async (operation: () => Promise...` |
| 1067 | fn | closeTrackedChromeMcpSession | (private) | `async function closeTrackedChromeMcpSession(` |
| 1084 | fn | cleanup | (private) | `const cleanup = (async () => {` |
| 1099 | fn | drainRetainedChromeMcpCleanup | (private) | `async function drainRetainedChromeMcpCleanup(ca...` |
| 1113 | fn | drainChromeMcpCleanupForKey | (private) | `async function drainChromeMcpCleanupForKey(cach...` |
| 1121 | fn | hasChromeMcpCleanupForKey | (private) | `function hasChromeMcpCleanupForKey(cacheKey: st...` |
| 1128 | fn | withChromeMcpHandshakeTimeout | (private) | `async function withChromeMcpHandshakeTimeout<T>...` |
| 1147 | fn | createRealSession | (private) | `async function createRealSession(` |
| 1163 | fn | getStderr | (private) | `let getStderr = () => "";` |
| 1170 | fn | requireSession | (private) | `const requireSession = () => session;` |
| 1171 | fn | ready | (private) | `const ready = (async () => {` |
| 1213 | fn | waitForChromeMcpReady | (private) | `async function waitForChromeMcpReady(` |
| 1264 | fn | waitForChromeMcpPendingSession | (private) | `async function waitForChromeMcpPendingSession(` |
| 1292 | fn | createChromeMcpSession | (private) | `function createChromeMcpSession(` |
| 1301 | fn | closeCreated | (private) | `const closeCreated = async (session: ChromeMcpS...` |
| 1305 | fn | promise | (private) | `const promise = (async () => {` |
| 1314 | fn | cleanup | (private) | `const cleanup = (async () => {` |
| 1328 | fn | abortPendingChromeMcpSession | (private) | `function abortPendingChromeMcpSession(` |
| 1338 | fn | forgetCancelledChromeMcpPendingSession | (private) | `function forgetCancelledChromeMcpPendingSession...` |
| 1344 | fn | drainCancelledChromeMcpPendingSession | (private) | `async function drainCancelledChromeMcpPendingSe...` |
| 1361 | fn | forgetCachedChromeMcpSessionIfCurrent | (private) | `function forgetCachedChromeMcpSessionIfCurrent(` |
| 1373 | fn | forgetPendingChromeMcpSessionIfCurrent | (private) | `function forgetPendingChromeMcpSessionIfCurrent(` |
| 1384 | fn | createSharedPendingChromeMcpSession | (private) | `function createSharedPendingChromeMcpSession(` |
| 1398 | fn | promise | (private) | `const promise = (async () => {` |
| 1431 | fn | waitForSharedPendingChromeMcpSession | (private) | `async function waitForSharedPendingChromeMcpSes...` |
| 1438 | fn | release | (private) | `const release = async (closeIfLastWaiter: boole...` |
| 1464 | fn | releaseOnAbort | (private) | `const releaseOnAbort = () => {` |
| 1488 | fn | getSession | (private) | `async function getSession(` |
| 1582 | fn | getExistingSession | (private) | `async function getExistingSession(` |
| 1654 | fn | createEphemeralSession | (private) | `async function createEphemeralSession(` |
| 1678 | fn | leaseSession | (private) | `async function leaseSession(` |
| 1732 | fn | callTool | (private) | `async function callTool(` |
| 1806 | fn | callTargetTool | (private) | `async function callTargetTool(` |
| 1824 | type | ChromeMcpPinnedTarget | (private) | - |
| 1830 | fn | withChromeMcpLease | (private) | `async function withChromeMcpLease<T>(` |
| 1864 | fn | listChromeMcpTargetsWithLease | (private) | `async function listChromeMcpTargetsWithLease(pa...` |
| 1881 | fn | registerChromeMcpTargets | (private) | `function registerChromeMcpTargets(` |
| 1909 | fn | withChromeMcpTarget | (private) | `async function withChromeMcpTarget<T>(` |
| 1935 | fn | withTempFile | (private) | `async function withTempFile<T>(fn: (filePath: s...` |
| 1946 | fn | ensureChromeMcpAvailable | pub | `export async function ensureChromeMcpAvailable(` |
| 1955 | fn | getChromeMcpPid | pub | `export function getChromeMcpPid(profileName: st...` |
| 1972 | fn | closeChromeMcpSession | pub | `export async function closeChromeMcpSession(pro...` |
| 1977 | fn | stopAllChromeMcpSessions | (private) | `async function stopAllChromeMcpSessions(): Prom...` |
| 1996 | fn | readChromeMcpTabs | (private) | `async function readChromeMcpTabs(` |
| 2033 | fn | listChromeMcpTabs | pub | `export async function listChromeMcpTabs(` |
| 2045 | fn | countChromeMcpTabs | pub | `export async function countChromeMcpTabs(` |
| 2053 | fn | lookupChromeMcpMarkerNativeTarget | (private) | `async function lookupChromeMcpMarkerNativeTarge...` |
| 2086 | fn | captureChromeMcpTabOwnership | (private) | `async function captureChromeMcpTabOwnership(par...` |
| 2126 | fn | openChromeMcpTab | pub | `export async function openChromeMcpTab(` |
| 2172 | fn | closeUntrackedPage | (private) | `const closeUntrackedPage = async () => {` |
| 2296 | fn | focusChromeMcpTab | pub | `export async function focusChromeMcpTab(` |
| 2316 | fn | closeChromeMcpTab | pub | `export async function closeChromeMcpTab(` |
| 2352 | fn | navigateChromeMcpPage | pub | `export async function navigateChromeMcpPage(par...` |
| 2394 | fn | resolveChromeMcpNavigateCallTimeoutMs | pub | `export function resolveChromeMcpNavigateCallTim...` |
| 2399 | fn | takeChromeMcpSnapshot | pub | `export async function takeChromeMcpSnapshot(` |
| 2420 | fn | withChromeMcpDocument | pub | `export async function withChromeMcpDocument<T>(` |
| 2466 | fn | takeChromeMcpScreenshot | pub | `export async function takeChromeMcpScreenshot(` |
| 2488 | fn | clickChromeMcpElement | pub | `export async function clickChromeMcpElement(` |
| 2501 | fn | clickChromeMcpCoords | pub | `export async function clickChromeMcpCoords(` |
| 2536 | fn | dispatch | (private) | `const dispatch = (type, buttons, detail) => {` |
| 2558 | fn | fillChromeMcpElement | pub | `export async function fillChromeMcpElement(` |
| 2568 | fn | fillChromeMcpForm | pub | `export async function fillChromeMcpForm(` |
| 2582 | fn | hoverChromeMcpElement | pub | `export async function hoverChromeMcpElement(` |
| 2591 | fn | dragChromeMcpElement | pub | `export async function dragChromeMcpElement(` |
| 2601 | fn | uploadChromeMcpFile | pub | `export async function uploadChromeMcpFile(` |
| 2611 | fn | pressChromeMcpKey | pub | `export async function pressChromeMcpKey(` |
| 2620 | fn | resizeChromeMcpPage | pub | `export async function resizeChromeMcpPage(` |
| 2630 | fn | evaluateChromeMcpScript | pub | `export async function evaluateChromeMcpScript(` |
| 2647 | fn | setChromeMcpSessionFactoryForTest | pub | `export function setChromeMcpSessionFactoryForTe...` |
| 2652 | fn | setChromeMcpProcessCleanupDepsForTest | pub | `export function setChromeMcpProcessCleanupDepsF...` |
| 2659 | fn | resetChromeMcpSessionsForTest | pub | `export async function resetChromeMcpSessionsFor...` |
| 2672 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `decodeChromeMcpStderrTail`

```
export function decodeChromeMcpStderrTail(buffer: Buffer): string {
```

**Line:** 246 | **Kind:** fn

### `parseChromeMcpUnixProcessListForTest`

```
export function parseChromeMcpUnixProcessListForTest(
```

**Line:** 800 | **Kind:** fn

### `ensureChromeMcpAvailable`

```
export async function ensureChromeMcpAvailable(
```

**Line:** 1946 | **Kind:** fn

### `getChromeMcpPid`

```
export function getChromeMcpPid(profileName: string): number | null {
```

**Line:** 1955 | **Kind:** fn

### `closeChromeMcpSession`

```
export async function closeChromeMcpSession(profileName: string): Promise<boolean> {
```

**Line:** 1972 | **Kind:** fn

### `listChromeMcpTabs`

```
export async function listChromeMcpTabs(
```

**Line:** 2033 | **Kind:** fn

### `countChromeMcpTabs`

```
export async function countChromeMcpTabs(
```

**Line:** 2045 | **Kind:** fn

### `openChromeMcpTab`

```
export async function openChromeMcpTab(
```

**Line:** 2126 | **Kind:** fn

### `focusChromeMcpTab`

```
export async function focusChromeMcpTab(
```

**Line:** 2296 | **Kind:** fn

### `closeChromeMcpTab`

```
export async function closeChromeMcpTab(
```

**Line:** 2316 | **Kind:** fn

### `navigateChromeMcpPage`

```
export async function navigateChromeMcpPage(params: {
```

**Line:** 2352 | **Kind:** fn

### `resolveChromeMcpNavigateCallTimeoutMs`

```
export function resolveChromeMcpNavigateCallTimeoutMs(timeoutMs: number): number {
```

**Line:** 2394 | **Kind:** fn

### `takeChromeMcpSnapshot`

```
export async function takeChromeMcpSnapshot(
```

**Line:** 2399 | **Kind:** fn

### `withChromeMcpDocument`

```
export async function withChromeMcpDocument<T>(
```

**Line:** 2420 | **Kind:** fn

### `takeChromeMcpScreenshot`

```
export async function takeChromeMcpScreenshot(
```

**Line:** 2466 | **Kind:** fn

### `clickChromeMcpElement`

```
export async function clickChromeMcpElement(
```

**Line:** 2488 | **Kind:** fn

### `clickChromeMcpCoords`

```
export async function clickChromeMcpCoords(
```

**Line:** 2501 | **Kind:** fn

### `fillChromeMcpElement`

```
export async function fillChromeMcpElement(
```

**Line:** 2558 | **Kind:** fn

### `fillChromeMcpForm`

```
export async function fillChromeMcpForm(
```

**Line:** 2568 | **Kind:** fn

### `hoverChromeMcpElement`

```
export async function hoverChromeMcpElement(
```

**Line:** 2582 | **Kind:** fn

### `dragChromeMcpElement`

```
export async function dragChromeMcpElement(
```

**Line:** 2591 | **Kind:** fn

### `uploadChromeMcpFile`

```
export async function uploadChromeMcpFile(
```

**Line:** 2601 | **Kind:** fn

### `pressChromeMcpKey`

```
export async function pressChromeMcpKey(
```

**Line:** 2611 | **Kind:** fn

### `resizeChromeMcpPage`

```
export async function resizeChromeMcpPage(
```

**Line:** 2620 | **Kind:** fn

### `evaluateChromeMcpScript`

```
export async function evaluateChromeMcpScript(
```

**Line:** 2630 | **Kind:** fn

### `setChromeMcpSessionFactoryForTest`

```
export function setChromeMcpSessionFactoryForTest(factory: ChromeMcpSessionFactory | null): void {
```

**Line:** 2647 | **Kind:** fn

### `setChromeMcpProcessCleanupDepsForTest`

```
export function setChromeMcpProcessCleanupDepsForTest(
```

**Line:** 2652 | **Kind:** fn

### `resetChromeMcpSessionsForTest`

```
export async function resetChromeMcpSessionsForTest(): Promise<void> {
```

**Line:** 2659 | **Kind:** fn
