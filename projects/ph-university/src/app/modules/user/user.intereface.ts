import { Date } from "mongoose";

export interface IUser {
	id: string;
	password: string;
	needsPasswordCHange: boolean;
	role: "admin" | "student" | "faculty";
	isDeleted: boolean;
	createdAt: Date;
	updatedAt: Date;
	status: "block" | "in-progress";
}

export type TNewUser = Pick<IUser, "password" | "role" | "id">;
