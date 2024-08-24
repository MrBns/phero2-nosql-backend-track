import { Schema, model } from "mongoose";
import { IAcademicSemester } from "./academicSemester.interface";
import { academicSemesterCodes, academicSemesterNames, monthArr } from "./academicSemester.constant";
import StatusError from "../../utils/statusError";
import httpStatus from "http-status";

const academicSemesterSchema = new Schema<IAcademicSemester>(
	{
		code: {
			type: String,
			enum: academicSemesterCodes,
			required: true,
		},
		name: {
			type: String,
			required: true,
			enum: academicSemesterNames,
		},
		year: {
			type: String,
			required: true,
		},
		startMonth: {
			type: String,
			required: true,
			enum: monthArr,
		},
		endMonth: {
			type: String,
			required: true,
			enum: monthArr,
		},
	},
	{
		timestamps: true,
	},
);

academicSemesterSchema.pre("save", async function (next) {
	const isSemisterExist = await AcademicSemesterModel.findOne({
		name: this.name,
		year: this.year,
	});
	
	if (isSemisterExist) next(new StatusError("Semister Already exist", httpStatus.CONFLICT));
	else next();
});

const AcademicSemesterModel = model("academic-semester", academicSemesterSchema);
export default AcademicSemesterModel;
