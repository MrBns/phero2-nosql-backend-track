import { Model } from "mongoose";

export interface IGuardian {
	fatherName: string;
	fatherOccupation: string;
	fatherContactNo: string;
	motherName: string;
	motherOccupation: string;
	motherContactNo: string;
}

export interface IUserName {
	firstName: string;
	middleName?: string;
	lastName: string;
}

export interface ILocalGuardian {
	name: string;
	occupation: string;
	contactNo: string;
	address: string;
}

export interface IStudent {
	id: number;
	name: IUserName;
	password: string;
	gender: "male" | "female";
	dateOfBirth: string;
	email: string;
	contactNo: string;
	emergencyContactNo: string;
	bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
	presentAddress: string;
	permanentAddress: string;
	guardian: IGuardian;
	localGuardian: ILocalGuardian;
	profileImg?: string;
	isActive?: "active" | "blocked";
	isDeleted: boolean;
}

// Methods

export interface IStudentMethods {
	isUserExist(id: number): Promise<IStudent | null>;
}

//Model
export interface IStudentModel extends Model<IStudent, Record<string, never>, IStudentMethods> {
	isUserExists(id: number): Promise<IStudent | null>;
}
