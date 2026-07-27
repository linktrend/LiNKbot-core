// Linkbrain plugin entrypoint — default-disabled private Brain adapter.
import {
  definePluginEntry,
  type OpenClawPluginApi,
  type OpenClawPluginService,
} from "./runtime-api.js";
import { createLinkbrainCapture } from "./src/capture.js";
import { linkbrainConfigSchema, parseLinkbrainConfig } from "./src/config.js";
import {
  createLinkbrainLifecycle,
  LINKBRAIN_CONVERSATION_HOOKS,
  type LinkbrainLifecycle,
} from "./src/lifecycle.js";
import {
  LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT,
  LINKBRAIN_PLUGIN_ID,
} from "./src/namespaces.js";
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
    "Private Brain adapter with durable keyed-store outbox and lifecycle capture. Default-disabled; fake-only until gates.",
  configSchema: linkbrainConfigSchema,
  register(api: OpenClawPluginApi) {
    const config = parseLinkbrainConfig(api.pluginConfig);
    let runtime: LinkbrainRuntime | null = null;
    let lifecycle: LinkbrainLifecycle | null = null;

    // Conversation-bearing hooks (agent_end) require:
    // plugins.entries.linkbrain.hooks.allowConversationAccess=true
    api.logger.info(
      `linkbrain: registered (default-disabled). Phase 3 hooks include conversation-bearing ${LINKBRAIN_CONVERSATION_HOOKS.join(",")}; require ${LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT}`,
    );

    const service: OpenClawPluginService = {
      id: "linkbrain-outbox",
      start: async () => {
        const stores = openLinkbrainStoresFromApi(api, config.outboxMaxEntries);
        runtime = createLinkbrainRuntime({
          config,
          stores,
          transport: createBrainFakeTransport({
            callTool: () => ({
              ok: false,
              error: {
                code: "not_configured",
                safeMessage: "linkbrain remote transport not configured (Phase 3; use fake in tests)",
              },
            }),
          }),
          withLease: (options, run) => api.runtime.state.withLease(options, run),
        });
        await runtime.open();
        const capture = createLinkbrainCapture({
          config,
          stores,
          runtime,
        });
        lifecycle = createLinkbrainLifecycle({
          config,
          runtime,
          capture,
          logger: api.logger,
        });
        api.logger.info(
          `linkbrain: state open (namespaces=${stores.openedNamespaces.join(",")}; captureEnqueue=${config.captureEnqueue}; captureDrain=${config.captureDrain}; coordinationWrites=${config.coordinationWrites})`,
        );
      },
      stop: async () => {
        if (lifecycle) {
          await lifecycle.handleGatewayStop();
          lifecycle = null;
        }
        if (runtime) {
          await runtime.shutdown();
          runtime = null;
        }
      },
    };

    api.registerService(service);

    const getLifecycle = (): LinkbrainLifecycle | null => lifecycle;

    // Bounded timeouts are plugin-local AbortController bounds in handlers;
    // host timeoutMs is an upper bound only and does not cancel underlying work alone.
    const hookOpts = { timeoutMs: 3_000 } as const;

    api.on("session_start", async (event) => {
      await getLifecycle()?.handleSessionStart(event);
    }, hookOpts);

    api.on("message_received", async (event) => {
      await getLifecycle()?.handleMessageReceived(event);
    }, hookOpts);

    api.on(
      "agent_end",
      async (event, ctx) => {
        await getLifecycle()?.handleAgentEnd(event, ctx);
      },
      hookOpts,
    );

    api.on(
      "before_compaction",
      async (_event, ctx) => {
        await getLifecycle()?.handleBeforeCompaction(ctx);
      },
      hookOpts,
    );

    api.on(
      "after_compaction",
      async (event, ctx) => {
        await getLifecycle()?.handleAfterCompaction(event, ctx);
      },
      hookOpts,
    );

    api.on(
      "before_reset",
      async (_event, ctx) => {
        await getLifecycle()?.handleBeforeReset(ctx);
      },
      hookOpts,
    );

    api.on("session_end", async (event) => {
      await getLifecycle()?.handleSessionEnd(event);
    }, hookOpts);

    api.on("gateway_start", async () => {
      await getLifecycle()?.handleGatewayStart();
    }, hookOpts);

    api.on("gateway_stop", async () => {
      await getLifecycle()?.handleGatewayStop();
    }, hookOpts);

    api.on("subagent_spawned", async (event) => {
      await getLifecycle()?.handleSubagentSpawned(event);
    }, hookOpts);

    api.on("subagent_ended", async (event) => {
      await getLifecycle()?.handleSubagentEnded(event);
    }, hookOpts);
  },
});
