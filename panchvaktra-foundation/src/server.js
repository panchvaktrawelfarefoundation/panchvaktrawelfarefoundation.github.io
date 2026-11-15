import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

// Server handler for TanStack Start SSR
const handler = createStartHandler((ctx) => {
  return defaultStreamHandler(ctx);
});

export default { fetch: handler };
