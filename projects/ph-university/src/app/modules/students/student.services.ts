import { IStudent } from "./student.interface";
import StudentModel from "./student.model";

class StudentServices {
	async createStudentDB(data: IStudent) {
		const student = new StudentModel(data);

		if (await StudentModel.isUserExists(data.id)) {
			throw new Error("User Already Exist");
		}

		const result = await student.save();
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
	async deleteSingleStudent(studentId: string) {
		const result = await StudentModel.findByIdAndUpdate(
			studentId,
			{
				$set: {
					isDeleted: true,
				},
			},
			{
				new: true,
			},
		);
		return result;
	}
}

export default new StudentServices();
