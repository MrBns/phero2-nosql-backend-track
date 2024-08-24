import { Router } from "express";
import * as StudentController from "./student.controller";

const studentRouter = Router();

studentRouter.post("/create-student", StudentController.createStudent);
studentRouter.get("", StudentController.getAllStudent);
studentRouter.get("/:id", StudentController.getSingleStudent);
studentRouter.delete("/:id", StudentController.deleteSingleStudent);

export default studentRouter;
