import { Schema, model } from "mongoose";
import { IStudent, IUserName, IGuardian, ILocalGuardian, IStudentMethods, IStudentModel } from "./student.interface";
import bcrypt from "bcrypt";
import config from "../../../config";
import { boolean } from "zod";

const userNameSchema = new Schema<IUserName>({
	firstName: {
		type: String,
		required: [true, "firstName is required"],
		maxlength: [20, "FirstName cannot be more than 20 "],
		trim: true,
	},
	middleName: {
		type: String,
		trim: true,
	},
	lastName: {
		type: String,
		trim: true,
		required: [true, "lastName is required"],
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
const studentSchema = new Schema<IStudent, IStudentModel, IStudentMethods>(
	{
		id: {
			type: Number,
			require: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: userNameSchema,
			required: [true, "Name is Required"],
		},
		gender: {
			type: String,
			enum: {
				values: ["male", "female"],
				message: "Gender should be only be one following male or female. {VALUE} is not supported",
			},
			required: true,
		},

		dateOfBirth: { type: String },
		email: {
			type: String,
			required: [true, "Email is Required"],
			unique: true,
			lowercase: true,
		},
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
		bloodGroup: {
			type: "String",
			enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
		},
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
		guardian: {
			type: guardianSchema,
			required: true,
		},
		localGuardian: {
			type: localGuardianSchema,
			required: true,
		},
		profileImg: { type: String },
		isActive: {
			type: String,
			enum: ["active", "blocked"],
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
);

// Student Pre Middleware;

studentSchema.pre("save", async function () {
	// console.log(this, "Before Save Data");
	// Hashing Password;
	const password = this.password;
	const hashed_password = await bcrypt.hash(password, Number(config.BCRYPT_SALT));
	this.password = hashed_password;
});

studentSchema.post("save", function (doc) {
	doc.password = "";
});

// Query Middleware;
studentSchema.pre("find", function (next) {
	this.find({ isDeleted: { $ne: true } });
	next();
});

// Methods
studentSchema.methods["isUserExist"] = async function (id) {
	const existingUser = await StudentModel.findOne({ id: id });
	return existingUser;
};

//Statics Methods;
studentSchema.statics.isUserExists = async function (id: number) {
	const existingUser = await StudentModel.findOne({ id: id });
	return existingUser;
};

// Mongoose virtual;
studentSchema.virtual("fullName").get(function () {
	return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

const StudentModel = model<IStudent, IStudentModel>("Student", studentSchema);
export default StudentModel;
