import httpStatus from "http-status";

import StatusError from "../../utils/statusError";
import { academicSemesterNamesToCode } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import AcademicSemesterModel from "./academicSemester.model";
import { ObjectId } from "mongoose";

export const createAcademicSemesterIntoDb = async (payload: IAcademicSemester) => {
	if (academicSemesterNamesToCode[payload.name] !== payload.code) {
		throw new StatusError("Invalid Semester Status code", httpStatus.NOT_ACCEPTABLE);
	}
	const result = await AcademicSemesterModel.create(payload);
	return result;
};

export const getAllAcademicSemesterFromDb = async () => {
	const result = await AcademicSemesterModel.find({});
	return result;
};

export const getSingleAcademicSemesterFromDb = async (id: ObjectId) => {
	const result = await AcademicSemesterModel.findById(id);
	return result;
};

export const updateSingleAcademicSemesterIntoDb = async (id: ObjectId, payload: Partial<IAcademicSemester>) => {
	const result = await AcademicSemesterModel.findByIdAndDelete(id, {
		$set: {
			...payload,
		},
	});
	return result;
};
