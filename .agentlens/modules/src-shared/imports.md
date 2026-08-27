# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_shared[src-shared] --> compat[compat]
    src_shared[src-shared] --> infra[infra]
    src_shared[src-shared] --> infra[infra]
    src_shared[src-shared] --> infra[infra]
    src_shared[src-shared] --> test_utils[test-utils]
    src_shared[src-shared] --> utils[utils]
    src_shared[src-shared] --> utils[utils]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _[.]
    src_shared[src-shared] --> _openclaw[@openclaw]
    src_shared[src-shared] --> normalization_core[normalization-core]
    src_shared[src-shared] --> normalization_core[normalization-core]
    src_shared[src-shared] --> normalization_core[normalization-core]
    src_shared[src-shared] --> normalization_core[normalization-core]
    src_shared[src-shared] --> normalization_core[normalization-core]
    src_shared[src-shared] --> json5[json5]
    src_shared[src-shared] --> node_async_hooks[node:async_hooks]
    src_shared[src-shared] --> node_child_process[node:child_process]
    src_shared[src-shared] --> node_fs[node:fs]
    src_shared[src-shared] --> node_os[node:os]
    src_shared[src-shared] --> node_path[node:path]
    src_shared[src-shared] --> node_url[node:url]
    src_shared[src-shared] --> plugin_sdk[plugin-sdk]
    src_shared[src-shared] --> typebox[typebox]
    src_shared[src-shared] --> vitest[vitest]
    src_shared[src-shared] --> zod[zod]
```

## Internal Dependencies

Dependencies within this module:

- `entities`
- `ignore`

## External Dependencies

Dependencies from other modules:

- `../compat/legacy-names.js`
- `../infra/path-guards.js`
- `../infra/prototype-keys.js`
- `../infra/regular-file.js`
- `../test-utils/vitest-spies.js`
- `../utils/boolean.js`
- `../utils/zod-parse.js`
- `./account-enabled.js`
- `./agent-liveness.js`
- `./agent-run-status.js`
- `./assistant-error-format.js`
- `./avatar-limits.js`
- `./avatar-policy.js`
- `./bounded-buffer.js`
- `./chat-content.js`
- `./chat-envelope.js`
- `./chat-message-content.js`
- `./config-eval.js`
- `./deferred.js`
- `./device-auth-store.js`
- `./device-auth.js`
- `./device-bootstrap-profile.js`
- `./device-pairing-access.js`
- `./entry-metadata.js`
- `./entry-status.js`
- `./frontmatter.js`
- `./gateway-bind-url.js`
- `./global-singleton.js`
- `./html-entities.js`
- `./human-list.js`
- `./ignore-rules.js`
- `./import-specifier.js`
- `./iso-time.js`
- `./json-schema-defaults.js`
- `./lazy-promise.js`
- `./lazy-runtime.js`
- `./markdown-code.js`
- `./model-key.js`
- `./model-param-b.js`
- `./node-list-parse.js`
- `./node-match.js`
- `./node-presence.js`
- `./node-resolve.js`
- `./number-coercion.js`
- `./operator-scope-compat.js`
- `./path-array-index.js`
- `./pid-alive.js`
- `./requirements.js`
- `./runtime-import.js`
- `./scoped-expiring-id-cache.js`
- `./silent-reply-policy.js`
- `./string-sample.js`
- `./subagents-format.js`
- `./tailscale-status.js`
- `./text-chunking.js`
- `./thread-binding-lifecycle.js`
- `./usage-aggregates.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/number-coercion`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `@openclaw/normalization-core/utf16-slice`
- `json5`
- `node:async_hooks`
- `node:child_process`
- `node:fs`
- `node:os`
- `node:path`
- `node:url`
- `openclaw/plugin-sdk/test-fixtures`
- `typebox/compile`
- `vitest`
- `zod`
