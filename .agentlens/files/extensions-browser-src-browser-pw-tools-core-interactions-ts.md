# extensions/browser/src/browser/pw-tools-core.interactions.ts

[← Back to Module](../modules/extensions-browser/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2125
- **Language:** TypeScript
- **Symbols:** 70
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 62 | type | TargetOpts | (private) | - |
| 69 | fn | interactionNavigationPolicy | (private) | `function interactionNavigationPolicy(` |
| 79 | fn | hasInteractionNavigationPolicy | (private) | `function hasInteractionNavigationPolicy(policy:...` |
| 83 | type | NavigationObservablePage | (private) | - |
| 91 | fn | resolveBoundedDelayMs | (private) | `function resolveBoundedDelayMs(value: number | ...` |
| 102 | fn | getRestoredPageForTarget | (private) | `async function getRestoredPageForTarget(opts: T...` |
| 109 | fn | toFriendlyInteractionError | (private) | `function toFriendlyInteractionError(err: unknow...` |
| 113 | fn | reconcileRemoteDialogAfterActionSettled | (private) | `function reconcileRemoteDialogAfterActionSettle...` |
| 119 | fn | throwIfInteractionAborted | (private) | `function throwIfInteractionAborted(signal?: Abo...` |
| 131 | fn | didCrossDocumentUrlChange | (private) | `function didCrossDocumentUrlChange(page: { url(...` |
| 158 | fn | isHashOnlyNavigation | (private) | `function isHashOnlyNavigation(currentUrl: strin...` |
| 175 | fn | isMainFrameNavigation | (private) | `function isMainFrameNavigation(page: Navigation...` |
| 182 | fn | assertSubframeNavigationAllowed | (private) | `async function assertSubframeNavigationAllowed(` |
| 201 | type | ObservedDelayedNavigations | (private) | - |
| 206 | fn | snapshotNetworkFrameUrl | (private) | `function snapshotNetworkFrameUrl(frame: Frame):...` |
| 215 | fn | assertObservedDelayedNavigations | (private) | `async function assertObservedDelayedNavigations(` |
| 246 | fn | observeDelayedInteractionNavigation | (private) | `function observeDelayedInteractionNavigation(` |
| 259 | fn | onFrameNavigated | (private) | `const onFrameNavigated = (frame: Frame) => {` |
| 283 | fn | cleanup | (private) | `const cleanup = () => {` |
| 296 | fn | scheduleDelayedInteractionNavigationGuard | (private) | `function scheduleDelayedInteractionNavigationGu...` |
| 325 | fn | settle | (private) | `const settle = (err?: unknown) => {` |
| 334 | fn | onFrameNavigated | (private) | `const onFrameNavigated = (frame: Frame) => {` |
| 370 | fn | cleanup | (private) | `const cleanup = () => {` |
| 383 | fn | assertInteractionNavigationCompletedSafely | (private) | `async function assertInteractionNavigationCompl...` |
| 403 | fn | onFrameNavigated | (private) | `const onFrameNavigated = (frame: Frame) => {` |
| 491 | fn | awaitActionWithAbort | (private) | `async function awaitActionWithAbort<T>(` |
| 511 | fn | awaitNavigationGuardedInteraction | (private) | `async function awaitNavigationGuardedInteractio...` |
| 522 | type | PolicyCheckOutcome | (private) | - |
| 528 | fn | quarantineUnsafeSource | (private) | `const quarantineUnsafeSource = () =>` |
| 625 | fn | createAbortPromise | (private) | `function createAbortPromise(signal?: AbortSigna...` |
| 632 | fn | createAbortPromiseWithListener | (private) | `function createAbortPromiseWithListener(` |
| 669 | fn | highlightViaPlaywright | pub | `export async function highlightViaPlaywright(op...` |
| 684 | fn | clickViaPlaywright | pub | `export async function clickViaPlaywright(` |
| 725 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 775 | fn | clickCoordsViaPlaywright | (private) | `async function clickCoordsViaPlaywright(` |
| 790 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 812 | fn | hoverViaPlaywright | pub | `export async function hoverViaPlaywright(` |
| 829 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 854 | fn | dragViaPlaywright | pub | `export async function dragViaPlaywright(` |
| 878 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 903 | fn | selectOptionViaPlaywright | pub | `export async function selectOptionViaPlaywright(` |
| 924 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 950 | fn | pressKeyViaPlaywright | pub | `export async function pressKeyViaPlaywright(` |
| 966 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 990 | fn | typeViaPlaywright | pub | `export async function typeViaPlaywright(` |
| 1012 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 1046 | fn | fillFormViaPlaywright | pub | `export async function fillFormViaPlaywright(` |
| 1058 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 1105 | fn | evaluateViaPlaywright | pub | `export async function evaluateViaPlaywright(` |
| 1155 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 1252 | fn | scrollIntoViewViaPlaywright | pub | `export async function scrollIntoViewViaPlaywright(` |
| 1271 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 1292 | type | BrowserWaitPredicateState | (private) | - |
| 1299 | fn | createBrowserWaitPredicate | (private) | `function createBrowserWaitPredicate(source: str...` |
| 1333 | fn | waitForViaPlaywright | pub | `export async function waitForViaPlaywright(` |
| 1355 | fn | reconcileRemoteDialog | (private) | `const reconcileRemoteDialog = () => reconcileRe...` |
| 1364 | fn | runWaitSequence | (private) | `const runWaitSequence = async (` |
| 1454 | fn | takeScreenshotViaPlaywright | pub | `export async function takeScreenshotViaPlaywrig...` |
| 1492 | fn | screenshotWithLabelsViaPlaywright | pub | `export async function screenshotWithLabelsViaPl...` |
| 1626 | fn | resolveElementBoundingBoxForLabels | (private) | `async function resolveElementBoundingBoxForLabels(` |
| 1648 | fn | captureElementScreenshotForLabels | (private) | `async function captureElementScreenshotForLabels(` |
| 1665 | fn | setFileChooserFilesViaPlaywright | pub | `export async function setFileChooserFilesViaPla...` |
| 1686 | fn | setInputFilesViaPlaywright | pub | `export async function setInputFilesViaPlaywright(` |
| 1732 | fn | executeSingleAction | (private) | `async function executeSingleAction(` |
| 1922 | fn | actionUsesNavigationRequestGuard | (private) | `function actionUsesNavigationRequestGuard(actio...` |
| 1936 | fn | actionNeedsStandaloneDownloadGrace | (private) | `function actionNeedsStandaloneDownloadGrace(` |
| 1948 | fn | executeActViaPlaywright | pub | `export async function executeActViaPlaywright(` |
| 1985 | fn | drainDownloads | (private) | `const drainDownloads = async (firstEventGraceMs...` |
| 2060 | fn | batchViaPlaywright | pub | `export async function batchViaPlaywright(` |
| 2112 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `highlightViaPlaywright`

```
export async function highlightViaPlaywright(opts: {
```

**Line:** 669 | **Kind:** fn

### `clickViaPlaywright`

```
export async function clickViaPlaywright(
```

**Line:** 684 | **Kind:** fn

### `hoverViaPlaywright`

```
export async function hoverViaPlaywright(
```

**Line:** 812 | **Kind:** fn

### `dragViaPlaywright`

```
export async function dragViaPlaywright(
```

**Line:** 854 | **Kind:** fn

### `selectOptionViaPlaywright`

```
export async function selectOptionViaPlaywright(
```

**Line:** 903 | **Kind:** fn

### `pressKeyViaPlaywright`

```
export async function pressKeyViaPlaywright(
```

**Line:** 950 | **Kind:** fn

### `typeViaPlaywright`

```
export async function typeViaPlaywright(
```

**Line:** 990 | **Kind:** fn

### `fillFormViaPlaywright`

```
export async function fillFormViaPlaywright(
```

**Line:** 1046 | **Kind:** fn

### `evaluateViaPlaywright`

```
export async function evaluateViaPlaywright(
```

**Line:** 1105 | **Kind:** fn

### `scrollIntoViewViaPlaywright`

```
export async function scrollIntoViewViaPlaywright(
```

**Line:** 1252 | **Kind:** fn

### `waitForViaPlaywright`

```
export async function waitForViaPlaywright(
```

**Line:** 1333 | **Kind:** fn

### `takeScreenshotViaPlaywright`

```
export async function takeScreenshotViaPlaywright(opts: {
```

**Line:** 1454 | **Kind:** fn

### `screenshotWithLabelsViaPlaywright`

```
export async function screenshotWithLabelsViaPlaywright(opts: {
```

**Line:** 1492 | **Kind:** fn

### `setFileChooserFilesViaPlaywright`

```
export async function setFileChooserFilesViaPlaywright(
```

**Line:** 1665 | **Kind:** fn

### `setInputFilesViaPlaywright`

```
export async function setInputFilesViaPlaywright(
```

**Line:** 1686 | **Kind:** fn

### `executeActViaPlaywright`

```
export async function executeActViaPlaywright(
```

**Line:** 1948 | **Kind:** fn

### `batchViaPlaywright`

```
export async function batchViaPlaywright(
```

**Line:** 2060 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 1128)

> Playwright's { timeout } on evaluate only applies to installing the function,
