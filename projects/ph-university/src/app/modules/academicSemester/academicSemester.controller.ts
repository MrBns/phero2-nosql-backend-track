import { controller } from "../../utils/controller";
import * as academicSemesterValidator from "./academicSemester.validation";
import * as academicSemesterService from "./academicSemester.service";
import { $success } from "../../utils/response";

export const $$createAcademicSemester = controller(async (req, res) => {
	const result = await academicSemesterService.createAcademicSemesterIntoDb(req.body);
	return $success(res, result);
}, academicSemesterValidator.createAcademicSemesterValidationSchema);

export const $$getAllAcademicSemester = controller(async function (req, res) {
	const result = await academicSemesterService.getAllAcademicSemesterFromDb();
	return $success(res, result);
});

export const $$getSingleAcademicSemester = controller(async function (req, res) {
	const id = req.params.semester_id;
	const result = await academicSemesterService.getSingleAcademicSemesterFromDb(id);
	return $success(res, result);
}, academicSemesterValidator.getSingleAcademicSemesterValidator);

export const $$updateSingleAcademicSemester = controller(async function (req, res) {
	const id = req.params.semester_id;
	const body = req.body;
	const result = await academicSemesterService.updateSingleAcademicSemesterIntoDb(id, body);
	$success(res, result);

}, academicSemesterValidator.updateSingleAcademicSemesterValidator);
