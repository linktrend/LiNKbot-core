# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/channels/plugins/contracts/test-helpers/channel-plugin-catalog-contract-suites.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | createCatalogEntry | (private) |
| 37 | fn | writeCatalogFile | (private) |
| 46 | fn | writeDiscoveredChannelPlugin | (private) |
| 86 | fn | expectCatalogIdsContain | (private) |
| 98 | fn | findCatalogEntry | (private) |
| 109 | fn | expectCatalogEntryMatch | (private) |
| 125 | fn | describeChannelPluginCatalogEntriesContract | pub |
| 483 | fn | describeChannelPluginCatalogPathResolutionContract | pub |

## src/channels/plugins/contracts/test-helpers/registry-session-binding.ts (591 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | SessionBindingContractEntry | (private) |
| 44 | fn | createContractChannelConversationBindingManager | (private) |
| 65 | fn | getContractApi | (private) |
| 75 | fn | expectResolvedSessionBinding | (private) |
| 94 | fn | unbindAndExpectClearedSessionBinding | (private) |
| 104 | fn | expectClearedSessionBinding | (private) |
| 118 | fn | resetMatrixSessionBindingStateDir | (private) |
| 124 | fn | createContractMatrixThreadBindingManager | (private) |
| 149 | type | ChannelConversationBindingManagerFactory | (private) |
| 153 | type | DiscordContractApi | (private) |
| 165 | type | FeishuContractApi | (private) |
| 175 | type | IMessageContractApi | (private) |
| 182 | type | MatrixContractApi | (private) |
| 195 | type | TelegramContractApi | (private) |
| 204 | fn | setRegistryBackedConversationBindingPlugin | (private) |
| 237 | fn | prepareDiscordSessionBindingContract | (private) |
| 242 | fn | prepareFeishuSessionBindingContract | (private) |
| 247 | fn | prepareIMessageSessionBindingContract | (private) |
| 256 | fn | prepareMatrixSessionBindingContract | (private) |
| 261 | fn | prepareTelegramSessionBindingContract | (private) |
| 586 | fn | getSessionBindingContractRegistry | pub |
