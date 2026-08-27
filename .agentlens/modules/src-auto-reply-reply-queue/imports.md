# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> embedded_agent_runner[embedded-agent-runner]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> harness[harness]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> agents[agents]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> channels[channels]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> plugins[plugins]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> cli[cli]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> config[config]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> sessions[sessions]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> infra[infra]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> infra[infra]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> plugin_sdk[plugin-sdk]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> process[process]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> process[process]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> sessions[sessions]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> shared[shared]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> utils[utils]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> utils[utils]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> __[..]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _[.]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> _openclaw[@openclaw]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> normalization_core[normalization-core]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> node_crypto[node:crypto]
    src_auto_reply_reply_queue[src-auto-reply-reply-queue] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../agents/embedded-agent-runner/lanes.js`
- `../../../agents/harness/hook-helpers.js`
- `../../../agents/stable-stringify.js`
- `../../../channels/chat-type.js`
- `../../../channels/plugins/index.js`
- `../../../cli/parse-duration.js`
- `../../../config/sessions.js`
- `../../../config/sessions/session-accessor.js`
- `../../../infra/dedupe.js`
- `../../../infra/parse-finite-number.js`
- `../../../plugin-sdk/channel-route.js`
- `../../../process/command-queue.js`
- `../../../process/gateway-work-admission.js`
- `../../../runtime.js`
- `../../../sessions/user-turn-transcript.js`
- `../../../shared/global-singleton.js`
- `../../../utils/message-channel.js`
- `../../../utils/queue-helpers.js`
- `../../thinking.js`
- `../directive-parsing.js`
- `../queue.js`
- `../queue.test-helpers.js`
- `../route-reply.js`
- `./cleanup.js`
- `./cleanup.test-support.js`
- `./drain.js`
- `./enqueue.js`
- `./normalize.js`
- `./settings.js`
- `./state.js`
- `./types.js`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/string-coerce`
- `node:crypto`
- `vitest`
