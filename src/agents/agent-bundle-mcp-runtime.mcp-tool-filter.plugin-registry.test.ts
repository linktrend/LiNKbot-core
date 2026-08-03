/**
 * Integration: real linkbrain/linkskills registerMcpServerToolFilter overlays
 * must bound gateway/embedded main-agent catalogs under the operator ceiling.
 * Covers ensureRuntimePluginsLoaded reuse, pin gap-fill, generation invalidation,
 * and fail-closed ambiguous live claims.
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { loadOpenClawPlugins } from "../plugins/loader.js";
import { getMcpToolFilterRegistrationGeneration } from "../plugins/mcp-tool-filter-registration.js";
import { createEmptyPluginRegistry } from "../plugins/registry-empty.js";
import {
  getActivePluginRegistry,
  pinActivePluginChannelRegistry,
  pinActivePluginHttpRouteRegistry,
  pinActivePluginSessionExtensionRegistry,
  releasePinnedPluginChannelRegistry,
  releasePinnedPluginHttpRouteRegistry,
  releasePinnedPluginSessionExtensionRegistry,
  resetPluginRuntimeStateForTest,
  setActivePluginRegistry,
} from "../plugins/runtime.js";
import { ensureStandaloneRuntimePluginRegistryLoaded } from "../plugins/runtime/standalone-runtime-registry-loader.js";
import { createSessionMcpRuntime } from "./agent-bundle-mcp-runtime.js";
import { writeExecutable } from "./bundle-mcp-shared.test-harness.js";
import {
  resolveMcpToolFilterComposition,
  testing as toolFilterTesting,
} from "./mcp-tool-filter-resolver.js";
import { ensureRuntimePluginsLoaded } from "./runtime-plugins.js";

vi.mock("./embedded-agent-mcp.js", () => ({
  loadEmbeddedAgentMcpConfig: (params: {
    cfg?: { mcp?: { servers?: Record<string, unknown> } };
  }) => ({
    diagnostics: [],
    mcpServers: params.cfg?.mcp?.servers ?? {},
  }),
}));

vi.mock("../plugins/current-plugin-metadata-snapshot.js", () => ({
  getCurrentPluginMetadataSnapshot: () => ({
    startup: { pluginIds: ["linkbrain", "linkskills"] },
  }),
}));

/** Full §9.1 Brain operator ceiling (17). */
const BRAIN_OPERATOR_CEILING = [
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
  "brain_capture_batch",
  "brain_episode_checkpoint",
  "brain_private_search",
  "brain_private_load",
  "brain_task_start",
  "brain_task_update",
  "brain_inbox_read",
  "brain_conflict_respond",
  "brain_message_send",
  "brain_checkpoint_write",
  "brain_handoff_create",
  "brain_handoff_accept",
  "brain_task_close",
] as const;

/** Full §9.2 Skills operator ceiling (15). */
const SKILLS_OPERATOR_CEILING = [
  "skills_list",
  "skills_search",
  "skills_describe",
  "skills_fragment_get",
  "skills_release_get",
  "skills_run_start",
  "skills_run_update",
  "skills_run_complete",
  "skills_run_fail",
  "skills_tool_resolve",
  "skills_tool_invoke",
  "skills_input_validate",
  "skills_output_validate",
  "skills_feedback_submit",
  "skills_trace_candidate_submit",
] as const;

const BRAIN_READ_ONLY = [
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
  "brain_private_search",
  "brain_private_load",
  "brain_inbox_read",
] as const;

const SKILLS_DISCOVERY_ONLY = [
  "skills_list",
  "skills_search",
  "skills_describe",
  "skills_fragment_get",
  "skills_release_get",
] as const;

async function writeListToolsMcpServer(params: {
  filePath: string;
  tools: readonly string[];
}): Promise<void> {
  await writeExecutable(
    params.filePath,
    `#!/usr/bin/env node
const tools = ${JSON.stringify(
      params.tools.map((name) => ({
        name,
        description: name,
        inputSchema: { type: "object", properties: {} },
      })),
    )};
let buffer = "";
function send(message) {
  process.stdout.write(JSON.stringify(message) + "\\n");
}
function handle(message) {
  if (!message || typeof message !== "object") return;
  if (message.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion ?? "2025-03-26",
        capabilities: { tools: {} },
        serverInfo: { name: "test-list-tools", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools } });
  }
}
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  let newline;
  while ((newline = buffer.indexOf("\\n")) >= 0) {
    const line = buffer.slice(0, newline).trim();
    buffer = buffer.slice(newline + 1);
    if (!line) continue;
    handle(JSON.parse(line));
  }
});
`,
  );
}

