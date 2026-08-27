# extensions/browser/src/browser/pw-session.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2667
- **Language:** TypeScript
- **Symbols:** 130
- **Public symbols:** 34

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | BrowserConsoleMessage | pub | - |
| 74 | type | BrowserPageError | pub | - |
| 82 | type | BrowserNetworkRequest | pub | - |
| 94 | type | BrowserObservedDialogRecord | (private) | - |
| 105 | type | BrowserObservedDialogState | (private) | - |
| 111 | type | BrowserObservedState | (private) | - |
| 123 | fn | forwardedBrowserResponseHeaders | (private) | `function forwardedBrowserResponseHeaders(respon...` |
| 133 | fn | browserRequestHeaders | (private) | `function browserRequestHeaders(request: Request...` |
| 147 | fn | fulfillPinnedBrowserNavigation | (private) | `async function fulfillPinnedBrowserNavigation(o...` |
| 185 | fn | admitAndMaybeFulfillPinnedBrowserRequest | (private) | `async function admitAndMaybeFulfillPinnedBrowse...` |
| 237 | class | BrowserObservedDialogBlockedError | (private) | - |
| 248 | fn | isBrowserObservedDialogBlockedError | pub | `export function isBrowserObservedDialogBlockedE...` |
| 254 | type | PendingObservedDialog | (private) | - |
| 258 | type | ArmedDialogResponse | (private) | - |
| 265 | type | TargetInfoResponse | (private) | - |
| 271 | type | ConnectedBrowser | (private) | - |
| 277 | type | DownloadPayload | (private) | - |
| 281 | type | ActionDownloadCapture | (private) | - |
| 289 | type | PageState | (private) | - |
| 323 | type | RoleRefs | (private) | - |
| 324 | type | RoleRefsCacheEntry | (private) | - |
| 330 | type | ContextState | (private) | - |
| 351 | type | PendingBrowserConnection | (private) | - |
| 356 | type | PlaywrightConnectionRetirement | pub | - |
| 371 | fn | resolveObservedDialogTimeoutMs | (private) | `function resolveObservedDialogTimeoutMs(timeout...` |
| 376 | fn | normalizeCdpUrl | (private) | `function normalizeCdpUrl(raw: string) {` |
| 380 | fn | resolveCdpConnectRetryDelayMs | (private) | `function resolveCdpConnectRetryDelayMs(attempt:...` |
| 384 | fn | isDownloadStartingNavigationError | pub | `export function isDownloadStartingNavigationErr...` |
| 396 | fn | beginActionDownloadCaptureOnPage | pub | `export function beginActionDownloadCaptureOnPage(` |
| 419 | fn | detach | (private) | `const detach = () => {` |
| 430 | fn | waitForEvent | (private) | `const waitForEvent = async (timeoutMs: number) ...` |
| 432 | fn | finish | (private) | `const finish = () => {` |
| 444 | fn | remainingBudgetMs | (private) | `const remainingBudgetMs = () => Math.max(0, dea...` |
| 473 | fn | hasCachedPlaywrightBrowserConnection | (private) | `function hasCachedPlaywrightBrowserConnection(c...` |
| 477 | fn | isRecoverablePlaywrightDisconnectError | (private) | `function isRecoverablePlaywrightDisconnectError...` |
| 490 | fn | isRecoverableStalePageSelectionError | (private) | `function isRecoverableStalePageSelectionError(e...` |
| 507 | fn | findNetworkRequestById | (private) | `function findNetworkRequestById(state: PageStat...` |
| 517 | fn | appendRecentDialog | (private) | `function appendRecentDialog(state: PageState, r...` |
| 524 | fn | serializeDialogRecord | (private) | `function serializeDialogRecord(dialog: BrowserO...` |
| 536 | fn | serializePendingDialog | (private) | `function serializePendingDialog(dialog: Pending...` |
| 540 | fn | serializeObservedBrowserState | (private) | `function serializeObservedBrowserState(state: P...` |
| 549 | fn | clearArmedDialogResponse | (private) | `function clearArmedDialogResponse(state: PageSt...` |
| 556 | fn | abortActionsBlockedByDialog | (private) | `function abortActionsBlockedByDialog(state: Pag...` |
| 569 | fn | isNoDialogShowingError | (private) | `function isNoDialogShowingError(err: unknown): ...` |
| 574 | fn | settleObservedDialog | (private) | `async function settleObservedDialog(params: {` |
| 614 | fn | observeDialog | (private) | `function observeDialog(pageState: PageState, di...` |
| 646 | fn | targetKey | (private) | `function targetKey(cdpUrl: string, targetId: st...` |
| 650 | fn | roleRefsKey | (private) | `function roleRefsKey(cdpUrl: string, targetId: ...` |
| 654 | fn | bindRoleRefsTarget | (private) | `function bindRoleRefsTarget(page: Page, cdpUrl:...` |
| 681 | fn | isBlockedTarget | (private) | `function isBlockedTarget(cdpUrl: string, target...` |
| 689 | fn | markTargetBlocked | (private) | `function markTargetBlocked(cdpUrl: string, targ...` |
| 697 | fn | clearBlockedTarget | (private) | `function clearBlockedTarget(cdpUrl: string, tar...` |
| 705 | fn | clearBlockedTargetsForCdpUrl | (private) | `function clearBlockedTargetsForCdpUrl(cdpUrl?: ...` |
| 718 | fn | blockedPageRefsForCdpUrl | (private) | `function blockedPageRefsForCdpUrl(cdpUrl: strin...` |
| 729 | fn | isBlockedPageRef | (private) | `function isBlockedPageRef(cdpUrl: string, page:...` |
| 733 | fn | markPageRefBlocked | (private) | `function markPageRefBlocked(cdpUrl: string, pag...` |
| 737 | fn | clearBlockedPageRefsForCdpUrl | (private) | `function clearBlockedPageRefsForCdpUrl(cdpUrl?:...` |
| 745 | fn | clearBlockedPageRef | (private) | `function clearBlockedPageRef(cdpUrl: string, pa...` |
| 749 | fn | takeCachedPlaywrightBrowserConnection | (private) | `function takeCachedPlaywrightBrowserConnection(...` |
| 769 | fn | retainClosingPlaywrightConnection | (private) | `function retainClosingPlaywrightConnection(conn...` |
| 775 | fn | releaseClosingPlaywrightConnection | (private) | `function releaseClosingPlaywrightConnection(con...` |
| 783 | fn | closeTrackedPlaywrightConnection | (private) | `async function closeTrackedPlaywrightConnection...` |
| 792 | fn | closing | (private) | `const closing = (async () => {` |
| 805 | fn | withPlaywrightCloseTimeout | (private) | `async function withPlaywrightCloseTimeout(task:...` |
| 826 | fn | retirePlaywrightBrowserConnectionExact | pub | `export function retirePlaywrightBrowserConnecti...` |
| 836 | fn | startClosing | (private) | `const startClosing = () => {` |
| 846 | fn | awaitClosing | (private) | `const awaitClosing = async () => {` |
| 863 | fn | capture | (private) | `const capture = () => {` |
| 915 | fn | retirePlaywrightBrowserConnection | pub | `export function retirePlaywrightBrowserConnecti...` |
| 919 | fn | evictStalePlaywrightBrowserConnection | (private) | `function evictStalePlaywrightBrowserConnection(...` |
| 930 | fn | hasBlockedTargetsForCdpUrl | (private) | `function hasBlockedTargetsForCdpUrl(cdpUrl: str...` |
| 941 | class | BlockedBrowserTargetError | (private) | - |
| 949 | fn | rememberRoleRefsForTarget | (private) | `function rememberRoleRefsForTarget(opts: {` |
| 984 | fn | storeRoleRefsForTarget | pub | `export function storeRoleRefsForTarget(opts: {` |
| 1017 | fn | clearRoleRefs | (private) | `function clearRoleRefs(state: PageState): void {` |
| 1034 | fn | currentTargetRoleRefsMode | (private) | `function currentTargetRoleRefsMode(` |
| 1045 | fn | restoreRoleRefsForTarget | pub | `export function restoreRoleRefsForTarget(opts: {` |
| 1071 | fn | ensurePageState | pub | `export function ensurePageState(page: Page): Pa...` |
| 1245 | fn | getObservedBrowserStateForPage | pub | `export function getObservedBrowserStateForPage(...` |
| 1251 | fn | getObservedBrowserStateViaPlaywright | pub | `export async function getObservedBrowserStateVi...` |
| 1260 | fn | resolvePendingDialogForResponse | (private) | `function resolvePendingDialogForResponse(params: {` |
| 1282 | fn | respondToObservedDialogOnPage | pub | `export async function respondToObservedDialogOn...` |
| 1304 | fn | markObservedDialogsHandledRemotelyForPage | pub | `export function markObservedDialogsHandledRemot...` |
| 1323 | fn | armObservedDialogResponseOnPage | pub | `export function armObservedDialogResponseOnPage...` |
| 1350 | fn | createObservedDialogAbortSignalForPage | pub | `export function createObservedDialogAbortSignal...` |
| 1356 | fn | abortForCurrentDialog | (private) | `const abortForCurrentDialog = () => {` |
| 1361 | fn | abortForParent | (private) | `const abortForParent = () => {` |
| 1389 | fn | observeContext | (private) | `function observeContext(context: BrowserContext) {` |
| 1403 | fn | ensureContextState | pub | `export function ensureContextState(context: Bro...` |
| 1413 | fn | observeBrowser | (private) | `function observeBrowser(browser: Browser) {` |
| 1419 | fn | connectBrowser | (private) | `async function connectBrowser(cdpUrl: string, s...` |
| 1452 | fn | connectEndpoint | (private) | `const connectEndpoint = async (target: string) ...` |
| 1474 | fn | onDisconnected | (private) | `const onDisconnected = () => {` |
| 1517 | fn | getAllPages | (private) | `async function getAllPages(browser: Browser): P...` |
| 1523 | fn | partitionAccessiblePages | (private) | `async function partitionAccessiblePages(opts: {...` |
| 1556 | fn | pageTargetId | (private) | `async function pageTargetId(page: Page): Promis...` |
| 1567 | fn | getPageForTargetIdOnce | (private) | `async function getPageForTargetIdOnce(opts: {` |
| 1605 | fn | getPageForTargetId | pub | `export async function getPageForTargetId(opts: {` |
| 1622 | type | BrowserDocumentNavigationRequestKind | (private) | - |
| 1625 | fn | classifyBrowserDocumentNavigationRequest | (private) | `function classifyBrowserDocumentNavigationRequest(` |
| 1661 | fn | isPolicyDenyNavigationError | pub | `export function isPolicyDenyNavigationError(err...` |
| 1670 | fn | quarantineBlockedNavigationTarget | pub | `export async function quarantineBlockedNavigati...` |
| 1690 | fn | closeBlockedNavigationTarget | pub | `export async function closeBlockedNavigationTar...` |
| 1702 | fn | assertPageNavigationCompletedSafely | pub | `export async function assertPageNavigationCompl...` |
| 1736 | fn | continueRouteSafely | (private) | `async function continueRouteSafely(route: Route...` |
| 1748 | fn | fallbackRouteSafely | (private) | `async function fallbackRouteSafely(route: Route...` |
| 1762 | fn | removePageNavigationRequestGuard | (private) | `async function removePageNavigationRequestGuard(` |
| 1784 | fn | wasBrowserNavigationSourcePreservedAfterPolicyDenial | pub | `export function wasBrowserNavigationSourcePrese...` |
| 1789 | fn | withPageNavigationRequestGuard | pub | `export async function withPageNavigationRequest...` |
| 1821 | fn | recordGuardError | (private) | `const recordGuardError = (err: unknown) => {` |
| 1831 | fn | emitPolicyDenied | (private) | `const emitPolicyDenied = (` |
| 1842 | fn | updateImmediateSourcePreservation | (private) | `const updateImmediateSourcePreservation = () => {` |
| 1871 | fn | notifyPolicyDeniedDetected | (private) | `const notifyPolicyDeniedDetected = () => {` |
| 1878 | fn | stopGuardedRoute | (private) | `const stopGuardedRoute = async (` |
| 1905 | fn | handleRoute | (private) | `const handleRoute = async (route: Route, reques...` |
| 1977 | fn | handler | (private) | `const handler = (route: Route, request: Request...` |
| 2060 | fn | gotoPageWithNavigationGuard | pub | `export async function gotoPageWithNavigationGuard(` |
| 2077 | fn | handler | (private) | `const handler = async (route: Route, request: R...` |
| 2175 | fn | refLocator | pub | `export function refLocator(page: Page, ref: str...` |
| 2235 | fn | closePlaywrightBrowserConnection | pub | `export async function closePlaywrightBrowserCon...` |
| 2263 | fn | cdpSocketNeedsAttach | (private) | `function cdpSocketNeedsAttach(wsUrl: string): b...` |
| 2274 | fn | tryTerminateExecutionViaCdp | (private) | `async function tryTerminateExecutionViaCdp(opts: {` |
| 2370 | fn | forceDisconnectPlaywrightForTarget | pub | `export async function forceDisconnectPlaywright...` |
| 2397 | fn | withPlaywrightSafeReadReconnect | (private) | `async function withPlaywrightSafeReadReconnect<T>(` |
| 2421 | fn | readPagesViaPlaywright | (private) | `async function readPagesViaPlaywright(` |
| 2491 | fn | listPagesViaPlaywright | pub | `export async function listPagesViaPlaywright(op...` |
| 2539 | fn | createPageViaPlaywright | pub | `export async function createPageViaPlaywright(` |
| 2632 | fn | closePageByTargetIdViaPlaywright | pub | `export async function closePageByTargetIdViaPla...` |
| 2645 | fn | focusPageByTargetIdViaPlaywright | pub | `export async function focusPageByTargetIdViaPla...` |
| 2654 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `isBrowserObservedDialogBlockedError`

