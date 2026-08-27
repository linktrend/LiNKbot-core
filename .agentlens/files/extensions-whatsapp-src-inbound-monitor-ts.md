# extensions/whatsapp/src/inbound/monitor.ts

[← Back to Module](../modules/extensions-whatsapp-src-inbound/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1980
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 111 | type | WhatsAppGroupMetadataCacheEntry | (private) | - |
| 116 | type | WhatsAppGroupMetadataCache | pub | - |
| 121 | type | WhatsAppBaileysMessageCache | pub | - |
| 122 | type | WhatsAppBaileysGroupMetadataCache | pub | - |
| 126 | type | LocalGroupMetadataCacheEntry | (private) | - |
| 131 | fn | resolveGroupMetadataExpiresAt | (private) | `function resolveGroupMetadataExpiresAt(nowRaw =...` |
| 138 | fn | parseWhatsAppTimestampSeconds | (private) | `function parseWhatsAppTimestampSeconds(value: u...` |
| 149 | fn | rememberGroupMetadataCacheEntry | (private) | `function rememberGroupMetadataCacheEntry<T exte...` |
| 172 | fn | readGroupMetadataCacheEntry | (private) | `function readGroupMetadataCacheEntry<T extends ...` |
| 191 | fn | rememberWhatsAppBaileysCacheEntry | (private) | `function rememberWhatsAppBaileysCacheEntry<T>(` |
| 216 | fn | readWhatsAppBaileysCacheEntry | pub | `export function readWhatsAppBaileysCacheEntry<T>(` |
| 233 | fn | logWhatsAppVerbose | (private) | `function logWhatsAppVerbose(enabled: boolean | ...` |
| 240 | fn | isDirectUserJid | (private) | `function isDirectUserJid(jid: string): boolean {` |
| 244 | fn | getActiveReachoutTimelock | (private) | `function getActiveReachoutTimelock(` |
| 256 | fn | formatReachoutTimelockError | (private) | `function formatReachoutTimelockError(state: Rea...` |
| 267 | fn | recordAcceptedInboundActivity | (private) | `function recordAcceptedInboundActivity(accountI...` |
| 275 | fn | isRetryableSendDisconnectError | (private) | `function isRetryableSendDisconnectError(err: un...` |
| 282 | fn | shouldClearSocketRefAfterSendFailure | (private) | `function shouldClearSocketRefAfterSendFailure(e...` |
| 286 | type | AdmittedWebInboundCallbackMessage | (private) | - |
| 290 | type | AppendReplyWindow | (private) | - |
| 296 | type | MonitorWebInboxOptions | (private) | - |
| 337 | type | AttachWebInboxToSocketOptions | (private) | - |
| 346 | fn | attachWebInboxToSocket | pub | `export async function attachWebInboxToSocket(` |
| 358 | fn | shouldRetryDisconnect | (private) | `const shouldRetryDisconnect = () => options.sho...` |
| 372 | fn | resolveClose | (private) | `const resolveClose = (reason: WebListenerCloseR...` |
| 428 | type | QueuedInboundMessageMetadata | (private) | - |
| 435 | type | QueuedInboundMessage | (private) | - |
| 446 | fn | notifyDebounceWork | (private) | `const notifyDebounceWork = () => {` |
| 456 | fn | waitForDebounceWorkOrIdle | (private) | `const waitForDebounceWorkOrIdle = (handlers: Re...` |
| 464 | fn | finish | (private) | `const finish = () => {` |
| 500 | fn | orderDebouncedInboundEntries | (private) | `const orderDebouncedInboundEntries = (entries: ...` |
| 509 | fn | buildFlushIngressLifecycle | (private) | `const buildFlushIngressLifecycle = (entries: Qu...` |
| 522 | fn | adoptAll | (private) | `const adoptAll = async () => {` |
| 682 | fn | rememberBaileysMessage | (private) | `const rememberBaileysMessage = (` |
| 698 | fn | rememberOutboundMessage | (private) | `const rememberOutboundMessage = (remoteJid: str...` |
| 723 | fn | trackLateAcceptedSend | (private) | `const trackLateAcceptedSend = (jid: string, pro...` |
| 739 | fn | rememberReachoutTimeLock | (private) | `const rememberReachoutTimeLock = (state: Reacho...` |
| 770 | fn | rememberVerifiedSendReady | (private) | `const rememberVerifiedSendReady = (jid: string,...` |
| 788 | fn | assertCanSendToJid | (private) | `const assertCanSendToJid = async (` |
| 812 | fn | assertCanSendTo | (private) | `const assertCanSendTo = async (to: string) => {` |
| 823 | fn | sendTrackedMessage | (private) | `const sendTrackedMessage = async (` |
| 890 | fn | summarizeGroupMeta | (private) | `const summarizeGroupMeta = async (meta: GroupMe...` |
| 922 | fn | getGroupMeta | (private) | `const getGroupMeta = async (jid: string) => {` |
| 998 | type | NormalizedInboundMessage | (private) | - |
| 1134 | fn | maybeMarkInboundAsRead | (private) | `const maybeMarkInboundAsRead = async (target: W...` |
| 1152 | fn | maybeLogSkippedSelfChatReadReceipt | (private) | `const maybeLogSkippedSelfChatReadReceipt = (` |
| 1162 | fn | maybeMarkNonSelfChatReadReceipt | (private) | `const maybeMarkNonSelfChatReadReceipt = async (` |
| 1192 | type | PreparedInbound | (private) | - |
| 1195 | type | EnrichedInboundMessage | (private) | - |
| 1232 | fn | saveInboundMedia | (private) | `const saveInboundMedia = async (` |
| 1280 | fn | enqueueInboundMessage | (private) | `const enqueueInboundMessage = async (` |
| 1291 | fn | sendComposing | (private) | `const sendComposing = async () => {` |
| 1303 | fn | reply | (private) | `const reply = async (text: string, optionsResul...` |
| 1312 | fn | sendMedia | (private) | `const sendMedia = async (` |
| 1547 | fn | handleMessagesUpsert | (private) | `const handleMessagesUpsert = async (upsert: { t...` |
| 1598 | fn | finishPreparation | (private) | `const finishPreparation = (` |
| 1674 | fn | handleMessagesUpsertEvent | (private) | `const handleMessagesUpsertEvent = (upsert: { ty...` |
| 1686 | fn | drainDebouncedInboundMessages | (private) | `const drainDebouncedInboundMessages = async () ...` |
| 1701 | fn | drainInboundBeforeSocketClose | (private) | `const drainInboundBeforeSocketClose = async () ...` |
| 1732 | fn | drainInboundBeforeSocketCloseWithTimeout | (private) | `const drainInboundBeforeSocketCloseWithTimeout ...` |
| 1778 | fn | attachSockListener | (private) | `const attachSockListener = (event: string, list...` |
| 1802 | fn | rememberFullGroupMetadataUpdate | (private) | `const rememberFullGroupMetadataUpdate = (jid: s...` |
| 1817 | fn | forgetFullGroupMetadata | (private) | `const forgetFullGroupMetadata = (jid: string) => {` |
| 1856 | fn | groupHydrationTask | (private) | `const groupHydrationTask = (async () => {` |
| 1935 | fn | monitorWebInbox | pub | `export async function monitorWebInbox(options: ...` |

## Public API

### `readWhatsAppBaileysCacheEntry`

```
export function readWhatsAppBaileysCacheEntry<T>(
```

**Line:** 216 | **Kind:** fn

### `attachWebInboxToSocket`

```
export async function attachWebInboxToSocket(
```

**Line:** 346 | **Kind:** fn

### `monitorWebInbox`

```
export async function monitorWebInbox(options: MonitorWebInboxOptions) {
```

**Line:** 1935 | **Kind:** fn
