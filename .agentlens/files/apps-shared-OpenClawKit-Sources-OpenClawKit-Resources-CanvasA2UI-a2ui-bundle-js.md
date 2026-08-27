# apps/shared/OpenClawKit/Sources/OpenClawKit/Resources/CanvasA2UI/a2ui.bundle.js

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 12508
- **Language:** JavaScript
- **Symbols:** 169
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 2 | fn | __exportAll | (private) | `var __exportAll = (all, no_symbols) => {` |
| 52 | fn | isValueMap | (private) | `function isValueMap(value) {` |
| 55 | fn | isPath | (private) | `function isPath(key, value) {` |
| 58 | fn | isObject | (private) | `function isObject(value) {` |
| 61 | fn | isComponentArrayReference | (private) | `function isComponentArrayReference(value) {` |
| 65 | fn | isStringValue | (private) | `function isStringValue(value) {` |
| 68 | fn | isNumberValue | (private) | `function isNumberValue(value) {` |
| 71 | fn | isBooleanValue | (private) | `function isBooleanValue(value) {` |
| 74 | fn | isAnyComponentNode | (private) | `function isAnyComponentNode(value) {` |
| 79 | fn | isResolvedAudioPlayer | (private) | `function isResolvedAudioPlayer(props) {` |
| 82 | fn | isResolvedButton | (private) | `function isResolvedButton(props) {` |
| 85 | fn | isResolvedCard | (private) | `function isResolvedCard(props) {` |
| 91 | fn | isResolvedCheckbox | (private) | `function isResolvedCheckbox(props) {` |
| 94 | fn | isResolvedColumn | (private) | `function isResolvedColumn(props) {` |
| 97 | fn | isResolvedDateTimeInput | (private) | `function isResolvedDateTimeInput(props) {` |
| 100 | fn | isResolvedDivider | (private) | `function isResolvedDivider(props) {` |
| 103 | fn | isResolvedImage | (private) | `function isResolvedImage(props) {` |
| 106 | fn | isResolvedIcon | (private) | `function isResolvedIcon(props) {` |
| 109 | fn | isResolvedList | (private) | `function isResolvedList(props) {` |
| 112 | fn | isResolvedModal | (private) | `function isResolvedModal(props) {` |
| 115 | fn | isResolvedMultipleChoice | (private) | `function isResolvedMultipleChoice(props) {` |
| 118 | fn | isResolvedRow | (private) | `function isResolvedRow(props) {` |
| 121 | fn | isResolvedSlider | (private) | `function isResolvedSlider(props) {` |
| 124 | fn | isResolvedTabItem | (private) | `function isResolvedTabItem(item) {` |
| 127 | fn | isResolvedTabs | (private) | `function isResolvedTabs(props) {` |
| 130 | fn | isResolvedText | (private) | `function isResolvedText(props) {` |
| 133 | fn | isResolvedTextField | (private) | `function isResolvedTextField(props) {` |
| 136 | fn | isResolvedVideo | (private) | `function isResolvedVideo(props) {` |
| 176 | fn | assertIs | (private) | `function assertIs(_arg) {}` |
| 178 | fn | assertNever | (private) | `function assertNever(_x) {` |
| 207 | fn | joinValues | (private) | `function joinValues(array, separator = " | ") {` |
| 247 | fn | getParsedType | (private) | `const getParsedType = (data) => {` |
| 309 | fn | processError | (private) | `const processError = (error) => {` |
| 364 | fn | errorMap | (private) | `const errorMap = (issue, _ctx) => {` |
| 440 | fn | getErrorMap | (private) | `function getErrorMap() {` |
| 443 | fn | makeIssue | (private) | `const makeIssue = (params) => {` |
| 467 | fn | addIssueToContext | (private) | `function addIssueToContext(ctx, issueData) {` |
| 533 | fn | DIRTY | (private) | `const DIRTY = (value) => ({` |
| 537 | fn | OK | (private) | `const OK = (value) => ({` |
| 541 | fn | isAborted | (private) | `const isAborted = (x) => x.status === "aborted";` |
| 542 | fn | isDirty | (private) | `const isDirty = (x) => x.status === "dirty";` |
| 543 | fn | isValid | (private) | `const isValid = (x) => x.status === "valid";` |
| 544 | fn | isAsync | (private) | `const isAsync = (x) => typeof Promise !== "unde...` |
| 564 | fn | handleResult | (private) | `const handleResult = (ctx, result) => {` |
| 582 | fn | processCreateParams | (private) | `function processCreateParams(params) {` |
| 590 | fn | customMap | (private) | `const customMap = (iss, ctx) => {` |
| 725 | fn | getIssueProperties | (private) | `const getIssueProperties = (val) => {` |
| 732 | fn | setError | (private) | `const setError = () => ctx.addIssue({` |
| 898 | fn | timeRegexSource | (private) | `function timeRegexSource(args) {` |
| 905 | fn | timeRegex | (private) | `function timeRegex(args) {` |
| 908 | fn | datetimeRegex | (private) | `function datetimeRegex(args) {` |
| 916 | fn | isValidIP | (private) | `function isValidIP(ip, version) {` |
| 921 | fn | isValidJWT | (private) | `function isValidJWT(jwt, alg) {` |
| 937 | fn | isValidCidr | (private) | `function isValidCidr(ip, version) {` |
| 1506 | fn | floatSafeRemainder | (private) | `function floatSafeRemainder(val, step) {` |
| 2229 | fn | deepPartialify | (private) | `function deepPartialify(schema) {` |
| 2497 | fn | handleResults | (private) | `function handleResults(results) {` |
| 2575 | fn | getDiscriminator | (private) | `const getDiscriminator = (type) => {` |
| 2660 | fn | mergeValues | (private) | `function mergeValues(a, b) {` |
| 2706 | fn | handleParsed | (private) | `const handleParsed = (parsedLeft, parsedRight) ...` |
| 2956 | fn | finalizeSet | (private) | `function finalizeSet(elements) {` |
| 3021 | fn | makeArgsIssue | (private) | `function makeArgsIssue(args, error) {` |
| 3037 | fn | makeReturnsIssue | (private) | `function makeReturnsIssue(returns, error) {` |
| 3161 | fn | createZodEnum | (private) | `function createZodEnum(values, params) {` |
| 3340 | fn | executeRefinement | (private) | `const executeRefinement = (acc) => {` |
| 3564 | fn | handleAsync | (private) | `const handleAsync = async () => {` |
| 3612 | fn | freeze | (private) | `const freeze = (data) => {` |
| 3721 | fn | exactlyOneKey | (private) | `const exactlyOneKey = (val, ctx) => {` |
| 3750 | fn | createDataValueSchema | (private) | `function createDataValueSchema(options = {}) {` |
| 3753 | fn | checkDepth | (private) | `const checkDepth = (v, currentDepth) => {` |
| 4014 | fn | checkRefs | (private) | `const checkRefs = (ids, componentId) => {` |
| 4598 | fn | merge | (private) | `function merge(...classes) {` |
| 4608 | fn | appendToAll | (private) | `function appendToAll(target, exclusions, ...cla...` |
| 4624 | fn | toProp | (private) | `function toProp(key) {` |
| 4628 | fn | color | (private) | `const color = (src) => `` |
| 4649 | fn | getInverseKey | (private) | `const getInverseKey = (key) => {` |
| 4656 | fn | keyFactory | (private) | `const keyFactory = (prefix) => {` |
| 5048 | fn | __defNormalProp | (private) | `var __defNormalProp = (obj, key, value) => key ...` |
| 5054 | fn | __publicField | (private) | `var __publicField = (obj, key, value) => {` |
| 5058 | fn | __accessCheck | (private) | `var __accessCheck = (obj, member, msg) => {` |
| 5061 | fn | __privateIn | (private) | `var __privateIn = (member, obj) => {` |
| 5065 | fn | __privateAdd | (private) | `var __privateAdd = (obj, member, value) => {` |
| 5069 | fn | __privateMethod | (private) | `var __privateMethod = (obj, member, method) => {` |
| 5080 | fn | defaultEquals | (private) | `function defaultEquals(a, b) {` |
| 5094 | fn | setActiveConsumer | (private) | `function setActiveConsumer(consumer) {` |
| 5099 | fn | getActiveConsumer | (private) | `function getActiveConsumer() {` |
| 5102 | fn | isInNotificationPhase | (private) | `function isInNotificationPhase() {` |
| 5122 | fn | producerAccessed | (private) | `function producerAccessed(node) {` |
| 5140 | fn | producerIncrementEpoch | (private) | `function producerIncrementEpoch() {` |
| 5143 | fn | producerUpdateValueVersion | (private) | `function producerUpdateValueVersion(node) {` |
| 5154 | fn | producerNotifyConsumers | (private) | `function producerNotifyConsumers(node) {` |
| 5164 | fn | producerUpdatesAllowed | (private) | `function producerUpdatesAllowed() {` |
| 5167 | fn | consumerMarkDirty | (private) | `function consumerMarkDirty(node) {` |
| 5173 | fn | consumerBeforeComputation | (private) | `function consumerBeforeComputation(node) {` |
| 5177 | fn | consumerAfterComputation | (private) | `function consumerAfterComputation(node, prevCon...` |
| 5187 | fn | consumerPollProducersForChange | (private) | `function consumerPollProducersForChange(node) {` |
| 5198 | fn | producerAddLiveConsumer | (private) | `function producerAddLiveConsumer(node, consumer...` |
| 5209 | fn | producerRemoveLiveConsumerAtIndex | (private) | `function producerRemoveLiveConsumerAtIndex(node...` |
| 5230 | fn | consumerIsLive | (private) | `function consumerIsLive(node) {` |
| 5234 | fn | assertConsumerNode | (private) | `function assertConsumerNode(node) {` |
| 5239 | fn | assertProducerNode | (private) | `function assertProducerNode(node) {` |
| 5250 | fn | computedGet | (private) | `function computedGet(node) {` |
| 5256 | fn | createComputed | (private) | `function createComputed(computation) {` |
| 5259 | fn | computed | (private) | `const computed = () => computedGet(node);` |
| 5308 | fn | defaultThrowError | (private) | `function defaultThrowError() {` |
| 5312 | fn | throwInvalidWriteToSignalError | (private) | `function throwInvalidWriteToSignalError() {` |
| 5322 | fn | createSignal | (private) | `function createSignal(initialValue) {` |
| 5325 | fn | getter | (private) | `const getter = () => {` |
| 5332 | fn | signalGetFn | (private) | `function signalGetFn() {` |
| 5336 | fn | signalSetFn | (private) | `function signalSetFn(node, newValue) {` |
| 5350 | fn | signalValueChanged | (private) | `function signalValueChanged(node) {` |
| 5375 | class | State | (private) | - |
| 5404 | class | Computed | (private) | - |
| 5430 | fn | untrack | (private) | `function untrack(cb) {` |
| 5442 | fn | introspectSources | (private) | `function introspectSources(sink) {` |
| 5448 | fn | introspectSinks | (private) | `function introspectSinks(signal) {` |
| 5454 | fn | hasSinks | (private) | `function hasSinks(signal) {` |
| 5461 | fn | hasSources | (private) | `function hasSources(signal) {` |
| 5468 | class | Watcher | (private) | - |
| 5524 | fn | currentComputed | (private) | `function currentComputed() {` |
| 5544 | fn | createStorage | (private) | `const createStorage = (initial = null) => new S...` |
| 5573 | fn | convertToInt | (private) | `function convertToInt(prop) {` |
| 5879 | fn | create | (private) | `function create() {` |
| 6171 | fn | V | (private) | `function V(t, i) {` |
| 6175 | fn | N | (private) | `const N = (t, i) => {` |
| 6242 | fn | M | (private) | `function M$1(t, i, s = t, e) {` |
| 6417 | fn | D | (private) | `const D = (t, i, s) => {` |
| 6506 | fn | n | (private) | `function n$9(t) {` |
| 6540 | fn | o | (private) | `const o = (t) => t.renderRoot?.querySelector(e)...` |
| 6597 | fn | o | (private) | `function o$7(i) {` |
| 6740 | fn | h | (private) | `function h$3(i) {` |
| 6743 | fn | n | (private) | `function n$5(i, t = !1, e = 0) {` |
| 6815 | fn | n | (private) | `function n$3(n) {` |
| 6967 | fn | flushPending | (private) | `function flushPending() {` |
| 6975 | fn | effect | (private) | `function effect(cb) {` |
| 6989 | fn | buildStructuralStyles | (private) | `const buildStructuralStyles = () => {` |
| 7033 | fn | accept | (private) | `function accept(f) {` |
| 7065 | fn | Root | (private) | `let Root = (() => {` |
| 7718 | fn | accept | (private) | `function accept(f) {` |
| 7858 | fn | accept | (private) | `function accept(f) {` |
| 8009 | fn | accept | (private) | `function accept(f) {` |
| 8111 | fn | extractStringValue | (private) | `function extractStringValue(val, component, pro...` |
| 8124 | fn | extractNumberValue | (private) | `function extractNumberValue(val, component, pro...` |
| 8142 | fn | accept | (private) | `function accept(f) {` |
| 8330 | fn | accept | (private) | `function accept(f) {` |
| 8526 | fn | accept | (private) | `function accept(f) {` |
| 8795 | fn | accept | (private) | `function accept(f) {` |
| 8885 | fn | accept | (private) | `function accept(f) {` |
| 9005 | fn | render | (private) | `const render = (url) => {` |
| 9041 | fn | accept | (private) | `function accept(f) {` |
| 9226 | fn | render | (private) | `const render = (url) => {` |
| 9278 | fn | accept | (private) | `function accept(f) {` |
| 9418 | fn | accept | (private) | `function accept(f) {` |
| 10040 | fn | accept | (private) | `function accept(f) {` |
| 10227 | fn | showModalIfNeeded | (private) | `const showModalIfNeeded = () => {` |
| 10262 | fn | accept | (private) | `function accept(f) {` |
| 10458 | fn | accept | (private) | `function accept(f) {` |
| 10696 | fn | accept | (private) | `function accept(f) {` |
| 10944 | fn | u | (private) | `const u = (e, s, t) => {` |
| 10998 | fn | accept | (private) | `function accept(f) {` |
| 11177 | fn | accept | (private) | `function accept(f) {` |
| 11541 | fn | dynamicRendererPromise | (private) | `const dynamicRendererPromise = (async () => {` |
| 11562 | fn | accept | (private) | `function accept(f) {` |
| 11802 | fn | accept | (private) | `function accept(f) {` |
| 11967 | fn | appendComponentStyles | (private) | `const appendComponentStyles = (tagName, extraSt...` |
| 12010 | fn | emptyClasses | (private) | `const emptyClasses = () => ({});` |
| 12011 | fn | textHintStyles | (private) | `const textHintStyles = () => ({` |
| 12025 | fn | postNativeMessage | (private) | `const postNativeMessage = (handler, payload) => {` |
| 12028 | fn | createSecureActionId | (private) | `const createSecureActionId = () => {` |
