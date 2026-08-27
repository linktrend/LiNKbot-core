# src/plugins/conversation-binding.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1164
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | PluginBindingApprovalsDatabase | (private) | - |
| 30 | fn | normalizeRef | (private) | `function normalizeRef(ref: ConversationRef): Co...` |
| 39 | fn | toKey | (private) | `function toKey(ref: ConversationRef): string {` |
| 127 | type | PluginBindingRequest | (private) | - |
| 128 | type | PluginBindingRequestInput | (private) | - |
| 129 | type | PluginBindingDecision | (private) | - |
| 132 | type | ConversationBindingModule | (private) | - |
| 136 | fn | importConversationBindingModule | (private) | `async function importConversationBindingModule(` |
| 144 | fn | createAdapter | (private) | `function createAdapter(channel: string, account...` |
| 186 | fn | createDiscordCodexBindRequest | (private) | `function createDiscordCodexBindRequest(` |
| 205 | fn | createTelegramCodexBindRequest | (private) | `function createTelegramCodexBindRequest(` |
| 227 | fn | createCodexBindRequest | (private) | `function createCodexBindRequest(params: {` |
| 259 | fn | requestPendingBinding | (private) | `async function requestPendingBinding(` |
| 271 | fn | approveBindingRequest | (private) | `async function approveBindingRequest(` |
| 283 | fn | importDuplicateConversationBindingModules | (private) | `async function importDuplicateConversationBindi...` |
| 290 | fn | resolveRequestedBinding | (private) | `async function resolveRequestedBinding(request:...` |
| 306 | fn | requestResolvedBinding | (private) | `async function requestResolvedBinding(input: Pl...` |
| 310 | fn | flushMicrotasks | (private) | `async function flushMicrotasks(): Promise<void> {` |
| 316 | fn | createDeferredVoid | (private) | `function createDeferredVoid(): { promise: Promi...` |
| 317 | fn | resolve | (private) | `let resolve = () => {};` |
| 324 | fn | requireMockCallArg | (private) | `function requireMockCallArg(mock: ReturnType<ty...` |
| 332 | fn | createResolvedHandlerRegistry | (private) | `function createResolvedHandlerRegistry(params: {` |
| 348 | fn | expectResolutionCallback | (private) | `async function expectResolutionCallback(params: {` |
| 379 | fn | expectResolutionDoesNotWait | (private) | `async function expectResolutionDoesNotWait(para...` |
| 418 | fn | clearPluginBindingApprovalRows | (private) | `function clearPluginBindingApprovalRows(): void {` |
| 425 | fn | readPluginBindingApprovalRows | (private) | `function readPluginBindingApprovalRows(): Array<{` |
| 443 | fn | insertPluginBindingApprovalRow | (private) | `function insertPluginBindingApprovalRow(params: {` |
| 524 | fn | rejectFirst | (private) | `let rejectFirst = (_error: Error) => {};` |
