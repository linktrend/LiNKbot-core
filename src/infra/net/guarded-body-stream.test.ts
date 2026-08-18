import { describe, expect, it, vi } from "vitest";
import { wrapGuardedBodyStream } from "./guarded-body-stream.js";

describe("wrapGuardedBodyStream", () => {
  it("releases the source reader lock after downstream cancellation", async () => {
    const cancel = vi.fn();
    const cleanup = vi.fn();
    const source = new ReadableStream<Uint8Array>({ cancel });
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup });

    expect(source.locked).toBe(true);
    await wrapped.cancel("consumer stopped");

    expect(cancel).toHaveBeenCalledExactlyOnceWith("consumer stopped");
    expect(cleanup).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("propagates downstream cancellation failure after releasing resources", async () => {
    const expected = new Error("source cancellation failed");
    const cleanup = vi.fn();
    const source = new ReadableStream<Uint8Array>({
      async cancel() {
        throw expected;
      },
    });
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup });

    await expect(wrapped.cancel("consumer stopped")).rejects.toBe(expected);

    expect(cleanup).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("releases the source reader lock after normal completion", async () => {
    const cleanup = vi.fn();
    const source = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new TextEncoder().encode("done"));
        controller.close();
      },
    });
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup });
    const reader = wrapped.getReader();

    const chunk = await reader.read();
    expect(new TextDecoder().decode(chunk.value)).toBe("done");
    await expect(reader.read()).resolves.toEqual({ done: true, value: undefined });
    reader.releaseLock();

    expect(cleanup).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("releases the source reader lock while preserving a read failure", async () => {
    const expected = new Error("source read failed");
    const cleanup = vi.fn();
    const source = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.error(expected);
      },
    });
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup });
    const reader = wrapped.getReader();

    await expect(reader.read()).rejects.toBe(expected);
    reader.releaseLock();

    expect(cleanup).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("errors and cleans up once when cumulative bytes exceed maxBytes", async () => {
    const cancel = vi.fn(async () => undefined);
    const cleanup = vi.fn();
    const secret = `ltfx.n.0cc9909313e7ec101a5b.v1`;
    let pulls = 0;
    const source = new ReadableStream<Uint8Array>({
      pull(controller) {
        pulls += 1;
        if (pulls === 1) {
          controller.enqueue(new TextEncoder().encode("aaaa"));
          return;
        }
        controller.enqueue(new TextEncoder().encode(secret));
      },
      cancel,
    });
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup, maxBytes: 4 });
    const reader = wrapped.getReader();

    await expect(reader.read()).resolves.toMatchObject({ done: false });
    const overflow = await reader.read().then(
      () => undefined,
      (error: unknown) => error,
    );
    expect(overflow).toBeInstanceOf(Error);
    expect((overflow as Error).message).toBe("Guarded response body exceeds 4 bytes");
    expect((overflow as Error).message).not.toContain(secret);
    expect((overflow as Error).message).not.toContain("Bearer");
    reader.releaseLock();

    expect(cleanup).toHaveBeenCalledOnce();
    expect(cancel).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("aborts a never-ending chunked stream at the byte cap without unbounded growth", async () => {
    const cancel = vi.fn(async () => undefined);
    const cleanup = vi.fn();
    const chunk = new Uint8Array(1024).fill(0x61);
    const source = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(chunk);
      },
      cancel,
    });
    const maxBytes = 8 * 1024;
    const wrapped = wrapGuardedBodyStream({ body: source, cleanup, maxBytes });
    const reader = wrapped.getReader();

    let received = 0;
    let overflow: unknown;
    for (;;) {
      try {
        const result = await reader.read();
        if (result.done || !result.value) {
          break;
        }
        received += result.value.byteLength;
      } catch (error) {
        overflow = error;
        break;
      }
    }

    expect(received).toBeLessThanOrEqual(maxBytes);
    expect(overflow).toBeInstanceOf(Error);
    expect((overflow as Error).message).toBe(`Guarded response body exceeds ${maxBytes} bytes`);
    reader.releaseLock();
    expect(cleanup).toHaveBeenCalledOnce();
    expect(cancel).toHaveBeenCalledOnce();
    expect(source.locked).toBe(false);
  });

  it("allows bodies that fit exactly at maxBytes", async () => {
    const cleanup = vi.fn();
    const payload = new TextEncoder().encode("1234");
    const source = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(payload);
        controller.close();
      },
    });
    const wrapped = wrapGuardedBodyStream({
      body: source,
      cleanup,
      maxBytes: payload.byteLength,
    });
    const reader = wrapped.getReader();
    const chunk = await reader.read();
    expect(chunk.value).toEqual(payload);
    await expect(reader.read()).resolves.toEqual({ done: true, value: undefined });
    reader.releaseLock();
    expect(cleanup).toHaveBeenCalledOnce();
  });
});
