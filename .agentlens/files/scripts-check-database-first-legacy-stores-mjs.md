# scripts/check-database-first-legacy-stores.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 9898
- **Language:** JavaScript
- **Symbols:** 437
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 225 | fn | isAllowedLegacyOwnerPath | (private) | `function isAllowedLegacyOwnerPath(relativePath) {` |
| 235 | fn | normalizedSourceText | (private) | `function normalizedSourceText(sourceFile, node) {` |
| 239 | fn | currentLegacyWriteViolationAllowances | (private) | `function currentLegacyWriteViolationAllowances(...` |
| 251 | fn | currentLegacyWriteViolationPath | (private) | `function currentLegacyWriteViolationPath(finger...` |
| 257 | fn | consumeAllowedCurrentLegacyViolation | (private) | `function consumeAllowedCurrentLegacyViolation(` |
| 277 | fn | isSourceFile | (private) | `function isSourceFile(filePath) {` |
| 281 | fn | isGeneratedAssetSourceFile | (private) | `function isGeneratedAssetSourceFile(filePath) {` |
| 289 | fn | isGeneratedAssetSourcePath | (private) | `function isGeneratedAssetSourcePath(filePath) {` |
| 297 | fn | isTestLikeSourceFile | (private) | `function isTestLikeSourceFile(filePath) {` |
| 301 | fn | collectSourceFiles | (private) | `async function collectSourceFiles(targetPath) {` |
| 346 | fn | collectDatabaseFirstLegacyStoreSourceFiles | pub | `export async function collectDatabaseFirstLegac...` |
| 350 | fn | collectNativeSourceFiles | (private) | `async function collectNativeSourceFiles(targetP...` |
| 376 | fn | collectDatabaseFirstNativeLegacyStoreViolations | pub | `export function collectDatabaseFirstNativeLegac...` |
| 389 | fn | importSource | (private) | `function importSource(node) {` |
| 394 | fn | isLegacyRestartSentinelPreflightDetection | (private) | `function isLegacyRestartSentinelPreflightDetect...` |
| 436 | fn | collectLegacyRestartSentinelBoundaryViolations | (private) | `function collectLegacyRestartSentinelBoundaryVi...` |
| 443 | fn | add | (private) | `function add(node, kind) {` |
| 453 | fn | visit | (private) | `function visit(node) {` |
| 474 | fn | isHelperWriteModuleSource | (private) | `function isHelperWriteModuleSource(source) {` |
| 483 | fn | collectCreateRequireBindings | (private) | `function collectCreateRequireBindings(sourceFil...` |
| 485 | fn | visit | (private) | `function visit(node) {` |
| 503 | fn | isFsRequireExpression | (private) | `function isFsRequireExpression(expression, isRe...` |
| 518 | fn | unwrapAwaitExpression | (private) | `function unwrapAwaitExpression(expression) {` |
| 523 | fn | isFsDynamicImportExpression | (private) | `function isFsDynamicImportExpression(expression) {` |
| 536 | fn | collectFsBindings | (private) | `function collectFsBindings(sourceFile) {` |
| 598 | fn | templateCandidateText | (private) | `function templateCandidateText(current) {` |
| 606 | fn | legacyCandidateTexts | (private) | `function legacyCandidateTexts(sourceFile, node) {` |
| 610 | fn | binaryExpressionCandidateText | (private) | `function binaryExpressionCandidateText(current) {` |
| 622 | fn | pathSegmentCandidateText | (private) | `function pathSegmentCandidateText(current) {` |
| 643 | fn | maybeAddCallPathCandidate | (private) | `function maybeAddCallPathCandidate(current) {` |
| 654 | fn | visit | (private) | `function visit(current) {` |
| 671 | fn | collectDatabaseFirstLegacyStoreViolations | pub | `export function collectDatabaseFirstLegacyStore...` |
| 713 | fn | addViolation | (private) | `function addViolation(node, kind, fingerprintNo...` |
| 734 | fn | currentLegacyPathScope | (private) | `function currentLegacyPathScope() {` |
| 738 | fn | currentLiteralTextScope | (private) | `function currentLiteralTextScope() {` |
| 742 | fn | currentKnownUndefinedScope | (private) | `function currentKnownUndefinedScope() {` |
| 746 | fn | currentFsWriteAliasScope | (private) | `function currentFsWriteAliasScope() {` |
| 750 | fn | currentFsModuleBindingScope | (private) | `function currentFsModuleBindingScope() {` |
| 754 | fn | currentFsModulePropertyScope | (private) | `function currentFsModulePropertyScope() {` |
| 758 | fn | currentRequireShadowScope | (private) | `function currentRequireShadowScope() {` |
| 762 | fn | currentRequireAliasScope | (private) | `function currentRequireAliasScope() {` |
| 766 | fn | resolveRequireAlias | (private) | `function resolveRequireAlias(name) {` |
| 776 | fn | isNodeRequireName | (private) | `function isNodeRequireName(name) {` |
| 780 | fn | isCreateRequireShadowed | (private) | `function isCreateRequireShadowed(name) {` |
| 784 | fn | isCreateRequireExpression | (private) | `function isCreateRequireExpression(expression) {` |
| 794 | fn | isRequireAliasExpression | (private) | `function isRequireAliasExpression(expression) {` |
| 802 | fn | resolveFsModuleBinding | (private) | `function resolveFsModuleBinding(name) {` |
| 812 | fn | resolveFsModuleProperty | (private) | `function resolveFsModuleProperty(pathParts) {` |
| 829 | fn | visibleFsModuleBindings | (private) | `function visibleFsModuleBindings() {` |
| 839 | fn | visibleFsModuleProperties | (private) | `function visibleFsModuleProperties() {` |
| 849 | fn | resolveFsWriteAlias | (private) | `function resolveFsWriteAlias(name) {` |
| 859 | fn | resolveFsSafeStoreFactoryAlias | (private) | `function resolveFsSafeStoreFactoryAlias(name) {` |
| 869 | fn | resolveFsSafeStore | (private) | `function resolveFsSafeStore(name) {` |
| 874 | fn | lookupFsSafeStore | (private) | `function lookupFsSafeStore(name) {` |
| 884 | fn | resolveFsSafeJsonStore | (private) | `function resolveFsSafeJsonStore(name) {` |
| 889 | fn | lookupFsSafeJsonStore | (private) | `function lookupFsSafeJsonStore(name) {` |
| 899 | fn | visibleFsWriteAliases | (private) | `function visibleFsWriteAliases() {` |
| 909 | fn | visibleRequireAliasSnapshot | (private) | `function visibleRequireAliasSnapshot(maxScopeIn...` |
| 925 | fn | visibleCreateRequireShadows | (private) | `function visibleCreateRequireShadows() {` |
| 935 | fn | fsModuleBindingWriteScope | (private) | `function fsModuleBindingWriteScope(name) {` |
| 945 | fn | fsWriteAliasWriteScope | (private) | `function fsWriteAliasWriteScope(name) {` |
| 955 | fn | fsSafeStoreWriteScope | (private) | `function fsSafeStoreWriteScope(name) {` |
| 965 | fn | fsSafeStoreFactoryAliasWriteScope | (private) | `function fsSafeStoreFactoryAliasWriteScope(name) {` |
| 975 | fn | fsSafeJsonStoreWriteScope | (private) | `function fsSafeJsonStoreWriteScope(name) {` |
| 985 | fn | currentLegacyObjectPropertyScope | (private) | `function currentLegacyObjectPropertyScope() {` |
| 989 | fn | currentLegacyKnownObjectLiteralScope | (private) | `function currentLegacyKnownObjectLiteralScope() {` |
| 993 | fn | lookupKnownLegacyObjectLiteral | (private) | `function lookupKnownLegacyObjectLiteral(name) {` |
| 1006 | fn | isKnownLegacyObjectLiteralExpression | (private) | `function isKnownLegacyObjectLiteralExpression(e...` |
| 1014 | fn | markKnownLegacyObjectLiteral | (private) | `function markKnownLegacyObjectLiteral(` |
| 1022 | fn | currentFsSafeStoreFactoryAliasScope | (private) | `function currentFsSafeStoreFactoryAliasScope() {` |
| 1026 | fn | currentFsSafeStoreScope | (private) | `function currentFsSafeStoreScope() {` |
| 1030 | fn | currentFsSafeJsonStoreScope | (private) | `function currentFsSafeJsonStoreScope() {` |
| 1034 | fn | currentWrapperFunctionScope | (private) | `function currentWrapperFunctionScope() {` |
| 1038 | fn | currentConditionalExecutionScope | (private) | `function currentConditionalExecutionScope() {` |
| 1042 | fn | currentBranchEffectScope | (private) | `function currentBranchEffectScope() {` |
| 1046 | fn | createBranchEffects | (private) | `function createBranchEffects() {` |
| 1056 | fn | objectPropertyKey | (private) | `function objectPropertyKey(objectName, property...` |
| 1060 | fn | resolveLegacyPathIdentifier | (private) | `function resolveLegacyPathIdentifier(name) {` |
| 1070 | fn | resolveLiteralTextIdentifier | (private) | `function resolveLiteralTextIdentifier(name) {` |
| 1080 | fn | literalTextWriteScope | (private) | `function literalTextWriteScope(name) {` |
| 1090 | fn | resolveKnownUndefinedIdentifier | (private) | `function resolveKnownUndefinedIdentifier(name) {` |
| 1100 | fn | knownUndefinedWriteScope | (private) | `function knownUndefinedWriteScope(name) {` |
| 1110 | fn | requireAliasWriteTarget | (private) | `function requireAliasWriteTarget(name) {` |
| 1120 | fn | expressionLiteralCandidateTexts | (private) | `function expressionLiteralCandidateTexts(node) {` |
| 1124 | fn | combineSegmentOptions | (private) | `function combineSegmentOptions(left, right) {` |
| 1131 | fn | expressionSegmentOptions | (private) | `function expressionSegmentOptions(current) {` |
| 1160 | fn | maybeAddCallLiteralCandidate | (private) | `function maybeAddCallLiteralCandidate(current) {` |
| 1182 | fn | visitCandidate | (private) | `function visitCandidate(current) {` |
| 1216 | fn | expressionTextContainsLegacyStore | (private) | `function expressionTextContainsLegacyStore(node) {` |
| 1222 | fn | literalTextsFromExpression | (private) | `function literalTextsFromExpression(expression) {` |
| 1230 | fn | arrayLiteralElementAt | (private) | `function arrayLiteralElementAt(expression, inde...` |
| 1239 | fn | legacyObjectPropertyRewriteValues | (private) | `function legacyObjectPropertyRewriteValues(obje...` |
| 1253 | fn | lookupLegacyObjectProperty | (private) | `function lookupLegacyObjectProperty(` |
| 1268 | fn | lookupLegacyObjectPropertyEntry | (private) | `function lookupLegacyObjectPropertyEntry(` |
| 1294 | fn | lookupScopedLegacyObjectPropertyEntry | (private) | `function lookupScopedLegacyObjectPropertyEntry(` |
| 1313 | fn | legacyObjectPropertyValueFromExpression | (private) | `function legacyObjectPropertyValueFromExpressio...` |
| 1319 | fn | elementAccessName | (private) | `function elementAccessName(expression) {` |
| 1324 | fn | propertyAccessPath | (private) | `function propertyAccessPath(expression) {` |
| 1344 | fn | namedObjectPropertyAccess | (private) | `function namedObjectPropertyAccess(expression) {` |
| 1363 | fn | legacyObjectPropertyWriteTarget | (private) | `function legacyObjectPropertyWriteTarget(object...` |
| 1377 | fn | legacyIdentifierWriteScopes | (private) | `function legacyIdentifierWriteScopes(name) {` |
| 1396 | fn | isConditionallyExecutedScope | (private) | `function isConditionallyExecutedScope(node) {` |
| 1410 | fn | expressionContainsLegacyStore | (private) | `function expressionContainsLegacyStore(node) {` |
| 1415 | fn | visitExpression | (private) | `function visitExpression(current) {` |
| 1440 | fn | visitWithChildScope | (private) | `function visitWithChildScope(node) {` |
| 1481 | fn | registerFsBindingParameter | (private) | `function registerFsBindingParameter(name) {` |
| 1508 | fn | registerFsPromisesBindingParameter | (private) | `function registerFsPromisesBindingParameter(nam...` |
| 1527 | fn | visitFunctionLike | (private) | `function visitFunctionLike(node, fsBindingParam...` |
| 1583 | fn | dynamicFsImportThenCallback | (private) | `function dynamicFsImportThenCallback(node) {` |
| 1596 | fn | isFsModuleExpression | (private) | `function isFsModuleExpression(expression) {` |
| 1623 | fn | legacyFsWriteName | (private) | `function legacyFsWriteName(expression, aliases ...` |
| 1656 | fn | fsSafeStoreFactoryAliasName | (private) | `function fsSafeStoreFactoryAliasName(expression) {` |
| 1665 | fn | isFsSafeStoreFactoryCall | (private) | `function isFsSafeStoreFactoryCall(expression) {` |
| 1687 | fn | isFsSafeStoreExpression | (private) | `function isFsSafeStoreExpression(expression) {` |
| 1702 | fn | objectFilePathContainsLegacyStore | (private) | `function objectFilePathContainsLegacyStore(expr...` |
| 1713 | fn | expressionContainsFsSafeJsonStoreLegacyPath | (private) | `function expressionContainsFsSafeJsonStoreLegac...` |
| 1745 | fn | fsSafeJsonStoreWriteContainsLegacyStore | (private) | `function fsSafeJsonStoreWriteContainsLegacyStor...` |
| 1759 | fn | fsSafeStoreWritePathArguments | (private) | `function fsSafeStoreWritePathArguments(call) {` |
| 1779 | fn | markFsWriteAliasShadows | (private) | `function markFsWriteAliasShadows(name) {` |
| 1788 | fn | markFsSafeStoreShadows | (private) | `function markFsSafeStoreShadows(name) {` |
| 1825 | fn | markFsModuleBindingShadows | (private) | `function markFsModuleBindingShadows(name) {` |
| 1833 | fn | markFsModulePropertyShadows | (private) | `function markFsModulePropertyShadows(name) {` |
| 1839 | fn | markRequireShadows | (private) | `function markRequireShadows(name) {` |
| 1845 | fn | markCreateRequireShadows | (private) | `function markCreateRequireShadows(name) {` |
| 1853 | fn | isFsModuleTypeNode | (private) | `function isFsModuleTypeNode(type) {` |
| 1862 | fn | fsModulePropertyPathsFromType | (private) | `function fsModulePropertyPathsFromType(type) {` |
| 1885 | fn | registerFsModuleTypeProperties | (private) | `function registerFsModuleTypeProperties(name, t...` |
| 1897 | fn | collectFsWriteAliasesFromBinding | (private) | `function collectFsWriteAliasesFromBinding(node) {` |
| 1901 | fn | clearFsWriteObjectAliases | (private) | `function clearFsWriteObjectAliases(scope, objec...` |
| 1910 | fn | shadowVisibleFsWriteObjectAliases | (private) | `function shadowVisibleFsWriteObjectAliases(obje...` |
| 1922 | fn | setFsWriteObjectAlias | (private) | `function setFsWriteObjectAlias(scope, name, wri...` |
| 1930 | fn | registerFsWriteObjectAliases | (private) | `function registerFsWriteObjectAliases(` |
| 1964 | fn | clearFsSafeStoreObjectAliases | (private) | `function clearFsSafeStoreObjectAliases(storeSco...` |
| 1978 | fn | shadowVisibleFsSafeStoreObjectAliases | (private) | `function shadowVisibleFsSafeStoreObjectAliases(...` |
| 1998 | fn | setFsSafeStoreObjectAlias | (private) | `function setFsSafeStoreObjectAlias(` |
| 2018 | fn | copyFsSafeStoreObjectAliases | (private) | `function copyFsSafeStoreObjectAliases(` |
| 2047 | fn | registerFsSafeStoreObjectAliases | (private) | `function registerFsSafeStoreObjectAliases(` |
| 2115 | fn | setFsModuleObjectProperty | (private) | `function setFsModuleObjectProperty(scope, name,...` |
| 2123 | fn | clearFsModuleObjectProperties | (private) | `function clearFsModuleObjectProperties(scope, o...` |
| 2133 | fn | registerFsModuleObjectProperties | (private) | `function registerFsModuleObjectProperties(` |
| 2167 | fn | collectFsModuleBindingsFromBinding | (private) | `function collectFsModuleBindingsFromBinding(nod...` |
| 2190 | fn | isFsBindingExpression | (private) | `function isFsBindingExpression(expression) {` |
| 2211 | fn | collectFsWriteAliasesFromBindingInto | (private) | `function collectFsWriteAliasesFromBindingInto(` |
| 2229 | fn | collectFsWriteAliasesFromPattern | (private) | `function collectFsWriteAliasesFromPattern(patte...` |
| 2250 | fn | markArrayBindingPatternFromForOf | (private) | `function markArrayBindingPatternFromForOf(initi...` |
| 2289 | fn | pathArgumentsForFsWrite | (private) | `function pathArgumentsForFsWrite(name, args) {` |
| 2335 | fn | openFlagsMayWrite | (private) | `function openFlagsMayWrite(flags) {` |
| 2346 | fn | fsWriteCallMayWrite | (private) | `function fsWriteCallMayWrite(name, args) {` |
| 2353 | fn | propertyNameText | (private) | `function propertyNameText(name) {` |
| 2366 | fn | isVarVariableDeclaration | (private) | `function isVarVariableDeclaration(node) {` |
| 2373 | fn | isAmbientVariableDeclaration | (private) | `function isAmbientVariableDeclaration(node) {` |
| 2385 | fn | isTypeSyntaxNode | (private) | `function isTypeSyntaxNode(node) {` |
| 2389 | fn | objectLiteralPropertyLegacyValue | (private) | `function objectLiteralPropertyLegacyValue(objec...` |
| 2420 | fn | objectLiteralPropertyInitializerState | (private) | `function objectLiteralPropertyInitializerState(` |
| 2465 | fn | objectLiteralPropertyInitializer | (private) | `function objectLiteralPropertyInitializer(objec...` |
| 2476 | fn | objectLiteralPropertyContainsLegacyStore | (private) | `function objectLiteralPropertyContainsLegacySto...` |
| 2480 | fn | clearLegacyObjectProperties | (private) | `function clearLegacyObjectProperties(scope, obj...` |
| 2489 | fn | clearKnownLegacyObjectLiterals | (private) | `function clearKnownLegacyObjectLiterals(scope, ...` |
| 2498 | fn | legacyObjectPropertiesFromAssignment | (private) | `function legacyObjectPropertiesFromAssignment(` |
| 2506 | fn | legacyKnownObjectLiteralsFromAssignment | (private) | `function legacyKnownObjectLiteralsFromAssignmen...` |
| 2512 | fn | branchIdentifierAssignmentKey | (private) | `function branchIdentifierAssignmentKey(index, n...` |
| 2516 | fn | branchPropertyAssignmentKey | (private) | `function branchPropertyAssignmentKey(index, obj...` |
| 2520 | fn | branchWrapperAssignmentKey | (private) | `function branchWrapperAssignmentKey(index, name) {` |
| 2524 | fn | recordBranchIdentifierAssignment | (private) | `function recordBranchIdentifierAssignment(` |
| 2555 | fn | recordBranchPropertyAssignment | (private) | `function recordBranchPropertyAssignment(` |
| 2584 | fn | recordBranchWrapperAssignment | (private) | `function recordBranchWrapperAssignment(index, n...` |
| 2596 | fn | recordBranchFsIdentifierAssignment | (private) | `function recordBranchFsIdentifierAssignment(` |
| 2622 | fn | recordBranchFsSafePropertyAssignment | (private) | `function recordBranchFsSafePropertyAssignment(` |
| 2645 | fn | recordBranchFsSafeObjectPropertyAssignment | (private) | `function recordBranchFsSafeObjectPropertyAssign...` |
| 2689 | fn | mergeWrapperAssignmentValues | (private) | `function mergeWrapperAssignmentValues(left, rig...` |
| 2700 | fn | mergeExhaustiveBranchEffects | (private) | `function mergeExhaustiveBranchEffects(thenEffec...` |
| 2883 | fn | markLegacyObjectProperties | (private) | `function markLegacyObjectProperties(` |
| 2976 | fn | copyLegacyObjectProperties | (private) | `function copyLegacyObjectProperties(` |
| 3002 | fn | copyKnownLegacyObjectLiterals | (private) | `function copyKnownLegacyObjectLiterals(` |
| 3029 | fn | copyScopedLegacyObjectProperties | (private) | `function copyScopedLegacyObjectProperties(targe...` |
| 3044 | fn | copyScopedKnownLegacyObjectLiterals | (private) | `function copyScopedKnownLegacyObjectLiterals(ta...` |
| 3060 | fn | collectPathPropertyUses | (private) | `function collectPathPropertyUses(` |
| 3068 | fn | appendUses | (private) | `function appendUses(uses, value) {` |
| 3079 | fn | isPathLikeWrapperPropertyName | (private) | `function isPathLikeWrapperPropertyName(property...` |
| 3091 | fn | visitExpression | (private) | `function visitExpression(current) {` |
| 3149 | fn | usesFilePathOptionsObject | (private) | `function usesFilePathOptionsObject(name) {` |
| 3158 | fn | parameterPropertyBindings | (private) | `function parameterPropertyBindings(parameter, i...` |
| 3165 | fn | bindingPatternNames | (private) | `function bindingPatternNames(name) {` |
| 3167 | fn | visitName | (private) | `function visitName(current) {` |
| 3184 | fn | isParameterPropertyDestructure | (private) | `function isParameterPropertyDestructure(node, p...` |
| 3193 | fn | objectBindingParameterProperties | (private) | `function objectBindingParameterProperties(bindi...` |
| 3222 | fn | markLegacyPathsFromObjectBinding | (private) | `function markLegacyPathsFromObjectBinding(bindi...` |
| 3276 | fn | markLegacyPathsFromInlineObjectBinding | (private) | `function markLegacyPathsFromInlineObjectBinding...` |
| 3281 | fn | visitBinding | (private) | `function visitBinding(currentBindingPattern, cu...` |
| 3337 | fn | markFsSafeStoresFromObjectBinding | (private) | `function markFsSafeStoresFromObjectBinding(bind...` |
| 3372 | fn | markFsSafeFactoryAliasesFromObjectBinding | (private) | `function markFsSafeFactoryAliasesFromObjectBind...` |
| 3389 | fn | collectLegacyPathPropertyParameters | (private) | `function collectLegacyPathPropertyParameters(` |
| 3428 | fn | currentBodyFsWriteAliasScope | (private) | `function currentBodyFsWriteAliasScope() {` |
| 3432 | fn | visibleBodyFsWriteAliases | (private) | `function visibleBodyFsWriteAliases() {` |
| 3442 | fn | currentBodyFsModuleBindingScope | (private) | `function currentBodyFsModuleBindingScope() {` |
| 3446 | fn | visibleBodyFsModuleBindings | (private) | `function visibleBodyFsModuleBindings() {` |
| 3456 | fn | currentBodyFsModulePropertyScope | (private) | `function currentBodyFsModulePropertyScope() {` |
| 3460 | fn | visibleBodyFsModuleProperties | (private) | `function visibleBodyFsModuleProperties() {` |
| 3470 | fn | currentBodyRequireAliasScope | (private) | `function currentBodyRequireAliasScope() {` |
| 3474 | fn | visibleBodyRequireAliasSnapshot | (private) | `function visibleBodyRequireAliasSnapshot() {` |
| 3486 | fn | currentDestructuredParameterPropertyScope | (private) | `function currentDestructuredParameterPropertySc...` |
| 3490 | fn | currentDestructuredParameterPropertyMergeScope | (private) | `function currentDestructuredParameterPropertyMe...` |
| 3496 | fn | currentParameterObjectBindingScope | (private) | `function currentParameterObjectBindingScope() {` |
| 3500 | fn | currentParameterPropertyUseScope | (private) | `function currentParameterPropertyUseScope() {` |
| 3504 | fn | currentConditionalDestructuredParameterPropertyScope | (private) | `function currentConditionalDestructuredParamete...` |
| 3510 | fn | currentConditionalParameterObjectScope | (private) | `function currentConditionalParameterObjectScope...` |
| 3514 | fn | currentConditionalParameterPropertyUseScope | (private) | `function currentConditionalParameterPropertyUse...` |
| 3520 | fn | currentConditionalWrapperBodyScope | (private) | `function currentConditionalWrapperBodyScope() {` |
| 3524 | fn | currentShadowScope | (private) | `function currentShadowScope() {` |
| 3528 | fn | currentFsAliasShadowScope | (private) | `function currentFsAliasShadowScope() {` |
| 3532 | fn | currentFsModuleShadowScope | (private) | `function currentFsModuleShadowScope() {` |
| 3536 | fn | currentWrapperCreateRequireShadowScope | (private) | `function currentWrapperCreateRequireShadowScope...` |
| 3540 | fn | visibleWrapperCreateRequireShadows | (private) | `function visibleWrapperCreateRequireShadows() {` |
| 3550 | fn | currentNestedWrapperFunctionScope | (private) | `function currentNestedWrapperFunctionScope() {` |
| 3554 | fn | currentParameterObjectShadowScope | (private) | `function currentParameterObjectShadowScope() {` |
| 3558 | fn | currentParameterObjectAssignmentShadowScope | (private) | `function currentParameterObjectAssignmentShadow...` |
| 3564 | fn | currentWrapperBranchEffectScope | (private) | `function currentWrapperBranchEffectScope() {` |
| 3568 | fn | createWrapperBranchEffects | (private) | `function createWrapperBranchEffects() {` |
| 3579 | fn | bindingUses | (private) | `function bindingUses(binding) {` |
| 3583 | fn | recordWrapperBranchParameterObjectAssignment | (private) | `function recordWrapperBranchParameterObjectAssi...` |
| 3590 | fn | recordWrapperBranchParameterPropertyAssignment | (private) | `function recordWrapperBranchParameterPropertyAs...` |
| 3597 | fn | recordWrapperBranchDestructuredAssignment | (private) | `function recordWrapperBranchDestructuredAssignm...` |
| 3604 | fn | recordWrapperBranchNestedWrapperAssignment | (private) | `function recordWrapperBranchNestedWrapperAssign...` |
| 3613 | fn | recordWrapperBranchFsIdentifierAssignment | (private) | `function recordWrapperBranchFsIdentifierAssignm...` |
| 3636 | fn | clearBranchNestedWrapperObjectAssignments | (private) | `function clearBranchNestedWrapperObjectAssignme...` |
| 3646 | fn | wrapperAssignmentMergeOrder | (private) | `function wrapperAssignmentMergeOrder(left, righ...` |
| 3650 | fn | mergeBindingUses | (private) | `function mergeBindingUses(left, right) {` |
| 3654 | fn | applyMergedParameterPropertyAssignment | (private) | `function applyMergedParameterPropertyAssignment...` |
| 3666 | fn | applyMergedDestructuredAssignment | (private) | `function applyMergedDestructuredAssignment(name...` |
| 3679 | fn | applyMergedParameterObjectAssignment | (private) | `function applyMergedParameterObjectAssignment(n...` |
| 3695 | fn | applyMergedNestedWrapperAssignment | (private) | `function applyMergedNestedWrapperAssignment(nam...` |
| 3709 | fn | applyMergedFsIdentifierAssignment | (private) | `function applyMergedFsIdentifierAssignment(then...` |
| 3752 | fn | mergeExhaustiveWrapperBranchEffects | (private) | `function mergeExhaustiveWrapperBranchEffects(th...` |
| 3808 | fn | resolveParameterIndex | (private) | `function resolveParameterIndex(name) {` |
| 3820 | fn | resolveDestructuredParameterProperty | (private) | `function resolveDestructuredParameterProperty(n...` |
| 3832 | fn | appendConditionalUse | (private) | `function appendConditionalUse(scope, key, value) {` |
| 3838 | fn | conditionalUsesFor | (private) | `function conditionalUsesFor(key, scopes) {` |
| 3846 | fn | conditionalObjectPropertyUses | (private) | `function conditionalObjectPropertyUses(objectNa...` |
| 3856 | fn | resolveParameterPropertyUse | (private) | `function resolveParameterPropertyUse(objectName...` |
| 3887 | fn | resolveDestructuredParameterPropertyUses | (private) | `function resolveDestructuredParameterPropertyUs...` |
| 3896 | fn | resolveParameterPropertyBinding | (private) | `function resolveParameterPropertyBinding(expres...` |
| 3914 | fn | resolveParameterObjectBindingExpression | (private) | `function resolveParameterObjectBindingExpressio...` |
| 3919 | fn | collectForwardedWrapperPropertyUses | (private) | `function collectForwardedWrapperPropertyUses(` |
| 3938 | fn | collectWrapperBindingDefaultUses | (private) | `function collectWrapperBindingDefaultUses(sourc...` |
| 3968 | fn | collectForwardedWrapperPropertyUseState | (private) | `function collectForwardedWrapperPropertyUseStat...` |
| 4084 | fn | markParameterAssignment | (private) | `function markParameterAssignment(assignmentNode) {` |
| 4154 | fn | mergeConditionalUses | (private) | `function mergeConditionalUses(source, target) {` |
| 4162 | fn | mergeMapEntries | (private) | `function mergeMapEntries(source, target) {` |
| 4168 | fn | mergeParameterObjectBindings | (private) | `function mergeParameterObjectBindings(source, t...` |
| 4176 | fn | pushWrapperBodyScope | (private) | `function pushWrapperBodyScope(` |
| 4208 | fn | popWrapperBodyScope | (private) | `function popWrapperBodyScope() {` |
| 4251 | fn | resolveBodyFsWriteAlias | (private) | `function resolveBodyFsWriteAlias(name) {` |
| 4261 | fn | resolveBodyFsModuleBinding | (private) | `function resolveBodyFsModuleBinding(name) {` |
| 4271 | fn | resolveBodyFsModuleProperty | (private) | `function resolveBodyFsModuleProperty(pathParts) {` |
| 4288 | fn | isFsModuleShadowed | (private) | `function isFsModuleShadowed(name) {` |
| 4297 | fn | isWrapperRequireName | (private) | `function isWrapperRequireName(name) {` |
| 4301 | fn | markWrapperRequireShadows | (private) | `function markWrapperRequireShadows(name) {` |
| 4314 | fn | isWrapperCreateRequireShadowed | (private) | `function isWrapperCreateRequireShadowed(name) {` |
| 4318 | fn | isWrapperCreateRequireExpression | (private) | `function isWrapperCreateRequireExpression(expre...` |
| 4328 | fn | isWrapperRequireAliasExpression | (private) | `function isWrapperRequireAliasExpression(expres...` |
| 4336 | fn | markWrapperCreateRequireShadows | (private) | `function markWrapperCreateRequireShadows(name) {` |
| 4344 | fn | resolveBodyRequireAlias | (private) | `function resolveBodyRequireAlias(name) {` |
| 4354 | fn | bodyFsWriteAliasWriteScope | (private) | `function bodyFsWriteAliasWriteScope(name) {` |
| 4364 | fn | bodyFsModuleBindingWriteScope | (private) | `function bodyFsModuleBindingWriteScope(name) {` |
| 4374 | fn | bodyRequireAliasWriteScope | (private) | `function bodyRequireAliasWriteScope(name) {` |
| 4384 | fn | shadowVisibleBodyFsWriteObjectAliases | (private) | `function shadowVisibleBodyFsWriteObjectAliases(...` |
| 4396 | fn | clearBodyFsWriteObjectAliases | (private) | `function clearBodyFsWriteObjectAliases(scope, o...` |
| 4405 | fn | setBodyFsWriteObjectAlias | (private) | `function setBodyFsWriteObjectAlias(scope, name,...` |
| 4409 | fn | registerBodyFsWriteObjectAliases | (private) | `function registerBodyFsWriteObjectAliases(` |
| 4440 | fn | isWrapperFsBindingExpression | (private) | `function isWrapperFsBindingExpression(expressio...` |
| 4464 | fn | isFsAliasShadowed | (private) | `function isFsAliasShadowed(name) {` |
| 4473 | fn | isWrapperFsModuleExpression | (private) | `function isWrapperFsModuleExpression(expression) {` |
| 4501 | fn | legacyWrapperFsWriteName | (private) | `function legacyWrapperFsWriteName(expression) {` |
| 4539 | fn | markFsAliasShadows | (private) | `function markFsAliasShadows(name) {` |
| 4547 | fn | markFsModuleShadows | (private) | `function markFsModuleShadows(name) {` |
| 4557 | fn | registerBodyFsModuleTypeProperties | (private) | `function registerBodyFsModuleTypeProperties(nam...` |
| 4588 | fn | nestedWrapperRecordForNode | (private) | `function nestedWrapperRecordForNode(nestedNode) {` |
| 4603 | fn | resolveNestedWrapperFunction | (private) | `function resolveNestedWrapperFunction(name) {` |
| 4613 | fn | isNestedWrapperScopeDescendant | (private) | `function isNestedWrapperScopeDescendant(scope, ...` |
| 4624 | fn | refreshCurrentNestedWrapperFunctionAliases | (private) | `function refreshCurrentNestedWrapperFunctionAli...` |
| 4631 | fn | refreshNestedWrapperRecord | (private) | `function refreshNestedWrapperRecord(record) {` |
| 4660 | fn | refreshNestedWrapperRecords | (private) | `function refreshNestedWrapperRecords(values) {` |
| 4676 | fn | nestedWrapperFunctionWriteScope | (private) | `function nestedWrapperFunctionWriteScope(name) {` |
| 4686 | fn | nestedWrapperObjectMethodWriteScope | (private) | `function nestedWrapperObjectMethodWriteScope(ob...` |
| 4697 | fn | markNestedWrapperFunctionShadows | (private) | `function markNestedWrapperFunctionShadows(name) {` |
| 4703 | fn | clearNestedWrapperObjectMethods | (private) | `function clearNestedWrapperObjectMethods(scope,...` |
| 4712 | fn | shadowVisibleNestedWrapperObjectMethods | (private) | `function shadowVisibleNestedWrapperObjectMethod...` |
| 4724 | fn | markNestedWrapperObjectUnknown | (private) | `function markNestedWrapperObjectUnknown(` |
| 4741 | fn | copyNestedWrapperObjectMethods | (private) | `function copyNestedWrapperObjectMethods(` |
| 4771 | fn | isKnownNestedWrapperObjectSource | (private) | `function isKnownNestedWrapperObjectSource(sourc...` |
| 4776 | fn | resolveNestedWrapperValue | (private) | `function resolveNestedWrapperValue(name) {` |
| 4781 | fn | resolveNestedWrapperBindingValue | (private) | `function resolveNestedWrapperBindingValue(name) {` |
| 4797 | fn | resolveNestedWrapperExpression | (private) | `function resolveNestedWrapperExpression(express...` |
| 4806 | fn | registerNestedWrapperObjectMethods | (private) | `function registerNestedWrapperObjectMethods(` |
| 5050 | fn | registerNestedWrapperObjectBinding | (private) | `function registerNestedWrapperObjectBinding(` |
| 5085 | fn | nestedWrapperObjectBindingMissingValue | (private) | `function nestedWrapperObjectBindingMissingValue...` |
| 5098 | fn | nestedWrapperObjectBindingDefaultValue | (private) | `function nestedWrapperObjectBindingDefaultValue...` |
| 5106 | fn | nestedWrapperValueFromExpression | (private) | `function nestedWrapperValueFromExpression(expre...` |
| 5114 | fn | nestedWrapperObjectLiteralSpreadPropertyState | (private) | `function nestedWrapperObjectLiteralSpreadProper...` |
| 5131 | fn | nestedWrapperValueFromObjectLiteralPropertyState | (private) | `function nestedWrapperValueFromObjectLiteralPro...` |
| 5144 | fn | registerNestedWrapperObjectLiteralBinding | (private) | `function registerNestedWrapperObjectLiteralBind...` |
| 5182 | fn | registerNestedWrapperObjectBindingInitializer | (private) | `function registerNestedWrapperObjectBindingInit...` |
| 5207 | fn | resolveRecordFsModuleProperty | (private) | `function resolveRecordFsModuleProperty(record, ...` |
| 5221 | fn | collectClosedOverPathPropertyUses | (private) | `function collectClosedOverPathPropertyUses(` |
| 5239 | fn | currentLocalBindingScope | (private) | `function currentLocalBindingScope() {` |
| 5243 | fn | currentLocalFsWriteAliasScope | (private) | `function currentLocalFsWriteAliasScope() {` |
| 5247 | fn | currentLocalFsModuleBindingScope | (private) | `function currentLocalFsModuleBindingScope() {` |
| 5251 | fn | currentLocalRequireAliasScope | (private) | `function currentLocalRequireAliasScope() {` |
| 5255 | fn | currentLocalNestedFunctionScope | (private) | `function currentLocalNestedFunctionScope() {` |
| 5259 | fn | pushLocalClosedOverScope | (private) | `function pushLocalClosedOverScope() {` |
| 5272 | fn | popLocalClosedOverScope | (private) | `function popLocalClosedOverScope() {` |
| 5280 | fn | currentLocalNestedBranchEffectScope | (private) | `function currentLocalNestedBranchEffectScope() {` |
| 5284 | fn | createLocalNestedBranchEffects | (private) | `function createLocalNestedBranchEffects() {` |
| 5292 | fn | recordLocalNestedBranchFsIdentifierAssignment | (private) | `function recordLocalNestedBranchFsIdentifierAss...` |
| 5316 | fn | recordLocalNestedBranchAssignment | (private) | `function recordLocalNestedBranchAssignment(name...` |
| 5326 | fn | clearLocalNestedBranchObjectAssignments | (private) | `function clearLocalNestedBranchObjectAssignment...` |
| 5336 | fn | applyMergedLocalNestedBranchAssignment | (private) | `function applyMergedLocalNestedBranchAssignment...` |
| 5342 | fn | applyMergedLocalNestedFsIdentifierAssignment | (private) | `function applyMergedLocalNestedFsIdentifierAssi...` |
| 5363 | fn | mergeExhaustiveLocalNestedBranchEffects | (private) | `function mergeExhaustiveLocalNestedBranchEffect...` |
| 5410 | fn | mergeOptionalLocalNestedBranchEffects | (private) | `function mergeOptionalLocalNestedBranchEffects(...` |
| 5432 | fn | localBindingWriteScope | (private) | `function localBindingWriteScope(name, scopes) {` |
| 5441 | fn | localNestedObjectMethodWriteScope | (private) | `function localNestedObjectMethodWriteScope(obje...` |
| 5455 | fn | visibleLocalFsWriteAliases | (private) | `function visibleLocalFsWriteAliases() {` |
| 5465 | fn | visibleLocalFsModuleBindings | (private) | `function visibleLocalFsModuleBindings() {` |
| 5475 | fn | visibleLocalRequireAliases | (private) | `function visibleLocalRequireAliases() {` |
| 5485 | fn | registerLocalNestedFunction | (private) | `function registerLocalNestedFunction(` |
| 5493 | fn | localNestedRecordForNode | (private) | `function localNestedRecordForNode(` |
| 5512 | fn | registerLocalNestedFunctionRecord | (private) | `function registerLocalNestedFunctionRecord(` |
| 5520 | fn | clearLocalNestedObjectMethods | (private) | `function clearLocalNestedObjectMethods(objectNa...` |
| 5531 | fn | markLocalNestedObjectUnknown | (private) | `function markLocalNestedObjectUnknown(` |
| 5548 | fn | copyLocalNestedObjectMethods | (private) | `function copyLocalNestedObjectMethods(` |
| 5578 | fn | isKnownLocalNestedObjectSource | (private) | `function isKnownLocalNestedObjectSource(sourceN...` |
| 5583 | fn | registerLocalNestedObjectMethods | (private) | `function registerLocalNestedObjectMethods(` |
| 5794 | fn | registerLocalNestedObjectBinding | (private) | `function registerLocalNestedObjectBinding(` |
| 5841 | fn | localNestedObjectBindingMissingValue | (private) | `function localNestedObjectBindingMissingValue(` |
| 5860 | fn | resolveLocalNestedFunctionBindingValue | (private) | `function resolveLocalNestedFunctionBindingValue...` |
| 5874 | fn | localNestedObjectBindingDefaultValue | (private) | `function localNestedObjectBindingDefaultValue(` |
| 5886 | fn | localNestedValueFromExpression | (private) | `function localNestedValueFromExpression(` |
| 5898 | fn | localNestedObjectLiteralSpreadPropertyState | (private) | `function localNestedObjectLiteralSpreadProperty...` |
| 5915 | fn | localNestedValueFromObjectLiteralPropertyState | (private) | `function localNestedValueFromObjectLiteralPrope...` |
| 5933 | fn | registerLocalNestedObjectLiteralBinding | (private) | `function registerLocalNestedObjectLiteralBinding(` |
| 5982 | fn | refreshCurrentLocalNestedFunctionAliases | (private) | `function refreshCurrentLocalNestedFunctionAlias...` |
| 5987 | fn | isLocalNestedScopeDescendant | (private) | `function isLocalNestedScopeDescendant(scope, an...` |
| 5997 | fn | refreshLocalNestedFunctionRecord | (private) | `function refreshLocalNestedFunctionRecord(local...` |
| 6011 | fn | refreshLocalNestedFunctionRecords | (private) | `function refreshLocalNestedFunctionRecords(valu...` |
| 6029 | fn | registerLocalNestedObjectBindingInitializer | (private) | `function registerLocalNestedObjectBindingInitia...` |
| 6056 | fn | resolveLocalNestedFunction | (private) | `function resolveLocalNestedFunction(name) {` |
| 6061 | fn | resolveLocalNestedExpression | (private) | `function resolveLocalNestedExpression(expressio...` |
| 6075 | fn | assignLocalNestedFunction | (private) | `function assignLocalNestedFunction(` |
| 6100 | fn | registerHoistedLocalNestedFunctions | (private) | `function registerHoistedLocalNestedFunctions(st...` |
| 6112 | fn | localScopeStatements | (private) | `function localScopeStatements(current) {` |
| 6122 | fn | registerLocalDeclarationShadows | (private) | `function registerLocalDeclarationShadows(statem...` |
| 6133 | fn | localDeclarationScopes | (private) | `function localDeclarationScopes(declaration) {` |
| 6152 | fn | currentLocalDeclarationScopes | (private) | `function currentLocalDeclarationScopes() {` |
| 6162 | fn | markLocalBindings | (private) | `function markLocalBindings(name, scopes = curre...` |
| 6172 | fn | isLocalBinding | (private) | `function isLocalBinding(name) {` |
| 6176 | fn | resolveLocalFsWriteAlias | (private) | `function resolveLocalFsWriteAlias(name) {` |
| 6186 | fn | resolveLocalFsModuleBinding | (private) | `function resolveLocalFsModuleBinding(name) {` |
| 6196 | fn | resolveLocalRequireAlias | (private) | `function resolveLocalRequireAlias(name) {` |
| 6209 | fn | resolveClosedParameterIndex | (private) | `function resolveClosedParameterIndex(name) {` |
| 6213 | fn | resolveClosedDestructuredParameterProperty | (private) | `function resolveClosedDestructuredParameterProp...` |
| 6217 | fn | resolveClosedParameterPropertyUse | (private) | `function resolveClosedParameterPropertyUse(obje...` |
| 6223 | fn | resolveClosedDestructuredParameterPropertyUses | (private) | `function resolveClosedDestructuredParameterProp...` |
| 6227 | fn | appendClosedUse | (private) | `function appendClosedUse(use) {` |
| 6233 | fn | isClosedOverFsModuleExpression | (private) | `function isClosedOverFsModuleExpression(express...` |
| 6260 | fn | isClosedOverCreateRequireExpression | (private) | `function isClosedOverCreateRequireExpression(ex...` |
| 6273 | fn | isClosedOverRequireAliasExpression | (private) | `function isClosedOverRequireAliasExpression(exp...` |
| 6281 | fn | legacyClosedOverFsWriteName | (private) | `function legacyClosedOverFsWriteName(expression) {` |
| 6310 | fn | collectForwardedClosedOverPropertyUses | (private) | `function collectForwardedClosedOverPropertyUses(` |
| 6329 | fn | collectClosedOverBindingDefaultUses | (private) | `function collectClosedOverBindingDefaultUses(so...` |
| 6359 | fn | collectForwardedClosedOverPropertyUseState | (private) | `function collectForwardedClosedOverPropertyUseS...` |
| 6511 | fn | visitClosedOverNode | (private) | `function visitClosedOverNode(current) {` |
| 6959 | fn | registerHoistedWrapperFunctionShadows | (private) | `function registerHoistedWrapperFunctionShadows(...` |
| 6972 | fn | wrapperScopeStatements | (private) | `function wrapperScopeStatements(current) {` |
| 6982 | fn | visitBody | (private) | `function visitBody(current) {` |
| 7568 | fn | callArgumentOrParameterDefault | (private) | `function callArgumentOrParameterDefault(` |
| 7636 | fn | earlierParameterBindingForIdentifier | (private) | `function earlierParameterBindingForIdentifier(n...` |
| 7655 | fn | earlierParameterReferenceBindings | (private) | `function earlierParameterReferenceBindings(expr...` |
| 7657 | fn | addBinding | (private) | `function addBinding(binding) {` |
| 7660 | fn | visitReference | (private) | `function visitReference(current) {` |
| 7690 | fn | earlierParameterReferenceIndexes | (private) | `function earlierParameterReferenceIndexes(expre...` |
| 7698 | fn | expressionContainsIdentifier | (private) | `function expressionContainsIdentifier(expressio...` |
| 7700 | fn | visitIdentifier | (private) | `function visitIdentifier(current) {` |
| 7732 | fn | objectLiteralIdentifiersAreSpreadSourcesOnly | (private) | `function objectLiteralIdentifiersAreSpreadSourc...` |
| 7734 | fn | visitExpression | (private) | `function visitExpression(current) {` |
| 7759 | fn | resolveEarlierParameterDefaultExpression | (private) | `function resolveEarlierParameterDefaultExpression(` |
| 7798 | fn | propertyAccessExpressionForName | (private) | `function propertyAccessExpressionForName(expres...` |
| 7807 | fn | propertyPathExpression | (private) | `function propertyPathExpression(expression, pro...` |
| 7815 | fn | trackedPropertyPathExpression | (private) | `function trackedPropertyPathExpression(expressi...` |
| 7835 | fn | objectLiteralPropertyPathInitializer | (private) | `function objectLiteralPropertyPathInitializer(o...` |
| 7856 | fn | objectLiteralPropertyPathLegacyValue | (private) | `function objectLiteralPropertyPathLegacyValue(` |
| 7917 | fn | bindingElementForProperty | (private) | `function bindingElementForProperty(bindingPatte...` |
| 7931 | fn | bindingElementDefaultInitializerForPath | (private) | `function bindingElementDefaultInitializerForPat...` |
| 7945 | fn | propertyPathInitializerFromExpression | (private) | `function propertyPathInitializerFromExpression(...` |
| 7959 | fn | bindingElementAncestorDefaultInitializerForObjectLiteral | (private) | `function bindingElementAncestorDefaultInitializ...` |
| 8007 | fn | bindingElementAncestorDefaultInitializerForIdentifier | (private) | `function bindingElementAncestorDefaultInitializ...` |
| 8039 | fn | bindingElementAncestorDefaultInitializer | (private) | `function bindingElementAncestorDefaultInitializer(` |
| 8064 | fn | appliedBindingElementDefaultInitializer | (private) | `function appliedBindingElementDefaultInitializer(` |
| 8090 | fn | objectBindingPropertyDefaultAppliesForObjectLiteral | (private) | `function objectBindingPropertyDefaultAppliesFor...` |
| 8148 | fn | objectBindingPropertyDefaultAppliesForIdentifier | (private) | `function objectBindingPropertyDefaultAppliesFor...` |
| 8197 | fn | objectBindingPropertyDefaultApplies | (private) | `function objectBindingPropertyDefaultApplies(` |
| 8225 | fn | resolveEarlierParameterBindingExpression | (private) | `function resolveEarlierParameterBindingExpression(` |
| 8250 | fn | resolveBindingDefaultInitializerExpression | (private) | `function resolveBindingDefaultInitializerExpres...` |
| 8311 | fn | wrapperRecordForNode | (private) | `function wrapperRecordForNode(node) {` |
| 8325 | fn | registerWrapperFunction | (private) | `function registerWrapperFunction(name, node) {` |
| 8329 | fn | setWrapperFunctionValue | (private) | `function setWrapperFunctionValue(scope, name, v...` |
| 8341 | fn | clearWrapperObjectMethods | (private) | `function clearWrapperObjectMethods(scope, objec...` |
| 8350 | fn | clearWrapperObjectMethod | (private) | `function clearWrapperObjectMethod(scope, method...` |
| 8355 | fn | shadowVisibleWrapperObjectMethods | (private) | `function shadowVisibleWrapperObjectMethods(obje...` |
| 8367 | fn | copyWrapperObjectMethods | (private) | `function copyWrapperObjectMethods(` |
| 8400 | fn | registerWrapperObjectMethods | (private) | `function registerWrapperObjectMethods(` |
| 8511 | fn | wrapperRecords | (private) | `function wrapperRecords(value) {` |
| 8522 | fn | isNestedWrapperObjectMarker | (private) | `function isNestedWrapperObjectMarker(value) {` |
| 8528 | fn | cloneWrapperRecord | (private) | `function cloneWrapperRecord(record) {` |
| 8544 | fn | cloneWrapperFunctionValue | (private) | `function cloneWrapperFunctionValue(value) {` |
| 8561 | fn | refreshCurrentWrapperFunctionAliases | (private) | `function refreshCurrentWrapperFunctionAliases() {` |
| 8583 | fn | refreshWrapperRequireAliasesAtScope | (private) | `function refreshWrapperRequireAliasesAtScope(sc...` |
| 8612 | fn | refreshWrapperRequireAliasesFromScope | (private) | `function refreshWrapperRequireAliasesFromScope(...` |
| 8618 | fn | registerHoistedWrapperFunctions | (private) | `function registerHoistedWrapperFunctions(statem...` |
| 8629 | fn | resolveWrapperFunction | (private) | `function resolveWrapperFunction(name) {` |
| 8642 | fn | resolveWrapperExpression | (private) | `function resolveWrapperExpression(expression) {` |
| 8651 | fn | pathArgumentContainsLegacyStore | (private) | `function pathArgumentContainsLegacyStore(argume...` |
| 8655 | fn | isUndefinedExpression | (private) | `function isUndefinedExpression(expression) {` |
| 8663 | fn | isKnownUndefinedExpression | (private) | `function isKnownUndefinedExpression(expression) {` |
| 8671 | fn | callExpressionName | (private) | `function callExpressionName(expression) {` |
| 8677 | fn | objectArgumentPropertyContainsLegacyStore | (private) | `function objectArgumentPropertyContainsLegacySt...` |
| 8689 | fn | objectExpressionPropertyLegacyValue | (private) | `function objectExpressionPropertyLegacyValue(` |
| 8705 | fn | objectExpressionPropertyPathMayUseBindingDefault | (private) | `function objectExpressionPropertyPathMayUseBind...` |
| 8727 | fn | objectExpressionPropertyPathContainsLegacyStore | (private) | `function objectExpressionPropertyPathContainsLe...` |
| 8794 | fn | parameterDefaultContainsLegacyStore | (private) | `function parameterDefaultContainsLegacyStore(` |
| 8811 | fn | defaultPathExpressionContainsLegacyStore | (private) | `function defaultPathExpressionContainsLegacyStore(` |
| 8998 | fn | rootedPropertyAccessPath | (private) | `function rootedPropertyAccessPath(expression) {` |
| 9021 | fn | wrapperObjectBindingDefaultContainsLegacyStore | (private) | `function wrapperObjectBindingDefaultContainsLeg...` |
| 9051 | fn | wrapperPathUseContainsLegacyStore | (private) | `function wrapperPathUseContainsLegacyStore(reco...` |
| 9112 | fn | visitInConditionalExecution | (private) | `function visitInConditionalExecution(node, bran...` |
| 9150 | fn | visit | (private) | `function visit(node) {` |
| 9850 | fn | main | pub | `export async function main() {` |

## Public API

### `collectDatabaseFirstLegacyStoreSourceFiles`

```
export async function collectDatabaseFirstLegacyStoreSourceFiles(sourceRoots) {
```

**Line:** 346 | **Kind:** fn

### `collectDatabaseFirstNativeLegacyStoreViolations`

```
export function collectDatabaseFirstNativeLegacyStoreViolations(content, relativePath) {
```

**Line:** 376 | **Kind:** fn

### `collectDatabaseFirstLegacyStoreViolations`

```
export function collectDatabaseFirstLegacyStoreViolations(
```

**Line:** 671 | **Kind:** fn

### `main`

```
export async function main() {
```

**Line:** 9850 | **Kind:** fn
