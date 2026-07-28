/**
 * Independent, stoppable periodic Skills outbox drain worker.
 * flushIntervalMs is the operational tick; disabled when telemetryDrain is off.
 */

export type SkillsDrainWorker = {
  readonly running: boolean;
  start(): void;
  stop(): Promise<void>;
};

type CreateSkillsDrainWorkerParams = {
  intervalMs: number;
  shouldDrain: () => boolean;
  drainOnce: (options?: { signal?: AbortSignal }) => Promise<unknown>;
  onError?: (error: unknown) => void;
  /** Injected timer APIs for tests. */
  setIntervalFn?: typeof setInterval;
  clearIntervalFn?: typeof clearInterval;
};

export function createSkillsDrainWorker(
  params: CreateSkillsDrainWorkerParams,
): SkillsDrainWorker {
  const setIntervalFn = params.setIntervalFn ?? setInterval;
  const clearIntervalFn = params.clearIntervalFn ?? clearInterval;
  let timer: ReturnType<typeof setInterval> | null = null;
  let tickTail: Promise<void> = Promise.resolve();
  let stopped = true;
  let generation = 0;

  const runTick = (gen: number) => {
    if (stopped || gen !== generation) {
      return;
    }
    if (!params.shouldDrain()) {
      return;
    }
    const controller = new AbortController();
    const work = Promise.resolve()
      .then(() => params.drainOnce({ signal: controller.signal }))
      .then(
        () => undefined,
        (error: unknown) => {
          params.onError?.(error);
        },
      );
    tickTail = tickTail.then(
      () => work,
      () => work,
    );
  };

  return {
    get running() {
      return !stopped && timer !== null;
    },

    start() {
      if (!stopped && timer !== null) {
        return;
      }
      stopped = false;
      generation += 1;
      const gen = generation;
      timer = setIntervalFn(() => {
        runTick(gen);
      }, params.intervalMs);
      // Immediate first tick so operators do not wait a full interval after start.
      runTick(gen);
    },

    async stop() {
      stopped = true;
      generation += 1;
      if (timer !== null) {
        clearIntervalFn(timer);
        timer = null;
      }
      await tickTail;
    },
  };
}
