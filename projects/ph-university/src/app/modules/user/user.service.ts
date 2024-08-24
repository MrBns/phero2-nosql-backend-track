import { randomInt } from "crypto";
import config from "../../../config";
import { IStudent } from "../students/student.interface";
import StudentModel from "../students/student.model";
import { IUser } from "./user.intereface";
import UserModel from "./user.model";

class UserServices {
	// createUserIntoDB(user: IUser) {}

	async createStudentIntoDb(student: Omit<IStudent, "user" | "id">, password?: string) {
		const userData = <Partial<IUser>>{
			password: config.DEFAULT_PASS,
			needsPasswordCHange: false,
			role: "student",
			id: `${new Date().getFullYear()}${randomInt(1000, 9999)}`,
		};

		// If password is not given;
		if (password) userData.password = password;

		const createdUser = await UserModel.create(userData);

		// Student Data
		if (!createdUser) throw new Error("Failed to Generate User");
		const studentData = <IStudent>student;
		studentData.id = createdUser.id;
		studentData.user = createdUser._id;

		const createdStudent = await StudentModel.create(studentData);
		return {
			user: createdUser,
			student: createdStudent,
		};
	}
}

export default new UserServices();
