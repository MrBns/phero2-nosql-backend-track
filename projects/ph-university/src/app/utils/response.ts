import { Response } from "express";
import httpStatus from "http-status";

function getResultType(data: unknown): "array" | "object" | "string" | "null" | "unknown" {
	if (data === null || data === "undefined") {
		return "null";
	} else if (Array.isArray(data)) {
		return "array";
	} else if (typeof data === "string") {
		return "string";
	} else if (typeof data === "object") {
		return "object";
	} else {
		return "unknown";
	}
}

/**
 * For Sending Structured SuccessResponse
 */
export function $success(
	response: Response,
	data: unknown = null,
	message = "Successful Response",
	code = httpStatus.OK,
) {
	return response.status(code).json({
		type: getResultType(data),
		success: true,
		code,
		message,
		data,
	});
}

/**
 * For Sending Structured Error Response
 */
export function $error(response: Response, obj?: { error?: unknown; code?: number; message?: string; type?: string }) {
	return response.status(obj?.code || 500).json({
		type: obj?.type,
		success: false,
		code: obj?.code || 500,
		message: obj?.message || "Something Went Wrong",
		error: obj?.error || null,
	});
}
