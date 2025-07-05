import { RequestHandler } from "express";

export const wrapHandler = (handler: unknown): RequestHandler => {
  return handler as RequestHandler;
};
