// Linkbrain plugin entrypoint — default-disabled private Brain adapter.
import {
  definePluginEntry,
  type OpenClawPluginApi,
  type OpenClawPluginService,
} from "./runtime-api.js";
import { linkbrainConfigSchema, parseLinkbrainConfig } from "./src/config.js";
import { LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT, LINKBRAIN_PLUGIN_ID } from "./src/namespaces.js";
import {
  createBrainFakeTransport,
  createLinkbrainRuntime,
  type LinkbrainRuntime,
} from "./src/runtime.js";
import { openLinkbrainStoresFromApi } from "./src/stores.js";

export default definePluginEntry({
  id: LINKBRAIN_PLUGIN_ID,
  name: "LiNKbrain",
  description:
    "Private Brain adapter with durable keyed-store outbox. Default-disabled; fake-only until gates.",
  configSchema: linkbrainConfigSchema,
  register(api: OpenClawPluginApi) {
    const config = parseLinkbrainConfig(api.pluginConfig);
    let runtime: LinkbrainRuntime | null = null;

    // Phase 2 registers gateway lifecycle only for state open/close.
    // Conversation-bearing hooks wait for Phase 3 and require:
    //   plugins.entries.linkbrain.hooks.allowConversationAccess=true
    api.logger.info(
      `linkbrain: registered (default-disabled plugin). Conversation hooks deferred; when enabled require ${LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT}`,
    );

    const service: OpenClawPluginService = {
      id: "linkbrain-outbox",
      start: async () => {
        // Activation is gated by enabledByDefault=false + onStartup=false.
        // When an operator enables the plugin and this service starts, open stores.
        const stores = openLinkbrainStoresFromApi(api, config.outboxMaxEntries);
        // Transport stays unset until Phase 5 MCP/auth; tests inject a fake via api.
        // Skeleton opens state and records idle health only — no live remote I/O.
        runtime = createLinkbrainRuntime({
          config,
          stores,
          transport: createBrainFakeTransport({
            callTool: () => ({
              ok: false,
              error: {
                code: "not_configured",
                safeMessage: "linkbrain remote transport not configured (Phase 2 skeleton)",
              },
            }),
          }),
          withLease: (options, run) => api.runtime.state.withLease(options, run),
        });
        await runtime.open();
        api.logger.info(
          `linkbrain: state open (namespaces=${stores.openedNamespaces.join(",")}; captureEnqueue=${config.captureEnqueue}; captureDrain=${config.captureDrain})`,
        );
      },
      stop: async () => {
        if (runtime) {
          await runtime.shutdown();
          runtime = null;
        }
      },
    };

    api.registerService(service);

    api.on("gateway_start", async () => {
      // Service start already opens state; hook kept as a lifecycle marker for Phase 3+.
      api.logger.info("linkbrain: gateway_start observed");
    });

    api.on("gateway_stop", async () => {
      api.logger.info("linkbrain: gateway_stop observed");
    });
  },
});
