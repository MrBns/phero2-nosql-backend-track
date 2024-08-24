import { z } from "zod";

// Define Zod schemas for subdocuments

const usernameValidationSchema = z.object({
	firstName: z.string().max(20, "FirstName cannot be more than 20 characters").min(1, "firstName is required").trim(),
	middleName: z.string().trim().optional(),
	lastName: z.string().trim().min(1, "lastName is required"),
});

const guardianValidationSchema = z.object({
	fatherName: z.string().trim().min(1, "Father's name is required"),
	fatherOccupation: z.string().trim().min(1, "Father's occupation is required"),
	fatherContactNo: z.string().trim().min(1, "Father's contact number is required"),
	motherName: z.string().trim().min(1, "Mother's name is required"),
	motherOccupation: z.string().trim().min(1, "Mother's occupation is required"),
	motherContactNo: z.string().trim().min(1, "Mother's contact number is required"),
});

const localGuardianValidationSchema = z.object({
	name: z.string().trim().min(1, "Local guardian's name is required"),
	contactNo: z.string().trim().min(1, "Local guardian's contact number is required"),
	address: z.string().trim().min(1, "Local guardian's address is required"),
	occupation: z.string().trim().min(1, "Local guardian's occupation is required"),
});

// Define the main Zod schema

export const studentValidationSchema = z.object({
	id: z
		.string({
			invalid_type_error: "Id should be a string",
			required_error: "id is required",
		})
		.min(1, "Number Cannot be Empty")
		.optional(),
	name: usernameValidationSchema,
	gender: z.enum(["male", "female"], {
		errorMap: (issue) => ({ message: `Gender should be either 'male' or 'female'. '${issue}' is not supported` }),
	}),
	dateOfBirth: z.string().min(1, "Date of Birth is Required"),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	contactNo: z.string().trim().min(1, "Contact number is required"),
	emergencyContactNo: z.string().trim().min(1, "Emergency contact number is required"),
	bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
	permanentAddress: z.string().trim().min(1, "Permanent address is required"),
	presentAddress: z.string().trim().min(1, "Present address is required"),
	guardian: guardianValidationSchema,
	localGuardian: localGuardianValidationSchema,
	profileImg: z.string().optional(),
	isDeleted: z.boolean().default(false),
});
