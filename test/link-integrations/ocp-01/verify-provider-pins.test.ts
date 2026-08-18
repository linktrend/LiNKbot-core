import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  gitOutput,
  isDirectExecution,
} from "../../../docs/link-integrations/ocp-01/verify-provider-pins.mjs";
import { useAutoCleanupTempDirTracker } from "../../helpers/temp-dir.js";

const tempDirs = useAutoCleanupTempDirTracker(afterEach);

describe("verify-provider-pins", () => {
  it("recognizes direct execution when the module URL encodes spaces", () => {
    expect(
      isDirectExecution(
        "file:///tmp/openclaw%20prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
        "/tmp/openclaw prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
      ),
    ).toBe(true);
  });

  it("does not treat an unrelated argv path as direct execution", () => {
    expect(
      isDirectExecution(
        "file:///tmp/openclaw%20prime/docs/link-integrations/ocp-01/verify-provider-pins.mjs",
        "/tmp/other/verify-provider-pins.mjs",
      ),
    ).toBe(false);
  });

  it("ignores replacement refs for tree and artifact provenance", () => {
    const root = tempDirs.make("ocp-provider-git-");
    const git = (args: string[], options: Parameters<typeof execFileSync>[2] = {}) =>
      execFileSync("git", ["-C", root, ...args], { encoding: "utf8", ...options })
        .toString()
        .trim();

    git(["init", "--quiet"]);
    git(["config", "user.email", "test@example.invalid"]);
    git(["config", "user.name", "OpenClaw Test"]);
    fs.writeFileSync(path.join(root, "artifact.txt"), "original\n");
    git(["add", "artifact.txt"]);
    git(["commit", "--quiet", "-m", "original"]);
    const pinnedCommit = git(["rev-parse", "HEAD"]);
    const pinnedTree = gitOutput(root, [`rev-parse`, `${pinnedCommit}^{tree}`], {
      encoding: "utf8",
    })
      .toString()
      .trim();

    fs.writeFileSync(path.join(root, "artifact.txt"), "replacement\n");
    git(["add", "artifact.txt"]);
    git(["commit", "--quiet", "-m", "replacement"]);
    const replacementCommit = git(["rev-parse", "HEAD"]);
    git(["replace", pinnedCommit, replacementCommit]);

    expect(git(["rev-parse", `${pinnedCommit}^{tree}`])).not.toBe(pinnedTree);
    expect(
      gitOutput(root, [`rev-parse`, `${pinnedCommit}^{tree}`], { encoding: "utf8" })
        .toString()
        .trim(),
    ).toBe(pinnedTree);
    expect(git(["show", `${pinnedCommit}:artifact.txt`])).toBe("replacement");
    expect(gitOutput(root, ["show", `${pinnedCommit}:artifact.txt`]).toString()).toBe("original\n");
  });
});
