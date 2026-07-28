/** Unit tests for MCP tool-filter composition (operator ∩ plugin overlay). */
import { afterEach, describe, expect, it } from "vitest";
import {
  describeComposedMcpToolFilter,
  resolveMcpToolFilterComposition,
  shouldExposeComposedMcpTool,
  testing,
} from "./mcp-tool-filter-resolver.js";

describe("mcp tool filter composition", () => {
  afterEach(() => {
    testing.reset();
  });

  it("passes config-only when no plugin resolver is registered", async () => {
    const composition = await resolveMcpToolFilterComposition({
      serverName: "linkbrain",
      configSelection: { include: ["brain_search", "brain_load"] },
    });
    expect(composition).toEqual({
      kind: "config-only",
      selection: { include: ["brain_search", "brain_load"] },
    });
    expect(shouldExposeComposedMcpTool(composition, "brain_search")).toBe(true);
    expect(shouldExposeComposedMcpTool(composition, "brain_browse")).toBe(false);
  });

  it("omits all tools when plugin resolve returns null", async () => {
    testing.setResolversByServerName(
      new Map([
        [
          "linkbrain",
          {
            pluginId: "linkbrain",
            serverName: "linkbrain",
            resolve: () => null,
          },
        ],
      ]),
    );
    const composition = await resolveMcpToolFilterComposition({
      serverName: "linkbrain",
      configSelection: { include: ["brain_search"] },
    });
    expect(composition).toEqual({ kind: "omit" });
    expect(shouldExposeComposedMcpTool(composition, "brain_search")).toBe(false);
    expect(describeComposedMcpToolFilter(composition)).toEqual({ include: [] });
  });

  it("intersects operator ceiling with plugin include overlay", async () => {
    testing.setResolversByServerName(
      new Map([
        [
          "linkskills",
          {
            pluginId: "linkskills",
            serverName: "linkskills",
            resolve: () => ({
              include: ["skills_list", "skills_feedback_submit"],
            }),
          },
        ],
      ]),
    );
    const composition = await resolveMcpToolFilterComposition({
      serverName: "linkskills",
      configSelection: {
        include: ["skills_list", "skills_run_start", "skills_feedback_submit"],
      },
    });
    expect(composition.kind).toBe("intersect");
    expect(shouldExposeComposedMcpTool(composition, "skills_list")).toBe(true);
    expect(shouldExposeComposedMcpTool(composition, "skills_feedback_submit")).toBe(true);
    expect(shouldExposeComposedMcpTool(composition, "skills_run_start")).toBe(false);
  });

  it("fails closed when plugin resolve throws", async () => {
    testing.setResolversByServerName(
      new Map([
        [
          "linkbrain",
          {
            pluginId: "linkbrain",
            serverName: "linkbrain",
            resolve: () => {
              throw new Error("boom");
            },
          },
        ],
      ]),
    );
    const composition = await resolveMcpToolFilterComposition({
      serverName: "linkbrain",
      configSelection: { include: ["brain_search"] },
    });
    expect(composition).toEqual({ kind: "omit" });
  });
});
