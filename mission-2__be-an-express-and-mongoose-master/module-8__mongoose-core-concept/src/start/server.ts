import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
import config from "../config";

export let server: Server;

async function main() {
	try {
		// eslint-disable-next-line no-console
		mongoose.connect(config.DB_URL).then(() => console.log("database connected"));

		// eslint-disable-next-line no-console
		server = app.listen(config.PORT, () => console.log(`Listening... http://localhost:${config.DB_URL}`));
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
}

main();
