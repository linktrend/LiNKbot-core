import { describe, expect, it, vi } from "vitest";
import {
  NONCODING_CLASSIFIER_CONTEXT_LIMIT,
  NONCODING_FALLBACK_MAX_HOPS,
  NONCODING_ROUTING_POLICY,
  resolveNonCodingRoute,
  resolveTransientFallback,
} from "./noncoding-route.js";

describe("non-coding transient router", () => {
  it("routes obvious utility requests without invoking a classifier", async () => {
    const classify = vi.fn();
    const result = await resolveNonCodingRoute({
      request: "Summarize these notes in three bullets.",
      classify,
    });
    expect(result.tag).toBe("utility");
    expect(result.modelRef).toBe(NONCODING_ROUTING_POLICY.thirdFallback);
    expect(result.reasoningEffort).toBe("low");
    expect(result.classifierInvoked).toBe(false);
    expect(classify).not.toHaveBeenCalled();
    expect(result.persisted).toBe(false);
  });

  it("uses only bounded request context when an ambiguous request needs classification", async () => {
    const classify = vi.fn(async ({ request }: { request: string }) => {
      expect(request.length).toBe(NONCODING_CLASSIFIER_CONTEXT_LIMIT);
      return "research";
    });
    const result = await resolveNonCodingRoute({
      request: "x".repeat(NONCODING_CLASSIFIER_CONTEXT_LIMIT + 500),
      classify,
    });
    expect(result.tag).toBe("research");
    expect(result.classifierInvoked).toBe(true);
    expect(result.classifierError).toBe(false);
  });

  it("fails closed to conversation when the classifier fails or returns an invalid tag", async () => {
    await expect(
      resolveNonCodingRoute({ request: "What should I do next?", classify: async () => "unknown" }),
    ).resolves.toMatchObject({ tag: "conversation", classifierInvoked: true });
    await expect(
      resolveNonCodingRoute({
        request: "What should I do next?",
        classify: async () => {
          throw new Error("offline");
        },
      }),
    ).resolves.toMatchObject({
      tag: "conversation",
      classifierInvoked: true,
      classifierError: true,
    });
  });

  it("keeps provider and infrastructure failure handling distinct", () => {
    const fallbackRefs = ["openrouter/openai/gpt-5.6-luna", "moonshot/kimi-k2.6"];
    expect(
      resolveTransientFallback({
        currentModelRef: NONCODING_ROUTING_POLICY.primary,
        fallbackRefs,
        failure: "infrastructure",
      }),
    ).toEqual({ modelRef: NONCODING_ROUTING_POLICY.primary, action: "retry_same_model", hops: 0 });
    expect(
      resolveTransientFallback({
        currentModelRef: NONCODING_ROUTING_POLICY.primary,
        fallbackRefs,
        failure: "provider",
      }),
    ).toEqual({ modelRef: fallbackRefs[0], action: "fallback_one_hop", hops: 1 });
    expect(
      resolveTransientFallback({
        currentModelRef: NONCODING_ROUTING_POLICY.primary,
        fallbackRefs,
        failure: "quality",
      }),
    ).toEqual({ modelRef: NONCODING_ROUTING_POLICY.primary, action: "no_fallback", hops: 0 });
  });

  it("keeps a successful primary response on the primary without fallback", () => {
    expect(
      resolveTransientFallback({
        currentModelRef: NONCODING_ROUTING_POLICY.primary,
        fallbackRefs: ["openrouter/openai/gpt-5.6-luna", "moonshot/kimi-k2.6"],
        failure: "success",
      }),
    ).toEqual({ modelRef: NONCODING_ROUTING_POLICY.primary, action: "no_fallback", hops: 0 });
  });

  it("allows exactly one fallback hop after primary failure", () => {
    const fallbackRefs = [
      "openrouter/openai/gpt-5.6-luna",
      "moonshot/kimi-k2.6",
      "google/gemini-3.1-flash-lite",
    ];
    expect(
      resolveTransientFallback({
        currentModelRef: NONCODING_ROUTING_POLICY.primary,
        fallbackRefs,
        failure: "provider",
        fallbackMaxHops: NONCODING_FALLBACK_MAX_HOPS,
      }),
    ).toEqual({ modelRef: fallbackRefs[0], action: "fallback_one_hop", hops: 1 });
    expect(
      resolveTransientFallback({
        currentModelRef: fallbackRefs[0]!,
        fallbackRefs,
        failure: "provider",
        fallbackMaxHops: 99,
      }),
    ).toEqual({ modelRef: fallbackRefs[0], action: "no_fallback", hops: 0 });
    expect(
      resolveTransientFallback({
        currentModelRef: fallbackRefs[1]!,
        fallbackRefs,
        failure: "model",
      }),
    ).toEqual({ modelRef: fallbackRefs[1], action: "no_fallback", hops: 0 });
  });

  it("does not chain after a fallback infrastructure retry", () => {
    const firstFallback = "openrouter/openai/gpt-5.6-luna";
    expect(
      resolveTransientFallback({
        currentModelRef: firstFallback,
        fallbackRefs: [firstFallback, "moonshot/kimi-k2.6"],
        failure: "infrastructure",
      }),
    ).toEqual({ modelRef: firstFallback, action: "retry_same_model", hops: 0 });
  });
});
