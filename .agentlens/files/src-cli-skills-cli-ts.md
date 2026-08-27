# src/cli/skills-cli.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1119
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | type | SkillStatusReport | (private) | - |
| 76 | type | ResolvedClawHubSkillVerificationTarget | (private) | - |
| 81 | fn | resolveSkillClawHubRiskOptions | (private) | `function resolveSkillClawHubRiskOptions(` |
| 95 | fn | formatSkillWarning | (private) | `function formatSkillWarning(message: string): s...` |
| 99 | fn | formatClawHubSearchText | (private) | `function formatClawHubSearchText(value: string)...` |
| 103 | fn | isClawHubSkillBlockedCliFailure | (private) | `function isClawHubSkillBlockedCliFailure(result...` |
| 111 | type | ResolveSkillsWorkspaceOptions | (private) | - |
| 116 | type | ResolvedSkillsWorkspace | (private) | - |
| 120 | fn | resolveSkillsWorkspace | (private) | `function resolveSkillsWorkspace(options?: Resol...` |
| 139 | fn | resolveAgentOption | (private) | `function resolveAgentOption(` |
| 146 | fn | loadGatewaySkillsStatusReport | (private) | `async function loadGatewaySkillsStatusReport(` |
| 164 | fn | loadSkillsStatusReport | (private) | `async function loadSkillsStatusReport(` |
| 179 | fn | runSkillsAction | (private) | `async function runSkillsAction(` |
| 192 | fn | resolveSkillsWorkspaceForCommand | (private) | `function resolveSkillsWorkspaceForCommand(` |
| 199 | fn | resolveClawHubTargetWorkspaceDir | (private) | `function resolveClawHubTargetWorkspaceDir(` |
| 206 | fn | resolveClawHubTargetWorkspace | (private) | `function resolveClawHubTargetWorkspace(` |
| 222 | fn | shouldFailSkillVerification | (private) | `function shouldFailSkillVerification(result: Cl...` |
| 227 | fn | buildSkillVerificationOutput | (private) | `function buildSkillVerificationOutput(` |
| 246 | fn | readVerifiedSkillCardUrl | (private) | `function readVerifiedSkillCardUrl(` |
| 263 | fn | formatSkillProposalList | (private) | `function formatSkillProposalList(manifest: Skil...` |
| 274 | fn | formatSkillProposalInspect | (private) | `function formatSkillProposalInspect(read: Skill...` |
| 300 | fn | formatSkillCuratorStatus | (private) | `function formatSkillCuratorStatus(status: Skill...` |
| 301 | fn | timestamp | (private) | `const timestamp = (value: number | null) =>` |
| 333 | fn | loadGatewaySkillCuratorStatus | (private) | `async function loadGatewaySkillCuratorStatus(` |
| 354 | fn | loadSkillCuratorStatus | (private) | `async function loadSkillCuratorStatus(): Promis...` |
| 359 | fn | runSkillCuratorMutation | (private) | `async function runSkillCuratorMutation(method: ...` |
| 385 | fn | readSkillProposalInput | (private) | `async function readSkillProposalInput(options: {` |
| 406 | fn | registerSkillsCli | pub | `export function registerSkillsCli(program: Comm...` |
| 726 | fn | showCuratorStatus | (private) | `const showCuratorStatus = async () => {` |

## Public API

### `registerSkillsCli`

```
export function registerSkillsCli(program: Command) {
```

**Line:** 406 | **Kind:** fn
