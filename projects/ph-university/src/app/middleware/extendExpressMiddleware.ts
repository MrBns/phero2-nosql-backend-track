import { NextFunction, Request, Response } from "express";

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

export default (req: Request, res: Response, next: NextFunction) => {
	try {
		res.success = function (data = null, message = "Succesful Response", code = 200) {
			this.status(code).send({
				type: getResultType(data),
				success: true,
				code,
				message,
				data,
			});
		};
		res.error = function (data = null, message = "Something Went Wrong", code = 500) {
			this.status(code).send({
				type: getResultType(data),
				success: true,
				code,
				message,
				data,
			});
		};

		next();
	} catch (e) {
		next(e);
	}
};
