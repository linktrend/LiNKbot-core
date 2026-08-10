import { describe, expect, it, vi } from "vitest";
import { createLinkskillsTool } from "./src/oauth-tool.js";

describe("linkskills native OAuth bridge", () => {
  it("rejects model-supplied actor identity before opening a transport", async () => {
    const tool = createLinkskillsTool({
      pluginConfig: { mcpDiscoveryRead: true, transportMode: "mcp" },
      config: {},
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() },
    } as never);
    const result = await tool.execute("test", {
      operation: "skills_search",
      arguments: { query: "test", actor_id: "spoofed" },
    });
    expect(result.content[0]?.text).toBe("Actor identity is assigned by LiNKskills.");
  });
});
