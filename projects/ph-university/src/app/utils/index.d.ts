import { ZodType, ZodUndefined } from "zod";

export interface RequestValidatorType {
	body: ZodType | ZodUndefined;
	params: ZodType | ZodUndefined;
	query: ZodType | ZodUndefined;
}
