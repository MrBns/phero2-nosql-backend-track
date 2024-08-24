import express from "express";
import cors from "cors";
import morgan from "morgan";
import globalErrorHandler from "../app/utils/errorHandler";
import httpStatus from "http-status";
import { $error } from "../app/utils/response";
import apiRouter from "./routes";
import extendExpressMiddleware from "../app/middleware/extendExpressMiddleware";

const app = express();

app.use([extendExpressMiddleware, cors(), morgan("dev"), express.json()]);

app.use("/api/v1", apiRouter);

app.get("/", (_, res) => res.send("ping pong"));

app.use("*", (req, res) => $error(res, { code: httpStatus.NOT_FOUND }));

// Global Error Handling
app.use(globalErrorHandler);

export default app;
