import { Router } from "express";
import studentRouter from "../app/modules/students/student.route";
import userRouter from "../app/modules/user/user.route";
import academicSemesterRoute from "../app/modules/academicSemester/academicSemester.route";

const apiRouter = Router();

const apiRoutes = [
	{
		path: "/students",
		handler: studentRouter,
	},
	{
		path: "/users",
		handler: userRouter,
	},
	{
		path: "/academic-semesters",
		handler: academicSemesterRoute,
	},
];

apiRoutes.forEach((route) => {
	apiRouter.use(route.path, route.handler);
});

export default apiRouter;
