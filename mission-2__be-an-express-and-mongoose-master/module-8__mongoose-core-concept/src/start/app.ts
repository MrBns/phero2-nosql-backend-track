import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import studentRouter from "../app/modules/students/student.route";
import { NextFunction } from "express-serve-static-core";

const app = express();

app.use([cors(), morgan("dev"), express.json()]);

//Applications Route;
app.use("/api/v1/students", studentRouter);

app.get("/", (_, res) => res.send("ping pong"));



// app.use((req:Request,res:Response,next:NextFunction)=>{
//     console.log(req.statusCode)
// })

// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
//     console.log(req.statusCode)
// 	console.log({ err });
// });

// app.on("error", (erro) => {
// 	console.log({ erro });
// });
export default app;
