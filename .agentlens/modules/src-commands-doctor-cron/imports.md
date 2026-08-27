# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_commands_doctor_cron[src-commands-doctor-cron] --> src[src]
    src_commands_doctor_cron[src-commands-doctor-cron] --> src[src]
    src_commands_doctor_cron[src-commands-doctor-cron] --> src[src]
    src_commands_doctor_cron[src-commands-doctor-cron] --> src[src]
    src_commands_doctor_cron[src-commands-doctor-cron] --> agents[agents]
    src_commands_doctor_cron[src-commands-doctor-cron] --> harness[harness]
    src_commands_doctor_cron[src-commands-doctor-cron] --> channels[channels]
    src_commands_doctor_cron[src-commands-doctor-cron] --> plugins[plugins]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cli[cli]
    src_commands_doctor_cron[src-commands-doctor-cron] --> config[config]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> service[service]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> store[store]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> cron[cron]
    src_commands_doctor_cron[src-commands-doctor-cron] --> infra[infra]
    src_commands_doctor_cron[src-commands-doctor-cron] --> infra[infra]
    src_commands_doctor_cron[src-commands-doctor-cron] --> infra[infra]
    src_commands_doctor_cron[src-commands-doctor-cron] --> memory_host_sdk[memory-host-sdk]
    src_commands_doctor_cron[src-commands-doctor-cron] --> process[process]
    src_commands_doctor_cron[src-commands-doctor-cron] --> routing[routing]
    src_commands_doctor_cron[src-commands-doctor-cron] --> state[state]
    src_commands_doctor_cron[src-commands-doctor-cron] --> state[state]
    src_commands_doctor_cron[src-commands-doctor-cron] --> test_utils[test-utils]
    src_commands_doctor_cron[src-commands-doctor-cron] --> __[..]
    src_commands_doctor_cron[src-commands-doctor-cron] --> utils[utils]
    src_commands_doctor_cron[src-commands-doctor-cron] --> shared[shared]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _[.]
    src_commands_doctor_cron[src-commands-doctor-cron] --> _openclaw[@openclaw]
    src_commands_doctor_cron[src-commands-doctor-cron] --> normalization_core[normalization-core]
    src_commands_doctor_cron[src-commands-doctor-cron] --> normalization_core[normalization-core]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_crypto[node:crypto]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_fs[node:fs]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_fs[node:fs]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_os[node:os]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_path[node:path]
    src_commands_doctor_cron[src-commands-doctor-cron] --> node_util[node:util]
    src_commands_doctor_cron[src-commands-doctor-cron] --> vitest[vitest]
    src_commands_doctor_cron[src-commands-doctor-cron] --> zod[zod]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/normalization-core/src/number-coercion.js`
- `../../../../packages/normalization-core/src/record-coerce.js`
- `../../../../packages/normalization-core/src/string-coerce.js`
- `../../../../packages/terminal-core/src/note.js`
- `../../../agents/agent-scope-config.js`
- `../../../agents/harness/policy.js`
- `../../../channels/ids.js`
- `../../../channels/plugins/read-only.js`
- `../../../cli/command-format.js`
- `../../../config/model-input.js`
- `../../../cron/delivery-field-schemas.js`
- `../../../cron/delivery-plan.js`
- `../../../cron/normalize.js`
- `../../../cron/parse.js`
- `../../../cron/persisted-shape.js`
- `../../../cron/schedule-number.js`
- `../../../cron/schedule.js`
- `../../../cron/service/normalize.js`
- `../../../cron/stagger.js`
- `../../../cron/store.js`
- `../../../cron/store/key.js`
- `../../../cron/task-run-detail.js`
- `../../../cron/task-run-history.js`
- `../../../cron/webhook-url.js`
- `../../../infra/kysely-sync.js`
- `../../../infra/node-sqlite.js`
- `../../../infra/state-migrations.cron-run-logs.js`
- `../../../memory-host-sdk/dreaming.js`
- `../../../process/exec.js`
- `../../../routing/session-key.js`
- `../../../state/openclaw-state-db.js`
- `../../../state/openclaw-state-db.paths.js`
- `../../../test-utils/vitest-spies.js`
- `../../../utils.js`
- `../../../utils/parse-json-compat.js`
- `../shared/codex-route-model-ref.js`
- `./dreaming-payload-migration.js`
- `./index.js`
- `./legacy-delivery.js`
- `./legacy-notify.js`
- `./legacy-repair.js`
- `./legacy-run-log-migration.js`
- `./legacy-store-migration.js`
- `./migration-ledger.js`
- `./payload-migration.js`
- `./repair-plan.js`
- `./runtime-policy-migration.js`
- `./store-migration.js`
- `./warnings.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `node:crypto`
- `node:fs`
- `node:fs/promises`
- `node:os`
- `node:path`
- `node:util`
- `vitest`
- `zod`