```
export function isBrowserObservedDialogBlockedError(
```

**Line:** 248 | **Kind:** fn

### `isDownloadStartingNavigationError`

```
export function isDownloadStartingNavigationError(err: unknown, expectedUrl?: string): boolean {
```

**Line:** 384 | **Kind:** fn

### `beginActionDownloadCaptureOnPage`

```
export function beginActionDownloadCaptureOnPage(
```

**Line:** 396 | **Kind:** fn

### `retirePlaywrightBrowserConnectionExact`

```
export function retirePlaywrightBrowserConnectionExact(opts: {
```

**Line:** 826 | **Kind:** fn

### `retirePlaywrightBrowserConnection`

```
export function retirePlaywrightBrowserConnection(opts: { cdpUrl: string }): boolean {
```

**Line:** 915 | **Kind:** fn

### `storeRoleRefsForTarget`

```
export function storeRoleRefsForTarget(opts: {
```

**Line:** 984 | **Kind:** fn

### `restoreRoleRefsForTarget`

```
export function restoreRoleRefsForTarget(opts: {
```

**Line:** 1045 | **Kind:** fn

### `ensurePageState`

```
export function ensurePageState(page: Page): PageState {
```

**Line:** 1071 | **Kind:** fn

### `getObservedBrowserStateForPage`