function buildPluginConfig(params: {
  brain: {
    mcpRead: boolean;
    captureEnqueue: boolean;
    coordinationWrites: boolean;
  };
  skills: {
    mcpDiscoveryRead: boolean;
    governedExecution: boolean;
    telemetryEnqueue: boolean;
  };
}) {
  return {
    plugins: {
      enabled: true,
      allow: ["linkbrain", "linkskills"],
      entries: {
        linkbrain: {
          enabled: true,
          config: {
            transportMode: "disabled",
            mcpRead: params.brain.mcpRead,
            captureEnqueue: params.brain.captureEnqueue,
            captureDrain: false,
            coordinationWrites: params.brain.coordinationWrites,
          },
        },
        linkskills: {
          enabled: true,
          config: {
            transportMode: "disabled",
            mcpDiscoveryRead: params.skills.mcpDiscoveryRead,
            governedExecution: params.skills.governedExecution,
            telemetryEnqueue: params.skills.telemetryEnqueue,
            telemetryDrain: false,
          },
        },
      },
    },
  };
}

function pinGatewaySurfaces(registry: ReturnType<typeof createEmptyPluginRegistry>) {
  pinActivePluginHttpRouteRegistry(registry);
  pinActivePluginChannelRegistry(registry);
  pinActivePluginSessionExtensionRegistry(registry);
}

function releaseGatewayPins() {
  releasePinnedPluginHttpRouteRegistry();
  releasePinnedPluginChannelRegistry();
  releasePinnedPluginSessionExtensionRegistry();
}

