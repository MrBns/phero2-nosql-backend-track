import { log } from "console";
import { Response } from "express";

/**
 * For Sending Structured SuccessResponse
 */
export function $success(response: Response, data:unknown = null, message = "Succussful Response", code = 200) {
	return response.status(code).json({
		success: true,
		error: false,
		code,
		message,
		data,
	});
}

/**
 * For Sending Structured Error Response
 */
export function $error(response: Response, data: unknown, message = "Succussful Response", code = 200) {
	return response.status(code).json({
		success: false,
		error: true,
		code,
		message,
		data,
	});
}
