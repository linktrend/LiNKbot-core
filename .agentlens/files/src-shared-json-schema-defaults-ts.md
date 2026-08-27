# src/shared/json-schema-defaults.ts

[← Back to Module](../modules/src-shared/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1320
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | type | JsonSchemaValue | (private) | - |
| 7 | type | LocalRefResolution | (private) | - |
| 83 | fn | schemaTypeIncludes | (private) | `function schemaTypeIncludes(schema: Record<stri...` |
| 87 | fn | schemaResourceRefKey | (private) | `function schemaResourceRefKey(` |
| 103 | fn | normalizeSchemaMap | (private) | `function normalizeSchemaMap(value: unknown): un...` |
| 112 | fn | compilesUnicodePattern | (private) | `function compilesUnicodePattern(pattern: string...` |
| 123 | fn | repairJsonSchemaPatternForUnicodeRegExp | (private) | `function repairJsonSchemaPatternForUnicodeRegEx...` |
| 136 | fn | normalizeSchemaDependencies | (private) | `function normalizeSchemaDependencies(value: unk...` |
| 148 | fn | normalizePatternProperties | (private) | `function normalizePatternProperties(value: Reco...` |
| 162 | fn | expandJsonSchemaTypeArray | (private) | `function expandJsonSchemaTypeArray(schema: Reco...` |
| 179 | fn | normalizeAdditionalPropertiesSchema | (private) | `function normalizeAdditionalPropertiesSchema(` |
| 199 | fn | normalizeJsonSchemaNode | (private) | `function normalizeJsonSchemaNode(schema: unknow...` |
| 232 | fn | validateTypeKeyword | (private) | `function validateTypeKeyword(type: unknown, pat...` |
| 248 | fn | decodePointerSegment | (private) | `function decodePointerSegment(segment: string):...` |
| 258 | fn | parseJsonPointerArrayIndex | (private) | `function parseJsonPointerArrayIndex(segment: st...` |
| 266 | fn | resolveLocalAnchor | (private) | `function resolveLocalAnchor(` |
| 336 | fn | resolveLocalRef | (private) | `function resolveLocalRef(` |
| 391 | fn | splitResourceRef | (private) | `function splitResourceRef(ref: string): { resou...` |
| 398 | fn | stripFragment | (private) | `function stripFragment(id: string): string {` |
| 402 | fn | resolveSchemaId | (private) | `function resolveSchemaId(id: string, baseId: st...` |
| 413 | fn | resolveSchemaResourceRef | (private) | `function resolveSchemaResourceRef(` |
| 498 | fn | resolveSchemaRef | (private) | `function resolveSchemaRef(` |
| 509 | fn | normalizeJsonSchemaForTypeBox | pub | `export function normalizeJsonSchemaForTypeBox(s...` |
| 513 | fn | isStringArray | (private) | `function isStringArray(value: unknown): value i...` |
| 517 | fn | hasDuplicateJsonValues | (private) | `function hasDuplicateJsonValues(values: unknown...` |
| 529 | fn | validateSchemaKeywordShapes | (private) | `function validateSchemaKeywordShapes(` |
| 612 | fn | findJsonSchemaNodeError | (private) | `function findJsonSchemaNodeError(` |
| 755 | fn | findJsonSchemaShapeError | pub | `export function findJsonSchemaShapeError(schema...` |
| 759 | fn | cloneDefault | (private) | `function cloneDefault<T>(value: T): T {` |
| 766 | fn | getDefault | (private) | `function getDefault(schema: JsonSchemaValue): u...` |
| 773 | fn | schemaWithResourceContext | (private) | `function schemaWithResourceContext(` |
| 790 | fn | inlineLocalRefsForMatch | (private) | `function inlineLocalRefsForMatch(` |
| 902 | fn | schemaMatches | (private) | `function schemaMatches(` |
| 919 | fn | applyObjectPropertyDefaults | (private) | `function applyObjectPropertyDefaults(` |
| 988 | fn | applyObjectDependencyDefaults | (private) | `function applyObjectDependencyDefaults(` |
| 1030 | fn | applyObjectConditionalDefaults | (private) | `function applyObjectConditionalDefaults(` |
| 1063 | fn | countSchemaNodes | (private) | `function countSchemaNodes(schema: JsonSchemaVal...` |
| 1109 | fn | applyObjectApplicatorDefaults | (private) | `function applyObjectApplicatorDefaults(` |
| 1143 | fn | applyObjectPropertyAndDependencyDefaults | (private) | `function applyObjectPropertyAndDependencyDefaults(` |
| 1178 | fn | applySchemaDefaults | (private) | `function applySchemaDefaults(` |
| 1317 | fn | applyJsonSchemaDefaults | pub | `export function applyJsonSchemaDefaults<T>(sche...` |

## Public API

### `normalizeJsonSchemaForTypeBox`

```
export function normalizeJsonSchemaForTypeBox(schema: JsonSchemaValue): JsonSchemaValue {
```

**Line:** 509 | **Kind:** fn

### `findJsonSchemaShapeError`

```
export function findJsonSchemaShapeError(schema: JsonSchemaValue): string | undefined {
```

**Line:** 755 | **Kind:** fn

### `applyJsonSchemaDefaults`

```
export function applyJsonSchemaDefaults<T>(schema: JsonSchemaValue, value: T): T {
```

**Line:** 1317 | **Kind:** fn
