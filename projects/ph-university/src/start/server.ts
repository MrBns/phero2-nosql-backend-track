import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "../config";
import logger, { error } from "../app/utils/logger";

export let server: Server;

async function main() {
	try {
		// eslint-disable-next-line no-console
		mongoose
			.connect(config.DB_URL)
			.then(() => logger("database connected "))
			.catch((e) => error(e));

		// eslint-disable-next-line no-console
		server = app.listen(config.PORT, () => console.log(`Listening... http://localhost:${config.PORT}`));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
}

main();
