import { NextFunction, Response as ExpressResponse, RequestHandler } from "express";
import { ZodEnum, ZodType, ZodUndefined, z } from "zod";
import { Request } from "express-serve-static-core";
import { RequestValidatorType } from ".";
import globalErrorHandler from "./errorHandler";

type Response = ExpressResponse;
type FromZ<T extends ZodType> = z.infer<T>;

type Params<T extends RequestValidatorType> = Exclude<FromZ<T["params"]>, undefined>;
type Body<T extends RequestValidatorType> = Exclude<FromZ<T["body"]>, undefined>;
type Query<T extends RequestValidatorType> = Exclude<FromZ<T["query"]>, undefined>;

/**
 * @param cb Express Request Response Handler
 * @param validator  Must be a Zod Validator which should be created by `RequestValidator` function;
 * @returns
 */
export function controller<Validator extends RequestValidatorType>(
	cb: RequestHandler<Params<Validator>, unknown, Body<Validator>, Query<Validator>>,
	validator?: Validator,
) {
	return async function (req: Parameters<typeof cb>["0"], res: Response, next: NextFunction) {
		try {
			if (validator) {
				await validateRequest(req, validator);
			}
			await Promise.resolve(cb(req, res, next));
		} catch (err) {
			return globalErrorHandler(err, req, res, next);
		}
	};
}

async function validateRequest(req: Request, schema?: RequestValidatorType) {
	if (schema) {
		if (!(schema.body instanceof ZodUndefined)) await schema.body.parseAsync(req.body); // Body Checking
		if (!(schema.params instanceof ZodUndefined)) await schema.params.parseAsync(req.params); // Params Checking
		if (!(schema.query instanceof ZodUndefined)) await schema.query.parseAsync(req.query); // Query Checking
	}
}
