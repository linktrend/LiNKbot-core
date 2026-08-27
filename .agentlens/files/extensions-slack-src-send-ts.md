# extensions/slack/src/send.ts

[← Back to Module](../modules/extensions-slack-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1438
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | type | SlackRecipient | (private) | - |
| 79 | type | SlackSendIdentity | pub | - |
| 85 | type | SlackEnterpriseEventScope | (private) | - |
| 94 | type | SlackEnterpriseDelivery | (private) | - |
| 102 | type | SlackSendOpts | (private) | - |
| 142 | type | SlackWebApiErrorData | (private) | - |
| 151 | type | SlackWebApiError | (private) | - |
| 155 | fn | hasCustomIdentity | (private) | `function hasCustomIdentity(identity?: SlackSend...` |
| 159 | fn | normalizeSlackSendIdentity | (private) | `function normalizeSlackSendIdentity(identity?: ...` |
| 171 | fn | setSlackDefaultSendIdentity | pub | `export function setSlackDefaultSendIdentity(acc...` |
| 184 | fn | getSlackDefaultSendIdentity | (private) | `function getSlackDefaultSendIdentity(accountId:...` |
| 189 | fn | resolveSlackSendIdentity | (private) | `function resolveSlackSendIdentity(params: {` |
| 198 | fn | normalizeSlackScopeList | (private) | `function normalizeSlackScopeList(value: unknown...` |
| 208 | fn | getSlackWebApiErrorData | (private) | `function getSlackWebApiErrorData(err: unknown):...` |
| 219 | fn | formatSlackWebApiErrorMessage | (private) | `function formatSlackWebApiErrorMessage(err: unk...` |
| 246 | fn | enrichSlackWebApiError | (private) | `function enrichSlackWebApiError(err: unknown): ...` |
| 254 | fn | readSlackRequestErrorMessage | (private) | `function readSlackRequestErrorMessage(value: un...` |
| 261 | fn | resolvePostedMessageThreadTs | (private) | `function resolvePostedMessageThreadTs(response: {` |
| 268 | type | SlackSendResult | pub | - |
| 275 | fn | updateMessageSlack | pub | `export async function updateMessageSlack(params: {` |
| 299 | type | SlackConversationMessage | (private) | - |
| 305 | type | SlackConversationLookupResponse | (private) | - |
| 311 | type | SlackConversationLookupClient | (private) | - |
| 313 | fn | createSlackSendReceipt | (private) | `function createSlackSendReceipt(params: {` |
| 338 | fn | resolveToken | (private) | `function resolveToken(params: {` |
| 360 | fn | parseRecipient | (private) | `function parseRecipient(raw: string): SlackReci...` |
| 371 | fn | parseEnterpriseEventRecipient | (private) | `function parseEnterpriseEventRecipient(raw: str...` |
| 379 | fn | resolveEnterpriseEventScope | (private) | `function resolveEnterpriseEventScope(params: {` |
| 404 | fn | resolveSlackTextChunks | (private) | `function resolveSlackTextChunks(params: {` |
| 446 | fn | createSlackSendQueueKey | (private) | `function createSlackSendQueueKey(params: {` |
| 460 | fn | runQueuedSlackSend | (private) | `async function runQueuedSlackSend<T>(key: strin...` |
| 464 | fn | createSlackDmCacheKey | (private) | `function createSlackDmCacheKey(params: {` |
| 474 | fn | getSlackDmChannelCache | (private) | `function getSlackDmChannelCache(client: WebClie...` |
| 484 | fn | setSlackDmChannelCache | (private) | `function setSlackDmChannelCache(cache: Map<stri...` |
| 496 | fn | isSlackUserRecipient | (private) | `function isSlackUserRecipient(recipient: SlackR...` |
| 500 | fn | resolveDirectUserPostChannelId | (private) | `function resolveDirectUserPostChannelId(params: {` |
| 511 | fn | resolvePostedMessageChannelId | (private) | `function resolvePostedMessageChannelId(response...` |
| 518 | fn | resolveChannelId | (private) | `async function resolveChannelId(` |
| 552 | fn | resolveSlackDmChannelId | pub | `export async function resolveSlackDmChannelId(p...` |
| 566 | fn | createSlackDeliveryMetadataId | (private) | `function createSlackDeliveryMetadataId(queueId?...` |
| 576 | fn | createSlackDeliveryMetadataSignature | (private) | `function createSlackDeliveryMetadataSignature(p...` |
| 596 | fn | withSlackDeliveryMetadata | (private) | `function withSlackDeliveryMetadata(` |
| 638 | fn | formatSlackTimestampFromMs | (private) | `function formatSlackTimestampFromMs(ms: number)...` |
| 642 | fn | asSlackConversationMessages | (private) | `function asSlackConversationMessages(` |
| 653 | type | SlackDeliveryPart | (private) | - |
| 660 | type | SlackConversationDeliveryScan | (private) | - |
| 672 | fn | findSlackConversationDeliveryParts | (private) | `function findSlackConversationDeliveryParts(par...` |
| 737 | fn | scanSlackConversationForDelivery | (private) | `async function scanSlackConversationForDelivery...` |
| 752 | fn | response | (private) | `const response = (` |
| 863 | fn | reconcileSlackUnknownSend | pub | `export async function reconcileSlackUnknownSend(` |
| 975 | fn | sendMessageSlack | pub | `export async function sendMessageSlack(` |
| 1055 | fn | sendMessageSlackQueued | (private) | `async function sendMessageSlackQueued(params: {` |
| 1072 | fn | sendMessageSlackQueuedInner | (private) | `async function sendMessageSlackQueuedInner(para...` |
| 1115 | fn | reportDelivery | (private) | `const reportDelivery = async (result: SlackSend...` |
| 1120 | fn | dispatchOnce | (private) | `const dispatchOnce = async () => {` |

## Public API

### `setSlackDefaultSendIdentity`

```
export function setSlackDefaultSendIdentity(accountId: string, identity?: SlackSendIdentity): void {
```

**Line:** 171 | **Kind:** fn

### `updateMessageSlack`

```
export async function updateMessageSlack(params: {
```

**Line:** 275 | **Kind:** fn

### `resolveSlackDmChannelId`

```
export async function resolveSlackDmChannelId(params: {
```

**Line:** 552 | **Kind:** fn

### `reconcileSlackUnknownSend`

```
export async function reconcileSlackUnknownSend(
```

**Line:** 863 | **Kind:** fn

### `sendMessageSlack`

```
export async function sendMessageSlack(
```

**Line:** 975 | **Kind:** fn
