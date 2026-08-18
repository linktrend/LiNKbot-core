// Sandbox env sanitizer tests cover credential filtering for inherited and
// explicitly configured sandbox environment variables.
import { describe, expect, it } from "vitest";
import {
  sanitizeEnvVars,
  sanitizeExplicitSandboxEnvVars,
  validateEnvVarValue,
} from "./sanitize-env-vars.js";

describe("sanitizeEnvVars", () => {
  it("keeps normal env vars and blocks obvious credentials", () => {
    const result = sanitizeEnvVars({
      NODE_ENV: "test",
      OPENAI_API_KEY: `ltfx.n.347117a3cfea01746e71.v1`, // pragma: allowlist secret
      OPENAI_ADMIN_KEY: `ltfx.n.2aed01279008d0baa7dd.v1`, // pragma: allowlist secret
      ANTHROPIC_ADMIN_KEY: `ltfx.n.111d0dc79e234d5db5e9.v1`, // pragma: allowlist secret
      ANTHROPIC_ADMIN_API_KEY: `ltfx.n.07904c7cb8cd96335d9a.v1`, // pragma: allowlist secret
      FOO: "bar",
      GITHUB_TOKEN: `ltfx.n.5dd6823fdffafb04af60.v1`, // pragma: allowlist secret
    });

    expect(result.allowed).toEqual({
      NODE_ENV: "test",
      FOO: "bar",
    });
    expect(result.blocked).toStrictEqual([
      "OPENAI_API_KEY",
      "OPENAI_ADMIN_KEY",
      "ANTHROPIC_ADMIN_KEY",
      "ANTHROPIC_ADMIN_API_KEY",
      "GITHUB_TOKEN",
    ]);
  });

  it("blocks credentials even when suffix pattern matches", () => {
    const result = sanitizeEnvVars({
      MY_TOKEN: "abc",
      MY_SECRET: "def",
      USER: "alice",
    });

    expect(result.allowed).toEqual({ USER: "alice" });
    expect(result.blocked).toStrictEqual(["MY_TOKEN", "MY_SECRET"]);
  });

  it("adds warnings for suspicious values", () => {
    const base64Like =
      "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYQ==";
    const result = sanitizeEnvVars({
      USER: "alice",
      SAFE_TEXT: base64Like,
      NULL: "a\0b",
    });

    expect(result.allowed).toEqual({ USER: "alice", SAFE_TEXT: base64Like });
    expect(result.blocked).toContain("NULL");
    expect(result.warnings).toContain("SAFE_TEXT: Value looks like base64-encoded credential data");
  });

  it("supports strict mode with explicit allowlist", () => {
    const result = sanitizeEnvVars(
      {
        NODE_ENV: "test",
        FOO: "bar",
      },
      { strictMode: true },
    );

    expect(result.allowed).toEqual({ NODE_ENV: "test" });
    expect(result.blocked).toEqual(["FOO"]);
  });

  it("skips undefined values when sanitizing process-style env maps", () => {
    const result = sanitizeEnvVars({
      NODE_ENV: "test",
      OPTIONAL_SECRET: undefined,
      OPENAI_API_KEY: undefined,
    });

    expect(result.allowed).toEqual({ NODE_ENV: "test" });
    expect(result.blocked).toStrictEqual([]);
  });

  it("allows explicit configured sandbox env names that look like credentials", () => {
    // Explicit sandbox env config is operator intent; value validation still
    // runs, but name-based credential blocking does not.
    const result = sanitizeExplicitSandboxEnvVars({
      GEMINI_API_KEY: `ltfx.n.acf0066e077bd2092865.v1`,
      GOOGLE_CLIENT_SECRET: `ltfx.n.d5e4145968bb3d4df46c.v1`,
      HIMALAYA_PASSWORD: `ltfx.n.c50948a8b07e646161a5.v1`,
      RESEND_API_KEY: `ltfx.n.1c5e7c4345603e33e2e2.v1`,
    });

    expect(result.allowed).toEqual({
      GEMINI_API_KEY: `ltfx.n.acf0066e077bd2092865.v1`,
      GOOGLE_CLIENT_SECRET: `ltfx.n.d5e4145968bb3d4df46c.v1`,
      HIMALAYA_PASSWORD: `ltfx.n.c50948a8b07e646161a5.v1`,
      RESEND_API_KEY: `ltfx.n.1c5e7c4345603e33e2e2.v1`,
    });
    expect(result.blocked).toStrictEqual([]);
  });

  it("still blocks invalid explicit configured sandbox env values", () => {
    const result = sanitizeExplicitSandboxEnvVars({
      SAFE_SECRET: "ok",
      NULL_SECRET: "a\0b",
    });

    expect(result.allowed).toEqual({ SAFE_SECRET: "ok" });
    expect(result.blocked).toStrictEqual(["NULL_SECRET"]);
  });

  it("measures the value limit in UTF-8 bytes", () => {
    const atLimit = "a!".repeat(16384);

    expect(validateEnvVarValue(atLimit)).toBeUndefined();
    expect(validateEnvVarValue(`${atLimit}x`)).toBe("Value exceeds maximum length");
    expect(validateEnvVarValue("值".repeat(11000))).toBe("Value exceeds maximum length");
  });
});
