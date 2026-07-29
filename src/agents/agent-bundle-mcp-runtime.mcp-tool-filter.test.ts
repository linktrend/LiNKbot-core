/**
 * Proves plugin MCP tool-filter overlays change tools exposed through the real
 * managed-MCP listTools → catalog materialization path (not calculated arrays alone).
 * Includes same-runtime hot invalidation for Brain/Skills flag filters, deny-all,
 * operator ceiling, and utility/resources/prompts metadata.
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { buildLinkbrainFlaggedMcpToolFilter } from "../../extensions/linkbrain/src/feature-flags.js";
import { LINKBRAIN_MCP_TOOL_ALLOWLIST } from "../../extensions/linkbrain/mcp-tool-filter.js";
import { buildLinkskillsFlaggedMcpToolFilter } from "../../extensions/linkskills/src/feature-flags.js";
import { LINKSKILLS_MCP_TOOL_ALLOWLIST } from "../../extensions/linkskills/mcp-tool-filter.js";
import { createSessionMcpRuntime } from "./agent-bundle-mcp-runtime.js";
import { materializeBundleMcpToolsForRun } from "./agent-bundle-mcp-materialize.js";
import { writeExecutable } from "./bundle-mcp-shared.test-harness.js";
import { bumpMcpToolFilterRegistrationGeneration } from "../plugins/mcp-tool-filter-registration.js";
import { testing as toolFilterTesting } from "./mcp-tool-filter-resolver.js";

vi.mock("./embedded-agent-mcp.js", () => ({
  loadEmbeddedAgentMcpConfig: (params: {
    cfg?: { mcp?: { servers?: Record<string, unknown> } };
  }) => ({
    diagnostics: [],
    mcpServers: params.cfg?.mcp?.servers ?? {},
  }),
}));

const OPERATOR_CEILING = [
  "domain_read_a",
  "domain_read_b",
  "domain_write",
  "domain_exec",
  "domain_evidence",
] as const;

async function writeListToolsMcpServer(params: {
  filePath: string;
  logPath: string;
  tools: readonly string[];
  withResourcesAndPrompts?: boolean;
}): Promise<void> {
  await writeExecutable(
    params.filePath,
    `#!/usr/bin/env node
import fs from "node:fs/promises";
const logPath = ${JSON.stringify(params.logPath)};
const tools = ${JSON.stringify(
      params.tools.map((name) => ({
        name,
        description: name,
        inputSchema: { type: "object", properties: {} },
      })),
    )};
const withResourcesAndPrompts = ${JSON.stringify(Boolean(params.withResourcesAndPrompts))};
let buffer = "";
function send(message) {
  process.stdout.write(JSON.stringify(message) + "\\n");
}
function handle(message) {
  if (!message || typeof message !== "object") return;
  void fs.appendFile(logPath, "recv " + String(message.method ?? "unknown") + "\\n");
  if (message.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: message.id,
      result: {
        protocolVersion: message.params?.protocolVersion ?? "2025-03-26",
        capabilities: {
          tools: {},
          ...(withResourcesAndPrompts ? { resources: {}, prompts: {} } : {}),
        },
        serverInfo: { name: "test-list-tools", version: "1.0.0" },
      },
    });
    return;
  }
  if (message.method === "notifications/initialized") return;
  if (message.method === "tools/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { tools } });
    return;
  }
  if (message.method === "resources/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { resources: [] } });
    return;
  }
  if (message.method === "prompts/list") {
    send({ jsonrpc: "2.0", id: message.id, result: { prompts: [] } });
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

describe("managed MCP toolFilter plugin overlay (catalog path)", () => {
  afterEach(() => {
    toolFilterTesting.reset();
  });

  it("toggles plugin overlays through listTools catalog exposure under operator ceiling", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-toolfilter-catalog-"));
    const serverPath = path.join(tempDir, "domain.mjs");
    const logPath = path.join(tempDir, "server.log");
    await writeListToolsMcpServer({
      filePath: serverPath,
      logPath,
      tools: OPERATOR_CEILING,
    });

    let mcpRead = false;
    let mcpDiscoveryRead = false;
    let governedExecution = false;

    toolFilterTesting.setResolversByServerName(
      new Map([
        [
          "domain",
          {
            pluginId: "domain-plugin",
            serverName: "domain",
            resolve: () => ({
              include: OPERATOR_CEILING.filter((name) => {
                if (name.startsWith("domain_read_")) {
                  return mcpRead;
                }
                if (name === "domain_exec") {
                  return governedExecution;
                }
                if (name === "domain_write") {
                  return mcpDiscoveryRead;
                }
                return true;
              }),
            }),
          },
        ],
      ]),
    );

    const mkRuntime = (label: string) =>
      createSessionMcpRuntime({
        sessionId: `session-domain-filter-${label}`,
        workspaceDir: "/workspace",
        cfg: {
          mcp: {
            servers: {
              domain: {
                command: process.execPath,
                args: [serverPath],
                toolFilter: { include: [...OPERATOR_CEILING] },
              },
            },
          },
        },
      });

    try {
      const allOff = mkRuntime("all-off");
      try {
        const catalog = await allOff.getCatalog();
        const names = catalog.tools.map((tool) => tool.toolName);
        expect(catalog.diagnostics ?? []).toEqual([]);
        expect(names).toEqual(["domain_evidence"]);
      } finally {
        await allOff.dispose();
      }

      mcpRead = true;
      toolFilterTesting.setRegistrationGeneration(1);
      const readOn = mkRuntime("read-on");
      try {
        const names = (await readOn.getCatalog()).tools.map((tool) => tool.toolName).toSorted();
        expect(names).toEqual(["domain_evidence", "domain_read_a", "domain_read_b"]);
      } finally {
        await readOn.dispose();
      }

      mcpDiscoveryRead = true;
      governedExecution = true;
      toolFilterTesting.setRegistrationGeneration(2);
      const allOn = mkRuntime("all-on");
      try {
        const names = (await allOn.getCatalog()).tools.map((tool) => tool.toolName).toSorted();
        expect(names).toEqual([...OPERATOR_CEILING].toSorted());
      } finally {
        await allOn.dispose();
      }
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });

  it("same runtime rematerializes Brain/Skills filters, deny-all, utilities, and ceiling", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-toolfilter-hot-"));
    const brainPath = path.join(tempDir, "linkbrain.mjs");
    const skillsPath = path.join(tempDir, "linkskills.mjs");
    const brainLog = path.join(tempDir, "brain.log");
    const skillsLog = path.join(tempDir, "skills.log");
    await writeListToolsMcpServer({
      filePath: brainPath,
      logPath: brainLog,
      tools: LINKBRAIN_MCP_TOOL_ALLOWLIST,
      withResourcesAndPrompts: true,
    });
    await writeListToolsMcpServer({
      filePath: skillsPath,
      logPath: skillsLog,
      tools: LINKSKILLS_MCP_TOOL_ALLOWLIST,
      withResourcesAndPrompts: true,
    });

    let brainFlags = {
      mcpRead: false,
      captureEnqueue: false,
      captureDrain: false,
      coordinationWrites: false,
    };
    let skillsFlags = {
      mcpDiscoveryRead: false,
      governedExecution: false,
      telemetryEnqueue: false,
      telemetryDrain: false,
    };
    let brainResolve: (() => ReturnType<typeof buildLinkbrainFlaggedMcpToolFilter>) | null = () =>
      buildLinkbrainFlaggedMcpToolFilter(brainFlags);
    let skillsResolve: (() => ReturnType<typeof buildLinkskillsFlaggedMcpToolFilter>) | null =
      () => buildLinkskillsFlaggedMcpToolFilter(skillsFlags);

    const syncResolvers = () => {
      const map = new Map();
      if (brainResolve) {
        map.set("linkbrain", {
          pluginId: "linkbrain",
          serverName: "linkbrain",
          resolve: brainResolve,
        });
      }
      if (skillsResolve) {
        map.set("linkskills", {
          pluginId: "linkskills",
          serverName: "linkskills",
          resolve: skillsResolve,
        });
      }
      toolFilterTesting.setResolversByServerName(map);
      bumpMcpToolFilterRegistrationGeneration();
      toolFilterTesting.setRegistrationGeneration(undefined);
    };
    syncResolvers();

    const runtime = createSessionMcpRuntime({
      sessionId: "session-brain-skills-hot",
      workspaceDir: "/workspace",
      cfg: {
        mcp: {
          servers: {
            linkbrain: {
              command: process.execPath,
              args: [brainPath],
              toolFilter: { include: [...LINKBRAIN_MCP_TOOL_ALLOWLIST, "resources_*", "prompts_*"] },
            },
            linkskills: {
              command: process.execPath,
              args: [skillsPath],
              toolFilter: {
                include: [...LINKSKILLS_MCP_TOOL_ALLOWLIST, "resources_*", "prompts_*"],
              },
            },
          },
        },
      },
    });

    try {
      const allOff = await runtime.getCatalog();
      expect(allOff.tools).toEqual([]);
      expect(allOff.servers.linkbrain?.toolFilter?.denyAll).toBe(true);
      expect(allOff.servers.linkskills?.toolFilter?.denyAll).toBe(true);
      expect(allOff.servers.linkbrain?.toolFilter?.include).toBeUndefined();

      const allOffMaterialized = await materializeBundleMcpToolsForRun({ runtime });
      expect(allOffMaterialized.tools.filter((t) => t.name.includes("resources_"))).toEqual([]);
      expect(allOffMaterialized.tools.filter((t) => t.name.includes("prompts_"))).toEqual([]);
      await allOffMaterialized.dispose();

      // Same-owner replacement: enable Brain read + Skills discovery
      brainFlags = {
        mcpRead: true,
        captureEnqueue: false,
        captureDrain: false,
        coordinationWrites: false,
      };
      skillsFlags = {
        mcpDiscoveryRead: true,
        governedExecution: false,
        telemetryEnqueue: false,
        telemetryDrain: false,
      };
      syncResolvers();
      const partial = await runtime.getCatalog();
      const partialNames = partial.tools.map((t) => t.toolName).toSorted();
      expect(partialNames).toContain("brain_browse");
      expect(partialNames).toContain("skills_list");
      expect(partialNames).not.toContain("brain_capture_batch");
      expect(partialNames).not.toContain("skills_run_start");
      expect(partial.servers.linkbrain?.toolFilter?.denyAll).toBeUndefined();
      expect(partial.servers.linkbrain?.toolFilter?.plugin?.include).toContain("brain_browse");

      // Plugin cannot widen operator ceiling (operator omits a plugin-desired name)
      brainResolve = () => ({ include: ["brain_browse", "brain_not_in_ceiling"] });
      syncResolvers();
      const ceiling = await runtime.getCatalog();
      const brainCeilingNames = ceiling.tools
        .filter((t) => t.serverName === "linkbrain")
        .map((t) => t.toolName);
      expect(brainCeilingNames).toEqual(["brain_browse"]);
      expect(brainCeilingNames).not.toContain("brain_not_in_ceiling");
      expect(ceiling.tools.some((t) => t.toolName === "skills_list")).toBe(true);

      // Rollback via null omit
      brainResolve = () => null;
      syncResolvers();
      const rolled = await runtime.getCatalog();
      expect(rolled.tools.filter((t) => t.serverName === "linkbrain")).toEqual([]);
      expect(rolled.servers.linkbrain?.toolFilter?.denyAll).toBe(true);

      // Removal: drop Brain resolver → config-only ceiling restores all Brain tools
      brainResolve = null;
      skillsResolve = () => buildLinkskillsFlaggedMcpToolFilter(skillsFlags);
      syncResolvers();
      const removed = await runtime.getCatalog();
      expect(removed.tools.filter((t) => t.serverName === "linkbrain").length).toBe(
        LINKBRAIN_MCP_TOOL_ALLOWLIST.length,
      );
      expect(removed.tools.some((t) => t.toolName === "skills_list")).toBe(true);

      // Config-reload style: re-register Brain flags with all ops on
      brainFlags = {
        mcpRead: true,
        captureEnqueue: true,
        captureDrain: true,
        coordinationWrites: true,
      };
      skillsFlags = {
        mcpDiscoveryRead: true,
        governedExecution: true,
        telemetryEnqueue: true,
        telemetryDrain: true,
      };
      brainResolve = () => buildLinkbrainFlaggedMcpToolFilter(brainFlags);
      skillsResolve = () => buildLinkskillsFlaggedMcpToolFilter(skillsFlags);
      syncResolvers();
      const allOn = await runtime.getCatalog();
      expect(allOn.tools.filter((t) => t.serverName === "linkbrain").length).toBe(
        LINKBRAIN_MCP_TOOL_ALLOWLIST.length,
      );
      expect(allOn.tools.filter((t) => t.serverName === "linkskills").length).toBe(
        LINKSKILLS_MCP_TOOL_ALLOWLIST.length,
      );

      // Utility tools: plugin include without resources_* denies utilities under intersect
      const utilityMaterialized = await materializeBundleMcpToolsForRun({ runtime });
      expect(
        utilityMaterialized.tools.filter((t) => t.name.includes("__resources_")).length,
      ).toBe(0);
      expect(utilityMaterialized.tools.filter((t) => t.name.includes("__prompts_")).length).toBe(0);
      await utilityMaterialized.dispose();

      // Disjoint filters → nothing
      brainResolve = () => ({ include: ["skills_list"] });
      skillsResolve = () => ({ include: ["brain_browse"] });
      syncResolvers();
      const disjoint = await runtime.getCatalog();
      expect(disjoint.tools).toEqual([]);
    } finally {
      await runtime.dispose();
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  });
});
