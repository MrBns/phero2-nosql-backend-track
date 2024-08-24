import { Schema, model } from "mongoose";
import { IUser } from "./user.intereface";
import bcrypt from "bcrypt";
import config from "../../../config";

const userSchema = new Schema<IUser>(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		needsPasswordCHange: {
			type: Boolean,
			default: true,
		},
		role: {
			type: String,
			enum: ["admin", "student", "faculty"],
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		status: {
			type: String,
			enum: ["in-progress", "blocked"],
			default: "in-progress",
		},
	},
	{
		timestamps: true,
	},
);

userSchema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, Number(config.BCRYPT_SALT));
});

userSchema.post("save", async function (doc, next) {
	doc.password = "";
	next();
});

const UserModel = model("User", userSchema);
export default UserModel;
