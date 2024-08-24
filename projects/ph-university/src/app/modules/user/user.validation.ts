import { z } from "zod";
import { studentValidationSchema } from "../students/student.validation";
import RequestValidator from "../../utils/RequestValidator";

export const createStudentUserValidationSchema = RequestValidator({
	body: z.object({
		user: z.object({
			password: z
				.string({
					invalid_type_error: "Password should be String",
				})
				.min(8, "password need to at least 8 char")
				.max(30, "password cannot be more than 30 char")
				.optional(),
		}),
		student: studentValidationSchema,
	}),
	params: z.object({
		userId: z.string({
			required_error: "userId parameter is Required",
		}),
	}),
});

// const body: z.infer<(typeof createStudentUserValidationSchema)["params"]>;