```
export function getObservedBrowserStateForPage(page: Page): BrowserObservedState {
```

**Line:** 1245 | **Kind:** fn

### `getObservedBrowserStateViaPlaywright`

```
export async function getObservedBrowserStateViaPlaywright(opts: {
```

**Line:** 1251 | **Kind:** fn

### `respondToObservedDialogOnPage`

```
export async function respondToObservedDialogOnPage(opts: {
```

**Line:** 1282 | **Kind:** fn

### `markObservedDialogsHandledRemotelyForPage`

```
export function markObservedDialogsHandledRemotelyForPage(page: Page): BrowserObservedState {
```

**Line:** 1304 | **Kind:** fn

### `armObservedDialogResponseOnPage`

```
export function armObservedDialogResponseOnPage(opts: {
```

**Line:** 1323 | **Kind:** fn

### `createObservedDialogAbortSignalForPage`

```
export function createObservedDialogAbortSignalForPage(opts: {
```

**Line:** 1350 | **Kind:** fn

### `ensureContextState`

```
export function ensureContextState(context: BrowserContext): ContextState {
```

**Line:** 1403 | **Kind:** fn

### `getPageForTargetId`

```
export async function getPageForTargetId(opts: {
```

**Line:** 1605 | **Kind:** fn

### `isPolicyDenyNavigationError`

