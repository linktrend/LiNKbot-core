# src/gateway/openai-http.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2764
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | fn | startServer | (private) | `async function startServer(port: number, opts?:...` |
| 62 | fn | startTokenServer | (private) | `async function startTokenServer(port: number, o...` |
| 71 | fn | writeGatewayConfig | (private) | `async function writeGatewayConfig(config: Recor...` |
| 80 | fn | postChatCompletions | (private) | `async function postChatCompletions(port: number...` |
| 93 | fn | parseSseDataLines | (private) | `function parseSseDataLines(text: string): strin...` |
| 101 | type | FirstAgentCommandOptions | (private) | - |
| 129 | fn | firstAgentCommandOptions | (private) | `function firstAgentCommandOptions() {` |
| 136 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 140 | fn | expectAgentSessionKeyMatch | (private) | `const expectAgentSessionKeyMatch = async (reque...` |
| 152 | fn | expectMessageContext | (private) | `const expectMessageContext = (` |
| 165 | fn | getFirstAgentCall | (private) | `const getFirstAgentCall = () => firstAgentComma...` |
| 166 | fn | getFirstAgentMessage | (private) | `const getFirstAgentMessage = () => getFirstAgen...` |
| 167 | fn | expectInvalidRequestNoDispatch | (private) | `const expectInvalidRequestNoDispatch = async (m...` |
| 180 | fn | postSyncUserMessage | (private) | `const postSyncUserMessage = async (message: str...` |
| 1494 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1498 | fn | getFirstAgentMaxTokens | (private) | `const getFirstAgentMaxTokens = () => firstAgent...` |
| 1551 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1555 | fn | getStreamParams | (private) | `const getStreamParams = () => firstAgentCommand...` |
| 1626 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1630 | fn | getStreamParams | (private) | `const getStreamParams = () => firstAgentCommand...` |
| 1666 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1670 | fn | getStreamParams | (private) | `const getStreamParams = () => firstAgentCommand...` |
| 1755 | fn | mockAgentOnce | (private) | `const mockAgentOnce = (payloads: Array<{ text: ...` |
| 1759 | fn | getStreamParams | (private) | `const getStreamParams = () => firstAgentCommand...` |
