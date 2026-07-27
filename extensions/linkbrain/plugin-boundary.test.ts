import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = path.dirname(fileURLToPath(import.meta.url));

const FORBIDDEN_IMPORT =
  /from\s+["'](?:\.\.\/)+src\/|from\s+["']openclaw\/src\/|from\s+["']\.\.\/\.\.\/src\//;

describe("linkbrain plugin boundary", () => {
  it("production sources import only plugin-sdk or local barrels", () => {
    const files = [
      "index.ts",
      "api.ts",
      "runtime-api.ts",
      "src/config.ts",
      "src/envelopes.ts",
      "src/namespaces.ts",
      "src/runtime.ts",
      "src/stores.ts",
    ];
    for (const relative of files) {
      const source = fs.readFileSync(path.join(root, relative), "utf8");
      expect(source, relative).not.toMatch(FORBIDDEN_IMPORT);
      expect(source, relative).not.toMatch(/plugin-sdk-internal/);
      expect(source, relative).not.toMatch(/from\s+["']\.\.\/\.\.\/extensions\//);
    }
  });

  it("does not register conversation hooks in Phase 2 skeleton", () => {
    const index = fs.readFileSync(path.join(root, "index.ts"), "utf8");
    expect(index).toContain("allowConversationAccess");
    expect(index).not.toMatch(/api\.on\(\s*["']message_/);
    expect(index).not.toMatch(/api\.on\(\s*["']before_prompt/);
    expect(index).not.toMatch(/api\.on\(\s*["']agent_end/);
    expect(index).toMatch(/gateway_start/);
    expect(index).toMatch(/gateway_stop/);
  });
});
