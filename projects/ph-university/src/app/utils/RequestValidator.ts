import { ZodSchema, z } from "zod";

const RequestValidator = function <Body extends ZodSchema, Param extends ZodSchema, Query extends ZodSchema>(obj: {
	body?: Body;
	params?: Param;
	query?: Query;
}) {
	const empty = () => z.undefined();

	return {
		body: obj.body instanceof ZodSchema ? obj.body : empty(),
		params: obj.params instanceof ZodSchema ? obj.params : empty(),
		query: obj.query instanceof ZodSchema ? obj.query : empty(),
	};
};

export default RequestValidator;
