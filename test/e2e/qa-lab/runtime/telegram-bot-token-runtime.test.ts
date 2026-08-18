import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { runTelegramBotTokenRuntime, testing } from "./telegram-bot-token-runtime.js";

const tempDirs: string[] = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => fs.rm(dir, { force: true, recursive: true })));
});

describe("telegram bot token runtime evidence", () => {
  it("resolves only dedicated leased credentials", () => {
    expect(
      testing.resolveLeasedToken({
        OPENCLAW_QA_TELEGRAM_SUT_BOT_TOKEN: `ltfx.n.c25b4222489f56474a74.v1`,
        TELEGRAM_E2E_SUT_BOT_TOKEN: `ltfx.n.24db091a467ee921a2ac.v1`,
        TELEGRAM_BOT_TOKEN: `ltfx.n.fdd956c57df8d78830b4.v1`,
      }),
    ).toEqual({ key: "OPENCLAW_QA_TELEGRAM_SUT_BOT_TOKEN", token: `ltfx.n.c25b4222489f56474a74.v1` });
  });

  it("writes blocked evidence without a dedicated credential", async () => {
    const artifactBase = await fs.mkdtemp(path.join(os.tmpdir(), "telegram-bot-token-"));
    tempDirs.push(artifactBase);
    const evidence = await runTelegramBotTokenRuntime(
      { artifactBase, repoRoot: process.cwd(), startupTimeoutMs: 100 },
      { TELEGRAM_BOT_TOKEN: `ltfx.n.fdd956c57df8d78830b4.v1` },
    );

    expect(evidence.entries[0]?.result.status).toBe("blocked");
    const log = await fs.readFile(path.join(artifactBase, "telegram-bot-token.log"), "utf8");
    expect(log).toContain("blocked");
    expect(log).not.toContain("generic-token");
  });

  it("bounds monitor shutdown", async () => {
    await expect(testing.waitForMonitorShutdown(new Promise(() => {}), 10)).rejects.toThrow(
      "Telegram runtime shutdown timed out",
    );
  });
});
