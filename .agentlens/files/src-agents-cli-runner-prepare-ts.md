# src/agents/cli-runner/prepare.ts

[← Back to Module](../modules/src-agents-cli-runner/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1376
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 126 | fn | resolveClaudeCliContextModelId | (private) | `function resolveClaudeCliContextModelId(modelId...` |
| 131 | type | RunCliAgentPrepareParams | (private) | - |
| 158 | fn | resolveReusableCliSessionId | (private) | `function resolveReusableCliSessionId(reusableCl...` |
| 164 | fn | resolveCliSessionInvalidatedReason | (private) | `function resolveCliSessionInvalidatedReason(` |
| 172 | fn | canTransportSystemPrompt | (private) | `function canTransportSystemPrompt(backend: CliB...` |
| 181 | fn | buildCliSessionDriftUserContext | (private) | `function buildCliSessionDriftUserContext(` |
| 190 | fn | prependCliSessionDriftUserContext | (private) | `function prependCliSessionDriftUserContext(` |
| 208 | fn | resolveCliSkillsPrompt | (private) | `async function resolveCliSkillsPrompt(params: {` |
| 278 | fn | setCliRunnerPrepareTestDeps | (private) | `function setCliRunnerPrepareTestDeps(overrides:...` |
| 283 | fn | shouldSkipLocalCliCredentialEpoch | (private) | `function shouldSkipLocalCliCredentialEpoch(para...` |
| 305 | fn | shouldRefreshAuthProfileForExecution | (private) | `function shouldRefreshAuthProfileForExecution(p...` |
| 320 | fn | prepareCliRunContext | pub | `export async function prepareCliRunContext(` |
| 396 | fn | loadScopedAuthStore | (private) | `const loadScopedAuthStore = (options: { profile...` |
| 518 | fn | resolveContextModelTokens | (private) | `const resolveContextModelTokens = (contextModel...` |
| 862 | fn | sideQuestionBackend | (private) | `const sideQuestionBackend = (() => {` |
| 869 | fn | processPerTurnBackend | (private) | `const processPerTurnBackend = (() => {` |
| 1022 | fn | loadOpenClawHistoryMessages | (private) | `const loadOpenClawHistoryMessages = async () => {` |

## Public API

### `prepareCliRunContext`

```
export async function prepareCliRunContext(
```

**Line:** 320 | **Kind:** fn
