# src/agents/tools/image-tool.test.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3316
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 29 | fn | jsonRoundTrip | (private) | `function jsonRoundTrip<T>(value: T): T {` |
| 114 | fn | readMockAuthProfileStore | (private) | `function readMockAuthProfileStore(agentDir?: st...` |
| 269 | fn | writeAuthProfiles | (private) | `async function writeAuthProfiles(agentDir: stri...` |
| 278 | fn | withTempAgentDir | (private) | `async function withTempAgentDir<T>(run: (agentD...` |
| 291 | fn | createLargeColorBlockPng | (private) | `function createLargeColorBlockPng(size: number)...` |
| 304 | fn | readJpegDimensions | (private) | `function readJpegDimensions(buffer: Buffer): { ...` |
| 330 | fn | readPngDimensions | (private) | `function readPngDimensions(buffer: Buffer): { w...` |
| 340 | fn | withTempWorkspacePng | (private) | `async function withTempWorkspacePng(` |
| 357 | fn | registerImageToolEnvReset | (private) | `function registerImageToolEnvReset(priorFetch: ...` |
| 370 | fn | stubMinimaxOkFetch | (private) | `function stubMinimaxOkFetch() {` |
| 387 | fn | stubMinimaxFetch | (private) | `function stubMinimaxFetch(baseResp: { status_co...` |
| 410 | fn | stubOpenAiCompletionsOkFetch | (private) | `function stubOpenAiCompletionsOkFetch(text = "o...` |
| 456 | fn | createMinimaxImageConfig | (private) | `function createMinimaxImageConfig(): OpenClawCo...` |
| 472 | fn | createDefaultImageFallbackExpectation | (private) | `function createDefaultImageFallbackExpectation(...` |
| 510 | fn | describeMoonshotImage | (private) | `async function describeMoonshotImage(` |
| 542 | fn | describeMoonshotImages | (private) | `async function describeMoonshotImages(` |
| 557 | fn | readMockResponseText | (private) | `async function readMockResponseText(response: R...` |
| 569 | fn | describeGenericImageWithModel | (private) | `async function describeGenericImageWithModel(` |
| 585 | fn | describeGenericImagesWithModel | (private) | `async function describeGenericImagesWithModel(` |
| 632 | fn | installImageUnderstandingProviderDeps | (private) | `function installImageUnderstandingProviderDeps(` |
| 693 | fn | installImageUnderstandingProviderStubs | (private) | `function installImageUnderstandingProviderStubs...` |
| 697 | fn | installFastLocalImageProviderStubs | (private) | `function installFastLocalImageProviderStubs(......` |
| 748 | fn | makeModelDefinition | (private) | `function makeModelDefinition(id: string, input:...` |
| 760 | fn | expectImageToolExecOk | (private) | `async function expectImageToolExecOk(` |
| 773 | type | ToolTextResult | (private) | - |
| 782 | fn | expectToolText | (private) | `function expectToolText(result: unknown, text: ...` |
| 787 | fn | firstImageRequest | (private) | `function firstImageRequest(mock: { mock: { call...` |
| 795 | fn | fetchCallAt | (private) | `function fetchCallAt(mock: { mock: { calls: unk...` |
| 803 | fn | requireImageTool | (private) | `function requireImageTool<T>(tool: T | null | u...` |
| 811 | fn | createRequiredImageTool | (private) | `function createRequiredImageTool(args: Paramete...` |
| 815 | type | ImageToolInstance | (private) | - |
| 817 | fn | withTempSandboxState | (private) | `async function withTempSandboxState(` |
| 832 | fn | withMinimaxImageToolFromTempAgentDir | (private) | `async function withMinimaxImageToolFromTempAgen...` |
| 841 | fn | findSchemaUnionKeywords | (private) | `function findSchemaUnionKeywords(schema: unknow...` |
| 861 | type | Profiles | (private) | - |
| 862 | type | ImplicitImageRoutingCase | (private) | - |
| 895 | fn | writeProfiles | (private) | `const writeProfiles = (agentDir: string, profil...` |
| 2660 | fn | createMinimaxVlmFixture | (private) | `async function createMinimaxVlmFixture(baseResp...` |
| 2813 | fn | withManagedInboundPng | (private) | `async function withManagedInboundPng(` |
| 2870 | fn | createAssistantMessage | (private) | `function createAssistantMessage(` |
