# src/agents/code-mode-namespaces.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1174
- **Language:** TypeScript
- **Symbols:** 71
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 41 | type | CodeModeNamespaceContext | (private) | - |
| 54 | type | CodeModeNamespaceScope | (private) | - |
| 57 | type | CodeModeNamespaceToolInputMapper | (private) | - |
| 60 | type | CodeModeNamespaceToolCall | (private) | - |
| 69 | type | CodeModeNamespaceRegistration | (private) | - |
| 81 | type | RegisteredCodeModeNamespace | (private) | - |
| 86 | type | SerializedCodeModeNamespaceValue | pub | - |
| 93 | type | CodeModeNamespaceDescriptor | pub | - |
| 100 | type | CodeModeNamespaceRuntimeEntry | (private) | - |
| 107 | type | CodeModeNamespaceCatalogEntry | (private) | - |
| 123 | type | CodeModeNamespaceRuntime | pub | - |
| 140 | type | CodeModeNamespaceRegistryState | (private) | - |
| 154 | fn | normalizeRequiredIdentifier | (private) | `function normalizeRequiredIdentifier(value: str...` |
| 162 | fn | normalizeRequiredToolNames | (private) | `function normalizeRequiredToolNames(value: read...` |
| 178 | fn | createCodeModeNamespaceTool | pub | `export function createCodeModeNamespaceTool(` |
| 193 | fn | createCodeModeNamespaceCatalogTool | (private) | `function createCodeModeNamespaceCatalogTool(` |
| 214 | fn | createCodeModeNamespaceLocalFunction | (private) | `function createCodeModeNamespaceLocalFunction(` |
| 230 | fn | isCodeModeNamespaceToolCall | (private) | `function isCodeModeNamespaceToolCall(value: unk...` |
| 239 | fn | normalizeRegistration | (private) | `function normalizeRegistration(` |
| 271 | fn | registerCodeModeNamespaceForPlugin | pub | `export function registerCodeModeNamespaceForPlu...` |
| 291 | fn | listCodeModeNamespaces | (private) | `function listCodeModeNamespaces(): RegisteredCo...` |
| 296 | fn | clearCodeModeNamespacesForTest | (private) | `function clearCodeModeNamespacesForTest(): void {` |
| 308 | fn | clearCodeModeNamespacesForPlugin | pub | `export function clearCodeModeNamespacesForPlugi...` |
| 317 | fn | promptForRegistration | (private) | `function promptForRegistration(` |
| 326 | fn | registrationHasVisibleRequiredTools | (private) | `function registrationHasVisibleRequiredTools(` |
| 338 | fn | filterRegistrationsByVisibleTools | (private) | `function filterRegistrationsByVisibleTools(` |
| 346 | fn | toIdentifier | (private) | `function toIdentifier(value: string, fallback: ...` |
| 366 | fn | uniqueIdentifier | (private) | `function uniqueIdentifier(base: string, used: S...` |
| 381 | fn | readSchemaRecord | (private) | `function readSchemaRecord(schema: unknown): Rec...` |
| 385 | fn | readSchemaProperties | (private) | `function readSchemaProperties(schema: unknown):...` |
| 390 | fn | readSchemaString | (private) | `function readSchemaString(schema: unknown, key:...` |
| 396 | fn | readRequiredKeys | (private) | `function readRequiredKeys(schema: unknown): str...` |
| 403 | fn | orderedSchemaKeys | (private) | `function orderedSchemaKeys(schema: unknown): st...` |
| 409 | fn | applySchemaDefaults | (private) | `function applySchemaDefaults(` |
| 423 | fn | mapMcpNamespaceInput | (private) | `function mapMcpNamespaceInput(schema: unknown, ...` |
| 443 | fn | escapeDocComment | (private) | `function escapeDocComment(value: string): string {` |
| 447 | fn | indent | (private) | `function indent(lines: string[], prefix: string...` |
| 451 | fn | renderDocComment | (private) | `function renderDocComment(` |
| 479 | fn | normalizeDocLines | (private) | `function normalizeDocLines(value: string | unde...` |
| 490 | fn | collapseDocText | (private) | `function collapseDocText(value: string | undefi...` |
| 494 | fn | schemaType | (private) | `function schemaType(schema: unknown): string {` |
| 539 | fn | tsPropertyName | (private) | `function tsPropertyName(name: string): string {` |
| 543 | fn | renderInlineObjectType | (private) | `function renderInlineObjectType(schema: unknown...` |
| 558 | type | McpApiParamDoc | (private) | - |
| 566 | type | McpApiToolDoc | (private) | - |
| 576 | type | McpApiServerDoc | (private) | - |
| 583 | type | CodeModeApiVirtualFile | pub | - |
| 590 | fn | buildMcpParamDocs | (private) | `function buildMcpParamDocs(schema: unknown): Mc...` |
| 610 | fn | renderMcpInputType | (private) | `function renderMcpInputType(params: readonly Mc...` |
| 628 | fn | renderMcpToolSignature | (private) | `function renderMcpToolSignature(` |
| 639 | fn | renderMcpServerHeader | (private) | `function renderMcpServerHeader(server: McpApiSe...` |
| 680 | fn | renderMcpRootHeader | (private) | `function renderMcpRootHeader(servers: readonly ...` |
| 692 | fn | renderMcpRootFile | (private) | `function renderMcpRootFile(servers: readonly Mc...` |
| 699 | fn | buildMcpApiResponse | (private) | `function buildMcpApiResponse(params: {` |
| 752 | fn | scopeAtPath | (private) | `function scopeAtPath(` |
| 770 | fn | toolIdentifiersForServer | (private) | `function toolIdentifiersForServer(` |
| 783 | type | McpNamespaceModel | (private) | - |
| 788 | fn | createMcpNamespaceModel | (private) | `function createMcpNamespaceModel(` |
| 872 | fn | createMcpNamespaceScope | (private) | `function createMcpNamespaceScope(` |
| 880 | interface | AgentRunOptions | (private) | - |
| 890 | interface | AgentsApi | (private) | - |
| 909 | fn | createCodeModeApiVirtualFiles | pub | `export function createCodeModeApiVirtualFiles(` |
| 943 | fn | createMcpNamespaceEntry | (private) | `function createMcpNamespaceEntry(` |
| 971 | fn | describeMcpNamespaceForPrompt | (private) | `function describeMcpNamespaceForPrompt(` |
| 993 | fn | describeCodeModeNamespacesForPrompt | pub | `export function describeCodeModeNamespacesForPr...` |
| 1020 | fn | assertNamespacePathSegment | (private) | `function assertNamespacePathSegment(segment: st...` |
| 1030 | fn | namespacePathKey | (private) | `function namespacePathKey(path: readonly string...` |
| 1034 | fn | serializeNamespaceScopeValue | (private) | `function serializeNamespaceScopeValue(` |
| 1079 | fn | resolveNamespacePath | (private) | `function resolveNamespacePath(` |
| 1099 | fn | readScope | (private) | `function readScope(value: unknown, id: string):...` |
| 1107 | fn | createCodeModeNamespaceRuntime | pub | `export async function createCodeModeNamespaceRu...` |

## Public API

### `createCodeModeNamespaceTool`

```
export function createCodeModeNamespaceTool(
```

**Line:** 178 | **Kind:** fn

### `registerCodeModeNamespaceForPlugin`

```
export function registerCodeModeNamespaceForPlugin(
```

**Line:** 271 | **Kind:** fn

### `clearCodeModeNamespacesForPlugin`

```
export function clearCodeModeNamespacesForPlugin(pluginId: string): void {
```

**Line:** 308 | **Kind:** fn

### `createCodeModeApiVirtualFiles`

```
export function createCodeModeApiVirtualFiles(
```

**Line:** 909 | **Kind:** fn

### `describeCodeModeNamespacesForPrompt`

```
export function describeCodeModeNamespacesForPrompt(
```

**Line:** 993 | **Kind:** fn

### `createCodeModeNamespaceRuntime`

```
export async function createCodeModeNamespaceRuntime(
```

**Line:** 1107 | **Kind:** fn
