# extensions/imessage/src/monitor/monitor-provider.ts

[← Back to Module](../modules/extensions-imessage-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1778
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 130 | type | IMessageTypingController | (private) | - |
| 132 | fn | resolveConfiguredIMessageTypingMode | (private) | `function resolveConfiguredIMessageTypingMode(cf...` |
| 136 | fn | resolveIMessageSplitSendCompatDebounceMs | (private) | `function resolveIMessageSplitSendCompatDebounceMs(` |
| 154 | fn | isIMessagePluginPayloadAttachment | (private) | `function isIMessagePluginPayloadAttachment(atta...` |
| 169 | fn | resolveIMessageInboundMediaInput | (private) | `function resolveIMessageInboundMediaInput(param...` |
| 212 | fn | formatIMessageInboundMediaBody | (private) | `function formatIMessageInboundMediaBody(params: {` |
| 232 | fn | detectRemoteHostFromCliPath | (private) | `async function detectRemoteHostFromCliPath(cliP...` |
| 257 | fn | resolveLocalMessagesHomeDir | (private) | `function resolveLocalMessagesHomeDir(): string ...` |
| 269 | fn | resolveLocalMessagesDbPath | (private) | `function resolveLocalMessagesDbPath(dbPath: str...` |
| 281 | fn | resolveIMessageWatchSourceDbPath | (private) | `function resolveIMessageWatchSourceDbPath(param...` |
| 301 | fn | resolveIMessageStartupRowidWatermark | (private) | `async function resolveIMessageStartupRowidWater...` |
| 324 | fn | warnIfImsgUpgradeNeeded | (private) | `const warnIfImsgUpgradeNeeded = (() => {` |
| 349 | fn | isRetriableWatchSubscribeStartupError | (private) | `function isRetriableWatchSubscribeStartupError(...` |
| 364 | fn | shouldThrottleIMessageInboundDropDiagnostic | (private) | `function shouldThrottleIMessageInboundDropDiagn...` |
| 368 | fn | describeIMessageInboundDropDiagnostic | (private) | `function describeIMessageInboundDropDiagnostic(...` |
| 390 | fn | describeIMessageWatchSubscribeStartupFailure | (private) | `function describeIMessageWatchSubscribeStartupF...` |
| 417 | fn | waitForWatchSubscribeRetryDelay | (private) | `async function waitForWatchSubscribeRetryDelay(...` |
| 429 | fn | onAbort | (private) | `const onAbort = () => {` |
| 438 | fn | monitorIMessageProvider | pub | `export async function monitorIMessageProvider(o...` |
| 576 | fn | minSetValue | (private) | `function minSetValue(values: ReadonlySet<number...` |
| 584 | fn | advanceRecoveryCursorAfterDurableEnqueue | (private) | `function advanceRecoveryCursorAfterDurableEnque...` |
| 610 | fn | holdRecoveryCursorBeforeFailedEnqueue | (private) | `function holdRecoveryCursorBeforeFailedEnqueue(...` |
| 673 | fn | dispatchUnit | (private) | `const dispatchUnit = async (` |
| 761 | fn | detachAbortHandler | (private) | `let detachAbortHandler = () => {};` |
| 765 | fn | getActiveClient | (private) | `const getActiveClient = () => {` |
| 772 | fn | repairMessageConversationAnchor | (private) | `async function repairMessageConversationAnchor(` |
| 782 | fn | resolveLiveCatchupCursor | (private) | `function resolveLiveCatchupCursor(` |
| 809 | fn | maybeAdvanceLiveCatchupCursor | (private) | `async function maybeAdvanceLiveCatchupCursor(me...` |
| 830 | fn | flushPendingLiveCatchupCursorAdvances | (private) | `async function flushPendingLiveCatchupCursorAdv...` |
| 840 | fn | handleMessageNow | (private) | `async function handleMessageNow(` |
| 852 | fn | resolveIMessageInboundBodyText | (private) | `function resolveIMessageInboundBodyText(message...` |
| 872 | fn | handleMessageNowInner | (private) | `async function handleMessageNowInner(` |
| 1540 | fn | createWatchClient | (private) | `const createWatchClient = async () =>` |
| 1572 | fn | attemptDetachAbortHandler | (private) | `let attemptDetachAbortHandler = () => {};` |
| 1691 | fn | pollApprovalReactions | (private) | `const pollApprovalReactions = async (allowRecen...` |

## Public API

### `monitorIMessageProvider`

```
export async function monitorIMessageProvider(opts: MonitorIMessageOpts = {}): Promise<void> {
```

**Line:** 438 | **Kind:** fn

## Memory Markers

### 🔴 `WARNING` (line 477)

> fires only for configs where every group message actually drops.
