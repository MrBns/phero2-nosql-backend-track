import { z } from "zod";
import RequestValidator from "../../utils/RequestValidator";
import {
	academicSemesterCodes,
	academicSemesterCodesCSV,
	academicSemesterNames,
	monthArr,
	monthsCSV,
} from "./academicSemester.constant";
import { isValidObjectId, ObjectId } from "mongoose";

export const createAcademicSemesterValidationSchema = RequestValidator({
	body: z.object({
		name: z.enum(academicSemesterNames, {
			required_error: "",
			invalid_type_error: "{VALUE} is not supported",
		}),
		code: z.enum(academicSemesterCodes, {
			required_error: "Code is required",
			invalid_type_error: `{VALUE} is not from [${academicSemesterCodesCSV}]`,
		}),
		startMonth: z.enum(monthArr, {
			required_error: "Start Month is required",
			invalid_type_error: `{VALUE} is not from [${monthsCSV}]`,
		}),
		endMonth: z.enum(monthArr, {
			required_error: "End Month is required",
			invalid_type_error: `{VALUE} is not from [${monthsCSV}]`,
		}),
		year: z.string({
			required_error: "Year is required",
			invalid_type_error: "Year must be a valid date",
		}),
	}),
});

export const getSingleAcademicSemesterValidator = RequestValidator({
	params: z.object({
		semester_id: z.custom<ObjectId>((val) => {
			return isValidObjectId(val);
		}, "Semester Id is required and must be a valid Object id"),
	}),
});

export const updateSingleAcademicSemesterValidator = RequestValidator({
	params: z.object({
		semester_id: z.custom<ObjectId>((val) => {
			return isValidObjectId(val);
		}, "Semester Id is required and must be a valid Object id"),
	}),

	body: z.object({
		name: z
			.enum(academicSemesterNames, {
				invalid_type_error: "{VALUE} is not supported",
			})
			.optional(),
		code: z
			.enum(academicSemesterCodes, {
				invalid_type_error: `{VALUE} is not from [${academicSemesterCodesCSV}]`,
			})
			.optional(),
		startMonth: z
			.enum(monthArr, {
				invalid_type_error: `{VALUE} is not from [${monthsCSV}]`,
			})
			.optional(),
		endMonth: z
			.enum(monthArr, {
				invalid_type_error: `{VALUE} is not from [${monthsCSV}]`,
			})
			.optional(),
		year: z
			.string({
				invalid_type_error: "Year must be a valid date",
			})
			.optional(),
	}),
});
