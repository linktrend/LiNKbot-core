# src/system-agent/chat-engine.ts

[← Back to Module](../modules/src-system-agent/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1256
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | type | SystemAgentChatEngineOptions | pub | - |
| 83 | type | SystemAgentChatReplyAction | (private) | - |
| 85 | type | SystemAgentChatReply | (private) | - |
| 100 | type | WizardPrompterLike | (private) | - |
| 102 | type | ActiveWizardBridge | (private) | - |
| 110 | type | CaptureRuntime | (private) | - |
| 116 | fn | createHostedWizardRuntime | (private) | `function createHostedWizardRuntime(runtime: Run...` |
| 125 | fn | createCaptureRuntime | (private) | `function createCaptureRuntime(): CaptureRuntime {` |
| 137 | fn | defaultChannelSetupWizardRunner | (private) | `function defaultChannelSetupWizardRunner(` |
| 191 | fn | formatWizardOptions | (private) | `function formatWizardOptions(step: WizardStep):...` |
| 203 | fn | wizardStepChatQuestion | (private) | `function wizardStepChatQuestion(step: WizardSte...` |
| 243 | fn | renderWizardStep | (private) | `function renderWizardStep(step: WizardStep): st...` |
| 275 | fn | parseWizardAnswer | (private) | `function parseWizardAnswer(step: WizardStep, te...` |
| 293 | fn | matchOption | (private) | `const matchOption = (token: string) => {` |
| 331 | fn | formatOperationError | (private) | `function formatOperationError(error: unknown): ...` |
| 341 | fn | redactSensitiveCommandText | (private) | `function redactSensitiveCommandText(text: strin...` |
| 349 | fn | formatPendingOperationForAssistant | (private) | `function formatPendingOperationForAssistant(ope...` |
| 356 | fn | preservePendingSetupModel | (private) | `function preservePendingSetupModel(` |
| 374 | class | SystemAgentChatEngine | pub | - |
| 1106 | fn | beforePersistentApply | (private) | `const beforePersistentApply = async (runtime: R...` |

## Public API

## Memory Markers

### 🟢 `NOTE` (line 327)

> /progress/action steps advance on any input.
