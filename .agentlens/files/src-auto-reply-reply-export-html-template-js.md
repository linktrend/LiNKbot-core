# src/auto-reply/reply/export-html/template.js

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1992
- **Language:** JavaScript
- **Symbols:** 60
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 85 | fn | buildTree | (private) | `function buildTree() {` |
| 114 | fn | sortChildren | (private) | `function sortChildren(node) {` |
| 128 | fn | buildActivePathIds | (private) | `function buildActivePathIds(targetId) {` |
| 145 | fn | getPath | (private) | `function getPath(targetId) {` |
| 167 | fn | findNewestLeaf | (private) | `function findNewestLeaf(nodeId) {` |
| 172 | fn | mapNodes | (private) | `function mapNodes(node) {` |
| 197 | fn | flattenTree | (private) | `function flattenTree(roots, activePathIds) {` |
| 203 | fn | markActive | (private) | `function markActive(node) {` |
| 299 | fn | buildTreePrefix | (private) | `function buildTreePrefix(flatNode) {` |
| 336 | fn | hasTextContent | (private) | `function hasTextContent(content) {` |
| 350 | fn | extractContent | (private) | `function extractContent(content) {` |
| 363 | fn | renderableContentBlocks | (private) | `function renderableContentBlocks(content) {` |
| 373 | fn | getSearchableText | (private) | `function getSearchableText(entry, label) {` |
| 417 | fn | filterNodes | (private) | `function filterNodes(flatNodes, currentLeafId) {` |
| 493 | fn | recalculateVisualStructure | (private) | `function recalculateVisualStructure(filteredNod...` |
| 507 | fn | findVisibleAncestor | (private) | `function findVisibleAncestor(nodeId) {` |
| 624 | fn | shortenPath | (private) | `function shortenPath(p) {` |
| 643 | fn | truncateUtf16Safe | (private) | `function truncateUtf16Safe(s, maxLen) {` |
| 662 | fn | formatToolCall | (private) | `function formatToolCall(name, args) {` |
| 699 | fn | escapeHtml | (private) | `function escapeHtml(text) {` |
| 705 | fn | escapeHtmlAttr | (private) | `function escapeHtmlAttr(text) {` |
| 713 | fn | sanitizeImageMimeType | (private) | `function sanitizeImageMimeType(mimeType) {` |
| 720 | fn | sanitizeImageBase64 | (private) | `function sanitizeImageBase64(base64Data) {` |
| 731 | fn | renderDataUrlImage | (private) | `function renderDataUrlImage(img, className) {` |
| 742 | fn | truncate | (private) | `function truncate(s, maxLen = 100) {` |
| 752 | fn | getTreeNodeDisplayHtml | (private) | `function getTreeNodeDisplayHtml(entry, label) {` |
| 753 | fn | normalize | (private) | `const normalize = (s) => s.replace(/[\n\t]/g, "...` |
| 841 | fn | renderTree | (private) | `function renderTree() {` |
| 923 | fn | forceTreeRerender | (private) | `function forceTreeRerender() {` |
| 932 | fn | formatTokens | (private) | `function formatTokens(count) {` |
| 945 | fn | formatTimestamp | (private) | `function formatTimestamp(ts) {` |
| 957 | fn | replaceTabs | (private) | `function replaceTabs(text) {` |
| 962 | fn | str | (private) | `function str(value) {` |
| 972 | fn | getLanguageFromPath | (private) | `function getLanguageFromPath(filePath) {` |
| 1007 | fn | findToolResult | (private) | `function findToolResult(toolCallId) {` |
| 1018 | fn | formatExpandableOutput | (private) | `function formatExpandableOutput(text, maxLines,...` |
| 1075 | fn | renderToolCall | (private) | `function renderToolCall(call) {` |
| 1080 | fn | getResultText | (private) | `const getResultText = () => {` |
| 1088 | fn | getResultImages | (private) | `const getResultImages = () => {` |
| 1095 | fn | renderResultImages | (private) | `const renderResultImages = () => {` |
| 1279 | fn | buildShareUrl | (private) | `function buildShareUrl(entryId) {` |
| 1307 | fn | copyToClipboard | (private) | `async function copyToClipboard(text, button) {` |
| 1348 | fn | renderCopyLinkButton | (private) | `function renderCopyLinkButton(entryId) {` |
| 1357 | fn | renderEntry | (private) | `function renderEntry(entry) {` |
| 1482 | fn | computeStats | (private) | `function computeStats(entryList) {` |
| 1547 | fn | renderHeader | (private) | `function renderHeader() {` |
| 1677 | fn | renderEntryToNode | (private) | `function renderEntryToNode(entry) {` |
| 1700 | fn | navigateTo | (private) | `function navigateTo(targetId, scrollMode = "tar...` |
| 1759 | fn | escapeHtmlTags | (private) | `function escapeHtmlTags(text) {` |
| 1765 | fn | normalizeMarkdownImageLabel | (private) | `function normalizeMarkdownImageLabel(text) {` |
| 1770 | fn | renderMarkdownImage | (private) | `function renderMarkdownImage(token) {` |
| 1781 | fn | decodeMarkdownHrefCodePoint | (private) | `function decodeMarkdownHrefCodePoint(value, rad...` |
| 1794 | fn | decodeMarkdownHrefEntities | (private) | `function decodeMarkdownHrefEntities(text) {` |
| 1815 | fn | getMarkdownHrefProtocol | (private) | `function getMarkdownHrefProtocol(href) {` |
| 1823 | fn | isSafeMarkdownLinkHref | (private) | `function isSafeMarkdownLinkHref(href) {` |
| 1832 | fn | renderMarkdownLink | (private) | `function renderMarkdownLink(token) {` |
| 1894 | fn | safeMarkedParse | (private) | `function safeMarkedParse(text) {` |
| 1926 | fn | closeSidebar | (private) | `const closeSidebar = () => {` |
| 1939 | fn | toggleThinking | (private) | `const toggleThinking = () => {` |
| 1949 | fn | toggleToolOutputs | (private) | `const toggleToolOutputs = () => {` |
