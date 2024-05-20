import { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";

export type ControllerFunction<T = unknown> = (req: Request, res: Response, next?: NextFunction) => T;

export default function $safe(cb: ControllerFunction) {
	return function (req: Request, res: Response, next: NextFunction) {
		Promise.resolve(cb(req, res, next)).catch((e) => {
			const response = { code: 500, message: "", data: null };

			if (e instanceof MongooseError) {
				response.message = e.message;
				res.status(response.code).json(response);
			}
			// Normal Error.
			else if (e instanceof Error) {
				response.code = 500;
				response.message = e.message;
				res.status(response.code).json(response);
			} else {
				next(e);
			}
		});
	};
}
