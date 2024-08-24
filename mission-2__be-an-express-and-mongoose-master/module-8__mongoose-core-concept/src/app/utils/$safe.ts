import { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";
import { ZodError } from "zod";
import { $error } from "./response";
import bcrypt from "bcrypt";

export type ControllerFunction<T = unknown> = (req: Request, res: Response, next?: NextFunction) => T;

export default function $safe(cb: ControllerFunction) {
	return (req: Request, res: Response, next?: NextFunction) => {
		Promise.resolve(cb(req, res, next)).catch((e): void => {
			const response = { code: 500, message: "", data: null, error: null };

			// Mongoose Error
			if (e instanceof MongooseError) {
				response.message = e.message;
				res.status(response.code).json(response);
			}
			// Zod Error
			else if (e instanceof ZodError) {
				$error(res, { message: e.message, data: e.flatten() });
			}
			// Normal Error.
			else if (e instanceof Error) {
				response.code = 500;
				response.message = e.message;
				res.status(response.code).json(response);
			} else {
				next?.(e);
			}
		});
	};
}