```
export function isPolicyDenyNavigationError(err: unknown): boolean {
```

**Line:** 1661 | **Kind:** fn

### `quarantineBlockedNavigationTarget`

```
export async function quarantineBlockedNavigationTarget(opts: {
```

**Line:** 1670 | **Kind:** fn

### `closeBlockedNavigationTarget`

```
export async function closeBlockedNavigationTarget(opts: {
```

**Line:** 1690 | **Kind:** fn

### `assertPageNavigationCompletedSafely`

```
export async function assertPageNavigationCompletedSafely(
```

**Line:** 1702 | **Kind:** fn

### `wasBrowserNavigationSourcePreservedAfterPolicyDenial`

```
export function wasBrowserNavigationSourcePreservedAfterPolicyDenial(err: unknown): boolean {
```

**Line:** 1784 | **Kind:** fn

### `withPageNavigationRequestGuard`

```
export async function withPageNavigationRequestGuard<T>(
```

**Line:** 1789 | **Kind:** fn

### `gotoPageWithNavigationGuard`

```
export async function gotoPageWithNavigationGuard(
```

**Line:** 2060 | **Kind:** fn

### `refLocator`

```
export function refLocator(page: Page, ref: string) {
```

**Line:** 2175 | **Kind:** fn

### `closePlaywrightBrowserConnection`

```
export async function closePlaywrightBrowserConnection(opts?: { cdpUrl?: string }): Promise<void> {
```

**Line:** 2235 | **Kind:** fn

### `forceDisconnectPlaywrightForTarget`

```
export async function forceDisconnectPlaywrightForTarget(opts: {
```

**Line:** 2370 | **Kind:** fn

### `listPagesViaPlaywright`

```
export async function listPagesViaPlaywright(opts: {
```

**Line:** 2491 | **Kind:** fn

### `createPageViaPlaywright`

```
export async function createPageViaPlaywright(
```

**Line:** 2539 | **Kind:** fn

### `closePageByTargetIdViaPlaywright`

```
export async function closePageByTargetIdViaPlaywright(opts: {
```

**Line:** 2632 | **Kind:** fn

### `focusPageByTargetIdViaPlaywright`

```
export async function focusPageByTargetIdViaPlaywright(opts: {
```

**Line:** 2645 | **Kind:** fn
