import { createMiddleware } from "@tanstack/react-start";

export const authMiddleware = createMiddleware({ type: "function" }).server(({ next }) => next());
export const base44RequestMiddleware = createMiddleware({ type: "request" }).server(({ next }) => next());
export const requireUser = createMiddleware({ type: "function" }).server(({ next }) => next());
export const requireUserRoute = createMiddleware({ type: "request" }).server(({ next }) => next());
