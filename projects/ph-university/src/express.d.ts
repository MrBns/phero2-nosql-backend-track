// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as express from "express";

declare global {
	namespace Express {
		interface Response {
			success(data: unknown, message: string, code: number): void;
			error(error?: unknown, message?: string, code?: number, type?: string): void;
		}
	}
}
