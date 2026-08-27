# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> __[..]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> __[..]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> __[..]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> __[..]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> __[..]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> shared[shared]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> shared[shared]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> shared[shared]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> shared[shared]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _[.]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> _openclaw[@openclaw]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> whatsapp[whatsapp]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_child_process[node:child_process]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_crypto[node:crypto]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_fs[node:fs]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_os[node:os]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_path[node:path]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> node_util[node:util]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> plugin_sdk[plugin-sdk]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> vitest[vitest]
    extensions_qa_lab_src_live_transports_whatsapp[extensions-qa-lab-src-live-transports-whatsapp] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../../errors.js`
- `../../gateway-rpc-client.js`
- `../../qa-credentials-fingerprint.runtime.js`
- `../../scenario-catalog.js`
- `../../suite-planning.js`
- `../shared/credential-lease.runtime.js`
- `../shared/live-approval-result.js`
- `../shared/live-gateway-config.runtime.js`
- `../shared/live-transport-cli.js`
- `./scenario-environment.js`
- `./scenario-selection.js`
- `./whatsapp-live.approvals.js`
- `./whatsapp-live.config.js`
- `./whatsapp-live.contracts.js`
- `./whatsapp-live.driver.js`
- `./whatsapp-live.observations.js`
- `./whatsapp-live.operations.js`
- `./whatsapp-live.scenarios.capabilities.js`
- `./whatsapp-live.scenarios.conversation.js`
- `./whatsapp-live.scenarios.delivery.js`
- `./whatsapp-live.scenarios.js`
- `./whatsapp-live.scenarios.user-path.js`
- `./whatsapp-live.setup.js`
- `@openclaw/normalization-core`
- `@openclaw/whatsapp/api.js`
- `node:child_process`
- `node:crypto`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:util`
- `openclaw/plugin-sdk/account-resolution`
- `openclaw/plugin-sdk/error-runtime`
- `openclaw/plugin-sdk/process-runtime`
- `openclaw/plugin-sdk/qa-channel-protocol`
- `openclaw/plugin-sdk/string-coerce-runtime`
- `openclaw/plugin-sdk/temp-path`
- `vitest`
- `zod`
