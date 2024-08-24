import { Router } from "express";
import * as UserController from "./user.controller";

const userRouter = Router();

userRouter.post("/create-student", UserController.createStudent$);
// userRouter.get("/");
// userRouter.get("/:userId");
// userRouter.delete("/:userId");
// userRouter.put("/:userId");

export default userRouter;
