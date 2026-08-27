# Module: extensions/whatsapp

[← Back to INDEX](../../INDEX.md)

**Type:** js/ts | **Files:** 198

**Entry point:** `extensions/whatsapp/index.ts`

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/whatsapp/action-runtime-api.ts` | 2 |  |
| `extensions/whatsapp/action-runtime.runtime.ts` | 2 |  |
| `extensions/whatsapp/api.ts` | 72 |  |
| `extensions/whatsapp/auth-presence.ts` | 81 |  |
| `extensions/whatsapp/call-tool-api.ts` | 2 |  |
| `extensions/whatsapp/channel-config-api.ts` | 2 |  |
| `extensions/whatsapp/channel-plugin-api.ts` | 3 |  |
| `extensions/whatsapp/config-api.ts` | 3 |  |
| `extensions/whatsapp/contract-api.ts` | 22 |  |
| `extensions/whatsapp/directory-contract-api.ts` | 15 |  |
| `extensions/whatsapp/doctor-contract-api.ts` | 2 |  |
| `extensions/whatsapp/index.test.ts` | 22 |  |
| `extensions/whatsapp/index.ts` | 33 |  |
| `extensions/whatsapp/legacy-session-surface-api.ts` | 7 |  |
| `extensions/whatsapp/legacy-state-migrations-api.ts` | 2 |  |
| `extensions/whatsapp/light-runtime-api.ts` | 14 |  |
| `extensions/whatsapp/login-qr-api.ts` | 2 |  |
| `extensions/whatsapp/login-qr-runtime.ts` | 20 |  |
| `extensions/whatsapp/outbound-payload-test-api.ts` | 2 |  |
| `extensions/whatsapp/runtime-api.ts` | 89 |  |
| `extensions/whatsapp/runtime-setter-api.ts` | 3 |  |
| `extensions/whatsapp/secret-contract-api.ts` | 4 |  |
| `extensions/whatsapp/security-contract-api.ts` | 5 |  |
| `extensions/whatsapp/setup-entry.test.ts` | 76 |  |
| `extensions/whatsapp/setup-entry.ts` | 22 |  |
| `extensions/whatsapp/setup-plugin-api.ts` | 3 |  |
| `extensions/whatsapp/src/account-config.ts` | 69 |  |
| `extensions/whatsapp/src/account-ids.ts` | 18 |  |
| `extensions/whatsapp/src/account-types.ts` | 6 |  |
| `extensions/whatsapp/src/accounts.test.ts` | 202 |  |
| `extensions/whatsapp/src/accounts.ts` | 173 |  |
| `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts` | 94 |  |
| `extensions/whatsapp/src/action-runtime-target-auth.ts` | 28 |  |
| `extensions/whatsapp/src/action-runtime.test.ts` | 323 |  |
| `extensions/whatsapp/src/action-runtime.ts` | 77 |  |
| `extensions/whatsapp/src/active-listener.test.ts` | 70 |  |
| `extensions/whatsapp/src/active-listener.ts` | 18 |  |
| `extensions/whatsapp/src/agent-tools-call.test.ts` | 354 |  |
| `extensions/whatsapp/src/agent-tools-call.ts` | 346 |  |
| `extensions/whatsapp/src/agent-tools-login.test.ts` | 115 |  |
| `extensions/whatsapp/src/agent-tools-login.ts` | 107 |  |
| `extensions/whatsapp/src/approval-auth.test.ts` | 62 |  |
| `extensions/whatsapp/src/approval-auth.ts` | 30 |  |
| `extensions/whatsapp/src/approval-handler.runtime.test.ts` | 186 |  |
| `extensions/whatsapp/src/approval-handler.runtime.ts` | 174 |  |
| `extensions/whatsapp/src/approval-native.test.ts` | 557 | 📊 |
| `extensions/whatsapp/src/approval-native.ts` | 292 |  |
| `extensions/whatsapp/src/approval-reactions.test.ts` | 485 |  |
| `extensions/whatsapp/src/approval-reactions.ts` | 655 | 📊 |
| `extensions/whatsapp/src/approval-resolver.test.ts` | 46 |  |
| `extensions/whatsapp/src/approval-resolver.ts` | 29 |  |
| `extensions/whatsapp/src/auth-store.lazy-dir.test.ts` | 57 |  |
| `extensions/whatsapp/src/auth-store.runtime.ts` | 2 |  |
| `extensions/whatsapp/src/auth-store.test.ts` | 479 |  |
| `extensions/whatsapp/src/auth-store.ts` | 512 | 📊 |
| `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts` | 257 |  |
| `extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts` | 82 |  |
| `extensions/whatsapp/src/auto-reply.impl.ts` | 7 |  |
| `extensions/whatsapp/src/auto-reply.test-harness.ts` | 490 |  |
| `extensions/whatsapp/src/auto-reply.ts` | 2 |  |
| `extensions/whatsapp/src/auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts` | 382 |  |
| `extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts` | 1335 | 📊 |
| `extensions/whatsapp/src/auto-reply.web-auto-reply.last-route.test.ts` | 257 |  |
| `extensions/whatsapp/src/channel-actions.runtime.ts` | 8 |  |
| `extensions/whatsapp/src/channel-actions.test.ts` | 224 |  |
| `extensions/whatsapp/src/channel-actions.ts` | 86 |  |
| `extensions/whatsapp/src/channel-outbound.test.ts` | 537 | 📊 |
| `extensions/whatsapp/src/channel-outbound.ts` | 131 |  |
| `extensions/whatsapp/src/channel-react-action.runtime.ts` | 11 |  |
| `extensions/whatsapp/src/channel-react-action.test.ts` | 594 | 📊 |
| `extensions/whatsapp/src/channel-react-action.ts` | 243 |  |
| `extensions/whatsapp/src/channel-runtime-loader.test.ts` | 72 |  |
| `extensions/whatsapp/src/channel-runtime-loader.ts` | 16 |  |
| `extensions/whatsapp/src/channel.acp-bindings.test.ts` | 104 |  |
| `extensions/whatsapp/src/channel.runtime.ts` | 118 |  |
| `extensions/whatsapp/src/channel.setup.test.ts` | 515 | 📊 |
| `extensions/whatsapp/src/channel.setup.ts` | 27 |  |
| `extensions/whatsapp/src/channel.ts` | 374 |  |
| `extensions/whatsapp/src/command-policy.ts` | 8 |  |
| `extensions/whatsapp/src/config-accessors.test.ts` | 35 |  |
| `extensions/whatsapp/src/config-accessors.ts` | 23 |  |
| `extensions/whatsapp/src/config-schema.test.ts` | 130 |  |
| `extensions/whatsapp/src/config-schema.ts` | 7 |  |
| `extensions/whatsapp/src/config-ui-hints.ts` | 34 |  |
| `extensions/whatsapp/src/connection-controller-runtime-context.ts` | 38 |  |
| `extensions/whatsapp/src/connection-controller.test.ts` | 1105 | 📊 |
| `extensions/whatsapp/src/connection-controller.ts` | 1117 | 📊 |
| `extensions/whatsapp/src/connection-owner.test.ts` | 95 |  |
| `extensions/whatsapp/src/connection-owner.ts` | 216 |  |
| `extensions/whatsapp/src/creds-files.ts` | 104 |  |
| `extensions/whatsapp/src/creds-persistence.test.ts` | 26 |  |
| `extensions/whatsapp/src/creds-persistence.ts` | 88 |  |
| `extensions/whatsapp/src/directory-config.test.ts` | 336 |  |
| `extensions/whatsapp/src/directory-config.ts` | 341 |  |
| `extensions/whatsapp/src/directory-contract.test.ts` | 57 |  |
| `extensions/whatsapp/src/doctor-contract.test.ts` | 120 |  |
| `extensions/whatsapp/src/doctor-contract.ts` | 170 |  |
| `extensions/whatsapp/src/doctor.test.ts` | 75 |  |
| `extensions/whatsapp/src/doctor.ts` | 57 |  |
| `extensions/whatsapp/src/document-filename.test.ts` | 53 |  |
| `extensions/whatsapp/src/document-filename.ts` | 31 |  |
| `extensions/whatsapp/src/group-config-path.ts` | 99 |  |
| `extensions/whatsapp/src/group-intro.ts` | 21 |  |
| `extensions/whatsapp/src/group-policy.test.ts` | 98 |  |
| `extensions/whatsapp/src/group-policy.ts` | 40 |  |
| `extensions/whatsapp/src/group-session-contract.ts` | 21 |  |
| `extensions/whatsapp/src/group-session-key.test.ts` | 57 |  |
| `extensions/whatsapp/src/group-session-key.ts` | 48 |  |
| `extensions/whatsapp/src/heartbeat.ts` | 35 |  |
| `extensions/whatsapp/src/identity.ts` | 176 |  |
| `extensions/whatsapp/src/image-preview.ts` | 49 |  |
| `extensions/whatsapp/src/inbound-context.contract.test.ts` | 33 |  |
| `extensions/whatsapp/src/inbound-policy.ts` | 210 |  |
| `extensions/whatsapp/src/inbound.media.test.ts` | 452 |  |
| `extensions/whatsapp/src/inbound.test.ts` | 332 |  |
| `extensions/whatsapp/src/inbound.ts` | 17 |  |
| `extensions/whatsapp/src/login-qr.test.ts` | 741 | 📊 |
| `extensions/whatsapp/src/login-qr.ts` | 598 | 📊 |
| `extensions/whatsapp/src/login.coverage.test.ts` | 215 |  |
| `extensions/whatsapp/src/login.test.ts` | 143 |  |
| `extensions/whatsapp/src/login.ts` | 160 |  |
| `extensions/whatsapp/src/logout.test.ts` | 163 |  |
| `extensions/whatsapp/src/media.test.ts` | 457 |  |
| `extensions/whatsapp/src/media.ts` | 11 |  |
| `extensions/whatsapp/src/monitor-inbox.allows-messages-from-senders-allowfrom-list.test-support.ts` | 478 |  |
| `extensions/whatsapp/src/monitor-inbox.append-upsert.test-support.ts` | 283 |  |
| `extensions/whatsapp/src/monitor-inbox.behavior.test.ts` | 6 |  |
| `extensions/whatsapp/src/monitor-inbox.blocks-messages-from-unauthorized-senders-not-allowfrom.test-support.ts` | 430 |  |
| `extensions/whatsapp/src/monitor-inbox.captures-media-path-image-messages.test-support.ts` | 364 |  |
| `extensions/whatsapp/src/monitor-inbox.streams-inbound-messages.test-support.ts` | 2065 | 📊 |
| `extensions/whatsapp/src/monitor-inbox.test-harness.ts` | 418 |  |
| `extensions/whatsapp/src/normalize-target.ts` | 148 |  |
| `extensions/whatsapp/src/normalize.ts` | 9 |  |
| `extensions/whatsapp/src/outbound-adapter.poll.test.ts` | 63 |  |
| `extensions/whatsapp/src/outbound-adapter.sendpayload.test.ts` | 214 |  |
| `extensions/whatsapp/src/outbound-adapter.ts` | 31 |  |
| `extensions/whatsapp/src/outbound-base.test.ts` | 673 | 📊 |
| `extensions/whatsapp/src/outbound-base.ts` | 271 |  |
| `extensions/whatsapp/src/outbound-media-contract.ts` | 227 |  |
| `extensions/whatsapp/src/outbound-payload.contract.test.ts` | 217 |  |
| `extensions/whatsapp/src/outbound-retry.test.ts` | 121 |  |
| `extensions/whatsapp/src/outbound-retry.ts` | 83 |  |
| `extensions/whatsapp/src/outbound-send-deps.ts` | 2 |  |
| `extensions/whatsapp/src/outbound-test-support.ts` | 17 |  |
| `extensions/whatsapp/src/pairing-security.test-harness.ts` | 60 |  |
| `extensions/whatsapp/src/qa-driver.runtime.test.ts` | 856 | 📊 |
| `extensions/whatsapp/src/qa-driver.runtime.ts` | 580 | 📊 |
| `extensions/whatsapp/src/qr-image.ts` | 2 |  |
| `extensions/whatsapp/src/qr-terminal.ts` | 2 |  |
| `extensions/whatsapp/src/question-reactions.test.ts` | 119 |  |
| `extensions/whatsapp/src/question-reactions.ts` | 193 |  |
| `extensions/whatsapp/src/quoted-message.test.ts` | 119 |  |
| `extensions/whatsapp/src/quoted-message.ts` | 185 |  |
| `extensions/whatsapp/src/reaction-level.test.ts` | 95 |  |
| `extensions/whatsapp/src/reaction-level.ts` | 23 |  |
| `extensions/whatsapp/src/reconnect.test.ts` | 51 |  |
| `extensions/whatsapp/src/reconnect.ts` | 56 |  |
| `extensions/whatsapp/src/resolve-outbound-target.test.ts` | 289 |  |
| `extensions/whatsapp/src/resolve-outbound-target.ts` | 56 |  |
| `extensions/whatsapp/src/resolve-target.test.ts` | 159 |  |
| `extensions/whatsapp/src/runtime-api.ts` | 53 |  |
| `extensions/whatsapp/src/runtime-group-policy.ts` | 17 |  |
| `extensions/whatsapp/src/runtime.test.ts` | 23 |  |
| `extensions/whatsapp/src/runtime.ts` | 35 |  |
| `extensions/whatsapp/src/security-contract.ts` | 48 |  |
| `extensions/whatsapp/src/security-fix.ts` | 73 |  |
| `extensions/whatsapp/src/send.delivery-recovery.test.ts` | 126 |  |
| `extensions/whatsapp/src/send.test.ts` | 856 | 📊 |
| `extensions/whatsapp/src/send.ts` | 388 |  |
| `extensions/whatsapp/src/session-contract.test.ts` | 32 |  |
| `extensions/whatsapp/src/session-contract.ts` | 44 |  |
| `extensions/whatsapp/src/session-errors.ts` | 128 |  |
| `extensions/whatsapp/src/session-route.test.ts` | 62 |  |
| `extensions/whatsapp/src/session-route.ts` | 44 |  |
| `extensions/whatsapp/src/session.runtime.ts` | 16 |  |
| `extensions/whatsapp/src/session.test.ts` | 1071 | 📊 |
| `extensions/whatsapp/src/session.ts` | 600 | 📊 |
| `extensions/whatsapp/src/setup-core.ts` | 53 |  |
| `extensions/whatsapp/src/setup-finalize.ts` | 488 |  |
| `extensions/whatsapp/src/setup-surface.test.ts` | 449 |  |
| `extensions/whatsapp/src/setup-surface.ts` | 72 |  |
| `extensions/whatsapp/src/setup-test-helpers.ts` | 218 |  |
| `extensions/whatsapp/src/shared.ts` | 251 |  |
| `extensions/whatsapp/src/socket-close.test.ts` | 96 |  |
| `extensions/whatsapp/src/socket-close.ts` | 80 |  |
| `extensions/whatsapp/src/socket-timing.test.ts` | 168 |  |
| `extensions/whatsapp/src/socket-timing.ts` | 155 |  |
| `extensions/whatsapp/src/state-migrations.ts` | 48 |  |
| `extensions/whatsapp/src/status-issues.test.ts` | 153 |  |
| `extensions/whatsapp/src/status-issues.ts` | 164 |  |
| `extensions/whatsapp/src/system-prompt.test.ts` | 167 |  |
| `extensions/whatsapp/src/system-prompt.ts` | 32 |  |
| `extensions/whatsapp/src/targets-runtime.ts` | 328 |  |
| `extensions/whatsapp/src/test-helpers.ts` | 736 | 📊 |
| `extensions/whatsapp/src/text-runtime.test.ts` | 255 |  |
| `extensions/whatsapp/src/text-runtime.ts` | 20 |  |
| `extensions/whatsapp/src/vcard.ts` | 85 |  |
| `extensions/whatsapp/test-api.ts` | 3 |  |

## Child Modules

- [extensions-whatsapp-src-auto-reply](../extensions-whatsapp-src-auto-reply/MODULE.md)
- [extensions-whatsapp-src-inbound](../extensions-whatsapp-src-inbound/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies
