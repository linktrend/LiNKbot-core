// Linkskills plugin entrypoint — default-disabled private Skills adapter.
// Never registers conversation/prompt/message-bearing hooks.
import {
  definePluginEntry,
  type OpenClawPluginApi,
  type OpenClawPluginService,
} from "./runtime-api.js";
import { linkskillsConfigSchema, parseLinkskillsConfig } from "./src/config.js";
import { LINKSKILLS_CONVERSATION_HOOK_POLICY, LINKSKILLS_PLUGIN_ID } from "./src/namespaces.js";
import { createLinkskillsRuntime, type LinkskillsRuntime } from "./src/runtime.js";
import { openLinkskillsStoresFromApi } from "./src/stores.js";
import { resolveLinkskillsTransport } from "./src/transport.js";

export default definePluginEntry({
  id: LINKSKILLS_PLUGIN_ID,
  name: "LiNKskills",
  description:
    "Private Skills adapter with durable keyed-store telemetry outbox. Default-disabled; no conversation hooks; transportMode defaults to disabled.",
  configSchema: linkskillsConfigSchema,
  register(api: OpenClawPluginApi) {
    const config = parseLinkskillsConfig(api.pluginConfig);
    let runtime: LinkskillsRuntime | null = null;

    api.logger.info(
      `linkskills: registered (default-disabled plugin). ${LINKSKILLS_CONVERSATION_HOOK_POLICY}`,
    );

    const service: OpenClawPluginService = {
      id: "linkskills-outbox",
      start: async () => {
        const stores = openLinkskillsStoresFromApi(api, config.outboxMaxEntries);
        const transport = resolveLinkskillsTransport({ api, config });
        runtime = createLinkskillsRuntime({
          config,
          stores,
          transport,
          withLease: (options, run) => api.runtime.state.withLease(options, run),
        });
        await runtime.open();
        api.logger.info(
          `linkskills: state open (namespaces=${stores.openedNamespaces.join(",")}; transportMode=${config.transportMode}; telemetryEnqueue=${config.telemetryEnqueue}; telemetryDrain=${config.telemetryDrain})`,
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
      api.logger.info("linkskills: gateway_start observed");
    });

    api.on("gateway_stop", async () => {
      api.logger.info("linkskills: gateway_stop observed");
    });
  },
});
