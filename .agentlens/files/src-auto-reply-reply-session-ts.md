# src/auto-reply/reply/session.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1222
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 120 | type | ReplySessionEndReason | (private) | - |
| 125 | fn | resolveExplicitSessionEndReason | (private) | `function resolveExplicitSessionEndReason(matche...` |
| 129 | fn | resolveSessionDefaultAccountId | (private) | `function resolveSessionDefaultAccountId(params: {` |
| 152 | fn | resolveStaleSessionEndReason | (private) | `function resolveStaleSessionEndReason(params: {` |
| 159 | fn | hasProviderOwnedSession | (private) | `function hasProviderOwnedSession(entry: Session...` |
| 164 | type | SessionInitResult | pub | - |
| 185 | type | InitSessionStateParams | (private) | - |
| 196 | type | InitSessionStateAttemptContext | (private) | - |
| 204 | type | InitSessionStateAttemptOutcome | (private) | - |
| 208 | fn | resolveSessionConversationBindingContext | (private) | `function resolveSessionConversationBindingContext(` |
| 234 | fn | resolveBoundConversationSessionKey | (private) | `function resolveBoundConversationSessionKey(par...` |
| 269 | fn | resolveInitSessionStateAttemptContext | (private) | `function resolveInitSessionStateAttemptContext(` |
| 309 | type | ReplySessionPreprocessingState | (private) | - |
| 316 | fn | resolveReplySessionPreprocessingState | pub | `export function resolveReplySessionPreprocessin...` |
| 347 | fn | initSessionState | pub | `export async function initSessionState(params: ...` |
| 354 | fn | initSessionStateAttempt | (private) | `async function initSessionStateAttempt(` |
| 426 | fn | initSessionStateAttemptLocked | (private) | `async function initSessionStateAttemptLocked(` |

## Public API

### `resolveReplySessionPreprocessingState`

```
export function resolveReplySessionPreprocessingState(
```

**Line:** 316 | **Kind:** fn

### `initSessionState`

```
export async function initSessionState(params: InitSessionStateParams): Promise<SessionInitResult> {
```

**Line:** 347 | **Kind:** fn
