import { Router } from "express";
import * as StudentController from "./student.controller";

const studentRouter = Router();

studentRouter.post("/create-student", StudentController.createStudent);
studentRouter.get("/get-students", StudentController.getAllStudent);
studentRouter.get("/get-student/:id", StudentController.getSingleStudent);

export default studentRouter;
