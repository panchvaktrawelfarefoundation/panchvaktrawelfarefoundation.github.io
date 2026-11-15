import { createMiddleware } from "@tanstack/react-start";

export const errorCaptureFunctionMiddleware = createMiddleware({ type: "function" }).server(async ({ next }) => next());
export const errorCaptureRequestMiddleware = createMiddleware({ type: "request" }).server(async ({ next }) => next());
export function recordRouteError() {}
