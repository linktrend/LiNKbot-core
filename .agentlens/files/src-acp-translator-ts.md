# src/acp/translator.ts

[← Back to Module](../modules/src-acp/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1793
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 111 | type | ChatSendAck | (private) | - |
| 116 | fn | normalizedChatSendAckStatus | (private) | `function normalizedChatSendAckStatus(status: un...` |
| 120 | fn | isTerminalChatSendAckFailure | (private) | `function isTerminalChatSendAckFailure(status: u...` |
| 125 | fn | isTerminalChatSendAckSuccess | (private) | `function isTerminalChatSendAckSuccess(status: u...` |
| 132 | fn | getAvailableCommandsForAcp | (private) | `async function getAvailableCommandsForAcp() {` |
| 137 | type | DisconnectContext | (private) | - |
| 142 | type | PendingPrompt | (private) | - |
| 158 | type | PendingApprovalRelay | (private) | - |
| 166 | type | PendingToolCall | (private) | - |
| 173 | type | AcpGatewayAgentOptions | (private) | - |
| 178 | fn | isAdminScopeProvenanceRejection | (private) | `function isAdminScopeProvenanceRejection(err: u...` |
| 193 | fn | isGatewayCloseError | (private) | `function isGatewayCloseError(err: unknown): boo...` |
| 198 | type | AgentWaitResult | (private) | - |
| 206 | fn | buildSystemInputProvenance | (private) | `function buildSystemInputProvenance(originSessi...` |
| 215 | fn | buildSystemProvenanceReceipt | (private) | `function buildSystemProvenanceReceipt(params: {` |
| 232 | fn | hasExplicitSessionRouting | (private) | `function hasExplicitSessionRouting(` |
| 242 | class | AcpGatewayAgent | pub | - |
| 704 | fn | sendWithProvenanceFallback | (private) | `const sendWithProvenanceFallback = async () => {` |
| 705 | fn | markSendAccepted | (private) | `const markSendAccepted = () => {` |
| 713 | fn | pending | (private) | `const pending = () => this.getPendingPrompt(par...` |

## Public API
