# extensions/codex/src/migration/provider.test.ts

[← Back to Module](../modules/extensions-codex-src-migration/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2628
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | fn | makeTempRoot | (private) | `async function makeTempRoot(): Promise<string> {` |
| 40 | fn | writeFile | (private) | `async function writeFile(filePath: string, cont...` |
| 45 | fn | makeContext | (private) | `function makeContext(params: {` |
| 83 | fn | findItem | (private) | `function findItem(items: readonly { id?: string...` |
| 91 | fn | findItemByReason | (private) | `function findItemByReason(items: readonly { rea...` |
| 99 | fn | expectRecordFields | (private) | `function expectRecordFields(record: unknown, ex...` |
| 110 | fn | fakeJwt | (private) | `function fakeJwt(payload: Record<string, unknow...` |
| 116 | fn | mockCallArg | (private) | `function mockCallArg(mock: ReturnType<typeof vi...` |
| 124 | fn | targetAgentDir | (private) | `function targetAgentDir(fixture: { stateDir: st...` |
| 128 | fn | loadTargetAuthStore | (private) | `function loadTargetAuthStore(fixture: { stateDi...` |
| 132 | fn | createCodexFixture | (private) | `async function createCodexFixture(): Promise<{` |
| 168 | fn | sourceAppCacheKey | (private) | `function sourceAppCacheKey(fixture: { codexHome...` |
| 2500 | fn | createConfigRuntime | (private) | `function createConfigRuntime(` |
| 2503 | type | Runtime | (private) | - |
| 2504 | type | MutateConfigFileParams | (private) | - |
| 2505 | type | MutateConfigFileResult | (private) | - |
| 2529 | fn | pluginList | (private) | `function pluginList(plugins: v2.PluginSummary[]...` |
| 2544 | fn | pluginRead | (private) | `function pluginRead(pluginName: string, apps: v...` |
| 2558 | fn | createFailingConfigRuntime | (private) | `function createFailingConfigRuntime(` |
| 2561 | type | Runtime | (private) | - |
| 2562 | type | MutateConfigFileParams | (private) | - |
| 2573 | fn | pluginApp | (private) | `function pluginApp(id: string, overrides: Parti...` |
| 2584 | fn | appInfo | (private) | `function appInfo(id: string, overrides: Partial...` |
| 2603 | fn | appsList | (private) | `function appsList(apps: v2.AppInfo[]): v2.AppsL...` |
| 2607 | fn | chatGptAccount | (private) | `function chatGptAccount(): CodexGetAccountRespo...` |
| 2614 | fn | pluginSummary | (private) | `function pluginSummary(id: string, overrides: P...` |
