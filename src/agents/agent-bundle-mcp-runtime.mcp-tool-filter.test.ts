/**
 * Proves plugin MCP tool-filter overlays change tools exposed through the real
 * managed-MCP listTools → catalog materialization path (not calculated arrays alone).
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createSessionMcpRuntime } from "./agent-bundle-mcp-runtime.js";
import { writeExecutable } from "./bundle-mcp-shared.test-harness.js";
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
});
