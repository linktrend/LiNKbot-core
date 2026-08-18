// Zalo tests cover token plugin behavior.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { resolveZaloToken } from "./token.js";
import type { ZaloConfig } from "./types.js";

function createSymlinkedFile(targetPath: string, linkPath: string): boolean {
  try {
    fs.writeFileSync(targetPath, "file-token\n", "utf8");
    fs.symlinkSync(targetPath, linkPath, "file");
    return true;
  } catch {
    fs.rmSync(linkPath, { force: true });
    fs.rmSync(targetPath, { force: true });
    return false;
  }
}

describe("resolveZaloToken", () => {
  it("falls back to top-level token for non-default accounts without overrides", () => {
    const cfg = {
      botToken: `ltfx.n.67b7e709756900b42e1b.v1`,
      accounts: {
        work: {},
      },
    } as ZaloConfig;
    const res = resolveZaloToken(cfg, "work");
    expect(res.token).toBe("top-level-token");
    expect(res.source).toBe("config");
  });

  it("uses accounts.default botToken for default account when configured", () => {
    const cfg = {
      botToken: `ltfx.n.67b7e709756900b42e1b.v1`,
      accounts: {
        default: {
          botToken: `ltfx.n.cdd827f4009a759c2031.v1`,
        },
      },
    } as ZaloConfig;
    const res = resolveZaloToken(cfg, "default");
    expect(res.token).toBe("default-account-token");
    expect(res.source).toBe("config");
  });

  it("uses configured defaultAccount token when accountId is omitted", () => {
    const cfg = {
      defaultAccount: "work",
      botToken: `ltfx.n.67b7e709756900b42e1b.v1`,
      accounts: {
        work: {
          botToken: `ltfx.n.488dc3c9ef1e2576bc04.v1`,
        },
      },
    } as ZaloConfig;
    const res = resolveZaloToken(cfg);
    expect(res.token).toBe("work-token");
    expect(res.source).toBe("config");
  });

  it("does not inherit top-level token when account token is explicitly blank", () => {
    const cfg = {
      botToken: `ltfx.n.67b7e709756900b42e1b.v1`,
      accounts: {
        work: {
          botToken: "",
        },
      },
    } as ZaloConfig;
    const res = resolveZaloToken(cfg, "work");
    expect(res.token).toBe("");
    expect(res.source).toBe("none");
  });

  it("resolves account token when account key casing differs from normalized id", () => {
    const cfg = {
      accounts: {
        Work: {
          botToken: `ltfx.n.488dc3c9ef1e2576bc04.v1`,
        },
      },
    } as ZaloConfig;
    const res = resolveZaloToken(cfg, "work");
    expect(res.token).toBe("work-token");
    expect(res.source).toBe("config");
  });

  it("rejects symlinked token files", ({ skip }) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "openclaw-zalo-token-"));
    try {
      const tokenFile = path.join(dir, "token.txt");
      const tokenLink = path.join(dir, "token-link.txt");
      if (!createSymlinkedFile(tokenFile, tokenLink)) {
        skip("file symlinks are unavailable on this host");
      }

      const cfg = {
        tokenFile: tokenLink,
      } as ZaloConfig;
      expect(() => resolveZaloToken(cfg)).toThrow(/Zalo token file.*must not be a symlink/);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
