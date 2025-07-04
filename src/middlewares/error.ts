import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ContollerType } from "../types/types.js";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err?.code === 11000) {
    const duplicateField = Object.keys(err.keyPattern || {})[0];
    res.status(400).json({
      success: false,
      message: `${duplicateField} already exist`,
    });
    return;
  }

  //Handles custom ErrorHandler
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
    return;
  }
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export const TryCatch =
  (func: ContollerType) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next));
  };
