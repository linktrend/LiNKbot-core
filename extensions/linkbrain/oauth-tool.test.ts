import { describe, expect, it, vi } from "vitest";
import { createLinkbrainReadTool } from "./src/oauth-tool.js";

describe("linkbrain native OAuth bridge", () => {
  it("rejects model-supplied actor identity before opening a transport", async () => {
    const tool = createLinkbrainReadTool({
      pluginConfig: { mcpRead: true, transportMode: "mcp" },
      config: {},
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() },
    } as never);
    const result = await tool.execute("test", {
      operation: "brain_search",
      arguments: { query: "test", actorId: "spoofed" },
    });
    expect(result.content[0]?.text).toBe("Actor identity is assigned by LiNKbrain.");
  });
});
