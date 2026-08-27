# Memory

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Summary

| High 🔴 | Medium 🟡 | Low 🟢 |
| 4 | 0 | 6 |

## 🔴 High Priority

### `SAFETY` (extensions/msteams/src/channel.actions.test.ts:1410)

> only compound forms (with "/") should preempt the To fallback.

### `WARNING` (extensions/msteams/src/monitor.ts:243)

> so those registrations keep working through the transition. The

### `SAFETY` (extensions/msteams/src/reply-stream-controller.ts:333)

> net so the user still sees the final reply.

### `SAFETY` (extensions/msteams/src/send-context.ts:190)

> check: when the caller targeted a specific user (DM), verify the

## 🟢 Low Priority

### `NOTE` (extensions/msteams/src/feedback-invoke.ts:169)

> thumbedDownResponse is not populated here because we don't cache

### `NOTE` (extensions/msteams/src/graph-messages.ts:172)

> ** The channel pin endpoint may require the Graph beta API or specific

### `NOTE` (extensions/msteams/src/graph-thread.ts:107)

> Graph replies endpoint returns oldest-first and does not support $orderby.

### `NOTE` (extensions/msteams/src/reply-dispatcher.test.ts:375)

> pre-rebase tests asserted exact call counts at specific gate

### `NOTE` (extensions/msteams/src/reply-stream-controller.ts:216)

> that the agent is working — bumps the progress-draft gate so the

### `NOTE` (extensions/msteams/src/sdk-types.ts:4)

> we intentionally avoid coupling to SDK classes with private members
