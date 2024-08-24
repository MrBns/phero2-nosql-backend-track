import { NextFunction, Request, Response, RequestHandler } from "express";

export type ControllerFunction<T = unknown> = (req: Request, res: Response, next?: NextFunction) => T;

export default function safe$(fn: RequestHandler): RequestHandler {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch((e): void => {
			next(e);
		});
	};
}
