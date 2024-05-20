import { Schema, model } from "mongoose";
import { IStudent, IUserName, IGuardian, ILocalGuardian } from "./student.interface";

const userNameSchema = new Schema<IUserName>({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	middleName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
});

const guardianSchema = new Schema<IGuardian>({
	fatherName: {
		type: String,
		required: true,
		trim: true,
	},
	fatherOccupation: {
		type: String,
		required: true,
		trim: true,
	},
	fatherContactNo: {
		type: String,
		required: true,
		trim: true,
	},
	motherName: {
		type: String,
		required: true,
		trim: true,
	},
	motherOccupation: {
		type: String,
		required: true,
		trim: true,
	},
	motherContactNo: {
		type: String,
		required: true,
		trim: true,
	},
});

const localGuardianSchema = new Schema<ILocalGuardian>({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	contactNo: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	occupation: {
		type: String,
		required: true,
		trim: true,
	},
});
const studentSchema = new Schema<IStudent>({
	name: userNameSchema,
	gender: ["male", "female"],

	dateOfBirth: { type: String },
	email: { type: String, required: true },
	contactNo: {
		type: String,
		required: true,
		trim: true,
	},
	emergencyContactNo: {
		type: String,
		required: true,
		trim: true,
	},
	bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
	permanentAddress: {
		type: String,
		required: true,
		trim: true,
	},
	presentAddress: {
		type: String,
		required: true,
		trim: true,
	},
	guardian: guardianSchema,
	localGuardian: localGuardianSchema,
	profileImg: { type: String },
	isActive: {
		type: String,
		enum: ["active", "blocked"],
	},
});

const StudentModel = model<IStudent>("Student", studentSchema);
export default StudentModel;
