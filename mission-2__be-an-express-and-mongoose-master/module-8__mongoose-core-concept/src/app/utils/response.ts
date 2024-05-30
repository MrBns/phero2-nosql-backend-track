import { Response } from "express";

function getResultType(data: unknown): "array" | "object" | "string" | "null" | "unknown" {
	if (data === null || data === "undefined") {
		return "null";
	} else if (Array.isArray(data)) {
		return "array";
	} else if (typeof data === "object") {
		return "object";
	} else if (typeof data === "string") {
		return "string";
	} else {
		return "unknown";
	}
}

/**
 * For Sending Structured SuccessResponse
 */
export function $success(response: Response, data: unknown = null, message = "Succussful Response", code = 200) {
	return response.status(code).json({
		type: getResultType(data),
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
export function $error(response: Response, obj?: { data?: unknown; code?: number; message?: string; type?: string }) {
	return response.status(obj?.code || 500).json({
		type: "error",
		success: false,
		error: true,
		code: obj?.code || 500,
		message: obj?.message || "Something Went Wrong",
		data: obj?.data || null,
	});
}
