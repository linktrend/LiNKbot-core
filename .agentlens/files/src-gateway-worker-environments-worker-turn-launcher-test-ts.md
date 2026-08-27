# src/gateway/worker-environments/worker-turn-launcher.test.ts

[← Back to Module](../modules/src-gateway-worker-environments/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1850
- **Language:** TypeScript
- **Symbols:** 11
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 31 | type | WorkerTurnLauncherOptions | (private) | - |
| 32 | type | WorkerTurnEnvironmentService | (private) | - |
| 41 | type | WorkerTurnEnvironmentRecord | (private) | - |
| 43 | fn | hasLoneSurrogate | (private) | `function hasLoneSurrogate(value: string): boole...` |
| 73 | fn | seedActivePlacement | (private) | `function seedActivePlacement(): void {` |
| 112 | fn | seedReclaimedPlacement | (private) | `function seedReclaimedPlacement() {` |
| 142 | fn | attachedEnvironment | (private) | `function attachedEnvironment(): WorkerTurnEnvir...` |
| 176 | fn | credential | (private) | `function credential(deliveryId = "c".repeat(43)...` |
| 189 | fn | unusedEnvironments | (private) | `function unusedEnvironments(): WorkerTurnEnviro...` |
| 190 | fn | unexpected | (private) | `const unexpected = () => new Error("unexpected ...` |
| 211 | fn | turn | (private) | `function turn(runId = "run-worker-turn") {` |
