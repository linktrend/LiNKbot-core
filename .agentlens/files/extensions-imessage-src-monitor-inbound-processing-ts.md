# extensions/imessage/src/monitor/inbound-processing.ts

[← Back to Module](../modules/extensions-imessage-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1119
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | type | IMessageReactionNotificationMode | (private) | - |
| 60 | type | IMessageReplyContext | (private) | - |
| 66 | fn | normalizeNonEmpty | (private) | `const normalizeNonEmpty = (value: string) => va...` |
| 84 | fn | isIMessageConversationAllowTarget | (private) | `function isIMessageConversationAllowTarget(entr...` |
| 94 | fn | mergeIMessageGroupAllowFromWithLegacyChatTargets | pub | `export function mergeIMessageGroupAllowFromWith...` |
| 137 | fn | normalizeIMessageHandleEntry | (private) | `function normalizeIMessageHandleEntry(entry: st...` |
| 142 | fn | normalizeIMessageChatIdEntry | (private) | `function normalizeIMessageChatIdEntry(entry: st...` |
| 147 | fn | normalizeIMessageChatGuidEntry | (private) | `function normalizeIMessageChatGuidEntry(entry: ...` |
| 152 | fn | normalizeIMessageChatIdentifierEntry | (private) | `function normalizeIMessageChatIdentifierEntry(e...` |
| 157 | fn | normalizeDmPolicy | (private) | `function normalizeDmPolicy(policy: string): DmP...` |
| 161 | fn | normalizeGroupPolicy | (private) | `function normalizeGroupPolicy(policy: string): ...` |
| 165 | fn | normalizeReplyField | (private) | `function normalizeReplyField(value: unknown): s...` |
| 176 | fn | describeReplyContext | (private) | `function describeReplyContext(message: IMessage...` |
| 186 | fn | resolveInboundEchoMessageIds | (private) | `function resolveInboundEchoMessageIds(message: ...` |
| 201 | fn | rememberIMessageSkippedFromMeForSelfChatDedupe | pub | `export function rememberIMessageSkippedFromMeFo...` |
| 249 | fn | hasIMessageEchoMatch | (private) | `function hasIMessageEchoMatch(params: {` |
| 301 | fn | isKnownFromMeIMessageReactionTarget | (private) | `function isKnownFromMeIMessageReactionTarget(pa...` |
| 334 | fn | resolveIMessageGroupSystemPrompt | (private) | `function resolveIMessageGroupSystemPrompt(param...` |
| 347 | type | IMessageInboundDispatchDecision | (private) | - |
| 372 | type | IMessageInboundReactionDecision | (private) | - |
| 386 | type | IMessageInboundDecision | (private) | - |
| 392 | fn | resolveIMessageInboundDecision | pub | `export async function resolveIMessageInboundDec...` |
| 873 | fn | buildIMessageInboundContext | pub | `export async function buildIMessageInboundConte...` |
| 1068 | fn | buildIMessageEchoScope | (private) | `function buildIMessageEchoScope(params: {` |
| 1101 | fn | buildDirectIMessageReplyTarget | pub | `export function buildDirectIMessageReplyTarget(...` |
| 1114 | fn | describeIMessageEchoDropLog | (private) | `function describeIMessageEchoDropLog(params: { ...` |

## Public API

### `mergeIMessageGroupAllowFromWithLegacyChatTargets`

```
export function mergeIMessageGroupAllowFromWithLegacyChatTargets(params: {
```

**Line:** 94 | **Kind:** fn

### `rememberIMessageSkippedFromMeForSelfChatDedupe`

```
export function rememberIMessageSkippedFromMeForSelfChatDedupe(params: {
```

**Line:** 201 | **Kind:** fn

### `resolveIMessageInboundDecision`

```
export async function resolveIMessageInboundDecision(params: {
```

**Line:** 392 | **Kind:** fn

### `buildIMessageInboundContext`

```
export async function buildIMessageInboundContext(params: {
```

**Line:** 873 | **Kind:** fn

### `buildDirectIMessageReplyTarget`

```
export function buildDirectIMessageReplyTarget(params: {
```

**Line:** 1101 | **Kind:** fn
