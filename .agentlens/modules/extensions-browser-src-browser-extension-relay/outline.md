# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/browser/src/browser/extension-relay/relay-bridge.test.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | class | FakeSocket | (private) |
| 28 | fn | wireExtension | (private) |
| 49 | fn | replyFor | (private) |
| 66 | fn | sendHello | (private) |
| 78 | fn | defaultTabs | (private) |
| 82 | fn | flush | (private) |

## extensions/browser/src/browser/extension-relay/relay-bridge.ts (967 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | BridgeSocket | (private) |
| 44 | type | CdpRequest | (private) |
| 51 | type | PendingExtensionCommand | (private) |
| 57 | type | TabState | (private) |
| 64 | type | CdpClientState | (private) |
| 71 | type | AuxiliaryTabSession | (private) |
| 78 | type | ExtensionIdentity | (private) |
| 84 | fn | toErrorPayload | (private) |
| 98 | class | ExtensionRelayBridge | pub |
| 162 | fn | onMessage | (private) |
| 189 | fn | onClose | (private) |
| 397 | fn | attaching | (private) |
| 567 | fn | onMessage | (private) |
| 589 | fn | onClose | (private) |
