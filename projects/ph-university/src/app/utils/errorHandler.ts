import { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";
import { ZodError } from "zod";
import StatusError from "./statusError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function globalErrorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
	const response: { type: string; success: false; message: string; error: unknown; code: number } = {
		success: false,
		message: "",
		error: err,
		code: 500,
		type: "internal",
	};

	// Checking Error Instance;
	// Error From Mongoose Error
	if (err instanceof MongooseError) {
		response.message = err.message;
		response.type = "MongooseError";
	}
	// Error From Unhandled Zod
	else if (err instanceof ZodError) {
		response.message = err.message.replace(/\n|\s+/gim, "");
		response.type = "ZodError";
		response.error = err.format();
	}
	// Error thrown with Status Code
	else if (err instanceof StatusError) {
		response.message = err.message.normalize();
		response.code = err.status;
		response.type = "StatusError";
	}
	// Usual Error thrown  // Will catch every error;
	else if (err instanceof Error) {
		response.message = err.message;
	}
	res.statusCode = response.code;
	res.json(response);
}
