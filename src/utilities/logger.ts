export const reduxLogger = (payload: unknown, type: string) =>
  console.log(`Redux action ${type} called, with ${JSON.stringify(payload)}`);
