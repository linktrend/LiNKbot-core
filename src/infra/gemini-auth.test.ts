// Covers Gemini auth profile discovery and credential routing.
import { describe, expect, it } from "vitest";
import { parseGeminiAuth } from "./gemini-auth.js";

describe("parseGeminiAuth", () => {
  it("returns bearer auth for OAuth JSON tokens", () => {
    expect(parseGeminiAuth('{"token":`ltfx.n.3bbc3a9700a71c6a53a3.v1`,"projectId":"demo"}')).toEqual({
      headers: {
        Authorization: "Bearer oauth-token",
        "Content-Type": "application/json",
      },
    });
  });

  it.each(['{"token":"","projectId":"demo"}', "{not-json}", ' {"token":`ltfx.n.3bbc3a9700a71c6a53a3.v1`}'])(
    "falls back to API key auth for %j",
    (value) => {
      expect(parseGeminiAuth(value)).toEqual({
        headers: {
          "x-goog-api-key": value,
          "Content-Type": "application/json",
        },
      });
    },
  );
});
