# test/scripts/check-database-first-legacy-stores.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 8817
- **Language:** TypeScript
- **Symbols:** 464
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 91 | type | DeepRuntimeSchema | (private) | - |
| 103 | fn | normalize | (private) | `function normalize(value: unknown): unknown {` |
| 122 | fn | save | pub | `export async function save(dir: string) {` |
| 251 | fn | save | pub | `export async function save(dir: string) {` |
| 1038 | fn | save | (private) | `async function save(fsSafe: { root(dir: string)...` |
| 1076 | fn | save | (private) | `function save(jsonFiles: { writeJson(path: stri...` |
| 1178 | fn | read | (private) | `function read(path: string) {` |
| 1181 | fn | write | (private) | `function write(path: string) {` |
| 1226 | fn | save | (private) | `function save(require: (specifier: string) => {...` |
| 1316 | fn | persist | (private) | `function persist(filePath: string) {` |
| 1334 | fn | persist | (private) | `function persist(filePath: string) {` |
| 1355 | fn | persist | (private) | `function persist(filePath: string) {` |
| 1378 | fn | inner | (private) | `function inner(filePath: string) {` |
| 1401 | fn | inner | (private) | `function inner(filePath: string) {` |
| 1421 | fn | save | (private) | `function save(req: (specifier: string) => { wri...` |
| 1437 | fn | save | (private) | `function save(createRequire: (url: string) => (...` |
| 1454 | fn | run | (private) | `function run() {` |
| 1455 | fn | createRequire | (private) | `function createRequire(url: string) {` |
| 1932 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 1949 | fn | persist | (private) | `function persist(filePath: string) {` |
| 1965 | fn | persist | (private) | `function persist(filePath: string) {` |
| 1982 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2001 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2019 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2037 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2056 | fn | persist | (private) | `function persist(` |
| 2076 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2077 | fn | createRequire | (private) | `function createRequire(url: string) {` |
| 2097 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2116 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2156 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2177 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2199 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 2216 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 2232 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 2247 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 2262 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 2278 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 2294 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 2309 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 2326 | fn | persist | (private) | `function persist({ paths: { filePath } = { file...` |
| 2342 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 2358 | fn | writePath | (private) | `function writePath({ paths: { filePath } }: { p...` |
| 2374 | fn | writePath | (private) | `function writePath(options: { paths: { filePath...` |
| 2390 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2407 | fn | persist | (private) | `function persist(path = "sessions.json") {` |
| 2422 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2423 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 2440 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2441 | fn | inner | (private) | `function inner() {` |
| 2458 | fn | writePath | (private) | `function writePath(path: string) {` |
| 2461 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2462 | fn | inner | (private) | `function inner() {` |
| 2479 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2481 | fn | inner | (private) | `function inner() {` |
| 2499 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2500 | fn | inner | (private) | `function inner(nextPath = filePath) {` |
| 2517 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2518 | fn | inner | (private) | `function inner(save = () => fs.writeFile(filePa...` |
| 2535 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2536 | fn | inner | (private) | `function inner(save = () => fs.writeFile(filePa...` |
| 2553 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2554 | fn | inner | (private) | `function inner(nextPath = filePath) {` |
| 2571 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2572 | fn | inner | (private) | `function inner(nextPath = filePath) {` |
| 2589 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2590 | fn | inner | (private) | `function inner(filePath: string, nextPath = fil...` |
| 2608 | fn | writePath | (private) | `function writePath(path = defaultPath) {` |
| 2611 | fn | persist | (private) | `function persist(defaultPath: string) {` |
| 2627 | fn | writePath | (private) | `function writePath({ path = defaultPath } = {}) {` |
| 2630 | fn | persist | (private) | `function persist(defaultPath: string) {` |
| 2645 | fn | writePath | (private) | `function writePath({ path = "sessions.json" } =...` |
| 2648 | fn | persist | (private) | `function persist() {` |
| 2664 | fn | writePath | (private) | `function writePath(path = filePath ?? fallback) {` |
| 2667 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2683 | fn | writePath | (private) | `function writePath(filePath: string, path = fil...` |
| 2686 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2702 | fn | writePath | (private) | `function writePath(filePath: string, path = fil...` |
| 2717 | fn | writePath | (private) | `function writePath({ filePath }: { filePath: st...` |
| 2732 | fn | writePath | (private) | `function writePath(` |
| 2750 | fn | writePath | (private) | `function writePath(` |
| 2768 | fn | writePath | (private) | `function writePath(filePath: string, path = fil...` |
| 2784 | fn | writePath | (private) | `function writePath(filePath: string, path = (sa...` |
| 2800 | fn | writePath | (private) | `function writePath(filePath: string, path = (ca...` |
| 2816 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2819 | fn | persist | (private) | `function persist(filePath: string) {` |
| 2835 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2851 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2867 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2882 | fn | writePath | (private) | `function writePath({ path = "sessions.json" } =...` |
| 2898 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2915 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2932 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2947 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2968 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 2989 | fn | writePath | (private) | `function writePath({ paths: { filePath = "sessi...` |
| 3011 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 3033 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 3052 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 3073 | fn | writePath | (private) | `function writePath({ filePath }: { filePath: st...` |
| 3088 | fn | writePath | (private) | `function writePath(` |
| 3106 | fn | writePath | (private) | `function writePath(` |
| 3127 | fn | writePath | (private) | `function writePath(` |
| 3148 | fn | writePath | (private) | `function writePath(` |
| 3168 | fn | writePath | (private) | `function writePath(` |
| 3189 | fn | writePath | (private) | `function writePath(` |
| 3208 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 3224 | fn | writePath | (private) | `function writePath(options: { paths: { filePath...` |
| 3239 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 3257 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 3272 | fn | writePath | (private) | `function writePath(filePath = "sessions.json", ...` |
| 3287 | fn | writePath | (private) | `function writePath(` |
| 3306 | fn | writePath | (private) | `function writePath(` |
| 3325 | fn | writePath | (private) | `function writePath(` |
| 3331 | fn | persist | (private) | `function persist() {` |
| 3347 | fn | writePath | (private) | `function writePath(filePath?: string, path = fi...` |
| 3350 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3365 | fn | writePath | (private) | `function writePath(filePath?: string, { path = ...` |
| 3368 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3383 | fn | writePath | (private) | `function writePath(prefix: string, filePath: st...` |
| 3386 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3402 | fn | writePath | (private) | `function writePath(path = defaultPath) {` |
| 3405 | fn | persist | (private) | `function persist(defaultPath: string) {` |
| 3406 | fn | inner | (private) | `function inner() {` |
| 3424 | fn | writeCurrent | (private) | `function writeCurrent() {` |
| 3427 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3428 | fn | inner | (private) | `function inner() {` |
| 3447 | fn | writePath | (private) | `function writePath(path = defaultPath) {` |
| 3450 | fn | persist | (private) | `function persist(defaultPath: string) {` |
| 3466 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3467 | fn | inner | (private) | `function inner({ path = filePath } = {}) {` |
| 3484 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3486 | fn | inner | (private) | `function inner({ path = filePath } = {}) {` |
| 3503 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3505 | fn | inner | (private) | `function inner({ path = filePath } = {}) {` |
| 3522 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3523 | fn | inner | (private) | `function inner(filePath: string, { path = fileP...` |
| 3540 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3541 | fn | inner | (private) | `function inner({ path = filePath } = {}) {` |
| 3558 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3559 | fn | inner | (private) | `function inner({ path = filePath } = {}) {` |
| 3575 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3576 | fn | inner | (private) | `function inner() {` |
| 3594 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3613 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3615 | fn | inner | (private) | `function inner() {` |
| 3633 | fn | noopParam | (private) | `const noopParam = async (_path: string) => {};` |
| 3634 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3635 | fn | inner | (private) | `function inner() {` |
| 3654 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3655 | fn | inner | (private) | `function inner() {` |
| 3674 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3680 | fn | inner | (private) | `function inner() {` |
| 3699 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 3700 | fn | inner | (private) | `function inner() {` |
| 3728 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 3729 | fn | inner | (private) | `function inner() {` |
| 3752 | fn | persist | (private) | `function persist(filePath: string, json: boolea...` |
| 3753 | fn | inner | (private) | `function inner() {` |
| 3776 | fn | persist | (private) | `function persist(filePath: string, json: boolea...` |
| 3777 | fn | inner | (private) | `function inner() {` |
| 3800 | fn | persist | (private) | `function persist(filePath: string, disabled: bo...` |
| 3801 | fn | inner | (private) | `function inner() {` |
| 3802 | fn | save | (private) | `let save = () => fs.writeFile(filePath, "{}\\n");` |
| 3820 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3821 | fn | inner | (private) | `function inner() {` |
| 3838 | fn | persist | (private) | `function persist(filePath: string, customRequir...` |
| 3839 | fn | inner | (private) | `function inner() {` |
| 3858 | fn | persist | (private) | `function persist(filePath: string, customCreate...` |
| 3859 | fn | inner | (private) | `function inner() {` |
| 3881 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3899 | fn | helper | (private) | `function helper(filePath: string) {` |
| 3902 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3903 | fn | inner | (private) | `function inner(helper: (path: string) => Promis...` |
| 3920 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 3939 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3940 | fn | inner | (private) | `function inner() {` |
| 3941 | fn | deeper | (private) | `function deeper() {` |
| 3960 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3961 | fn | inner | (private) | `function inner() {` |
| 3963 | fn | deeper | (private) | `function deeper() {` |
| 3981 | fn | persist | (private) | `function persist(filePath: string) {` |
| 3982 | fn | inner | (private) | `function inner() {` |
| 3983 | fn | deeper | (private) | `function deeper() {` |
| 4003 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4005 | fn | configure | (private) | `function configure() {` |
| 4024 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4025 | fn | inner | (private) | `function inner() {` |
| 4047 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4048 | fn | inner | (private) | `function inner() {` |
| 4050 | fn | save | (private) | `var save = () => fs.writeFile(filePath, "{}\\n");` |
| 4068 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4069 | fn | inner | (private) | `function inner() {` |
| 4093 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4109 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4110 | fn | safe | (private) | `const safe = () => undefined;` |
| 4129 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4130 | fn | safe | (private) | `const safe = () => undefined;` |
| 4149 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4150 | fn | safe | (private) | `const safe = async () => {};` |
| 4168 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4187 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4188 | fn | save | (private) | `const save = () => fs.writeFile(filePath, "{}\\...` |
| 4208 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4227 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4229 | fn | inner | (private) | `var inner = (path: string) => fs.writeFile(path...` |
| 4245 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 4247 | fn | inner | (private) | `var inner = (path: string) => fs.writeFile(path...` |
| 4249 | fn | inner | (private) | `var inner = async (_path: string) => {};` |
| 4265 | fn | persist | (private) | `function persist(filePath: string, disabled: bo...` |
| 4266 | fn | inner | (private) | `var inner = (path: string) => fs.writeFile(path...` |
| 4268 | fn | inner | (private) | `var inner = async (_path: string) => {};` |
| 4284 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4302 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4303 | fn | save | (private) | `function save() {` |
| 4306 | fn | inner | (private) | `function inner() {` |
| 4323 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4324 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 4327 | fn | deeper | (private) | `function deeper(nextPath: string) {` |
| 4344 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4345 | fn | inner | (private) | `const inner = () => {` |
| 4346 | fn | deeper | (private) | `const deeper = () => fs.writeFile(filePath, "{}...` |
| 4363 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4364 | fn | inner | (private) | `function inner() {` |
| 4365 | fn | deeper | (private) | `const deeper = () => fs.writeFile(filePath, "{}...` |
| 4383 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4384 | fn | inner | (private) | `function inner() {` |
| 4406 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4407 | fn | inner | (private) | `function inner() {` |
| 4408 | fn | save | (private) | `const save = () => fs.writeFile(filePath, "{}\\...` |
| 4426 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4428 | fn | inner | (private) | `function inner() {` |
| 4429 | fn | write | (private) | `function write() {}` |
| 4446 | fn | persist | (private) | `function persist(filePath: string, customWrite:...` |
| 4448 | fn | inner | (private) | `function inner(writeFile: (value: string) => vo...` |
| 4465 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4466 | fn | inner | (private) | `const inner = (nextPath: string) => fs.writeFil...` |
| 4481 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4501 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4502 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 4520 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4521 | fn | inner | (private) | `function inner() {` |
| 4540 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4542 | fn | configure | (private) | `function configure() {` |
| 4560 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4581 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4582 | fn | inner | (private) | `function inner() {` |
| 4601 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 4602 | fn | inner | (private) | `function inner() {` |
| 4604 | fn | save | (private) | `var save = () => fs.writeFile(filePath, "{}\\n");` |
| 4606 | fn | save | (private) | `var save = async () => {};` |
| 4624 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 4625 | fn | inner | (private) | `function inner() {` |
| 4645 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4647 | fn | configure | (private) | `function configure() {` |
| 4650 | fn | inner | (private) | `function inner() {` |
| 4668 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4669 | fn | inner | (private) | `function inner() {` |
| 4692 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4693 | fn | inner | (private) | `function inner() {` |
| 4718 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 4719 | fn | inner | (private) | `function inner() {` |
| 4746 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 4747 | fn | inner | (private) | `function inner() {` |
| 4768 | fn | persist | (private) | `function persist(filePath: string, values: stri...` |
| 4769 | fn | inner | (private) | `function inner() {` |
| 4790 | fn | persist | (private) | `function persist(filePath: string, disabled: bo...` |
| 4791 | fn | inner | (private) | `function inner() {` |
| 4792 | fn | save | (private) | `let save = () => fs.writeFile(filePath, "{}\\n");` |
| 4812 | fn | persist | (private) | `function persist(filePath: string, mode: string) {` |
| 4813 | fn | inner | (private) | `function inner() {` |
| 4814 | fn | save | (private) | `const save = () => fs.writeFile(filePath, "{}\\...` |
| 4817 | fn | save | (private) | `const save = async () => {};` |
| 4836 | fn | persist | (private) | `function persist(filePath: string, mode: string) {` |
| 4839 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 4857 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4858 | fn | inner | (private) | `function inner() {` |
| 4879 | fn | writePath | (private) | `function writePath(path: string) {` |
| 4882 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4883 | fn | inner | (private) | `function inner() {` |
| 4901 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4902 | fn | inner | (private) | `function inner(_ = fs.writeFile(filePath, "{}\\...` |
| 4919 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4921 | fn | inner | (private) | `function inner() {` |
| 4923 | fn | write | (private) | `const write = async () => {};` |
| 4940 | fn | writePath | (private) | `function writePath(path: string) {` |
| 4945 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4946 | fn | inner | (private) | `function inner() {` |
| 4965 | fn | writePath | (private) | `function writePath(path: string) {` |
| 4969 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4970 | fn | inner | (private) | `function inner() {` |
| 4988 | fn | persist | (private) | `function persist(filePath: string) {` |
| 4989 | fn | inner | (private) | `function inner() {` |
| 5012 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5033 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5054 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5073 | fn | persist | (private) | `function persist(filePath: string, disabled: bo...` |
| 5074 | fn | inner | (private) | `let inner = (nextPath: string) => fs.writeFile(...` |
| 5092 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5111 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5134 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5155 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5174 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5197 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5198 | fn | inner | (private) | `let inner = (_nextPath: string) => Promise.reso...` |
| 5224 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5244 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5251 | fn | write | (private) | `const write = async () => {};` |
| 5267 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5289 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5312 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5341 | fn | persist | (private) | `function persist(filePath: string, useJson: boo...` |
| 5366 | fn | persist | (private) | `function persist(` |
| 5390 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5391 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 5395 | fn | inner | (private) | `function inner(_: string) {}` |
| 5411 | fn | helper | (private) | `function helper(nextPath: string) {` |
| 5414 | fn | persist | (private) | `function persist({ helper }: { helper: (nextPat...` |
| 5429 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5431 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 5449 | fn | persist | (private) | `function persist(filePath: string, customRequir...` |
| 5450 | fn | inner | (private) | `function inner(nextPath: string) {` |
| 5471 | fn | inner | (private) | `function inner({ path }: { path: string }) {` |
| 5474 | fn | persist | (private) | `function persist(filePath: string) {` |
| 5475 | fn | forward | (private) | `function forward({ path = filePath } = {}) {` |
| 5492 | fn | persistPath | (private) | `function persistPath(filePath = "sessions.json") {` |
| 5495 | fn | persistOptions | (private) | `function persistOptions(options: { filePath?: s...` |
| 5498 | fn | persistDestructured | (private) | `function persistDestructured({ filePath = "cron...` |
| 5525 | fn | persist | (private) | `function persist(filePath = "sessions.json") {` |
| 5540 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5556 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5574 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5593 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 5609 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5625 | fn | persist | (private) | `function persist(params: { paths: { filePath: s...` |
| 5641 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5657 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5673 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5689 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5707 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5726 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5743 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5760 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5777 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5793 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5809 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 5825 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5841 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5857 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5873 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5889 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5907 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 5925 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5944 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5960 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 5976 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 5997 | fn | persist | (private) | `function persist(params: { filePath: string }, ...` |
| 6004 | fn | inner | (private) | `function inner() {` |
| 6021 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6037 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6053 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6071 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6091 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6107 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6121 | fn | persist | (private) | `function persist(deps: { fs: typeof import("nod...` |
| 6135 | fn | persist | (private) | `function persist(deps: { fs: { promises: { writ...` |
| 6149 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6165 | fn | append | (private) | `function append(options: { filePath: string; co...` |
| 6168 | fn | replace | (private) | `function replace(options: { filePath: string; c...` |
| 6187 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6190 | fn | save | (private) | `function save(params: { filePath: string }) {` |
| 6205 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6208 | fn | save | (private) | `function save(params: { filePath: string }) {` |
| 6223 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6226 | fn | save | (private) | `function save(params: { filePath: string }) {` |
| 6241 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6244 | fn | save | (private) | `function save(params: { filePath: string }) {` |
| 6259 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6262 | fn | save | (private) | `function save(params: { storePath: string }) {` |
| 6277 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6293 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6323 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6340 | fn | helper | (private) | `function helper() {` |
| 6343 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6391 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6407 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 6423 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6444 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6465 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6488 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6513 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6536 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6557 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6580 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6601 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6698 | fn | save | (private) | `function save(filePath: string) {` |
| 6755 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6794 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6811 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6834 | fn | persist | (private) | `function persist(filePath: string) {` |
| 6835 | fn | save | (private) | `const save = () => fs.writeFile(filePath, "{}\\...` |
| 7032 | fn | persist | (private) | `function persist(filePath: string) {` |
| 7049 | fn | noopParam | (private) | `const noopParam = async (_path: string) => {};` |
| 7050 | fn | persist | (private) | `function persist(filePath: string) {` |
| 7067 | fn | persist | (private) | `function persist(filePath: string) {` |
| 7085 | fn | persist | (private) | `function persist(filePath: string) {` |
| 7102 | fn | persist | (private) | `function persist(filePath: string, options: { s...` |
| 7119 | fn | persist | (private) | `function persist(filePath: string, defaults: { ...` |
| 7136 | fn | persist | (private) | `function persist(filePath: string, defaults: { ...` |
| 7137 | fn | inner | (private) | `function inner() {` |
| 7156 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 7182 | fn | persist | (private) | `function persist(filePath: string, enabled: boo...` |
| 7203 | fn | persist | (private) | `function persist(filePath: string, disabled: bo...` |
| 7204 | fn | save | (private) | `let save = (nextPath: string) => fs.writeFile(n...` |
| 7223 | fn | persist | (private) | `let persist = (params: { filePath: string }) =>...` |
| 7237 | fn | persist | (private) | `let persist = (params: { filePath: string }) =>...` |
| 7251 | fn | persist | (private) | `let persist = (params: { filePath: string }) =>...` |
| 7266 | fn | persist | (private) | `let persist = (params: { filePath: string }) =>...` |
| 7283 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 7297 | fn | persist | (private) | `function persist(writer: { writeFile: (path: st...` |
| 7312 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 7316 | fn | persist | (private) | `function persist(_options: { store: string }) {` |
| 7332 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 7350 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 7353 | fn | caller | (private) | `function caller({ persist }: { persist: (option...` |
| 7367 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 7464 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 7495 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 7512 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 7529 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 7546 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 7595 | fn | writePath | (private) | `function writePath(filePath: string, { path = f...` |
| 7885 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 7904 | fn | persist | (private) | `function persist({ paths: { filePath = "session...` |
| 8007 | fn | persist | (private) | `function persist({ path = "sessions.json" }: { ...` |
| 8023 | fn | persist | (private) | `function persist({ path = "sessions.json" }: { ...` |
| 8068 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8085 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 8100 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8117 | fn | persist | (private) | `function persist(params: { paths: { filePath: s...` |
| 8134 | fn | persist | (private) | `function persist(params: { paths: { filePath: s...` |
| 8155 | fn | persist | (private) | `function persist({ paths: { filePath = currentS...` |
| 8175 | fn | persist | (private) | `function persist({ paths: { nested: { filePath ...` |
| 8192 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8209 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8229 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8249 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8265 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8281 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8297 | fn | persist | (private) | `function persist({ paths: { filePath } }: { pat...` |
| 8315 | fn | persist | (private) | `function persist(options: { store: string }) {` |
| 8335 | fn | persist | (private) | `function persist(writeFile: (path: string, valu...` |
| 8352 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8368 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8385 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8437 | fn | persist | (private) | `function persist(filePath: string) {` |
| 8438 | fn | inner | (private) | `function inner() {` |
| 8460 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8498 | fn | later | (private) | `function later() {` |
| 8514 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8532 | fn | persist | (private) | `function persist(params: { filePath: string }) {` |
| 8551 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 8569 | fn | persist | (private) | `function persist({ filePath }: { filePath: stri...` |
| 8590 | fn | save | pub | `export async function save(storePath: string) {` |

## Public API

### `save`

```
export async function save(dir: string) {
```

**Line:** 122 | **Kind:** fn

### `save`

```
export async function save(dir: string) {
```

**Line:** 251 | **Kind:** fn

### `save`

```
export async function save(storePath: string) {
```

**Line:** 8590 | **Kind:** fn
