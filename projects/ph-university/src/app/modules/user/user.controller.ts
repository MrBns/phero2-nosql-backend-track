import { controller } from "../../utils/controller";
import { $success } from "../../utils/response";
import { createStudentUserValidationSchema } from "./user.validation";

export const createStudent$ = controller(async (req, res) => {
	$success(res, true);
}, createStudentUserValidationSchema);
