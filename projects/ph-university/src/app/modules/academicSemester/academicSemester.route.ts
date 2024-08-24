import { Router } from "express";
import * as academicSemesterController from "./academicSemester.controller";

const academicSemesterRoute = Router();

academicSemesterRoute.post("/create-academic-semester", academicSemesterController.$$createAcademicSemester);
academicSemesterRoute.get("/", academicSemesterController.$$getAllAcademicSemester);
academicSemesterRoute.get("/:semester_id", academicSemesterController.$$getSingleAcademicSemester);

export default academicSemesterRoute;
