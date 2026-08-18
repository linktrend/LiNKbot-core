export function gitOutput(
  providerRoot: string,
  args: string[],
  options?: { encoding?: BufferEncoding; [key: string]: unknown },
): Buffer | string;

export function verifyProviderPins(selectedProviders?: string[]): {
  ok: true;
  providers: number;
};

export function isDirectExecution(moduleUrl: string, argv1: string | undefined): boolean;
