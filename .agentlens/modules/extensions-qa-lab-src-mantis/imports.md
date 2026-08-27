# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> __[..]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> __[..]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> shared[shared]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> shared[shared]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> slack[slack]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> __[..]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> __[..]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _[.]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> _openclaw[@openclaw]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> commander[commander]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> node_child_process[node:child_process]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> node_fs[node:fs]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> node_os[node:os]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> node_path[node:path]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> node_url[node:url]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_mantis[extensions-qa-lab-src-mantis] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../cli-paths.js`
- `../evidence-summary.js`
- `../live-transports/shared/credential-lease.runtime.js`
- `../live-transports/shared/live-transport-cli.js`
- `../live-transports/slack/slack-live.scenarios.js`
- `../mantis-options.runtime.js`
- `../mantis-phase-timer.runtime.js`
- `./crabbox-runtime.js`
- `./desktop-browser-smoke.runtime.js`
- `./discord-smoke.runtime.js`
- `./package.json`
- `./run.runtime.js`
- `./slack-desktop-smoke.runtime.js`
- `./telegram-desktop-builder.runtime.js`
- `./visual-task.runtime.js`
- `@openclaw/normalization-core`
- `commander`
- `node:child_process`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/response-limit-runtime`
- `openclaw/plugin-sdk/secret-file-runtime`
- `openclaw/plugin-sdk/security-runtime`
- `openclaw/plugin-sdk/ssrf-runtime`
- `vitest`
