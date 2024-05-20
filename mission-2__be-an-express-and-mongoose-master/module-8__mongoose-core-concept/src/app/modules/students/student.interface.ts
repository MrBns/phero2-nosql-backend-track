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
	_id: string;
	name: IUserName;
	gender: "male" | "female";
	dateOfBirth: string;
	email: string;
	contactNo: string;
	emergencyContactNo: string;
	bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
	presentAddress: string;
	permanentAddress: string;
	guardian: IGuardian;
	localGuardian: ILocalGuardian;
	profileImg?: string;
	isActive: "active" | "blocked";
}
