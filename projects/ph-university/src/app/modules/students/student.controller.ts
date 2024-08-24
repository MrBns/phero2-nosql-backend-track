import safe$ from "../../utils/$safe";
import StudentServices from "./student.services";
import { $success } from "../../utils/response";
import { studentValidationSchema } from "./student.validation";

export const createStudent = safe$(async (req, res) => {
	//Data Validation using Zod;
	const parsedData = await studentValidationSchema.parseAsync(req.body);
	const result = await StudentServices.createStudentDB(parsedData);
	return $success(res, result, "Student Crated Successfully");
});

export const getAllStudent = safe$(async (req, res) => {
	const result = await StudentServices.getAllStudent();
	$success(res, result, "Students Retrieved Successfully");
});

export const getSingleStudent = safe$(async function (req, res) {
	if (!req.params.id) throw new Error(`Please Send student id`);
	const result = await StudentServices.getSingleStudent(req.params.id);
	$success(res, result);
});

export const deleteSingleStudent = safe$(async function (req, res) {
	if (!req.params.id) throw new Error(`Please Send student id`);
	const result = await StudentServices.deleteSingleStudent(req.params.id);
	$success(res, result);
});