describe("managed MCP toolFilter live plugin registry → gateway catalog", () => {
  afterEach(() => {
    toolFilterTesting.reset();
    resetPluginRuntimeStateForTest();
  });

  it("keeps Brain 7 / Skills 5 when active registry is swapped after gateway pin", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-toolfilter-live-plugins-"));
    const brainServerPath = path.join(tempDir, "linkbrain.mjs");
    const skillsServerPath = path.join(tempDir, "linkskills.mjs");
    await writeListToolsMcpServer({
      filePath: brainServerPath,
      tools: BRAIN_OPERATOR_CEILING,
    });
    await writeListToolsMcpServer({
      filePath: skillsServerPath,
      tools: SKILLS_OPERATOR_CEILING,
    });

    const cfg = buildPluginConfig({
      brain: { mcpRead: true, captureEnqueue: false, coordinationWrites: false },
      skills: {
        mcpDiscoveryRead: true,
        governedExecution: false,
        telemetryEnqueue: false,
      },
    });

    try {
      const gatewayRegistry = loadOpenClawPlugins({
        cache: false,
        onlyPluginIds: ["linkbrain", "linkskills"],
        config: cfg as never,
        preferBuiltPluginArtifacts: true,
        runtimeOptions: { allowGatewaySubagentBinding: true },
      });
      expect(
        gatewayRegistry.mcpServerToolFilters.map((e) => e.resolver.serverName).toSorted(),
      ).toEqual(["linkbrain", "linkskills"]);

      // Mirror gateway pin surfaces, then replace active with an empty registry
      // (the observed fail-open: active loses overlays, pins retain them).
      pinGatewaySurfaces(gatewayRegistry);
      setActivePluginRegistry(
        createEmptyPluginRegistry(),
        "empty-after-gateway",
        "gateway-bindable",
      );
      expect(getActivePluginRegistry()?.mcpServerToolFilters).toEqual([]);

      const runtime = createSessionMcpRuntime({
        sessionId: "session-live-plugin-filter",
        workspaceDir: tempDir,
        cfg: {
          mcp: {
            servers: {
              linkbrain: {
                command: process.execPath,
                args: [brainServerPath],
                toolFilter: { include: [...BRAIN_OPERATOR_CEILING] },
              },
              linkskills: {
                command: process.execPath,
                args: [skillsServerPath],
                toolFilter: { include: [...SKILLS_OPERATOR_CEILING] },
              },
            },
          },
        },
      });

      try {
        const catalog = await runtime.getCatalog();
        const brain = catalog.tools
          .filter((t) => t.serverName === "linkbrain")
          .map((t) => t.toolName)
          .toSorted();
        const skills = catalog.tools
          .filter((t) => t.serverName === "linkskills")
          .map((t) => t.toolName)
          .toSorted();
        expect(brain).toEqual([...BRAIN_READ_ONLY].toSorted());
        expect(skills).toEqual([...SKILLS_DISCOVERY_ONLY].toSorted());
        expect(brain).not.toContain("brain_capture_batch");
        expect(skills).not.toContain("skills_run_start");
      } finally {
        await runtime.dispose();
      }
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("loads real registrations, survives ensureRuntimePluginsLoaded, and expands only intended sets", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-toolfilter-live-ensure-"));
    const brainServerPath = path.join(tempDir, "linkbrain.mjs");
    const skillsServerPath = path.join(tempDir, "linkskills.mjs");
    await writeListToolsMcpServer({
      filePath: brainServerPath,
      tools: BRAIN_OPERATOR_CEILING,
    });
    await writeListToolsMcpServer({
      filePath: skillsServerPath,
      tools: SKILLS_OPERATOR_CEILING,
    });

    const readOnlyCfg = buildPluginConfig({
      brain: { mcpRead: true, captureEnqueue: false, coordinationWrites: false },
      skills: {
        mcpDiscoveryRead: true,
        governedExecution: false,
        telemetryEnqueue: false,
      },
    });

    try {
      const gatewayRegistry = loadOpenClawPlugins({
        cache: false,
        onlyPluginIds: ["linkbrain", "linkskills"],
        config: readOnlyCfg as never,
        preferBuiltPluginArtifacts: true,
        preferSetupRuntimeForChannelPlugins: true,
        runtimeOptions: { allowGatewaySubagentBinding: true },
      });
      pinGatewaySurfaces(gatewayRegistry);

      // Same shape as embedded/gateway agent ensure: force-full + startup scope
      // without preferBuilt. Must reuse the wider gateway registry.
      const ensured = ensureStandaloneRuntimePluginRegistryLoaded({
        requiredPluginIds: ["linkbrain", "linkskills"],
        loadOptions: {
          config: readOnlyCfg as never,
          onlyPluginIds: ["linkbrain", "linkskills"],
          forceFullRuntimeForChannelPlugins: true,
          runtimeOptions: { allowGatewaySubagentBinding: true },
        },
      });
      expect(ensured).toBe(gatewayRegistry);
      expect(getActivePluginRegistry()).toBe(gatewayRegistry);
      expect(getActivePluginRegistry()?.mcpServerToolFilters.length).toBeGreaterThanOrEqual(2);

      // Production agent ensure path must also reuse (not replace) the gateway set.
      ensureRuntimePluginsLoaded({
        config: readOnlyCfg as never,
        allowGatewaySubagentBinding: true,
      });
      expect(getActivePluginRegistry()).toBe(gatewayRegistry);

      const mkRuntime = (label: string) =>
        createSessionMcpRuntime({
          sessionId: `session-live-ensure-${label}`,
          workspaceDir: tempDir,
          cfg: {
            mcp: {
              servers: {
                linkbrain: {
                  command: process.execPath,
                  args: [brainServerPath],
                  toolFilter: { include: [...BRAIN_OPERATOR_CEILING] },
                },
                linkskills: {
                  command: process.execPath,
                  args: [skillsServerPath],
                  toolFilter: { include: [...SKILLS_OPERATOR_CEILING] },
                },
              },
            },
          },
        });

      const readOnly = mkRuntime("read-only");
      try {
        const names = (await readOnly.getCatalog()).tools.map((t) => t.toolName).toSorted();
        expect(names).toEqual([...BRAIN_READ_ONLY, ...SKILLS_DISCOVERY_ONLY].toSorted());
      } finally {
        await readOnly.dispose();
      }

      // Re-register with write/exec flags on; active claim wins over stale pins.
      const expandedCfg = buildPluginConfig({
        brain: { mcpRead: true, captureEnqueue: true, coordinationWrites: true },
        skills: {
          mcpDiscoveryRead: true,
          governedExecution: true,
          telemetryEnqueue: true,
        },
      });
      const expandedRegistry = loadOpenClawPlugins({
        cache: false,
        onlyPluginIds: ["linkbrain", "linkskills"],
        config: expandedCfg as never,
        preferBuiltPluginArtifacts: true,
        runtimeOptions: { allowGatewaySubagentBinding: true },
      });
      setActivePluginRegistry(expandedRegistry, "expanded-flags", "gateway-bindable");

      const allOn = mkRuntime("all-on");
      try {
        const names = (await allOn.getCatalog()).tools.map((t) => t.toolName).toSorted();
        expect(names).toEqual([...BRAIN_OPERATOR_CEILING, ...SKILLS_OPERATOR_CEILING].toSorted());
      } finally {
        await allOn.dispose();
      }
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("rematerializes warm catalogs when pin/release changes live filter claims", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-toolfilter-live-pin-gen-"));
    const brainServerPath = path.join(tempDir, "linkbrain.mjs");
    await writeListToolsMcpServer({
      filePath: brainServerPath,
      tools: BRAIN_OPERATOR_CEILING,
    });

    const cfg = buildPluginConfig({
      brain: { mcpRead: true, captureEnqueue: false, coordinationWrites: false },
      skills: {
        mcpDiscoveryRead: false,
        governedExecution: false,
        telemetryEnqueue: false,
      },
    });

    try {
      const gatewayRegistry = loadOpenClawPlugins({
        cache: false,
        onlyPluginIds: ["linkbrain"],
        config: cfg as never,
        preferBuiltPluginArtifacts: true,
        runtimeOptions: { allowGatewaySubagentBinding: true },
      });
      pinGatewaySurfaces(gatewayRegistry);
      setActivePluginRegistry(createEmptyPluginRegistry(), "empty-active", "gateway-bindable");

      const runtime = createSessionMcpRuntime({
        sessionId: "session-live-pin-gen",
        workspaceDir: tempDir,
        cfg: {
          mcp: {
            servers: {
              linkbrain: {
                command: process.execPath,
                args: [brainServerPath],
                toolFilter: { include: [...BRAIN_OPERATOR_CEILING] },
              },
            },
          },
        },
      });

      try {
        const gated = await runtime.getCatalog();
        expect(gated.tools.map((t) => t.toolName).toSorted()).toEqual(
          [...BRAIN_READ_ONLY].toSorted(),
        );

        const beforeRelease = getMcpToolFilterRegistrationGeneration();
        releaseGatewayPins();
        expect(getMcpToolFilterRegistrationGeneration()).toBeGreaterThan(beforeRelease);

        // Pins gone + empty active → no plugin overlay → operator ceiling only.
        const ungated = await runtime.getCatalog();
        expect(ungated.tools.map((t) => t.toolName).toSorted()).toEqual(
          [...BRAIN_OPERATOR_CEILING].toSorted(),
        );
      } finally {
        await runtime.dispose();
      }
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("fails closed when distinct live registries claim the same serverName", async () => {
    const pinRegistry = createEmptyPluginRegistry();
    pinRegistry.mcpServerToolFilters.push({
      pluginId: "plugin-a",
      resolver: {
        serverName: "linkbrain",
        resolve: () => ({ include: ["brain_search"] }),
      },
      source: "test",
    });
    const otherPin = createEmptyPluginRegistry();
    otherPin.mcpServerToolFilters.push({
      pluginId: "plugin-b",
      resolver: {
        serverName: "linkbrain",
        resolve: () => ({ include: ["brain_load"] }),
      },
      source: "test",
    });

    setActivePluginRegistry(createEmptyPluginRegistry(), "empty-active");
    pinActivePluginHttpRouteRegistry(pinRegistry);
    pinActivePluginChannelRegistry(otherPin);

    const composition = await resolveMcpToolFilterComposition({
      serverName: "linkbrain",
      configSelection: { include: ["brain_search", "brain_load"] },
    });
    expect(composition).toEqual({ kind: "omit" });
  });
});
