import $safe from "../../utils/$safe";
import StudentServices from "./student.services";
import { $success } from "../../utils/response";

export const createStudent = $safe(async (req, res) => {
	const student = req.body;
	const result = await StudentServices.createStudentDB(student);
	return $success(res, result, "Student Crated Successfully");
});

export const getAllStudent = $safe(async (req, res) => {
	const result = await StudentServices.getAllStudent();
	$success(res, result, "Students Retrieved Successfully");
});

export const getSingleStudent = $safe(async function (req, res, next) {
	if (!req.params.id) throw new Error(`Please Send student id`);
	const result = await StudentServices.getSingleStudent(req.params.id);
	$success(res, result);
});
