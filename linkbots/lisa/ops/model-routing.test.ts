import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import {
  LISA_NONCODING_ROUTING,
  lisaNonCodingFallbackRefs,
  validateLisaNonCodingRouting,
} from "./model-routing.ts";

const here = path.dirname(new URL(import.meta.url).pathname);

describe("Lisa PKT-04 non-coding routing", () => {
  it("is non-live, bounded, and fail-closed", () => {
    assert.deepEqual(validateLisaNonCodingRouting(), []);
    assert.equal(LISA_NONCODING_ROUTING.liveMutationAllowed, false);
    assert.equal(LISA_NONCODING_ROUTING.classifier.maxContextChars, 2_000);
    assert.equal(LISA_NONCODING_ROUTING.transientOverride.persisted, false);
    assert.equal(LISA_NONCODING_ROUTING.documentCandidate.enabled, false);
    assert.deepEqual(lisaNonCodingFallbackRefs(), [
      "openrouter/openai/gpt-5.6-luna",
      "moonshot/kimi-k2.6",
      "google/gemini-3.1-flash-lite",
    ]);
  });

  it("keeps the source JSON aligned without enabling live mutation", () => {
    const raw = JSON.parse(
      readFileSync(path.join(here, "model-routing.contract.json"), "utf8"),
    ) as { nonCodingRouting: typeof LISA_NONCODING_ROUTING };
    assert.deepEqual(raw.nonCodingRouting, LISA_NONCODING_ROUTING);
  });
});
