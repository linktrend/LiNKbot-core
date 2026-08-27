# Memory

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Summary

| High 🔴 | Medium 🟡 | Low 🟢 |
| 67 | 7 | 32 |

## 🔴 High Priority

### `RULE` (src/agents/agent-bundle-mcp-harness.ts:200)

> must keep both lists aligned by name for fingerprint stability.

### `SAFETY` (src/agents/agent-delete-safety.ts:1)

> checks for deleting agents whose workspaces may overlap other agents. */

### `RULE` (src/agents/agent-project-settings-snapshot.ts:28)

> for whether workspace project settings can influence embedded-agent behavior. */

### `RULE` (src/agents/agent-tools.policy.ts:291)

> by supplying an arbitrary groupId.

### `WARNING` (src/agents/agent-tools.policy.ts:403)

> affected users about removed implicit grants (#47487), but only when

### `DEPRECATED` (src/agents/anthropic-payload-policy.test.ts:5)

> marker compatibility.

### `WARNING` (src/agents/bootstrap-files.ts:43)

> keys include workspace/session/message so repeated setup failures

### `RULE` (src/agents/embedded-agent-runner.buildembeddedsandboxinfo.test.ts:242)

> allow execution without review.

### `DEPRECATED` (src/agents/embedded-agent-runner/compact.types.ts:126)

> file-backed artifact target. Prefer sessionTarget for new callers. */

### `RULE` (src/agents/embedded-agent-runner/effective-tool-policy.test.ts:191)

> for group 222 could be consulted.

### `RULE` (src/agents/embedded-agent-runner/replay-history.test.ts:449)

> for *non-trailing* error turns. As the trailing message it would

### `SAFETY` (src/agents/exec-auto-reviewer.ts:51)

> , so keep them out of the reviewer prompt.

### `DEPRECATED` (src/agents/gpt5-prompt-overlay.ts:2)

> GPT-5 prompt overlay helpers.

### `WARNING` (src/agents/live-cache-regression-runner.test.ts:22)

> visible while avoiding a hard release gate.

### `DEPRECATED` (src/agents/live-model-errors.ts:5)

> model ids from generic provider/runtime failures.

### `RULE` (src/agents/plugin-tool-delivery-defaults.ts:4)

> without changing plugin tool identity.

### `RULE` (src/agents/provider-attribution.test.ts:5)

> helpers return broad records; assertions pin only the relevant fields.

### `RULE` (src/agents/provider-attribution.ts:112)

> input plus model compatibility fields for feature-level capability resolution. */

### `RULE` (src/agents/provider-request-config.ts:151)

> config includes the resolved transport plus attribution/security facts

### `RULE` (src/agents/subagent-announce-delivery.ts:310)

> must not make an already-running automatic parent unreachable.

### `RULE` (src/agents/subagent-capabilities.ts:4)

> to decide role, control scope, and subagent permissions.

### `SAFETY` (src/agents/system-prompt.test.ts:145)

> ");

### `SAFETY` (src/agents/system-prompt.test.ts:263)

> ");

### `SAFETY` (src/agents/system-prompt.ts:991)

> ",

### `INVARIANT` (src/agents/tool-mutation.ts:18)

> is "the file at this path is in the desired state."

### `WARNING` (src/agents/tool-policy-pipeline.test.ts:2)

> dedupe, and plugin-aware policy application.

### `WARNING` (src/agents/tool-policy-pipeline.test.ts:526)

> dedupe is bounded so long-running agents do not grow unbounded

### `RULE` (src/agents/tools-effective-inventory-build.ts:197)

> a mutable copy while keeping this inventory API readonly.

### `DEPRECATED` (src/auto-reply/chunk.test.ts:713)

> SDK fallback: nested config wins over a stale flat key, and

### `WARNING` (src/auto-reply/reply-payload.ts:253)

> synthesized from an observed tool error after the run produced assistant output. */

### `SAFETY` (src/auto-reply/reply/agent-runner.ts:3064)

> net: the dispatcher's onIdle callback normally fires

### `SAFETY` (src/auto-reply/reply/post-compaction-context.test.ts:32)

> \n\nBe safe.\n`;

### `SAFETY` (src/auto-reply/reply/post-compaction-context.test.ts:375)

> \n\nSafe things.\n\n## Noise\n\nIgnore.\n`;

### `WARNING` (src/auto-reply/reply/private-message-tool-final.ts:16)

> only for unusually substantive private finals, which usually means the

### `WARNING` (src/auto-reply/templating.ts:327)

> DM has topics enabled but this message is not in a topic. */

### `RULE` (src/channels/command-gating.ts:25)

> used only when `useAccessGroups` is false. Defaults to open. */

### `RULE` (src/channels/command-gating.ts:58)

> used only when `useAccessGroups` is false. Defaults to open. */

### `RULE` (src/channels/command-gating.ts:84)

> used only when `useAccessGroups` is false. Defaults to open. */

### `DEPRECATED` (src/channels/draft-preview-finalizer.ts:2)

> draft preview finalizer facade.

### `WARNING` (src/commands/auth-choice.model-check.ts:150)

> when the selected default model is unknown or has no usable credentials. */

### `WARNING` (src/commands/daemon-install-runtime-warning.ts:7)

> when daemon install will use a system Node path that may be unsuitable. */

### `WARNING` (src/commands/doctor-auth.ts:352)

> once that external credential is unusable, not throughout its normal lifetime.

### `WARNING` (src/commands/doctor-device-pairing.ts:528)

> about legacy devices/*.json files the startup SQLite import has not archived. */

### `WARNING` (src/commands/doctor-heartbeat-session-target.ts:56)

> only — repair would mean rewriting the config, which is the

### `RULE` (src/commands/doctor-service-repair-policy.ts:1)

> wrapper for doctor repairs to services managed by external supervisors. */

### `WARNING` (src/config/group-policy.ts:77)

> state spans fresh config snapshots; bounding it means evicted legacy keys can re-warn.

### `WARNING` (src/config/io.state.ts:6)

> state spans fresh config snapshots; bounding it means evicted paths can re-warn.

### `WARNING` (src/config/io.state.ts:14)

> state spans fresh config snapshots; bounding it means evicted versions can re-warn.

### `WARNING` (src/config/io.write.ts:387)

> only after final guards pass, with no later await before rename.

### `WARNING` (src/config/plugin-auto-enable.channels.test.ts:289)

> was logged for the oversized catalog.

### `WARNING` (src/config/runtime-group-policy.ts:95)

> -once keys accumulate per provider/account for the process lifetime;

### `RULE` (src/config/types.tools.ts:21)

> applied when match criteria select this scope rule. */

### `RULE` (src/infra/device-pairing.types.ts:52)

> approval and the only prune-eligible kind: local clients re-pair

### `WARNING` (src/infra/exec-approvals-denylist.ts:262)

> line surfaced with approval prompts for denylist screening hits. */

### `WARNING` (src/infra/heartbeat-cooldown.ts:83)

> log when this fires.

### `RULE` (src/infra/push-apns.relay.ts:173)

> before commit; decoding must survive later environment changes.

### `INVARIANT` (src/infra/restart-stale-pids.ts:175)

> `current > 0` is established above and preserved by `current =

### `WARNING` (src/logging/test-helpers/warn-log-capture.ts:1)

> log capture helpers collect warning output during tests.

### `RULE` (src/plugins/channel-presence-policy.ts:49)

> evaluation row for one configured channel signal. */

### `DEPRECATED` (src/plugins/hook-types.ts:1289)

> compatibility alias for gateway_stop.

### `WARNING` (src/plugins/install-persistence.ts:322)

> when a newly installed npm plugin is shadowed by an explicit config source.

### `WARNING` (src/plugins/install-source-info.ts:7)

> emitted while describing plugin package install source metadata. */

### `RULE` (src/plugins/plugin-api.types.ts:368)

> id in `contracts.trustedToolPolicies`.

### `DEPRECATED` (src/plugins/plugin-command.types.ts:22)

> transcript locator for this OpenClaw session when available.

### `DEPRECATED` (src/plugins/plugin-command.types.ts:68)

> transcript locator for the active OpenClaw session when available.

### `DEPRECATED` (src/plugins/web-provider-public-artifacts.ts:37)

> shipped compat marker: old allowlist configs used this to keep

### `SAFETY` (src/wizard/setup.gateway-config.ts:186)

> + constraints:

## 🟡 Medium Priority

### `TODO` (src/auto-reply/heartbeat.ts:91)

> " or "#hashtag" which might be content

### `FIXME` (src/auto-reply/reply/dispatch-from-config.base.test-utils.ts:1412)

> it would force-fail the first turn's fresh recovery operation here.

### `FIXME` (src/auto-reply/reply/dispatch-from-config.base.test-utils.ts:1503)

> it would force-fail the first turn's fresh recovery operation here.

### `FIXME` (src/auto-reply/reply/typing-persistence.test.ts:39)

> The typing loop should NOT call onReplyStart again

### `TODO` (src/channels/streaming.ts:196)

> (remove): normalizes the pre-2026.7.2 string plan-step wire shape to

### `FIXME` (src/commands/sessions.acp-model-display.test.ts:20)

> summary: For ACP-keyed sessions (e.g. `agent:copilot:acp:<uuid>`), the

### `FIXME` (src/commands/sessions.kind-classification.test.ts:14)

> summary: `classifySessionKey` (defined twice — `src/commands/sessions.ts:136-152`

## 🟢 Low Priority

### `NOTE` (src/agents/agent-tools.read.ts:50)

> (steipete): Upstream read now does file-magic MIME detection; we keep the wrapper

### `NOTE` (src/agents/agent-tools.ts:1239)

> Keep canonical (lowercase) tool names here.

### `NOTE` (src/agents/bash-tools.exec-runtime.ts:705)

> opts.onUpdate() is provided by agent runtime's agent-loop and

### `NOTE` (src/agents/bash-tools.exec-runtime.ts:736)

> PTY chunking is arbitrary, but smkx/rmkx sequences are typically short (4-5 bytes)

### `NOTE` (src/agents/compaction-planning.ts:397)

> We don't have the actual orphaned messages to add to droppedMessagesList

### `NOTE` (src/agents/embedded-agent-runner/model.test.ts:1383)

> deliberately omit input to simulate buggy/custom catalogs.

### `NOTE` (src/agents/embedded-agent-utils.ts:192)

> Underscore markdown cannot span multiple lines on Telegram, so we wrap

### `NOTE` (src/agents/usage.ts:354)

> SessionEntry.totalTokens is used as a prompt/context snapshot.

### `NOTE` (src/auto-reply/heartbeat.ts:68)

> A missing file returns false (not effectively empty) so the LLM can still

### `NOTE` (src/auto-reply/media-note.ts:172)

> Only trust MIME type from per-entry types array, not fallback ctx.MediaType

### `NOTE` (src/auto-reply/reply/dispatch-from-config.ts:757)

> Only called when shouldRouteToOriginating is true, so

### `NOTE` (src/commands/doctor-memory-search.ts:753)

> a transport timeout also sets checked: false, but skipped stays

### `NOTE` (src/commands/sessions.acp-model-display.test.ts:44)

> ON DRIVING SURFACE: `resolveSessionDisplayModelRef` is exported, but

### `NOTE` (src/commands/sessions.acp-runtime-metadata.test.ts:152)

> the exact id ("acpx" vs another label) is a design choice for

### `NOTE` (src/commands/sessions.kind-classification.test.ts:31)

> ON DUPLICATION: the same logic lives in two places —

### `NOTE` (src/commands/sessions.kind-classification.test.ts:37)

> ON SURFACE: `classifySessionKey` is private to each file (not exported),

### `NOTE` (src/commands/sessions.ts:90)

> Will be replaced by a shared `applyAcpModelOverlay` helper from

### `NOTE` (src/config/config.tools-alsoAllow.test.ts:5)

> These tests ensure allow + alsoAllow cannot be set in the same scope.

### `NOTE` (src/config/includes.test.ts:656)

> Upward traversal from nested configs is restricted for security.

### `NOTE` (src/config/json5-comments.test.ts:22)

> */ and // text', escaped: "say \\"//\\"" }`,

### `NOTE` (src/config/redact-snapshot.ts:783)

> If the user removed an item in the middle of the array,

### `NOTE` (src/config/redact-snapshot.ts:868)

> If the user removed an item in the middle of the array,

### `NOTE` (src/config/types.base.ts:154)

> some consumers match against a normalized key (for example, stripping `agent:<id>:`).

### `NOTE` (src/config/types.googlechat.ts:58)

> Reaction mode requires user OAuth (not supported with service account auth).

### `NOTE` (src/config/types.messages.ts:59)

> the index signature includes `undefined` so `strategy?: ...` remains type-safe.

### `NOTE` (src/config/types.telegram.ts:99)

> Some Telegram clients (Web, Desktop, older mobile) do NOT support

### `NOTE` (src/infra/exec-safe-bin-policy-validator.ts:29)

> we still harden execution-time expansion separately.

### `NOTE` (src/infra/unhandled-rejections.ts:364)

> ENOSPC is a general POSIX error code (disk full, write failures, etc.).

### `NOTE` (src/plugins/command-registration.ts:103)

> trimmed is already lowercased, so no need for /i flag

### `NOTE` (src/plugins/commands.ts:51)

> If a command has `acceptsArgs: false` and the user provides arguments,

### `NOTE` (src/plugins/commands.ts:211)

> Plugin authors should still validate and sanitize ctx.args for their

### `NOTE` (src/plugins/provider-replay-helpers.ts:114)

> "sonnet-4" is safe — legacy "claude-3-5-sonnet" does not contain "sonnet-4"
