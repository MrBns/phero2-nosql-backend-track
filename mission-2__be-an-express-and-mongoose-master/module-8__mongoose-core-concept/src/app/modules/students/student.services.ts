import { IStudent } from "./student.interface";
import StudentModel from "./student.model";

class StudentServices {
	async createStudentDB(student: IStudent) {
		const result = await StudentModel.create(student);
		return result;
	}

	async getAllStudent() {
		const result = await StudentModel.find();
		return result;
	}

	async getSingleStudent(studentId: string) {
		const result = await StudentModel.findById(studentId);
		return result;
	}
}

export default new StudentServices();
